# Design handoff: web app link + Training planning

Status: design approved for implementation, copy is placeholder (final copy is written separately).
Design canvas (source of truth for visuals): https://claude.ai/code/artifact/9acdc609-377e-4e0c-8e11-fa36f7c3ca08
Created: 2026-10-28

This folder is the brief for an agent that builds the four pieces below into the Astro site. Read `CLAUDE.md` and `CONTEXT.md` first; every rule there still applies (i18n in `src/i18n/*`, `localeHref`, no prices in strings, trailing slashes, no "solo developer" framing, positioning of the AI coach).

Files in this folder:

| File | What it is |
|---|---|
| `README.md` | This brief: scope, specs per piece, Tailwind mapping, task list, open questions |
| `copy.md` | All EN + DE strings, grouped by the translation key they should get |
| `reference/*.dc.html` | The design source from the canvas. Reference only: inline styles, `{{holes}}` and `/_blob/…` image URLs do not work in Astro. Read them for structure, spacing and colours, do not copy them into `src/` |
| `reference/canvas.json` | Board index of the canvas (sizes, which board shows which breakpoint) |

## Product facts the copy relies on

- ENDURE now also runs in the browser at `https://app.endure-cycling.com/`. The web app does everything except recording rides: AI coach and daily plan, training planning in the calendar, analysis, workout library and builder.
- Rides stay in the apps (iOS, Android, Windows). Same account, same subscription. Subscriptions are bought on iOS / Android only. On phones the web app first points people to the store app.
- **Training planning**: the coach plans the next one to two weeks in a calendar, aligned to the rider's goal event. The rider confirms every change. Per week: planned vs. done, a load forecast (CTL ramp rated "on track / too little / too much"), a short coach verdict, a "Plan with coach" button. Per session: a lighter and a harder alternative.
- Never claim fixed multi-month plans, virtual worlds or racing.

## Design tokens (already in `src/styles/global.css`)

Background `#FCFCFB`, cards white with `border-slate-200` (`#E5E5E1`), text `slate-900` (`#16181D`), secondary `slate-600` (`#5F646D`), accent `accent` (`#C2552B`, hover `accent-hover` `#A84620`), Sora as `font-sans`, IBM Plex Mono as `font-mono` (`.mono-label`). Buttons: `.btn-primary` (filled ink) and `.btn-secondary` (outline). Use `slate-600` instead of `slate-500` for small text where contrast matters (≥ 4.5:1).

New status colours used in the screenshots' surroundings only (chips on the page, not in the app): "on track" green `#0B6B4A` on `#E7F3EC`.

Browser-window icon (used for every web-app link, stroke, `currentColor`):

```html
<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path d="M6.5 6.5h.01M9 6.5h.01"/></svg>
```

## Shared groundwork (do first)

1. **Config, not hardcoded URLs.** Add `webApp: { url: 'https://app.endure-cycling.com/' }` to `config` in `src/config.ts`. Every link below reads it.
2. **Attribution + tracking.** Extend `src/scripts/store-attribution.ts` so links to the web app get the same treatment as store links: append `utm_source=endure-cycling.com&utm_medium=website&utm_campaign=<campaign or organic>&utm_content=<placement>` (keep first-touch UTM from the session if present) and fire a GA4 `web_app_click` event with `placement`. Do not add per-component click handlers (see `CLAUDE.md`). Placements: `header`, `header-strip`, `hero-web`, `footer-web`, `feature-hero`, `feature-cta`, `home-teaser`.
3. **One shared component** `src/components/WebAppLink.astro` (props: `lang`, `placement`, optional `class`) renders the quiet text link from piece 2. Reuse it in Hero, Footer, the feature page and the teaser.
4. Open the web app in a new tab (`target="_blank" rel="noopener"`), like the store badges.

## Piece 1: Header button (`src/components/Nav.astro`)

Order in the controls group: **EN/DE pill → web-app button → "Try free for 14 days"** (`.btn-primary`, stays the primary CTA, unchanged).

