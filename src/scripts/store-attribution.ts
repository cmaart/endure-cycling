/**
 * Install attribution for App Store / Google Play links.
 *
 * 1. Captures `utm_*` params from the landing URL into sessionStorage
 *    (first touch wins for the session), so the campaign survives navigation
 *    between pages until the visitor actually clicks a store badge.
 * 2. Rewrites every store link on the page so the campaign reaches the store:
 *    - Google Play: `referrer=utm_source=…&utm_campaign=…` → visible in
 *      Play Console (Acquisition → UTM) and readable in-app via the
 *      Install Referrer API.
 *    - App Store: `pt=<provider token>&ct=<campaign>` → visible in App Store
 *      Connect → App Analytics → Campaigns. Needs `config.attribution.appleProviderToken`.
 * 3. Sends a GA4 `download_click` event with store + campaign for every badge
 *    click (replaces the former per-component click handlers), and a
 *    `web_app_click` event for every link to the web app (`config.webApp.url`).
 *
 * Without UTM params the visit is attributed as organic website traffic
 * (`utm_source=endure-cycling.com`, `utm_medium=website`, `utm_campaign=organic`)
 * with the current path as `utm_content`, so direct site installs are still
 * distinguishable from everything else in the store consoles.
 */
import { config } from '../config';

const STORAGE_KEY = 'endure.attribution.v1';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
type UtmKey = (typeof UTM_KEYS)[number];
type Utm = Partial<Record<UtmKey, string>>;

const APPLE_HOST = 'apps.apple.com';
const PLAY_HOST = 'play.google.com';
const MS_HOST = 'apps.microsoft.com';

function readStored(): Utm | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Utm) : null;
  } catch {
    return null;
  }
}

function store(utm: Utm): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {
    /* storage blocked: attribution falls back to current URL only */
  }
}

function fromLocation(): Utm | null {
  const params = new URLSearchParams(location.search);
  const utm: Utm = {};
  for (const key of UTM_KEYS) {
    const v = params.get(key);
    if (v) utm[key] = v.slice(0, 100);
  }
  return utm.utm_source ? utm : null;
}

/** Resolve the campaign for this session: landing UTM > stored UTM > organic default. */
function resolveUtm(): Required<Pick<Utm, 'utm_source' | 'utm_medium' | 'utm_campaign' | 'utm_content'>> & Utm {
  const stored = readStored();
  const current = fromLocation();
  const utm = stored ?? current;
  if (!stored && current) store(current);

  return {
    utm_source: utm?.utm_source ?? 'endure-cycling.com',
    utm_medium: utm?.utm_medium ?? 'website',
    utm_campaign: utm?.utm_campaign ?? 'organic',
    utm_content: utm?.utm_content ?? location.pathname,
    ...(utm?.utm_term ? { utm_term: utm.utm_term } : {}),
  };
}

/**
 * Apple `ct` allows [A-Za-z0-9_-], max 40 chars. Host-like sources are reduced
 * to their first label ("events.endure-cycling.com" → "events", own domain → "web")
 * so campaign and content survive the length limit.
 */
function appleCampaignToken(utm: Utm): string {
  const source = utm.utm_source === 'endure-cycling.com' ? 'web' : (utm.utm_source ?? '').split('.')[0];
  const content = (utm.utm_content ?? '').replace(/^\/+|\/+$/g, '').replace(/\//g, '-');
  const raw = [source, utm.utm_campaign, content].filter(Boolean).join('_');
  return raw.replace(/[^A-Za-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40) || 'organic';
}

function decorate(anchor: HTMLAnchorElement, utm: Utm): 'ios_app_store' | 'google_play_store' | 'microsoft_store' | null {
  let url: URL;
  try {
    url = new URL(anchor.href);
  } catch {
    return null;
  }

  if (url.hostname.endsWith(PLAY_HOST)) {
    const referrer = new URLSearchParams();
    for (const key of UTM_KEYS) {
      const v = utm[key];
      if (v) referrer.set(key, v);
    }
    url.searchParams.set('referrer', referrer.toString());
    anchor.href = url.toString();
    return 'google_play_store';
  }

  if (url.hostname.endsWith(APPLE_HOST)) {
    const pt = config.attribution.appleProviderToken;
    if (pt) url.searchParams.set('pt', pt);
    url.searchParams.set('ct', appleCampaignToken(utm));
    url.searchParams.set('mt', '8');
    anchor.href = url.toString();
    return 'ios_app_store';
  }

  if (url.hostname.endsWith(MS_HOST)) {
    // Partner Center → Acquisitions → Campaigns reports installs per `cid`.
    url.searchParams.set('cid', appleCampaignToken(utm));
    anchor.href = url.toString();
    return 'microsoft_store';
  }

  return null;
}

function placementOf(anchor: HTMLElement): string {
  const tagged = anchor.closest<HTMLElement>('[data-placement]');
  if (tagged?.dataset.placement) return tagged.dataset.placement;
  const container = anchor.closest<HTMLElement>('header, footer, section[id], nav');
  if (!container) return 'page';
  return container.id || container.tagName.toLowerCase();
}

function trackClick(label: string, placement: string, utm: Utm): void {
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== 'function') return;
  w.gtag('event', 'download_click', {
    event_category: 'engagement',
    event_label: label,
    store: label,
    placement,
    campaign_source: utm.utm_source,
    campaign_medium: utm.utm_medium,
    campaign_name: utm.utm_campaign,
    campaign_content: utm.utm_content,
    value: 1,
  });
}

/**
 * Web app links get no URL decoration (the web app reads no campaign params),
 * only the GA4 `web_app_click` event with the placement.
 */
function trackWebAppClick(placement: string, utm: Utm): void {
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== 'function') return;
  w.gtag('event', 'web_app_click', {
    event_category: 'engagement',
    placement,
    campaign_source: utm.utm_source,
    campaign_medium: utm.utm_medium,
    campaign_name: utm.utm_campaign,
    campaign_content: utm.utm_content,
  });
}

function init(): void {
  const utm = resolveUtm();
  const anchors = document.querySelectorAll<HTMLAnchorElement>(
    `a[href*="${APPLE_HOST}"], a[href*="${PLAY_HOST}"], a[href*="${MS_HOST}"]`,
  );
  anchors.forEach((anchor) => {
    const label = decorate(anchor, utm);
    if (!label) return;
    anchor.addEventListener('click', () => trackClick(label, placementOf(anchor), utm));
  });

  const webAppHost = new URL(config.webApp.url).hostname;
  document.querySelectorAll<HTMLAnchorElement>(`a[href*="${webAppHost}"]`).forEach((anchor) => {
    anchor.addEventListener('click', () => trackWebAppClick(placementOf(anchor), utm));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
