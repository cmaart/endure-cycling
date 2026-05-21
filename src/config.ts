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
} as const;

export type PlatformKey = keyof typeof config.platforms;