Label: EN **"Launch app"**, DE **"App starten"** (decided in review; the browser icon keeps it apart from the native apps). Screen-reader label: "Launch the ENDURE web app" / "ENDURE-Web-App starten".

The button changes form by breakpoint because the row does not fit both full labels plus the links below 1280 px:

| Width | Tailwind | Web-app control |
|---|---|---|
| ≥ 1280 | `xl:` | `.btn-secondary !px-5 !py-[11px] text-[15px] whitespace-nowrap` with icon (17 px) + label |
| 1024–1279 | `lg:` … `xl:hidden` | Icon-only square, 47×47 px, same border/background as `.btn-secondary`, `rounded-[14px]`, `aria-label` + `title` = full label |
| 640–1023 | `sm:` … `lg:hidden` | Same as ≥ 1280 but `!px-4` (desktop links are already in the scrolling strip here) |
| < 640 | `sm:hidden` | No button in the top row (unchanged: logo + language pill only). Add the web-app link as the **last item of the scrolling link strip**, icon (15 px) + label, same style as the other strip links |

Notes: the "Try free" CTA keeps `hidden sm:block`. Hover of the secondary button uses the existing `.btn-secondary:hover`. Boards on the canvas: `Header-1440`, `Header-1024`, `Header-768`, `Header-390` (each shows EN above DE).

## Piece 2: Web-app link under the store badges (`Hero.astro`, `Footer.astro`)

Text: EN **"Or open it in your browser"**, DE **"Oder direkt im Browser öffnen"**, followed by an arrow `→` in accent (`aria-hidden`, not part of the string).

Style (after review it was made more visible than first drafted, still a text link and not a button):

```html
<a class="inline-flex items-center gap-2 min-h-11 text-[15px] font-semibold text-slate-900">
  <!-- browser icon, w-[18px] h-[18px] -->
  <span class="underline decoration-accent/55 decoration-2 underline-offset-[5px]">…label…</span>
  <span aria-hidden="true" class="text-accent">→</span>
</a>
```

- **Hero:** inside the white CTA card, below the trial check list: `<div class="self-stretch border-t border-slate-100 pt-2 text-center">` + link (`placement="hero-web"`).
- **Footer `#download`:** directly under the badge row, `mt-4`, centred (`placement="footer-web"`).
- Badges on mobile stay stacked as today. Boards: `Download` (1440 EN), `Download-1440-DE`, `Download-390-DE`, `Download-390-EN`.

## Piece 3: Feature page `/features/training-planning/` (+ `/de/…`)

Lead feature, so it gets a richer layout than `FeaturePage.astro`. Board: `Main` (1440, EN; DE via the canvas Tweaks), `TrainingPlanning-390-DE`, `TrainingPlanning-390-EN`.

**Implementation shape (recommended):**

- Content in `src/i18n/features.ts` under a new key `'training-planning'` (add to `FeatureKey`). Keep all standard `FeatureContent` fields (`datePublished`, `dateModified`, `seoTitle`, `seoDescription`, `breadcrumb`, `h1`, `subtitle`, `directAnswer`, `sections`, `faq`, `related`, `ctaTitle`, `ctaBody`, …) so schema, sitemap `lastmod` and footer tooling keep working. Add optional fields for the richer layout: `eyebrow`, `heroImage`, `heroCaption`, `stepsTitle`, `steps[]`, `sections[].image`, `platforms` (the browser/app comparison). Strings are in `copy.md`.
- New component `src/components/TrainingPlanningPage.astro` (reuse the WebPage + FAQPage JSON-LD logic from `FeaturePage.astro`; consider extracting it into a helper instead of copying it).
- Route files `src/pages/features/training-planning.astro` and `src/pages/de/features/training-planning.astro`.

**Page structure, top to bottom:**

