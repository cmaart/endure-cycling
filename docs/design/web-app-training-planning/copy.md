# Copy: web app link + Training planning (EN / DE)

Placeholder copy in the final tone (factual, company voice, German "du" like the rest of the site). Final copy is written separately; keep the key structure so it can be swapped. Strings marked `[Placeholder…]` must be resolved before shipping (see README, open questions).

Arrows (`→`) are rendered by the component, not stored in the strings, except in `related` labels where the existing pattern appends them in markup too.

## `translations.ts`

### `nav` (add)

| Key | EN | DE |
|---|---|---|
| `webApp` | Launch app | App starten |
| `webAppAria` | Launch the ENDURE web app | ENDURE-Web-App starten |

(One label for all breakpoints; the icon-only state uses `webAppAria` as `aria-label` and `webApp` as `title`.)

### `hero` (add)

| Key | EN | DE |
|---|---|---|
| `webLink` | Or open it in your browser | Oder direkt im Browser öffnen |

The footer reuses `hero.webLink` (same pattern as the badge alt texts).

### `footer` (add)

| Key | EN | DE |
|---|---|---|
| `featureTrainingPlanning` | Training planning | Trainingsplanung |

### `trainingPlanningTeaser` (new section)

```ts
// en
trainingPlanningTeaser: {
  eyebrow: "NEW · TRAINING PLANNING",
  headline: "Your coach now plans the next two weeks.",
  description: "Set a goal event and the AI coach fills your calendar one to two weeks ahead. For every week you see planned against done, a load forecast and a short verdict. Every change waits for your OK.",
  chips: ["Planned vs. done", "Load forecast", "Lighter or harder option"],
  link: "How training planning works",
  webLink: "Also in your browser",
  imageAlt: "Two weeks in the ENDURE calendar with planned and completed sessions, weekly totals and the coach verdict"
},
// de
trainingPlanningTeaser: {
  eyebrow: "NEU · TRAININGSPLANUNG",
  headline: "Dein Coach plant jetzt die nächsten zwei Wochen.",
  description: "Leg ein Zielevent fest, und der KI-Coach füllt deinen Kalender ein bis zwei Wochen im Voraus. Für jede Woche siehst du Geplant und Erledigt, eine Belastungsprognose und ein kurzes Fazit. Jede Änderung wartet auf dein OK.",
  chips: ["Geplant vs. erledigt", "Belastungsprognose", "Leichter oder härter"],
  link: "So funktioniert die Trainingsplanung",
  webLink: "Auch im Browser",
  imageAlt: "Zwei Wochen im ENDURE-Kalender mit geplanten und erledigten Einheiten, Wochensummen und dem Fazit des Coaches"
}
```

## `features.ts`, key `'training-planning'`

Standard `FeatureContent` fields first, then the optional fields for the richer layout. Section `body` + `bullets` follow the existing convention (bullets may contain `<strong>`).

### EN

