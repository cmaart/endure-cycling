export type Lang = 'en' | 'de';

export const siteUrl = 'https://www.endure-cycling.com';

/**
 * Build the internal href for `path` in `lang`.
 *
 * Every route on the site is served at a slash-terminated URL
 * (`trailingSlash: 'always'` + `build.format: 'directory'`), and GitHub Pages
 * answers the slash-less form with a 301 onto it. Internal links therefore have
 * to carry the slash, otherwise every click and every crawl pays a redirect hop.
 *
 * `path` is the locale-independent route ('/', '/guides', '/vs/zwift'), with an
 * optional hash ('/#faq'). Leading and trailing slashes are normalized away, so
 * callers can pass either form.
 */
export function localeHref(lang: Lang, path: string = '/'): string {
  const [rawPath, hash] = path.split('#');
  const route = rawPath.replace(/^\/+|\/+$/g, '');
  const joined = (lang === 'de' ? ['de', route] : [route]).filter(Boolean).join('/');
  const suffix = hash ? `#${hash}` : '';
  return joined ? `/${joined}/${suffix}` : `/${suffix}`;
}

/** Absolute form of {@link localeHref}, for canonical URLs and JSON-LD. */
export function localeUrl(lang: Lang, path: string = '/'): string {
  return `${siteUrl}${localeHref(lang, path)}`;
}

/**
 * Routes that exist in English only. They have no `/de` counterpart, so pages
 * on them must not advertise an hreflang pair — an `hreflang="de"` pointing at a
 * URL that 404s is a broken annotation, and Google reports it as one. The same
 * list drives the sitemap filter in `astro.config.mjs`.
 *
 * Currently empty: the legal pages (privacy, terms, imprint) used to be listed
 * here, but they all have `/de` translations now.
 */
export const englishOnlyRoutes: string[] = [];

/** Whether `basePath` (normalized, slash-free) has a German translation. */
export function hasGermanVersion(basePath: string): boolean {
  return !englishOnlyRoutes.includes(basePath);
}
