// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { englishOnlyRoutes } from './src/utils/paths';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.endure-cycling.com',
  output: 'static',
  // Every URL ends in a slash. With `format: 'directory'` each page builds as
  // `<route>/index.html`, which GitHub Pages serves at `/de/`, `/imprint/` —
  // and it answers the slash-less form `/de` with a real 301 onto the slash
  // variant (verified against the sibling Pages deployment on
  // events.endure-cycling.com, 2026-07-29).
  //
  // The previous setup was the mirror image of this — `format: 'file'` with
  // slash-less canonicals — and it had one defect that mattered: GitHub Pages
  // has no `<route>/index.html` to serve in that layout, so it returned 404 for
  // every trailing-slash request. Google recorded `/de/` as `Not found (404)`
  // while that same URL carried 18 impressions and 4 clicks, more than any
  // other German URL. A client-side rewrite on the 404 page recovered human
  // visitors but not crawlers, which see the 404 status and stop.
  //
  // This direction has a redirect for the form we don't serve; the other
  // direction had a dead end. Canonical, hreflang, sitemap and every internal
  // link (see src/utils/paths.ts) all emit the slash form.
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  // Sitemap is generated at build time (sitemap-index.xml + sitemap-0.xml) with
  // hreflang alternates derived from the `/de` prefix. The legal pages are
  // excluded because they exist in English only, so there is no locale pair to
  // emit — and they were never listed in the hand-maintained sitemap either.
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de' }
      },
      filter: (page) =>
        !englishOnlyRoutes.some((route) => page.replace(/\/$/, '').endsWith(`/${route}`)),
      // The integration emits `en` and `de` alternates but never x-default, so we
      // add it here to match the hreflang set Layout renders in <head>.
      serialize: (item) => {
        const en = item.links?.find((l) => l.lang === 'en');
        if (en) {
          item.links = [...item.links, { lang: 'x-default', url: en.url }];
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});