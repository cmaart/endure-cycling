# YouTube channel

An ENDURE channel that shows how riders actually use the app. Videos double as embeds for the feature pages and as material for shorts.

Status: idea, channel not created yet.

Recording, editing and language: see [youtube-production.md](youtube-production.md). First video in German, English as a separate video.

## Video ideas

### 1. Two ways to train with the AI coach

Status: idea

Shows that the coach fits two kinds of riders, side by side in one video.

**A. Let the coach plan.** The rider hands over the planning, like working with a human coach.

- Set the coming weeks in the Week planner (week type, TSS target, load forecast), optionally with a goal event.
- Press "Plan with coach" and let it draft the weeks in the calendar.
- Change the draft in chat ("I can't ride on Wednesday", "more climbing this week"), then apply it.
- Each morning: check-in, today's session with the reason and two alternatives.
- After the ride: the coach reviews it.

**B. Be your own coach, with the AI as a safety net.** The rider plans the training themselves and uses the coach as a second opinion.

- Put own workouts into the calendar, or build them from text.
- The load forecast flags weeks that are too much or too little.
- The morning check-in may propose one change to today's session, for example after a bad night.
- Every ride gets a review, so mistakes in the plan show up early.

Animation ideas (HyperFrames, see the production workflow):

- "Week planner": the four week types (Recovery, Maintain, Build, Focus) appear as cards.
- "Load forecast": the rating flips from "Too much" to "On track" while the week is adjusted.
- Changing the plan in chat: the bubble "I can't ride on Wednesday", then the workout moves in the calendar.
- Way A against way B: split screen "the coach plans" / "you plan, the coach checks".
- Fitness building: a CTL curve drawing itself over several weeks.

Points to get right:

- The plan changes only on request; the coach does not rewrite it on its own (at most one proposed change to today's session each morning).
- Say "the coming weeks", never a number of weeks.
- Training planning is in early access (switched on per rider via the in-app roadmap); say so in the video or the description.
- Link the description to `/features/ai-coach/` and `/features/training-planning/`, with UTM parameters (`utm_source=youtube`) so installs show up per video.