1. Breadcrumb (Home / Features / Training planning), `text-sm text-slate-600`.
2. Hero, centred, `max-w-[880px]`:
   - eyebrow pill (same as the home hero badge: `rounded-full border border-accent/35 bg-accent/[0.06]` + dot);
   - H1 `text-4xl md:text-6xl font-extrabold leading-[1.06] tracking-[-0.03em] text-balance`;
   - subtitle `text-lg md:text-xl font-medium text-slate-600`;
   - **direct answer** as a white card with a mono label "SHORT ANSWER" / "KURZ GESAGT" (`.mono-label`), body `text-[17px] leading-relaxed`. This is the featured-snippet target, keep it as real text;
   - store badges at `h-10` (`data-placement="feature-hero"`) + `WebAppLink` below.
3. **Calendar screenshot in a browser frame**, `max-w-[1200px]`, below the hero. The frame is CSS, not part of the image: `rounded-2xl border border-slate-200 bg-white overflow-hidden`, a 40 px top bar `bg-slate-50 border-b` with three grey dots and a centred address pill "app.endure-cycling.com" with a lock icon. The image inside is the real calendar screenshot **with the real browser chrome and extensions cropped away**. `<figcaption>` under it (text in `copy.md`).
4. "How it works": three step cards in a `grid md:grid-cols-3 gap-4` (mono number in accent, H3, body).
5. Four text + image sections, image side alternates (`lg:flex-row` / `lg:flex-row-reverse`), text `lg:basis-5/12`, image `lg:basis-7/12`, `gap-8 lg:gap-16`, `py-12 md:py-20`, `border-t border-slate-100` between them. On mobile: text first, image below. Each has H2, body, 2–3 check bullets (same check icon as `FeaturePage`):
   1. Planned vs. done per week → crop: two week rows with planned/done bars, verdict chip, coach verdict line
   2. Load forecast → crop: CTL chart with forecast and the three-state legend
   3. Plan with coach → crop: week header with the button + the coach's proposal with Accept / Discard
   4. Lighter / harder alternatives → crop: session card with the three variants
6. "Plan in the browser, ride in the app": H2 + body, then two cards side by side (`md:grid-cols-2`): "Web app in the browser" (browser icon) and "ENDURE app for iOS, Android, Windows" (phone icon in accent), each a check list; a note line below about buying on iOS/Android.
7. FAQ: H2 + six cards in `md:grid-cols-2`, each `bg-white border rounded-2xl p-6`, question as H3. Same FAQPage JSON-LD as other feature pages.
8. CTA card (`.card-surface`): H2, body, store badges `h-12` (`data-placement="feature-cta"`), `WebAppLink` below.
9. Related links as pills (`min-h-11 rounded-full border bg-white text-accent-hover font-semibold`), then "← Back to Homepage".

**Images** (replace every "Screenshot placeholder" / "Crop placeholder" from the canvas; the canvas draws simplified stand-ins because the real screenshots were not available):

| File (suggested) | Content | Use |
|---|---|---|
| `public/assets/web-app/calendar.webp` | Full calendar view, 2 weeks, chrome cropped, ~2400 px wide | Hero frame |
| `public/assets/web-app/crop-week-row.webp` | Week rows with planned/done + verdict | Section 1, home teaser |
| `public/assets/web-app/crop-load-forecast.webp` | Load forecast with on track / too little / too much | Section 2 |
| `public/assets/web-app/crop-plan-with-coach.webp` | "Plan with coach" button + proposal | Section 3 |
| `public/assets/web-app/crop-session-alternatives.webp` | Session with lighter / harder | Section 4 |

Crops sit in a `rounded-2xl border border-slate-200 bg-white` card. Always set `width`/`height`, `loading="lazy"` below the hero, descriptive `alt` per language (add `alt` strings to the content). Optional: make the hero image open the existing `Lightbox.astro`.

**Site wiring for the new page:**

- Footer feature column: add `footer.featureTrainingPlanning` ("Training planning" / "Trainingsplanung") right after the AI coach link.
- `public/llms.txt`: add a line under Product, and update the summary paragraph (it currently says "no fixed multi-week plans"; keep that, add the rolling 1–2 week planning and the web app).
- `datePublished` / `dateModified` = ship date. Sitemap is automatic.
- Link the new page from `/features/ai-coach/` related links.

