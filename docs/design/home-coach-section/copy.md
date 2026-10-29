# Copy: homepage AI coach section (EN / DE)

Final copy for review, written to the rules in `CLAUDE.md` and the glossary in `CONTEXT.md`. German uses "du" like the rest of the site. Company voice ("ENDURE", "the coach"), no planning horizon as a number, no fixed multi-month plans, the plan never adjusts by itself, the rider applies every draft.

Arrows (`→`) are rendered by the component, not stored in the strings. The step numbers (`01`–`03`) are rendered from the array index. The Beta tag is a flag in the component, not a string.

## `translations.ts`: new key `coach`

Replaces `trainingPlanningTeaser` and `guidance` (both are only read by the two components this section replaces; delete them in the same change).

```ts
// en
// Homepage AI coach section, first section after the hero (2026-10-29).
// Training planning leads; daily guidance is part of the last step.
coach: {
  eyebrow: "AI COACH · TRAINING PLANNING",
  headline: "You set the week. The coach plans every session.",
  intro: "ENDURE’s AI coach drafts your coming weeks against the targets you set, explains every session and picks today’s session each morning. The coach drafts, you decide: nothing lands in your calendar until you apply it.",
  // Order matters: Week planner → Plan with coach → Every session explained
  steps: [
    {
      title: "Week planner",
      body: "Choose a week type for each coming week (Recovery, Maintain, Build or Focus) and set its TSS target. The load forecast rates every week before you ride it: On track, Borderline, Too little or Too much.",
      imageAlt: "The Week planner in the ENDURE web app: weeks 45 and 46, week type Maintain, a target of 330 TSS (about 5:52 h) and the rating On track"
    },
    {
      title: "Plan with coach",
      body: "Tap Plan with coach and the coach drafts the coming weeks against your targets, aimed at your goal event if you have one. It explains the draft in a conversation: ask for a shorter Tuesday or a free Sunday and it revises it. Nothing lands in your calendar until you tap Apply.",
      imageAlt: "A coach draft for weeks 45 and 46 in the ENDURE calendar: the sessions per day with target and planned TSS, the rating Borderline, the coach’s explanation under Conversation, and the Apply and Discard buttons",
      // Under the mobile focus crop only (< 768 px)
      cropNote: "Showing the coach’s draft. Tap for the full calendar."
    },
    {
      title: "Every session explained",
      body: "Each planned session comes with the coach’s reasoning and two alternatives: a lighter one if your legs feel heavy, a harder one if you feel fresh. Swap in the session details.",
      imageAlt: "Details of a planned session in ENDURE: the coach’s reasoning, duration, TSS and workout profile, and a lighter and a harder alternative"
    }
  ],
  // Callout inside step 3
  daily: {
    label: "DAILY GUIDANCE",
    body: "Every morning the coach reads your check-in and your recent rides and picks today’s session, with the reason. When today is already planned, it may propose one change, and you accept or skip it. One tap starts the workout, and your smart trainer follows in ERG mode."
  },
  // Chip on the screenshots (visible on touch, on hover/focus with a pointer)
  enlarge: "Enlarge",
  link: "How training planning works",
  coachLink: "How the AI coach works",
  webLink: "Also in your browser"
},

// de
// Startseiten-Sektion KI-Coach, erste Sektion nach dem Hero (2026-10-29).
// Die Trainingsplanung führt; die tägliche Empfehlung ist Teil des letzten Schritts.
coach: {
  eyebrow: "KI-COACH · TRAININGSPLANUNG",
  headline: "Du legst die Woche fest. Der Coach plant jede Einheit.",
  intro: "Der KI-Coach von ENDURE entwirft deine kommenden Wochen nach den Zielen, die du vorgibst, begründet jede Einheit und wählt jeden Morgen die Einheit für heute. Der Coach entwirft, du entscheidest: In deinen Kalender kommt erst etwas, wenn du es übernimmst.",
  steps: [
    {
      title: "Wochenplaner",
      body: "Wähl für jede kommende Woche einen Wochentyp (Erholung, Erhalt, Aufbau oder Fokus) und leg ihr TSS-Ziel fest. Die Belastungsprognose bewertet jede Woche, bevor du sie fährst: Im Rahmen, Grenzwertig, Zu wenig oder Zu viel.",
      imageAlt: "Der Wochenplaner in der ENDURE-Web-App: KW 45 und 46, Wochentyp Erhalt, ein Ziel von 330 TSS (rund 5:52 h) und die Bewertung Passend"
    },
    {
      title: "Mit Coach planen",
      body: "Tipp auf „Mit Coach planen“, und der Coach entwirft die kommenden Wochen nach deinen Zielen, ausgerichtet auf dein Zielevent, wenn du eines hast. Den Entwurf erklärt er dir im Gespräch: Wünsch dir einen kürzeren Dienstag oder einen freien Sonntag, und er überarbeitet ihn. In deinen Kalender kommt erst etwas, wenn du auf „Übernehmen“ tippst.",
      imageAlt: "Ein Entwurf des Coaches für KW 45 und 46 im ENDURE-Kalender: die Einheiten pro Tag mit Ziel und geplantem TSS, die Bewertung Grenzwertig, die Erklärung des Coaches unter Gespräch und die Buttons Übernehmen und Verwerfen",
      cropNote: "Ausschnitt: der Entwurf des Coaches. Tippen für den ganzen Kalender."
    },
    {
      title: "Jede Einheit begründet",
      body: "Zu jeder geplanten Einheit gibt es die Begründung des Coaches und zwei Alternativen: eine leichtere, wenn die Beine schwer sind, eine härtere, wenn du frisch bist. Getauscht wird in den Details der Einheit.",
      imageAlt: "Details einer geplanten Einheit in ENDURE: Begründung des Coaches, Dauer, TSS und Workout-Profil sowie eine leichtere und eine härtere Alternative"
    }
  ],
  daily: {
    label: "TÄGLICHE EMPFEHLUNG",
    body: "Jeden Morgen liest der Coach deinen Check-in und deine letzten Fahrten und wählt die Einheit für heute, mit Begründung. Ist heute schon etwas geplant, schlägt er bei Bedarf eine Änderung vor, die du annimmst oder nicht. Ein Fingertipp startet das Workout, dein Smart Trainer folgt im ERG-Modus."
  },
  enlarge: "Vergrößern",
  link: "So funktioniert die Trainingsplanung",
  coachLink: "So arbeitet der KI-Coach",
  webLink: "Auch im Browser"
},
```

