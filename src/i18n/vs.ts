// Comparison-page content for /vs/* pages, keyed by language then competitor.
// Same convention as translations.ts: every key exists in both `en` and `de`.

export type VsKey =
  | 'zwift'
  | 'trainerroad'
  | 'rouvy'
  | 'mywhoosh'
  | 'wahoo-systm'
  | 'trainingpeaks-virtual';

/** Every comparison page, in the order the footer and llms.txt list them. */
export const vsKeys: VsKey[] = ['zwift', 'trainerroad', 'rouvy', 'mywhoosh', 'wahoo-systm', 'trainingpeaks-virtual'];

export const vsContent = {
  en: {
    zwift: {
      datePublished: "2026-07-20",
      dateModified: "2026-10-18",
      seoTitle: "Zwift Alternative: ENDURE, the Precision Indoor Cycling App",
      seoDescription: "Zwift alternative for iOS, Android and Windows: ERG control, FTP & VO2max trends, lactate LT1/LT2, CORE heat zones. Zwift Click v1 keeps working. 14 days free.",
      breadcrumb: "Zwift alternative",
      h1: "ENDURE: the Zwift alternative for precision training",
      subtitle: "Looking to switch? Here is the honest comparison.",
      directAnswer: "ENDURE is an alternative to Zwift for riders who want training rather than a game. Zwift is a virtual-world platform built around racing, group rides and motivation through gameplay. ENDURE is a precision training app built around structured workouts and physiological analysis: FTP and VO2max trends, lactate LT1/LT2 thresholds and native CORE heat zones. Different tools for different goals.",
      intro: "Both apps control your smart trainer and record your rides, but they solve different problems. Here is an honest side-by-side comparison so you can pick the right tool for your training.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Zwift",
      rows: [
        { feature: "Core focus", endure: "Precision training & physiological analysis", other: "Virtual worlds, racing & social riding" },
        { feature: "Price", endure: "Affordable subscription, monthly or annual, with a 14-day free trial", other: "Paid monthly subscription" },
        { feature: "Daily coaching", endure: "AI coach plans each day from your rides and a morning check-in: one workout, two alternatives, the reason. Change it in chat", other: "Training plans and workouts; no daily coach" },
        { feature: "Platforms", endure: "iOS, Android & Windows", other: "PC, Mac, iOS, Android, Apple TV" },
        { feature: "Smart trainer control (ERG)", endure: "Yes, over Bluetooth with smart-smoothing", other: "Yes" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verified): ERG target & resistance from the bars, no simulated cassette", other: "Yes, simulated gears via Zwift Cog & Click" },
        { feature: "Structured workouts", endure: "Curated physiological library + .ZWO/.MRC/.ERG import", other: "Large library + custom workouts" },
        { feature: "FTP & VO2max trends", endure: "Modelled continuously from your ride data", other: "FTP from tests/races; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation (industry first)", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones (industry first)", other: "No native heat-zone display" },
        { feature: "Climbing metric", endure: "Automatic VAM-based Climbing Efficiency score", other: "Virtual climbs & climb portal" },
        { feature: "Racing & social", endure: "Not the focus", other: "Races, group rides, huge community" },
        { feature: "Hardware requirements", endure: "Runs smoothly on a phone, no gaming PC needed", other: "Graphics-heavy; benefits from strong hardware" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "Auto-upload" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want structured training and honest analysis instead of a game",
        "care about physiological metrics: lactate thresholds, VO2max trends, heat adaptation",
        "use a CORE body temperature sensor and want native heat zones in-ride",
        "want an affordable subscription, with 14 days free before you commit",
        "already own a Zwift Click v1 (it works with ENDURE too, for your ERG target and resistance)",
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
        "<strong>Your trainer:</strong> ENDURE controls smart trainers over the Bluetooth standard FTMS, so you keep riding the same hardware with no new purchase.",
        "<strong>Your Zwift Click:</strong> a v1 pairs like any other sensor and changes your ERG target or trainer resistance from the bars. ENDURE does not simulate a cassette, so it is resistance control rather than gears.",
        "<strong>Your workouts:</strong> .ZWO files import directly, along with .MRC and .ERG, so your existing session library comes with you.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, so indoor and outdoor training sit in one picture from day one.",
        "<strong>Your hardware budget:</strong> ENDURE runs on the phone or tablet you already own, so there is no gaming PC to keep fed."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Absolutely, many riders do. A common setup: ride Zwift for races and social events, and use ENDURE for structured training sessions and as the analysis home for FTP, VO2max, lactate and heat metrics. ENDURE syncs your rides via Strava or intervals.icu, so nothing gets lost.",
      faq: [
        {
          q: "What does ENDURE cost compared with Zwift?",
          a: "Both are subscriptions. ENDURE Premium is billed monthly or annually through the App Store or Google Play, priced at the low end on purpose, and every new account starts with 14 days free. For that you get ERG smart trainer control, a curated workout library, FTP and VO2max trends, lactate LT1/LT2 estimation and CORE heat zones. What you do not get is virtual worlds and racing, which is Zwift's core."
        },
        {
          q: "Can I try ENDURE for free?",
          a: "Yes, 14 days on a new account with the full Premium feature set. After that it is a monthly or annual subscription."
        },
        {
          q: "Does ENDURE have virtual worlds like Zwift?",
          a: "No, deliberately. ENDURE follows a precision-over-gimmicks philosophy: structured workouts, clean ride screens and deep analysis instead of avatars and virtual roads."
        },
        {
          q: "Can ENDURE control the same smart trainers as Zwift?",
          a: "Yes. ENDURE controls smart trainers over standard Bluetooth in ERG mode, and connects power meters and heart-rate monitors, the same hardware you use with Zwift. A Zwift Click v1 works too: it pairs like any sensor and controls your ERG target and trainer resistance from the handlebar, though ENDURE does not simulate a cassette the way Zwift does."
        }
      ],
      ctaTitle: "Try ENDURE free for 14 days on iOS, Android & Windows",
      ctaBody: "Download ENDURE on iOS, Android or Windows, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place. The first 14 days cost nothing.",
      disclaimer: "Zwift is a trademark of Zwift, Inc. This comparison reflects publicly available information as of October 2026 and describes ENDURE's current feature set. Check both vendors for current details.",
      backHome: "Back to Homepage"
    },
    trainerroad: {
      datePublished: "2026-07-20",
      dateModified: "2026-10-18",
      seoTitle: "TrainerRoad Alternative: ENDURE with Lactate & Heat Zones",
      seoDescription: "TrainerRoad alternative for iOS, Android and Windows: lactate LT1/LT2, native CORE heat zones, FTP & VO2max trends and a curated workout library. 14 days free.",
      breadcrumb: "TrainerRoad alternative",
      h1: "ENDURE: the TrainerRoad alternative for riders who want the data",
      subtitle: "Looking to switch? Here is the honest comparison.",
      directAnswer: "ENDURE is an alternative to TrainerRoad for riders who want coaching that reacts to each day and analysis that shows their physiology. TrainerRoad is a subscription service built around adaptive multi-week training plans toward a target event. ENDURE's AI coach plans one day at a time from your recent rides and a morning check-in, and the app adds lactate LT1/LT2 thresholds, native CORE heat zones and FTP and VO2max trends.",
      intro: "Both apps take structured indoor training seriously, with no virtual worlds on either side. The difference is philosophy: TrainerRoad prescribes your training, ENDURE measures your physiology and lets you train with precision. Here is the honest comparison.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainerRoad",
      rows: [
        { feature: "Core focus", endure: "Daily AI coaching & physiological analysis", other: "Adaptive multi-week training plans" },
        { feature: "Price", endure: "Affordable subscription, monthly or annual, with a 14-day free trial", other: "Paid monthly/annual subscription" },
        { feature: "Daily coaching", endure: "AI coach plans each day from your rides and a morning check-in: one workout, two alternatives, the reason. Change it in chat", other: "Adaptive multi-week plans; TrainNow suggests a workout" },
        { feature: "Platforms", endure: "iOS, Android & Windows", other: "PC, Mac, iOS, Android" },
        { feature: "Smart trainer control (ERG)", endure: "Yes, over Bluetooth with smart-smoothing", other: "Yes" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verified): ERG target & resistance from the bars", other: "Not available" },
        { feature: "Training plans", endure: "No fixed multi-week plan: the coach picks each day, you decide", other: "Adaptive multi-week plans built by algorithms" },
        { feature: "Workout import", endure: ".ZWO, .MRC and .ERG files", other: "Workout creator + TrainNow" },
        { feature: "FTP & VO2max trends", endure: "Both modelled continuously from ride data", other: "AI FTP detection; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation (industry first)", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones (industry first)", other: "No native heat-zone display" },
        { feature: "Climbing metric", endure: "Automatic VAM-based Climbing Efficiency score", other: "Not available" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "Auto-upload" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want to see your physiology (lactate thresholds, VO2max trend, heat adaptation), not just follow a plan",
        "use a CORE body temperature sensor and want native heat zones in-ride",
        "want a coach that adapts to how you feel today instead of a plan fixed weeks ahead",
        "want an affordable subscription, with 14 days free before you commit"
      ],
      chooseOtherTitle: "Choose TrainerRoad if you…",
      chooseOther: [
        "want a fully prescribed, hands-off training plan toward a target event",
        "like algorithm-driven progression management",
        "are happy to pay for an algorithmic coaching layer"
      ],
      switchTitle: "Switching from TrainerRoad? Here is what you keep",
      switchBullets: [
        "<strong>Your trainer:</strong> ENDURE controls smart trainers over the Bluetooth standard FTMS, so you keep the same hardware with no new purchase.",
        "<strong>Your workouts:</strong> .ZWO, .MRC and .ERG files import directly, so structured sessions you already rely on carry over.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, combining indoor and outdoor training into one performance picture.",
        "<strong>Your structure:</strong> the workout library is curated by physiological purpose (VO2max, threshold, sweet spot), so you can rebuild a week without an algorithm scheduling it for you.",
        "<strong>Your money:</strong> a subscription at the low end of what training apps cost, and 14 days free to decide whether the data is worth it to you."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Yes. Some riders follow a TrainerRoad plan and use ENDURE as their physiological dashboard: logging lactate tests, tracking CORE heat zones and watching FTP and VO2max trends across all rides via Strava or intervals.icu sync.",
      faq: [
        {
          q: "How does ENDURE's pricing compare with TrainerRoad?",
          a: "Both are subscriptions. ENDURE Premium is billed monthly or annually through the App Store or Google Play, kept at the low end on purpose, and new accounts start with 14 days free. It covers ERG smart trainer control, a curated workout library, FTP and VO2max trends, lactate LT1/LT2 estimation and CORE heat zones. What it does not do is lay out a multi-week plan toward an event, which is TrainerRoad's core; the ENDURE coach decides one day at a time."
        },
        {
          q: "Does ENDURE build training plans like TrainerRoad?",
          a: "Not as multi-week plans. ENDURE's AI coach plans each day: it reads your recent rides, your training load and a morning check-in, then picks today's session with an easier and a harder alternative and the reason. Say in the chat how your legs feel or how much time you have and it proposes something else. You decide what to ride."
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
      ctaTitle: "Try ENDURE free for 14 days on iOS, Android & Windows",
      ctaBody: "Download ENDURE on iOS, Android or Windows, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place.",
      disclaimer: "TrainerRoad is a trademark of TrainerRoad LLC. This comparison reflects publicly available information as of October 2026 and describes ENDURE's current feature set. Check both vendors for current details.",
      backHome: "Back to Homepage"
    },
    rouvy: {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "Rouvy Alternative: ENDURE for Training Without Video Routes",
      seoDescription: "Rouvy alternative for iOS, Android and Windows: ERG control, FTP and VO2max from normal rides, lactate LT1/LT2, CORE heat zones, .ZWO export. 14 days free.",
      breadcrumb: "Rouvy alternative",
      h1: "ENDURE: the Rouvy alternative for riders who train by the numbers",
      subtitle: "Thinking about switching? Here is how the two apps differ.",
      directAnswer: "ENDURE is an alternative to Rouvy for riders who want structured training and analysis instead of filmed roads. Rouvy streams real-world video routes and matches your trainer's resistance to the gradient on screen. ENDURE spends the screen on your numbers: ERG workouts, FTP and VO2max estimated from every ride, lactate LT1/LT2 thresholds and CORE heat zones.",
      intro: "Both apps control a smart trainer over Bluetooth, both import .ZWO, .MRC and .ERG workouts, and both upload to Strava. The split is what the ride looks like. Rouvy is built around a filmed road with the trainer following the gradient. ENDURE is built around the workout and what your body did during it.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Rouvy",
      rows: [
        { feature: "Core focus", endure: "Structured training and physiological analysis", other: "Filmed real-world routes with gradient simulation" },
        { feature: "Price", endure: "Affordable subscription, monthly or annual, with a 14-day free trial", other: "Paid subscription, monthly or annual" },
        { feature: "Daily coaching", endure: "AI coach plans each day from your rides and a morning check-in: one workout, two alternatives, the reason. Change it in chat", other: "Training plans; no daily coach" },
        { feature: "Platforms", endure: "iOS, Android & Windows", other: "iOS, Android, Windows, macOS, Apple TV" },
        { feature: "Smart trainer control (ERG)", endure: "Yes, over Bluetooth with smart-smoothing", other: "Yes, plus gradient simulation on routes" },
        { feature: "Video routes", endure: "None", other: "Large library of filmed roads worldwide" },
        { feature: "Structured workouts", endure: "Curated physiological library, AI-built workouts, .ZWO/.MRC/.ERG import and export", other: "Workout library, training plans, file import" },
        { feature: "FTP & VO2max trends", endure: "Modelled continuously from your ride data, no test", other: "FTP from a test or manual entry; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones", other: "Not available" },
        { feature: "Climbing metric", endure: "VAM-based Climbing Efficiency score, indoors and outdoors", other: "Climbs on filmed routes" },
        { feature: "Racing & social", endure: "Not the focus", other: "Races, group rides, challenges" },
        { feature: "Hardware requirements", endure: "Runs on a phone, nothing to stream", other: "Streams video, so a stable connection and a screen matter" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "Strava, TrainingPeaks and others" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want the workout and your data on screen, with no road to watch",
        "want FTP and VO2max to follow your rides without a test",
        "log lactate or ride with a CORE sensor",
        "train on a phone and would rather not stream video",
        "want an affordable subscription with 14 days free before you decide"
      ],
      chooseOtherTitle: "Choose Rouvy if you…",
      chooseOther: [
        "want to ride filmed roads and feel the gradient in the trainer",
        "ride for scenery and motivation more than for intervals",
        "ride on Apple TV or a Mac"
      ],
      switchTitle: "Switching from Rouvy? Here is what you keep",
      switchBullets: [
        "<strong>Your trainer:</strong> ENDURE controls smart trainers over the Bluetooth standard FTMS, so you keep riding the same hardware.",
        "<strong>Your workouts:</strong> .ZWO, .MRC and .ERG files import directly. ENDURE also exports every workout in those formats, so a session built in ENDURE rides on Rouvy too.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, so Rouvy rides and outdoor rides count toward your FTP and VO2max trend from day one.",
        "<strong>Your hardware:</strong> ENDURE runs on the phone or tablet you already own, with no video to stream."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Yes. Ride Rouvy on days you want a road in front of you and ENDURE for interval sessions. ENDURE exports any workout as a .ZWO, .ERG or .MRC file, so a session you built in ENDURE rides on Rouvy as well, and the Strava sync brings that ride back into your FTP and VO2max trend.",
      faq: [
        {
          q: "What does ENDURE cost compared with Rouvy?",
          a: "Both are subscriptions. ENDURE Premium is billed monthly or annually through the App Store or Google Play and sits at the low end of what training apps cost. Every new account starts with 14 days free and no payment details. Rouvy charges a monthly or annual subscription for its video routes."
        },
        {
          q: "Does ENDURE have video routes like Rouvy?",
          a: "No. ENDURE shows the workout, your power, heart rate, cadence and, if you log them, lactate and core temperature. There is no video and no virtual road. That is why it runs on a phone without streaming anything."
        },
        {
          q: "Can I ride my ENDURE workouts on Rouvy?",
          a: "Yes. Every workout in ENDURE exports as a .ZWO, .ERG or .MRC file. Import the file into Rouvy and ride it there. The ride comes back to ENDURE through Strava or intervals.icu, so your FTP and VO2max trend stays complete."
        },
        {
          q: "Does ENDURE work with the same trainer as Rouvy?",
          a: "Yes. ENDURE controls smart trainers over standard Bluetooth FTMS in ERG and SIM mode and connects power meters and heart-rate monitors. The trainer you ride Rouvy on works in ENDURE without any new purchase."
        }
      ],
      ctaTitle: "Try ENDURE free for 14 days on iOS, Android & Windows",
      ctaBody: "Download ENDURE on iOS, Android or Windows, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place. The first 14 days cost nothing.",
      disclaimer: "Rouvy is a trademark of its respective owner. This comparison reflects publicly available information as of October 2026 and describes ENDURE's current feature set. Check both vendors for current details.",
      backHome: "Back to Homepage"
    },
    mywhoosh: {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "MyWhoosh Alternative: ENDURE for Training Without the Game",
      seoDescription: "MyWhoosh alternative for iOS, Android and Windows: ERG control, FTP and VO2max from your rides, lactate LT1/LT2, CORE heat zones, no virtual world. 14 days free.",
      breadcrumb: "MyWhoosh alternative",
      h1: "ENDURE: the MyWhoosh alternative for riders who train by the data",
      subtitle: "Thinking about switching? Here is how the two apps differ.",
      directAnswer: "ENDURE is an alternative to MyWhoosh for riders who want structured training and physiological analysis without a virtual world. MyWhoosh is free: virtual worlds, races, group rides and a workout library. ENDURE charges a subscription and has no world to ride through. It spends that on analysis: FTP and VO2max estimated from every ride, lactate LT1/LT2 thresholds and CORE heat zones.",
      intro: "Both apps control a smart trainer in ERG mode and both have a structured workout library. The difference is what they are for. MyWhoosh gives you a 3D world and races at no cost. ENDURE gives you a plain ride screen and the numbers behind your fitness, for a subscription.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "MyWhoosh",
      rows: [
        { feature: "Core focus", endure: "Structured training and physiological analysis", other: "Free virtual worlds, racing and workouts" },
        { feature: "Price", endure: "Subscription, monthly or annual, with a 14-day free trial", other: "Free, with optional in-app purchases" },
        { feature: "Daily coaching", endure: "AI coach plans each day from your rides and a morning check-in: one workout, two alternatives, the reason. Change it in chat", other: "Training plans and plan builder; no daily coach" },
        { feature: "Platforms", endure: "iOS, Android & Windows", other: "iOS, Android, Windows, macOS, Apple TV" },
        { feature: "Smart trainer control (ERG)", endure: "Yes, over Bluetooth with smart-smoothing", other: "Yes" },
        { feature: "Virtual world & racing", endure: "None", other: "Several worlds, races and group rides" },
        { feature: "Structured workouts", endure: "Curated physiological library, AI-built workouts, .ZWO/.MRC/.ERG import and export", other: "Large library, training plans and a plan builder" },
        { feature: "FTP & VO2max trends", endure: "Modelled continuously from your ride data, no test", other: "FTP from a test or manual entry; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones", other: "Not available" },
        { feature: "Climbing metric", endure: "VAM-based Climbing Efficiency score, indoors and outdoors", other: "Virtual climbs" },
        { feature: "Hardware requirements", endure: "Runs on a phone", other: "3D graphics, so a recent device helps" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "Strava and other uploads" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want your fitness numbers to come from the rides you already do",
        "log lactate or ride with a CORE sensor",
        "prefer a plain ride screen to an avatar on a road",
        "want indoor and outdoor rides analysed in one place",
        "are fine paying a small subscription for the analysis"
      ],
      chooseOtherTitle: "Choose MyWhoosh if you…",
      chooseOther: [
        "want a free app with races and a virtual world",
        "ride for the group rides and events",
        "want a large workout library at no cost"
      ],
      switchTitle: "Switching from MyWhoosh? Here is what you keep",
      switchBullets: [
        "<strong>Your trainer:</strong> ENDURE controls smart trainers over the Bluetooth standard FTMS, so the same hardware keeps working.",
        "<strong>Your workouts:</strong> .ZWO, .MRC and .ERG files import directly, and ENDURE exports its own workouts in the same formats.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, so earlier MyWhoosh rides count toward your FTP and VO2max trend.",
        "<strong>Your hardware:</strong> ENDURE runs on the phone or tablet you already own and draws no 3D world."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Yes, and the price makes that easy. Race and ride in MyWhoosh for free, run your interval sessions in ENDURE, and let the Strava or intervals.icu sync pull every ride into one FTP and VO2max trend.",
      faq: [
        {
          q: "Is ENDURE free like MyWhoosh?",
          a: "No. ENDURE Premium is a subscription billed monthly or annually through the App Store or Google Play. The first 14 days are free and need no payment details. MyWhoosh is free to use, with optional in-app purchases."
        },
        {
          q: "Why pay for ENDURE when MyWhoosh is free?",
          a: "For the analysis. ENDURE estimates FTP and VO2max from your normal rides so you never schedule a test, logs lactate in-ride with automatic LT1/LT2 estimation, pairs a CORE sensor natively with live heat zones, and scores climbs by VAM. MyWhoosh offers none of that. If you only want a world to ride in and a workout library, MyWhoosh is the cheaper pick."
        },
        {
          q: "Does ENDURE have a virtual world?",
          a: "No. ENDURE shows the workout and your data: power, heart rate, cadence and, if you log them, lactate and core temperature. There are no avatars and no virtual roads, which keeps it running on a phone."
        },
        {
          q: "Does ENDURE work with the same trainer as MyWhoosh?",
          a: "Yes. ENDURE controls smart trainers over standard Bluetooth FTMS in ERG and SIM mode and connects power meters and heart-rate monitors. Whatever you ride MyWhoosh on works in ENDURE too."
        }
      ],
      ctaTitle: "Try ENDURE free for 14 days on iOS, Android & Windows",
      ctaBody: "Download ENDURE on iOS, Android or Windows, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place. The first 14 days cost nothing.",
      disclaimer: "MyWhoosh is a trademark of its respective owner. This comparison reflects publicly available information as of October 2026 and describes ENDURE's current feature set. Check both vendors for current details.",
      backHome: "Back to Homepage"
    },
    'wahoo-systm': {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "Wahoo SYSTM Alternative: ENDURE, FTP Without the Test",
      seoDescription: "Wahoo SYSTM alternative for iOS, Android and Windows: FTP and VO2max from normal rides instead of a test, lactate LT1/LT2, CORE heat zones, ERG control. 14 days free.",
      breadcrumb: "Wahoo SYSTM alternative",
      h1: "ENDURE: the Wahoo SYSTM alternative that drops the fitness test",
      subtitle: "Thinking about switching? Here is how the two apps differ.",
      directAnswer: "ENDURE is an alternative to Wahoo SYSTM for riders who want their fitness numbers without a scheduled test. SYSTM builds training around the 4DP profile from its Full Frontal test and a library of video workouts, with strength, yoga and running sessions alongside. ENDURE estimates FTP and VO2max from every ride you do, adds lactate LT1/LT2 and CORE heat zones, and leaves the video out.",
      intro: "Both apps run structured workouts in ERG mode and both take training seriously. SYSTM starts from a test: Full Frontal measures four power durations and every workout is scaled to them. ENDURE starts from your rides: it reads FTP and VO2max out of what you already do and updates them as you go.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Wahoo SYSTM",
      rows: [
        { feature: "Core focus", endure: "Structured training and physiological analysis", other: "4DP-based cycling plans, video workouts and multi-sport sessions" },
        { feature: "Price", endure: "Affordable subscription, monthly or annual, with a 14-day free trial", other: "Paid subscription, monthly or annual, with a free trial" },
        { feature: "Daily coaching", endure: "AI coach plans each day from your rides and a morning check-in: one workout, two alternatives, the reason. Change it in chat", other: "Plans scaled to your 4DP profile; no daily coach" },
        { feature: "Platforms", endure: "iOS, Android & Windows", other: "iOS, Android, Windows, macOS" },
        { feature: "Smart trainer control (ERG)", endure: "Yes, over Bluetooth with smart-smoothing", other: "Yes" },
        { feature: "Fitness testing", endure: "No test. FTP and VO2max modelled from your rides", other: "Full Frontal test for the 4DP profile (5 s, 1 min, 5 min, 20 min)" },
        { feature: "Structured workouts", endure: "Curated physiological library, AI-built workouts, .ZWO/.MRC/.ERG import and export", other: "Video workouts and plans, scaled to your 4DP numbers" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones", other: "Not available" },
        { feature: "Climbing metric", endure: "VAM-based Climbing Efficiency score, indoors and outdoors", other: "Not available" },
        { feature: "Other sports", endure: "Cycling first; runs and swims sync in from Strava or intervals.icu", other: "Running, swimming, strength, yoga and mental training sessions" },
        { feature: "Hardware requirements", endure: "Runs on a phone", other: "Streams video workouts" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "Strava, TrainingPeaks and others" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "would rather not schedule a test to keep your numbers current",
        "want FTP and VO2max to update from every ride, indoors and outdoors",
        "log lactate or ride with a CORE sensor",
        "want a plain ride screen with your data instead of a video",
        "want an affordable subscription with 14 days free before you decide"
      ],
      chooseOtherTitle: "Choose Wahoo SYSTM if you…",
      chooseOther: [
        "want one test that profiles your sprint, 1-minute, 5-minute and 20-minute power",
        "like video workouts with a coach and a story on screen",
        "want strength, yoga and running sessions in the same app"
      ],
      switchTitle: "Switching from Wahoo SYSTM? Here is what you keep",
      switchBullets: [
        "<strong>Your trainer:</strong> Wahoo KICKR and other trainers speak the Bluetooth standard FTMS, and ENDURE controls them in ERG and SIM mode.",
        "<strong>Your workouts:</strong> .ZWO, .MRC and .ERG files import directly, and ENDURE exports its own workouts in the same formats.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, so SYSTM sessions and outdoor rides feed your FTP and VO2max trend from day one.",
        "<strong>Your 4DP numbers:</strong> you do not need them. ENDURE reads FTP and VO2max out of your rides, and the Potential analysis tells you whether threshold or aerobic capacity is holding your FTP back."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Yes. Some riders keep SYSTM for the video sessions and strength work and use ENDURE as the analysis home: FTP and VO2max trend across every ride, lactate thresholds and CORE heat zones. The Strava or intervals.icu sync brings SYSTM rides into ENDURE.",
      faq: [
        {
          q: "Do I need a fitness test in ENDURE?",
          a: "No. ENDURE models FTP and VO2max from the power and heart-rate data of your normal rides, indoors and outdoors, and updates them as you ride. There are no FTP tests in the workout library. SYSTM asks for the Full Frontal test to set your 4DP profile."
        },
        {
          q: "Does ENDURE have video workouts like SYSTM?",
          a: "No. ENDURE shows the workout profile and your live data: power, heart rate, cadence and, if you log them, lactate and core temperature. There is no video to stream, which is why it runs on a phone."
        },
        {
          q: "What does ENDURE cost compared with Wahoo SYSTM?",
          a: "Both are subscriptions with a free trial. ENDURE Premium is billed monthly or annually through the App Store or Google Play and sits at the low end of what training apps cost. The first 14 days need no payment details."
        },
        {
          q: "Does ENDURE work with Wahoo trainers?",
          a: "Yes. Wahoo KICKR, KICKR CORE and KICKR SNAP use the Bluetooth standard FTMS, and ENDURE controls them in ERG and SIM mode. Power meters and heart-rate monitors pair the same way."
        }
      ],
      ctaTitle: "Try ENDURE free for 14 days on iOS, Android & Windows",
      ctaBody: "Download ENDURE on iOS, Android or Windows, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place. The first 14 days cost nothing.",
      disclaimer: "Wahoo and SYSTM are trademarks of Wahoo Fitness LLC. This comparison reflects publicly available information as of October 2026 and describes ENDURE's current feature set. Check both vendors for current details.",
      backHome: "Back to Homepage"
    },
    'trainingpeaks-virtual': {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "TrainingPeaks Virtual Alternative: ENDURE Without the 3D World",
      seoDescription: "TrainingPeaks Virtual alternative for iOS, Android and Windows: ERG workouts, FTP and VO2max from your rides, lactate LT1/LT2, CORE heat zones, no 3D world. 14 days free.",
      breadcrumb: "TrainingPeaks Virtual alternative",
      h1: "ENDURE: the TrainingPeaks Virtual alternative for riders who skip the 3D world",
      subtitle: "Thinking about switching? Here is how the two apps differ.",
      directAnswer: "ENDURE is an alternative to TrainingPeaks Virtual for riders who want structured sessions and physiology without a virtual world. TrainingPeaks Virtual, formerly indieVelo, is a 3D riding platform with racing physics and a direct line to the TrainingPeaks calendar. ENDURE has no world to ride through. It runs the workout on your trainer and reads FTP, VO2max, lactate LT1/LT2 and CORE heat zones out of the ride.",
      intro: "Both apps run ERG workouts on a smart trainer. TrainingPeaks Virtual wraps them in a 3D world with drafting and racing, and pulls the day's session from a TrainingPeaks plan. ENDURE keeps the ride screen plain and puts the work into what it learns from each ride.",
      tableCaption: "Feature comparison",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainingPeaks Virtual",
      rows: [
        { feature: "Core focus", endure: "Structured training and physiological analysis", other: "3D virtual world with racing physics, tied to the TrainingPeaks calendar" },
        { feature: "Price", endure: "Affordable subscription, monthly or annual, with a 14-day free trial", other: "Included in a TrainingPeaks Premium subscription" },
        { feature: "Daily coaching", endure: "AI coach plans each day from your rides and a morning check-in: one workout, two alternatives, the reason. Change it in chat", other: "Workouts from your TrainingPeaks calendar" },
        { feature: "Platforms", endure: "iOS, Android & Windows", other: "Windows, macOS, iOS, Android, Apple TV" },
        { feature: "Smart trainer control (ERG)", endure: "Yes, over Bluetooth with smart-smoothing", other: "Yes" },
        { feature: "Virtual world & racing", endure: "None", other: "One virtual world; races with drafting, cornering and braking physics" },
        { feature: "Structured workouts", endure: "Curated physiological library, AI-built workouts, .ZWO/.MRC/.ERG import and export", other: "Workouts from your TrainingPeaks calendar and coach" },
        { feature: "FTP & VO2max trends", endure: "Modelled continuously from your ride data, no test", other: "FTP from TrainingPeaks; no VO2max trend" },
        { feature: "Lactate LT1 / LT2", endure: "In-ride logging + automatic threshold estimation", other: "Not available" },
        { feature: "CORE body temperature", endure: "Native sensor integration with live heat zones", other: "Not available" },
        { feature: "Climbing metric", endure: "VAM-based Climbing Efficiency score, indoors and outdoors", other: "Not available" },
        { feature: "Hardware requirements", endure: "Runs on a phone", other: "3D graphics; the desktop app gives the full experience" },
        { feature: "Strava / intervals.icu", endure: "Auto-upload + history sync to either", other: "TrainingPeaks; Strava via TrainingPeaks" }
      ],
      chooseEndureTitle: "Choose ENDURE if you…",
      chooseEndure: [
        "want FTP and VO2max to come from your rides without a test",
        "log lactate or ride with a CORE sensor",
        "want a plain ride screen on a phone",
        "track your training in Strava or intervals.icu rather than TrainingPeaks",
        "want an affordable subscription with 14 days free before you decide"
      ],
      chooseOtherTitle: "Choose TrainingPeaks Virtual if you…",
      chooseOther: [
        "race indoors and want physics with drafting and cornering",
        "are coached through TrainingPeaks and want the day's workout to arrive on its own",
        "already pay for TrainingPeaks Premium"
      ],
      switchTitle: "Switching from TrainingPeaks Virtual? Here is what you keep",
      switchBullets: [
        "<strong>Your trainer:</strong> ENDURE controls smart trainers over the Bluetooth standard FTMS in ERG and SIM mode, so the hardware stays.",
        "<strong>Your workouts:</strong> export a session from TrainingPeaks as a .ZWO, .MRC or .ERG file and ENDURE imports it. ENDURE exports its own workouts the same way.",
        "<strong>Your history:</strong> ENDURE syncs your Strava or intervals.icu rides on first launch, so earlier indoor and outdoor rides feed your FTP and VO2max trend from day one.",
        "<strong>Your hardware:</strong> ENDURE runs on the phone or tablet you already own. No desktop app, no 3D world to render."
      ],
      bothTitle: "Can you use both?",
      bothBody: "Yes. Race in TrainingPeaks Virtual and run interval sessions in ENDURE. If your rides land in Strava or intervals.icu, ENDURE pulls them in and every ride counts toward your FTP and VO2max trend, lactate thresholds and heat data.",
      faq: [
        {
          q: "Does ENDURE sync with TrainingPeaks?",
          a: "No. ENDURE syncs with Strava and intervals.icu. If you plan in TrainingPeaks, export the workout as a .ZWO, .MRC or .ERG file and import it into ENDURE. Rides recorded in ENDURE reach TrainingPeaks through Strava if you have that connection set up there."
        },
        {
          q: "Does ENDURE have a virtual world or racing?",
          a: "No. ENDURE shows the workout profile and your live data: power, heart rate, cadence and, if you log them, lactate and core temperature. There are no avatars, no drafting and no races."
        },
        {
          q: "What does ENDURE cost compared with TrainingPeaks Virtual?",
          a: "ENDURE Premium is a subscription billed monthly or annually through the App Store or Google Play, priced at the low end of training apps, with 14 days free and no payment details. TrainingPeaks Virtual comes with a TrainingPeaks Premium subscription."
        },
        {
          q: "Does ENDURE need a desktop app?",
          a: "No. ENDURE runs on iOS, Android and Windows, with the full feature set on a phone. There is no 3D world to render, so a phone or tablet is enough."
        }
      ],
      ctaTitle: "Try ENDURE free for 14 days on iOS, Android & Windows",
      ctaBody: "Download ENDURE on iOS, Android or Windows, connect your trainer, and see your FTP, VO2max, lactate and heat metrics in one place. The first 14 days cost nothing.",
      disclaimer: "TrainingPeaks and TrainingPeaks Virtual are trademarks of Peaksware, LLC. This comparison reflects publicly available information as of October 2026 and describes ENDURE's current feature set. Check both vendors for current details.",
      backHome: "Back to Homepage"
    }
  },
  de: {
    zwift: {
      datePublished: "2026-07-20",
      dateModified: "2026-10-18",
      seoTitle: "ENDURE als Zwift Alternative: Präzision statt virtueller Welt",
      seoDescription: "Zwift Alternative für iOS, Android und Windows: ERG-Steuerung, FTP- & VO2max-Trends, Laktat LT1/LT2, CORE Heat Zones. Zwift Click v1 läuft mit. 14 Tage gratis.",
      breadcrumb: "Zwift Alternative",
      h1: "ENDURE: die Zwift Alternative für präzises Training",
      subtitle: "Du überlegst zu wechseln? Hier der ehrliche Vergleich.",
      directAnswer: "ENDURE ist eine Alternative zu Zwift für alle, die trainieren wollen statt zu spielen. Zwift ist eine Plattform mit virtuellen Welten, gebaut für Rennen, Gruppenfahrten und Motivation durch Gameplay. ENDURE ist eine Präzisions-Trainings-App rund um strukturierte Workouts und physiologische Analyse: FTP- und VO2max-Trends, Laktat LT1/LT2 und native CORE Heat Zones. Verschiedene Werkzeuge für verschiedene Ziele.",
      intro: "Beide Apps steuern deinen Smart Trainer und zeichnen deine Fahrten auf, aber sie lösen unterschiedliche Probleme. Hier der ehrliche Vergleich, damit du das richtige Werkzeug für dein Training wählst.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Zwift",
      rows: [
        { feature: "Kernfokus", endure: "Präzises Training & physiologische Analyse", other: "Virtuelle Welten, Rennen & Social Riding" },
        { feature: "Preis", endure: "Preiswertes Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "Kostenpflichtiges Monatsabo" },
        { feature: "Tägliche Trainingsführung", endure: "KI-Coach plant jeden Tag aus deinen Fahrten und einem Morgen-Check-in: ein Workout, zwei Alternativen, die Begründung. Im Chat änderbar", other: "Trainingspläne und Workouts; kein täglicher Coach" },
        { feature: "Plattformen", endure: "iOS, Android & Windows", other: "PC, Mac, iOS, Android, Apple TV" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja, über Bluetooth mit Smart-Smoothing", other: "Ja" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verifiziert): ERG-Ziel & Widerstand vom Lenker, ohne simulierte Kassette", other: "Ja, simulierte Gänge über Zwift Cog & Click" },
        { feature: "Strukturierte Workouts", endure: "Kuratierte physiologische Bibliothek + .ZWO/.MRC/.ERG-Import", other: "Große Bibliothek + eigene Workouts" },
        { feature: "FTP- & VO2max-Trends", endure: "Kontinuierlich aus deinen Fahrtdaten modelliert", other: "FTP aus Tests/Rennen; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung (erstmals in einer Cycling-App)", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones (erstmals in einer Cycling-App)", other: "Keine native Heat-Zone-Anzeige" },
        { feature: "Kletter-Metrik", endure: "Automatischer VAM-basierter Climbing-Efficiency-Score", other: "Virtuelle Anstiege & Climb Portal" },
        { feature: "Rennen & Social", endure: "Nicht der Fokus", other: "Rennen, Gruppenfahrten, riesige Community" },
        { feature: "Hardware-Anforderungen", endure: "Läuft flüssig am Handy, kein Gaming-PC nötig", other: "Grafiklastig; profitiert von starker Hardware" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "Auto-Upload" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "strukturiertes Training und ehrliche Analyse statt eines Spiels willst",
        "physiologische Metriken willst: Laktatschwellen, VO2max-Trends, Hitzeadaption",
        "einen CORE Körpertemperatur-Sensor nutzt und native Heat Zones in der Fahrt willst",
        "ein preiswertes Abo willst und 14 Tage gratis testen, bevor du dich festlegst",
        "schon einen Zwift Click v1 besitzt (er funktioniert auch mit ENDURE, für ERG-Ziel und Widerstand)",
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
        "<strong>Deinen Trainer:</strong> ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS, du fährst also mit derselben Hardware weiter und musst nichts neu kaufen.",
        "<strong>Deinen Zwift Click:</strong> ein v1 verbindet sich wie jeder andere Sensor und ändert ERG-Ziel oder Trainer-Widerstand vom Lenker. ENDURE simuliert keine Kassette, es ist also Widerstandssteuerung statt Schaltung.",
        "<strong>Deine Workouts:</strong> .ZWO-Dateien lassen sich direkt importieren, ebenso .MRC und .ERG. Deine bestehende Einheiten-Sammlung kommt mit.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start, Indoor und Outdoor stehen ab Tag eins in einem Bild.",
        "<strong>Dein Hardware-Budget:</strong> ENDURE läuft auf dem Handy oder Tablet, das du schon hast, und braucht keinen Gaming-PC."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Klar, das machen viele. Ein typisches Setup: Zwift für Rennen und Events, ENDURE für strukturierte Trainingseinheiten und als Analyse-Zuhause für FTP, VO2max, Laktat und Heat-Metriken. Über den Strava- oder intervals.icu-Sync geht keine Fahrt verloren.",
      faq: [
        {
          q: "Was kostet ENDURE im Vergleich zu Zwift?",
          a: "Beide kosten ein Abo. ENDURE Premium wird monatlich oder jährlich über den App Store oder Google Play abgerechnet, bewusst am unteren Ende, und jedes neue Konto startet mit 14 Tagen gratis. Dafür bekommst du ERG-Steuerung für Smart Trainer, eine kuratierte Workout-Bibliothek, FTP- und VO2max-Trends, LT1/LT2-Schätzung aus Laktatwerten und CORE Heat Zones. Was du nicht bekommst, sind virtuelle Welten und Rennen, und das ist der Kern von Zwift."
        },
        {
          q: "Kann ich ENDURE gratis testen?",
          a: "Ja, 14 Tage lang mit dem vollen Premium-Funktionsumfang. Danach läuft ein monatliches oder jährliches Abo."
        },
        {
          q: "Hat ENDURE virtuelle Welten wie Zwift?",
          a: "Nein, bewusst nicht. ENDURE folgt der Philosophie Präzision statt Spielerei: strukturierte Workouts, klare Ride-Screens und tiefe Analyse statt Avatare und virtuelle Straßen."
        },
        {
          q: "Steuert ENDURE dieselben Smart Trainer wie Zwift?",
          a: "Ja. ENDURE steuert Smart Trainer über Standard-Bluetooth im ERG-Modus und verbindet Power Meter und Herzfrequenz-Sensoren, also dieselbe Hardware, die du mit Zwift nutzt. Ein Zwift Click v1 funktioniert ebenfalls: er verbindet sich wie jeder Sensor und steuert ERG-Ziel und Trainer-Widerstand vom Lenker, wobei ENDURE keine Kassette simuliert wie Zwift."
        }
      ],
      ctaTitle: "Probier ENDURE 14 Tage gratis auf iOS, Android & Windows",
      ctaBody: "Lade ENDURE für iOS, Android oder Windows, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort. Die ersten 14 Tage kosten nichts.",
      disclaimer: "Zwift ist eine Marke von Zwift, Inc. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Oktober 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE. Aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    },
    trainerroad: {
      datePublished: "2026-07-20",
      dateModified: "2026-10-18",
      seoTitle: "TrainerRoad Alternative: ENDURE mit Laktat & Heat Zones",
      seoDescription: "TrainerRoad Alternative für iOS, Android und Windows: Laktat LT1/LT2, native CORE Heat Zones, FTP- & VO2max-Trends und kuratierte Bibliothek. 14 Tage gratis.",
      breadcrumb: "TrainerRoad Alternative",
      h1: "ENDURE: die TrainerRoad Alternative für alle, die die Daten wollen",
      subtitle: "Du überlegst zu wechseln? Hier der ehrliche Vergleich.",
      directAnswer: "ENDURE ist eine Alternative zu TrainerRoad für alle, die Coaching wollen, das auf jeden Tag reagiert, und Analyse, die ihre Physiologie zeigt. TrainerRoad ist ein Abo-Dienst rund um adaptive Mehrwochenpläne Richtung Zielevent. Der KI-Coach von ENDURE plant Tag für Tag aus deinen letzten Fahrten und einem Morgen-Check-in, dazu kommen Laktat LT1/LT2, native CORE Heat Zones und FTP- und VO2max-Trends.",
      intro: "Beide Apps nehmen strukturiertes Indoor-Training ernst, virtuelle Welten gibt es auf beiden Seiten nicht. Der Unterschied ist die Philosophie: TrainerRoad schreibt dein Training vor, ENDURE misst deine Physiologie und lässt dich präzise trainieren. Hier der ehrliche Vergleich.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainerRoad",
      rows: [
        { feature: "Kernfokus", endure: "Tägliches KI-Coaching & physiologische Analyse", other: "Adaptive Mehrwochenpläne" },
        { feature: "Preis", endure: "Preiswertes Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "Kostenpflichtiges Monats-/Jahresabo" },
        { feature: "Tägliche Trainingsführung", endure: "KI-Coach plant jeden Tag aus deinen Fahrten und einem Morgen-Check-in: ein Workout, zwei Alternativen, die Begründung. Im Chat änderbar", other: "Adaptive Mehrwochenpläne; TrainNow schlägt ein Workout vor" },
        { feature: "Plattformen", endure: "iOS, Android & Windows", other: "PC, Mac, iOS, Android" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja, über Bluetooth mit Smart-Smoothing", other: "Ja" },
        { feature: "Virtual Shifting", endure: "Zwift Click (v1 verifiziert): ERG-Ziel & Widerstand vom Lenker", other: "Nicht verfügbar" },
        { feature: "Trainingspläne", endure: "Kein fester Mehrwochenplan: der Coach wählt jeden Tag, du entscheidest", other: "Adaptive Mehrwochenpläne vom Algorithmus" },
        { feature: "Workout-Import", endure: ".ZWO, .MRC und .ERG Dateien", other: "Workout Creator + TrainNow" },
        { feature: "FTP- & VO2max-Trends", endure: "Beides kontinuierlich aus Fahrtdaten modelliert", other: "AI FTP Detection; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung (erstmals in einer Cycling-App)", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones (erstmals in einer Cycling-App)", other: "Keine native Heat-Zone-Anzeige" },
        { feature: "Kletter-Metrik", endure: "Automatischer VAM-basierter Climbing-Efficiency-Score", other: "Nicht verfügbar" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "Auto-Upload" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "deine Physiologie sehen willst (Laktatschwellen, VO2max-Trend, Hitzeadaption), statt nur einem Plan zu folgen",
        "einen CORE Körpertemperatur-Sensor nutzt und native Heat Zones in der Fahrt willst",
        "einen Coach willst, der sich nach deinem heutigen Zustand richtet, statt eines Wochen im Voraus fixierten Plans",
        "ein preiswertes Abo willst und 14 Tage gratis testen, bevor du dich festlegst"
      ],
      chooseOtherTitle: "Wähle TrainerRoad, wenn du…",
      chooseOther: [
        "einen komplett vorgeschriebenen Trainingsplan Richtung Zielevent willst",
        "algorithmisch gesteuerte Progression magst",
        "gern für eine algorithmische Coaching-Schicht bezahlst"
      ],
      switchTitle: "Wechsel von TrainerRoad? Das behältst du",
      switchBullets: [
        "<strong>Deinen Trainer:</strong> ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS, du fährst also mit derselben Hardware weiter und musst nichts neu kaufen.",
        "<strong>Deine Workouts:</strong> .ZWO-, .MRC- und .ERG-Dateien lassen sich direkt importieren, deine strukturierten Einheiten kommen mit.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start und führt Indoor und Outdoor in einem Leistungsbild zusammen.",
        "<strong>Deine Struktur:</strong> die Workout-Bibliothek ist nach physiologischem Zweck kuratiert (VO2max, Schwelle, Sweet Spot), du kannst eine Woche also selbst aufbauen, ohne dass ein Algorithmus sie verplant.",
        "<strong>Dein Geld:</strong> ein Abo am unteren Ende dessen, was Trainings-Apps kosten, und 14 Gratis-Tage, um zu entscheiden, ob dir die Daten das wert sind."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Ja. Manche fahren einen TrainerRoad-Plan und nutzen ENDURE als physiologisches Dashboard: Laktattests loggen, CORE Heat Zones tracken und FTP- und VO2max-Trends über alle Fahrten hinweg verfolgen, via Strava- oder intervals.icu-Sync.",
      faq: [
        {
          q: "Was kostet ENDURE im Vergleich zu TrainerRoad?",
          a: "Beide kosten ein Abo. ENDURE Premium wird monatlich oder jährlich über den App Store oder Google Play abgerechnet und liegt bewusst am unteren Ende, neue Konten starten mit 14 Tagen gratis. Enthalten sind ERG-Steuerung für Smart Trainer, eine kuratierte Workout-Bibliothek, FTP- und VO2max-Trends, LT1/LT2-Schätzung aus Laktatwerten und CORE Heat Zones. Was ENDURE nicht macht, ist ein Mehrwochenplan Richtung Event, der Kern von TrainerRoad; der ENDURE-Coach entscheidet Tag für Tag."
        },
        {
          q: "Erstellt ENDURE Trainingspläne wie TrainerRoad?",
          a: "Nicht als Mehrwochenpläne. Der KI-Coach von ENDURE plant jeden Tag: Er liest deine letzten Fahrten, deine Trainingsbelastung und einen Morgen-Check-in und wählt die heutige Einheit, mit einer leichteren und einer härteren Alternative und der Begründung. Sag im Chat, wie sich die Beine anfühlen oder wie viel Zeit du hast, und er schlägt etwas anderes vor. Du entscheidest, was du fährst."
        },
        {
          q: "Ist ENDURE günstiger als TrainerRoad?",
          a: "Beide kosten ein Abo. ENDURE Premium wird monatlich oder jährlich über die App Stores abgerechnet und liegt am unteren Ende dessen, was Trainings-Apps kosten. Die ersten 14 Tage sind gratis, du kannst also vergleichen, bevor du zahlst."
        },
        {
          q: "Welche App ist besser für Laktat- und Hitzetraining?",
          a: "ENDURE. Es ist die erste Cycling-App mit Laktat-Eintrag während der Fahrt und automatischer LT1/LT2-Schätzung und die erste mit nativer CORE-Körpertemperatur-Integration inklusive Live Heat Zones. TrainerRoad bietet beides nativ nicht."
        }
      ],
      ctaTitle: "Probier ENDURE 14 Tage gratis auf iOS, Android & Windows",
      ctaBody: "Lade ENDURE für iOS, Android oder Windows, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort.",
      disclaimer: "TrainerRoad ist eine Marke von TrainerRoad LLC. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Oktober 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE. Aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    },
    rouvy: {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "Rouvy Alternative: ENDURE, Training ohne Videostrecken",
      seoDescription: "Rouvy Alternative für iOS, Android und Windows: ERG-Steuerung, FTP und VO2max aus normalen Fahrten, Laktat LT1/LT2, CORE Heat Zones, .ZWO-Export. 14 Tage gratis.",
      breadcrumb: "Rouvy Alternative",
      h1: "ENDURE: die Rouvy Alternative für alle, die nach Zahlen trainieren",
      subtitle: "Du überlegst zu wechseln? So unterscheiden sich die beiden Apps.",
      directAnswer: "ENDURE ist eine Alternative zu Rouvy für alle, die strukturiertes Training und Analyse wollen statt gefilmter Straßen. Rouvy streamt echte Videostrecken und passt den Widerstand deines Trainers an die Steigung im Bild an. ENDURE nutzt den Bildschirm für deine Zahlen: ERG-Workouts, FTP und VO2max aus jeder Fahrt geschätzt, Laktatschwellen LT1/LT2 und CORE Heat Zones.",
      intro: "Beide Apps steuern einen Smart Trainer über Bluetooth, beide importieren .ZWO-, .MRC- und .ERG-Workouts, beide laden zu Strava hoch. Der Unterschied ist, wie die Fahrt aussieht. Rouvy baut auf einer gefilmten Straße auf, der Trainer folgt der Steigung. ENDURE baut auf dem Workout auf und darauf, was dein Körper dabei gemacht hat.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Rouvy",
      rows: [
        { feature: "Kernfokus", endure: "Strukturiertes Training & physiologische Analyse", other: "Gefilmte reale Strecken mit Steigungssimulation" },
        { feature: "Preis", endure: "Preiswertes Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "Kostenpflichtiges Abo, monatlich oder jährlich" },
        { feature: "Tägliche Trainingsführung", endure: "KI-Coach plant jeden Tag aus deinen Fahrten und einem Morgen-Check-in: ein Workout, zwei Alternativen, die Begründung. Im Chat änderbar", other: "Trainingspläne; kein täglicher Coach" },
        { feature: "Plattformen", endure: "iOS, Android & Windows", other: "iOS, Android, Windows, macOS, Apple TV" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja, über Bluetooth mit Smart-Smoothing", other: "Ja, plus Steigungssimulation auf Strecken" },
        { feature: "Videostrecken", endure: "Keine", other: "Große Bibliothek gefilmter Straßen weltweit" },
        { feature: "Strukturierte Workouts", endure: "Kuratierte physiologische Bibliothek, KI-gebaute Workouts, .ZWO/.MRC/.ERG-Import und -Export", other: "Workout-Bibliothek, Trainingspläne, Datei-Import" },
        { feature: "FTP- & VO2max-Trends", endure: "Kontinuierlich aus deinen Fahrtdaten modelliert, kein Test", other: "FTP aus Test oder manuell; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones", other: "Nicht verfügbar" },
        { feature: "Kletter-Metrik", endure: "VAM-basierter Climbing-Efficiency-Score, drinnen und draußen", other: "Anstiege auf gefilmten Strecken" },
        { feature: "Rennen & Social", endure: "Nicht der Fokus", other: "Rennen, Gruppenfahrten, Challenges" },
        { feature: "Hardware-Anforderungen", endure: "Läuft am Handy, nichts zu streamen", other: "Streamt Video, braucht also stabile Verbindung und Bildschirm" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "Strava, TrainingPeaks und andere" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "das Workout und deine Daten am Bildschirm willst, ohne Straße zum Zuschauen",
        "FTP und VO2max ohne Test aus deinen Fahrten haben willst",
        "Laktat misst oder mit CORE-Sensor fährst",
        "am Handy trainierst und kein Video streamen willst",
        "ein preiswertes Abo willst und 14 Tage gratis testen, bevor du entscheidest"
      ],
      chooseOtherTitle: "Wähle Rouvy, wenn du…",
      chooseOther: [
        "gefilmte Straßen fahren und die Steigung im Trainer spüren willst",
        "eher für Landschaft und Motivation fährst als für Intervalle",
        "auf Apple TV oder Mac fährst"
      ],
      switchTitle: "Wechsel von Rouvy? Das behältst du",
      switchBullets: [
        "<strong>Deinen Trainer:</strong> ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS, du fährst also mit derselben Hardware weiter.",
        "<strong>Deine Workouts:</strong> .ZWO-, .MRC- und .ERG-Dateien lassen sich direkt importieren. ENDURE exportiert jedes Workout auch in diesen Formaten, eine in ENDURE gebaute Einheit läuft also auch auf Rouvy.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start. Rouvy-Fahrten und Outdoor-Fahrten zählen ab Tag eins zu deinem FTP- und VO2max-Trend.",
        "<strong>Deine Hardware:</strong> ENDURE läuft auf dem Handy oder Tablet, das du schon hast, ohne Video-Stream."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Ja. Fahr Rouvy an Tagen, an denen du eine Straße vor dir haben willst, und ENDURE für Intervalleinheiten. ENDURE exportiert jedes Workout als .ZWO-, .ERG- oder .MRC-Datei, eine in ENDURE gebaute Einheit läuft also auch auf Rouvy. Der Strava-Sync holt die Fahrt zurück in deinen FTP- und VO2max-Trend.",
      faq: [
        {
          q: "Was kostet ENDURE im Vergleich zu Rouvy?",
          a: "Beide kosten ein Abo. ENDURE Premium wird monatlich oder jährlich über den App Store oder Google Play abgerechnet und liegt am unteren Ende dessen, was Trainings-Apps kosten. Jedes neue Konto startet mit 14 Tagen gratis und ohne Zahlungsdaten. Rouvy verlangt ein Monats- oder Jahresabo für seine Videostrecken."
        },
        {
          q: "Hat ENDURE Videostrecken wie Rouvy?",
          a: "Nein. ENDURE zeigt das Workout, deine Leistung, Herzfrequenz, Trittfrequenz und, wenn du sie erfasst, Laktat und Körperkerntemperatur. Es gibt kein Video und keine virtuelle Straße. Deshalb läuft es am Handy, ohne etwas zu streamen."
        },
        {
          q: "Kann ich meine ENDURE-Workouts auf Rouvy fahren?",
          a: "Ja. Jedes Workout in ENDURE lässt sich als .ZWO-, .ERG- oder .MRC-Datei exportieren. Importier die Datei in Rouvy und fahr sie dort. Die Fahrt kommt über Strava oder intervals.icu zurück zu ENDURE, dein FTP- und VO2max-Trend bleibt also vollständig."
        },
        {
          q: "Funktioniert ENDURE mit demselben Trainer wie Rouvy?",
          a: "Ja. ENDURE steuert Smart Trainer über Standard-Bluetooth FTMS im ERG- und SIM-Modus und verbindet Powermeter und Herzfrequenz-Sensoren. Der Trainer, auf dem du Rouvy fährst, läuft in ENDURE ohne Neukauf."
        }
      ],
      ctaTitle: "Probier ENDURE 14 Tage gratis auf iOS, Android & Windows",
      ctaBody: "Lade ENDURE für iOS, Android oder Windows, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort. Die ersten 14 Tage kosten nichts.",
      disclaimer: "Rouvy ist eine Marke des jeweiligen Inhabers. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Oktober 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE. Aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    },
    mywhoosh: {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "MyWhoosh Alternative: ENDURE, Training ohne Spiel",
      seoDescription: "MyWhoosh Alternative für iOS, Android und Windows: ERG-Steuerung, FTP und VO2max aus deinen Fahrten, Laktat LT1/LT2, CORE Heat Zones, keine virtuelle Welt. 14 Tage gratis.",
      breadcrumb: "MyWhoosh Alternative",
      h1: "ENDURE: die MyWhoosh Alternative für alle, die nach Daten trainieren",
      subtitle: "Du überlegst zu wechseln? So unterscheiden sich die beiden Apps.",
      directAnswer: "ENDURE ist eine Alternative zu MyWhoosh für alle, die strukturiertes Training und physiologische Analyse ohne virtuelle Welt wollen. MyWhoosh ist gratis: virtuelle Welten, Rennen, Gruppenfahrten und eine Workout-Bibliothek. ENDURE kostet ein Abo und hat keine Welt zum Durchfahren. Dafür gibt es Analyse: FTP und VO2max aus jeder Fahrt geschätzt, Laktatschwellen LT1/LT2 und CORE Heat Zones.",
      intro: "Beide Apps steuern einen Smart Trainer im ERG-Modus, beide haben eine strukturierte Workout-Bibliothek. Der Unterschied ist, wofür sie da sind. MyWhoosh gibt dir eine 3D-Welt und Rennen, ohne Kosten. ENDURE gibt dir einen schlichten Ride-Screen und die Zahlen hinter deiner Fitness, gegen ein Abo.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "MyWhoosh",
      rows: [
        { feature: "Kernfokus", endure: "Strukturiertes Training & physiologische Analyse", other: "Kostenlose virtuelle Welten, Rennen und Workouts" },
        { feature: "Preis", endure: "Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "Gratis, mit optionalen In-App-Käufen" },
        { feature: "Tägliche Trainingsführung", endure: "KI-Coach plant jeden Tag aus deinen Fahrten und einem Morgen-Check-in: ein Workout, zwei Alternativen, die Begründung. Im Chat änderbar", other: "Trainingspläne und Plan-Builder; kein täglicher Coach" },
        { feature: "Plattformen", endure: "iOS, Android & Windows", other: "iOS, Android, Windows, macOS, Apple TV" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja, über Bluetooth mit Smart-Smoothing", other: "Ja" },
        { feature: "Virtuelle Welt & Rennen", endure: "Keine", other: "Mehrere Welten, Rennen und Gruppenfahrten" },
        { feature: "Strukturierte Workouts", endure: "Kuratierte physiologische Bibliothek, KI-gebaute Workouts, .ZWO/.MRC/.ERG-Import und -Export", other: "Große Bibliothek, Trainingspläne und Plan-Builder" },
        { feature: "FTP- & VO2max-Trends", endure: "Kontinuierlich aus deinen Fahrtdaten modelliert, kein Test", other: "FTP aus Test oder manuell; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones", other: "Nicht verfügbar" },
        { feature: "Kletter-Metrik", endure: "VAM-basierter Climbing-Efficiency-Score, drinnen und draußen", other: "Virtuelle Anstiege" },
        { feature: "Hardware-Anforderungen", endure: "Läuft am Handy", other: "3D-Grafik, ein aktuelles Gerät hilft" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "Strava und weitere Uploads" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "deine Fitnesswerte aus den Fahrten haben willst, die du ohnehin machst",
        "Laktat misst oder mit CORE-Sensor fährst",
        "einen schlichten Ride-Screen einem Avatar auf der Straße vorziehst",
        "Indoor- und Outdoor-Fahrten an einem Ort analysiert haben willst",
        "für die Analyse ein kleines Abo in Kauf nimmst"
      ],
      chooseOtherTitle: "Wähle MyWhoosh, wenn du…",
      chooseOther: [
        "eine kostenlose App mit Rennen und virtueller Welt willst",
        "wegen der Gruppenfahrten und Events fährst",
        "eine große Workout-Bibliothek ohne Kosten willst"
      ],
      switchTitle: "Wechsel von MyWhoosh? Das behältst du",
      switchBullets: [
        "<strong>Deinen Trainer:</strong> ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS, dieselbe Hardware läuft weiter.",
        "<strong>Deine Workouts:</strong> .ZWO-, .MRC- und .ERG-Dateien lassen sich direkt importieren, und ENDURE exportiert eigene Workouts in denselben Formaten.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start. Frühere MyWhoosh-Fahrten zählen zu deinem FTP- und VO2max-Trend.",
        "<strong>Deine Hardware:</strong> ENDURE läuft auf dem Handy oder Tablet, das du schon hast, und rendert keine 3D-Welt."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Ja, und der Preis macht es leicht. Fahr Rennen und Gruppenfahrten gratis in MyWhoosh, mach deine Intervalleinheiten in ENDURE, und lass den Strava- oder intervals.icu-Sync jede Fahrt in einen FTP- und VO2max-Trend ziehen.",
      faq: [
        {
          q: "Ist ENDURE gratis wie MyWhoosh?",
          a: "Nein. ENDURE Premium ist ein Abo, monatlich oder jährlich über den App Store oder Google Play abgerechnet. Die ersten 14 Tage sind gratis und brauchen keine Zahlungsdaten. MyWhoosh ist kostenlos nutzbar, mit optionalen In-App-Käufen."
        },
        {
          q: "Warum für ENDURE zahlen, wenn MyWhoosh gratis ist?",
          a: "Für die Analyse. ENDURE schätzt FTP und VO2max aus deinen normalen Fahrten, du planst also nie einen Test, erfasst Laktat während der Fahrt mit automatischer LT1/LT2-Schätzung, koppelt einen CORE-Sensor nativ mit Live Heat Zones und bewertet Anstiege nach VAM. MyWhoosh bietet nichts davon. Wenn du nur eine Welt zum Fahren und eine Workout-Bibliothek willst, ist MyWhoosh die günstigere Wahl."
        },
        {
          q: "Hat ENDURE eine virtuelle Welt?",
          a: "Nein. ENDURE zeigt das Workout und deine Daten: Leistung, Herzfrequenz, Trittfrequenz und, wenn du sie erfasst, Laktat und Körperkerntemperatur. Keine Avatare, keine virtuellen Straßen. Deshalb läuft es am Handy."
        },
        {
          q: "Funktioniert ENDURE mit demselben Trainer wie MyWhoosh?",
          a: "Ja. ENDURE steuert Smart Trainer über Standard-Bluetooth FTMS im ERG- und SIM-Modus und verbindet Powermeter und Herzfrequenz-Sensoren. Worauf du MyWhoosh fährst, läuft auch in ENDURE."
        }
      ],
      ctaTitle: "Probier ENDURE 14 Tage gratis auf iOS, Android & Windows",
      ctaBody: "Lade ENDURE für iOS, Android oder Windows, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort. Die ersten 14 Tage kosten nichts.",
      disclaimer: "MyWhoosh ist eine Marke des jeweiligen Inhabers. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Oktober 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE. Aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    },
    'wahoo-systm': {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "Wahoo SYSTM Alternative: ENDURE, FTP ohne Test",
      seoDescription: "Wahoo SYSTM Alternative für iOS, Android und Windows: FTP und VO2max aus normalen Fahrten statt aus einem Test, Laktat LT1/LT2, CORE Heat Zones, ERG-Steuerung. 14 Tage gratis.",
      breadcrumb: "Wahoo SYSTM Alternative",
      h1: "ENDURE: die Wahoo SYSTM Alternative ohne Fitnesstest",
      subtitle: "Du überlegst zu wechseln? So unterscheiden sich die beiden Apps.",
      directAnswer: "ENDURE ist eine Alternative zu Wahoo SYSTM für alle, die ihre Fitnesswerte ohne geplanten Test wollen. SYSTM baut das Training auf dem 4DP-Profil aus dem Full-Frontal-Test und einer Bibliothek von Video-Workouts auf, dazu Kraft-, Yoga- und Laufeinheiten. ENDURE schätzt FTP und VO2max aus jeder Fahrt, ergänzt Laktat LT1/LT2 und CORE Heat Zones und lässt das Video weg.",
      intro: "Beide Apps fahren strukturierte Workouts im ERG-Modus, beide nehmen Training ernst. SYSTM startet mit einem Test: Full Frontal misst vier Leistungsdauern, jedes Workout wird darauf skaliert. ENDURE startet mit deinen Fahrten: Es liest FTP und VO2max aus dem, was du ohnehin fährst, und aktualisiert sie laufend.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "Wahoo SYSTM",
      rows: [
        { feature: "Kernfokus", endure: "Strukturiertes Training & physiologische Analyse", other: "4DP-basierte Radpläne, Video-Workouts und Multisport-Einheiten" },
        { feature: "Preis", endure: "Preiswertes Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "Kostenpflichtiges Abo, monatlich oder jährlich, mit Testphase" },
        { feature: "Tägliche Trainingsführung", endure: "KI-Coach plant jeden Tag aus deinen Fahrten und einem Morgen-Check-in: ein Workout, zwei Alternativen, die Begründung. Im Chat änderbar", other: "Pläne, skaliert auf dein 4DP-Profil; kein täglicher Coach" },
        { feature: "Plattformen", endure: "iOS, Android & Windows", other: "iOS, Android, Windows, macOS" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja, über Bluetooth mit Smart-Smoothing", other: "Ja" },
        { feature: "Fitnesstest", endure: "Kein Test. FTP und VO2max aus deinen Fahrten modelliert", other: "Full-Frontal-Test für das 4DP-Profil (5 s, 1 min, 5 min, 20 min)" },
        { feature: "Strukturierte Workouts", endure: "Kuratierte physiologische Bibliothek, KI-gebaute Workouts, .ZWO/.MRC/.ERG-Import und -Export", other: "Video-Workouts und Pläne, skaliert auf deine 4DP-Werte" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones", other: "Nicht verfügbar" },
        { feature: "Kletter-Metrik", endure: "VAM-basierter Climbing-Efficiency-Score, drinnen und draußen", other: "Nicht verfügbar" },
        { feature: "Andere Sportarten", endure: "Rad zuerst; Läufe und Schwimmeinheiten kommen über Strava oder intervals.icu dazu", other: "Laufen, Schwimmen, Kraft, Yoga und mentales Training" },
        { feature: "Hardware-Anforderungen", endure: "Läuft am Handy", other: "Streamt Video-Workouts" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "Strava, TrainingPeaks und andere" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "keinen Test einplanen willst, nur um deine Werte aktuell zu halten",
        "FTP und VO2max aus jeder Fahrt aktualisiert haben willst, drinnen wie draußen",
        "Laktat misst oder mit CORE-Sensor fährst",
        "einen schlichten Ride-Screen mit deinen Daten willst statt eines Videos",
        "ein preiswertes Abo willst und 14 Tage gratis testen, bevor du entscheidest"
      ],
      chooseOtherTitle: "Wähle Wahoo SYSTM, wenn du…",
      chooseOther: [
        "einen Test willst, der Sprint, 1-Minuten-, 5-Minuten- und 20-Minuten-Leistung profiliert",
        "Video-Workouts mit Coach und Story am Bildschirm magst",
        "Kraft-, Yoga- und Laufeinheiten in derselben App willst"
      ],
      switchTitle: "Wechsel von Wahoo SYSTM? Das behältst du",
      switchBullets: [
        "<strong>Deinen Trainer:</strong> Wahoo KICKR und andere Trainer sprechen den Bluetooth-Standard FTMS, ENDURE steuert sie im ERG- und SIM-Modus.",
        "<strong>Deine Workouts:</strong> .ZWO-, .MRC- und .ERG-Dateien lassen sich direkt importieren, und ENDURE exportiert eigene Workouts in denselben Formaten.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start. SYSTM-Einheiten und Outdoor-Fahrten speisen deinen FTP- und VO2max-Trend ab Tag eins.",
        "<strong>Deine 4DP-Werte:</strong> brauchst du nicht. ENDURE liest FTP und VO2max aus deinen Fahrten, und die Potenzial-Analyse sagt dir, ob Schwelle oder aerobe Kapazität deine FTP bremst."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Ja. Manche behalten SYSTM für Video-Einheiten und Krafttraining und nutzen ENDURE als Analyse-Zuhause: FTP- und VO2max-Trend über jede Fahrt, Laktatschwellen und CORE Heat Zones. Der Strava- oder intervals.icu-Sync holt SYSTM-Fahrten nach ENDURE.",
      faq: [
        {
          q: "Brauche ich in ENDURE einen Fitnesstest?",
          a: "Nein. ENDURE modelliert FTP und VO2max aus den Leistungs- und Herzfrequenzdaten deiner normalen Fahrten, drinnen wie draußen, und aktualisiert sie laufend. In der Workout-Bibliothek gibt es keine FTP-Tests. SYSTM verlangt den Full-Frontal-Test für dein 4DP-Profil."
        },
        {
          q: "Hat ENDURE Video-Workouts wie SYSTM?",
          a: "Nein. ENDURE zeigt das Workout-Profil und deine Live-Daten: Leistung, Herzfrequenz, Trittfrequenz und, wenn du sie erfasst, Laktat und Körperkerntemperatur. Es gibt kein Video zum Streamen, deshalb läuft es am Handy."
        },
        {
          q: "Was kostet ENDURE im Vergleich zu Wahoo SYSTM?",
          a: "Beide sind Abos mit Testphase. ENDURE Premium wird monatlich oder jährlich über den App Store oder Google Play abgerechnet und liegt am unteren Ende dessen, was Trainings-Apps kosten. Die ersten 14 Tage brauchen keine Zahlungsdaten."
        },
        {
          q: "Funktioniert ENDURE mit Wahoo-Trainern?",
          a: "Ja. Wahoo KICKR, KICKR CORE und KICKR SNAP nutzen den Bluetooth-Standard FTMS, ENDURE steuert sie im ERG- und SIM-Modus. Powermeter und Herzfrequenz-Sensoren koppeln genauso."
        }
      ],
      ctaTitle: "Probier ENDURE 14 Tage gratis auf iOS, Android & Windows",
      ctaBody: "Lade ENDURE für iOS, Android oder Windows, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort. Die ersten 14 Tage kosten nichts.",
      disclaimer: "Wahoo und SYSTM sind Marken von Wahoo Fitness LLC. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Oktober 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE. Aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    },
    'trainingpeaks-virtual': {
      datePublished: "2026-10-18",
      dateModified: "2026-10-18",
      seoTitle: "TrainingPeaks Virtual Alternative: ENDURE ohne 3D-Welt",
      seoDescription: "TrainingPeaks Virtual Alternative für iOS, Android und Windows: ERG-Workouts, FTP und VO2max aus deinen Fahrten, Laktat LT1/LT2, CORE Heat Zones, keine 3D-Welt. 14 Tage gratis.",
      breadcrumb: "TrainingPeaks Virtual Alternative",
      h1: "ENDURE: die TrainingPeaks Virtual Alternative für alle, die auf die 3D-Welt verzichten",
      subtitle: "Du überlegst zu wechseln? So unterscheiden sich die beiden Apps.",
      directAnswer: "ENDURE ist eine Alternative zu TrainingPeaks Virtual für alle, die strukturierte Einheiten und Physiologie ohne virtuelle Welt wollen. TrainingPeaks Virtual, früher indieVelo, ist eine 3D-Plattform mit Rennphysik und direkter Anbindung an den TrainingPeaks-Kalender. ENDURE hat keine Welt zum Durchfahren. Es fährt das Workout auf deinem Trainer und liest FTP, VO2max, Laktat LT1/LT2 und CORE Heat Zones aus der Fahrt.",
      intro: "Beide Apps fahren ERG-Workouts auf einem Smart Trainer. TrainingPeaks Virtual verpackt sie in eine 3D-Welt mit Windschatten und Rennen und holt die Tageseinheit aus einem TrainingPeaks-Plan. ENDURE hält den Ride-Screen schlicht und steckt die Arbeit in das, was es aus jeder Fahrt lernt.",
      tableCaption: "Feature-Vergleich",
      colFeature: "Feature",
      colEndure: "ENDURE",
      colOther: "TrainingPeaks Virtual",
      rows: [
        { feature: "Kernfokus", endure: "Strukturiertes Training & physiologische Analyse", other: "3D-Welt mit Rennphysik, an den TrainingPeaks-Kalender gekoppelt" },
        { feature: "Preis", endure: "Preiswertes Abo, monatlich oder jährlich, 14 Tage gratis testen", other: "In einem TrainingPeaks-Premium-Abo enthalten" },
        { feature: "Tägliche Trainingsführung", endure: "KI-Coach plant jeden Tag aus deinen Fahrten und einem Morgen-Check-in: ein Workout, zwei Alternativen, die Begründung. Im Chat änderbar", other: "Workouts aus deinem TrainingPeaks-Kalender" },
        { feature: "Plattformen", endure: "iOS, Android & Windows", other: "Windows, macOS, iOS, Android, Apple TV" },
        { feature: "Smart-Trainer-Steuerung (ERG)", endure: "Ja, über Bluetooth mit Smart-Smoothing", other: "Ja" },
        { feature: "Virtuelle Welt & Rennen", endure: "Keine", other: "Eine virtuelle Welt; Rennen mit Windschatten-, Kurven- und Bremsphysik" },
        { feature: "Strukturierte Workouts", endure: "Kuratierte physiologische Bibliothek, KI-gebaute Workouts, .ZWO/.MRC/.ERG-Import und -Export", other: "Workouts aus deinem TrainingPeaks-Kalender und vom Coach" },
        { feature: "FTP- & VO2max-Trends", endure: "Kontinuierlich aus deinen Fahrtdaten modelliert, kein Test", other: "FTP aus TrainingPeaks; kein VO2max-Trend" },
        { feature: "Laktat LT1 / LT2", endure: "Eintrag während der Fahrt + automatische Schwellen-Schätzung", other: "Nicht verfügbar" },
        { feature: "CORE Körpertemperatur", endure: "Native Sensor-Integration mit Live Heat Zones", other: "Nicht verfügbar" },
        { feature: "Kletter-Metrik", endure: "VAM-basierter Climbing-Efficiency-Score, drinnen und draußen", other: "Nicht verfügbar" },
        { feature: "Hardware-Anforderungen", endure: "Läuft am Handy", other: "3D-Grafik; die Desktop-App bietet den vollen Umfang" },
        { feature: "Strava / intervals.icu", endure: "Auto-Upload + Verlaufs-Sync mit beiden", other: "TrainingPeaks; Strava über TrainingPeaks" }
      ],
      chooseEndureTitle: "Wähle ENDURE, wenn du…",
      chooseEndure: [
        "FTP und VO2max ohne Test aus deinen Fahrten haben willst",
        "Laktat misst oder mit CORE-Sensor fährst",
        "einen schlichten Ride-Screen am Handy willst",
        "dein Training in Strava oder intervals.icu führst statt in TrainingPeaks",
        "ein preiswertes Abo willst und 14 Tage gratis testen, bevor du entscheidest"
      ],
      chooseOtherTitle: "Wähle TrainingPeaks Virtual, wenn du…",
      chooseOther: [
        "indoor Rennen fährst und Physik mit Windschatten und Kurven willst",
        "über TrainingPeaks gecoacht wirst und die Tageseinheit von selbst ankommen soll",
        "ohnehin TrainingPeaks Premium zahlst"
      ],
      switchTitle: "Wechsel von TrainingPeaks Virtual? Das behältst du",
      switchBullets: [
        "<strong>Deinen Trainer:</strong> ENDURE steuert Smart Trainer über den Bluetooth-Standard FTMS im ERG- und SIM-Modus, die Hardware bleibt.",
        "<strong>Deine Workouts:</strong> exportier eine Einheit aus TrainingPeaks als .ZWO-, .MRC- oder .ERG-Datei, ENDURE importiert sie. Eigene Workouts exportiert ENDURE genauso.",
        "<strong>Deine Historie:</strong> ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten beim ersten Start. Frühere Indoor- und Outdoor-Fahrten speisen deinen FTP- und VO2max-Trend ab Tag eins.",
        "<strong>Deine Hardware:</strong> ENDURE läuft auf dem Handy oder Tablet, das du schon hast. Keine Desktop-App, keine 3D-Welt zum Rendern."
      ],
      bothTitle: "Kannst du beide nutzen?",
      bothBody: "Ja. Fahr Rennen in TrainingPeaks Virtual und Intervalleinheiten in ENDURE. Landen deine Fahrten in Strava oder intervals.icu, holt ENDURE sie herein, und jede Fahrt zählt zu FTP- und VO2max-Trend, Laktatschwellen und Hitzedaten.",
      faq: [
        {
          q: "Synchronisiert ENDURE mit TrainingPeaks?",
          a: "Nein. ENDURE synchronisiert mit Strava und intervals.icu. Wenn du in TrainingPeaks planst, exportier das Workout als .ZWO-, .MRC- oder .ERG-Datei und importier es in ENDURE. In ENDURE aufgezeichnete Fahrten erreichen TrainingPeaks über Strava, wenn du diese Verbindung dort eingerichtet hast."
        },
        {
          q: "Hat ENDURE eine virtuelle Welt oder Rennen?",
          a: "Nein. ENDURE zeigt das Workout-Profil und deine Live-Daten: Leistung, Herzfrequenz, Trittfrequenz und, wenn du sie erfasst, Laktat und Körperkerntemperatur. Keine Avatare, kein Windschatten, keine Rennen."
        },
        {
          q: "Was kostet ENDURE im Vergleich zu TrainingPeaks Virtual?",
          a: "ENDURE Premium ist ein Abo, monatlich oder jährlich über den App Store oder Google Play abgerechnet, am unteren Ende dessen, was Trainings-Apps kosten, mit 14 Tagen gratis und ohne Zahlungsdaten. TrainingPeaks Virtual ist Teil eines TrainingPeaks-Premium-Abos."
        },
        {
          q: "Braucht ENDURE eine Desktop-App?",
          a: "Nein. ENDURE läuft auf iOS, Android und Windows, mit vollem Funktionsumfang am Handy. Es gibt keine 3D-Welt zum Rendern, ein Handy oder Tablet reicht."
        }
      ],
      ctaTitle: "Probier ENDURE 14 Tage gratis auf iOS, Android & Windows",
      ctaBody: "Lade ENDURE für iOS, Android oder Windows, verbinde deinen Trainer und sieh FTP, VO2max, Laktat und Heat-Metriken an einem Ort. Die ersten 14 Tage kosten nichts.",
      disclaimer: "TrainingPeaks und TrainingPeaks Virtual sind Marken von Peaksware, LLC. Dieser Vergleich basiert auf öffentlich verfügbaren Informationen (Stand Oktober 2026) und beschreibt den aktuellen Funktionsumfang von ENDURE. Aktuelle Details bitte bei beiden Anbietern prüfen.",
      backHome: "Zurück zur Startseite"
    }
  }
} as const;

export function getVsContent(lang: 'en' | 'de' = 'en', key: VsKey) {
  return (vsContent[lang] || vsContent.en)[key];
}
