// Long-form feature content for /features/* pages, keyed by language then slug.
// Same convention as translations.ts: every key exists in both `en` and `de`.
//
// This copy is deliberately independent of the homepage sections in
// translations.ts. The homepage sells the feature in a few lines; these pages
// answer the questions someone types into Google, so no sentence is shared
// between the two. Otherwise the landing pages would compete with `/` for the
// same terms.
//
// Section titles are question-phrased (AEO: People-Also-Ask / snippets).

export type FeatureKey =
  | 'ai-coach'
  | 'zwift-click'
  | 'lactate-lt1-lt2'
  | 'core-heat-zones'
  | 'ftp-vo2max-tracking'
  | 'climbing-efficiency';

interface FeatureSection {
  title: string;
  body: string;
  bullets?: string[];
}

interface RelatedLink {
  /** Path without a language prefix; FeaturePage adds `/de` for German. */
  href: string;
  label: string;
}

export interface FeatureContent {
  /** ISO dates for the page schema and sitemap lastmod. */
  datePublished: string;
  dateModified: string;
  seoTitle: string;
  seoDescription: string;
  breadcrumb: string;
  h1: string;
  subtitle: string;
  directAnswer: string;
  sections: FeatureSection[];
  faq: { q: string; a: string }[];
  relatedTitle: string;
  related: RelatedLink[];
  ctaTitle: string;
  ctaBody: string;
  backHome: string;
}

export const featuresIndexMeta = {
  en: { backHome: 'Back to Homepage', relatedTitle: 'Keep reading' },
  de: { backHome: 'Zurück zur Startseite', relatedTitle: 'Weiterlesen' }
} as const;

