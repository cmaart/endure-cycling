/**
 * Folder of the phone screenshots (hero carousel, features, guidance) per
 * language. Each language gets its own set, taken with the app in that
 * language. Until the English set exists, English pages keep the previous
 * set in /assets/app/.
 */
export function appShotDir(lang: 'en' | 'de'): string {
  return lang === 'de' ? '/assets/app/de' : '/assets/app';
}
