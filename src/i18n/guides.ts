// Long-form guide content for /guides/* pages, keyed by language then slug.
// Same convention as translations.ts: every key exists in both `en` and `de`.
// Section titles are deliberately question-phrased (AEO: People-Also-Ask / snippets).

export type GuideKey = 'lactate-threshold-training' | 'heat-training-core-sensor';

interface GuideSection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface Guide {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  datePublished: string;
  dateModified: string;
  directAnswer: string;
  sections: GuideSection[];
  ctaTitle: string;
  ctaBody: string;
  backToGuides: string;
}

export const guidesIndex = {
  en: {
    seoTitle: "Cycling Training Guides — Lactate, Heat & Threshold Knowledge",
    seoDescription: "Practical, science-based guides for cyclists: lactate threshold training (LT1/LT2), heat training with the CORE sensor, and how to apply the data in ENDURE.",
    h1: "Training Guides",
    intro: "Practical, science-based knowledge for data-driven cyclists — written by the team behind ENDURE. No fluff, just the physiology and how to apply it.",
    readGuide: "Read guide",
    backHome: "Back to Homepage"
  },
  de: {
    seoTitle: "Cycling Trainings-Guides — Laktat, Hitze & Schwellen-Wissen",
    seoDescription: "Praktische, wissenschaftlich fundierte Guides für Radsportler: Laktatschwellen-Training (LT1/LT2), Hitzetraining mit dem CORE-Sensor und die Anwendung in ENDURE.",
    h1: "Trainings-Guides",
    intro: "Praktisches, wissenschaftlich fundiertes Wissen für datengetriebene Radsportler — vom Team hinter ENDURE. Kein Ballast, nur Physiologie und ihre Anwendung.",
    readGuide: "Guide lesen",
    backHome: "Zurück zur Startseite"
  }
} as const;

