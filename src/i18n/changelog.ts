// Release notes for /changelog, newest first. The source is the "What's New"
// text in App Store Connect (en-US and de-DE); the date is the day the version
// was submitted there. Add a new entry at the top when a release ships, and
// keep both languages on every entry.
//
// Layout.astro reads the first entry for `softwareVersion` and `dateModified`
// in the SoftwareApplication schema, so the newest entry must be the one that
// is live in the stores.

export type Lang = 'en' | 'de';

export interface ChangelogNotes {
  /** One-line summary shown as the entry title. Optional. */
  headline?: string;
  added?: string[];
  improved?: string[];
  fixed?: string[];
}

export interface ChangelogEntry {
  version: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  en: ChangelogNotes;
  de: ChangelogNotes;
}

export const changelogMeta = {
  en: {
    seoTitle: "Changelog | ENDURE Cycling App Release Notes",
    seoDescription: "What changed in each ENDURE release: new features, improvements and fixes for the indoor cycling app on iOS, Android and Windows.",
    breadcrumb: "Changelog",
    h1: "Changelog",
    intro: "ENDURE ships updates every few days. This page lists what changed in each release, taken from the store release notes. Dates are the day the version was submitted to the App Store.",
    cadence: "Release cadence",
    cadenceText: "{count} releases since {since}.",
    added: "New",
    improved: "Improved",
    fixed: "Fixed",
    version: "Version",
    backHome: "Back to Homepage"
  },
  de: {
    seoTitle: "Changelog | ENDURE Release Notes",
    seoDescription: "Was sich in jeder ENDURE-Version geändert hat: neue Funktionen, Verbesserungen und Fehlerbehebungen der Indoor-Cycling-App für iOS, Android und Windows.",
    breadcrumb: "Changelog",
    h1: "Changelog",
    intro: "ENDURE bekommt alle paar Tage ein Update. Diese Seite listet, was sich in jeder Version geändert hat, übernommen aus den Store-Release-Notes. Das Datum ist der Tag, an dem die Version im App Store eingereicht wurde.",
    cadence: "Update-Rhythmus",
    cadenceText: "{count} Releases seit {since}.",
    added: "Neu",
    improved: "Verbessert",
    fixed: "Behoben",
    version: "Version",
    backHome: "Zurück zur Startseite"
  }
} as const;

