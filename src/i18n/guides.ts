// Long-form guide content for /guides/* pages, keyed by language then slug.
// Same convention as translations.ts: every key exists in both `en` and `de`.
// Section titles are deliberately question-phrased (AEO: People-Also-Ask / snippets).

// Slugs are English in both languages — see docs/adr/0002-shared-english-slugs.md
export type GuideKey =
  | 'lactate-threshold-training'
  | 'heat-training-core-sensor'
  | 'ftp-test-power-zones'
  | 'zone-2-endurance-training'
  | 'sweet-spot-vs-polarized'
  | 'zwo-mrc-erg-files';

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
    seoTitle: "Cycling Training Guides — FTP, Zones, Lactate & Heat",
    seoDescription: "Practical, science-based guides for cyclists: FTP testing and power zones, zone 2, sweet spot vs polarized, lactate LT1/LT2, heat training with CORE, and workout file formats.",
    h1: "Training Guides",
    intro: "Practical, science-based knowledge for data-driven cyclists — written by the team behind ENDURE. FTP and power zones, zone 2 and training distribution, lactate thresholds, heat adaptation and the file formats in between. No fluff, just the physiology and how to apply it.",
    readGuide: "Read guide",
    moreGuides: "More guides",
    backHome: "Back to Homepage"
  },
  de: {
    seoTitle: "Trainings-Guides — FTP, Wattzonen, Laktat & Hitzetraining",
    seoDescription: "Praktische, wissenschaftlich fundierte Guides für Radsportler: FTP-Test und Wattzonen, Zone 2, Sweet Spot vs. polarisiert, Laktat LT1/LT2, Hitzetraining mit CORE und Workout-Dateiformate.",
    h1: "Trainings-Guides",
    intro: "Praktisches, wissenschaftlich fundiertes Wissen für datengetriebene Radsportler — vom Team hinter ENDURE. FTP und Wattzonen, Zone 2 und Trainingsverteilung, Laktatschwellen, Hitzeadaption und die Dateiformate dazwischen. Kein Ballast, nur Physiologie und ihre Anwendung.",
    readGuide: "Guide lesen",
    moreGuides: "Weitere Guides",
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
          body: "ENDURE is the first cycling app that lets you log lactate readings directly during a ride — or add them afterwards from your activity history. The app fits a curve through your readings and automatically estimates LT1 and LT2, including a confidence tunnel that shows how solid the estimate is. Your blood markers live next to your power data instead of in a spreadsheet, and every new reading refines the picture. Available on iOS and Android."
        }
      ],
      ctaTitle: "Log your first lactate test in ENDURE",
      ctaBody: "Now on iOS and Android — in-ride lactate logging, automatic LT1/LT2 estimation, and your full training picture in one app.",
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
          body: "ENDURE is the first indoor cycling app to natively integrate the CORE body temperature sensor — including a live heat-zone display right on the ride screen. Pair the sensor over Bluetooth like any power meter, watch your core temperature and current heat zone live while you ride, and find the full temperature trace stored with power and heart rate in your ride analysis afterwards. No second app, no workarounds — heat becomes a first-class training metric. Available on iOS and Android."
        }
      ],
      ctaTitle: "Train heat like power — with ENDURE and CORE",
      ctaBody: "Now on iOS and Android — native CORE integration, live heat zones on the ride screen, full post-ride analysis.",
      backToGuides: "All guides"
    },
    'ftp-test-power-zones': {
      seoTitle: "FTP Test & Power Zones — How to Test and Calculate Yours",
      seoDescription: "Which FTP test to ride, how to calculate your power zones from the result, and how often to retest — a practical guide for cyclists training indoors.",
      h1: "FTP Test and Power Zones: Testing and Calculating Yours",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      directAnswer: "FTP (functional threshold power) is the power you can hold for roughly an hour, and it is the number most training zones are calculated from. The common field tests are a 20-minute effort multiplied by 0.95, a ramp test to exhaustion multiplied by about 0.75 of the final minute, or a continuously modelled estimate from your ride data. Zones are then set as percentages of that value.",
      sections: [
        {
          title: "What is FTP?",
          body: "FTP is the highest power you could sustain in a quasi-steady state for about an hour — the practical stand-in for the physiological threshold above which fatigue accelerates. It is not a physiological measurement in itself; it is a performance estimate that happens to sit close to LT2 for most riders. That distinction matters, because it explains why two riders with the same FTP can need different training zones."
        },
        {
          title: "Which FTP test should you ride?",
          body: "All of the common protocols work; they differ in how much they hurt and how much they depend on pacing skill.",
          bullets: [
            "<strong>20-minute test:</strong> warm up thoroughly, ride 20 minutes as hard as you can hold evenly, multiply the average power by 0.95. Most accurate of the field tests, and the most dependent on even pacing.",
            "<strong>Ramp test:</strong> power rises steadily until you cannot continue; FTP is estimated at roughly 75% of your best one-minute power. Short and hard to pace badly, slightly less precise.",
            "<strong>8-minute test (2 × 8 min):</strong> two maximal 8-minute efforts, average multiplied by about 0.90. Easier to complete than a 20-minute effort, more sensitive to how you split the two.",
            "<strong>Modelled estimate:</strong> no test at all — FTP is derived from your recorded rides. No test-day dependency, but it needs a body of data to settle."
          ]
        },
        {
          title: "How do you calculate power zones from FTP?",
          body: "The widely used seven-zone model expresses each zone as a percentage of FTP. Treat the boundaries as guidance rather than physiology — they are a convention that works well for most riders:",
          bullets: [
            "<strong>Zone 1 — active recovery:</strong> under 55% of FTP.",
            "<strong>Zone 2 — endurance:</strong> 56–75%. The bulk of most training weeks.",
            "<strong>Zone 3 — tempo:</strong> 76–90%.",
            "<strong>Zone 4 — threshold:</strong> 91–105%. Sweet spot sits at the lower end, around 88–94%.",
            "<strong>Zone 5 — VO2max:</strong> 106–120%.",
            "<strong>Zone 6 — anaerobic capacity:</strong> 121–150%.",
            "<strong>Zone 7 — neuromuscular:</strong> above 150%, too short to pace by power."
          ]
        },
        {
          title: "How often should you retest?",
          body: "Every six to eight weeks is the usual advice, and it exists because zones drift out of date as fitness changes. In practice, retesting is disruptive: a test day replaces a training day, and a bad test sets your zones wrong for the next block. A continuously modelled estimate sidesteps that problem — which is why it is worth having even if you also like the reference point of a hard test twice a year."
        },
        {
          title: "Why do zones from FTP alone have limits?",
          body: "FTP is one number, so every zone boundary is a fixed percentage of it. Real physiology has two anchors, LT1 and LT2, and the distance between them varies between riders. A rider with a wide gap has a genuinely large aerobic range; a rider with a narrow one does not, even at identical FTP. If your zone 2 always feels too hard or your threshold work suspiciously easy, that gap is usually the reason."
        },
        {
          title: "How does ENDURE handle FTP and zones?",
          body: "ENDURE models your FTP and VO2max continuously from recorded power and heart-rate data across indoor and Strava- or intervals.icu-synced outdoor rides, so you see a trend rather than a test result with an expiry date. ERG mode holds test steps precisely if you do want to ride a protocol, and the time-in-zones breakdown after each ride shows how the session was actually distributed. If you also log lactate readings, ENDURE estimates LT1 and LT2 so you can check your percentage-based zones against measured thresholds. Available on iOS and Android."
        }
      ],
      ctaTitle: "Stop scheduling FTP tests",
      ctaBody: "Free on iOS and Android — FTP and VO2max modelled from the rides you already do, plus precise ERG control when you do want to test.",
      backToGuides: "All guides"
    },
    'zone-2-endurance-training': {
      seoTitle: "Zone 2 Training for Cyclists — How Much, How Hard, Why",
      seoDescription: "What zone 2 training is, why it works, how to tell you are actually in it, and how to do it indoors without the session drifting upward.",
      h1: "Zone 2 Training: How Much, How Hard, and Why It Works",
      datePublished: "2026-07-27",
      dateModified: "2026-07-29",
      directAnswer: "Zone 2 is steady endurance riding below your first lactate threshold (LT1), roughly 56 to 75% of FTP. It is an intensity you could hold for hours while still speaking in full sentences. It builds aerobic capacity at a low fatigue cost, which is why most endurance programmes put the majority of weekly volume there.",
      sections: [
        {
          title: "What is zone 2 training?",
          body: "Zone 2 sits between easy recovery spinning and tempo: hard enough to be a training stimulus, easy enough that you could keep going for a long time. Physiologically it lies below LT1, the point where blood lactate first rises above baseline. That boundary is what defines the zone. The 56 to 75% of FTP figure is a convenient stand-in for it, and like any stand-in it is wrong for some riders by a margin that matters."
        },
        {
          title: "Why do zone models disagree about what zone 2 is?",
          body: "Because there is more than one model. In a three-zone system, everything below LT1 is zone 1 and zone 2 is the band between LT1 and LT2. In the seven-zone power model most cycling software uses, zone 2 is 56 to 75% of FTP and for most riders sits under LT1. Same physiology, different labels. It is why one coach's zone 2 is another coach's zone 1, and why the useful question about a prescribed session is which threshold it refers to rather than which number it carries."
        },
        {
          title: "Why does riding easy make you faster?",
          body: "Low-intensity volume drives the adaptations that raise the ceiling for everything else: more mitochondria in the muscle, denser capillary beds around the fibres, more fat burned at a given power, a larger stroke volume and a bigger plasma volume. What sets it apart is the fatigue cost. Those adaptations arrive cheaply enough that you can repeat the session two days later, and then again. Harder intensities produce their own adaptations faster but cannot be stacked the same way, which is why a week of nothing but intervals stalls after a month. The trade is patience. Easy riding pays out over weeks, and it will not lift your five-minute power on its own."
        },
        {
          title: "What power and heart rate should zone 2 be?",
          body: "On power, 56 to 75% of FTP is the standard band, and the honest version is that riders who measure LT1 often find their real ceiling nearer the middle of it than the top. On heart rate, roughly 60 to 75% of maximum gets you close, but heart rate is the weaker anchor indoors because heat pushes it up at unchanged power. If you have both, pace by power and read heart rate as feedback. One thing spoils either number: an FTP that is months old. Zones built on a stale test describe a rider you no longer are."
        },
        {
          title: "How do you know you are actually in zone 2?",
          body: "This is where most zone 2 sessions fail, because riding slightly too hard feels productive. Four checks, in increasing order of precision:",
          bullets: [
            "<strong>The talk test:</strong> full sentences without gasping. If you are clipping words to breathe, you are above the zone.",
            "<strong>Heart-rate drift:</strong> at a fixed power, heart rate should stay fairly flat after the first 20 minutes. Comparing the first half of a long steady ride with the second, a rise beyond about 5% is the usual line between an easy ride and one that was not.",
            "<strong>Lactate:</strong> the only direct check. A reading near baseline, often around 2 mmol/L or below, confirms you are under LT1. A value that climbs across the ride says the opposite, whatever the power meter shows.",
            "<strong>Tomorrow:</strong> a true zone 2 ride leaves you able to do it again the next day. If it does not, it was a tempo session wearing a zone 2 label."
          ]
        },
        {
          title: "How much zone 2 do you need?",
          body: "The familiar answer is about 80% of weekly training time at low intensity and 20% genuinely hard. That ratio came from observing what trained endurance athletes already did, so it describes a pattern more than it prescribes one. Two things weigh more than hitting it exactly. The first is total easy time, because the adaptations respond to accumulated hours. The second is how that time is divided: two 90-minute rides do more than three 40-minute ones at the same intensity. On a five-hour week the arithmetic gets awkward anyway, since 20% is a single interval session, and the sensible reading is to keep the rest easy and long rather than to police the percentage."
        },
        {
          title: "How long should a single zone 2 ride be?",
          body: "An hour is a real session and worth doing. Ninety minutes to two hours is the range the benefit is best described for, and it is also where fuelling starts to decide how the last third goes. Past about three hours indoors, heat, saddle pressure and boredom usually take more than the extra time gives back, so genuinely long endurance rides belong outdoors when that is an option. When it is not, two shorter rides on the same day beat one that falls apart."
        },
        {
          title: "How do you fuel a zone 2 ride?",
          body: "Under about 75 minutes, water is usually enough and the ride will not be limited by anything you eat. Longer than that, 30 to 60 grams of carbohydrate per hour is the common range, and its real job is keeping the final third at the same power as the first. Riding fasted is a separate question rather than a harder version of the same one. It reliably lowers the power you can hold, so treat it as a nutrition experiment with its own goals, not as a way to make an easy ride count for more."
        },
        {
          title: "What makes indoor zone 2 different?",
          body: "Indoors there is no coasting, no descending and no junctions, so an hour on the trainer holds more pedalling than an hour on the road. It is a denser stimulus than the clock suggests, which is worth knowing before you copy a duration from an outdoor ride. Heat is the second difference: with little airflow, core temperature rises and heart rate follows at unchanged power, so a correctly paced ride can look too hard on the monitor. Put a fan in front of you, pace by power, and read drift with the heat in mind. Cadence is the third. No terrain forces it to vary, so choose one deliberately instead of settling into whatever the flywheel suggests."
        },
        {
          title: "What are the most common zone 2 mistakes?",
          body: "Almost all of them come from the same instinct, which is that a bit more effort ought to mean a bit more training.",
          bullets: [
            "<strong>Living at the top of the band,</strong> because 74% of FTP feels more like work than 62% does.",
            "<strong>Sessions too short to accumulate anything,</strong> then made harder to compensate.",
            "<strong>Chasing an outdoor heart-rate number indoors,</strong> which means riding below the intended power once the heat arrives.",
            "<strong>Riding without cooling</strong> and then reading the resulting drift as poor fitness.",
            "<strong>Zones from an FTP test done months ago,</strong> wrong in either direction.",
            "<strong>Sharpening the last 15 minutes,</strong> which turns an easy ride into a mediocre tempo effort and costs tomorrow's session."
          ]
        },
        {
          title: "Do you need lactate testing to train zone 2?",
          body: "No. The talk test and heart-rate drift get most riders close enough to train productively for years. What lactate adds is the location of your own LT1, which can sit well above or well below 75% of FTP, and no power number will tell you which. If you already test, the readings are worth keeping over time rather than treating each one as a verdict, because the threshold moves as you train."
        },
        {
          title: "How does ENDURE support zone 2 riding?",
          body: "ERG mode holds the target so the ride cannot creep upward while your attention wanders, and the time-in-zones breakdown afterwards shows whether the session stayed where you meant it to. Log lactate readings and ENDURE estimates your LT1, which turns the zone 2 ceiling into a measured threshold instead of a percentage. Core temperature from a paired CORE sensor explains the heart-rate drift indoor riding produces, and Heat Zones show it as a range rather than a raw number. Existing workouts import as .ZWO, .MRC or .ERG files, and finished rides sync to Strava and intervals.icu. ENDURE does not write your training plan; it measures what you actually did. Free on iOS and Android."
        }
      ],
      ctaTitle: "Keep your easy rides easy",
      ctaBody: "Free on iOS and Android. Steady ERG targets, time-in-zones after every ride, and LT1 estimated from your own lactate readings.",
      backToGuides: "All guides"
    },
    'sweet-spot-vs-polarized': {
      seoTitle: "Sweet Spot vs Polarized Training — Which Fits Your Week?",
      seoDescription: "Sweet spot, polarized and pyramidal training compared: what each model asks of you, what the evidence supports, and how to pick based on your available hours.",
      h1: "Sweet Spot vs Polarized Training: Which Model Fits You?",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      directAnswer: "Sweet spot training concentrates work just below threshold, around 88–94% of FTP, to accumulate a large training load in limited hours. Polarized training splits the week into mostly easy riding below LT1 and a small amount of genuinely hard work above LT2, deliberately avoiding the middle. Sweet spot suits time-constrained riders; polarized suits higher volume.",
      sections: [
        {
          title: "What is sweet spot training?",
          body: "Sweet spot sits between tempo and threshold — hard enough to drive adaptation, sustainable enough that you can accumulate 20 to 60 minutes of it in a session and come back two days later. Its appeal is efficiency: for a rider with five or six hours a week, sweet spot intervals pack more useful stimulus into that time than the same hours ridden easy. The cost is that it is never truly easy, so recovery has to be managed deliberately."
        },
        {
          title: "What is polarized training?",
          body: "Polarized training means roughly 80% of sessions at low intensity below LT1 and 20% at high intensity above LT2, with very little in between. The logic is that the easy work is easy enough to be genuinely restorative, which makes the hard work hard enough to matter. It is the pattern observed in many elite endurance athletes across sports — and part of why it works for them is that they have the volume for the easy 80% to add up to something."
        },
        {
          title: "Why is the middle intensity treated as a problem?",
          body: "The zone around tempo and just under threshold is often called the grey area: hard enough to accumulate fatigue, not hard enough to force a strong adaptation. Spend a whole week there and you arrive at the weekend tired without having trained anything sharply. That critique is aimed at unintentional middle-intensity riding — drifting up on easy days out of habit — rather than at sweet spot work, which is prescribed, bounded and followed by recovery."
        },
        {
          title: "What about pyramidal training?",
          body: "Pyramidal distribution keeps the large easy base, adds a moderate amount of tempo and threshold work, and tops out with a small amount of high intensity. It is what a lot of well-structured seasons look like in practice, and it tends to shift towards polarized as a target event approaches. If choosing between the two extremes feels artificial, this is why."
        },
        {
          title: "How do you decide which to use?",
          body: "The honest answer is that available hours decide more than philosophy does:",
          bullets: [
            "<strong>Under about 6 hours a week:</strong> sweet spot and threshold work give you the most return per hour. Pure polarized wastes a short week on riding too easy to matter.",
            "<strong>8 to 12 hours a week:</strong> a pyramidal distribution usually fits — a large easy base, some threshold work, a little VO2max.",
            "<strong>Above 12 hours a week:</strong> polarized becomes viable, because the easy 80% is now a lot of hours and genuinely accumulates.",
            "<strong>Close to a target event:</strong> shift the hard portion towards the demands of the event and cut total volume, whichever model you started from.",
            "<strong>Whatever you pick:</strong> the easy rides have to actually be easy. That single discipline matters more than the choice of model."
          ]
        },
        {
          title: "How does ENDURE fit into either model?",
          body: "The workout library is curated by physiological purpose — VO2max, threshold, sweet spot — rather than assembled into an automated plan, so you build the distribution you have decided on instead of following one that was chosen for you. Time in zones after each ride shows what the week actually looked like, which is usually less polarized than intended. Logged lactate readings give you LT1 and LT2, the two boundaries both models are defined by. Available on iOS and Android."
        }
      ],
      ctaTitle: "Build the week you decided on",
      ctaBody: "Free on iOS and Android — a curated library of physiologically meaningful sessions, plus the analysis to check what you actually rode.",
      backToGuides: "All guides"
    },
    'zwo-mrc-erg-files': {
      seoTitle: ".ZWO, .MRC and .ERG Workout Files — Formats and Import",
      seoDescription: "What .ZWO, .MRC and .ERG workout files contain, how they differ, and how to import them into ENDURE to ride them in ERG mode on iOS or Android.",
      h1: ".ZWO, .MRC and .ERG: Workout Files Explained",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      directAnswer: "A workout file is a list of intervals with a target for each one. .ZWO is Zwift's XML format and expresses targets as a percentage of FTP; .MRC and .ERG are older plain-text formats, where .MRC uses percentages and .ERG uses absolute watts. ENDURE imports all three and rides them in ERG mode.",
      sections: [
        {
          title: "What is in a workout file?",
          body: "Nothing more than structure: a sequence of segments, each with a duration and an intensity target, plus optional cadence hints and text prompts. That is what makes the formats portable — the file describes the session, and the app decides how to drive your trainer to it. It also means a session you wrote years ago in one app still works in another."
        },
        {
          title: "What does a .ZWO file contain?",
          body: "A .ZWO is an XML file, so you can open it in any text editor and read it. Inside, segments appear as elements like SteadyState, IntervalsT, Warmup and Cooldown, with power expressed as a fraction of FTP — 0.95 means 95% of your FTP, not 95 watts. Because the targets are relative, the same file scales correctly to any rider who imports it."
        },
        {
          title: "How do .MRC and .ERG differ?",
          body: "Both are plain-text formats from the earlier generation of indoor training software, and they share the same layout: a header block followed by rows of time and target. The difference is the unit, and it matters:",
          bullets: [
            "<strong>.MRC</strong> specifies targets as a percentage of FTP, so the file adapts to whoever rides it — the same behaviour as .ZWO.",
            "<strong>.ERG</strong> specifies targets in absolute watts, so the file encodes the FTP of whoever created it. Import someone else's .ERG and the numbers will be their numbers, not yours.",
            "<strong>In practice:</strong> prefer .ZWO or .MRC when sharing sessions, and treat .ERG as fine for your own use or when you deliberately want fixed wattages."
          ]
        },
        {
          title: "How do you import a workout into ENDURE?",
          body: "Open the file on your phone and hand it to ENDURE, or import it from the workout screen — either way it lands in your library alongside the curated sessions and can be ridden immediately. There is no conversion step and no desktop tool in between. All three formats behave the same way once imported."
        },
        {
          title: "What does ERG mode do with the file?",
          body: "In ERG mode the app holds the target from the file by adjusting trainer resistance, so the session runs at the prescribed power whatever gear you are in. Two practical notes: cadence changes cause a brief lag while the trainer catches up, and if your power meter reports erratically, smoothing matters — ENDURE applies smart-smoothing so a spiky signal does not translate into resistance that surges and drops. Control happens over the Bluetooth FTMS standard, so it works with current smart trainers regardless of brand."
        },
        {
          title: "Can you convert between the formats?",
          body: "You rarely need to, because ENDURE reads all three. If you do want to move a session, the relative formats (.ZWO, .MRC) convert into each other cleanly, while converting .ERG requires knowing the FTP it was written against — otherwise the intensities land somewhere arbitrary. That is the whole argument for keeping shared workouts in a percentage-based format."
        }
      ],
      ctaTitle: "Bring your workouts with you",
      ctaBody: "Free on iOS and Android — import .ZWO, .MRC and .ERG files and ride them in ERG mode on any FTMS smart trainer.",
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
          body: "ENDURE ist die erste Cycling-App, mit der du Laktatwerte direkt während der Fahrt eintragen kannst — oder im Nachhinein aus deiner Aktivitätshistorie. Die App fittet eine Kurve durch deine Werte und schätzt LT1 und LT2 automatisch, inklusive Konfidenztunnel, der zeigt, wie belastbar die Schätzung ist. Deine Blutwerte leben neben deinen Leistungsdaten statt in einem Spreadsheet — und jeder neue Wert schärft das Bild. Verfügbar auf iOS und Android."
        }
      ],
      ctaTitle: "Logge deinen ersten Laktattest in ENDURE",
      ctaBody: "Jetzt auf iOS und Android — Laktat-Eintrag während der Fahrt, automatische LT1/LT2-Schätzung und dein komplettes Trainingsbild in einer App.",
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
          body: "ENDURE ist die erste Indoor-Cycling-App, die den CORE Körpertemperatur-Sensor nativ integriert — inklusive Live-Heat-Zone-Anzeige direkt am Ride-Screen. Kopple den Sensor per Bluetooth wie einen Power Meter, sieh Kerntemperatur und aktuelle Heat Zone live während der Fahrt und finde den kompletten Temperaturverlauf danach neben Watt und Herzfrequenz in deiner Analyse. Keine zweite App, keine Umwege — Hitze wird zur vollwertigen Trainingsmetrik. Verfügbar auf iOS und Android."
        }
      ],
      ctaTitle: "Trainiere Hitze wie Watt — mit ENDURE und CORE",
      ctaBody: "Jetzt auf iOS und Android — native CORE-Integration, Live Heat Zones am Ride-Screen, volle Analyse nach der Fahrt.",
      backToGuides: "Alle Guides"
    },
    'ftp-test-power-zones': {
      seoTitle: "FTP-Test & Wattzonen — testen und richtig berechnen",
      seoDescription: "Welchen FTP-Test du fahren solltest, wie du deine Wattzonen daraus berechnest und wie oft du nachtesten musst — praktischer Guide für Indoor-Training.",
      h1: "FTP-Test und Wattzonen: testen und berechnen",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      directAnswer: "Die FTP (Functional Threshold Power) ist die Leistung, die du etwa eine Stunde halten kannst — und die Zahl, aus der die meisten Trainingszonen berechnet werden. Übliche Feldtests sind ein 20-Minuten-Test mal 0,95, ein Rampentest bis zur Ausbelastung mal etwa 0,75 der besten Minute, oder eine laufend aus deinen Fahrtdaten modellierte Schätzung. Die Zonen werden dann als Prozentwerte davon gesetzt.",
      sections: [
        {
          title: "Was ist die FTP?",
          body: "Die FTP ist die höchste Leistung, die du quasi im Steady State etwa eine Stunde halten könntest — der praktische Stellvertreter für die physiologische Schwelle, oberhalb derer die Ermüdung beschleunigt. Sie ist selbst keine physiologische Messung, sondern eine Leistungsschätzung, die bei den meisten Fahrern nahe der LT2 liegt. Diese Unterscheidung ist wichtig, denn sie erklärt, warum zwei Fahrer mit identischer FTP unterschiedliche Zonen brauchen können."
        },
        {
          title: "Welchen FTP-Test solltest du fahren?",
          body: "Alle gängigen Protokolle funktionieren; sie unterscheiden sich darin, wie weh sie tun und wie stark sie von deinem Pacing-Gefühl abhängen.",
          bullets: [
            "<strong>20-Minuten-Test:</strong> gründlich einfahren, 20 Minuten so hart wie gleichmäßig haltbar fahren, Durchschnittsleistung mal 0,95. Der genaueste Feldtest — und der, der am meisten von gleichmäßigem Pacing abhängt.",
            "<strong>Rampentest:</strong> die Leistung steigt gleichmäßig, bis nichts mehr geht; die FTP wird bei etwa 75 % deiner besten Minutenleistung geschätzt. Kurz und schwer schlecht zu pacen, dafür etwas ungenauer.",
            "<strong>8-Minuten-Test (2 × 8 min):</strong> zwei maximale 8-Minuten-Belastungen, Mittelwert mal etwa 0,90. Leichter durchzuhalten als 20 Minuten, empfindlicher dafür, wie du die zwei Blöcke aufteilst.",
            "<strong>Modellierte Schätzung:</strong> gar kein Test — die FTP wird aus deinen aufgezeichneten Fahrten abgeleitet. Keine Abhängigkeit von einem Testtag, braucht aber eine Datenbasis, bis sie sich einschwingt."
          ]
        },
        {
          title: "Wie berechnest du Wattzonen aus der FTP?",
          body: "Das verbreitete Sieben-Zonen-Modell drückt jede Zone als Prozentsatz der FTP aus. Behandle die Grenzen als Orientierung, nicht als Physiologie — sie sind eine Konvention, die für die meisten gut funktioniert:",
          bullets: [
            "<strong>Zone 1 — aktive Erholung:</strong> unter 55 % der FTP.",
            "<strong>Zone 2 — Grundlage:</strong> 56–75 %. Der Großteil der meisten Trainingswochen.",
            "<strong>Zone 3 — Tempo:</strong> 76–90 %.",
            "<strong>Zone 4 — Schwelle:</strong> 91–105 %. Der Sweet Spot liegt am unteren Ende, etwa 88–94 %.",
            "<strong>Zone 5 — VO2max:</strong> 106–120 %.",
            "<strong>Zone 6 — anaerobe Kapazität:</strong> 121–150 %.",
            "<strong>Zone 7 — neuromuskulär:</strong> über 150 %, zu kurz, um nach Watt zu pacen."
          ]
        },
        {
          title: "Wie oft solltest du nachtesten?",
          body: "Alle sechs bis acht Wochen ist die übliche Empfehlung, und sie existiert, weil Zonen mit steigender Fitness veralten. In der Praxis stört Nachtesten: ein Testtag ersetzt einen Trainingstag, und ein schlechter Test stellt deine Zonen für den nächsten Block falsch ein. Eine laufend modellierte Schätzung umgeht dieses Problem — weshalb sie sich auch dann lohnt, wenn du zusätzlich zweimal im Jahr den Referenzpunkt eines harten Tests willst."
        },
        {
          title: "Warum haben Zonen aus der FTP allein Grenzen?",
          body: "Die FTP ist eine einzige Zahl, also ist jede Zonengrenze ein fester Prozentsatz davon. Echte Physiologie hat zwei Anker, LT1 und LT2, und der Abstand zwischen ihnen ist individuell. Ein Fahrer mit großem Abstand hat einen tatsächlich breiten aeroben Bereich, einer mit kleinem nicht — bei identischer FTP. Wenn sich deine Zone 2 immer zu hart anfühlt oder Schwellenarbeit verdächtig leicht, ist meist genau dieser Abstand der Grund."
        },
        {
          title: "Wie geht ENDURE mit FTP und Zonen um?",
          body: "ENDURE modelliert FTP und VO2max laufend aus aufgezeichneten Power- und Herzfrequenzdaten — Indoor und per Strava oder intervals.icu synchronisierte Outdoor-Fahrten. Du siehst also einen Trend statt eines Testergebnisses mit Ablaufdatum. Der ERG-Modus hält Teststufen präzise, wenn du doch ein Protokoll fahren willst, und die Zeit-in-Zonen-Auswertung zeigt danach, wie die Einheit tatsächlich verteilt war. Trägst du zusätzlich Laktatwerte ein, schätzt ENDURE LT1 und LT2 — dann kannst du deine prozentualen Zonen gegen gemessene Schwellen prüfen. Verfügbar auf iOS und Android."
        }
      ],
      ctaTitle: "Hör auf, FTP-Tests zu planen",
      ctaBody: "Kostenlos für iOS und Android — FTP und VO2max aus den Fahrten modelliert, die du ohnehin machst, plus präzise ERG-Steuerung, wenn du testen willst.",
      backToGuides: "Alle Guides"
    },
    'zone-2-endurance-training': {
      seoTitle: "Zone-2-Training für Radsportler — wie viel, wie hart, warum",
      seoDescription: "Was Zone-2-Training ist, warum es wirkt, wie du erkennst, dass du wirklich drin bist, und wie du es indoor fährst, ohne nach oben zu driften.",
      h1: "Zone-2-Training: wie viel, wie hart und warum es wirkt",
      datePublished: "2026-07-27",
      dateModified: "2026-07-29",
      directAnswer: "Zone 2 ist gleichmäßiges Grundlagentraining unterhalb der ersten Laktatschwelle (LT1), etwa 56 bis 75 % der FTP. Es ist eine Intensität, die du stundenlang halten und dabei in vollen Sätzen sprechen kannst. Sie baut die aerobe Kapazität bei niedrigen Ermüdungskosten auf, weshalb die meisten Ausdauerprogramme den Großteil des Wochenvolumens dort platzieren.",
      sections: [
        {
          title: "Was ist Zone-2-Training?",
          body: "Zone 2 liegt zwischen lockerem Ausrollen und Tempo: hart genug für einen Trainingsreiz, locker genug, um lange durchzuhalten. Physiologisch liegt sie unter der LT1, dem Punkt, an dem das Blutlaktat erstmals über das Grundniveau steigt. Diese Grenze definiert die Zone. Die 56 bis 75 % der FTP sind eine praktische Annäherung daran, und wie jede Annäherung liegt sie bei manchen Fahrern um einen Betrag daneben, der zählt."
        },
        {
          title: "Warum sind sich die Zonenmodelle nicht einig, was Zone 2 ist?",
          body: "Weil es mehrere gibt. Im Dreizonenmodell ist alles unter der LT1 die Zone 1, und Zone 2 bezeichnet das Band zwischen LT1 und LT2. Im Siebenzonenmodell nach Leistung, das die meiste Radsoftware nutzt, sind Zone 2 genau 56 bis 75 % der FTP, und die liegen bei den meisten Fahrern unter der LT1. Gleiche Physiologie, andere Beschriftung. Deshalb ist die Zone 2 des einen Trainers die Zone 1 des anderen, und deshalb lautet die nützliche Frage zu einer vorgegebenen Einheit, auf welche Schwelle sie sich bezieht, nicht welche Zahl sie trägt."
        },
        {
          title: "Warum macht locker fahren schneller?",
          body: "Volumen bei niedriger Intensität treibt die Anpassungen, die die Obergrenze für alles andere heben: mehr Mitochondrien im Muskel, dichtere Kapillarnetze um die Fasern, mehr Fettverbrennung bei gegebener Leistung, ein größeres Schlagvolumen und ein größeres Plasmavolumen. Der Unterschied liegt in den Ermüdungskosten. Diese Anpassungen entstehen so billig, dass du die Einheit zwei Tage später wiederholen kannst und danach noch einmal. Härtere Intensitäten liefern ihre eigenen Anpassungen schneller, lassen sich aber nicht so stapeln, weshalb eine Woche aus lauter Intervallen nach einem Monat stagniert. Der Preis ist Geduld. Locker fahren zahlt über Wochen aus und hebt deine Fünf-Minuten-Leistung nicht von allein."
        },
        {
          title: "Welche Watt und welche Herzfrequenz sind Zone 2?",
          body: "Auf der Leistungsseite sind 56 bis 75 % der FTP das übliche Band, und die ehrliche Version lautet: wer seine LT1 messen lässt, findet die tatsächliche Obergrenze oft näher an der Mitte als am oberen Rand. Auf der Herzfrequenzseite kommen etwa 60 bis 75 % des Maximums in die Nähe, aber die Herzfrequenz ist indoor der schwächere Anker, weil Hitze sie bei unveränderter Leistung nach oben schiebt. Hast du beides, fahre nach Watt und lies die Herzfrequenz als Rückmeldung. Eine Sache verdirbt beide Zahlen: eine FTP, die Monate alt ist. Zonen aus einem alten Test beschreiben einen Fahrer, der du nicht mehr bist."
        },
        {
          title: "Wie erkennst du, dass du wirklich in Zone 2 bist?",
          body: "Hier scheitern die meisten Zone-2-Einheiten, weil ein bisschen zu hart sich produktiv anfühlt. Vier Prüfungen, aufsteigend nach Genauigkeit:",
          bullets: [
            "<strong>Sprechtest:</strong> vollständige Sätze, ohne nach Luft zu schnappen. Wenn du Wörter abschneidest, um zu atmen, bist du über der Zone.",
            "<strong>Herzfrequenz-Drift:</strong> bei fester Leistung sollte die Herzfrequenz nach den ersten 20 Minuten recht flach bleiben. Vergleicht man die erste Hälfte einer langen gleichmäßigen Fahrt mit der zweiten, gilt ein Anstieg über etwa 5 % als Grenze zwischen einer lockeren Fahrt und einer, die es nicht war.",
            "<strong>Laktat:</strong> die einzige direkte Prüfung. Ein Wert nahe dem Grundniveau, häufig um 2 mmol/l oder darunter, bestätigt, dass du unter der LT1 liegst. Ein Wert, der über die Fahrt hinweg steigt, sagt das Gegenteil, egal was der Powermeter anzeigt.",
            "<strong>Der nächste Tag:</strong> eine echte Zone-2-Fahrt lässt sich morgen wiederholen. Wenn nicht, war es eine Tempoeinheit mit Zone-2-Etikett."
          ]
        },
        {
          title: "Wie viel Zone 2 brauchst du?",
          body: "Die geläufige Antwort sind rund 80 % der Wochenzeit bei niedriger Intensität und 20 % wirklich hart. Dieses Verhältnis stammt aus der Beobachtung dessen, was trainierte Ausdauerathleten ohnehin taten, es beschreibt also ein Muster mehr als es eines vorschreibt. Zwei Dinge wiegen schwerer, als die Quote genau zu treffen. Erstens die gesamte locker gefahrene Zeit, denn die Anpassungen reagieren auf angesammelte Stunden. Zweitens ihre Aufteilung: zwei Fahrten über 90 Minuten bringen mehr als drei über 40 Minuten bei gleicher Intensität. In einer Fünf-Stunden-Woche wird die Rechnung ohnehin schief, weil 20 % genau eine Intervalleinheit sind, und die sinnvolle Lesart ist, den Rest locker und lang zu halten statt die Prozente zu verwalten."
        },
        {
          title: "Wie lang sollte eine einzelne Zone-2-Fahrt sein?",
          body: "Eine Stunde ist eine richtige Einheit und lohnt sich. Zwischen 90 Minuten und zwei Stunden liegt der Bereich, für den der Nutzen am besten beschrieben ist, und dort entscheidet auch die Verpflegung, wie das letzte Drittel läuft. Jenseits von etwa drei Stunden indoor nehmen Hitze, Satteldruck und Langeweile meist mehr, als die zusätzliche Zeit zurückgibt. Wirklich lange Grundlagenfahrten gehören nach draußen, wenn das eine Option ist. Wenn nicht, sind zwei kürzere Fahrten am selben Tag besser als eine, die zerfällt."
        },
        {
          title: "Wie verpflegst du eine Zone-2-Fahrt?",
          body: "Unter etwa 75 Minuten reicht Wasser in der Regel, die Fahrt scheitert an nichts, was du isst. Darüber sind 30 bis 60 Gramm Kohlenhydrate pro Stunde der übliche Bereich, und ihre eigentliche Aufgabe ist, das letzte Drittel auf derselben Leistung zu halten wie das erste. Nüchtern fahren ist eine eigene Frage, nicht die härtere Variante derselben. Es senkt die haltbare Leistung zuverlässig, ist also ein Ernährungsexperiment mit eigenen Zielen und kein Weg, eine locker gefahrene Einheit höher zu bewerten."
        },
        {
          title: "Was ist indoor anders?",
          body: "Indoor gibt es kein Rollen, keine Abfahrt und keine Kreuzung, eine Stunde auf dem Smart Trainer enthält also mehr Pedalarbeit als eine Stunde auf der Straße. Der Reiz ist dichter, als die Uhr vermuten lässt, und das ist wichtig zu wissen, bevor du eine Dauer von draußen übernimmst. Hitze ist der zweite Unterschied: bei wenig Luftstrom steigt die Kerntemperatur und die Herzfrequenz folgt bei unveränderter Leistung, eine korrekt gefahrene Einheit kann am Messgerät also zu hart aussehen. Stell einen Ventilator vor dich, fahre nach Watt und lies den Drift im Licht der Hitze. Die Trittfrequenz ist der dritte Punkt. Kein Gelände erzwingt Variation, wähle sie also bewusst statt sie dem Schwungrad zu überlassen."
        },
        {
          title: "Was sind die häufigsten Fehler in Zone 2?",
          body: "Fast alle entstehen aus demselben Reflex: ein bisschen mehr Anstrengung müsste ein bisschen mehr Training bedeuten.",
          bullets: [
            "<strong>Dauerhaft am oberen Rand des Bandes,</strong> weil sich 74 % der FTP mehr nach Arbeit anfühlen als 62 %.",
            "<strong>Einheiten zu kurz, um etwas anzusammeln,</strong> und dann härter gefahren, um das auszugleichen.",
            "<strong>Einer Outdoor-Herzfrequenz indoor nachjagen,</strong> was heißt: unter der vorgesehenen Leistung fahren, sobald die Hitze kommt.",
            "<strong>Ohne Kühlung fahren</strong> und den entstehenden Drift dann als schlechte Form lesen.",
            "<strong>Zonen aus einem Monate alten FTP-Test,</strong> in beide Richtungen falsch.",
            "<strong>Die letzten 15 Minuten zuspitzen,</strong> was aus einer lockeren Fahrt eine mittelmäßige Tempoeinheit macht und die Einheit von morgen kostet."
          ]
        },
        {
          title: "Brauchst du Laktatmessung für Zone 2?",
          body: "Nein. Sprechtest und Herzfrequenz-Drift bringen die meisten Fahrer jahrelang nah genug heran, um produktiv zu trainieren. Was Laktat hinzufügt, ist die Lage deiner eigenen LT1, und die kann deutlich über oder deutlich unter 75 % der FTP liegen. Kein Wattwert verrät dir, welches von beidem gilt. Wenn du ohnehin misst, lohnt es, die Werte über die Zeit zu führen statt jeden einzelnen als Urteil zu nehmen, denn die Schwelle wandert mit dem Training."
        },
        {
          title: "Wie unterstützt ENDURE Zone-2-Fahrten?",
          body: "Der ERG-Modus hält das Ziel, damit die Fahrt nicht nach oben kriecht, während die Aufmerksamkeit wandert, und die Zeit-in-Zonen-Auswertung zeigt danach, ob die Einheit dort geblieben ist, wo du sie wolltest. Trägst du Laktatwerte ein, schätzt ENDURE deine LT1, und die Zone-2-Obergrenze wird eine gemessene Schwelle statt eines Prozentwerts. Die Kerntemperatur eines gekoppelten CORE-Sensors erklärt den Herzfrequenz-Drift, den Indoor-Fahren erzeugt, und Heat Zones zeigen sie als Bereich statt als rohe Zahl. Bestehende Workouts kommen als .ZWO-, .MRC- oder .ERG-Datei herein, fertige Fahrten gehen zu Strava und intervals.icu. ENDURE schreibt keinen Trainingsplan, ENDURE misst, was du tatsächlich gefahren bist. Kostenlos für iOS und Android."
        }
      ],
      ctaTitle: "Halte deine lockeren Fahrten locker",
      ctaBody: "Kostenlos für iOS und Android. Stabile ERG-Ziele, Zeit in Zonen nach jeder Fahrt und LT1 aus deinen eigenen Laktatwerten.",
      backToGuides: "Alle Guides"
    },
    'sweet-spot-vs-polarized': {
      seoTitle: "Sweet Spot vs. polarisiertes Training — was passt zu dir?",
      seoDescription: "Sweet Spot, polarisiertes und pyramidales Training im Vergleich: was jedes Modell verlangt, was die Studienlage stützt und wie du nach verfügbaren Stunden entscheidest.",
      h1: "Sweet Spot vs. polarisiertes Training: welches Modell passt?",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      directAnswer: "Sweet-Spot-Training bündelt die Arbeit knapp unter der Schwelle, bei etwa 88–94 % der FTP, um in wenigen Stunden viel Trainingsreiz zu sammeln. Polarisiertes Training teilt die Woche in überwiegend lockeres Fahren unter LT1 und einen kleinen Anteil wirklich harter Arbeit über LT2 — die Mitte wird bewusst ausgelassen. Sweet Spot passt zu knapper Zeit, polarisiert zu hohem Volumen.",
      sections: [
        {
          title: "Was ist Sweet-Spot-Training?",
          body: "Der Sweet Spot liegt zwischen Tempo und Schwelle: hart genug, um Anpassung auszulösen, haltbar genug, dass du 20 bis 60 Minuten davon in einer Einheit sammeln und zwei Tage später wiederkommen kannst. Sein Reiz ist Effizienz: für einen Fahrer mit fünf oder sechs Stunden pro Woche packen Sweet-Spot-Intervalle mehr nutzbaren Reiz in diese Zeit als dieselben Stunden locker. Der Preis: es ist nie wirklich locker, die Erholung muss also bewusst gesteuert werden."
        },
        {
          title: "Was ist polarisiertes Training?",
          body: "Polarisiert heißt etwa 80 % der Einheiten bei niedriger Intensität unter LT1 und 20 % bei hoher Intensität über LT2, mit sehr wenig dazwischen. Die Logik: das Lockere ist locker genug, um wirklich zu regenerieren, und das macht das Harte hart genug, um zu zählen. Es ist das Muster, das man bei vielen Eliteathleten mehrerer Ausdauersportarten beobachtet — und Teil des Grundes, warum es bei ihnen funktioniert, ist, dass sie das Volumen haben, damit die lockeren 80 % zu etwas summieren."
        },
        {
          title: "Warum gilt die mittlere Intensität als Problem?",
          body: "Der Bereich um Tempo und knapp unter der Schwelle wird oft Grauzone genannt: hart genug, um Ermüdung anzusammeln, nicht hart genug, um eine deutliche Anpassung zu erzwingen. Verbringst du eine ganze Woche dort, kommst du am Wochenende müde an, ohne etwas scharf trainiert zu haben. Diese Kritik richtet sich gegen unabsichtliches Fahren in der Mitte — gewohnheitsmäßiges Nach-oben-Driften an lockeren Tagen — nicht gegen Sweet-Spot-Arbeit, die vorgegeben, begrenzt und von Erholung gefolgt ist."
        },
        {
          title: "Und pyramidales Training?",
          body: "Die pyramidale Verteilung behält die große locker gefahrene Basis, ergänzt einen moderaten Anteil Tempo- und Schwellenarbeit und setzt einen kleinen Anteil hoher Intensität obendrauf. So sehen viele gut strukturierte Saisons in der Praxis aus, und je näher ein Zielevent kommt, desto polarisierter wird sie meist. Wenn dir die Wahl zwischen den beiden Extremen künstlich vorkommt: genau deshalb."
        },
        {
          title: "Wie entscheidest du?",
          body: "Die ehrliche Antwort: die verfügbaren Stunden entscheiden mehr als die Philosophie.",
          bullets: [
            "<strong>Unter etwa 6 Stunden pro Woche:</strong> Sweet Spot und Schwellenarbeit bringen den größten Ertrag pro Stunde. Rein polarisiert verschenkt eine kurze Woche an zu lockeres Fahren.",
            "<strong>8 bis 12 Stunden pro Woche:</strong> eine pyramidale Verteilung passt meist — große locker gefahrene Basis, etwas Schwellenarbeit, ein wenig VO2max.",
            "<strong>Über 12 Stunden pro Woche:</strong> polarisiert wird tragfähig, weil die lockeren 80 % jetzt viele Stunden sind und tatsächlich summieren.",
            "<strong>Kurz vor dem Zielevent:</strong> den harten Anteil an die Anforderungen des Events ausrichten und das Gesamtvolumen senken — egal, von welchem Modell du kommst.",
            "<strong>Was du auch wählst:</strong> die lockeren Fahrten müssen wirklich locker sein. Diese einzige Disziplin zählt mehr als die Wahl des Modells."
          ]
        },
        {
          title: "Wie passt ENDURE in beide Modelle?",
          body: "Die Workout-Bibliothek ist nach physiologischem Zweck kuratiert — VO2max, Schwelle, Sweet Spot — und nicht zu einem automatischen Plan zusammengesetzt. Du baust also die Verteilung, für die du dich entschieden hast, statt einer, die für dich gewählt wurde. Zeit in Zonen zeigt nach jeder Fahrt, wie die Woche tatsächlich aussah, und das ist meist weniger polarisiert als geplant. Eingetragene Laktatwerte liefern LT1 und LT2 — die zwei Grenzen, über die beide Modelle überhaupt definiert sind. Verfügbar auf iOS und Android."
        }
      ],
      ctaTitle: "Bau die Woche, für die du dich entschieden hast",
      ctaBody: "Kostenlos für iOS und Android — kuratierte Bibliothek physiologisch sinnvoller Einheiten plus die Analyse, um zu prüfen, was du wirklich gefahren bist.",
      backToGuides: "Alle Guides"
    },
    'zwo-mrc-erg-files': {
      seoTitle: ".ZWO, .MRC und .ERG — Workout-Dateien erklärt und importieren",
      seoDescription: "Was in .ZWO-, .MRC- und .ERG-Workout-Dateien steckt, wie sie sich unterscheiden und wie du sie in ENDURE importierst und im ERG-Modus fährst.",
      h1: ".ZWO, .MRC und .ERG: Workout-Dateien erklärt",
      datePublished: "2026-07-27",
      dateModified: "2026-07-27",
      directAnswer: "Eine Workout-Datei ist eine Liste von Intervallen mit je einem Ziel. .ZWO ist Zwifts XML-Format und gibt Ziele als Prozent der FTP an; .MRC und .ERG sind ältere Klartext-Formate, wobei .MRC Prozentwerte und .ERG absolute Watt verwendet. ENDURE importiert alle drei und fährt sie im ERG-Modus.",
      sections: [
        {
          title: "Was steckt in einer Workout-Datei?",
          body: "Nicht mehr als Struktur: eine Folge von Abschnitten mit je einer Dauer und einem Intensitätsziel, dazu optional Trittfrequenz-Hinweise und Textmeldungen. Genau das macht die Formate portabel — die Datei beschreibt die Einheit, und die App entscheidet, wie sie deinen Trainer dorthin steuert. Es heißt auch: eine Einheit, die du vor Jahren in einer anderen App geschrieben hast, funktioniert weiter."
        },
        {
          title: "Was steht in einer .ZWO-Datei?",
          body: "Eine .ZWO ist eine XML-Datei, du kannst sie also in jedem Texteditor öffnen und lesen. Darin erscheinen Abschnitte als Elemente wie SteadyState, IntervalsT, Warmup und Cooldown, die Leistung als Bruchteil der FTP — 0.95 heißt 95 % deiner FTP, nicht 95 Watt. Weil die Ziele relativ sind, skaliert dieselbe Datei korrekt für jeden, der sie importiert."
        },
        {
          title: "Wie unterscheiden sich .MRC und .ERG?",
          body: "Beide sind Klartext-Formate aus der früheren Generation von Indoor-Software und teilen denselben Aufbau: ein Kopfblock, danach Zeilen aus Zeit und Ziel. Der Unterschied liegt in der Einheit, und der ist wichtig:",
          bullets: [
            "<strong>.MRC</strong> gibt Ziele als Prozent der FTP an, die Datei passt sich also an, wer sie fährt — wie bei .ZWO.",
            "<strong>.ERG</strong> gibt Ziele in absoluten Watt an, die Datei kodiert damit die FTP ihres Erstellers. Importierst du eine fremde .ERG, sind die Zahlen dessen Zahlen, nicht deine.",
            "<strong>In der Praxis:</strong> zum Teilen .ZWO oder .MRC bevorzugen; .ERG ist gut für eigene Zwecke oder wenn du bewusst feste Wattzahlen willst."
          ]
        },
        {
          title: "Wie importierst du ein Workout in ENDURE?",
          body: "Öffne die Datei am Handy und übergib sie an ENDURE, oder importiere sie im Workout-Screen — so oder so landet sie in deiner Bibliothek neben den kuratierten Einheiten und ist sofort fahrbar. Kein Konvertierungsschritt, kein Desktop-Tool dazwischen. Alle drei Formate verhalten sich nach dem Import gleich."
        },
        {
          title: "Was macht der ERG-Modus mit der Datei?",
          body: "Im ERG-Modus hält die App das Ziel aus der Datei, indem sie den Widerstand des Trainers nachregelt — die Einheit läuft also auf der vorgegebenen Leistung, egal in welchem Gang du fährst. Zwei praktische Hinweise: Trittfrequenzwechsel erzeugen eine kurze Verzögerung, bis der Trainer nachgezogen hat, und wenn dein Powermeter unruhig meldet, zählt Glättung — ENDURE nutzt Smart-Smoothing, damit ein zappeliges Signal nicht in auf- und abschießenden Widerstand übersetzt wird. Gesteuert wird über den Bluetooth-Standard FTMS, das funktioniert also mit aktuellen Smart Trainern unabhängig von der Marke."
        },
        {
          title: "Kannst du zwischen den Formaten konvertieren?",
          body: "Meist brauchst du das nicht, weil ENDURE alle drei liest. Willst du eine Einheit doch umziehen: die relativen Formate (.ZWO, .MRC) lassen sich sauber ineinander überführen, während eine .ERG die FTP braucht, gegen die sie geschrieben wurde — sonst landen die Intensitäten irgendwo. Genau das ist das Argument dafür, geteilte Workouts in einem prozentbasierten Format zu halten."
        }
      ],
      ctaTitle: "Nimm deine Workouts mit",
      ctaBody: "Kostenlos für iOS und Android — .ZWO-, .MRC- und .ERG-Dateien importieren und im ERG-Modus auf jedem FTMS-Smart-Trainer fahren.",
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
