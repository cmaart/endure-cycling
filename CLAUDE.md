# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **ENDURE**, an indoor cycling app available on iOS and Android (currently free, subscription planned), with Windows and macOS planned. Live at https://www.endure-cycling.com. Built with Astro 5 + Tailwind CSS v4, deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `master`.

## Commands

- `npm run dev` — local dev server (Astro)
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the built site

There is no test suite, no linter, and no formatter configured. TypeScript uses `astro/tsconfigs/strict`.

## Architecture

### i18n is centralized, not file-routed for content

Astro's i18n config (`astro.config.mjs`) defines `en` (default, no prefix) and `de` (`/de` prefix), but **all translatable strings live in a single object** at `src/i18n/translations.ts` keyed by section (e.g. `hero`, `features`, `roadmap`). Components call `getTranslations(lang)` and read keys from the returned tree.

The `lang` flows top-down: `Layout.astro` resolves it from `Astro.props.lang ?? Astro.currentLocale ?? 'en'`. `src/pages/index.astro` is English; `src/pages/de/index.astro` is the same component tree wrapped in `<Layout lang="de">`. **When adding a new section/component, add the matching keys to both `en` and `de` in `translations.ts`** — there is no fallback per-key, only a whole-language fallback to `en`.

Long-form SEO content lives in sibling files with the same en/de convention: `src/i18n/vs.ts` (competitor comparison pages rendered by `components/VsPage.astro` → `/vs/zwift`, `/vs/trainerroad`) and `src/i18n/guides.ts` (training guides rendered by `components/GuidePage.astro` + `GuidesIndexPage.astro` → `/guides/*`). New pages must also be added to the hand-maintained `public/sitemap.xml` (with hreflang alternates).

`src/pages/index.astro` contains an inline script that auto-redirects German browsers to `/de` (gated by a `preferredLang` localStorage key set by `LanguageSwitcher`).

### Per-platform availability

`src/config.ts` exports `config.platforms` — an object keyed by `ios`, `android`, `windows`, `macos`, each with `{ available: boolean, url: string | null }`. Components (`Hero.astro`, `Roadmap.astro`) read these flags to render store badges + green ✅ "Available" cards versus blue 📅 "Planned" cards. Flip `available` and set `url` at platform launch — do not hardcode availability state in components. The `PlatformKey` type is exported for typed iteration.

### Layout owns SEO

`src/layouts/Layout.astro` emits canonical URL, hreflang (`en`/`de`/`x-default`), Open Graph, Twitter Card, and a `SoftwareApplication` JSON-LD block. Pages should pass `title`/`description` props rather than redefining `<head>` content.

### Styling

Tailwind v4 via the `@tailwindcss/vite` plugin. Global styles import in `src/layouts/Layout.astro` from `src/styles/global.css`. Inter font is loaded via `@fontsource/inter` imports in the layout frontmatter (weights 300–800).

### Static output

`output: 'static'` in `astro.config.mjs`. Deployment is the `dist/` artifact uploaded by the GitHub Pages action — no SSR, no API routes. `public/CNAME` pins the custom domain.
