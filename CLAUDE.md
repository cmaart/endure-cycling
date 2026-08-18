# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **ENDURE**, an indoor cycling app available on iOS and Android (currently free, subscription planned). Desktop versions are not currently planned and the site must not mention them. Live at https://www.endure-cycling.com. Built with Astro 5 + Tailwind CSS v4, deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.

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

`src/config.ts` exports `config.platforms` — an object keyed by `ios`, `android`, `windows`, `macos`, each with `{ available: boolean, url: string | null }`. Components (`Hero.astro`, `Roadmap.astro`) read these flags to render official store badges and green ✅ "Available" cards. Windows/macOS entries exist in the config but are not rendered anywhere (desktop is not currently planned); `Roadmap.astro` lists only `ios` and `android` in its `platformOrder`. Flip `available`, set `url`, and re-add the platform to `platformOrder` (plus its `roadmap` translation keys) at platform launch — do not hardcode availability state in components. The `PlatformKey` type is exported for typed iteration.

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
