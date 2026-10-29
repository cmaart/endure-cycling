# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **ENDURE**, an indoor cycling app available on iOS, Android and Windows, plus a web app at https://app.endure-cycling.com/ (`config.webApp.url`; everything except recording rides, sells nothing, not a store platform, so it stays out of `config.platforms`) (ENDURE Premium subscription with a 14-day free trial, no payment details needed). Windows is live in the Microsoft Store since 2026-10-15 (`https://apps.microsoft.com/detail/9P3LBDT9B17W`); the hero shows the official Microsoft Store badge, but the Windows app sells nothing, so pricing copy keeps pointing at the App Store / Google Play; macOS is not planned and the site must not mention it. Live at https://www.endure-cycling.com. Built with Astro 5 + Tailwind CSS v4, deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.

**Copy rule: never present ENDURE as a one-person project.** No "built by one person", "solo developer", "he develops everything himself", "no team" anywhere on the site. It undermines trust in a paid subscription. Naming the founder on `/about` and `/press` is fine; the framing is "developed in Austria", company voice ("we", "ENDURE"). Build trust with product facts instead: store ratings, real quotes, trainer compatibility, update cadence.

**Positioning (since 2026-10-18, training planning since 2026-10-28): the AI coach is the lead feature and the product direction.** The coach plans each day from the rider's rides and a morning check-in (one workout, two alternatives, the reason), is changeable in chat, builds workouts from text and reviews every ride. On request ("Plan with coach") it also drafts the coming weeks in the calendar, aimed at a goal event if the rider has one; the rider applies each draft, and the plan does not adjust by itself (each morning the coach may propose one change to today's session). The site must not describe fixed multi-month plans and must not say ENDURE has "no automated training" either. Training planning is in early access (switched on per rider via the in-app roadmap), which `/features/training-planning/` states in its FAQ. Since 2026-10-28 the homepage leads with it: hero headline "Stop guessing. / Train with a personalized plan." (DE "Schluss mit Raten. / Trainier nach deinem persönlichen Plan."), the AI coach section (`CoachSection.astro`, since 2026-10-29) is the first section after the hero, in three steps: Week planner, Plan with coach, every session explained, with daily guidance as a callout in the last step (there is no separate daily guidance section any more), and the carousel centres the AI coaching screen. Never name the planning horizon as a number ("two weeks", "one to two weeks"): it is a product setting that will change, so copy says "the coming weeks". FTP and VO2max without a test moved to the subline; the OG image, the press key visuals and the home `seo.title` still carry the old "no FTP test" claim. Virtual worlds and racing are explicitly not planned. The canonical copy is `/features/ai-coach/` and `/features/training-planning/` (`src/i18n/features.ts`, keys `ai-coach`, `training-planning`; the latter renders through `TrainingPlanningPage.astro` with screenshots from `src/webAppImages.ts`, which the homepage coach section shares). Site vocabulary (Week planner, load forecast, Plan with coach, daily guidance) is defined in `CONTEXT.md`; the home FAQ, the comparison table, `/about` ("Where ENDURE is heading"), the vs pages ("Daily coaching" row), the `SoftwareApplication` schema and `public/llms.txt` all carry the same framing. Keep them consistent when the coach changes.

## Commands

- `npm run dev` — local dev server (Astro)
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the built site

There is no test suite, no linter, and no formatter configured. TypeScript uses `astro/tsconfigs/strict`.

## Architecture

### i18n is centralized, not file-routed for content

Astro's i18n config (`astro.config.mjs`) defines `en` (default, no prefix) and `de` (`/de` prefix), but **all translatable strings live in a single object** at `src/i18n/translations.ts` keyed by section (e.g. `hero`, `features`, `faq`). Components call `getTranslations(lang)` and read keys from the returned tree.

The `lang` flows top-down: `Layout.astro` resolves it from `Astro.props.lang ?? Astro.currentLocale ?? 'en'`. `src/pages/index.astro` is English; `src/pages/de/index.astro` is the same component tree wrapped in `<Layout lang="de">`. **When adding a new section/component, add the matching keys to both `en` and `de` in `translations.ts`** — there is no fallback per-key, only a whole-language fallback to `en`.

Long-form SEO content lives in sibling files with the same en/de convention: `src/i18n/vs.ts` (competitor comparison pages rendered by `components/VsPage.astro` → `/vs/zwift/`, `/vs/trainerroad/`, `/vs/rouvy/`, `/vs/mywhoosh/`, `/vs/wahoo-systm/`, `/vs/trainingpeaks-virtual/`; `vsKeys` lists them in footer order), `src/i18n/features.ts` (`/features/*`) and `src/i18n/guides.ts` (training guides rendered by `components/GuidePage.astro` + `GuidesIndexPage.astro` → `/guides/*`). The sitemap is generated at build time by `@astrojs/sitemap`, so a new page under `src/pages/` needs no separate sitemap entry.

Every vs, feature and guide entry carries `datePublished` / `dateModified`. They feed a dated `WebPage` / `Article` JSON-LD block, the visible "Updated" line on vs pages and the sitemap `<lastmod>` (see `astro.config.mjs`). Bump `dateModified` whenever the copy changes; a new comparison page needs a route file under both `src/pages/vs/` and `src/pages/de/vs/`, its key in `vsKeys`, a footer label in `translations.ts` and a line in `public/llms.txt`.

