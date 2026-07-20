// Comparison-page content for /vs/* pages, keyed by language then competitor.
// Same convention as translations.ts: every key exists in both `en` and `de`.

export type VsKey = 'zwift' | 'trainerroad';

export const vsContent = {
  en: {
    zwift: {
      seoTitle: "ENDURE vs Zwift — Which Indoor Cycling App Fits You?",
      seoDescription: "ENDURE vs Zwift compared: training focus, price, lactate LT1/LT2, CORE heat zones, smart trainer control. An honest look at which indoor cycling app fits your goals.",
      breadcrumb: "ENDURE vs Zwift",
      h1: "ENDURE vs Zwift",
      subtitle: "Which indoor cycling app fits you?",
      directAnswer: "Zwift is a virtual-world platform built around racing, group rides and motivation through gameplay. ENDURE is a precision training app built around structured workouts and physiological analysis — FTP and VO2max trends, lactate LT1/LT2 thresholds and native CORE heat zones. Different tools for different goals.",
      intro: "Both apps control your smart trainer and record your rides — but they solve different problems. Here is an honest side-by-side comparison so you can pick the right tool for your training.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Zwift",
      rows: [
        { feature: "Core focus", endure: "Precision training & physiological analysis", other: "Virtual worlds, racing & social riding" },
        { feature: "Price", endure: "Free during Early Release — affordable subscription planned afterwards", other: "Paid monthly subscription" },
        { feature: "Platforms", endure: "iOS & Android (Windows & macOS planned)", other: "PC, Mac, iOS, Android, Apple TV" },
        { feature: "Smart trainer control (ERG)", endure: "Yes — Bluetooth, with smart-smoothing", other: "Yes" },
        { feature: "Structured workouts", endure: "Curated physiological library + .ZWO/.MRC/.ERG import", other: "Large library + custom workouts" },
        { feature: "FTP & VO2max trends", endure: "Modelled continuously from your ride data", other: "FTP from tests/races; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation — industry first", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones — industry first", other: "No native heat-zone display" },
        { feature: "Climbing metric", endure: "Automatic VAM-based Climbing Efficiency score", other: "Virtual climbs & climb portal" },
        { feature: "Racing & social", endure: "Not the focus", other: "Races, group rides, huge community" },
        { feature: "Hardware requirements", endure: "Runs smoothly on a phone — no gaming PC", other: "Graphics-heavy; benefits from strong hardware" },
        { feature: "Strava", endure: "Auto-upload + history sync", other: "Auto-upload" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want structured training and honest analysis instead of a game",
        "care about physiological metrics: lactate thresholds, VO2max trends, heat adaptation",
        "use a CORE body temperature sensor and want native heat zones in-ride",
        "want affordable pricing — currently free during Early Release, later an affordable subscription",
        "train on a phone or tablet and don't want to feed a gaming PC"
      ],
      chooseOtherTitle: "Choose Zwift if you…",
      chooseOther: [
        "need racing, group rides and a virtual world to stay motivated",
        "value the biggest indoor cycling community",
        "want entertainment first and analysis second"
      ],
      bothTitle: "Can you use both?",
      bothBody: "Absolutely — many riders do. A common setup: ride Zwift for races and social events, and use ENDURE for structured training sessions and as the analysis home for FTP, VO2max, lactate and heat metrics. ENDURE syncs your rides via Strava, so nothing gets lost.",
      faq: [
        {
          q: "Is ENDURE really free?",
          a: "Yes — during Early Release. ENDURE is completely free on iOS and Android for now; an affordable subscription is planned after Early Release. Zwift requires a paid monthly subscription."
        },
        {
          q: "Does ENDURE have virtual worlds like Zwift?",
          a: "No — deliberately. ENDURE follows a precision-over-gimmicks philosophy: structured workouts, clean ride screens and deep analysis instead of avatars and virtual roads."
        },
        {
          q: "Can ENDURE control the same smart trainers as Zwift?",
          a: "Yes. ENDURE controls smart trainers over standard Bluetooth in ERG mode, and connects power meters and heart-rate monitors — the same hardware you use with Zwift."
        }
      ],
      ctaTitle: "Try ENDURE — now in Early Release",
      ctaBody: "Download ENDURE on iOS or Android, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place.",
      disclaimer: "Zwift is a trademark of Zwift, Inc. This comparison reflects publicly available information as of July 2026 and describes ENDURE's Early Release feature set — check both vendors for current details.",
      backHome: "Back to Homepage"
    },
    trainerroad: {
      seoTitle: "ENDURE vs TrainerRoad — Cycling Training App Comparison",
      seoDescription: "ENDURE vs TrainerRoad compared: training philosophy, price, lactate LT1/LT2, CORE heat zones, analytics. An honest look at which cycling training app fits you.",
      breadcrumb: "ENDURE vs TrainerRoad",
      h1: "ENDURE vs TrainerRoad",
      subtitle: "Which cycling training app fits you?",
      directAnswer: "TrainerRoad is a subscription service built around algorithm-generated, adaptive training plans. ENDURE is a precision training app built around a curated workout library and deeper physiological analysis — lactate LT1/LT2 thresholds, native CORE heat zones, FTP and VO2max trends. Plans versus physiology: that's the core difference.",
      intro: "Both apps take structured indoor training seriously — no virtual worlds on either side. The difference is philosophy: TrainerRoad prescribes your training, ENDURE measures your physiology and lets you train with precision. Here is the honest comparison.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainerRoad",
      rows: [
        { feature: "Core focus", endure: "Precision training & physiological analysis", other: "Adaptive, algorithm-generated training plans" },
        { feature: "Price", endure: "Free during Early Release — affordable subscription planned afterwards", other: "Paid monthly/annual subscription" },
        { feature: "Platforms", endure: "iOS & Android (Windows & macOS planned)", other: "PC, Mac, iOS, Android" },
        { feature: "Smart trainer control (ERG)", endure: "Yes — Bluetooth, with smart-smoothing", other: "Yes" },
        { feature: "Training plans", endure: "Curated workout library — you stay in charge", other: "Adaptive plans built by algorithms" },
        { feature: "Workout import", endure: ".ZWO, .MRC and .ERG files", other: "Workout creator + TrainNow" },
        { feature: "FTP & VO2max trends", endure: "Both modelled continuously from ride data", other: "AI FTP detection; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation — industry first", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones — industry first", other: "No native heat-zone display" },
        { feature: "Climbing metric", endure: "Automatic VAM-based Climbing Efficiency score", other: "Not available" },
        { feature: "Strava", endure: "Auto-upload + history sync", other: "Auto-upload" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want to see your physiology — lactate thresholds, VO2max trend, heat adaptation — not just follow a plan",
        "use a CORE body temperature sensor and want native heat zones in-ride",
        "prefer picking meaningful workouts yourself over being scheduled by an algorithm",
        "want affordable pricing — currently free during Early Release, later an affordable subscription"
      ],
      chooseOtherTitle: "Choose TrainerRoad if you…",
      chooseOther: [
        "want a fully prescribed, hands-off training plan toward a target event",
        "like algorithm-driven progression management",
        "don't mind a subscription for that coaching layer"
      ],
      bothTitle: "Can you use both?",
      bothBody: "Yes. Some riders follow a TrainerRoad plan and use ENDURE as their physiological dashboard — logging lactate tests, tracking CORE heat zones and watching FTP and VO2max trends across all rides via Strava sync.",
      faq: [
        {
          q: "Does ENDURE build training plans like TrainerRoad?",
          a: "No. ENDURE provides a curated library of physiologically meaningful workouts (VO2max, threshold, sweet spot) and precise analysis, but deliberately no automated plan generation — you stay in charge of your training."
        },
        {
          q: "Is ENDURE cheaper than TrainerRoad?",
          a: "During Early Release ENDURE is completely free; after Early Release an affordable subscription is planned. TrainerRoad is subscription-based."
        },
        {
          q: "Which app is better for lactate and heat training?",
          a: "ENDURE. It is the first cycling app with in-ride lactate logging and automatic LT1/LT2 estimation, and the first with native CORE body temperature integration including live heat zones. TrainerRoad offers neither natively."
        }
      ],
      ctaTitle: "Try ENDURE — now in Early Release",
      ctaBody: "Download ENDURE on iOS or Android, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place.",
      disclaimer: "TrainerRoad is a trademark of TrainerRoad LLC. This comparison reflects publicly available information as of July 2026 and describes ENDURE's Early Release feature set — check both vendors for current details.",
      backHome: "Back to Homepage"
    }
  },
  de: {
    zwift: {
      seoTitle: "ENDURE vs Zwift — Welche Indoor-Cycling-App passt zu dir?",
      seoDescription: "ENDURE vs Zwift im Vergleich: Trainingsfokus, Preis, Laktat LT1/LT2, CORE Heat Zones, Smart-Trainer-Steuerung. Ehrlicher Vergleich der Indoor-Cycling-Apps.",
      breadcrumb: "ENDURE vs Zwift",
      h1: "ENDURE vs Zwift",
      subtitle: "Welche Indoor-Cycling-App passt zu dir?",
      directAnswer: "Zwift ist eine Plattform mit virtuellen Welten, gebaut für Rennen, Gruppenfahrten und Motivation durch Gameplay. ENDURE ist eine Präzisions-Trainings-App rund um strukturierte Workouts und physiologische Analyse — FTP- und VO2max-Trends, Laktat LT1/LT2 und native CORE Heat Zones. Verschiedene Werkzeuge für verschiedene Ziele.",
      intro: "Beide Apps steuern deinen Smart Trainer und zeichnen deine Fahrten auf — aber sie lösen unterschiedliche Probleme. Hier der ehrliche Vergleich, damit du das richtige Werkzeug für dein Training wählst.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Zwift",
      rows: [
        { feature: "Kernfokus", endure: "Präzises Training & physiologische Analyse", other: "Virtuelle Welten, Rennen & Social Riding" },
        { feature: "Preis", endure: "Gratis im Early Release — danach preiswertes Abo geplant", other: "Kostenpflichtiges Monatsabo" },
        { feature: "Plattformen", endure: "iOS & Android (Windows & macOS geplant)", other: "PC, Mac, iOS, Android, Apple TV" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja — Bluetooth, mit Smart-Smoothing", other: "Ja" },
        { feature: "Strukturierte Workouts", endure: "Kuratierte physiologische Bibliothek + .ZWO/.MRC/.ERG-Import", other: "Große Bibliothek + eigene Workouts" },
        { feature: "FTP- & VO2max-Trends", endure: "Kontinuierlich aus deinen Fahrtdaten modelliert", other: "FTP aus Tests/Rennen; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung — erstmals in einer Cycling-App", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones — erstmals in einer Cycling-App", other: "Keine native Heat-Zone-Anzeige" },
        { feature: "Kletter-Metrik", endure: "Automatischer VAM-basierter Climbing-Efficiency-Score", other: "Virtuelle Anstiege & Climb Portal" },
        { feature: "Rennen & Social", endure: "Nicht der Fokus", other: "Rennen, Gruppenfahrten, riesige Community" },
        { feature: "Hardware-Anforderungen", endure: "Läuft flüssig am Handy — kein Gaming-PC", other: "Grafiklastig; profitiert von starker Hardware" },
        { feature: "Strava", endure: "Auto-Upload + Verlaufs-Sync", other: "Auto-Upload" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "strukturiertes Training und ehrliche Analyse statt eines Spiels willst",
        "physiologische Metriken willst: Laktatschwellen, VO2max-Trends, Hitzeadaption",
        "einen CORE Körpertemperatur-Sensor nutzt und native Heat Zones in der Fahrt willst",
        "faire Preise willst — im Early Release aktuell gratis, danach ein preiswertes Abo",
        "am Handy oder Tablet trainierst und keinen Gaming-PC füttern willst"
      ],
      chooseOtherTitle: "Wähle Zwift, wenn du…",
      chooseOther: [
        "Rennen, Gruppenfahrten und eine virtuelle Welt zur Motivation brauchst",
        "die größte Indoor-Cycling-Community suchst",
        "Unterhaltung an erster und Analyse an zweiter Stelle willst"
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Klar — machen viele. Ein typisches Setup: Zwift für Rennen und Events, ENDURE für strukturierte Trainingseinheiten und als Analyse-Zuhause für FTP, VO2max, Laktat und Heat-Metriken. Über den Strava-Sync geht keine Fahrt verloren.",
      faq: [
        {
          q: "Ist ENDURE wirklich kostenlos?",
          a: "Ja — im Early Release. ENDURE ist auf iOS und Android vorerst komplett kostenlos; nach dem Early Release ist ein preiswertes Abo geplant. Zwift erfordert ein kostenpflichtiges Monatsabo."
        },
        {
          q: "Hat ENDURE virtuelle Welten wie Zwift?",
          a: "Nein — bewusst nicht. ENDURE folgt der Philosophie Präzision statt Spielerei: strukturierte Workouts, klare Ride-Screens und tiefe Analyse statt Avatare und virtuelle Straßen."
        },
        {
          q: "Steuert ENDURE dieselben Smart Trainer wie Zwift?",
          a: "Ja. ENDURE steuert Smart Trainer über Standard-Bluetooth im ERG-Modus und verbindet Power Meter und Herzfrequenz-Sensoren — dieselbe Hardware, die du mit Zwift nutzt."
        }
      ],
      ctaTitle: "Probier ENDURE — jetzt im Early Release",
      ctaBody: "Lade ENDURE für iOS oder Android, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort.",
      disclaimer: "Zwift ist eine Marke von Zwift, Inc. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Juli 2026) und beschreibt den Early-Release-Funktionsumfang von ENDURE — aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    },
    trainerroad: {
      seoTitle: "ENDURE vs TrainerRoad — Cycling-Training-Apps im Vergleich",
      seoDescription: "ENDURE vs TrainerRoad im Vergleich: Trainingsphilosophie, Preis, Laktat LT1/LT2, CORE Heat Zones, Analyse. Ehrlicher Vergleich der Cycling-Training-Apps.",
      breadcrumb: "ENDURE vs TrainerRoad",
      h1: "ENDURE vs TrainerRoad",
      subtitle: "Welche Cycling-Training-App passt zu dir?",
      directAnswer: "TrainerRoad ist ein Abo-Dienst rund um algorithmisch generierte, adaptive Trainingspläne. ENDURE ist eine Präzisions-Trainings-App mit kuratierter Workout-Bibliothek und tieferer physiologischer Analyse — Laktat LT1/LT2, native CORE Heat Zones, FTP- und VO2max-Trends. Pläne versus Physiologie: das ist der Kernunterschied.",
      intro: "Beide Apps nehmen strukturiertes Indoor-Training ernst — virtuelle Welten gibt es auf beiden Seiten nicht. Der Unterschied ist die Philosophie: TrainerRoad schreibt dein Training vor, ENDURE misst deine Physiologie und lässt dich präzise trainieren. Hier der ehrliche Vergleich.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainerRoad",
      rows: [
        { feature: "Kernfokus", endure: "Präzises Training & physiologische Analyse", other: "Adaptive, algorithmisch generierte Trainingspläne" },
        { feature: "Preis", endure: "Gratis im Early Release — danach preiswertes Abo geplant", other: "Kostenpflichtiges Monats-/Jahresabo" },
        { feature: "Plattformen", endure: "iOS & Android (Windows & macOS geplant)", other: "PC, Mac, iOS, Android" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja — Bluetooth, mit Smart-Smoothing", other: "Ja" },
        { feature: "Trainingspläne", endure: "Kuratierte Workout-Bibliothek — du bleibst am Steuer", other: "Adaptive Pläne vom Algorithmus" },
        { feature: "Workout-Import", endure: ".ZWO, .MRC und .ERG Dateien", other: "Workout Creator + TrainNow" },
        { feature: "FTP- & VO2max-Trends", endure: "Beides kontinuierlich aus Fahrtdaten modelliert", other: "AI FTP Detection; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung — erstmals in einer Cycling-App", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones — erstmals in einer Cycling-App", other: "Keine native Heat-Zone-Anzeige" },
        { feature: "Kletter-Metrik", endure: "Automatischer VAM-basierter Climbing-Efficiency-Score", other: "Nicht verfügbar" },
        { feature: "Strava", endure: "Auto-Upload + Verlaufs-Sync", other: "Auto-Upload" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "deine Physiologie sehen willst — Laktatschwellen, VO2max-Trend, Hitzeadaption — statt nur einem Plan zu folgen",
        "einen CORE Körpertemperatur-Sensor nutzt und native Heat Zones in der Fahrt willst",
        "sinnvolle Workouts lieber selbst wählst, statt vom Algorithmus verplant zu werden",
        "faire Preise willst — im Early Release aktuell gratis, danach ein preiswertes Abo"
      ],
      chooseOtherTitle: "Wähle TrainerRoad, wenn du…",
      chooseOther: [
        "einen komplett vorgeschriebenen Trainingsplan Richtung Zielevent willst",
        "algorithmisch gesteuerte Progression magst",
        "ein Abo für diese Coaching-Schicht in Ordnung findest"
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Ja. Manche fahren einen TrainerRoad-Plan und nutzen ENDURE als physiologisches Dashboard — Laktattests loggen, CORE Heat Zones tracken und FTP- und VO2max-Trends über alle Fahrten hinweg verfolgen, via Strava-Sync.",
      faq: [
        {
          q: "Erstellt ENDURE Trainingspläne wie TrainerRoad?",
          a: "Nein. ENDURE bietet eine kuratierte Bibliothek physiologisch sinnvoller Workouts (VO2max, Schwelle, Sweet Spot) und präzise Analyse, aber bewusst keine automatische Plan-Generierung — du bleibst am Steuer deines Trainings."
        },
        {
          q: "Ist ENDURE günstiger als TrainerRoad?",
          a: "Im Early Release ist ENDURE komplett kostenlos; danach ist ein preiswertes Abo geplant. TrainerRoad ist ein Abo-Dienst."
        },
        {
          q: "Welche App ist besser für Laktat- und Hitzetraining?",
          a: "ENDURE. Es ist die erste Cycling-App mit Laktat-Eintrag während der Fahrt und automatischer LT1/LT2-Schätzung — und die erste mit nativer CORE-Körpertemperatur-Integration inklusive Live Heat Zones. TrainerRoad bietet beides nativ nicht."
        }
      ],
      ctaTitle: "Probier ENDURE — jetzt im Early Release",
      ctaBody: "Lade ENDURE für iOS oder Android, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort.",
      disclaimer: "TrainerRoad ist eine Marke von TrainerRoad LLC. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Juli 2026) und beschreibt den Early-Release-Funktionsumfang von ENDURE — aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    }
  }
} as const;

export function getVsContent(lang: 'en' | 'de' = 'en', key: VsKey) {
  return (vsContent[lang] || vsContent.en)[key];
}
