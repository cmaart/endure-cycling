// Comparison-page content for /vs/* pages, keyed by language then competitor.
// Same convention as translations.ts: every key exists in both `en` and `de`.

export type VsKey = 'zwift' | 'trainerroad';

export const vsContent = {
  en: {
    zwift: {
      seoTitle: "Zwift Alternative: ENDURE — Precision Indoor Cycling App",
      seoDescription: "Looking for a Zwift alternative? ENDURE on iOS and Android, 14 days free to try: ERG trainer control, FTP & VO2max trends, lactate LT1/LT2, CORE heat zones — and your Zwift Click v1 keeps working.",
      breadcrumb: "Zwift alternative",
      h1: "ENDURE — the Zwift alternative for precision training",
      subtitle: "Looking to switch? Here is the honest comparison.",
      directAnswer: "ENDURE is an alternative to Zwift for riders who want training rather than a game. Zwift is a virtual-world platform built around racing, group rides and motivation through gameplay. ENDURE is a precision training app built around structured workouts and physiological analysis — FTP and VO2max trends, lactate LT1/LT2 thresholds and native CORE heat zones. Different tools for different goals.",
      intro: "Both apps control your smart trainer and record your rides — but they solve different problems. Here is an honest side-by-side comparison so you can pick the right tool for your training.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Zwift",
      rows: [
        { feature: "Core focus", endure: "Precision training & physiological analysis", other: "Virtual worlds, racing & social riding" },
        { feature: "Price", endure: "Affordable subscription, monthly or annual, with a 14-day free trial", other: "Paid monthly subscription" },
        { feature: "Platforms", endure: "iOS & Android", other: "PC, Mac, iOS, Android, Apple TV" },
        { feature: "Smart trainer control (ERG)", endure: "Yes — Bluetooth, with smart-smoothing", other: "Yes" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verified) — ERG target & resistance from the bars, no simulated cassette", other: "Yes — simulated gears via Zwift Cog & Click" },
        { feature: "Structured workouts", endure: "Curated physiological library + .ZWO/.MRC/.ERG import", other: "Large library + custom workouts" },
        { feature: "FTP & VO2max trends", endure: "Modelled continuously from your ride data", other: "FTP from tests/races; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation — industry first", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones — industry first", other: "No native heat-zone display" },
        { feature: "Climbing metric", endure: "Automatic VAM-based Climbing Efficiency score", other: "Virtual climbs & climb portal" },
        { feature: "Racing & social", endure: "Not the focus", other: "Races, group rides, huge community" },
        { feature: "Hardware requirements", endure: "Runs smoothly on a phone — no gaming PC", other: "Graphics-heavy; benefits from strong hardware" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "Auto-upload" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want structured training and honest analysis instead of a game",
        "care about physiological metrics: lactate thresholds, VO2max trends, heat adaptation",
        "use a CORE body temperature sensor and want native heat zones in-ride",
        "want an affordable subscription, with 14 days free before you commit",
        "already own a Zwift Click v1 — it works with ENDURE too, for your ERG target and resistance",
        "train on a phone or tablet and don't want to feed a gaming PC"
      ],
      chooseOtherTitle: "Choose Zwift if you…",
      chooseOther: [
        "need racing, group rides and a virtual world to stay motivated",
        "value the biggest indoor cycling community",
        "want entertainment first and analysis second"
      ],
      switchTitle: "Switching from Zwift? Here is what you keep",
      switchBullets: [
        "<strong>Your trainer:</strong> ENDURE controls smart trainers over the Bluetooth standard FTMS — the same hardware you already ride with, no new purchase.",
        "<strong>Your Zwift Click:</strong> a v1 pairs like any other sensor and changes your ERG target or trainer resistance from the bars. ENDURE does not simulate a cassette, so it is resistance control rather than gears.",
        "<strong>Your workouts:</strong> .ZWO files import directly, along with .MRC and .ERG — your existing session library comes with you.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, so indoor and outdoor training sit in one picture from day one.",
        "<strong>Your hardware budget:</strong> ENDURE runs on the phone or tablet you already own — no gaming PC to keep fed."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Absolutely — many riders do. A common setup: ride Zwift for races and social events, and use ENDURE for structured training sessions and as the analysis home for FTP, VO2max, lactate and heat metrics. ENDURE syncs your rides via Strava or intervals.icu, so nothing gets lost.",
      faq: [
        {
          q: "What does ENDURE cost compared with Zwift?",
          a: "Both are subscriptions. ENDURE Premium is billed monthly or annually through the App Store or Google Play, priced at the low end on purpose, and every new account starts with 14 days free. For that you get ERG smart trainer control, a curated workout library, FTP and VO2max trends, lactate LT1/LT2 estimation and CORE heat zones. What you do not get is virtual worlds and racing, which is Zwift's core."
        },
        {
          q: "Can I try ENDURE for free?",
          a: "Yes, 14 days on a new account with the full Premium feature set. After that it is a monthly or annual subscription. Riders who created an account before Premium launched keep full access at no cost."
        },
        {
          q: "Does ENDURE have virtual worlds like Zwift?",
          a: "No — deliberately. ENDURE follows a precision-over-gimmicks philosophy: structured workouts, clean ride screens and deep analysis instead of avatars and virtual roads."
        },
        {
          q: "Can ENDURE control the same smart trainers as Zwift?",
          a: "Yes. ENDURE controls smart trainers over standard Bluetooth in ERG mode, and connects power meters and heart-rate monitors — the same hardware you use with Zwift. A Zwift Click v1 works too: it pairs like any sensor and controls your ERG target and trainer resistance from the handlebar, though ENDURE does not simulate a cassette the way Zwift does."
        }
      ],
      ctaTitle: "Try ENDURE — 14 days free on iOS & Android",
      ctaBody: "Download ENDURE on iOS or Android, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place. The first 14 days cost nothing.",
      disclaimer: "Zwift is a trademark of Zwift, Inc. This comparison reflects publicly available information as of July 2026 and describes ENDURE's current feature set — check both vendors for current details.",
      backHome: "Back to Homepage"
    },
    trainerroad: {
      seoTitle: "TrainerRoad Alternative: ENDURE — Lactate & Heat Zones",
      seoDescription: "Looking for a TrainerRoad alternative? ENDURE on iOS and Android, 14 days free to try: lactate LT1/LT2, native CORE heat zones, FTP & VO2max trends — a curated library instead of an algorithm.",
      breadcrumb: "TrainerRoad alternative",
      h1: "ENDURE — the TrainerRoad alternative for riders who want the data",
      subtitle: "Looking to switch? Here is the honest comparison.",
      directAnswer: "ENDURE is an alternative to TrainerRoad for riders who would rather see their physiology than follow a prescribed plan. TrainerRoad is a subscription service built around algorithm-generated, adaptive training plans. ENDURE is a precision training app built around a curated workout library and deeper physiological analysis — lactate LT1/LT2 thresholds, native CORE heat zones, FTP and VO2max trends. Plans versus physiology: that's the core difference.",
      intro: "Both apps take structured indoor training seriously — no virtual worlds on either side. The difference is philosophy: TrainerRoad prescribes your training, ENDURE measures your physiology and lets you train with precision. Here is the honest comparison.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainerRoad",
      rows: [
        { feature: "Core focus", endure: "Precision training & physiological analysis", other: "Adaptive, algorithm-generated training plans" },
        { feature: "Price", endure: "Affordable subscription, monthly or annual, with a 14-day free trial", other: "Paid monthly/annual subscription" },
        { feature: "Platforms", endure: "iOS & Android", other: "PC, Mac, iOS, Android" },
        { feature: "Smart trainer control (ERG)", endure: "Yes — Bluetooth, with smart-smoothing", other: "Yes" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verified) — ERG target & resistance from the bars", other: "Not available" },
        { feature: "Training plans", endure: "Curated workout library — you stay in charge", other: "Adaptive plans built by algorithms" },
        { feature: "Workout import", endure: ".ZWO, .MRC and .ERG files", other: "Workout creator + TrainNow" },
        { feature: "FTP & VO2max trends", endure: "Both modelled continuously from ride data", other: "AI FTP detection; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation — industry first", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones — industry first", other: "No native heat-zone display" },
        { feature: "Climbing metric", endure: "Automatic VAM-based Climbing Efficiency score", other: "Not available" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "Auto-upload" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want to see your physiology — lactate thresholds, VO2max trend, heat adaptation — not just follow a plan",
        "use a CORE body temperature sensor and want native heat zones in-ride",
        "prefer picking meaningful workouts yourself over being scheduled by an algorithm",
        "want an affordable subscription, with 14 days free before you commit"
      ],
      chooseOtherTitle: "Choose TrainerRoad if you…",
      chooseOther: [
        "want a fully prescribed, hands-off training plan toward a target event",
        "like algorithm-driven progression management",
        "don't mind a subscription for that coaching layer"
      ],
      switchTitle: "Switching from TrainerRoad? Here is what you keep",
      switchBullets: [
        "<strong>Your trainer:</strong> ENDURE controls smart trainers over the Bluetooth standard FTMS — the same hardware, no new purchase.",
        "<strong>Your workouts:</strong> .ZWO, .MRC and .ERG files import directly, so structured sessions you already rely on carry over.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, combining indoor and outdoor training into one performance picture.",
        "<strong>Your structure:</strong> the workout library is curated by physiological purpose — VO2max, threshold, sweet spot — so you can rebuild a week without an algorithm scheduling it for you.",
        "<strong>Your money:</strong> a subscription at the low end of what training apps cost, and 14 days free to decide whether the data is worth it to you."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Yes. Some riders follow a TrainerRoad plan and use ENDURE as their physiological dashboard — logging lactate tests, tracking CORE heat zones and watching FTP and VO2max trends across all rides via Strava or intervals.icu sync.",
      faq: [
        {
          q: "How does ENDURE's pricing compare with TrainerRoad?",
          a: "Both are subscriptions. ENDURE Premium is billed monthly or annually through the App Store or Google Play, kept at the low end on purpose, and new accounts start with 14 days free. It covers ERG smart trainer control, a curated workout library, FTP and VO2max trends, lactate LT1/LT2 estimation and CORE heat zones. What it deliberately does not do is generate an adaptive training plan for you, which is TrainerRoad's core."
        },
        {
          q: "Does ENDURE build training plans like TrainerRoad?",
          a: "No. ENDURE provides a curated library of physiologically meaningful workouts (VO2max, threshold, sweet spot) and precise analysis, but deliberately no automated plan generation — you stay in charge of your training."
        },
        {
          q: "Is ENDURE cheaper than TrainerRoad?",
          a: "Both charge a subscription. ENDURE Premium is billed monthly or annually through the app stores and sits at the low end of what training apps cost, and the first 14 days are free, so you can compare the two before paying for either."
        },
        {
          q: "Which app is better for lactate and heat training?",
          a: "ENDURE. It is the first cycling app with in-ride lactate logging and automatic LT1/LT2 estimation, and the first with native CORE body temperature integration including live heat zones. TrainerRoad offers neither natively."
        }
      ],
      ctaTitle: "Try ENDURE — 14 days free on iOS & Android",
      ctaBody: "Download ENDURE on iOS or Android, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place.",
      disclaimer: "TrainerRoad is a trademark of TrainerRoad LLC. This comparison reflects publicly available information as of July 2026 and describes ENDURE's current feature set — check both vendors for current details.",
      backHome: "Back to Homepage"
    }
  },
  de: {
    zwift: {
      seoTitle: "Zwift Alternative: ENDURE — Präzision statt virtueller Welt",
      seoDescription: "Du suchst eine Zwift Alternative? ENDURE für iOS und Android, 14 Tage gratis testen: ERG-Steuerung für Rollentrainer, FTP- & VO2max-Trends, Laktat LT1/LT2, CORE Heat Zones — und dein Zwift Click v1 läuft weiter.",
      breadcrumb: "Zwift Alternative",
      h1: "ENDURE — die Zwift Alternative für präzises Training",
      subtitle: "Du überlegst zu wechseln? Hier der ehrliche Vergleich.",
      directAnswer: "ENDURE ist eine Alternative zu Zwift für alle, die trainieren wollen statt zu spielen. Zwift ist eine Plattform mit virtuellen Welten, gebaut für Rennen, Gruppenfahrten und Motivation durch Gameplay. ENDURE ist eine Präzisions-Trainings-App rund um strukturierte Workouts und physiologische Analyse — FTP- und VO2max-Trends, Laktat LT1/LT2 und native CORE Heat Zones. Verschiedene Werkzeuge für verschiedene Ziele.",
      intro: "Beide Apps steuern deinen Smart Trainer und zeichnen deine Fahrten auf — aber sie lösen unterschiedliche Probleme. Hier der ehrliche Vergleich, damit du das richtige Werkzeug für dein Training wählst.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Zwift",
      rows: [
        { feature: "Kernfokus", endure: "Präzises Training & physiologische Analyse", other: "Virtuelle Welten, Rennen & Social Riding" },
        { feature: "Preis", endure: "Preiswertes Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "Kostenpflichtiges Monatsabo" },
        { feature: "Plattformen", endure: "iOS & Android", other: "PC, Mac, iOS, Android, Apple TV" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja — Bluetooth, mit Smart-Smoothing", other: "Ja" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verifiziert) — ERG-Ziel & Widerstand vom Lenker, ohne simulierte Kassette", other: "Ja — simulierte Gänge über Zwift Cog & Click" },
        { feature: "Strukturierte Workouts", endure: "Kuratierte physiologische Bibliothek + .ZWO/.MRC/.ERG-Import", other: "Große Bibliothek + eigene Workouts" },
        { feature: "FTP- & VO2max-Trends", endure: "Kontinuierlich aus deinen Fahrtdaten modelliert", other: "FTP aus Tests/Rennen; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung — erstmals in einer Cycling-App", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones — erstmals in einer Cycling-App", other: "Keine native Heat-Zone-Anzeige" },
        { feature: "Kletter-Metrik", endure: "Automatischer VAM-basierter Climbing-Efficiency-Score", other: "Virtuelle Anstiege & Climb Portal" },
        { feature: "Rennen & Social", endure: "Nicht der Fokus", other: "Rennen, Gruppenfahrten, riesige Community" },
        { feature: "Hardware-Anforderungen", endure: "Läuft flüssig am Handy — kein Gaming-PC", other: "Grafiklastig; profitiert von starker Hardware" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "Auto-Upload" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "strukturiertes Training und ehrliche Analyse statt eines Spiels willst",
        "physiologische Metriken willst: Laktatschwellen, VO2max-Trends, Hitzeadaption",
        "einen CORE Körpertemperatur-Sensor nutzt und native Heat Zones in der Fahrt willst",
        "ein preiswertes Abo willst und 14 Tage gratis testen, bevor du dich festlegst",
        "schon einen Zwift Click v1 besitzt — er funktioniert auch mit ENDURE, für ERG-Ziel und Widerstand",
        "am Handy oder Tablet trainierst und keinen Gaming-PC füttern willst"
      ],
      chooseOtherTitle: "Wähle Zwift, wenn du…",
      chooseOther: [
        "Rennen, Gruppenfahrten und eine virtuelle Welt zur Motivation brauchst",
        "die größte Indoor-Cycling-Community suchst",
        "Unterhaltung an erster und Analyse an zweiter Stelle willst"
      ],
      switchTitle: "Wechsel von Zwift? Das behältst du",
      switchBullets: [
        "<strong>Deinen Trainer:</strong> ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS — dieselbe Hardware, die du schon fährst, kein Neukauf.",
        "<strong>Deinen Zwift Click:</strong> ein v1 verbindet sich wie jeder andere Sensor und ändert ERG-Ziel oder Trainer-Widerstand vom Lenker. ENDURE simuliert keine Kassette, es ist also Widerstandssteuerung statt Schaltung.",
        "<strong>Deine Workouts:</strong> .ZWO-Dateien lassen sich direkt importieren, ebenso .MRC und .ERG — deine bestehende Einheiten-Sammlung kommt mit.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start, Indoor und Outdoor stehen ab Tag eins in einem Bild.",
        "<strong>Dein Hardware-Budget:</strong> ENDURE läuft auf dem Handy oder Tablet, das du schon hast — kein Gaming-PC zu füttern."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Klar — machen viele. Ein typisches Setup: Zwift für Rennen und Events, ENDURE für strukturierte Trainingseinheiten und als Analyse-Zuhause für FTP, VO2max, Laktat und Heat-Metriken. Über den Strava- oder intervals.icu-Sync geht keine Fahrt verloren.",
      faq: [
        {
          q: "Was kostet ENDURE im Vergleich zu Zwift?",
          a: "Beide kosten ein Abo. ENDURE Premium wird monatlich oder jährlich über den App Store oder Google Play abgerechnet, bewusst am unteren Ende, und jedes neue Konto startet mit 14 Tagen gratis. Dafür bekommst du ERG-Steuerung für Smart Trainer, eine kuratierte Workout-Bibliothek, FTP- und VO2max-Trends, LT1/LT2-Schätzung aus Laktatwerten und CORE Heat Zones. Was du nicht bekommst, sind virtuelle Welten und Rennen, und das ist der Kern von Zwift."
        },
        {
          q: "Kann ich ENDURE gratis testen?",
          a: "Ja, 14 Tage lang mit dem vollen Premium-Funktionsumfang. Danach läuft ein monatliches oder jährliches Abo. Wer sein Konto vor dem Start von Premium angelegt hat, behält den vollen Zugriff dauerhaft kostenlos."
        },
        {
          q: "Hat ENDURE virtuelle Welten wie Zwift?",
          a: "Nein — bewusst nicht. ENDURE folgt der Philosophie Präzision statt Spielerei: strukturierte Workouts, klare Ride-Screens und tiefe Analyse statt Avatare und virtuelle Straßen."
        },
        {
          q: "Steuert ENDURE dieselben Smart Trainer wie Zwift?",
          a: "Ja. ENDURE steuert Smart Trainer über Standard-Bluetooth im ERG-Modus und verbindet Power Meter und Herzfrequenz-Sensoren — dieselbe Hardware, die du mit Zwift nutzt. Ein Zwift Click v1 funktioniert ebenfalls: er verbindet sich wie jeder Sensor und steuert ERG-Ziel und Trainer-Widerstand vom Lenker, wobei ENDURE keine Kassette simuliert wie Zwift."
        }
      ],
      ctaTitle: "Probier ENDURE — 14 Tage gratis für iOS & Android",
      ctaBody: "Lade ENDURE für iOS oder Android, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort. Die ersten 14 Tage kosten nichts.",
      disclaimer: "Zwift ist eine Marke von Zwift, Inc. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Juli 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE — aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    },
    trainerroad: {
      seoTitle: "TrainerRoad Alternative: ENDURE — mit Laktat & Heat Zones",
      seoDescription: "Du suchst eine TrainerRoad Alternative? ENDURE für iOS und Android, 14 Tage gratis testen: Laktat LT1/LT2, native CORE Heat Zones, FTP- & VO2max-Trends — kuratierte Bibliothek statt Algorithmus.",
      breadcrumb: "TrainerRoad Alternative",
      h1: "ENDURE — die TrainerRoad Alternative für alle, die die Daten wollen",
      subtitle: "Du überlegst zu wechseln? Hier der ehrliche Vergleich.",
      directAnswer: "ENDURE ist eine Alternative zu TrainerRoad für alle, die ihre Physiologie sehen wollen statt einem vorgegebenen Plan zu folgen. TrainerRoad ist ein Abo-Dienst rund um algorithmisch generierte, adaptive Trainingspläne. ENDURE ist eine Präzisions-Trainings-App mit kuratierter Workout-Bibliothek und tieferer physiologischer Analyse — Laktat LT1/LT2, native CORE Heat Zones, FTP- und VO2max-Trends. Pläne versus Physiologie: das ist der Kernunterschied.",
      intro: "Beide Apps nehmen strukturiertes Indoor-Training ernst — virtuelle Welten gibt es auf beiden Seiten nicht. Der Unterschied ist die Philosophie: TrainerRoad schreibt dein Training vor, ENDURE misst deine Physiologie und lässt dich präzise trainieren. Hier der ehrliche Vergleich.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainerRoad",
      rows: [
        { feature: "Kernfokus", endure: "Präzises Training & physiologische Analyse", other: "Adaptive, algorithmisch generierte Trainingspläne" },
        { feature: "Preis", endure: "Preiswertes Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "Kostenpflichtiges Monats-/Jahresabo" },
        { feature: "Plattformen", endure: "iOS & Android", other: "PC, Mac, iOS, Android" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja — Bluetooth, mit Smart-Smoothing", other: "Ja" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verifiziert) — ERG-Ziel & Widerstand vom Lenker", other: "Nicht verfügbar" },
        { feature: "Trainingspläne", endure: "Kuratierte Workout-Bibliothek — du bleibst am Steuer", other: "Adaptive Pläne vom Algorithmus" },
        { feature: "Workout-Import", endure: ".ZWO, .MRC und .ERG Dateien", other: "Workout Creator + TrainNow" },
        { feature: "FTP- & VO2max-Trends", endure: "Beides kontinuierlich aus Fahrtdaten modelliert", other: "AI FTP Detection; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung — erstmals in einer Cycling-App", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones — erstmals in einer Cycling-App", other: "Keine native Heat-Zone-Anzeige" },
        { feature: "Kletter-Metrik", endure: "Automatischer VAM-basierter Climbing-Efficiency-Score", other: "Nicht verfügbar" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "Auto-Upload" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "deine Physiologie sehen willst — Laktatschwellen, VO2max-Trend, Hitzeadaption — statt nur einem Plan zu folgen",
        "einen CORE Körpertemperatur-Sensor nutzt und native Heat Zones in der Fahrt willst",
        "sinnvolle Workouts lieber selbst wählst, statt vom Algorithmus verplant zu werden",
        "ein preiswertes Abo willst und 14 Tage gratis testen, bevor du dich festlegst"
      ],
      chooseOtherTitle: "Wähle TrainerRoad, wenn du…",
      chooseOther: [
        "einen komplett vorgeschriebenen Trainingsplan Richtung Zielevent willst",
        "algorithmisch gesteuerte Progression magst",
        "ein Abo für diese Coaching-Schicht in Ordnung findest"
      ],
      switchTitle: "Wechsel von TrainerRoad? Das behältst du",
      switchBullets: [
        "<strong>Deinen Trainer:</strong> ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS — dieselbe Hardware, kein Neukauf.",
        "<strong>Deine Workouts:</strong> .ZWO-, .MRC- und .ERG-Dateien lassen sich direkt importieren, deine strukturierten Einheiten kommen mit.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start und führt Indoor und Outdoor in einem Leistungsbild zusammen.",
        "<strong>Deine Struktur:</strong> die Workout-Bibliothek ist nach physiologischem Zweck kuratiert — VO2max, Schwelle, Sweet Spot — du kannst eine Woche also selbst aufbauen, ohne dass ein Algorithmus sie verplant.",
        "<strong>Dein Geld:</strong> ein Abo am unteren Ende dessen, was Trainings-Apps kosten, und 14 Gratis-Tage, um zu entscheiden, ob dir die Daten das wert sind."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Ja. Manche fahren einen TrainerRoad-Plan und nutzen ENDURE als physiologisches Dashboard — Laktattests loggen, CORE Heat Zones tracken und FTP- und VO2max-Trends über alle Fahrten hinweg verfolgen, via Strava- oder intervals.icu-Sync.",
      faq: [
        {
          q: "Was kostet ENDURE im Vergleich zu TrainerRoad?",
          a: "Beide kosten ein Abo. ENDURE Premium wird monatlich oder jährlich über den App Store oder Google Play abgerechnet und liegt bewusst am unteren Ende, neue Konten starten mit 14 Tagen gratis. Enthalten sind ERG-Steuerung für Smart Trainer, eine kuratierte Workout-Bibliothek, FTP- und VO2max-Trends, LT1/LT2-Schätzung aus Laktatwerten und CORE Heat Zones. Bewusst nicht enthalten ist die automatische Erstellung adaptiver Trainingspläne, der Kern von TrainerRoad."
        },
        {
          q: "Erstellt ENDURE Trainingspläne wie TrainerRoad?",
          a: "Nein. ENDURE bietet eine kuratierte Bibliothek physiologisch sinnvoller Workouts (VO2max, Schwelle, Sweet Spot) und präzise Analyse, aber bewusst keine automatische Plan-Generierung — du bleibst am Steuer deines Trainings."
        },
        {
          q: "Ist ENDURE günstiger als TrainerRoad?",
          a: "Beide kosten ein Abo. ENDURE Premium wird monatlich oder jährlich über die App Stores abgerechnet und liegt am unteren Ende dessen, was Trainings-Apps kosten. Die ersten 14 Tage sind gratis, du kannst also vergleichen, bevor du zahlst."
        },
        {
          q: "Welche App ist besser für Laktat- und Hitzetraining?",
          a: "ENDURE. Es ist die erste Cycling-App mit Laktat-Eintrag während der Fahrt und automatischer LT1/LT2-Schätzung — und die erste mit nativer CORE-Körpertemperatur-Integration inklusive Live Heat Zones. TrainerRoad bietet beides nativ nicht."
        }
      ],
      ctaTitle: "Probier ENDURE — 14 Tage gratis für iOS & Android",
      ctaBody: "Lade ENDURE für iOS oder Android, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort.",
      disclaimer: "TrainerRoad ist eine Marke von TrainerRoad LLC. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Juli 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE — aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    }
  }
} as const;

export function getVsContent(lang: 'en' | 'de' = 'en', key: VsKey) {
  return (vsContent[lang] || vsContent.en)[key];
}
