// Shared types and strings for the article pages (FeaturePage.astro,
// GuidePage.astro) that opt into the layout with a picture hero and a
// download rail by setting `hero` on their content entry.

/** A picture of the product: a render, a photograph or a crop of the real app. */
export interface ArticleImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** A short screen recording of the app, shown in a phone frame with native controls. */
export interface ArticleVideo {
  src: string;
  poster: string;
  width: number;
  height: number;
  label: string;
}

const strings = {
  en: {
    tocTitle: 'On this page',
    trialNote: '14 days free. No payment details needed.',
    webLinkShort: 'Open in your browser',
  },
  de: {
    tocTitle: 'Auf dieser Seite',
    trialNote: '14 Tage gratis. Ohne Zahlungsdaten.',
    webLinkShort: 'Im Browser öffnen',
  },
} as const;

export function getArticleStrings(lang: 'en' | 'de') {
  return strings[lang] || strings.en;
}

/** Stable anchor for the n-th section, shared by the section and the rail. */
export function sectionId(index: number): string {
  return `section-${index + 1}`;
}
