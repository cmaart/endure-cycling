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
      available: true,
      url: 'https://apps.microsoft.com/detail/9P3LBDT9B17W',
    },
    macos: {
      available: false,
      url: null,
    },
  },
  // The browser version of the app. Not a store platform: it records no rides
  // and sells nothing, so it stays out of `platforms` (badges, schema downloadUrl).
  webApp: {
    url: 'https://app.endure-cycling.com/',
  },
  // ENDURE Premium store prices shown on the site: US for English, Germany for
  // German. Keep in sync with App Store Connect when prices change.
  pricing: {
    en: { currency: 'USD', monthly: 11.99, annual: 89 },
    de: { currency: 'EUR', monthly: 11.99, annual: 89 },
  },
  // App Store rating shown in the SoftwareApplication schema (Layout.astro).
  // Source: App Store Austria storefront. The proof section copy in
  // translations.ts quotes the same numbers, so update both together.
  rating: {
    value: 5.0,
    count: 10,
    checked: '2026-10-04',
  },
  // Install attribution (see src/scripts/store-attribution.ts).
  // Apple App Analytics only reports campaign links (`ct=`) when they also carry
  // the provider token (`pt=`). Get it from App Store Connect → App Analytics →
  // Acquisition → Campaigns → "Generate Campaign Link" and paste it here.
  // While null, store links still carry `ct=` but Apple ignores it.
  attribution: {
    appleProviderToken: '516093' as string | null,
  },
} as const;

export type PlatformKey = keyof typeof config.platforms;