export const changelog: ChangelogEntry[] = [
  {
    version: "1.3.31",
    date: "2026-10-14",
    en: {
      added: [
        "Single-sided power meters: if yours only sends one leg's power, turn on \"Double power\" in Bluetooth Settings or in the device menu during a ride."
      ],
      improved: [
        "Tablets and unfolded phones: Today shows your KPIs as a grid, and the coach chat opens as a window instead of a full page."
      ]
    },
    de: {
      added: [
        "Einseitige Powermeter: Sendet deiner nur die Leistung eines Beins, schalte \"Leistung verdoppeln\" in den Bluetooth-Einstellungen oder während der Fahrt im Geräte-Menü ein."
      ],
      improved: [
        "Tablets und aufgeklappte Foldables: Heute zeigt deine KPIs als Raster, der Coach-Chat öffnet sich als Fenster statt als ganze Seite."
      ]
    }
  },
  {
    version: "1.3.30",
    date: "2026-10-13",
    en: {
      improved: [
        "Light design: cards, sidebar and page now have clearer borders and no longer blend into one white surface on bright monitors.",
        "A workout the coach built for you on one device now shows up on your other devices as well."
      ]
    },
    de: {
      improved: [
        "Helles Design: Karten, Seitenleiste und Seite haben jetzt klarere Ränder und verschwimmen auf hellen Monitoren nicht mehr zu einer weißen Fläche.",
        "Ein Workout, das der Coach auf einem Gerät für dich gebaut hat, erscheint jetzt auch auf deinen anderen Geräten."
      ]
    }
  },
  {
    version: "1.3.29",
    date: "2026-10-10",
    en: {
      added: [
        "Share Gallery on the ride summary: swipe through the share cards, pick light or dark, and post the one you like. Outdoor rides get your route on a map, the sticker puts only your numbers on a transparent background for stories.",
        "When no workout in the library matches the coach's plan, the coach builds one. Start it or customize it."
      ],
      fixed: [
        "The coach chat now keeps your local day in every time zone."
      ]
    },
    de: {
      added: [
        "Share-Galerie in der Zusammenfassung: Blättere durch die Karten, wähle Hell oder Dunkel und teile die, die dir gefällt. Outdoor-Fahrten zeigen deine Strecke auf der Landkarte, der Sticker nur deine Zahlen auf transparentem Hintergrund für Storys.",
        "Passt kein Workout aus der Bibliothek zum Plan des Coaches, baut der Coach eines. Starten oder anpassen."
      ],
      fixed: [
        "Der Coach-Chat rechnet jetzt mit deinem lokalen Tag."
      ]
    }
  },
  {
    version: "1.3.28",
    date: "2026-10-09",
    en: {
      added: [
        "The coach now plans your day straight from the morning check-in: briefing and workout arrive together on one card.",
        "Change the plan in the coach chat. Say how your legs feel or how much time you have, and the coach proposes a different workout. You decide."
      ]
    },
    de: {
      added: [
        "Der Coach plant deinen Tag jetzt direkt aus dem Morgen-Check-in: Einschätzung und Workout kommen zusammen auf einer Karte.",
        "Im Coach-Chat kannst du den Plan ändern. Sag, wie sich die Beine anfühlen oder wie viel Zeit du hast, und der Coach schlägt ein anderes Workout vor. Du entscheidest."
      ]
    }
  },
  {
    version: "1.3.27",
    date: "2026-10-08",
    en: {
      improved: [
        "Elevation charts now show feet and miles when you use imperial units.",
        "Starting a ride is more reliable when Bluetooth is switched off."
      ]
    },
    de: {
      improved: [
        "Datum, Zahlen und Beschriftungen erscheinen jetzt überall auf Deutsch und im deutschen Format.",
        "Der Start einer Fahrt klappt jetzt zuverlässiger, wenn Bluetooth ausgeschaltet ist."
      ]
    }
  },
  {
    version: "1.3.25",
    date: "2026-10-06",
    en: {
      added: [
        "Roadmap on the Today tab: at the bottom you now see what we are working on and what comes next. Tap \"I want this\" to tell us what matters to you."
      ]
    },
    de: {
      added: [
        "Roadmap im Today-Tab: Ganz unten siehst du jetzt, woran wir arbeiten und was als Nächstes kommt. Mit \"Will ich haben\" sagst du uns, was dir wichtig ist."
      ]
    }
  },
  {
    version: "1.3.22",
    date: "2026-09-28",
    en: {
      headline: "Ride ENDURE workouts on Zwift",
      added: [
        "Ride on Zwift: one tap on the workout preview and the workout waits in Zwift today, under Custom Workouts. It travels through intervals.icu. The first time, the app walks you through the setup step by step.",
        "Export workouts as files: .zwo, .erg or .mrc for Zwift, TrainerRoad, Wahoo SYSTM, Rouvy and others.",
        "Export rides as .FIT files from the ride summary."
      ]
    },
    de: {
      headline: "ENDURE-Workouts in Zwift fahren",
      added: [
        "In Zwift fahren: Ein Tipp in der Workout-Vorschau, und das Workout wartet heute in Zwift unter Custom Workouts. Die Übertragung läuft über intervals.icu. Beim ersten Mal führt dich die App Schritt für Schritt durch die Einrichtung.",
        "Workouts als Datei exportieren: .zwo, .erg oder .mrc für Zwift, TrainerRoad, Wahoo SYSTM, Rouvy und andere.",
        "Fahrten als .FIT-Datei exportieren, direkt aus der Zusammenfassung."
      ]
    }
  },
  {
    version: "1.3.21",
    date: "2026-09-27",
    en: {
      headline: "Where your training time goes",
      added: [
        "\"Where your time goes\" shows your week, month or year by duration, distance or TSS, split into ride, run and swim. Swipe sideways to see earlier periods.",
        "Tap a sport to see how much of it was easy, tempo to threshold, or high intensity."
      ],
      improved: [
        "Cycling zones now use the same 5-zone model as running. Threshold work counts as Z3+Z4, no longer as Z5+.",
        "Trail runs count towards running zones."
      ],
      fixed: [
        "Recorded speed was too high, including in the Strava export."
      ]
    },
    de: {
      headline: "Wohin deine Trainingszeit geht",
      added: [
        "\"Wohin geht meine Zeit\" zeigt Woche, Monat oder Jahr nach Dauer, Distanz oder TSS, aufgeteilt nach Rad, Lauf und Schwimmen. Wisch zur Seite, um frühere Zeiträume zu sehen.",
        "Tipp auf eine Sportart, und du siehst, wie viel davon locker, im Tempo- und Schwellenbereich oder intensiv war."
      ],
      improved: [
        "Die Radzonen nutzen jetzt das gleiche 5-Zonen-Modell wie beim Laufen. Schwellenarbeit zählt zu Z3+Z4, nicht mehr zu Z5+.",
        "Trailläufe zählen zu den Laufzonen."
      ],
      fixed: [
        "Die aufgezeichnete Geschwindigkeit war zu hoch, auch im Strava-Export."
      ]
    }
  },
  {
    version: "1.3.20",
    date: "2026-09-26",
    en: {
      headline: "Tacx trainers without FTMS work as smart trainers",
      added: [
        "Tacx Neo 2, Neo 2T and Vortex Smart connect as a trainer instead of a power meter, and ENDURE controls them in ERG and SIM mode. Your weight is sent to the trainer so the resistance feels right.",
        "AI Workout: give it a duration and it fills the gap with easy riding, so a 60 min request really lasts 60 minutes."
      ],
      fixed: [
        "Strava's estimated power is no longer imported as if it were measured. Rides without a power meter are marked as such."
      ]
    },
    de: {
      headline: "Tacx-Rollen ohne FTMS funktionieren als Smart Trainer",
      added: [
        "Tacx Neo 2, Neo 2T und Vortex Smart verbinden sich als Trainer statt als Leistungsmesser, ENDURE steuert sie im ERG- und SIM-Modus. Dein Gewicht geht an die Rolle, damit sich der Widerstand richtig anfühlt.",
        "KI-Workout: Gib eine Dauer an, und die Lücke wird mit lockerem Fahren gefüllt. 60 Minuten heißt jetzt wirklich 60 Minuten."
      ],
      fixed: [
        "Geschätzte Leistung von Strava wird nicht mehr importiert, als wäre sie gemessen. Fahrten ohne Powermeter sind als solche markiert."
      ]
    }
  },
  {
    version: "1.3.19",
    date: "2026-09-18",
    en: {
      fixed: [
        "Swims imported from Strava or intervals.icu are shown as swims again, not as indoor rides: pace per 100 m, distance in metres, moving time, and the recorded sets in the laps view.",
        "The app icon no longer keeps a leftover notification badge. It now clears when you open the app.",
        "ERG mode starts each ramp step at the right power instead of easing in late."
      ]
    },
    de: {
      fixed: [
        "Schwimmeinheiten aus Strava oder intervals.icu erscheinen wieder als Schwimmen statt als Indoor-Fahrt: Pace pro 100 m, Distanz in Metern, Bewegungszeit und die aufgezeichneten Sets in der Rundenansicht.",
        "Das App-Icon behält keinen alten Benachrichtigungs-Badge mehr. Er verschwindet jetzt, sobald du die App öffnest.",
        "ERG-Modus startet jede Rampenstufe mit der richtigen Leistung statt verspätet einzuregeln."
      ]
    }
  },
  {
    version: "1.3.17",
    date: "2026-09-16",
    en: {
      headline: "Type your workout and the AI builds it",
      added: [
        "Create workout with AI: write what you want to ride, like \"3x10min sweet spot with 5min rest\", and get a finished workout with warmup and cooldown. Not quite right? Tell it what to change and it adjusts the plan.",
        "Four new opener families for the day before a race, plus the threshold classics ladder, 2x20 and criss-cross."
      ],
      improved: [
        "Redesigned workout library: one search across names, families and tags, category chips and cleaner cards.",
        "Every intensity workout now starts with the same 20-minute step warmup.",
        "FTP tests are gone from the library. ENDURE estimates your FTP from the rides you already do."
      ]
    },
    de: {
      headline: "Tipp dein Workout ein, die KI baut es",
      added: [
        "Workout mit KI erstellen: schreib, was du fahren willst, etwa \"3x10min Sweetspot mit 5min Pause\", und bekomm ein fertiges Workout mit Warmup und Cooldown. Passt es nicht ganz? Sag, was anders sein soll, und der Plan wird angepasst.",
        "Vier neue Opener-Familien für den Tag vor dem Rennen, dazu die Schwellen-Klassiker Leiter, 2x20 und Criss-Cross."
      ],
      improved: [
        "Neue Workout-Bibliothek: eine Suche über Namen, Familien und Tags, Kategorie-Chips und aufgeräumte Karten.",
        "Jedes intensive Workout startet jetzt mit dem gleichen 20-Minuten-Stufen-Warmup.",
        "FTP-Tests sind aus der Bibliothek raus. ENDURE schätzt deine FTP aus den Fahrten, die du ohnehin machst."
      ]
    }
  },
  {
    version: "1.3.15",
    date: "2026-09-15",
    en: {
      headline: "Redesigned ride summary",
      added: [
        "Redesigned ride summary: map, weather, segments, laps and best efforts on one screen.",
        "Wind effect: how much time the wind cost you or gave you, per Strava segment too.",
        "Laps split into intervals, your own, auto-detected and distance splits.",
        "Best efforts with a power curve and a 12-month comparison."
      ],
      improved: [
        "Segment view with a pinned map and start/finish markers.",
        "Shorter post-ride rating.",
        "The summary now follows your light or dark theme."
      ]
    },
    de: {
      headline: "Neue Fahrt-Auswertung",
      added: [
        "Neue Fahrt-Auswertung: Karte, Wetter, Segmente, Runden und Bestleistungen auf einem Screen.",
        "Windeinfluss: wie viel Zeit dich der Wind gekostet oder geschenkt hat, auch je Strava-Segment.",
        "Runden nach Intervallen, selbst gesetzten, erkannten und Kilometer-Abschnitten getrennt.",
        "Bestleistungen mit Leistungskurve und Vergleich über 12 Monate."
      ],
      improved: [
        "Segment-Ansicht mit fixierter Karte, Start und Ziel.",
        "Die Auswertung folgt jetzt hellem und dunklem Design."
      ]
    }
  },
  {
    version: "1.3.14",
    date: "2026-09-03",
    en: {
      headline: "The Potential analysis",
      added: [
        "The Potential analysis shows whether your threshold or your aerobic ceiling is holding your FTP back. The coach explains the verdict and picks the sessions that work on it. All of it comes from your normal rides, without a test.",
        "After the free 14 days, your next three rides are still on us. Recording beyond that needs Premium.",
        "After every ride, a short sheet asks how the app did. If everything worked, one tap is enough. If not, tell us what went wrong. We read every entry."
      ],
      improved: [
        "The Potential estimate is more conservative for riders without a recent 5-minute effort and is marked as an estimate until one exists."
      ]
    },
    de: {
      headline: "Die Potenzial-Analyse",
      added: [
        "Die Potenzial-Analyse zeigt, ob deine Schwelle oder deine aerobe Ausdauer die FTP bremst. Der Coach erklärt das Ergebnis und wählt die Einheiten aus, die daran arbeiten. Alles aus deinen normalen Fahrten, ohne Test.",
        "Nach den 14 kostenlosen Tagen gehen die nächsten drei Fahrten noch auf uns. Danach braucht das Aufzeichnen Premium.",
        "Nach jeder Fahrt fragt ein kurzes Fenster, wie die App sich gemacht hat. Wenn alles gepasst hat, reicht ein Tipp. Wenn nicht, sag uns, was schiefging. Wir lesen jeden Eintrag."
      ],
      improved: [
        "Die Potenzial-Schätzung ist vorsichtiger, wenn keine aktuelle 5-Minuten-Belastung vorliegt, und ist bis dahin als Schätzung gekennzeichnet."
      ]
    }
  }
];

/**
 * Total number of App Store versions submitted since `releasesSince`, including
 * the small bug-fix releases this page does not list individually. Counted from
 * App Store Connect on 2026-10-18; bump it together with the newest entry.
 */
export const releaseCount = 47;
export const releasesSince = "2026-05-12";

export const latestRelease = changelog[0];

export function getChangelogMeta(lang: Lang = 'en') {
  return changelogMeta[lang] || changelogMeta.en;
}