### llms.txt and the German redirect

`public/llms.txt` is a hand-maintained index for AI crawlers and lists every public page; add new pages there too. The former `/changelog/` page was removed on 2026-10-28 (`redirects` in `astro.config.mjs` send it to the homepage).

`src/pages/index.astro` contains an inline script that auto-redirects German browsers to `/de` (gated by a `preferredLang` localStorage key set by `LanguageSwitcher`).

### Per-platform availability

`src/config.ts` exports `config.platforms` — an object keyed by `ios`, `android`, `windows`, `macos`, each with `{ available: boolean, url: string | null }`. `Hero.astro` and the shared `StoreBadges.astro` (used by the footer CTA, feature/guide/trainer/vs pages and `/press`) read these flags to render the official store badges; all three of `ios`, `android` and `windows` are available. The `macos` entry exists in the config but is not rendered anywhere (not planned). The former "Available now" roadmap section was removed on 2026-10-17 once every platform had shipped. The Microsoft Store badges (`public/assets/badges/microsoft-store-badge{,-de}.svg`) are Microsoft's official dark badges from `get.microsoft.com/images/`. For a new platform add its badge to `StoreBadges.astro` and `Hero.astro` plus `hero.*BadgeAlt` translation keys — do not hardcode availability state in components. The `PlatformKey` type is exported for typed iteration.

### Store links carry install attribution

`src/scripts/store-attribution.ts` (loaded once from `Layout.astro`) rewrites every App Store / Google Play link at runtime: it captures `utm_*` from the landing URL into `sessionStorage` (first touch per session) and appends `referrer=utm_…` for Play and `pt=…&ct=…` for Apple, so installs show up per campaign in Play Console (Acquisition → UTM) and App Store Connect (App Analytics → Campaigns). Visits without UTM are tagged `endure-cycling.com / website / organic / <path>`. The same script fires the GA4 `download_click` event (store, placement, campaign) and, for every link to the web app, `web_app_click` (placement, no URL decoration) — do not add per-component click trackers. Web app links go through `WebAppLink.astro` (or carry `data-placement` themselves, as in `Nav.astro`). Wrap badge groups in `data-placement="…"` to name the placement. The Apple provider token lives in `config.attribution.appleProviderToken`; until it is set, Apple ignores `ct`. Inbound campaign links (e.g. from events.endure-cycling.com) just need standard UTM params.

### Prices live in config

ENDURE Premium prices are set once in `config.pricing` in `src/config.ts`: the US price for `en`, the German price for `de`. They are maintained by hand, so update them there whenever the App Store Connect prices change. Copy uses `{monthly}`, `{annual}` and `{annualPerMonth}` placeholders, filled by `withPrices()` / `getPricing()` in `src/utils/prices.ts`. The same values feed the `SoftwareApplication` offer in `Layout.astro`. Never write a price into a translation string or a component.

The 14-day trial is app-managed and needs no payment details, so copy must not describe it as a store introductory offer.

### Every URL ends in a slash

`trailingSlash: 'always'` plus `build.format: 'directory'` means each route builds as `<route>/index.html`. GitHub Pages serves that at `/guides/` and answers `/guides` with a 301 onto it, so both spellings resolve and only one of them is canonical.

Never hand-write an internal path. `src/utils/paths.ts` exports `localeHref(lang, path)` for hrefs and `localeUrl(lang, path)` for absolute URLs in canonical tags and JSON-LD, and both put the `/de` prefix and the trailing slash on for you. A link written as `/guides` instead of `localeHref(lang, '/guides')` still works, but every click and every crawl of it spends a redirect hop.

`englishOnlyRoutes` in the same file lists the pages that have no German translation. It drives two things: the sitemap filter in `astro.config.mjs`, and whether `Layout.astro` emits an hreflang set at all. An English-only page gets none, because half a pair pointing at a URL that 404s is worse than no annotation. The list is empty since 2026-10-17 (the legal pages got German versions); when adding a new English page, either add its `/de` twin in the same commit or list the route here until you do. The footer links the legal pages per locale.

### Layout owns SEO

`src/layouts/Layout.astro` emits canonical URL, hreflang (`en`/`de`/`x-default`), Open Graph, Twitter Card, and a `SoftwareApplication` JSON-LD block. Pages should pass `title`/`description` props rather than redefining `<head>` content.

### Social preview image

`Layout.astro` points `og:image` / `twitter:image` at `public/assets/og/endure-og.jpg` (1200×630, with a `?v=N` cache-buster). The source is `scripts/og/og-image.html`: serve the repo root over HTTP, screenshot the page in a headless browser at 1200×630, then run `node scripts/og/compress.cjs`. Bump `v` in `Layout.astro` after every change, otherwise WhatsApp, iMessage and LinkedIn keep serving the old cached preview. Pages can pass their own absolute `ogImage` prop.

### Styling

Tailwind v4 via the `@tailwindcss/vite` plugin. Global styles import in `src/layouts/Layout.astro` from `src/styles/global.css`. Inter font is loaded via `@fontsource/inter` imports in the layout frontmatter (weights 300–800).

### Static output

`output: 'static'` in `astro.config.mjs`. Deployment is the `dist/` artifact uploaded by the GitHub Pages action — no SSR, no API routes. `public/CNAME` pins the custom domain.
