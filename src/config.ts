// Site configuration
// Per-platform availability and store URLs.
// Flip `available` and provide a `url` once a platform ships.
export const config = {
  platforms: {
    ios: {
      available: true,
      url: 'https://apps.apple.com/us/app/endure-cycling-early-access/id6768730624',
    },
    android: {
      available: true,
      url: 'https://play.google.com/store/apps/details?id=com.cmart.endure',
    },
    windows: {
      available: false,
      url: null,
    },
    macos: {
      available: false,
      url: null,
    },
  },
  // ENDURE Premium store prices shown on the site: US for English, Germany for
  // German. Keep in sync with App Store Connect when prices change.
  pricing: {
    en: { currency: 'USD', monthly: 7.99, annual: 59.99 },
    de: { currency: 'EUR', monthly: 8.99, annual: 69.99 },
  },
  // Install attribution (see src/scripts/store-attribution.ts).
  // Apple App Analytics only reports campaign links (`ct=`) when they also carry
  // the provider token (`pt=`). Get it from App Store Connect → App Analytics →
  // Acquisition → Campaigns → "Generate Campaign Link" and paste it here.
  // While null, store links still carry `ct=` but Apple ignores it.
  attribution: {
    appleProviderToken: null as string | null,
  },
} as const;

export type PlatformKey = keyof typeof config.platforms;
