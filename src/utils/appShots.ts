/**
 * Folder of the phone screenshots (hero carousel, features, guidance) per
 * language. Each language has its own set, taken with the app in that
 * language.
 */
export function appShotDir(lang: 'en' | 'de'): string {
  return `/assets/app/${lang}`;
}