```ts
'training-planning': {
  datePublished: '<ship date>',
  dateModified: '<ship date>',
  seoTitle: 'Training Planning with an AI Cycling Coach | ENDURE',
  seoDescription: 'The ENDURE AI coach plans your next one to two weeks around your goal event: planned vs. done, load forecast, weekly verdict, lighter and harder options. You confirm every change. Also in the browser.',
  breadcrumb: 'Training planning',
  eyebrow: 'New · Training planning',
  h1: 'Training planning: the AI coach plans your next two weeks',
  subtitle: 'Aligned to your goal event, adjusted after every ride. You confirm each change.',
  directAnswerLabel: 'SHORT ANSWER',
  directAnswer: 'The ENDURE AI coach plans the next one to two weeks of training in a calendar, aligned to your goal event. Each week shows planned against done, a load forecast and a short verdict from the coach. Every session has a lighter and a harder alternative. The coach proposes, you confirm: nothing in your calendar changes without your OK. You plan in the calendar and ride the sessions in the ENDURE app on iOS, Android or Windows.',
  heroImageAlt: 'ENDURE web app calendar with two planned weeks, completed sessions, weekly totals and a Plan with coach button',
  heroCaption: 'The training planning calendar in the ENDURE web app: two weeks with planned and completed sessions, weekly totals and the coach verdict.',
  stepsTitle: 'How it works',
  steps: [
    { title: 'Set your goal', body: 'Add the event you are training for and its date.' },
    { title: 'The coach proposes', body: 'It fills the next one to two weeks from your rides, your training load and your morning check-ins.' },
    { title: 'You confirm and ride', body: 'Accept each change or ask for something else in chat. After every ride the coach reviews it.' }
  ],
  sections: [
    {
      title: 'Planned and done, week by week',
      body: 'Every week row shows the planned hours and load next to what you actually rode. The coach adds a short verdict, so you see at a glance whether the week went to plan.',
      bullets: [
        '<strong>Planned vs. done</strong> for hours and training load, per week.',
        '<strong>Weekly verdict</strong> from the coach in one or two sentences.'
      ],
      image: { src: '/assets/web-app/crop-week-row.webp', alt: 'Two week rows in the ENDURE calendar with planned and done bars and the verdict On track' }
    },
    {
      title: 'A load forecast before you ride it',
      body: 'The calendar projects your fitness (CTL) across the planned weeks and checks the ramp against your goal. Before the week starts you see whether the plan is on track, too little or too much.',
      bullets: [
        '<strong>Three states:</strong> on track, too little, too much.',
        '<strong>Projected ramp</strong> up to the date of your goal event.'
      ],
      image: { src: '/assets/web-app/crop-load-forecast.webp', alt: 'ENDURE load forecast: fitness curve up to today and the projected ramp to the goal event, rated On track' }
    },
    {
      title: 'Plan with coach, one week at a time',
      body: 'Each week has a Plan with coach button. The coach drafts the week from your recent rides and check-ins and shows you what would change. You accept it, or tell the coach in chat what should be different.',
      bullets: [
        '<strong>Proposal first:</strong> changes are shown before they apply.',
        '<strong>Your call:</strong> nothing in the calendar changes without your confirmation.',
        '<strong>Adjust in chat,</strong> for example a shorter Tuesday or a free weekend.'
      ],
      image: { src: '/assets/web-app/crop-plan-with-coach.webp', alt: 'Plan with coach button and the coach proposal with the changed sessions, Accept and Discard' }
    },
    {
      title: 'A lighter and a harder option for every session',
      body: 'Each planned session comes with two alternatives. If your legs or your schedule do not match the plan, swap in the lighter or the harder version.',
      bullets: [
        '<strong>Three versions</strong> per session: lighter, planned, harder.',
        '<strong>One click</strong> to swap, right in the calendar.'
      ],
      image: { src: '/assets/web-app/crop-session-alternatives.webp', alt: 'A planned session in ENDURE with its lighter and harder alternative' }
    }
  ],
  platforms: {
    title: 'Plan in the browser, ride in the app',
    body: 'The web app at app.endure-cycling.com does everything except recording rides. Rides stay in the ENDURE apps, which control your smart trainer. Same account, same subscription.',
    web: { title: 'Web app in the browser', items: ['AI coach and daily plan', 'Training planning in the calendar', 'Analysis', 'Workout library and builder'] },
    app: { title: 'ENDURE app for iOS, Android, Windows', items: ['Coach, calendar and analysis', 'Ride recording', 'Smart trainer control in ERG and SIM'] },
    note: 'You buy the subscription in the iOS or Android app. On a phone, the web app first points you to the store app.'
  },
  faqTitle: 'Questions about training planning',
  faq: [
    { q: 'Does ENDURE create a training plan?', a: 'Yes. The AI coach plans the next one to two weeks in your calendar and keeps that window up to date as you ride. It does not lay out a fixed plan for months ahead; it re-plans from your actual rides.' },
    { q: 'Do I have to accept every change?', a: 'Yes. The coach proposes changes and shows them in the calendar. They only apply once you confirm them.' },
    { q: 'What does the load forecast show?', a: 'It projects your fitness (CTL) across the planned weeks and rates the ramp toward your goal as on track, too little or too much.' },
    { q: 'Can I use training planning in the browser?', a: 'Yes. Open app.endure-cycling.com and sign in with your ENDURE account. The web app covers the coach, the calendar, analysis and workouts. To ride, you use the ENDURE app on iOS, Android or Windows.' },
    { q: 'Do I need a goal event?', a: '[Placeholder: confirm how planning works without a goal event.]' },
    { q: 'Is training planning part of ENDURE Premium?', a: '[Placeholder: confirm availability.] You can try ENDURE Premium free for 14 days without payment details. The subscription is bought in the iOS or Android app.' }
  ],
  ctaTitle: 'Let the coach plan your next two weeks',
  ctaBody: 'Try ENDURE Premium free for 14 days. No payment details, nothing to cancel.',
  relatedTitle: 'Keep reading',
  related: [
    { href: '/features/ai-coach', label: 'AI coach & daily recommendation' },
    { href: '/features/ftp-vo2max-tracking', label: 'FTP & VO2max tracking' },
    { href: '/supported-trainers', label: 'Supported trainers' },
    { href: '/guides', label: 'Training guides' }
  ],
  backHome: 'Back to Homepage'
}
```

### DE