export const featurePages: Record<'en' | 'de', Record<FeatureKey, FeatureContent>> = {
  en: {
    'ai-coach': {
      datePublished: '2026-10-18',
      dateModified: '2026-10-18',
      seoTitle: 'AI Cycling Coach: Daily Training Recommendation | ENDURE',
      seoDescription:
        'ENDURE has an AI cycling coach that plans each day from your rides and a morning check-in: one workout, two alternatives, the reason. Change it in chat. iOS, Android, Windows.',
      breadcrumb: 'AI coach',
      h1: 'An AI cycling coach that plans your day from your own rides',
      subtitle: 'Morning check-in, one recommended workout, the reason behind it. Change it in a chat.',
      directAnswer:
        'ENDURE has a built-in AI coach. Every morning it reads your recent rides, your training load and a short check-in, then puts one workout for today on your Today screen, with an easier and a harder alternative and the reason for the pick. If the day changes, you tell the coach in a chat and it proposes something else. After the ride it reviews what happened. The coach does not write a fixed multi-week plan; it decides one day at a time from your own data.',
      sections: [
        {
          title: 'What does the coach do each morning?',
          body:
            'You open the app, answer a short check-in and get a card: a briefing on where you stand and the workout for today. If you add a note, for example that you feel sick or only have 45 minutes, the coach plans around it and the Recovery dial takes it into account. One tap starts the workout and your smart trainer follows in ERG mode.',
          bullets: [
            '<strong>One pick, two alternatives:</strong> the recommended session plus an easier and a harder option, in case the pick does not match your day.',
            '<strong>With the reason:</strong> every pick says why it fits today, based on your own rides and load.',
            '<strong>From your check-in:</strong> a note about sleep, illness or available time changes what the coach proposes.'
          ]
        },
        {
          title: 'What is the recommendation based on?',
          body:
            'On the data ENDURE already has about you. The coach knows your full training history, indoors and outdoors through the Strava or intervals.icu sync, your current training load and recovery, your FTP and VO2max as modelled from your rides, and the Potential analysis that shows whether your threshold or your aerobic ceiling is holding your FTP back. That is what lets it pick a session that works on the limiter rather than a generic workout for the weekday.'
        },
        {
          title: 'Can you change the plan?',
          body:
            'Yes, in the coach chat. Say how your legs feel, how much time you have or what you would rather do, and the coach proposes a different workout. You decide what to ride. If no workout in the library matches what the coach has in mind, it builds one, and you can start it as is or adjust it first.'
        },
        {
          title: 'Does the coach build workouts?',
          body:
            'Two ways. When the plan calls for a session the library does not have, the coach builds it. And you can type a workout yourself: write "3x10min sweet spot with 5min rest" and you get a finished session with warmup and cooldown. Not quite right? Tell it what to change and it adjusts. Give it a duration and the coach fills the gap with easy riding, so a 60-minute request really lasts 60 minutes.'
        },
        {
          title: 'What happens after the ride?',
          body:
            'The coach reviews it. The Coaching Insights on the ride summary say what worked, what to fix and what to do next, in the context of your recent weeks. The ride itself feeds back into your FTP and VO2max trend, your load and the next morning’s recommendation, so the loop closes without you entering anything.'
        },
        {
          title: 'Is this a training plan?',
          body:
            'No, and that is on purpose. A multi-week plan assumes it knows how you will feel in three weeks. The ENDURE coach decides one day at a time from how you actually are, and keeps the week goal and your load balance in view while it does. Riders who want a fixed schedule toward an event will find that in TrainerRoad; riders who want a coach that reacts to today get it here.'
        },
        {
          title: 'Where is ENDURE heading?',
          body:
            'Toward the coach. ENDURE started as the training app without the game: ERG control, a curated workout library and analysis of FTP, VO2max, lactate and heat. The daily recommendation, the check-in, the chat and the Potential analysis are the newest layer on top of that, and the coming releases keep building there: training guidance that uses everything the app already knows about you. There are no plans for virtual worlds or racing. The roadmap in the app shows what is next, and the "I want this" button on each item tells us what matters to you.'
        }
      ],
      faq: [
        {
          q: 'Does ENDURE have an AI coach?',
          a: 'Yes. The coach plans each day from your recent rides, your training load and a morning check-in. It puts one workout on the Today screen with an easier and a harder alternative and the reason, and you can change the plan in a chat. After the ride it reviews what happened.'
        },
        {
          q: 'Does the coach replace a human coach?',
          a: 'No. A human coach knows your life, your goals and your season in ways an app does not. The ENDURE coach is good at the daily question, "what should I train today", and at reading your own data: load, recovery, FTP and VO2max trend, the Potential analysis. Many riders use it on their own; riders with a coach use the analysis alongside.'
        },
        {
          q: 'Does the coach count outdoor rides?',
          a: 'Yes. ENDURE syncs your Strava or intervals.icu rides, so outdoor rides count toward your load, your FTP and VO2max trend and the next recommendation. The coach sees the whole week, indoors and out.'
        },
        {
          q: 'Does ENDURE write training plans?',
          a: 'Not as fixed multi-week schedules. The coach plans one day at a time and keeps your week goal and load balance in view. You can also type a workout and have the AI build it, or import .ZWO, .MRC and .ERG files from a plan you follow elsewhere.'
        },
        {
          q: 'Is the coach part of the free trial?',
          a: 'Yes. ENDURE Premium includes the coach, and every new account gets 14 days of Premium without entering payment details.'
        }
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/features/ftp-vo2max-tracking', label: 'How ENDURE estimates FTP and VO2max without a test' },
        { href: '/vs/trainerroad', label: 'ENDURE as a TrainerRoad alternative' },
        { href: '/changelog', label: 'Changelog: what shipped in the last releases' }
      ],
      ctaTitle: 'Ask the coach what to ride today',
      ctaBody:
        'ENDURE is on iOS, Android and Windows, free for the first 14 days. Sync your rides, answer the check-in, and the first recommendation is on your Today screen.',
      backHome: 'Back to Homepage'
    },
    'zwift-click': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'Virtual Shifting Without Zwift | Zwift Click in ENDURE',
      seoDescription:
        'Virtual Shifting with your Zwift Click, no Zwift subscription: change your ERG target and trainer resistance straight from the handlebar. Verified on Click v1.',
      breadcrumb: 'Virtual Shifting',
      h1: 'Virtual Shifting with the Zwift Click, without Zwift',
      subtitle: 'Change resistance and ERG target from the bars. Verified on Click v1.',
      directAnswer:
        'Yes, your Zwift Click works outside Zwift. Pair it with ENDURE over standard Bluetooth and the buttons change your ERG target in structured workouts and trainer resistance in SIM mode, so you adjust intensity from the handlebar instead of reaching for the phone. Verified with Click v1. Note that ENDURE does not simulate a cassette: the buttons act on resistance directly.',
      sections: [
        {
          title: 'What does Virtual Shifting do in ENDURE?',
          body:
            'It puts control of your effort on the handlebar. Press up and the trainer gets harder, press down and it gets easier. It is the same gesture as shifting, applied directly to resistance or to your workout target rather than to a simulated gear ratio. Nothing moves on the bike, so there is no chain rub and no drivetrain wear, and you never have to sit up mid-interval to reach the screen.'
        },
        {
          title: 'What exactly do the buttons change?',
          body:
            'The mapping follows what you are doing at that moment, so there is nothing to configure:',
          bullets: [
            '<strong>In a structured workout:</strong> the buttons nudge your ERG target up or down in steps (useful when a block is a touch too hard on the day, or too easy).',
            '<strong>In SIM mode and free ride:</strong> the buttons step trainer resistance up and down, so you can simulate a rise or back off without stopping.',
            '<strong>What they do not do:</strong> ENDURE does not model a cassette, so there is no gear number to read and no gear ratio being calculated. The effect on your legs is the same; the mechanism is resistance, not gearing.'
          ]
        },
        {
          title: 'Can you use it without Zwift?',
          body:
            'Yes. The Click is a Bluetooth device, not a Zwift-only accessory, so any app that reads it can use it. ENDURE does: the Click appears in the normal sensor list next to your trainer, power meter and heart-rate strap, and once paired it stays paired. No Zwift account, no subscription, no Zwift app running in the background.'
        },
        {
          title: 'Which Zwift Click generations are supported?',
          body:
            'We name what we have actually tested rather than assuming the generations behave the same:',
          bullets: [
            '<strong>Click v1: verified.</strong> Pairing and handlebar control are confirmed end to end with v1 hardware.',
            '<strong>Click v2: not verified yet.</strong> We have not tested it, so we do not claim it. The trial is free, so pairing one is the fastest way to find out, and we would like to hear the result.'
          ]
        },
        {
          title: 'Why does handlebar control matter indoors?',
          body:
            'Interval work is exactly when reaching for a phone is worst: you are breathing hard, the bike is rocking, and a mistimed tap costs you the rest of the effort. Controls on the bars remove that. They also make ERG mode far more usable for riders who adjust often: a 10-watt correction in the third rep happens without breaking position.'
        },
        {
          title: 'How do you pair the Click with ENDURE?',
          body:
            'Wake the Click by pressing a button, open the sensor screen in ENDURE, and select it when it appears. Pairing is the same flow as any other Bluetooth device in the app, with no second app, no bridge and no firmware juggling. It works the same way on iOS and Android.'
        }
      ],
      faq: [
        {
          q: 'Is this the same Virtual Shifting as in Zwift?',
          a: 'Not mechanically. Zwift pairs a Click with the Zwift Cog and simulates a cassette, so you shift between calculated gear ratios. In ENDURE the Click acts directly on trainer resistance in SIM mode, or on your ERG target inside a workout. What you feel through the pedals is the same (harder, easier, from the bars), but ENDURE is not modelling gears, and there is no gear number on screen.'
        },
        {
          q: 'Does it work without a Zwift subscription?',
          a: 'Yes. The Click pairs directly with ENDURE over Bluetooth. A Zwift subscription is only needed to use Zwift itself.'
        },
        {
          q: 'Does it work with Zwift Click v2?',
          a: 'Not verified yet. Our confirmed hardware is Click v1. We have not tested a v2, so we do not claim it works. If you have one, pairing it costs nothing and we would like to know.'
        },
        {
          q: 'Do I need a specific trainer for this?',
          a: 'You need a smart trainer ENDURE can control, which means one that speaks the Bluetooth FTMS standard. That is the same requirement as ERG mode, since the buttons act on trainer resistance.'
        }
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/supported-trainers', label: 'Which smart trainers work with ENDURE' },
        { href: '/vs/zwift', label: 'ENDURE as a Zwift alternative' }
      ],
      ctaTitle: 'Put your Click to work',
      ctaBody:
        'ENDURE is on iOS, Android and Windows, free for the first 14 days. Pair your trainer, pair your Click, and start the first workout in under 30 seconds.',
      backHome: 'Back to Homepage'
    },
    'lactate-lt1-lt2': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'Lactate App for Cycling: Log Readings, Get LT1 & LT2',
      seoDescription:
        'ENDURE is the first cycling app that logs lactate readings during or after a ride and estimates LT1 and LT2, with a confidence tunnel around the curve.',
      breadcrumb: 'Lactate LT1 & LT2',
      h1: 'The lactate app that turns readings into thresholds',
      subtitle: 'Log in-ride or afterwards. LT1 and LT2 are estimated for you.',
      directAnswer:
        'ENDURE lets you enter lactate readings while you are still on the bike (or add them later from your ride history) and fits a curve through them to estimate LT1 and LT2 automatically, including a confidence tunnel that shows how well-supported the estimate is. It is the first cycling app to do this inside the ride itself.',
      sections: [
        {
          title: 'What problem does in-app lactate logging solve?',
          body:
            'A step test produces two streams of data that normally end up in different places: power and heart rate in your training app, blood values on a scrap of paper that becomes a spreadsheet. Joining them by hand is tedious enough that most riders test once, plot it, and never repeat it. ENDURE removes that friction: the reading is entered against the step you just rode, so the two streams never separate.'
        },
        {
          title: 'How do you log a lactate reading during a ride?',
          body:
            'At the end of a step, take your sample as usual and enter the value without leaving the ride screen. The app stamps it against the power you were holding, so the pairing is exact rather than reconstructed later. If you would rather concentrate on the test itself, note the values on paper and add them afterwards from the activity. The result is identical.'
        },
        {
          title: 'How does ENDURE estimate LT1 and LT2?',
          body:
            'The app fits a curve through your readings and reads the two thresholds off it: LT1 where lactate first rises meaningfully above your baseline, LT2 where the curve steepens into accumulation. Around the fit sits a confidence tunnel, which is the honest part. Three readings give a wide tunnel, eight give a narrow one, and you can see at a glance whether to trust the number or take another sample.'
        },
        {
          title: 'What can you do with LT1 and LT2 once you have them?',
          body:
            'Threshold-based zones are the backbone of polarised and pyramidal training. Volume below LT1 builds the aerobic base at low fatigue cost; controlled work at and above LT2 raises the pace you can hold. Because the thresholds are measured rather than derived from a single FTP number, riders with identical FTP get correctly different zones, which is the entire argument for testing in the first place.'
        },
        {
          title: 'Do you need lab equipment?',
          body:
            'No. A handheld lactate meter, test strips and a trainer you can hold steady steps on are enough. ERG mode makes those steps precise, which matters more for a usable curve than laboratory hardware does. The guide below walks through a full protocol.'
        }
      ],
      faq: [
        {
          q: 'Can I add lactate values after the ride?',
          a: 'Yes. Readings can be entered live during the ride or added later from your activity history, with the same result.'
        },
        {
          q: 'How many readings do I need for a usable LT1 and LT2?',
          a: 'More readings narrow the confidence tunnel around the fitted curve. A graded step test with a handful of samples across a wide enough power range gives a usable estimate; sparse readings produce a visibly wider tunnel, which is your cue that the estimate is soft.'
        },
        {
          q: 'Does ENDURE need a specific lactate meter?',
          a: 'No. You enter the value yourself, so any handheld meter works. ENDURE does not read the device directly.'
        }
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/guides/lactate-threshold-training', label: 'Guide: LT1 & LT2 explained, with a test protocol' },
        { href: '/features/ftp-vo2max-tracking', label: 'How ENDURE models FTP and VO2max' }
      ],
      ctaTitle: 'Log your first test',
      ctaBody:
        'On iOS, Android and Windows, free for the first 14 days: in-ride lactate logging, automatic LT1/LT2 estimation, and your power data in the same place.',
      backHome: 'Back to Homepage'
    },
    'core-heat-zones': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'CORE Sensor App with Live Heat Zones | ENDURE',
      seoDescription:
        'ENDURE is the first indoor cycling app with native CORE sensor integration: pair over Bluetooth, see live heat zones while riding, analyse the trace afterwards.',
      breadcrumb: 'CORE heat zones',
      h1: 'Native CORE integration with live heat zones',
      subtitle: 'Core body temperature as a training metric, not an afterthought.',
      directAnswer:
        'ENDURE pairs the CORE body temperature sensor natively over Bluetooth and shows your core temperature and current heat zone live on the ride screen. The full trace is recorded alongside power and heart rate, so a heat session can be steered while you ride and reviewed after it.',
      sections: [
        {
          title: 'What does native CORE support actually mean?',
          body:
            'It means the sensor is a first-class device in the app, not a workaround. You pair it the same way you pair a power meter, the reading appears on the ride screen, and the data lands in the same activity record as everything else. No second app running in the background, no exporting and re-importing to see what your temperature did.'
        },
        {
          title: 'Why do heat zones matter more than a raw number?',
          body:
            'A core temperature of 38.4 °C means nothing on its own unless you already know your target range. Zones answer the only question that matters mid-session: am I hot enough to trigger an adaptation, or too hot to keep riding productively? For most athletes the productive band sits close to 38.3-38.8 °C, and holding it deliberately is what separates a heat session from simply being uncomfortable.'
        },
        {
          title: 'How do you steer a heat session with live feedback?',
          body:
            'Ride an easy, steady endurance effort and use the live zone to find your range (less fan, warmer room, an extra layer if needed), then hold it. Heart rate will drift upward at the same power; that is the thermal load doing its work, not a loss of fitness. Live feedback is what keeps the session in the band instead of overshooting it.'
        },
        {
          title: 'What does the data look like after the ride?',
          body:
            'The temperature trace is stored with power and heart rate, so you can see how long the rise took, how much of the session sat inside the target band, and how the three curves moved together. Across a block of sessions that record is what tells you whether the protocol is working.'
        }
      ],
      faq: [
        {
          q: 'Which body temperature sensor does ENDURE support?',
          a: 'The CORE sensor by greenTEG, paired over Bluetooth like any other device in the app.'
        },
        {
          q: 'Do I need a second app running for CORE to work?',
          a: 'No. The integration is native, so ENDURE reads the sensor directly and records the trace in the ride itself.'
        },
        {
          q: 'Is core temperature recorded or only displayed live?',
          a: 'Both. You see the live value and zone while riding, and the full trace is stored with the activity for analysis afterwards.'
        }
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/guides/heat-training-core-sensor', label: 'Guide: heat training with the CORE sensor' },
        { href: '/vs/trainerroad', label: 'ENDURE as a TrainerRoad alternative' }
      ],
      ctaTitle: 'Train heat like power',
      ctaBody:
        'On iOS, Android and Windows, free for the first 14 days: native CORE pairing, live heat zones on the ride screen, full post-ride analysis.',
      backHome: 'Back to Homepage'
    },
    'ftp-vo2max-tracking': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'FTP & VO2max Tracking App for Cyclists | ENDURE',
      seoDescription:
        'FTP and VO2max as trends, not single tests. ENDURE models both from your power and heart-rate data, indoor and Strava- or intervals.icu-synced outdoor rides.',
      breadcrumb: 'FTP & VO2max',
      h1: 'FTP and VO2max as trends, not one-off test results',
      subtitle: 'Modelled continuously from the rides you already do.',
      directAnswer:
        'ENDURE models your FTP and VO2max from recorded power and heart-rate data across rides, so both appear as trends over weeks and months rather than as a number from a single all-out test. Indoor rides and Strava- or intervals.icu-synced outdoor rides feed the same picture.',
      sections: [
        {
          title: 'Why is a trend more useful than a test result?',
          body:
            'A ramp test measures one day: your sleep, your fuelling, your motivation and the weather all sit inside that number. A trend built from many rides averages those away and shows the direction you are actually moving. It also fails more gracefully: a bad week bends the line slightly instead of resetting your zones to something wrong.'
        },
        {
          title: 'What data does the model use?',
          body:
            'Recorded power and heart rate across your rides. That means every session contributes, including the ones you did not intend as tests, and it means the estimate keeps improving as your history grows rather than expiring after six weeks.'
        },
        {
          title: 'How do indoor and outdoor rides fit together?',
          body:
            'Strava or intervals.icu sync pulls your outdoor rides in, including history on first launch, so the trend reflects your whole training load instead of only the indoor part. For most riders that is the difference between a curve that makes sense in July and one that appears to collapse every spring.'
        },
        {
          title: 'What else does the power data tell you?',
          body:
            'Alongside the trends you get a power profile across durations and a time-in-zones breakdown per ride:',
          bullets: [
            'The power profile shows where your strengths sit (sprint, pursuit, threshold, long endurance), which is what tells you whether a training block changed the thing it was aimed at.',
            'Time in zones shows how a session was actually distributed, which is often less polarised than intended.',
            'Both sit next to your lactate thresholds and heat data, so physiology and performance are read together.'
          ]
        }
      ],
      faq: [
        {
          q: 'Do I need to do an FTP test in ENDURE?',
          a: 'No. FTP is modelled from your recorded ride data. You can still ride a test if you want the reference point, but your zones do not depend on scheduling one.'
        },
        {
          q: 'How does ENDURE estimate VO2max?',
          a: 'It models VO2max from your recorded power and heart-rate data across rides and shows it as a trend, so you see the direction of change rather than a single laboratory-style figure.'
        },
        {
          q: 'Are outdoor rides included?',
          a: 'Yes, via Strava or intervals.icu sync. That includes your existing history when you first connect, so the trend does not start from zero.'
        }
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/features/lactate-lt1-lt2', label: 'Lactate thresholds alongside your power data' },
        { href: '/guides/lactate-threshold-training', label: 'Guide: why LT1 and LT2 beat FTP alone' }
      ],
      ctaTitle: 'Start the trend',
      ctaBody:
        'On iOS, Android and Windows, free for the first 14 days: connect Strava or intervals.icu, ride, and watch FTP and VO2max develop week by week.',
      backHome: 'Back to Homepage'
    },
    'climbing-efficiency': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'Climbing Efficiency & VAM Score for Cyclists | ENDURE',
      seoDescription:
        'ENDURE detects the climbs in your outdoor rides automatically and scores how efficiently you turn watts into vertical metres, using your ascent rate (VAM).',
      breadcrumb: 'Climbing Efficiency',
      h1: 'Climbing Efficiency: a score for how well you actually climb',
      subtitle: 'Automatic climb detection, VAM-based scoring.',
      directAnswer:
        'Climbing Efficiency is an ENDURE metric that scores how effectively you convert watts into vertical metres. The app finds the climbs in your outdoor rides on its own and builds the score from your vertical ascent rate (VAM), so climbing gets its own number instead of hiding inside your average power.',
      sections: [
        {
          title: 'What is VAM and why score against it?',
          body:
            'VAM is your rate of vertical ascent, in metres per hour. It is the honest output measure on a climb: watts describe what you put in, VAM describes what actually happened to your altitude. Scoring the relationship between the two says something neither number says alone: whether the power you produced turned into height efficiently, or went into fighting the bike, the line and the gradient.'
        },
        {
          title: 'How does automatic climb detection work?',
          body:
            'You do not mark segments or set up anything. ENDURE reads the elevation profile of an outdoor ride, identifies the climbs inside it, and scores them. Over a season that turns every hilly ride into data rather than only the ones you remembered to flag.'
        },
        {
          title: 'What does the score actually tell you?',
          body:
            'It gives climbing its own trend line. A rider whose FTP has been flat for two months may still be climbing better (steadier pacing, better position, less time out of the saddle at the wrong moment), and this is the metric that shows it. It is also a fairer comparison across climbs of different lengths and gradients than raw time is.'
        },
        {
          title: 'Does this work for indoor rides too?',
          body:
            'Climbing Efficiency is built for outdoor rides, because it needs real elevation change. Your indoor sessions still feed FTP and VO2max trends, lactate thresholds and heat data. This particular metric is what your outdoor riding contributes to the picture.'
        }
      ],
      faq: [
        {
          q: 'Do I have to mark climbs myself?',
          a: 'No. ENDURE detects the climbs in your outdoor rides automatically and scores them without any setup.'
        },
        {
          q: 'Is Climbing Efficiency the same as VAM?',
          a: 'No. VAM is the raw ascent rate in metres per hour; Climbing Efficiency is a score built on it that reflects how effectively your watts became vertical metres.'
        },
        {
          q: 'Where do the rides come from?',
          a: 'Outdoor rides reach ENDURE through Strava or intervals.icu sync, including your existing history when you first connect.'
        }
      ],
      relatedTitle: 'Keep reading',
      related: [
        { href: '/features/ftp-vo2max-tracking', label: 'FTP and VO2max trends' },
        { href: '/vs/zwift', label: 'ENDURE as a Zwift alternative' }
      ],
      ctaTitle: 'Score your climbs',
      ctaBody:
        'On iOS, Android and Windows, free for the first 14 days: connect Strava or intervals.icu and let ENDURE find the climbs in the riding you already did.',
      backHome: 'Back to Homepage'
    }
  },
  de: {
    'ai-coach': {
      datePublished: '2026-10-18',
      dateModified: '2026-10-18',
      seoTitle: 'KI-Radcoach: tägliche Trainingsempfehlung | ENDURE',
      seoDescription:
        'ENDURE hat einen KI-Coach, der jeden Tag aus deinen Fahrten und einem Morgen-Check-in plant: ein Workout, zwei Alternativen, die Begründung. Im Chat änderbar. iOS, Android, Windows.',
      breadcrumb: 'KI-Coach',
      h1: 'Ein KI-Radcoach, der deinen Tag aus deinen eigenen Fahrten plant',
      subtitle: 'Morgen-Check-in, ein empfohlenes Workout, die Begründung dazu. Im Chat änderbar.',
      directAnswer:
        'ENDURE hat einen eingebauten KI-Coach. Jeden Morgen liest er deine letzten Fahrten, deine Trainingsbelastung und einen kurzen Check-in und legt ein Workout für heute auf deinen Heute-Screen, mit einer leichteren und einer härteren Alternative und der Begründung. Ändert sich der Tag, sagst du es dem Coach im Chat und er schlägt etwas anderes vor. Nach der Fahrt wertet er aus, was passiert ist. Der Coach schreibt keinen festen Mehrwochenplan; er entscheidet Tag für Tag aus deinen eigenen Daten.',
      sections: [
        {
          title: 'Was macht der Coach jeden Morgen?',
          body:
            'Du öffnest die App, beantwortest einen kurzen Check-in und bekommst eine Karte: eine Einschätzung, wo du stehst, und das Workout für heute. Schreibst du eine Notiz dazu, etwa dass du krank bist oder nur 45 Minuten Zeit hast, plant der Coach danach und der Erholungs-Dial berücksichtigt sie. Ein Tipp startet das Workout, dein Smart Trainer folgt im ERG-Modus.',
          bullets: [
            '<strong>Eine Empfehlung, zwei Alternativen:</strong> die empfohlene Einheit plus eine leichtere und eine härtere Option, falls die Empfehlung nicht zu deinem Tag passt.',
            '<strong>Mit Begründung:</strong> zu jeder Empfehlung steht, warum sie heute passt, abgeleitet aus deinen eigenen Fahrten und deiner Belastung.',
            '<strong>Aus deinem Check-in:</strong> eine Notiz zu Schlaf, Krankheit oder verfügbarer Zeit ändert, was der Coach vorschlägt.'
          ]
        },
        {
          title: 'Worauf basiert die Empfehlung?',
          body:
            'Auf den Daten, die ENDURE schon über dich hat. Der Coach kennt deine gesamte Trainingshistorie, drinnen wie draußen über den Strava- oder intervals.icu-Sync, deine aktuelle Belastung und Erholung, deine aus Fahrten modellierte FTP und VO2max und die Potenzial-Analyse, die zeigt, ob deine Schwelle oder deine aerobe Ausdauer die FTP bremst. Deshalb kann er eine Einheit wählen, die am Limiter arbeitet, statt eines Standard-Workouts für den Wochentag.'
        },
        {
          title: 'Kannst du den Plan ändern?',
          body:
            'Ja, im Coach-Chat. Sag, wie sich die Beine anfühlen, wie viel Zeit du hast oder was du lieber machen würdest, und der Coach schlägt ein anderes Workout vor. Du entscheidest, was du fährst. Passt kein Workout aus der Bibliothek zu dem, was der Coach vorhat, baut er eines, und du startest es so oder passt es vorher an.'
        },
        {
          title: 'Baut der Coach Workouts?',
          body:
            'Auf zwei Wegen. Braucht der Plan eine Einheit, die die Bibliothek nicht hat, baut der Coach sie. Und du kannst ein Workout selbst eintippen: schreib "3x10min Sweetspot mit 5min Pause" und bekommst eine fertige Einheit mit Warmup und Cooldown. Passt es nicht ganz? Sag, was anders sein soll, und es wird angepasst. Gibst du eine Dauer an, füllt der Coach die Lücke mit lockerem Fahren, 60 Minuten heißen dann wirklich 60 Minuten.'
        },
        {
          title: 'Was passiert nach der Fahrt?',
          body:
            'Der Coach wertet sie aus. Die Coaching Insights in der Zusammenfassung sagen, was funktioniert hat, was fehlt und was als Nächstes kommt, im Kontext deiner letzten Wochen. Die Fahrt selbst fließt in deinen FTP- und VO2max-Trend, deine Belastung und die Empfehlung am nächsten Morgen, der Kreis schließt sich also, ohne dass du etwas eingibst.'
        },
        {
          title: 'Ist das ein Trainingsplan?',
          body:
            'Nein, und das ist Absicht. Ein Mehrwochenplan tut so, als wüsste er, wie du dich in drei Wochen fühlst. Der ENDURE-Coach entscheidet Tag für Tag danach, wie du tatsächlich dastehst, und behält dabei Wochenziel und Belastungsbalance im Blick. Wer einen festen Fahrplan Richtung Event will, findet den bei TrainerRoad; wer einen Coach will, der auf heute reagiert, bekommt ihn hier.'
        },
        {
          title: 'Wohin entwickelt sich ENDURE?',
          body:
            'Zum Coach. ENDURE hat als Trainings-App ohne Spiel angefangen: ERG-Steuerung, eine kuratierte Workout-Bibliothek und ehrliche Analyse von FTP, VO2max, Laktat und Hitze. Die Tagesempfehlung, der Check-in, der Chat und die Potenzial-Analyse sind die neueste Schicht darauf, und die kommenden Releases bauen genau dort weiter: Trainingsführung, die alles nutzt, was die App schon über dich weiß. Virtuelle Welten oder Rennen sind nicht geplant. Die Roadmap in der App zeigt, was als Nächstes kommt, und mit "Will ich haben" sagst du uns, was dir wichtig ist.'
        }
      ],
      faq: [
        {
          q: 'Hat ENDURE einen KI-Coach?',
          a: 'Ja. Der Coach plant jeden Tag aus deinen letzten Fahrten, deiner Trainingsbelastung und einem Morgen-Check-in. Er legt ein Workout auf den Heute-Screen, mit einer leichteren und einer härteren Alternative und der Begründung, und du kannst den Plan im Chat ändern. Nach der Fahrt wertet er aus, was passiert ist.'
        },
        {
          q: 'Ersetzt der Coach einen menschlichen Trainer?',
          a: 'Nein. Ein menschlicher Trainer kennt dein Leben, deine Ziele und deine Saison auf eine Art, die eine App nicht kennt. Der ENDURE-Coach ist gut in der täglichen Frage "Was soll ich heute trainieren?" und im Lesen deiner eigenen Daten: Belastung, Erholung, FTP- und VO2max-Trend, Potenzial-Analyse. Viele fahren damit allein; wer einen Trainer hat, nutzt die Analyse daneben.'
        },
        {
          q: 'Zählt der Coach Outdoor-Fahrten mit?',
          a: 'Ja. ENDURE synchronisiert deine Strava- oder intervals.icu-Fahrten, Outdoor-Fahrten zählen also zu deiner Belastung, deinem FTP- und VO2max-Trend und der nächsten Empfehlung. Der Coach sieht die ganze Woche, drinnen und draußen.'
        },
        {
          q: 'Schreibt ENDURE Trainingspläne?',
          a: 'Nicht als feste Mehrwochenpläne. Der Coach plant Tag für Tag und behält Wochenziel und Belastungsbalance im Blick. Du kannst außerdem ein Workout eintippen und von der KI bauen lassen oder .ZWO-, .MRC- und .ERG-Dateien aus einem Plan importieren, dem du woanders folgst.'
        },
        {
          q: 'Ist der Coach Teil der Gratis-Testphase?',
          a: 'Ja. ENDURE Premium enthält den Coach, und jedes neue Konto bekommt 14 Tage Premium ohne Zahlungsdaten.'
        }
      ],
      relatedTitle: 'Weiterlesen',
      related: [
        { href: '/features/ftp-vo2max-tracking', label: 'Wie ENDURE FTP und VO2max ohne Test schätzt' },
        { href: '/vs/trainerroad', label: 'ENDURE als TrainerRoad Alternative' },
        { href: '/changelog', label: 'Changelog: was in den letzten Releases kam' }
      ],
      ctaTitle: 'Frag den Coach, was du heute fährst',
      ctaBody:
        'ENDURE gibt es für iOS, Android und Windows, die ersten 14 Tage gratis. Fahrten synchronisieren, Check-in beantworten, und die erste Empfehlung liegt auf deinem Heute-Screen.',
      backHome: 'Zurück zur Startseite'
    },
    'zwift-click': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'Virtual Shifting ohne Zwift | Zwift Click in ENDURE',
      seoDescription:
        'Virtual Shifting mit deinem Zwift Click, ohne Zwift-Abo: ERG-Ziel und Trainer-Widerstand direkt vom Lenker ändern. Mit Click v1 verifiziert.',
      breadcrumb: 'Virtual Shifting',
      h1: 'Virtual Shifting mit dem Zwift Click, ohne Zwift',
      subtitle: 'Widerstand und ERG-Ziel vom Lenker ändern. Mit Click v1 verifiziert.',
      directAnswer:
        'Ja, dein Zwift Click funktioniert auch außerhalb von Zwift. Du verbindest ihn per Standard-Bluetooth mit ENDURE, und die Tasten ändern dein ERG-Ziel im strukturierten Workout sowie den Trainer-Widerstand im SIM-Modus. Du regelst die Intensität also am Lenker statt am Handy. Mit Click v1 verifiziert. Wichtig: ENDURE simuliert keine Kassette, die Tasten wirken direkt auf den Widerstand.',
      sections: [
        {
          title: 'Was macht Virtual Shifting in ENDURE?',
          body:
            'Es legt die Kontrolle über deine Belastung an den Lenker. Hochdrücken macht den Trainer schwerer, runterdrücken leichter. Es ist dieselbe Handbewegung wie beim Schalten, nur wirkt sie direkt auf den Widerstand oder auf dein Workout-Ziel und nicht auf ein simuliertes Übersetzungsverhältnis. Am Rad bewegt sich nichts, also kein Kettenschleifen und kein Antriebsverschleiß, und du musst mitten im Intervall nie aufrichten, um an den Screen zu kommen.'
        },
        {
          title: 'Was genau ändern die Tasten?',
          body:
            'Die Belegung richtet sich danach, was du gerade fährst. Einstellen musst du nichts:',
          bullets: [
            '<strong>Im strukturierten Workout:</strong> die Tasten heben oder senken dein ERG-Ziel in Schritten (praktisch, wenn ein Block an diesem Tag einen Hauch zu hart ist oder zu leicht).',
            '<strong>Im SIM-Modus und Free Ride:</strong> die Tasten regeln den Trainer-Widerstand rauf und runter, du kannst also einen Anstieg simulieren oder zurücknehmen, ohne anzuhalten.',
            '<strong>Was sie nicht tun:</strong> ENDURE modelliert keine Kassette, es gibt also keine Gangnummer zu lesen und kein berechnetes Übersetzungsverhältnis. Die Wirkung auf die Beine ist dieselbe; der Mechanismus ist Widerstand, nicht Schaltung.'
          ]
        },
        {
          title: 'Funktioniert es ohne Zwift?',
          body:
            'Ja. Der Click ist ein Bluetooth-Gerät und kein Zwift-exklusives Zubehör. Jede App, die ihn ausliest, kann ihn nutzen. ENDURE tut es: der Click erscheint in der normalen Sensorliste neben Trainer, Powermeter und Herzfrequenzgurt, und einmal gekoppelt bleibt er gekoppelt. Kein Zwift-Konto, kein Abo, keine im Hintergrund laufende Zwift-App.'
        },
        {
          title: 'Welche Zwift-Click-Generationen sind unterstützt?',
          body:
            'Wir nennen, was wir tatsächlich getestet haben, statt anzunehmen, dass sich die Generationen gleich verhalten:',
          bullets: [
            '<strong>Click v1: verifiziert.</strong> Pairing und Lenkersteuerung sind mit v1-Hardware durchgehend bestätigt.',
            '<strong>Click v2: noch nicht verifiziert.</strong> Wir haben ihn nicht getestet, also behaupten wir es nicht. Der Test ist gratis, Koppeln ist der schnellste Weg zur Antwort, und wir hören das Ergebnis gern.'
          ]
        },
        {
          title: 'Warum ist Lenkersteuerung indoor so wichtig?',
          body:
            'Intervalle sind der Moment, in dem der Griff zum Handy am meisten stört: du atmest schwer, das Rad wippt, und ein verrutschter Tap kostet dich den Rest der Belastung. Bedienung am Lenker nimmt das raus. Sie macht den ERG-Modus außerdem für alle brauchbarer, die häufig nachjustieren: 10 Watt weniger in der dritten Wiederholung, ohne die Position zu verlassen.'
        },
        {
          title: 'Wie koppelst du den Click mit ENDURE?',
          body:
            'Click per Tastendruck aufwecken, in ENDURE den Sensor-Screen öffnen und ihn auswählen, sobald er auftaucht. Das Pairing läuft wie bei jedem anderen Bluetooth-Gerät in der App: keine zweite App, keine Bridge, kein Firmware-Gebastel. Auf iOS und Android identisch.'
        }
      ],
      faq: [
        {
          q: 'Ist das dasselbe Virtual Shifting wie in Zwift?',
          a: 'Mechanisch nicht. Zwift kombiniert den Click mit dem Zwift Cog und simuliert eine Kassette, du schaltest also zwischen berechneten Übersetzungen. In ENDURE wirkt der Click direkt auf den Trainer-Widerstand im SIM-Modus oder auf dein ERG-Ziel im Workout. Was du in den Pedalen spürst, ist dasselbe (schwerer, leichter, vom Lenker), aber ENDURE modelliert keine Gänge, und es gibt keine Gangnummer am Screen.'
        },
        {
          q: 'Funktioniert es ohne Zwift-Abo?',
          a: 'Ja. Der Click verbindet sich direkt per Bluetooth mit ENDURE. Ein Zwift-Abo brauchst du nur für Zwift selbst.'
        },
        {
          q: 'Funktioniert es mit dem Zwift Click v2?',
          a: 'Noch nicht verifiziert. Unsere bestätigte Hardware ist Click v1. Einen v2 haben wir nicht getestet, also behaupten wir nicht, dass er funktioniert. Wenn du einen hast: Koppeln kostet nichts, und wir würden es gern wissen.'
        },
        {
          q: 'Brauche ich dafür einen bestimmten Trainer?',
          a: 'Du brauchst einen Smart Trainer, den ENDURE steuern kann, also einen, der den Bluetooth-Standard FTMS spricht. Dieselbe Voraussetzung wie beim ERG-Modus, denn die Tasten wirken auf den Trainer-Widerstand.'
        }
      ],
      relatedTitle: 'Weiterlesen',
      related: [
        { href: '/supported-trainers', label: 'Welche Smart Trainer mit ENDURE funktionieren' },
        { href: '/vs/zwift', label: 'ENDURE als Zwift Alternative' }
      ],
      ctaTitle: 'Setz deinen Click ein',
      ctaBody:
        'ENDURE gibt es für iOS, Android und Windows, die ersten 14 Tage gratis. Trainer verbinden, Click verbinden, erstes Workout in unter 30 Sekunden starten.',
      backHome: 'Zurück zur Startseite'
    },
    'lactate-lt1-lt2': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'Laktat-App für Radsportler: Werte eintragen, LT1 & LT2',
      seoDescription:
        'ENDURE ist die erste Cycling-App, die Laktatwerte während oder nach der Fahrt aufnimmt und LT1 und LT2 automatisch schätzt, mit Konfidenztunnel um die Kurve.',
      breadcrumb: 'Laktat LT1 & LT2',
      h1: 'Die Laktat-App, die aus Werten Schwellen macht',
      subtitle: 'Eintrag während oder nach der Fahrt. LT1 und LT2 kommen automatisch.',
      directAnswer:
        'In ENDURE trägst du Laktatwerte ein, während du noch auf dem Rad sitzt, oder ergänzt sie später aus der Fahrthistorie. Die App fittet eine Kurve durch deine Werte und schätzt LT1 und LT2 automatisch, inklusive Konfidenztunnel, der zeigt, wie belastbar die Schätzung ist. Als erste Cycling-App direkt in der Fahrt.',
      sections: [
        {
          title: 'Welches Problem löst der Laktat-Eintrag in der App?',
          body:
            'Ein Stufentest produziert zwei Datenströme, die normalerweise an verschiedenen Orten landen: Watt und Herzfrequenz in der Trainings-App, Blutwerte auf einem Zettel, aus dem eine Tabelle wird. Beides von Hand zusammenzuführen ist mühsam genug, dass die meisten einmal testen, einmal plotten und es dann nie wiederholen. ENDURE nimmt diese Hürde raus: Der Wert wird gegen die Stufe eingetragen, die du gerade gefahren bist, und damit trennen sich die beiden Ströme nie.'
        },
        {
          title: 'Wie trägst du einen Laktatwert während der Fahrt ein?',
          body:
            'Am Ende einer Stufe nimmst du wie gewohnt deine Probe und trägst den Wert ein, ohne den Ride-Screen zu verlassen. Die App stempelt ihn auf die Leistung, die du gerade gehalten hast. Die Zuordnung ist also exakt und nicht später rekonstruiert. Wenn du dich lieber ganz auf den Test konzentrierst, notierst du die Werte auf Papier und ergänzt sie danach in der Aktivität; das Ergebnis ist dasselbe.'
        },
        {
          title: 'Wie schätzt ENDURE LT1 und LT2?',
          body:
            'Die App fittet eine Kurve durch deine Werte und liest beide Schwellen daran ab: LT1 dort, wo Laktat erstmals deutlich über dein Grundniveau steigt, LT2 dort, wo die Kurve in die Akkumulation kippt. Um den Fit liegt ein Konfidenztunnel, und das ist der ehrliche Teil: Drei Werte ergeben einen weiten Tunnel, acht einen schmalen. Du siehst auf einen Blick, ob du der Zahl trauen kannst oder noch eine Probe brauchst.'
        },
        {
          title: 'Was machst du mit LT1 und LT2, wenn du sie hast?',
          body:
            'Schwellenbasierte Zonen sind das Rückgrat polarisierter und pyramidaler Trainingsmodelle. Volumen unter LT1 baut die aerobe Basis bei niedrigen Ermüdungskosten; kontrollierte Arbeit an und über LT2 hebt das Tempo, das du halten kannst. Weil die Schwellen gemessen und nicht aus einer einzelnen FTP-Zahl abgeleitet sind, bekommen zwei Fahrer mit identischer FTP zu Recht unterschiedliche Zonen. Genau das ist das Argument fürs Testen.'
        },
        {
          title: 'Brauchst du Laborausstattung?',
          body:
            'Nein. Ein Handmessgerät, Teststreifen und ein Trainer, auf dem du saubere Stufen halten kannst, reichen. Der ERG-Modus macht die Stufen präzise, und das zählt für eine brauchbare Kurve mehr als Laborhardware. Der Guide unten geht ein komplettes Protokoll durch.'
        }
      ],
      faq: [
        {
          q: 'Kann ich Laktatwerte nach der Fahrt ergänzen?',
          a: 'Ja. Werte lassen sich live während der Fahrt eintragen oder später aus der Aktivitätshistorie ergänzen, mit demselben Ergebnis.'
        },
        {
          q: 'Wie viele Werte brauche ich für brauchbare LT1 und LT2?',
          a: 'Mehr Werte verengen den Konfidenztunnel um die gefittete Kurve. Ein Stufentest mit einer Handvoll Proben über einen ausreichend breiten Leistungsbereich ergibt eine brauchbare Schätzung; wenige Werte erzeugen einen sichtbar weiteren Tunnel. Das ist dein Hinweis, dass die Schätzung noch weich ist.'
        },
        {
          q: 'Braucht ENDURE ein bestimmtes Laktatmessgerät?',
          a: 'Nein. Du trägst den Wert selbst ein, also funktioniert jedes Handmessgerät. ENDURE liest das Gerät nicht direkt aus.'
        }
      ],
      relatedTitle: 'Weiterlesen',
      related: [
        { href: '/guides/lactate-threshold-training', label: 'Guide: LT1 & LT2 erklärt, mit Testprotokoll' },
        { href: '/features/ftp-vo2max-tracking', label: 'Wie ENDURE FTP und VO2max modelliert' }
      ],
      ctaTitle: 'Logge deinen ersten Test',
      ctaBody:
        'Für iOS, Android und Windows, die ersten 14 Tage gratis: Laktat-Eintrag während der Fahrt, automatische LT1/LT2-Schätzung, Leistungsdaten am selben Ort.',
      backHome: 'Zurück zur Startseite'
    },
    'core-heat-zones': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'CORE-Sensor App mit Live Heat Zones | ENDURE',
      seoDescription:
        'ENDURE ist die erste Indoor-Cycling-App mit nativer CORE-Sensor-Integration: per Bluetooth koppeln, Live Heat Zones beim Fahren sehen, Verlauf danach auswerten.',
      breadcrumb: 'CORE Heat Zones',
      h1: 'Native CORE-Integration mit Live Heat Zones',
      subtitle: 'Körperkerntemperatur als Trainingsmetrik, nicht als Nebensache.',
      directAnswer:
        'ENDURE koppelt den CORE Körpertemperatur-Sensor nativ per Bluetooth und zeigt Kerntemperatur und aktuelle Heat Zone live am Ride-Screen. Der komplette Verlauf wird neben Watt und Herzfrequenz aufgezeichnet. Eine Hitzeeinheit lässt sich also während der Fahrt steuern und danach auswerten.',
      sections: [
        {
          title: 'Was heißt native CORE-Unterstützung konkret?',
          body:
            'Der Sensor ist ein vollwertiges Gerät in der App, kein Workaround. Du koppelst ihn wie einen Powermeter, der Wert erscheint am Ride-Screen, und die Daten landen im selben Aktivitätsdatensatz wie alles andere. Keine zweite App im Hintergrund, kein Export und Re-Import, um zu sehen, was deine Temperatur gemacht hat.'
        },
        {
          title: 'Warum sind Heat Zones wichtiger als die rohe Zahl?',
          body:
            'Eine Kerntemperatur von 38,4 °C sagt für sich genommen nichts, solange du deinen Zielbereich nicht im Kopf hast. Zonen beantworten die einzige Frage, die mitten in der Einheit zählt: Bin ich heiß genug für einen Anpassungsreiz oder zu heiß, um produktiv weiterzufahren? Für die meisten Athleten liegt das produktive Band nahe 38,3-38,8 °C, und es bewusst zu halten unterscheidet eine Hitzeeinheit davon, einfach nur zu leiden.'
        },
        {
          title: 'Wie steuerst du eine Hitzeeinheit mit Live-Feedback?',
          body:
            'Fahre locker und gleichmäßig im Grundlagenbereich und nutze die Live-Zone, um deinen Bereich zu finden (weniger Ventilator, wärmerer Raum, bei Bedarf eine Schicht mehr), und halte ihn dann. Die Herzfrequenz driftet bei gleicher Leistung nach oben; das ist die thermische Last bei der Arbeit, kein Fitnessverlust. Live-Feedback ist das, was die Einheit im Band hält statt darüber hinauszuschießen.'
        },
        {
          title: 'Wie sehen die Daten nach der Fahrt aus?',
          body:
            'Der Temperaturverlauf liegt neben Watt und Herzfrequenz. Du siehst, wie lange der Anstieg gebraucht hat, welcher Anteil der Einheit im Zielband lag und wie sich die drei Kurven zusammen bewegt haben. Über einen Block von Einheiten hinweg ist genau diese Aufzeichnung das, was zeigt, ob das Protokoll wirkt.'
        }
      ],
      faq: [
        {
          q: 'Welchen Körpertemperatur-Sensor unterstützt ENDURE?',
          a: 'Den CORE-Sensor von greenTEG, gekoppelt per Bluetooth wie jedes andere Gerät in der App.'
        },
        {
          q: 'Muss für CORE eine zweite App laufen?',
          a: 'Nein. Die Integration ist nativ: ENDURE liest den Sensor direkt und zeichnet den Verlauf in der Fahrt selbst auf.'
        },
        {
          q: 'Wird die Kerntemperatur aufgezeichnet oder nur live angezeigt?',
          a: 'Beides. Du siehst Wert und Zone live während der Fahrt, und der komplette Verlauf wird mit der Aktivität gespeichert.'
        }
      ],
      relatedTitle: 'Weiterlesen',
      related: [
        { href: '/guides/heat-training-core-sensor', label: 'Guide: Hitzetraining mit dem CORE-Sensor' },
        { href: '/vs/trainerroad', label: 'ENDURE als TrainerRoad Alternative' }
      ],
      ctaTitle: 'Trainiere Hitze wie Watt',
      ctaBody:
        'Für iOS, Android und Windows, die ersten 14 Tage gratis: natives CORE-Pairing, Live Heat Zones am Ride-Screen, volle Analyse nach der Fahrt.',
      backHome: 'Zurück zur Startseite'
    },
    'ftp-vo2max-tracking': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'FTP- & VO2max-Tracking App für Radsportler | ENDURE',
      seoDescription:
        'FTP und VO2max als Trend statt Einzeltest. ENDURE modelliert beides aus Power- und Herzfrequenzdaten: indoor und Strava- oder intervals.icu-Outdoor-Fahrten.',
      breadcrumb: 'FTP & VO2max',
      h1: 'FTP und VO2max als Trend, nicht als einmaliges Testergebnis',
      subtitle: 'Kontinuierlich modelliert aus den Fahrten, die du ohnehin machst.',
      directAnswer:
        'ENDURE modelliert FTP und VO2max aus deinen aufgezeichneten Power- und Herzfrequenzdaten über mehrere Fahrten. Beides erscheint dadurch als Trend über Wochen und Monate statt als Zahl aus einem einzelnen Alles-oder-nichts-Test. Indoor-Fahrten und per Strava oder intervals.icu synchronisierte Outdoor-Fahrten füttern dasselbe Bild.',
      sections: [
        {
          title: 'Warum ist ein Trend nützlicher als ein Testergebnis?',
          body:
            'Ein Rampentest misst einen Tag: Schlaf, Verpflegung, Motivation und Wetter stecken alle in dieser Zahl. Ein Trend aus vielen Fahrten mittelt das heraus und zeigt die Richtung, in die du tatsächlich gehst. Er scheitert außerdem eleganter: Eine schlechte Woche biegt die Linie leicht, statt deine Zonen auf einen falschen Wert zurückzusetzen.'
        },
        {
          title: 'Welche Daten nutzt das Modell?',
          body:
            'Aufgezeichnete Leistung und Herzfrequenz über deine Fahrten hinweg. Das heißt: jede Einheit trägt bei, auch die, die du nicht als Test gedacht hast. Außerdem wird die Schätzung mit wachsender Historie besser, statt nach sechs Wochen abzulaufen.'
        },
        {
          title: 'Wie passen Indoor- und Outdoor-Fahrten zusammen?',
          body:
            'Der Strava- oder intervals.icu-Sync holt deine Outdoor-Fahrten herein, beim ersten Start inklusive Historie. Der Trend spiegelt damit deine ganze Trainingslast und nicht nur den Indoor-Anteil. Für die meisten ist das der Unterschied zwischen einer Kurve, die im Juli Sinn ergibt, und einer, die jedes Frühjahr scheinbar zusammenbricht.'
        },
        {
          title: 'Was sagen die Leistungsdaten noch?',
          body:
            'Neben den Trends bekommst du ein Power Profile über verschiedene Dauern und eine Zeit-in-Zonen-Auswertung pro Fahrt:',
          bullets: [
            'Das Power Profile zeigt, wo deine Stärken liegen (Sprint, Verfolgung, Schwelle, lange Ausdauer), und damit, ob ein Trainingsblock das verändert hat, worauf er gezielt war.',
            'Zeit in Zonen zeigt, wie eine Einheit tatsächlich verteilt war, und das ist häufig weniger polarisiert als geplant.',
            'Beides steht neben deinen Laktatschwellen und Heat-Daten, Physiologie und Leistung werden also zusammen gelesen.'
          ]
        }
      ],
      faq: [
        {
          q: 'Muss ich in ENDURE einen FTP-Test fahren?',
          a: 'Nein. FTP wird aus deinen aufgezeichneten Fahrtdaten modelliert. Du kannst einen Test fahren, wenn du den Referenzpunkt willst. Deine Zonen hängen aber nicht davon ab.'
        },
        {
          q: 'Wie schätzt ENDURE VO2max?',
          a: 'Aus deinen aufgezeichneten Power- und Herzfrequenzdaten über mehrere Fahrten, dargestellt als Trend. Du siehst die Richtung der Veränderung statt einer einzelnen laborähnlichen Zahl.'
        },
        {
          q: 'Sind Outdoor-Fahrten enthalten?',
          a: 'Ja, über den Strava- oder intervals.icu-Sync, beim ersten Verbinden inklusive deiner bestehenden Historie, damit der Trend nicht bei null anfängt.'
        }
      ],
      relatedTitle: 'Weiterlesen',
      related: [
        { href: '/features/lactate-lt1-lt2', label: 'Laktatschwellen neben deinen Leistungsdaten' },
        { href: '/guides/lactate-threshold-training', label: 'Guide: warum LT1 und LT2 mehr sagen als FTP allein' }
      ],
      ctaTitle: 'Starte den Trend',
      ctaBody:
        'Für iOS, Android und Windows, die ersten 14 Tage gratis: Strava oder intervals.icu verbinden, fahren, und FTP und VO2max Woche für Woche wachsen sehen.',
      backHome: 'Zurück zur Startseite'
    },
    'climbing-efficiency': {
      datePublished: '2026-07-28',
      dateModified: '2026-10-17',
      seoTitle: 'Climbing Efficiency & VAM-Score für Radsportler | ENDURE',
      seoDescription:
        'ENDURE erkennt Anstiege in deinen Outdoor-Fahrten automatisch und bewertet über die Aufstiegsgeschwindigkeit (VAM), wie effizient du Watt in Höhenmeter umsetzt.',
      breadcrumb: 'Climbing Efficiency',
      h1: 'Climbing Efficiency: ein Score dafür, wie gut du wirklich kletterst',
      subtitle: 'Automatische Anstiegserkennung, VAM-basiertes Scoring.',
      directAnswer:
        'Climbing Efficiency ist eine ENDURE-Metrik, die bewertet, wie effektiv du Watt in Höhenmeter umsetzt. Die App findet die Anstiege in deinen Outdoor-Fahrten selbst und baut den Score auf deiner vertikalen Aufstiegsgeschwindigkeit (VAM) auf. Klettern bekommt damit eine eigene Zahl, statt in der Durchschnittsleistung zu verschwinden.',
      sections: [
        {
          title: 'Was ist VAM, und warum darauf scoren?',
          body:
            'VAM ist deine vertikale Aufstiegsgeschwindigkeit in Metern pro Stunde. Am Berg ist sie das ehrliche Output-Maß: Watt beschreiben, was du hineingesteckt hast, VAM beschreibt, was mit deiner Höhe tatsächlich passiert ist. Die Beziehung zwischen beiden zu bewerten sagt etwas, das keine der Zahlen allein sagt: ob die Leistung effizient in Höhe umgesetzt wurde oder in den Kampf mit Rad, Linie und Steigung ging.'
        },
        {
          title: 'Wie funktioniert die automatische Anstiegserkennung?',
          body:
            'Du markierst keine Segmente und richtest nichts ein. ENDURE liest das Höhenprofil einer Outdoor-Fahrt, identifiziert die Anstiege darin und bewertet sie. Über eine Saison macht das jede hügelige Fahrt zu Daten, nicht nur die, bei denen du daran gedacht hast.'
        },
        {
          title: 'Was sagt der Score tatsächlich aus?',
          body:
            'Er gibt dem Klettern eine eigene Trendlinie. Ein Fahrer mit seit zwei Monaten flacher FTP kann trotzdem besser klettern (gleichmäßigere Einteilung, bessere Position, weniger Zeit im Wiegetritt zum falschen Moment), und genau das zeigt diese Metrik. Sie vergleicht Anstiege unterschiedlicher Länge und Steigung außerdem fairer als die reine Zeit.'
        },
        {
          title: 'Funktioniert das auch für Indoor-Fahrten?',
          body:
            'Climbing Efficiency ist für Outdoor-Fahrten gebaut, weil sie echte Höhenänderung braucht. Deine Indoor-Einheiten füttern weiterhin FTP- und VO2max-Trends, Laktatschwellen und Heat-Daten. Diese Metrik ist der Beitrag, den dein Outdoor-Fahren zum Gesamtbild leistet.'
        }
      ],
      faq: [
        {
          q: 'Muss ich Anstiege selbst markieren?',
          a: 'Nein. ENDURE erkennt die Anstiege in deinen Outdoor-Fahrten automatisch und bewertet sie ohne Einrichtung.'
        },
        {
          q: 'Ist Climbing Efficiency dasselbe wie VAM?',
          a: 'Nein. VAM ist die rohe Aufstiegsgeschwindigkeit in Metern pro Stunde; Climbing Efficiency ist ein darauf aufbauender Score, der zeigt, wie effektiv deine Watt zu Höhenmetern wurden.'
        },
        {
          q: 'Woher kommen die Fahrten?',
          a: 'Outdoor-Fahrten erreichen ENDURE über den Strava- oder intervals.icu-Sync, beim ersten Verbinden inklusive bestehender Historie.'
        }
      ],
      relatedTitle: 'Weiterlesen',
      related: [
        { href: '/features/ftp-vo2max-tracking', label: 'FTP- und VO2max-Trends' },
        { href: '/vs/zwift', label: 'ENDURE als Zwift Alternative' }
      ],
      ctaTitle: 'Bewerte deine Anstiege',
      ctaBody:
        'Für iOS, Android und Windows, die ersten 14 Tage gratis: Strava oder intervals.icu verbinden und ENDURE die Anstiege in den Fahrten finden lassen, die du schon gemacht hast.',
      backHome: 'Zurück zur Startseite'
    }
  }
};

export function getFeatureContent(lang: 'en' | 'de' = 'en', key: FeatureKey): FeatureContent {
  return (featurePages[lang] || featurePages.en)[key];
}
