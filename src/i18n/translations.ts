// Translation content for EN and DE
export const translations = {
  en: {
    // Hero
    hero: {
      badge: "Indoor Cycling App for Smart Trainers",
      tagline: "Precision over Gimmicks",
      headline1: "Ride. Analyze.",
      headline2: "Improve.",
      subline: "Connect your smart trainer or ride outside, start your workout, and track your FTP and VO2max trends. Structured indoor training, no distractions.",
      secondary: "Frequent updates. Built with the community. Come along for the ride.",
      desktopNote: "Desktop versions (Windows & macOS) planned",
      appStoreBadgeAlt: "Download on the App Store",
      googlePlayBadgeAlt: "Get it on Google Play"
    },
    // App Showcase
    appShowcase: {
      vo2max: {
        title: "VO2Max Estimation",
        description: "Track your VO2max trend ride by ride."
      },
      crossPlatform: {
        title: "Desktop & Mobile",
        description: "Train on Windows, Android, and more."
      },
      smartTrainer: {
        title: "Smart Trainer Control",
        description: "Automatic resistance control for your workouts."
      },
      ftpTrend: {
        title: "FTP Trend",
        description: "See your FTP progress week by week."
      }
    },
    // Climbing Efficiency
    climbingEfficiency: {
      badge: "New Feature",
      headline1: "Own the climb.",
      headline2: "Measure how efficiently you actually climb.",
      description: "Climbing Efficiency measures how effectively you turn watts into vertical meters. ENDURE automatically detects climbs in your outdoor rides and calculates a personal climbing score — one of the first apps in the world to do this.",
      stat1: "Vertical speed measured",
      stat2: "Unique metric worldwide",
      bullets: [
        "<strong>Automatic climb detection:</strong> ENDURE identifies every climb in your outdoor rides.",
        "<strong>VAM-based scoring:</strong> Your vertical ascent speed (m/h) is the core of the metric — pure climbing ability."
      ]
    },
    // Lactate (Industry First)
    lactate: {
      badge: "Industry first for cycling apps",
      headline1: "Lactate, logged from your bike.",
      headline2: "LT1 & LT2 estimated automatically.",
      description: "ENDURE is the first cycling app that lets you log lactate readings directly during a ride — or add them afterwards. From those values we automatically estimate your LT1 and LT2 thresholds, complete with a confidence tunnel around the curve. No spreadsheets, no separate tools — your blood markers live next to your power.",
      stat1Title: "LT1 + LT2",
      stat1Sub: "Auto-estimated",
      stat2Title: "In-ride · Post-ride",
      stat2Sub: "Log when you want",
      bullets: [
        "<strong>In-ride logging:</strong> Capture lactate values mid-workout without leaving the ride screen.",
        "<strong>Post-ride entry:</strong> Or add them later from your activity history — no rush.",
        "<strong>Automatic LT1/LT2 estimation:</strong> A fitted curve with a confidence tunnel turns your readings into actionable thresholds."
      ],
      videoCaption: "Logging a lactate reading for a workout.",
      resultLabel: "What you get:",
      resultCaption: "Lactate profile + LT1/LT2 with confidence tunnel."
    },
    // Beta Notice
    betaNotice: {
      badge: "Early Release",
      title: "Available Now — Free during Early Release",
      description: "ENDURE is live on iOS and Android as an Early Release, and completely free to use while we continue to improve. Desktop versions for Windows and macOS are planned. We're building this together with the cycling community."
    },
    // Features
    features: {
      sectionTitle: "Everything you need for",
      sectionTitleHighlight: "indoor training & analysis",
      sectionSubtitle: "A curated workout library, deep ride analytics, and rock-solid trainer connectivity. That's the whole pitch.",

      analytics: {
        title: "Progress Analytics",
        feature1: "<strong>FTP & VO2max Trends:</strong> Track your fitness evolution over weeks and months.",
        feature2: "<strong>Indoor + Outdoor:</strong> Syncs your Strava rides for a complete picture.",
        feature3: "<strong>Power Profile:</strong> Visualize your strengths across durations."
      },
      
      performance: {
        title: "Fast & Rock-Solid",
        feature1: "<strong>Ready in Seconds:</strong> From app start to riding in under 30 seconds. No bloat.",
        feature2: "<strong>Crash-Proof Sessions:</strong> Auto-resume, reconnect & buffer. Never lose a ride.",
        feature3: "<strong>Lightweight:</strong> Runs smooth, no gaming PC required."
      },
      
      training: {
        title: "Structured Training",
        feature1: "<strong>Targeted Workouts:</strong> Physiologically meaningful training only (VO2max, Threshold, Sweet Spot) — no filler.",
        feature2: "<strong>Universal Import:</strong> Supports .ZWO, .MRC, and .ERG files.",
        feature3: "<strong>Quick Free Ride:</strong> Optional ERG mode to ride by watts instantly."
      },
      
      connectivity: {
        title: "Connectivity & Sync",
        feature1: "<strong>Bluetooth Smart:</strong> Connects to Smart Trainers, Power Meters & HR Monitors.",
        feature2: "<strong>Strava Integration:</strong> Auto-Upload & History Sync (more platforms coming)."
      },
      
      screenshot1Caption: "Curated workout library with physiological targets",
      screenshot2Caption: "Import your own workouts from any source",
      screenshot3Caption: "Detailed Power Profile: Strengths, Weaknesses & FTP Estimate",
      screenshot4Caption: "Ride Screen: Precise Smart Trainer Control (ERG Mode)",
      screenshot5Caption: "Smart-Smoothing: Balances erratic power data for smooth trainer control.",
      screenshot6Caption: "Time in Zones: Power & HR zone distribution with distribution summary",
      screenshotDark1Caption: "Performance Dashboard: FTP & VO2Max trends over time",
      screenshotDark2Caption: "Workout Ride: Real-time interval control with smart trainer support",
      screenshotDark3Caption: "Dashboard: Your personal fitness profile and key metrics",
      screenshotDark4Caption: "AI Coaching: Personalized feedback and insights after every ride",
      screenshotDark5Caption: "Workout Library: Structured workouts for every training goal",
      screenshotDark6Caption: "Training Calendar: Your rides and activities month by month"
    },
    // Roadmap
    roadmap: {
      title: "Platform",
      titleHighlight: "Roadmap",
      subtitle: "Frequent Updates — Full gas ahead 🚀",
      
      windows: "Windows",
      windowsStatus: "Planned",
      macos: "macOS",
      macosStatus: "Planned",
      android: "Android",
      androidStatus: "Available",
      ios: "iOS",
      iosStatus: "Available",
      
      communityTitle: "We're Building This Together",
      communityText: "Feature requests are welcome and feed straight into the update cycle. Your feedback shapes ENDURE.",
      communityLink: "Join us on GitHub",
      instagramLink: "Follow us on Instagram"
    },
    // Comparison / capability table
    comparison: {
      title: "ENDURE",
      titleHighlight: "at a glance",
      subtitle: "Everything the app does, in one place — no fine print.",
      featureLabel: "Capability",
      valueLabel: "What you get",
      rows: [
        { feature: "Price", value: "Free during Early Release — no subscription" },
        { feature: "Platforms", value: "iOS & Android (Windows & macOS planned)" },
        { feature: "Trainer control", value: "Bluetooth smart trainers, power meters & HR monitors (ERG mode)" },
        { feature: "Workout import", value: ".ZWO, .MRC and .ERG files" },
        { feature: "Analytics", value: "FTP & VO2max trends, power profile, time-in-zones" },
        { feature: "Lactate LT1 / LT2", value: "In-ride & post-ride logging with auto-estimated thresholds" },
        { feature: "Climbing Efficiency", value: "Automatic VAM-based climb scoring" },
        { feature: "Strava", value: "Auto-upload & ride-history sync" },
        { feature: "Startup", value: "From app start to riding in under 30 seconds" }
      ]
    },
    // FAQ
    faq: {
      title: "Frequently Asked",
      titleHighlight: "Questions",
      subtitle: "Everything you need to know before your first ride.",
      items: [
        {
          q: "Is ENDURE free?",
          a: "Yes. ENDURE is completely free during its Early Release on iOS and Android while we keep improving it. There is no subscription and no paywalled features — download it and start riding."
        },
        {
          q: "Which smart trainers and sensors work with ENDURE?",
          a: "ENDURE connects over Bluetooth to smart trainers, power meters and heart-rate monitors. If your trainer supports standard Bluetooth resistance control, ENDURE can steer it automatically in ERG mode."
        },
        {
          q: "Which platforms is ENDURE available on?",
          a: "ENDURE is live on iOS and Android as an Early Release. Desktop versions for Windows and macOS are planned, so you will be able to train on the big screen later too."
        },
        {
          q: "How does ENDURE estimate FTP and VO2max?",
          a: "ENDURE analyses your recorded power and heart-rate data across rides to model your FTP and VO2max trends over time — so you see fitness evolve week by week instead of from a single all-out test."
        },
        {
          q: "What is the lactate (LT1 / LT2) feature?",
          a: "ENDURE is the first cycling app that lets you log lactate readings during or after a ride. From those values it fits a curve and automatically estimates your LT1 and LT2 thresholds, with a confidence tunnel around the result."
        },
        {
          q: "Does ENDURE sync with Strava?",
          a: "Yes. ENDURE auto-uploads your rides to Strava and can sync your ride history on first launch, combining indoor and outdoor activities into one complete performance picture."
        }
      ]
    },
    // About
    about: {
      seoTitle: "About ENDURE — Precision Indoor Cycling Analysis",
      seoDescription: "The story behind ENDURE: who builds it, the precision-over-gimmicks philosophy, and how its FTP, VO2max, lactate and climbing metrics actually work.",
      headline: "About ENDURE",
      intro: "ENDURE is an indoor cycling app built around one idea: precision over gimmicks. No games, no filler — just the training and analysis that actually make you faster.",
      sections: [
        {
          title: "Who's behind ENDURE",
          body: "ENDURE is built by Christoph Martin, a cyclist and developer based in Austria. It started from a simple frustration — indoor cycling apps were full of gimmicks and games, but thin on the honest analysis that helps you improve. ENDURE is the app we wanted to train with ourselves."
        },
        {
          title: "Precision over gimmicks",
          body: "Every feature earns its place. The workout library carries only physiologically meaningful sessions — VO2max, threshold, sweet spot — with no filler. Sessions start in seconds, survive dropouts with auto-resume, and run smoothly without a gaming PC. We would rather do a few things exceptionally well than bury you in noise."
        },
        {
          title: "How our metrics work",
          body: "FTP and VO2max are modelled from your recorded power and heart-rate data across rides, so trends reflect real progress over time. LT1 and LT2 are estimated from lactate readings you log in-ride or afterwards, fitted to a curve with a confidence tunnel. Climbing Efficiency scores how effectively you turn watts into vertical metres using your ascent speed (VAM)."
        },
        {
          title: "Built with the community",
          body: "ENDURE ships frequent updates, and feature requests feed straight into the cycle. The direction of the app is shaped by the cyclists who ride with it — come along for the ride."
        }
      ],
      backHome: "Back to Homepage"
    },
    // Footer
    footer: {
      tagline: "Driven by data. Built to endure.",

      requirementsTitle: "System Requirements",
      windows: "Windows 10 / 11",
      bluetooth: "Bluetooth Adapter Required",

      linksTitle: "Links",
      eventsCalendar: "Race Calendar 2026 – Cycling & Triathlon",
      instagram: "Instagram",
      github: "GitHub",
      about: "About",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      imprint: "Imprint / Legal Notice",
      androidTest: "Android Test",
      feedback: "Feedback",
      contact: "Contact",
      
      copyright: "ENDURE. All rights reserved.",
      made: "Made with ❤️ for cyclists who love data."
    },
    // Video Demo
    videoDemo: {
      title: "See It",
      titleHighlight: "In Action",
      subtitle: "From app start to riding in under 30 seconds. Precise training, no detours.",
      caption: "App start to ride — real speed, no time-lapse"
    },
    // SEO
    seo: {
      title: "Endure — Smart Trainer Indoor Cycling App with FTP & VO2max",
      description: "Smart trainer indoor cycling app, ready to ride in 30 seconds. Crash-proof sessions with auto-resume. Track FTP & VO2max trends. Just ride and analyze."
    },
    // Cookie Banner
    cookieBanner: {
      title: "We use cookies",
      description: "We use cookies, Google Analytics, and Google AdSense to analyze traffic, serve ads, and understand how the website is used. You can choose to accept or decline these cookies.",
      accept: "Accept",
      decline: "Decline",
      privacyLink: "Read our Privacy Policy"
    },
    // Android Test
    androidTest: {
      seoTitle: "Android Closed Test - ENDURE",
      seoDescription: "Sign up for the ENDURE Android closed test on Google Play. Be among the first to test the indoor cycling app on Android.",
      headline: "Android Closed Test",
      intro: "ENDURE is launching a closed Android test via Google Play. If you have an Android device and want to test the app, enter the email address of the Google account you use in the Play Store below. This must be a Google account (e.g. Gmail or Google Workspace) — otherwise you won't be able to join the test. Once you're added to the test group, you'll receive the official Google Play test link via email.",
      earlyNote: "Please note: The test version is early and may contain bugs. Your feedback is welcome and helps shape the first public release.",
      emailLabel: "Google Play email address (must be linked to a Google account)",
      emailPlaceholder: "your.email@gmail.com",
      androidCheck: "I have an Android device",
      indoorCheck: "I do indoor cycling / use a smart trainer",
      stravaCheck: "I use Strava",
      stravaHint: "ENDURE can sync your historical Strava rides on first launch — recommended for a fast start with your real data.",
      submit: "Request Android Test Access",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successMessage: "Your request has been sent. I'll add you to the Google Play test group and send you the official test link via email. Please use the same Google address you entered here when opening the link.",
      errorMessage: "Something went wrong. Please try again or send an email directly to",
      backHome: "Back to Homepage"
    },
    // Feedback
    feedback: {
      seoTitle: "Feedback - ENDURE",
      seoDescription: "Share your feedback about the ENDURE indoor cycling app. Report bugs, suggest features, or tell us what you think.",
      headline: "Send Feedback",
      intro: "Found a bug? Got an idea? Want to share your experience? Your feedback shapes ENDURE.",
      emailLabel: "Email address",
      emailPlaceholder: "your.email@gmail.com",
      typeLabel: "What kind of feedback?",
      typeBug: "Bug Report",
      typeFeature: "Feature Request",
      typeGeneral: "General Feedback",
      messageLabel: "Your message",
      messagePlaceholder: "Describe what happened, what you expected, or what you'd like to see...",
      deviceLabel: "Device information (optional)",
      devicePlaceholder: "e.g. Samsung Galaxy S24, Android 15",
      submit: "Send Feedback",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successMessage: "Your feedback has been received. If you left your email, I may follow up with questions or to let you know when your suggestion is implemented.",
      errorMessage: "Something went wrong. Please try again or send an email directly to",
      backHome: "Back to Homepage"
    }
  },
  de: {
    // Hero
    hero: {
      badge: "Indoor Cycling App für Smart Trainer",
      tagline: "Präzision statt Spielerei",
      headline1: "Fahren. Analysieren.",
      headline2: "Verbessern.",
      subline: "Verbinde deinen Smart Trainer oder fahr draußen, starte dein Workout und behalte deine FTP- und VO2max-Trends im Blick. Strukturiertes Indoor-Training ohne Ablenkung.",
      secondary: "Häufige Updates. Entwickelt mit der Community. Sei dabei.",
      desktopNote: "Desktop-Versionen (Windows & macOS) geplant",
      appStoreBadgeAlt: "Laden im App Store",
      googlePlayBadgeAlt: "Jetzt bei Google Play"
    },
    // App Showcase
    appShowcase: {
      vo2max: {
        title: "VO2Max Schätzung",
        description: "Verfolge deine VO2max-Entwicklung über jede Fahrt."
      },
      crossPlatform: {
        title: "Desktop & Mobile",
        description: "Trainiere auf Windows, Android und mehr."
      },
      smartTrainer: {
        title: "Smart Trainer Steuerung",
        description: "Automatische Widerstandssteuerung für deine Workouts."
      },
      ftpTrend: {
        title: "FTP Entwicklung",
        description: "Sieh deine FTP-Entwicklung über Wochen und Monate."
      }
    },
    // Climbing Efficiency
    climbingEfficiency: {
      badge: "Neues Feature",
      headline1: "Beherrsche den Anstieg.",
      headline2: "Miss, wie effizient du wirklich kletterst.",
      description: "Climbing Efficiency misst, wie effektiv du deine Watt in Höhenmeter umsetzt. ENDURE erkennt Anstiege in deinen Outdoor-Fahrten automatisch und berechnet deinen persönlichen Kletter-Score — als eine der ersten Apps weltweit.",
      stat1: "Vertikalgeschwindigkeit gemessen",
      stat2: "Weltweit einzigartige Metrik",
      bullets: [
        "<strong>Automatische Anstiegserkennung:</strong> ENDURE identifiziert jeden Anstieg in deinen Outdoor-Fahrten.",
        "<strong>VAM-basiertes Scoring:</strong> Deine vertikale Aufstiegsgeschwindigkeit (m/h) ist der Kern des Wertes — pure Bergleistung."
      ]
    },
    // Lactate (Industry First)
    lactate: {
      badge: "Erstmals in einer Cycling-App",
      headline1: "Laktat. Direkt vom Rad.",
      headline2: "LT1 & LT2 automatisch geschätzt.",
      description: "ENDURE ist die erste Cycling-App, mit der du Laktatwerte direkt während der Fahrt eintragen kannst — oder im Nachhinein. Aus deinen Werten schätzen wir automatisch LT1 und LT2 inklusive Konfidenztunnel um die Kurve. Keine Spreadsheets, keine Extra-Tools — deine Blutwerte leben neben deinen Watt.",
      stat1Title: "LT1 + LT2",
      stat1Sub: "Automatisch geschätzt",
      stat2Title: "Während · Nach der Fahrt",
      stat2Sub: "Eintrag wann du willst",
      bullets: [
        "<strong>Eintrag während der Fahrt:</strong> Laktatwerte mitten im Workout erfassen, ohne den Ride-Screen zu verlassen.",
        "<strong>Eintrag im Nachhinein:</strong> Oder später aus der Aktivitätshistorie ergänzen — kein Stress.",
        "<strong>Automatische LT1/LT2-Schätzung:</strong> Eine gefittete Kurve mit Konfidenztunnel macht aus deinen Werten greifbare Schwellen."
      ],
      videoCaption: "Laktatwert für ein Workout eintragen.",
      resultLabel: "Das kommt raus:",
      resultCaption: "Laktatprofil + LT1/LT2 mit Konfidenztunnel."
    },
    // Beta Notice
    betaNotice: {
      badge: "Early Release",
      title: "Jetzt verfügbar — Gratis im Early Release",
      description: "ENDURE ist als Early Release für iOS und Android verfügbar — und komplett kostenlos, während wir die App weiter verbessern. Desktop-Versionen für Windows und macOS sind in Planung. Wir bauen das gemeinsam mit der Radsport-Community."
    },
    // Features
    features: {
      sectionTitle: "Alles was du brauchst für",
      sectionTitleHighlight: "Indoor-Training & Analyse",
      sectionSubtitle: "Kuratierte Workout-Bibliothek, tiefe Fahrt-Analysen und stabile Trainer-Anbindung. Mehr braucht es nicht.",

      analytics: {
        title: "Fortschritts-Analyse",
        feature1: "<strong>FTP- & VO2max-Trends:</strong> Verfolge deine Fitness-Entwicklung über Wochen und Monate.",
        feature2: "<strong>Indoor + Outdoor:</strong> Synchronisiert deine Strava-Fahrten für ein komplettes Bild.",
        feature3: "<strong>Power Profil:</strong> Visualisiere deine Stärken über verschiedene Dauern."
      },
      
      performance: {
        title: "Schnell & Stabil",
        feature1: "<strong>Bereit in Sekunden:</strong> Vom App-Start bis zur Fahrt in unter 30 Sekunden. Kein Bloat.",
        feature2: "<strong>Crash-sichere Sessions:</strong> Auto-Resume, Reconnect & Buffer. Keine Fahrt geht verloren.",
        feature3: "<strong>Leichtgewichtig:</strong> Läuft flüssig, kein Gaming-PC nötig."
      },
      
      training: {
        title: "Strukturiertes Training",
        feature1: "<strong>Zielgerichtete Workouts:</strong> Nur physiologisch sinnvolle Trainings (VO2max, Schwelle, Sweet Spot) — kein Ballast.",
        feature2: "<strong>Universeller Import:</strong> Unterstützt .ZWO, .MRC und .ERG Dateien.",
        feature3: "<strong>Schnelles Freifahren:</strong> Optionaler ERG-Modus um sofort nach Watt zu fahren."
      },
      
      connectivity: {
        title: "Konnektivität & Sync",
        feature1: "<strong>Bluetooth Smart:</strong> Verbindet sich mit Smart Trainern, Power Metern & HR Monitoren.",
        feature2: "<strong>Strava Integration:</strong> Auto-Upload & Verlaufs-Sync (weitere Plattformen folgen)."
      },
      
      screenshot1Caption: "Kuratierte Workout-Bibliothek mit physiologischen Zielen",
      screenshot2Caption: "Importiere deine eigenen Workouts aus jeder Quelle",
      screenshot3Caption: "Detailliertes Power Profile: Stärken, Schwächen & FTP-Einschätzung",
      screenshot4Caption: "Ride Screen: Präzise Smart Trainer Steuerung (ERG Modus)",
      screenshot5Caption: "Smart-Smoothing: Gleicht erratische Power-Daten aus für eine sanfte Trainer-Steuerung.",
      screenshot6Caption: "Zeit in Zonen: Power- & HR-Zonenverteilung mit Verteilungs-Übersicht",
      screenshotDark1Caption: "Performance Dashboard: FTP- & VO2Max-Trends im Zeitverlauf",
      screenshotDark2Caption: "Workout Ride: Echtzeit-Intervallsteuerung mit Smart-Trainer-Unterstützung",
      screenshotDark3Caption: "Dashboard: Dein persönliches Fitnessprofil und wichtige Kennzahlen",
      screenshotDark4Caption: "AI Coaching: Personalisiertes Feedback und Insights nach jeder Fahrt",
      screenshotDark5Caption: "Workout-Bibliothek: Strukturierte Workouts für jedes Trainingsziel",
      screenshotDark6Caption: "Trainingskalender: Deine Fahrten und Aktivitäten im Monatsüberblick"
    },
    // Roadmap
    roadmap: {
      title: "Plattform",
      titleHighlight: "Roadmap",
      subtitle: "Häufige Updates — Vollgas voraus 🚀",
      
      windows: "Windows",
      windowsStatus: "Geplant",
      macos: "macOS",
      macosStatus: "Geplant",
      android: "Android",
      androidStatus: "Verfügbar",
      ios: "iOS",
      iosStatus: "Verfügbar",
      
      communityTitle: "Wir bauen das gemeinsam",
      communityText: "Feature-Wünsche sind willkommen und fließen direkt in den Update-Zyklus ein. Dein Feedback gestaltet ENDURE mit.",
      communityLink: "Schließ dich uns auf GitHub an",
      instagramLink: "Folge uns auf Instagram"
    },
    // Comparison / capability table
    comparison: {
      title: "ENDURE",
      titleHighlight: "auf einen Blick",
      subtitle: "Alles, was die App kann — an einem Ort, ohne Kleingedrucktes.",
      featureLabel: "Funktion",
      valueLabel: "Das bekommst du",
      rows: [
        { feature: "Preis", value: "Gratis im Early Release — kein Abo" },
        { feature: "Plattformen", value: "iOS & Android (Windows & macOS geplant)" },
        { feature: "Trainer-Steuerung", value: "Bluetooth Smart Trainer, Power Meter & HR-Monitore (ERG-Modus)" },
        { feature: "Workout-Import", value: ".ZWO, .MRC und .ERG Dateien" },
        { feature: "Analyse", value: "FTP- & VO2max-Trends, Power Profile, Zeit in Zonen" },
        { feature: "Laktat LT1 / LT2", value: "Eintrag während & nach der Fahrt, Schwellen automatisch geschätzt" },
        { feature: "Climbing Efficiency", value: "Automatisches VAM-basiertes Kletter-Scoring" },
        { feature: "Strava", value: "Auto-Upload & Verlaufs-Sync" },
        { feature: "Start", value: "Vom App-Start bis zur Fahrt in unter 30 Sekunden" }
      ]
    },
    // FAQ
    faq: {
      title: "Häufige",
      titleHighlight: "Fragen",
      subtitle: "Alles, was du vor deiner ersten Fahrt wissen musst.",
      items: [
        {
          q: "Ist ENDURE kostenlos?",
          a: "Ja. ENDURE ist im Early Release auf iOS und Android komplett kostenlos, während wir die App weiter verbessern. Kein Abo, keine kostenpflichtigen Features — einfach herunterladen und losfahren."
        },
        {
          q: "Welche Smart Trainer und Sensoren funktionieren mit ENDURE?",
          a: "ENDURE verbindet sich per Bluetooth mit Smart Trainern, Power Metern und Herzfrequenz-Sensoren. Unterstützt dein Trainer die standardmäßige Bluetooth-Widerstandssteuerung, kann ENDURE ihn im ERG-Modus automatisch steuern."
        },
        {
          q: "Auf welchen Plattformen ist ENDURE verfügbar?",
          a: "ENDURE ist als Early Release für iOS und Android verfügbar. Desktop-Versionen für Windows und macOS sind in Planung, damit du später auch am großen Bildschirm trainieren kannst."
        },
        {
          q: "Wie schätzt ENDURE FTP und VO2max?",
          a: "ENDURE analysiert deine aufgezeichneten Power- und Herzfrequenzdaten über mehrere Fahrten hinweg und modelliert daraus deine FTP- und VO2max-Trends — du siehst deine Entwicklung Woche für Woche statt aus einem einzelnen Test."
        },
        {
          q: "Was ist das Laktat-Feature (LT1 / LT2)?",
          a: "ENDURE ist die erste Cycling-App, mit der du Laktatwerte während oder nach der Fahrt eintragen kannst. Aus diesen Werten wird eine Kurve gefittet und LT1 und LT2 werden automatisch geschätzt — inklusive Konfidenztunnel um das Ergebnis."
        },
        {
          q: "Synchronisiert ENDURE mit Strava?",
          a: "Ja. ENDURE lädt deine Fahrten automatisch zu Strava hoch und kann beim ersten Start deinen Fahrtverlauf synchronisieren — Indoor- und Outdoor-Aktivitäten ergeben so ein komplettes Leistungsbild."
        }
      ]
    },
    // About
    about: {
      seoTitle: "Über ENDURE — Präzise Indoor-Cycling-Analyse",
      seoDescription: "Die Geschichte hinter ENDURE: wer dahintersteht, die Philosophie „Präzision statt Spielerei“ und wie FTP-, VO2max-, Laktat- und Kletter-Metriken funktionieren.",
      headline: "Über ENDURE",
      intro: "ENDURE ist eine Indoor-Cycling-App mit einer klaren Idee: Präzision statt Spielerei. Keine Spiele, kein Ballast — nur das Training und die Analyse, die dich wirklich schneller machen.",
      sections: [
        {
          title: "Wer hinter ENDURE steht",
          body: "ENDURE wird von Christoph Martin entwickelt, einem Radfahrer und Entwickler aus Österreich. Der Auslöser war simpler Frust — Indoor-Cycling-Apps waren voller Spielereien und Games, aber dünn bei der ehrlichen Analyse, die beim Besserwerden hilft. ENDURE ist die App, mit der wir selbst trainieren wollten."
        },
        {
          title: "Präzision statt Spielerei",
          body: "Jedes Feature muss sich seinen Platz verdienen. Die Workout-Bibliothek enthält nur physiologisch sinnvolle Einheiten — VO2max, Schwelle, Sweet Spot — ohne Ballast. Sessions starten in Sekunden, überstehen Verbindungsabbrüche per Auto-Resume und laufen flüssig ohne Gaming-PC. Lieber wenige Dinge herausragend als viel Lärm."
        },
        {
          title: "Wie unsere Metriken funktionieren",
          body: "FTP und VO2max werden aus deinen aufgezeichneten Power- und Herzfrequenzdaten über mehrere Fahrten modelliert, damit Trends echten Fortschritt zeigen. LT1 und LT2 werden aus Laktatwerten geschätzt, die du während oder nach der Fahrt einträgst — gefittet an eine Kurve mit Konfidenztunnel. Climbing Efficiency bewertet über deine Aufstiegsgeschwindigkeit (VAM), wie effektiv du Watt in Höhenmeter umsetzt."
        },
        {
          title: "Gemeinsam mit der Community gebaut",
          body: "ENDURE bekommt häufige Updates, und Feature-Wünsche fließen direkt in den Zyklus ein. Die Richtung der App wird von den Radfahrern geprägt, die damit fahren — sei dabei."
        }
      ],
      backHome: "Zurück zur Startseite"
    },
    // Footer
    footer: {
      tagline: "Datengetrieben. Auf Ausdauer gebaut.",

      requirementsTitle: "Systemvoraussetzungen",
      windows: "Windows 10 / 11",
      bluetooth: "Bluetooth Adapter Erforderlich",

      linksTitle: "Links",
      eventsCalendar: "Radrennen & Triathlon Kalender 2026",
      instagram: "Instagram",
      github: "GitHub",
      about: "Über uns",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      imprint: "Impressum / Legal Notice",
      androidTest: "Android Test",
      feedback: "Feedback",
      contact: "Kontakt",
      
      copyright: "ENDURE. Alle Rechte vorbehalten.",
      made: "Gemacht mit ❤️ für Radfahrer, die Daten lieben."
    },
    // Video Demo
    videoDemo: {
      title: "Erlebe Es",
      titleHighlight: "in Aktion",
      subtitle: "Vom App-Start bis zur Fahrt in unter 30 Sekunden. Präzises Training, ohne Umwege.",
      caption: "App-Start bis Fahrt — echte Geschwindigkeit, kein Zeitraffer"
    },
    // SEO
    seo: {
      title: "Endure — Smart-Trainer Indoor Cycling App mit FTP & VO2max",
      description: "Smart-Trainer Indoor Cycling App, in 30 Sekunden fahrbereit. Crash-sichere Sessions mit Auto-Resume. FTP- & VO2max-Trends. Einfach fahren und analysieren."
    },
    // Cookie Banner
    cookieBanner: {
      title: "Wir verwenden Cookies",
      description: "Wir verwenden Cookies, Google Analytics und Google AdSense, um den Traffic zu analysieren, Anzeigen auszuspielen und zu verstehen, wie die Website genutzt wird. Du kannst diese Cookies akzeptieren oder ablehnen.",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      privacyLink: "Zur Datenschutzerklärung"
    },
    // Android Test
    androidTest: {
      seoTitle: "Android Closed Test - ENDURE",
      seoDescription: "Melde dich für den geschlossenen ENDURE Android-Test auf Google Play an. Sei unter den Ersten, die die Indoor-Cycling-App auf Android testen.",
      headline: "Android Closed Test",
      intro: "ENDURE startet den geschlossenen Android-Test über Google Play. Wenn du ein Android-Gerät hast und die App testen möchtest, trag bitte die E-Mail-Adresse des Google-Kontos ein, das du im Play Store verwendest. Das muss ein Google-Konto sein (z.B. Gmail oder Google Workspace) — sonst kannst du dem Test nicht beitreten. Sobald du zur Testgruppe hinzugefügt wurdest, bekommst du den offiziellen Google-Play-Testlink per E-Mail.",
      earlyNote: "Bitte beachte: Die Testversion ist noch früh und kann Fehler enthalten. Feedback ist willkommen und hilft beim ersten öffentlichen Release.",
      emailLabel: "Google Play E-Mail-Adresse (muss mit einem Google-Konto verknüpft sein)",
      emailPlaceholder: "deine.email@gmail.com",
      androidCheck: "Ich habe ein Android-Gerät",
      indoorCheck: "Ich mache Indoor Cycling / nutze einen Smart Trainer",
      stravaCheck: "Ich nutze Strava",
      stravaHint: "ENDURE kann deine bisherigen Strava-Fahrten beim ersten Start synchronisieren — empfohlen für einen schnellen Einstieg mit echten Daten.",
      submit: "Android-Test anfragen",
      submitting: "Wird gesendet...",
      successTitle: "Danke!",
      successMessage: "Deine Anfrage wurde gesendet. Ich füge dich zur Google-Play-Testgruppe hinzu und schicke dir danach den offiziellen Testlink per E-Mail. Bitte verwende beim Öffnen des Links dieselbe Google-Adresse, die du hier angegeben hast.",
      errorMessage: "Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib direkt an",
      backHome: "Zurück zur Startseite"
    },
    // Feedback
    feedback: {
      seoTitle: "Feedback - ENDURE",
      seoDescription: "Teile dein Feedback zur ENDURE Indoor-Cycling-App. Melde Bugs, schlage Features vor oder sag uns deine Meinung.",
      headline: "Feedback senden",
      intro: "Bug gefunden? Eine Idee? Oder einfach deine Erfahrung teilen? Dein Feedback gestaltet ENDURE direkt mit.",
      emailLabel: "E-Mail-Adresse",
      emailPlaceholder: "deine.email@gmail.com",
      typeLabel: "Art des Feedbacks",
      typeBug: "Bug Report",
      typeFeature: "Feature-Wunsch",
      typeGeneral: "Allgemeines Feedback",
      messageLabel: "Deine Nachricht",
      messagePlaceholder: "Beschreibe was passiert ist, was du erwartet hast, oder was du dir wünschen würdest...",
      deviceLabel: "Geräteinformationen (optional)",
      devicePlaceholder: "z.B. Samsung Galaxy S24, Android 15",
      submit: "Feedback senden",
      submitting: "Wird gesendet...",
      successTitle: "Danke!",
      successMessage: "Dein Feedback ist angekommen. Wenn du deine E-Mail hinterlassen hast, melde ich mich eventuell mit Rückfragen oder wenn dein Vorschlag umgesetzt wurde.",
      errorMessage: "Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib direkt an",
      backHome: "Zurück zur Startseite"
    }
  }
};

export function getTranslations(lang: 'en' | 'de' = 'en') {
  return translations[lang] || translations.en;
}