## String reference (flat)

| Key | EN | DE |
|---|---|---|
| `coach.eyebrow` | AI COACH · TRAINING PLANNING | KI-COACH · TRAININGSPLANUNG |
| `coach.headline` | You set the week. The coach plans every session. | Du legst die Woche fest. Der Coach plant jede Einheit. |
| `coach.steps[0].title` | Week planner | Wochenplaner |
| `coach.steps[1].title` | Plan with coach | Mit Coach planen |
| `coach.steps[2].title` | Every session explained | Jede Einheit begründet |
| `coach.daily.label` | DAILY GUIDANCE | TÄGLICHE EMPFEHLUNG |
| `coach.enlarge` | Enlarge | Vergrößern |
| `coach.link` | How training planning works | So funktioniert die Trainingsplanung |
| `coach.coachLink` | How the AI coach works | So arbeitet der KI-Coach |
| `coach.webLink` | Also in your browser | Auch im Browser |

Long strings (intro, step bodies, alt texts, `daily.body`, `cropNote`) are in the block above.

## Glossary check (`CONTEXT.md`)

| Term | EN in copy | DE in copy |
|---|---|---|
| Training planning | eyebrow, link | eyebrow, link |
| Week planner | step 1 title, alt | step 1 title, alt |
| Week type | step 1 body (Recovery / Maintain / Build / Focus) | Wochentyp (Erholung / Erhalt / Aufbau / Fokus) |
| Load forecast | step 1 body, four labels as in the app | Belastungsprognose, Im Rahmen / Grenzwertig / Zu wenig / Zu viel |
| Plan with coach | step 2 title and body | Mit Coach planen, quoted in the body |
| Goal event | step 2 body, optional ("if you have one") | Zielevent, optional |
| Daily guidance | step 3 callout label | Tägliche Empfehlung |
| Web app | `webLink` (via `WebAppLink`) | `webLink` |

Avoided on purpose: any number of weeks; "adjusts after every ride"; "training plan" in the sense of a fixed program; "Beta" in the section headline; repeating the hero headline ("Stop guessing" / "personalized plan").

## Alt texts and what the screenshots show

The alt texts describe the screenshots as they are today. Two labels in the German screenshots differ from the glossary (see README, open questions 1 and 2): the load forecast shows **Passend** where `CONTEXT.md` says **Im Rahmen**. The alt text follows the screenshot; the body copy follows the glossary. If the app label changes, re-shoot and update the alt text in the same change.
