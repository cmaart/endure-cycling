// Translation content for EN and DE
export const translations = {
  en: {
    // Nav
    nav: {
      features: "Features",
      virtualShifting: "Virtual Shifting",
      comparison: "Comparison",
      guides: "Guides",
      roadmap: "Roadmap",
      faq: "FAQ",
      cta: "Get the app"
    },
    // Hero
    hero: {
      badge: "Now on iOS & Android",
      tagline: "Precision over gimmicks",
      headline1: "Train right.",
      headline2: "See the progress.",
      subline: "Smart trainer control, FTP and VO2max trends, lactate thresholds. From app start to riding in under 30 seconds.",
      // Rendered as an H2 under the subline: the headline carries the claim, this
      // line carries the terms riders actually search for.
      seoLine: "Indoor cycling app for smart and turbo trainers — iOS & Android",
      ctaIos: "Download on the App Store",
      ctaAndroid: "Get it on Google Play",
      secondary: "Frequent updates, built together with the cycling community.",
      desktopNote: "Desktop versions (Windows & macOS) planned",
      appStoreBadgeAlt: "Download on the App Store",
      googlePlayBadgeAlt: "Get it on Google Play",
      // Aria-label for the carousel phones and their dots; {name} is an appScreens label.
      screenshotAction: "Show {name} screenshot"
    },
    // App screenshots, shared by the hero carousel (Hero.astro) and the
    // screenshot showcase (Features.astro). label = short name for aria-labels,
    // alt = descriptive alt text, caption = only on the screens the grid shows.
    appScreens: {
      ride: {
        label: "Ride screen",
        alt: "ENDURE ride screen with ERG target power, heart rate, cadence and CORE heat zone",
        caption: "Ride Screen: precise ERG control with live CORE heat zones"
      },
      vo2max: {
        label: "VO2max trend",
        alt: "ENDURE VO2max trend with age-group benchmark and the rides that moved it",
        caption: "VO2max estimated from your rides — no lab test, with age-group benchmark"
      },
      zones: {
        label: "Time in zones",
        alt: "ENDURE time in zones with the weekly Z1 to Z7 power distribution",
        caption: "Time in Zones: where your training time actually goes, week by week"
      },
      coaching: {
        label: "AI coaching",
        alt: "ENDURE AI coaching insights with training analysis and coach tips",
        caption: "AI Coaching Insights: what worked, what to fix, what to do next"
      },
      activity: {
        label: "Activity detail",
        alt: "ENDURE activity detail with power, heart rate, TSS and efficiency metrics",
        caption: "Every ride in detail: NP, IF, TSS, Pw:Hr and efficiency factor"
      },
      today: {
        label: "Today view",
        alt: "ENDURE today view with recovery score, load balance and the workout prescribed for today"
      },
      kpis: {
        label: "KPI dashboard",
        alt: "ENDURE KPI dashboard with form, fitness, weekly TSS, eFTP, VO2max and lactate threshold"
      },
      library: {
        label: "Workout library",
        alt: "ENDURE workout library with training categories and interval previews"
      },
      calendarMonth: {
        label: "Training calendar",
        alt: "ENDURE training calendar with a ride's route map and elevation profile"
      },
      calendarWeek: {
        label: "Weekly calendar",
        alt: "ENDURE training calendar with rides, runs and swims synced from Strava"
      }
    },
    // Ticker strip
    ticker: [
      "Ready in <30 s",
      "ERG mode",
      "Virtual Shifting",
      "SIM mode",
      "Crash-proof sessions",
      "Lactate LT1/LT2",
      "CORE heat zones",
      "Strava / intervals.icu sync",
      ".ZWO import",
      "Climbing Efficiency"
    ],
    // Climbing Efficiency
    climbingEfficiency: {
      badge: "New Feature",
      headline1: "How well do you actually climb?",
      headline2: "Climbing Efficiency puts a number on it.",
      description: "Climbing Efficiency scores how effectively you turn watts into vertical meters. ENDURE detects the climbs in your outdoor rides automatically and calculates a personal climbing score from them. It is one of the first apps worldwide to do this.",
      stat1: "Vertical speed measured",
      stat2: "Unique metric worldwide",
      bullets: [
        "<strong>Automatic climb detection:</strong> ENDURE identifies every climb in your outdoor rides.",
        "<strong>VAM-based scoring:</strong> The score is built on your vertical ascent speed in meters per hour."
      ],
      moreLink: "How Climbing Efficiency is calculated"
    },
    // Lactate (Industry First)
    lactate: {
      badge: "Industry first for cycling apps",
      headline1: "Lactate, logged from your bike.",
      headline2: "LT1 & LT2 estimated automatically.",
      description: "ENDURE is the first cycling app that lets you log lactate readings during a ride, or add them afterwards. From those values it estimates your LT1 and LT2 thresholds automatically, with a confidence tunnel around the fitted curve. Your lactate data sits right next to your power data, so you don't need spreadsheets or a separate tool.",
      stat1Title: "LT1 + LT2",
      stat1Sub: "Auto-estimated",
      stat2Title: "In-ride · Post-ride",
      stat2Sub: "Log when you want",
      bullets: [
        "<strong>In-ride logging:</strong> Capture lactate values mid-workout without leaving the ride screen.",
        "<strong>Post-ride entry:</strong> Or add them later from your activity history.",
        "<strong>Automatic LT1/LT2 estimation:</strong> A fitted curve with a confidence tunnel turns your readings into thresholds you can train with."
      ],
      moreLink: "How lactate logging and LT1/LT2 estimation work",
      videoCaption: "Logging a lactate reading for a workout.",
      resultLabel: "What you get:",
      resultCaption: "Lactate profile + LT1/LT2 with confidence tunnel."
    },
    // CORE body temperature (Industry First)
    coreTemp: {
      badge: "Industry first · Native CORE integration",
      headline1: "Heat is a metric.",
      headline2: "CORE body temperature & heat zones, live in your ride.",
      description: "ENDURE is the first indoor cycling app to natively integrate the CORE body temperature sensor, with a live heat-zone display right on the ride screen. Pair it over Bluetooth like any other sensor. Your core temperature is recorded next to power and heart rate, ready for heat-training analysis after the ride.",
      stat1Title: "Live core temp",
      stat1Sub: "On the ride screen",
      stat2Title: "Heat zones",
      stat2Sub: "Train heat like power",
      bullets: [
        "<strong>Native sensor pairing:</strong> Connect your CORE sensor over Bluetooth like a power meter, without running a second app.",
        "<strong>Live heat zones:</strong> See your current heat zone during the ride and pace your heat sessions accordingly.",
        "<strong>Logged with your ride:</strong> Core temperature is stored alongside power and heart rate for post-ride analysis."
      ],
      moreLink: "More on CORE heat zones and heat training"
    },
    // Zwift Click
    zwiftClick: {
      badge: "New · Virtual Shifting",
      headline1: "Control from the bars.",
      headline2: "Hands stay where they are.",
      description: "Virtual Shifting puts your effort on the handlebar: with a Zwift Click you change your ERG target in structured workouts and trainer resistance in SIM mode — no reaching for the phone mid-interval. It pairs over Bluetooth like any other sensor. Verified with Click v1.",
      bullets: [
        "<strong>ERG target from the bars:</strong> Nudge your target watts up or down without touching the phone.",
        "<strong>Resistance in SIM mode:</strong> Click resistance up and down while you ride, no stopping.",
        "<strong>Not a simulated cassette:</strong> The buttons act on resistance directly — same feel as shifting, no gear ratios modelled.",
        "<strong>Click v1 verified:</strong> That is the hardware we have tested. A v2 is untested, so we do not claim it."
      ],
      moreLink: "Virtual Shifting without Zwift, in detail",
      imageAlt: "Zwift handlebar remotes next to a phone running an ENDURE ERG workout"
    },
    // Features
    features: {
      sectionTitle: "Built for",
      sectionTitleHighlight: "the work.",
      sectionSubtitle: "The essentials for structured training, done properly.",

      analytics: {
        title: "Progress Analytics",
        feature1: "<strong>FTP & VO2max Trends:</strong> Track your fitness evolution over weeks and months.",
        feature2: "<strong>Indoor + Outdoor:</strong> Syncs your Strava or intervals.icu rides for a complete picture.",
        feature3: "<strong>Power Profile:</strong> Visualize your strengths across durations."
      },
      
      performance: {
        title: "Fast & Rock-Solid",
        feature1: "<strong>Ready in Seconds:</strong> From app start to riding in under 30 seconds.",
        feature2: "<strong>Crash-Proof Sessions:</strong> Auto-resume, reconnect & buffer. Never lose a ride.",
        feature3: "<strong>Lightweight:</strong> Runs smooth, no gaming PC required."
      },
      
      training: {
        title: "Structured Training",
        feature1: "<strong>Targeted Workouts:</strong> Only physiologically meaningful sessions: VO2max, threshold, sweet spot.",
        feature2: "<strong>Universal Import:</strong> Supports .ZWO, .MRC, and .ERG files.",
        feature3: "<strong>Quick Free Ride:</strong> Optional ERG mode to ride by watts instantly."
      },
      
      connectivity: {
        title: "Connectivity & Sync",
        feature1: "<strong>Bluetooth Smart:</strong> Connects to Smart Trainers, Power Meters & HR Monitors.",
        feature2: "<strong>CORE Body Temperature:</strong> Native CORE sensor support with live heat zones, an industry first.",
        feature3: "<strong>Strava & intervals.icu Integration:</strong> Auto-Upload & History Sync to either platform.",
        feature4: "<strong>Virtual Shifting:</strong> With a Zwift Click (v1 verified) you change your ERG target and trainer resistance straight from the handlebar."
      },
      
      analyticsLink: "FTP & VO2max tracking in detail",
      trainersLink: "Which smart trainers work with ENDURE"
    },
    // Roadmap
    roadmap: {
      title: "Platform",
      titleHighlight: "Roadmap",
      subtitle: "Frequent updates, full gas ahead.",
      
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
      communityLink: "ENDURE on GitHub",
      instagramLink: "ENDURE on Instagram"
    },
    // Comparison / capability table
    comparison: {
      title: "ENDURE",
      titleHighlight: "at a glance",
      subtitle: "Everything the app does, in one place.",
      featureLabel: "Capability",
      valueLabel: "What you get",
      rows: [
        { feature: "Price", value: "Free right now, with an affordable subscription planned" },
        { feature: "Platforms", value: "iOS & Android (Windows & macOS planned)" },
        { feature: "Trainer control", value: "Bluetooth smart trainers, power meters & HR monitors (ERG mode)" },
        { feature: "Virtual Shifting", value: "Zwift Click (v1 verified) — ERG target & trainer resistance from the bars, no simulated cassette" },
        { feature: "Workout import", value: ".ZWO, .MRC and .ERG files" },
        { feature: "Analytics", value: "FTP & VO2max trends, power profile, time-in-zones" },
        { feature: "Lactate LT1 / LT2", value: "In-ride & post-ride logging with auto-estimated thresholds" },
        { feature: "CORE body temperature", value: "Native CORE sensor integration with live heat zones, an industry first" },
        { feature: "Climbing Efficiency", value: "Automatic VAM-based climb scoring" },
        { feature: "Strava / intervals.icu", value: "Auto-upload & ride-history sync to either platform" },
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
          a: "Yes, right now ENDURE is free on iOS and Android while we keep improving it. An affordable subscription is planned, so this is a good time to jump in."
        },
        {
          q: "Which smart trainers and sensors work with ENDURE?",
          a: "ENDURE connects over Bluetooth to smart trainers, power meters and heart-rate monitors. If your trainer supports standard Bluetooth resistance control, ENDURE can steer it automatically in ERG mode."
        },
        {
          q: "Does ENDURE work with any turbo trainer?",
          a: "For automatic resistance control, ENDURE needs a smart trainer that supports the Bluetooth standard FTMS — that covers the large majority of current models across all the well-known brands. A classic turbo trainer without electronic control cannot be steered, but you can still record the ride and all your analytics if you pair a power meter or heart-rate sensor."
        },
        {
          q: "Does ENDURE support Virtual Shifting?",
          a: "Yes, with a Zwift Click — but it is worth knowing what it does. The buttons change your ERG target inside a structured workout and trainer resistance in SIM mode; ENDURE does not simulate a cassette the way Zwift does with its Cog, so there is no gear number. The feel is the same, the mechanism is resistance. Verified with Click v1."
        },
        {
          q: "Does my Zwift Click work with ENDURE?",
          a: "A Click v1 does — that is the generation we have verified, on iOS and Android. It pairs over Bluetooth and changes your ERG target in workouts or trainer resistance in SIM mode. We have not tested a v2 yet, so we cannot promise it."
        },
        {
          q: "Which platforms is ENDURE available on?",
          a: "ENDURE is available on iOS and Android. Desktop versions for Windows and macOS are planned, so you will be able to train on the big screen later too."
        },
        {
          q: "How does ENDURE estimate FTP and VO2max?",
          a: "ENDURE analyses your recorded power and heart-rate data across rides to model your FTP and VO2max trends over time. You see your fitness evolve week by week instead of relying on a single all-out test."
        },
        {
          q: "What is the lactate (LT1 / LT2) feature?",
          a: "ENDURE is the first cycling app that lets you log lactate readings during or after a ride. From those values it fits a curve and automatically estimates your LT1 and LT2 thresholds, with a confidence tunnel around the result."
        },
        {
          q: "Does ENDURE support the CORE body temperature sensor?",
          a: "Yes. ENDURE is the first indoor cycling app with native CORE body temperature sensor integration. Pair it over Bluetooth and you get live core temperature and heat zones on the ride screen, recorded alongside power and heart rate."
        },
        {
          q: "What are heat zones and why do they matter?",
          a: "Heat zones translate your core body temperature into training ranges, just like power or heart-rate zones. Spending controlled time in the right zone triggers heat adaptations such as higher plasma volume and better cooling, which pay off in hot races and support aerobic performance."
        },
        {
          q: "Is ENDURE a good alternative to Zwift?",
          a: "It depends on what you want. Zwift is built around virtual worlds and racing; ENDURE focuses on precise structured training and analysis: FTP and VO2max trends, lactate thresholds, CORE heat zones. Many riders use ENDURE for training and analysis alongside or instead of Zwift."
        },
        {
          q: "How does ENDURE compare to TrainerRoad?",
          a: "TrainerRoad centres on algorithm-generated training plans behind a subscription. ENDURE offers a curated workout library plus deeper physiological analysis: lactate LT1/LT2, CORE body temperature with heat zones and climbing efficiency."
        },
        {
          q: "Does ENDURE sync with Strava or intervals.icu?",
          a: "Yes. ENDURE auto-uploads your rides to Strava and intervals.icu, and can sync your ride history from either on first launch, combining indoor and outdoor activities into one complete performance picture."
        },
        {
          q: "Where do I report problems or send feedback?",
          a: "Email us at info@endure-cycling.com, message us on Instagram (@endure_cycling_com), or use the feedback form on this site. Reports go straight to the team and feed into the next update."
        }
      ]
    },
    // About
    about: {
      seoTitle: "About ENDURE — The Precision Cycling Training App",
      seoDescription: "The story behind ENDURE, the precision cycling training app: who builds it, and how its FTP, VO2max, lactate, CORE heat and climbing metrics actually work.",
      headline: "About ENDURE",
      intro: "ENDURE is an indoor cycling training app built around one idea: precision over gimmicks. No games, no filler — just the training and analysis that actually make you faster.",
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
          body: "FTP and VO2max are modelled from your recorded power and heart-rate data across rides, so trends reflect real progress over time. LT1 and LT2 are estimated from lactate readings you log in-ride or afterwards, fitted to a curve with a confidence tunnel. Core body temperature comes straight from a natively paired CORE sensor, shown live with heat zones so heat training becomes as measurable as power. Climbing Efficiency scores how effectively you turn watts into vertical metres using your ascent speed (VAM)."
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
      ctaTitle1: "Driven by data.",
      ctaTitle2: "Built to endure.",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",

      requirementsTitle: "System Requirements",
      windows: "Windows 10 / 11",
      bluetooth: "Bluetooth Adapter Required",

      linksTitle: "Links",
      vsZwift: "Zwift alternative",
      vsTrainerroad: "TrainerRoad alternative",
      guides: "Training Guides",
      supportedTrainers: "Supported trainers",
      featureZwiftClick: "Virtual Shifting & Zwift Click",
      featureLactate: "Lactate LT1 & LT2",
      featureCoreTemp: "CORE heat zones",
      featureFtp: "FTP & VO2max tracking",
      featureClimbing: "Climbing Efficiency",
      featuresTitle: "Features",
      eventsCalendar: "Race Calendar 2026 – Cycling & Triathlon",
      instagram: "Instagram",
      github: "GitHub",
      about: "About",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      imprint: "Imprint / Legal Notice",
      feedback: "Feedback",
      contact: "Contact",
      
      copyright: "ENDURE. All rights reserved.",
      made: "Built in Austria for cyclists who love data."
    },
    // Video Demo
    videoDemo: {
      title: "See it",
      titleHighlight: "in action",
      subtitle: "From app start to riding in under 30 seconds, recorded in real time.",
      caption: "App start to ride, without a time-lapse"
    },
    // SEO
    seo: {
      title: "ENDURE — Indoor Cycling App for Smart & Turbo Trainers",
      description: "Indoor cycling app for smart trainers: ERG control over Bluetooth, FTP & VO2max trends, lactate LT1/LT2 and native CORE heat zones. Ready to ride in 30 seconds."
    },
    // Cookie Banner
    cookieBanner: {
      title: "We use cookies",
      description: "We use cookies, Google Analytics, and Google AdSense to analyze traffic, serve ads, and understand how the website is used. You can choose to accept or decline these cookies.",
      accept: "Accept",
      decline: "Decline",
      privacyLink: "Read our Privacy Policy"
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
    // Nav
    nav: {
      features: "Features",
      virtualShifting: "Virtual Shifting",
      comparison: "Vergleich",
      guides: "Guides",
      roadmap: "Roadmap",
      faq: "FAQ",
      cta: "App laden"
    },
    // Hero
    hero: {
      badge: "Jetzt für iOS & Android",
      tagline: "Präzision statt Spielerei",
      headline1: "Richtig trainieren.",
      headline2: "Fortschritt sehen.",
      subline: "Smart-Trainer-Steuerung, FTP- und VO2max-Trends, Laktatschwellen. Vom App-Start bis aufs Rad in unter 30 Sekunden.",
      // Als H2 unter der Subline gerendert: die Headline trägt den Claim, diese
      // Zeile trägt die Begriffe, mit denen tatsächlich gesucht wird.
      seoLine: "Indoor-Cycling- und Rollentrainer-App für iOS & Android",
      ctaIos: "Im App Store laden",
      ctaAndroid: "Bei Google Play",
      secondary: "Laufend neue Updates, entwickelt gemeinsam mit der Community.",
      desktopNote: "Desktop-Versionen (Windows & macOS) geplant",
      appStoreBadgeAlt: "Laden im App Store",
      googlePlayBadgeAlt: "Jetzt bei Google Play",
      // Aria-Label der Karussell-Phones und ihrer Dots; {name} ist ein appScreens-Label.
      screenshotAction: "Screenshot {name} anzeigen"
    },
    // App-Screenshots, gemeinsam genutzt von Hero-Karussell (Hero.astro) und
    // Screenshot-Showcase (Features.astro). label = Kurzname für Aria-Labels,
    // alt = beschreibender Alt-Text, caption = nur bei den Screens im Grid.
    appScreens: {
      ride: {
        label: "Ride Screen",
        alt: "ENDURE Ride Screen mit ERG-Zielleistung, Herzfrequenz, Trittfrequenz und CORE Heat Zone",
        caption: "Ride Screen: präzise ERG-Steuerung mit Live CORE Heat Zones"
      },
      vo2max: {
        label: "VO2max-Trend",
        alt: "ENDURE VO2max-Trend mit Altersklassen-Vergleich und den Rides, die ihn bewegt haben",
        caption: "VO2max aus deinen Rides geschätzt — ohne Labortest, mit Altersklassen-Vergleich"
      },
      zones: {
        label: "Zeit in Zonen",
        alt: "ENDURE Zeit in Zonen mit der Wochenverteilung von Z1 bis Z7",
        caption: "Zeit in Zonen: wo deine Trainingszeit wirklich landet, Woche für Woche"
      },
      coaching: {
        label: "AI Coaching",
        alt: "ENDURE AI Coaching Insights mit Trainingsanalyse und Coach-Tipps",
        caption: "AI Coaching Insights: was funktioniert hat, was fehlt, was als Nächstes kommt"
      },
      activity: {
        label: "Aktivitätsdetail",
        alt: "ENDURE Aktivitätsdetail mit Power-, Herzfrequenz-, TSS- und Effizienzwerten",
        caption: "Jede Einheit im Detail: NP, IF, TSS, Pw:Hr und Efficiency Factor"
      },
      today: {
        label: "Tagesansicht",
        alt: "ENDURE Tagesansicht mit Recovery-Score, Load Balance und dem Workout für heute"
      },
      kpis: {
        label: "KPI-Dashboard",
        alt: "ENDURE KPI-Dashboard mit Form, Fitness, Wochen-TSS, eFTP, VO2max und Laktatschwelle"
      },
      library: {
        label: "Workout-Bibliothek",
        alt: "ENDURE Workout-Bibliothek mit Trainingskategorien und Intervall-Vorschau"
      },
      calendarMonth: {
        label: "Trainingskalender",
        alt: "ENDURE Trainingskalender mit Streckenkarte und Höhenprofil einer Ausfahrt"
      },
      calendarWeek: {
        label: "Wochenkalender",
        alt: "ENDURE Trainingskalender mit Rides, Läufen und Schwimmeinheiten aus Strava"
      }
    },
    // Ticker strip
    ticker: [
      "Fahrbereit in <30 s",
      "ERG-Modus",
      "Virtual Shifting",
      "SIM-Modus",
      "Crash-sichere Sessions",
      "Laktat LT1/LT2",
      "CORE Heat Zones",
      "Strava- / intervals.icu-Sync",
      ".ZWO-Import",
      "Climbing Efficiency"
    ],
    // Climbing Efficiency
    climbingEfficiency: {
      badge: "Neues Feature",
      headline1: "Wie stark kletterst du wirklich?",
      headline2: "Climbing Efficiency macht es messbar.",
      description: "Climbing Efficiency bewertet, wie effektiv du Watt in Höhenmeter umsetzt. ENDURE erkennt Anstiege in deinen Outdoor-Fahrten automatisch und berechnet daraus deinen persönlichen Kletter-Score. Kaum eine andere App weltweit kann das.",
      stat1: "Vertikalgeschwindigkeit gemessen",
      stat2: "Weltweit einzigartige Metrik",
      bullets: [
        "<strong>Automatische Anstiegserkennung:</strong> ENDURE identifiziert jeden Anstieg in deinen Outdoor-Fahrten.",
        "<strong>VAM-basiertes Scoring:</strong> Der Score basiert auf deiner vertikalen Aufstiegsgeschwindigkeit in Metern pro Stunde."
      ],
      moreLink: "Wie Climbing Efficiency berechnet wird"
    },
    // Lactate (Industry First)
    lactate: {
      badge: "Erstmals in einer Cycling-App",
      headline1: "Laktat. Direkt vom Rad.",
      headline2: "LT1 & LT2 automatisch geschätzt.",
      description: "ENDURE ist die erste Cycling-App, mit der du Laktatwerte direkt während der Fahrt eintragen kannst oder später ergänzt. Aus deinen Werten schätzt die App LT1 und LT2 automatisch, inklusive Konfidenztunnel um die gefittete Kurve. Deine Laktatwerte stehen direkt neben deinen Leistungsdaten, ohne Tabellen und Zusatz-Tools.",
      stat1Title: "LT1 + LT2",
      stat1Sub: "Automatisch geschätzt",
      stat2Title: "Während · Nach der Fahrt",
      stat2Sub: "Eintrag, wann du willst",
      bullets: [
        "<strong>Eintrag während der Fahrt:</strong> Laktatwerte mitten im Workout erfassen, ohne den Ride-Screen zu verlassen.",
        "<strong>Eintrag im Nachhinein:</strong> Oder du ergänzt die Werte später aus deiner Aktivitätshistorie.",
        "<strong>Automatische LT1/LT2-Schätzung:</strong> Eine gefittete Kurve mit Konfidenztunnel macht aus deinen Werten Schwellen, mit denen du trainieren kannst."
      ],
      moreLink: "Wie Laktat-Eintrag und LT1/LT2-Schätzung funktionieren",
      videoCaption: "Laktatwert für ein Workout eintragen.",
      resultLabel: "Das Ergebnis:",
      resultCaption: "Laktatprofil + LT1/LT2 mit Konfidenztunnel."
    },
    // CORE body temperature (Industry First)
    coreTemp: {
      badge: "Erstmals in einer Cycling-App · Native CORE-Integration",
      headline1: "Hitze ist eine Metrik.",
      headline2: "CORE Körpertemperatur & Heat Zones, live in deiner Fahrt.",
      description: "ENDURE ist die erste Indoor-Cycling-App, die den CORE Körpertemperatur-Sensor nativ integriert, inklusive Live-Anzeige deiner Heat Zone direkt am Ride-Screen. Du verbindest ihn per Bluetooth wie jeden anderen Sensor. Deine Kerntemperatur wird neben Watt und Herzfrequenz aufgezeichnet und steht nach der Fahrt für die Hitzetraining-Analyse bereit.",
      stat1Title: "Live Kerntemperatur",
      stat1Sub: "Direkt am Ride-Screen",
      stat2Title: "Heat Zones",
      stat2Sub: "Trainiere Hitze wie Watt",
      bullets: [
        "<strong>Natives Sensor-Pairing:</strong> Du verbindest deinen CORE-Sensor per Bluetooth wie einen Powermeter, ohne zweite App.",
        "<strong>Live Heat Zones:</strong> Du siehst deine aktuelle Heat Zone während der Fahrt und kannst dein Hitzetraining gezielt steuern.",
        "<strong>Mit der Fahrt gespeichert:</strong> Die Kerntemperatur wird neben Watt und Herzfrequenz aufgezeichnet und ist nach der Fahrt bereit für die Analyse."
      ],
      moreLink: "Mehr zu CORE Heat Zones und Hitzetraining"
    },
    // Zwift Click
    zwiftClick: {
      badge: "Neu · Virtual Shifting",
      headline1: "Steuern vom Lenker.",
      headline2: "Hände bleiben, wo sie sind.",
      description: "Virtual Shifting legt deine Belastung an den Lenker: mit einem Zwift Click änderst du dein ERG-Ziel im strukturierten Workout und den Trainer-Widerstand im SIM-Modus — ohne mitten im Intervall zum Handy zu greifen. Verbunden wird per Bluetooth wie jeder andere Sensor. Mit Click v1 verifiziert.",
      bullets: [
        "<strong>ERG-Ziel vom Lenker:</strong> Watt-Ziel rauf oder runter, ohne das Handy anzufassen.",
        "<strong>Widerstand im SIM-Modus:</strong> Klick den Widerstand während der Fahrt rauf und runter, ohne anzuhalten.",
        "<strong>Keine simulierte Kassette:</strong> Die Tasten wirken direkt auf den Widerstand — gleiches Gefühl wie Schalten, ohne modellierte Übersetzungen.",
        "<strong>Click v1 verifiziert:</strong> Das ist die Hardware, die wir getestet haben. Ein v2 ist ungetestet, also behaupten wir ihn nicht."
      ],
      moreLink: "Virtual Shifting ohne Zwift, im Detail",
      imageAlt: "Zwift Lenker-Fernbedienungen neben einem Smartphone mit laufendem ENDURE-ERG-Workout"
    },
    // Features
    features: {
      sectionTitle: "Gemacht für",
      sectionTitleHighlight: "echtes Training.",
      sectionSubtitle: "Das Wesentliche für strukturiertes Training, sauber umgesetzt.",

      analytics: {
        title: "Fortschritts-Analyse",
        feature1: "<strong>FTP- & VO2max-Trends:</strong> Verfolge deine Fitness-Entwicklung über Wochen und Monate.",
        feature2: "<strong>Indoor + Outdoor:</strong> Synchronisiert deine Strava- oder intervals.icu-Fahrten für ein komplettes Bild.",
        feature3: "<strong>Power Profil:</strong> Visualisiere deine Stärken über verschiedene Dauern."
      },
      
      performance: {
        title: "Schnell & Stabil",
        feature1: "<strong>Bereit in Sekunden:</strong> Vom App-Start bis zur Fahrt in unter 30 Sekunden.",
        feature2: "<strong>Crash-sichere Sessions:</strong> Auto-Resume, Reconnect & Buffer. Keine Fahrt geht verloren.",
        feature3: "<strong>Leichtgewichtig:</strong> Läuft flüssig, kein Gaming-PC nötig."
      },
      
      training: {
        title: "Strukturiertes Training",
        feature1: "<strong>Zielgerichtete Workouts:</strong> Nur physiologisch sinnvolle Einheiten: VO2max, Schwelle, Sweet Spot.",
        feature2: "<strong>Universeller Import:</strong> Unterstützt .ZWO, .MRC und .ERG Dateien.",
        feature3: "<strong>Schnelles Freifahren:</strong> Optionaler ERG-Modus um sofort nach Watt zu fahren."
      },
      
      connectivity: {
        title: "Konnektivität & Sync",
        feature1: "<strong>Bluetooth Smart:</strong> Verbindet sich mit Smart Trainern, Power Metern & HR Monitoren.",
        feature2: "<strong>CORE Körpertemperatur:</strong> Native CORE-Sensor-Unterstützung mit Live Heat Zones, erstmals in einer Cycling-App.",
        feature3: "<strong>Strava & intervals.icu Integration:</strong> Auto-Upload & Verlaufs-Sync zu beiden Plattformen.",
        feature4: "<strong>Virtual Shifting:</strong> Mit einem Zwift Click (v1 verifiziert) änderst du ERG-Ziel und Trainer-Widerstand direkt vom Lenker."
      },
      
      analyticsLink: "FTP- & VO2max-Tracking im Detail",
      trainersLink: "Welche Rollentrainer mit ENDURE funktionieren"
    },
    // Roadmap
    roadmap: {
      title: "Plattform",
      titleHighlight: "Roadmap",
      subtitle: "Häufige Updates, Vollgas voraus.",
      
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
      communityLink: "ENDURE auf GitHub",
      instagramLink: "ENDURE auf Instagram"
    },
    // Comparison / capability table
    comparison: {
      title: "ENDURE",
      titleHighlight: "auf einen Blick",
      subtitle: "Alles, was die App kann, an einem Ort.",
      featureLabel: "Funktion",
      valueLabel: "Das bekommst du",
      rows: [
        { feature: "Preis", value: "Aktuell kostenlos, ein preiswertes Abo ist geplant" },
        { feature: "Plattformen", value: "iOS & Android (Windows & macOS geplant)" },
        { feature: "Trainer-Steuerung", value: "Bluetooth Smart Trainer, Power Meter & HR-Monitore (ERG-Modus)" },
        { feature: "Virtual Shifting", value: "Zwift Click (v1 verifiziert) — ERG-Ziel & Trainer-Widerstand vom Lenker, ohne simulierte Kassette" },
        { feature: "Workout-Import", value: ".ZWO, .MRC und .ERG Dateien" },
        { feature: "Analyse", value: "FTP- & VO2max-Trends, Power Profile, Zeit in Zonen" },
        { feature: "Laktat LT1 / LT2", value: "Eintrag während & nach der Fahrt, Schwellen automatisch geschätzt" },
        { feature: "CORE Körpertemperatur", value: "Native CORE-Sensor-Integration mit Live Heat Zones, erstmals in einer Cycling-App" },
        { feature: "Climbing Efficiency", value: "Automatisches VAM-basiertes Kletter-Scoring" },
        { feature: "Strava / intervals.icu", value: "Auto-Upload & Verlaufs-Sync zu beiden Plattformen" },
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
          a: "Ja, aktuell ist ENDURE auf iOS und Android kostenlos, während wir die App weiter verbessern. Ein preiswertes Abo ist geplant, jetzt ist also ein guter Zeitpunkt zum Einsteigen."
        },
        {
          q: "Welche Smart Trainer und Sensoren funktionieren mit ENDURE?",
          a: "ENDURE verbindet sich per Bluetooth mit Smart Trainern, Power Metern und Herzfrequenz-Sensoren. Unterstützt dein Trainer die standardmäßige Bluetooth-Widerstandssteuerung, kann ENDURE ihn im ERG-Modus automatisch steuern."
        },
        {
          q: "Funktioniert ENDURE mit jedem Rollentrainer?",
          a: "Für die automatische Widerstandssteuerung braucht ENDURE einen Smart Trainer, der den Bluetooth-Standard FTMS unterstützt — das trifft auf die große Mehrheit der aktuellen Modelle aller bekannten Hersteller zu. Eine klassische Rolle ohne elektronische Steuerung lässt sich nicht ansteuern; aufzeichnen und auswerten kannst du die Fahrt trotzdem, wenn du einen Powermeter oder Herzfrequenz-Sensor verbindest."
        },
        {
          q: "Unterstützt ENDURE Virtual Shifting?",
          a: "Ja, mit einem Zwift Click — es lohnt sich aber zu wissen, was dabei passiert. Die Tasten ändern dein ERG-Ziel im strukturierten Workout und den Trainer-Widerstand im SIM-Modus. ENDURE simuliert keine Kassette wie Zwift mit dem Cog, es gibt also keine Gangnummer. Das Gefühl ist dasselbe, der Mechanismus ist Widerstand. Mit Click v1 verifiziert."
        },
        {
          q: "Funktioniert mein Zwift Click mit ENDURE?",
          a: "Ein Click v1 ja — das ist die Generation, die wir verifiziert haben, auf iOS und Android. Er verbindet sich per Bluetooth und ändert dein ERG-Ziel im Workout oder den Trainer-Widerstand im SIM-Modus. Einen v2 haben wir nicht getestet, wir können ihn also nicht versprechen."
        },
        {
          q: "Auf welchen Plattformen ist ENDURE verfügbar?",
          a: "ENDURE ist für iOS und Android verfügbar. Desktop-Versionen für Windows und macOS sind in Planung, damit du später auch am großen Bildschirm trainieren kannst."
        },
        {
          q: "Wie schätzt ENDURE FTP und VO2max?",
          a: "ENDURE analysiert deine aufgezeichneten Power- und Herzfrequenzdaten über mehrere Fahrten hinweg und modelliert daraus deine FTP- und VO2max-Trends. Du siehst deine Entwicklung Woche für Woche statt aus einem einzelnen Test."
        },
        {
          q: "Was ist das Laktat-Feature (LT1 / LT2)?",
          a: "ENDURE ist die erste Cycling-App, mit der du Laktatwerte während oder nach der Fahrt eintragen kannst. Aus diesen Werten wird eine Kurve gefittet und LT1 und LT2 werden automatisch geschätzt, inklusive Konfidenztunnel um das Ergebnis."
        },
        {
          q: "Unterstützt ENDURE den CORE Körpertemperatur-Sensor?",
          a: "Ja. ENDURE ist die erste Indoor-Cycling-App mit nativer Integration des CORE Körpertemperatur-Sensors. Per Bluetooth verbunden siehst du Kerntemperatur und Heat Zones live am Ride-Screen, aufgezeichnet neben Watt und Herzfrequenz."
        },
        {
          q: "Was sind Heat Zones und warum sind sie wichtig?",
          a: "Heat Zones übersetzen deine Körperkerntemperatur in Trainingsbereiche, ähnlich wie Watt- oder Herzfrequenzzonen. Kontrollierte Zeit in der richtigen Zone löst Hitzeadaptionen aus: mehr Plasmavolumen und bessere Kühlung. Das zahlt sich bei heißen Rennen aus und unterstützt die aerobe Leistung."
        },
        {
          q: "Ist ENDURE eine gute Alternative zu Zwift?",
          a: "Kommt darauf an, was du suchst. Zwift dreht sich um virtuelle Welten und Rennen; ENDURE fokussiert auf präzises strukturiertes Training und Analyse: FTP- und VO2max-Trends, Laktatschwellen, CORE Heat Zones. Viele fahren ENDURE fürs Training neben oder statt Zwift."
        },
        {
          q: "Wie schlägt sich ENDURE im Vergleich zu TrainerRoad?",
          a: "TrainerRoad setzt auf algorithmisch generierte Trainingspläne im Abo. ENDURE bietet eine kuratierte Workout-Bibliothek plus tiefere physiologische Analyse: Laktat LT1/LT2, CORE Körpertemperatur mit Heat Zones und Climbing Efficiency."
        },
        {
          q: "Synchronisiert ENDURE mit Strava oder intervals.icu?",
          a: "Ja. ENDURE lädt deine Fahrten automatisch zu Strava und intervals.icu hoch und kann beim ersten Start deinen Fahrtverlauf aus beiden Quellen synchronisieren. Indoor- und Outdoor-Aktivitäten ergeben so ein komplettes Leistungsbild."
        },
        {
          q: "Wo melde ich Probleme oder Feedback?",
          a: "Schreib uns per E-Mail an info@endure-cycling.com, per Instagram (@endure_cycling_com) oder über das Feedback-Formular auf dieser Seite. Meldungen landen direkt beim Team und fließen ins nächste Update ein."
        }
      ]
    },
    // About
    about: {
      seoTitle: "Über ENDURE — Die präzise Cycling-Training-App",
      seoDescription: "Die Geschichte hinter ENDURE, der präzisen Cycling-Training-App: wer dahintersteht und wie FTP-, VO2max-, Laktat-, CORE-Heat- und Kletter-Metriken funktionieren.",
      headline: "Über ENDURE",
      intro: "ENDURE ist eine Indoor-Cycling- und Trainings-App mit einer klaren Idee: Präzision statt Spielerei. Keine Spiele, kein Ballast — nur das Training und die Analyse, die dich wirklich schneller machen.",
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
          body: "FTP und VO2max werden aus deinen aufgezeichneten Power- und Herzfrequenzdaten über mehrere Fahrten modelliert, damit Trends echten Fortschritt zeigen. LT1 und LT2 werden aus Laktatwerten geschätzt, die du während oder nach der Fahrt einträgst — gefittet an eine Kurve mit Konfidenztunnel. Die Körperkerntemperatur kommt direkt vom nativ gekoppelten CORE-Sensor, live mit Heat Zones angezeigt — Hitzetraining wird so messbar wie Watt. Climbing Efficiency bewertet über deine Aufstiegsgeschwindigkeit (VAM), wie effektiv du Watt in Höhenmeter umsetzt."
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
      tagline: "Für alle, die es genau wissen wollen.",
      ctaTitle1: "Für alle,",
      ctaTitle2: "die es genau wissen wollen.",
      ctaAppStore: "App Store",
      ctaGooglePlay: "Google Play",

      requirementsTitle: "Systemvoraussetzungen",
      windows: "Windows 10 / 11",
      bluetooth: "Bluetooth Adapter Erforderlich",

      linksTitle: "Links",
      vsZwift: "Zwift Alternative",
      vsTrainerroad: "TrainerRoad Alternative",
      guides: "Trainings-Guides",
      supportedTrainers: "Unterstützte Trainer",
      featureZwiftClick: "Virtual Shifting & Zwift Click",
      featureLactate: "Laktat LT1 & LT2",
      featureCoreTemp: "CORE Heat Zones",
      featureFtp: "FTP- & VO2max-Tracking",
      featureClimbing: "Climbing Efficiency",
      featuresTitle: "Features",
      eventsCalendar: "Radrennen & Triathlon Kalender 2026",
      instagram: "Instagram",
      github: "GitHub",
      about: "Über uns",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      imprint: "Impressum / Legal Notice",
      feedback: "Feedback",
      contact: "Kontakt",
      
      copyright: "ENDURE. Alle Rechte vorbehalten.",
      made: "Entwickelt in Österreich für Radfahrer, die Daten lieben."
    },
    // Video Demo
    videoDemo: {
      title: "So schnell",
      titleHighlight: "geht's wirklich",
      subtitle: "Vom App-Start bis aufs Rad in unter 30 Sekunden, aufgenommen in Echtzeit.",
      caption: "App-Start bis Fahrt, ohne Zeitraffer"
    },
    // SEO
    seo: {
      title: "ENDURE — Rollentrainer & Indoor Cycling App mit FTP & VO2max",
      description: "Indoor-Cycling-App für deinen Rollentrainer: ERG-Steuerung per Bluetooth, FTP- & VO2max-Trends, Laktat LT1/LT2 und native CORE Heat Zones. In 30 Sekunden fahrbereit."
    },
    // Cookie Banner
    cookieBanner: {
      title: "Wir verwenden Cookies",
      description: "Wir verwenden Cookies, Google Analytics und Google AdSense, um den Traffic zu analysieren, Anzeigen auszuspielen und zu verstehen, wie die Website genutzt wird. Du kannst diese Cookies akzeptieren oder ablehnen.",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      privacyLink: "Zur Datenschutzerklärung"
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
