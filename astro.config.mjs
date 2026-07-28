// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.endure-cycling.com',
  output: 'static',
  // Serve extensionless URLs without a trailing slash. With `format: 'file'`
  // each page builds as `<route>.html` (e.g. `de.html`, `imprint.html`), which
  // GitHub Pages serves directly at `/de`, `/imprint` — no 301 redirect, so the
  // canonical/sitemap/internal links (all slash-less) match what is served.
  trailingSlash: 'never',
  build: {
    format: 'file'
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
        !['/privacy', '/terms', '/imprint'].some((p) => page.replace(/\/$/, '').endsWith(p)),
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