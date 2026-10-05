# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **ENDURE**, an indoor cycling app available on iOS and Android (ENDURE Premium subscription with a 14-day free trial, no payment details needed). A Windows version is planned for release in 2026 and is shown as planned on the roadmap, FAQ, comparison table and press fact sheet; macOS is not planned and the site must not mention it. Live at https://www.endure-cycling.com. Built with Astro 5 + Tailwind CSS v4, deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.

**Copy rule: never present ENDURE as a one-person project.** No "built by one person", "solo developer", "he develops everything himself", "no team" anywhere on the site. It undermines trust in a paid subscription. Naming the founder on `/about` and `/press` is fine; the framing is "developed in Austria", company voice ("we", "ENDURE"). Build trust with product facts instead: store ratings, real quotes, trainer compatibility, update cadence.

## Commands

- `npm run dev` — local dev server (Astro)
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the built site

There is no test suite, no linter, and no formatter configured. TypeScript uses `astro/tsconfigs/strict`.

## Architecture

### i18n is centralized, not file-routed for content

Astro's i18n config (`astro.config.mjs`) defines `en` (default, no prefix) and `de` (`/de` prefix), but **all translatable strings live in a single object** at `src/i18n/translations.ts` keyed by section (e.g. `hero`, `features`, `roadmap`). Components call `getTranslations(lang)` and read keys from the returned tree.

The `lang` flows top-down: `Layout.astro` resolves it from `Astro.props.lang ?? Astro.currentLocale ?? 'en'`. `src/pages/index.astro` is English; `src/pages/de/index.astro` is the same component tree wrapped in `<Layout lang="de">`. **When adding a new section/component, add the matching keys to both `en` and `de` in `translations.ts`** — there is no fallback per-key, only a whole-language fallback to `en`.

Long-form SEO content lives in sibling files with the same en/de convention: `src/i18n/vs.ts` (competitor comparison pages rendered by `components/VsPage.astro` → `/vs/zwift/`, `/vs/trainerroad/`) and `src/i18n/guides.ts` (training guides rendered by `components/GuidePage.astro` + `GuidesIndexPage.astro` → `/guides/*`). The sitemap is generated at build time by `@astrojs/sitemap`, so a new page under `src/pages/` needs no separate sitemap entry.

`src/pages/index.astro` contains an inline script that auto-redirects German browsers to `/de` (gated by a `preferredLang` localStorage key set by `LanguageSwitcher`).

### Per-platform availability

`src/config.ts` exports `config.platforms` — an object keyed by `ios`, `android`, `windows`, `macos`, each with `{ available: boolean, url: string | null }`. Components (`Hero.astro`, `Roadmap.astro`) read these flags to render official store badges and green ✅ "Available" cards. `Roadmap.astro` lists `ios`, `android` and `windows` in its `platformOrder`; Windows renders as a 📅 "Planned for 2026" card because `available` is false. The `macos` entry exists in the config but is not rendered anywhere (not planned). At Windows launch flip `available`, set `url` and change its `roadmap` status keys; for a new platform also add it to `platformOrder` (plus its `roadmap` translation keys) — do not hardcode availability state in components. The `PlatformKey` type is exported for typed iteration.

### Store links carry install attribution

`src/scripts/store-attribution.ts` (loaded once from `Layout.astro`) rewrites every App Store / Google Play link at runtime: it captures `utm_*` from the landing URL into `sessionStorage` (first touch per session) and appends `referrer=utm_…` for Play and `pt=…&ct=…` for Apple, so installs show up per campaign in Play Console (Acquisition → UTM) and App Store Connect (App Analytics → Campaigns). Visits without UTM are tagged `endure-cycling.com / website / organic / <path>`. The same script fires the GA4 `download_click` event (store, placement, campaign) — do not add per-component click trackers. Wrap badge groups in `data-placement="…"` to name the placement. The Apple provider token lives in `config.attribution.appleProviderToken`; until it is set, Apple ignores `ct`. Inbound campaign links (e.g. from events.endure-cycling.com) just need standard UTM params.

### Prices live in config

ENDURE Premium prices are set once in `config.pricing` in `src/config.ts`: the US price for `en`, the German price for `de`. They are maintained by hand, so update them there whenever the App Store Connect prices change. Copy uses `{monthly}`, `{annual}` and `{annualPerMonth}` placeholders, filled by `withPrices()` / `getPricing()` in `src/utils/prices.ts`. The same values feed the `SoftwareApplication` offer in `Layout.astro`. Never write a price into a translation string or a component.

The 14-day trial is app-managed and needs no payment details, so copy must not describe it as a store introductory offer.

### Every URL ends in a slash

`trailingSlash: 'always'` plus `build.format: 'directory'` means each route builds as `<route>/index.html`. GitHub Pages serves that at `/guides/` and answers `/guides` with a 301 onto it, so both spellings resolve and only one of them is canonical.

Never hand-write an internal path. `src/utils/paths.ts` exports `localeHref(lang, path)` for hrefs and `localeUrl(lang, path)` for absolute URLs in canonical tags and JSON-LD, and both put the `/de` prefix and the trailing slash on for you. A link written as `/guides` instead of `localeHref(lang, '/guides')` still works, but every click and every crawl of it spends a redirect hop.

`englishOnlyRoutes` in the same file lists the pages that have no German translation. It drives two things: the sitemap filter in `astro.config.mjs`, and whether `Layout.astro` emits an hreflang set at all. An English-only page gets none, because half a pair pointing at a URL that 404s is worse than no annotation.

### Layout owns SEO

`src/layouts/Layout.astro` emits canonical URL, hreflang (`en`/`de`/`x-default`), Open Graph, Twitter Card, and a `SoftwareApplication` JSON-LD block. Pages should pass `title`/`description` props rather than redefining `<head>` content.

### Styling

Tailwind v4 via the `@tailwindcss/vite` plugin. Global styles import in `src/layouts/Layout.astro` from `src/styles/global.css`. Inter font is loaded via `@fontsource/inter` imports in the layout frontmatter (weights 300–800).

### Static output

`output: 'static'` in `astro.config.mjs`. Deployment is the `dist/` artifact uploaded by the GitHub Pages action — no SSR, no API routes. `public/CNAME` pins the custom domain.
