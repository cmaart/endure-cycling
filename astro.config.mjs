// @ts-check
import { defineConfig } from 'astro/config';
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
  vite: {
    plugins: [tailwindcss()]
  }
});