```ts
'training-planning': {
  datePublished: '<ship date>',
  dateModified: '<ship date>',
  seoTitle: 'Trainingsplanung mit KI-Coach fürs Radtraining | ENDURE',
  seoDescription: 'Der KI-Coach von ENDURE plant deine nächsten ein bis zwei Wochen rund um dein Zielevent: Geplant vs. erledigt, Belastungsprognose, Wochenfazit, leichtere und härtere Optionen. Jede Änderung bestätigst du. Auch im Browser.',
  breadcrumb: 'Trainingsplanung',
  eyebrow: 'Neu · Trainingsplanung',
  h1: 'Trainingsplanung: Der KI-Coach plant deine nächsten zwei Wochen',
  subtitle: 'Ausgerichtet auf dein Zielevent, nach jeder Fahrt angepasst. Jede Änderung bestätigst du selbst.',
  directAnswerLabel: 'KURZ GESAGT',
  directAnswer: 'Der KI-Coach von ENDURE plant die nächsten ein bis zwei Wochen Training in einem Kalender, ausgerichtet auf dein Zielevent. Jede Woche zeigt Geplant und Erledigt, eine Belastungsprognose und ein kurzes Fazit des Coaches. Zu jeder Einheit gibt es eine leichtere und eine härtere Alternative. Der Coach schlägt vor, du bestätigst: Ohne dein OK ändert sich nichts in deinem Kalender. Geplant wird im Kalender, gefahren in der ENDURE-App für iOS, Android oder Windows.',
  heroImageAlt: 'Kalender der ENDURE-Web-App mit zwei geplanten Wochen, erledigten Einheiten, Wochensummen und dem Button Mit Coach planen',
  heroCaption: 'Der Kalender der Trainingsplanung in der ENDURE-Web-App: zwei Wochen mit geplanten und erledigten Einheiten, Wochensummen und dem Fazit des Coaches.',
  stepsTitle: 'So funktioniert es',
  steps: [
    { title: 'Ziel festlegen', body: 'Trag das Event ein, auf das du trainierst, und sein Datum.' },
    { title: 'Der Coach schlägt vor', body: 'Er füllt die nächsten ein bis zwei Wochen aus deinen Fahrten, deiner Trainingsbelastung und deinen Morgen-Check-ins.' },
    { title: 'Bestätigen und fahren', body: 'Übernimm jede Änderung oder wünsch dir im Chat etwas anderes. Nach jeder Fahrt wertet der Coach sie aus.' }
  ],
  sections: [
    {
      title: 'Geplant und erledigt, Woche für Woche',
      body: 'Jede Wochenzeile zeigt geplante Stunden und Belastung neben dem, was du tatsächlich gefahren bist. Dazu kommt ein kurzes Fazit des Coaches, damit du sofort siehst, ob die Woche nach Plan lief.',
      bullets: [
        '<strong>Geplant vs. erledigt</strong> für Stunden und Trainingsbelastung, pro Woche.',
        '<strong>Wochenfazit</strong> des Coaches in ein, zwei Sätzen.'
      ],
      image: { src: '/assets/web-app/crop-week-row.webp', alt: 'Zwei Wochenzeilen im ENDURE-Kalender mit Balken für Geplant und Erledigt und dem Fazit Im Plan' }
    },
    {
      title: 'Belastungsprognose, bevor du losfährst',
      body: 'Der Kalender rechnet deine Fitness (CTL) über die geplanten Wochen hoch und prüft den Anstieg gegen dein Ziel. Schon vor Wochenbeginn siehst du, ob die Wochen im Plan liegen, zu wenig oder zu viel bringen.',
      bullets: [
        '<strong>Drei Zustände:</strong> im Plan, zu wenig, zu viel.',
        '<strong>Prognostizierter Anstieg</strong> bis zum Datum deines Zielevents.'
      ],
      image: { src: '/assets/web-app/crop-load-forecast.webp', alt: 'Belastungsprognose in ENDURE: Fitnesskurve bis heute und prognostizierter Anstieg bis zum Zielevent, bewertet mit Im Plan' }
    },
    {
      title: 'Mit Coach planen, Woche für Woche',
      body: 'Jede Woche hat einen Button „Mit Coach planen“. Der Coach entwirft die Woche aus deinen letzten Fahrten und Check-ins und zeigt dir, was sich ändern würde. Du übernimmst den Vorschlag oder sagst dem Coach im Chat, was anders sein soll.',
      bullets: [
        '<strong>Erst der Vorschlag:</strong> Änderungen siehst du, bevor sie gelten.',
        '<strong>Du entscheidest:</strong> Ohne deine Bestätigung ändert sich nichts im Kalender.',
        '<strong>Anpassen im Chat,</strong> zum Beispiel ein kürzerer Dienstag oder ein freies Wochenende.'
      ],
      image: { src: '/assets/web-app/crop-plan-with-coach.webp', alt: 'Button Mit Coach planen und der Vorschlag des Coaches mit den geänderten Einheiten, Übernehmen und Verwerfen' }
    },
    {
      title: 'Eine leichtere und eine härtere Option für jede Einheit',
      body: 'Jede geplante Einheit hat zwei Alternativen. Passen Beine oder Zeitplan nicht zum Plan, tauschst du auf die leichtere oder die härtere Variante.',
      bullets: [
        '<strong>Drei Varianten</strong> pro Einheit: leichter, geplant, härter.',
        '<strong>Ein Klick</strong> zum Tauschen, direkt im Kalender.'
      ],
      image: { src: '/assets/web-app/crop-session-alternatives.webp', alt: 'Eine geplante Einheit in ENDURE mit leichterer und härterer Alternative' }
    }
  ],
  platforms: {
    title: 'Im Browser planen, in der App fahren',
    body: 'Die Web-App unter app.endure-cycling.com kann alles außer Fahrten aufzeichnen. Gefahren wird in der ENDURE-App, die deinen Smart Trainer steuert. Gleiches Konto, gleiches Abo.',
    web: { title: 'Web-App im Browser', items: ['KI-Coach und Tagesplan', 'Trainingsplanung im Kalender', 'Analyse', 'Workout-Bibliothek und Builder'] },
    app: { title: 'ENDURE-App für iOS, Android, Windows', items: ['Coach, Kalender und Analyse', 'Fahrten aufzeichnen', 'Smart Trainer in ERG und SIM steuern'] },
    note: 'Das Abo schließt du in der iOS- oder Android-App ab. Am Smartphone verweist dich die Web-App zuerst auf die App im Store.'
  },
  faqTitle: 'Fragen zur Trainingsplanung',
  faq: [
    { q: 'Erstellt ENDURE einen Trainingsplan?', a: 'Ja. Der KI-Coach plant die nächsten ein bis zwei Wochen in deinem Kalender und hält dieses Fenster aktuell, während du fährst. Einen starren Plan über Monate legt er nicht an; er plant aus deinen tatsächlichen Fahrten neu.' },
    { q: 'Muss ich jede Änderung bestätigen?', a: 'Ja. Der Coach schlägt Änderungen vor und zeigt sie im Kalender. Wirksam werden sie erst, wenn du sie bestätigst.' },
    { q: 'Was zeigt die Belastungsprognose?', a: 'Sie rechnet deine Fitness (CTL) über die geplanten Wochen hoch und bewertet den Anstieg zu deinem Ziel als im Plan, zu wenig oder zu viel.' },
    { q: 'Kann ich die Trainingsplanung im Browser nutzen?', a: 'Ja. Öffne app.endure-cycling.com und melde dich mit deinem ENDURE-Konto an. Die Web-App deckt Coach, Kalender, Analyse und Workouts ab. Zum Fahren nutzt du die ENDURE-App für iOS, Android oder Windows.' },
    { q: 'Brauche ich ein Zielevent?', a: '[Platzhalter: klären, wie die Planung ohne Zielevent funktioniert.]' },
    { q: 'Ist die Trainingsplanung Teil von ENDURE Premium?', a: '[Platzhalter: Verfügbarkeit bestätigen.] ENDURE Premium kannst du 14 Tage gratis testen, ohne Zahlungsdaten. Das Abo schließt du in der iOS- oder Android-App ab.' }
  ],
  ctaTitle: 'Lass den Coach deine nächsten zwei Wochen planen',
  ctaBody: 'Teste ENDURE Premium 14 Tage gratis. Keine Zahlungsdaten, nichts zu kündigen.',
  relatedTitle: 'Weiterlesen',
  related: [
    { href: '/features/ai-coach', label: 'KI-Coach & Tagesempfehlung' },
    { href: '/features/ftp-vo2max-tracking', label: 'FTP- & VO2max-Tracking' },
    { href: '/supported-trainers', label: 'Unterstützte Trainer' },
    { href: '/guides', label: 'Trainings-Guides' }
  ],
  backHome: 'Zurück zur Startseite'
}
```

## UI terms (must match the app)

Used in alt texts and copy; check against the real app labels before shipping.

| EN | DE |
|---|---|
| Calendar | Kalender |
| Planned / Done | Geplant / Erledigt |
| On track / Too little / Too much | Im Plan / Zu wenig / Zu viel |
| Plan with coach | Mit Coach planen |
| Coach proposal | Vorschlag des Coaches |
| Accept / Discard / Change in chat | Übernehmen / Verwerfen / Im Chat ändern |
| Lighter / Planned / Harder | Leichter / Geplant / Härter |
| Load forecast | Belastungsprognose |
| Goal event | Zielevent |
| Weekly verdict | Wochenfazit |
