// Screenshots of the ENDURE web app used on the training planning page and the
// homepage coach section, one set per language (public/assets/web-app/<lang>/).
// Taken at 1920 × 1080 with 2× pixel density; the real browser chrome is not
// in the files, the page draws its own frame. Keep width/height in sync with
// the files so the layout never shifts.
const sizes = {
  calendar: { file: 'calendar.webp', width: 2400, height: 1350 },
  weekRow: { file: 'crop-week-row.webp', width: 1400, height: 772 },
  weekPlanner: { file: 'crop-load-forecast.webp', width: 820, height: 937 },
  planWithCoach: { file: 'crop-plan-with-coach.webp', width: 1600, height: 1289 },
  sessionAlternatives: { file: 'crop-session-alternatives.webp', width: 1277, height: 1376 },
} as const;

export type WebAppImageKey = keyof typeof sizes;

export interface WebAppImage {
  src: string;
  width: number;
  height: number;
}

export function webAppImage(lang: 'en' | 'de', key: WebAppImageKey): WebAppImage {
  const { file, width, height } = sizes[key];
  return { src: `/assets/web-app/${lang}/${file}`, width, height };
}