export const guides: Record<'en' | 'de', Record<GuideKey, Guide>> = {
  en: {
    'lactate-threshold-training': {
      seoTitle: "Lactate Threshold Training for Cyclists — LT1 & LT2 Explained",
      seoDescription: "What LT1 and LT2 actually mean, how to test lactate at home, and how to train with threshold zones — a practical guide for cyclists, with automatic estimation in ENDURE.",
      h1: "Lactate Threshold Training: LT1 & LT2 Explained",
      datePublished: "2026-07-20",
      dateModified: "2026-07-20",
      directAnswer: "Lactate threshold training structures your riding around two physiological markers: LT1 (aerobic threshold), the intensity where blood lactate first rises above baseline, and LT2 (anaerobic threshold), where lactate accumulates faster than your body can clear it. Training below LT1 builds your aerobic engine; controlled work near LT2 raises the pace you can sustain.",
      sections: [
        {
          title: "What is the lactate threshold?",
          body: "Lactate is a by-product — and fuel — of carbohydrate metabolism that circulates in your blood at all times. At easy intensities, production and clearance stay in balance, so concentration hovers around a baseline of roughly 1–2 mmol/L. As intensity rises, production eventually outpaces clearance and blood lactate climbs. The intensities where this balance visibly changes are your lactate thresholds — the most direct physiological anchors for training zones that exist."
        },
        {
          title: "What is the difference between LT1 and LT2?",
          body: "LT1, often called the aerobic threshold, is the first intensity at which lactate rises meaningfully above baseline. Below it, you can ride for hours; it marks the ceiling of true endurance riding. LT2 — the anaerobic threshold, closely related to MLSS (maximal lactate steady state) — is the highest intensity at which lactate remains stable. Above LT2, lactate accumulates rapidly and the clock starts ticking. Classic field markers put LT1 near 2 mmol/L and LT2 near 4 mmol/L, though individual curves vary — which is exactly why measuring your own values beats generic formulas."
        },
        {
          title: "Why train with LT1 and LT2 instead of FTP alone?",
          body: "FTP is a single power number estimated from performance. LT1 and LT2 are two measured physiological markers, and the gap between them tells you more than either alone. Polarized and pyramidal training models — the backbone of most endurance programs — are defined in terms of these thresholds: the bulk of volume below LT1, targeted quality work around and above LT2. Two riders with identical FTP can have very different thresholds, and therefore need different zone boundaries."
        },
        {
          title: "How do you test your lactate thresholds at home?",
          body: "You need a handheld lactate meter (such as Lactate Plus or Lactate Pro 2), test strips, and a controlled protocol on a smart trainer. The standard approach is a graded step test:",
          bullets: [
            "Warm up 10–15 minutes at an easy pace.",
            "Ride steps of 3–5 minutes, starting well below your expected LT1 and increasing power by 20–25 W per step (ERG mode makes the steps precise).",
            "Take a small blood sample from your earlobe or fingertip at the end of every step and note the value with the step's power.",
            "Stop when lactate clearly exceeds ~4–6 mmol/L or you can no longer hold the step.",
            "Plot lactate against power: the first sustained rise above baseline is LT1, the point where the curve steepens sharply is LT2."
          ]
        },
        {
          title: "How do you train with LT1 and LT2 zones?",
          body: "Once you know both thresholds, the structure is straightforward. Ride the majority of your volume — typically around 80% — below LT1, where aerobic adaptations accumulate with minimal fatigue cost. Place your quality work deliberately: sweet-spot and threshold sessions just below LT2 raise sustainable power, while intervals above LT2 develop VO2max and race-winning capacity. Re-test every 6–8 weeks: as fitness improves, both thresholds shift right and your zones should follow."
        },
        {
          title: "How does ENDURE estimate LT1 and LT2?",
          body: "ENDURE is the first cycling app that lets you log lactate readings directly during a ride — or add them afterwards from your activity history. The app fits a curve through your readings and automatically estimates LT1 and LT2, including a confidence tunnel that shows how solid the estimate is. Your blood markers live next to your power data instead of in a spreadsheet, and every new reading refines the picture. Available in Early Release on iOS and Android."
        }
      ],
      ctaTitle: "Log your first lactate test in ENDURE",
      ctaBody: "Now in Early Release on iOS and Android — in-ride lactate logging, automatic LT1/LT2 estimation, and your full training picture in one app.",
      backToGuides: "All guides"
    },
    'heat-training-core-sensor': {
      seoTitle: "Heat Training for Cyclists with the CORE Sensor — Heat Zones Explained",
      seoDescription: "How heat training works, what the CORE body temperature sensor measures, what heat zones are, and how to run indoor heat sessions — natively integrated in ENDURE.",
      h1: "Heat Training with the CORE Sensor: Heat Zones Explained",
      datePublished: "2026-07-20",
      dateModified: "2026-07-20",
      directAnswer: "Heat training means riding with a deliberately elevated core body temperature — typically around 38.5 °C — to trigger adaptations like increased plasma volume and improved cooling. The CORE sensor measures core temperature continuously, and heat zones turn that number into controllable training ranges, the same way power zones structure your watts.",
      sections: [
        {
          title: "What is heat training?",
          body: "Heat training is the deliberate use of thermal load as a training stimulus. Instead of avoiding heat, you spend controlled time at an elevated core temperature — through warm rooms, reduced cooling, extra layers, or simply riding indoors where heat builds naturally. Done consistently over roughly two weeks, the body adapts in ways that improve performance not only in hot races but, according to a growing body of research, in temperate conditions too."
        },
        {
          title: "Why does heat training make you faster?",
          body: "The best-documented adaptation is plasma volume expansion: more blood plasma means better stroke volume, cardiovascular stability and cooling capacity. Heat exposure also lowers your core temperature at a given workload, raises your sweat rate and starts sweating earlier — all of which delay heat-related fatigue. Research also points toward increases in haemoglobin mass with longer protocols, which is why heat training is increasingly discussed as a legal, practical complement to altitude training."
        },
        {
          title: "What is the CORE body temperature sensor?",
          body: "CORE (by greenTEG) is a small wearable sensor, typically clipped to the heart-rate strap, that measures core body temperature continuously and non-invasively using thermal energy transfer technology. It transmits over Bluetooth, which means training apps can read your core temperature live during a ride — no ingestible pills, no lab equipment."
        },
        {
          title: "What are heat zones?",
          body: "Heat zones translate core temperature into training ranges, exactly like power or heart-rate zones structure watts and pulse. The zone concept answers the key practical question of heat training: am I hot enough for an adaptation stimulus, or too hot to be productive? The adaptation sweet spot for most athletes sits around 38.3–38.8 °C. Below it, the thermal stimulus is minimal; far above it, performance and safety degrade. Live heat zones let you steer a session into the productive range and keep it there."
        },
        {
          title: "How do you structure an indoor heat session?",
          body: "Indoor training is ideal for heat work because conditions are controllable. A proven starting pattern:",
          bullets: [
            "Ride at an easy, steady endurance intensity — heat sessions are not interval sessions.",
            "Reduce cooling: fan off or low, moderate room temperature, optionally an extra layer.",
            "Use live core temperature to reach your target heat zone (~38.3–38.8 °C), then hold it for 30–45 minutes.",
            "Hydrate during and after; expect elevated heart rate at a given power — that is the stimulus, not a fitness loss.",
            "Repeat 4–6 sessions per week for about two weeks for the initial adaptation block, then maintain with 1–2 weekly sessions."
          ]
        },
        {
          title: "How does ENDURE integrate the CORE sensor?",
          body: "ENDURE is the first indoor cycling app to natively integrate the CORE body temperature sensor — including a live heat-zone display right on the ride screen. Pair the sensor over Bluetooth like any power meter, watch your core temperature and current heat zone live while you ride, and find the full temperature trace stored with power and heart rate in your ride analysis afterwards. No second app, no workarounds — heat becomes a first-class training metric. Available in Early Release on iOS and Android."
        }
      ],
      ctaTitle: "Train heat like power — with ENDURE and CORE",
      ctaBody: "Now in Early Release on iOS and Android — native CORE integration, live heat zones on the ride screen, full post-ride analysis.",
      backToGuides: "All guides"
    }
  },
  de: {
    'lactate-threshold-training': {
      seoTitle: "Laktatschwellen-Training für Radsportler — LT1 & LT2 erklärt",
      seoDescription: "Was LT1 und LT2 wirklich bedeuten, wie du Laktat zuhause testest und wie du mit Schwellenzonen trainierst — praktischer Guide für Radsportler, mit automatischer Schätzung in ENDURE.",
      h1: "Laktatschwellen-Training: LT1 & LT2 erklärt",
      datePublished: "2026-07-20",
      dateModified: "2026-07-20",
      directAnswer: "Laktatschwellen-Training strukturiert dein Training um zwei physiologische Marker: LT1 (aerobe Schwelle), die Intensität, bei der Blutlaktat erstmals über das Grundniveau steigt, und LT2 (anaerobe Schwelle), ab der Laktat schneller anfällt, als dein Körper es abbauen kann. Training unter LT1 baut deinen aeroben Motor auf; gezielte Arbeit nahe LT2 hebt das Tempo, das du halten kannst.",
      sections: [
        {
          title: "Was ist die Laktatschwelle?",
          body: "Laktat ist ein Nebenprodukt — und Brennstoff — des Kohlenhydratstoffwechsels und zirkuliert permanent im Blut. Bei lockerer Intensität halten sich Produktion und Abbau die Waage, die Konzentration bleibt bei etwa 1–2 mmol/L. Steigt die Intensität, überholt die Produktion irgendwann den Abbau und das Blutlaktat klettert. Die Intensitäten, an denen sich dieses Gleichgewicht sichtbar verschiebt, sind deine Laktatschwellen — die direktesten physiologischen Anker für Trainingszonen, die es gibt."
        },
        {
          title: "Was ist der Unterschied zwischen LT1 und LT2?",
          body: "LT1, oft aerobe Schwelle genannt, ist die erste Intensität, bei der Laktat deutlich über das Grundniveau steigt. Darunter kannst du stundenlang fahren; sie markiert die Obergrenze des echten Grundlagentrainings. LT2 — die anaerobe Schwelle, eng verwandt mit dem MLSS (maximales Laktat-Steady-State) — ist die höchste Intensität, bei der Laktat stabil bleibt. Oberhalb von LT2 akkumuliert Laktat rasch und die Uhr läuft. Klassische Faustwerte legen LT1 bei etwa 2 mmol/L und LT2 bei etwa 4 mmol/L — individuelle Kurven weichen aber ab, und genau deshalb schlägt Messen jede generische Formel."
        },
        {
          title: "Warum mit LT1 und LT2 trainieren statt nur mit FTP?",
          body: "FTP ist eine einzelne, aus Leistung geschätzte Zahl. LT1 und LT2 sind zwei gemessene physiologische Marker — und der Abstand zwischen ihnen sagt mehr als jede Einzelzahl. Polarisierte und pyramidale Trainingsmodelle, das Rückgrat der meisten Ausdauerprogramme, sind über genau diese Schwellen definiert: der Großteil des Volumens unter LT1, gezielte Qualitätsarbeit um und über LT2. Zwei Fahrer mit identischer FTP können völlig unterschiedliche Schwellen haben — und brauchen entsprechend andere Zonengrenzen."
        },
        {
          title: "Wie testest du deine Laktatschwellen zuhause?",
          body: "Du brauchst ein Handmessgerät (z. B. Lactate Plus oder Lactate Pro 2), Teststreifen und ein kontrolliertes Protokoll am Smart Trainer. Standard ist der Stufentest:",
          bullets: [
            "10–15 Minuten locker einfahren.",
            "Stufen von 3–5 Minuten fahren, deutlich unter der erwarteten LT1 beginnend, pro Stufe 20–25 W steigern (der ERG-Modus macht die Stufen präzise).",
            "Am Ende jeder Stufe einen kleinen Bluttropfen vom Ohrläppchen oder Finger messen und den Wert mit der Stufenleistung notieren.",
            "Abbrechen, wenn Laktat klar über ~4–6 mmol/L liegt oder die Stufe nicht mehr haltbar ist.",
            "Laktat gegen Leistung auftragen: der erste anhaltende Anstieg über das Grundniveau ist LT1, der Punkt, an dem die Kurve scharf steiler wird, ist LT2."
          ]
        },
        {
          title: "Wie trainierst du mit LT1- und LT2-Zonen?",
          body: "Sind beide Schwellen bekannt, ist die Struktur klar. Fahre den Großteil deines Volumens — typischerweise rund 80 % — unter LT1, wo sich aerobe Anpassungen mit minimalen Ermüdungskosten ansammeln. Setze Qualitätsarbeit gezielt: Sweet-Spot- und Schwelleneinheiten knapp unter LT2 heben die dauerhaft fahrbare Leistung, Intervalle über LT2 entwickeln VO2max und Rennhärte. Teste alle 6–8 Wochen nach: mit steigender Fitness wandern beide Schwellen nach rechts — deine Zonen sollten mitwandern."
        },
        {
          title: "Wie schätzt ENDURE LT1 und LT2?",
          body: "ENDURE ist die erste Cycling-App, mit der du Laktatwerte direkt während der Fahrt eintragen kannst — oder im Nachhinein aus deiner Aktivitätshistorie. Die App fittet eine Kurve durch deine Werte und schätzt LT1 und LT2 automatisch, inklusive Konfidenztunnel, der zeigt, wie belastbar die Schätzung ist. Deine Blutwerte leben neben deinen Leistungsdaten statt in einem Spreadsheet — und jeder neue Wert schärft das Bild. Verfügbar im Early Release auf iOS und Android."
        }
      ],
      ctaTitle: "Logge deinen ersten Laktattest in ENDURE",
      ctaBody: "Jetzt im Early Release auf iOS und Android — Laktat-Eintrag während der Fahrt, automatische LT1/LT2-Schätzung und dein komplettes Trainingsbild in einer App.",
      backToGuides: "Alle Guides"
    },
    'heat-training-core-sensor': {
      seoTitle: "Hitzetraining für Radsportler mit dem CORE-Sensor — Heat Zones erklärt",
      seoDescription: "Wie Hitzetraining wirkt, was der CORE Körpertemperatur-Sensor misst, was Heat Zones sind und wie du Indoor-Hitzeeinheiten fährst — nativ integriert in ENDURE.",
      h1: "Hitzetraining mit dem CORE-Sensor: Heat Zones erklärt",
      datePublished: "2026-07-20",
      dateModified: "2026-07-20",
      directAnswer: "Hitzetraining heißt: fahren mit bewusst erhöhter Körperkerntemperatur — typischerweise um 38,5 °C — um Anpassungen wie mehr Plasmavolumen und bessere Kühlung auszulösen. Der CORE-Sensor misst die Kerntemperatur kontinuierlich, und Heat Zones machen daraus steuerbare Trainingsbereiche — so wie Wattzonen dein Training strukturieren.",
      sections: [
        {
          title: "Was ist Hitzetraining?",
          body: "Hitzetraining ist der gezielte Einsatz thermischer Last als Trainingsreiz. Statt Hitze zu vermeiden, verbringst du kontrollierte Zeit bei erhöhter Kerntemperatur — durch warme Räume, reduzierte Kühlung, zusätzliche Kleidung oder schlicht Indoor-Fahren, wo sich Wärme ohnehin staut. Über etwa zwei Wochen konsequent umgesetzt, passt sich der Körper an — mit Leistungsvorteilen nicht nur bei heißen Rennen, sondern laut wachsender Studienlage auch bei gemäßigten Bedingungen."
        },
        {
          title: "Warum macht Hitzetraining schneller?",
          body: "Die am besten belegte Anpassung ist die Ausdehnung des Plasmavolumens: mehr Blutplasma bedeutet besseres Schlagvolumen, kardiovaskuläre Stabilität und Kühlkapazität. Hitzeexposition senkt außerdem die Kerntemperatur bei gleicher Belastung, erhöht die Schweißrate und lässt das Schwitzen früher einsetzen — alles verzögert hitzebedingte Ermüdung. Studien deuten bei längeren Protokollen zudem auf eine Zunahme der Hämoglobinmasse hin — weshalb Hitzetraining zunehmend als legale, praktikable Ergänzung zum Höhentraining diskutiert wird."
        },
        {
          title: "Was ist der CORE Körpertemperatur-Sensor?",
          body: "CORE (von greenTEG) ist ein kleiner Wearable-Sensor, typischerweise am Herzfrequenz-Gurt befestigt, der die Körperkerntemperatur kontinuierlich und nicht-invasiv über Wärmefluss-Technologie misst. Er sendet per Bluetooth — Trainings-Apps können deine Kerntemperatur also live während der Fahrt lesen. Keine Schluckpillen, kein Laborequipment."
        },
        {
          title: "Was sind Heat Zones?",
          body: "Heat Zones übersetzen Kerntemperatur in Trainingsbereiche — exakt so, wie Watt- oder Herzfrequenzzonen Leistung und Puls strukturieren. Das Zonenkonzept beantwortet die praktische Kernfrage des Hitzetrainings: Bin ich heiß genug für einen Anpassungsreiz — oder zu heiß, um produktiv zu sein? Der Adaptions-Sweet-Spot liegt für die meisten Athleten um 38,3–38,8 °C. Darunter ist der thermische Reiz minimal, deutlich darüber leiden Leistung und Sicherheit. Live Heat Zones lassen dich eine Einheit gezielt in den produktiven Bereich steuern — und dort halten."
        },
        {
          title: "Wie strukturierst du eine Indoor-Hitzeeinheit?",
          body: "Indoor-Training ist ideal fürs Hitzetraining, weil die Bedingungen kontrollierbar sind. Ein bewährtes Einstiegsmuster:",
          bullets: [
            "Fahre locker und gleichmäßig im Grundlagenbereich — Hitzeeinheiten sind keine Intervalleinheiten.",
            "Reduziere die Kühlung: Ventilator aus oder niedrig, moderate Raumtemperatur, optional eine zusätzliche Schicht.",
            "Nutze die Live-Kerntemperatur, um deine Ziel-Heat-Zone (~38,3–38,8 °C) zu erreichen — und halte sie 30–45 Minuten.",
            "Trinke währenddessen und danach; erwarte erhöhte Herzfrequenz bei gleicher Leistung — das ist der Reiz, kein Fitnessverlust.",
            "Wiederhole 4–6 Einheiten pro Woche über etwa zwei Wochen für den initialen Adaptionsblock, danach 1–2 Einheiten pro Woche zum Erhalt."
          ]
        },
        {
          title: "Wie integriert ENDURE den CORE-Sensor?",
          body: "ENDURE ist die erste Indoor-Cycling-App, die den CORE Körpertemperatur-Sensor nativ integriert — inklusive Live-Heat-Zone-Anzeige direkt am Ride-Screen. Kopple den Sensor per Bluetooth wie einen Power Meter, sieh Kerntemperatur und aktuelle Heat Zone live während der Fahrt und finde den kompletten Temperaturverlauf danach neben Watt und Herzfrequenz in deiner Analyse. Keine zweite App, keine Umwege — Hitze wird zur vollwertigen Trainingsmetrik. Verfügbar im Early Release auf iOS und Android."
        }
      ],
      ctaTitle: "Trainiere Hitze wie Watt — mit ENDURE und CORE",
      ctaBody: "Jetzt im Early Release auf iOS und Android — native CORE-Integration, Live Heat Zones am Ride-Screen, volle Analyse nach der Fahrt.",
      backToGuides: "Alle Guides"
    }
  }
};

export function getGuide(lang: 'en' | 'de' = 'en', key: GuideKey): Guide {
  return (guides[lang] || guides.en)[key];
}

export function getGuidesIndex(lang: 'en' | 'de' = 'en') {
  return guidesIndex[lang] || guidesIndex.en;
}