## Piece 4: Homepage teaser (optional, recommended)

New `src/components/TrainingPlanningTeaser.astro`, placed in `src/pages/index.astro` and `src/pages/de/index.astro` **directly after `<GuidanceFeature />` (AI coach) and before `<Proof />`**. Reason: planning reads as the next step of the daily coach, and the existing features grid stays untouched. One compact card, no extra section heading.

Layout: `container mx-auto px-6`, card `max-w-5xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12`. Left: eyebrow like `GuidanceFeature` (40 px accent line + mono text), H2 `text-3xl md:text-[46px] font-extrabold tracking-[-0.03em]`, body, three chip `li`s, then the link "How training planning works →" (`text-accent-hover font-semibold`, to `/features/training-planning/`) and the `WebAppLink` (shortened label "Also in your browser" / "Auch im Browser", `placement="home-teaser"`). Right: `crop-week-row.webp`. Keys under `trainingPlanningTeaser` in `translations.ts` (see `copy.md`). Boards: `Teaser` (1440, EN), `Teaser-390-DE`.

## Consistency updates required by the positioning rule

`CLAUDE.md` currently says the coach "plans one day at a time" and that the site must not describe fixed multi-week plans. Training planning changes the first part. When this ships, update in the same change:

- `CLAUDE.md` → Positioning paragraph: the coach plans the day **and** a rolling one-to-two-week window in the calendar, confirmed by the rider; still no fixed multi-month plans. Add the web app to the Project paragraph and the platform section (it is not a store platform, so it does not belong in `config.platforms`).
- `/features/ai-coach/` (`features.ts`, key `ai-coach`): the direct answer says "The coach does not write a fixed multi-week plan; it decides one day at a time". Rephrase and link to the new page.
- Home FAQ, comparison table, `/about` ("Where ENDURE is heading"), vs pages ("Daily coaching" row), `SoftwareApplication` schema (`featureList`) and `public/llms.txt`.
- `CONTEXT.md` glossary: add **Training planning / Trainingsplanung**, **Web app / Web-App**, **Plan with coach / Mit Coach planen**, **Load forecast / Belastungsprognose**, the three verdict states (**On track / Im Plan**, **Too little / Zu wenig**, **Too much / Zu viel**), with an "avoid" note for "training plan" in the sense of a fixed program.
- Bump `dateModified` on every page whose copy changes.

## Open questions (resolve before publishing copy)

1. Does training planning need a goal event, and what happens without one? (FAQ 5 is a placeholder.)
2. Is training planning part of ENDURE Premium, and is it in the trial? (FAQ 6 is a placeholder.)
3. Is training planning (calendar, "Plan with coach") also available in the iOS / Android / Windows apps, or only in the web app? The copy currently avoids saying either.
4. Final copy for all strings in `copy.md` (current text is placeholder in the right tone).
5. The two real screenshots (calendar, Today) and the four crops.

Do not ship any string that still contains `[Placeholder…]` / `[Platzhalter…]`.

## Acceptance checklist

- [ ] `npm run build` passes; both `/features/training-planning/` and `/de/features/training-planning/` exist with trailing slashes and hreflang pairs.
- [ ] All new strings live in `src/i18n/*` for **en and de**; no hardcoded internal paths (`localeHref`), no hardcoded web-app URL (`config.webApp.url`), no prices in strings.
- [ ] Header checked at 390, 640, 768, 1024, 1279, 1280, 1440 px in EN and DE: nothing wraps or overflows, the "Try free" CTA stays the most prominent control.
- [ ] No horizontal scroll at 390 px on any new or changed section; German strings (~20 % longer) fit.
- [ ] Touch targets ≥ 44 px for the web-app link, icon-only button and strip item.
- [ ] Web-app links carry UTM + fire `web_app_click` with the right placement.
- [ ] Screenshot crops have real `alt` text in both languages; no text baked into images that is needed for SEO.
- [ ] `public/llms.txt`, footer, `CLAUDE.md`, `CONTEXT.md` and the AI coach page updated as listed above.
