# Design handoff: homepage AI coach section

Status: design ready for implementation. Copy is final for review (see `copy.md`).
Design canvas (source of truth for visuals): https://claude.ai/code/artifact/b4526ccd-4426-447a-a3f8-a104329e9cb7
Created: 2026-10-29

This folder is the brief for an agent that builds one new homepage section into the Astro site. Read `CLAUDE.md` and `CONTEXT.md` first; every rule there still applies (strings in `src/i18n/*` for en and de, `localeHref`, no hardcoded web-app URL, no prices in strings, AI coach positioning, glossary terms).

| File | What it is |
|---|---|
| `README.md` | This brief: decisions, layout per breakpoint, component structure, images, wiring, open questions |
| `copy.md` | All EN + DE strings, structured as the new `coach` key for `translations.ts` |
| `reference/*.dc.html` | The mockups from the canvas, using the real screenshots. Reference only: inline styles and `/_blob/…` image URLs do not work in Astro. Read them for structure, spacing and type; build with Tailwind classes as listed below |
| `reference/canvas.json` | Board index (which board shows which breakpoint and locale) |

Boards: `Main` (1440, EN), `Coach-1440-DE`, `Coach-390-EN`, `Coach-390-DE`. Each starts with a faded strip of the Ticker to show the slot.

## Goal

Today the homepage has a small training planning teaser (one screenshot, `TrainingPlanningTeaser.astro`) right after Hero + Ticker, and a separate "What should I train today?" section (`GuidanceFeature.astro`) much further down, after Trial. Both go. One large section in the teaser's slot presents **one AI coach that plans training**, in three steps:

1. **Week planner** (Beta): week type + TSS target per coming week, rated by the load forecast. Screenshot `crop-load-forecast.webp`.
2. **Plan with coach** (Beta): the coach drafts the coming weeks against those targets and explains the draft in a conversation; nothing lands in the calendar until the rider applies it. Screenshot `crop-plan-with-coach.webp`.
3. **Every session explained** (no Beta): reasoning + a lighter and a harder alternative per session; daily guidance as a callout inside this step. Screenshot `crop-session-alternatives.webp`.

`crop-week-row.webp` is not used here (it stays on `/features/training-planning/`).

## Design decisions and why

1. **Numbered rows, not a 3-column card grid.** The screenshots are desktop web-app crops with small UI text. Three columns at 1152 px would show each crop at about 360 px, and the Plan with coach crop would drop to ~4 px text. Rows give each crop the width it needs.
2. **Step 2 runs full width; steps 1 and 3 sit beside their text.** Plan with coach is the widest crop with the smallest text, and it is the product direction, so it gets the full 1152 px. Step 1 (portrait) sits right of its text, step 3 left, so the eye zig-zags down the section instead of reading three identical rows.
3. **No card around the section.** The old teaser was a white card. This section is a chapter of the page, and the screenshots already carry their own light-grey app surface; a white card around them would be a card in a card. Rows are separated by `border-slate-100` hairlines, as on the training planning feature page.
4. **Headline states the division of labour, not the hero's claim.** "You set the week. The coach plans every session." follows the step order (targets → draft → session), carries the trust message (the rider decides), and does not repeat "Stop guessing / personalized plan". No Beta tag on it.
5. **Daily guidance is a callout inside step 3**, not a fourth step. `CONTEXT.md` defines it as part of the one AI coach and the last step on the homepage. It keeps the useful facts of the old section (picked from the check-in, with the reason, one tap to ride in ERG mode) and adds the rule that the coach only *proposes* a change to a planned day.
6. **Eyebrow without "New".** The hero badge already says "New: training planning"; the eyebrow names the topic ("AI COACH · TRAINING PLANNING").
7. **Link hierarchy at the end of the section.** Primary "How training planning works" as `.btn-secondary` (outline). `.btn-primary` stays reserved for the trial CTA in the nav. Secondary "How the AI coach works" as an accent text link, then `WebAppLink` ("Also in your browser"). The links close the section, after the reader has seen all three steps.
8. **Mobile focus crop for step 2.** At 342 px the full Plan with coach crop shrinks its text to ~4 px. Below `md`, the image box shows only the coach's draft panel (right 36 % of the image: Draft, Apply / Discard, the session list, Borderline, Conversation) at ~11 px, with a caption saying it is a detail. Tapping opens the full screenshot in the Lightbox. Pure CSS (`object-fit` + `object-position`), no new asset.
9. **Reveal is vertical only.** `data-reveal` (translate Y) on header, each step's text, each image (`data-reveal-delay="100"`) and the link row. No `left` / `right` variants: a 48 px horizontal offset is a horizontal-scroll risk at 390 px.

## Layout per breakpoint

Container `container mx-auto px-6`, inner `max-w-6xl mx-auto` (1152 px). Section `py-20 md:py-28`, same as the neighbours.

### Mobile (< 768 px) — boards `Coach-390-EN`, `Coach-390-DE`

- Header stacked: eyebrow, H2, intro.
- Steps stacked vertically at full width, no horizontal scroller. Per step: number, H3 (+ Beta), body, then the image at container width (342 px at 390).
- Step 2 image: focus crop of the draft panel, box `aspect-[580/1289]` (≈ 342 × 760 px), plus the `cropNote` caption under it.
- Step 3: text, then the daily guidance callout, then the image.
- Every image is a button that opens the Lightbox and shows the "Enlarge" chip (bottom right).
- Links stacked: primary button full width, then the two text links (each ≥ 44 px tall).

### Tablet (768–1023 px)

- Same stacking as mobile, wider measure: text `max-w-2xl`.
- Images: step 1 `max-w-[480px]`, step 2 the **full** image at container width (no crop from `md` up), step 3 `max-w-[600px]`. Centre the capped images.
- Enlarge chip only on hover / keyboard focus from `md` up.
- Links in one wrapping row.

### Desktop (≥ 1024 px) — boards `Main`, `Coach-1440-DE`

- Header: two columns, `lg:flex-row lg:items-end lg:gap-16`. Left `lg:basis-7/12`: eyebrow + H2. Right `lg:basis-5/12`: intro.
- Step 1: `lg:flex-row lg:items-center gap-8 lg:gap-16`, text `lg:basis-5/12`, image `lg:basis-7/12` with the image `max-w-[480px]` centred in its column.
- Step 2: a header row (`lg:flex-row lg:items-end`), number + H3 `lg:basis-5/12`, body `lg:basis-7/12`; image below, `mt-10`, full width.
- Step 3: `lg:flex-row-reverse` (image left), text `lg:basis-5/12` with the callout, image `lg:basis-7/12`, `max-w-[620px]`.
- Link row left-aligned, `flex-wrap items-center gap-x-8 gap-y-3`.

## Type, spacing, tokens (all existing)

| Element | Classes |
|---|---|
| Eyebrow | as in `GuidanceFeature`: `flex items-center gap-3 font-mono text-[13px] tracking-[0.04em] text-accent mb-5 md:mb-6` + 40 px `h-px bg-accent` line |
| H2 | `text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] text-slate-900 text-balance` |
| Intro | `text-base md:text-lg text-slate-600 leading-relaxed` |
| Steps list | `<ol>` `mt-12 md:mt-[72px]`; each `<li>` `py-12 md:py-16 border-t border-slate-100` |
| Step number | `font-mono text-[13px] tracking-[0.04em] text-accent mb-3 md:mb-4`, rendered `01`–`03` |
| H3 | `text-2xl md:text-3xl font-extrabold tracking-[-0.02em] leading-tight text-slate-900` + `<BetaTag />` for steps 1 and 2 |
| Step body | `text-base md:text-lg leading-relaxed text-slate-600` |
| Daily callout | `mt-6 md:mt-7 bg-white border border-slate-200 rounded-2xl p-5 md:px-6`; label row `flex items-center gap-2.5 font-mono text-[13px] tracking-[0.04em] text-accent mb-2.5` with an 18 px stroke sun icon (see reference); body `text-[15px] md:text-base leading-relaxed text-slate-600` |
| Image button | `group relative block w-full rounded-2xl border border-slate-200 bg-white overflow-hidden cursor-zoom-in shadow-[0_30px_80px_-24px_rgba(22,24,29,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`; step 2 from `md`: `md:rounded-[20px]` |
| Enlarge chip | `absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 text-endure-bg-primary px-3 py-1.5 font-mono text-xs md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity`, 14 px magnifier icon, `aria-hidden="true"` |
| Crop caption | `mt-3 text-sm text-slate-600 md:hidden` |
| Link row | `mt-0 pt-10 md:pt-12 border-t border-slate-100 flex flex-col items-stretch sm:flex-row sm:flex-wrap sm:items-center gap-x-8 gap-y-2` |
| Primary link | `.btn-secondary` + `justify-center` (full width below `sm`) |
| Secondary link | `inline-flex items-center min-h-11 text-accent-hover font-semibold hover:underline` |

No new fonts or colours. The chip uses the existing ink (`slate-900`) at 80 %.

## Component structure

New `src/components/CoachSection.astro`. Shape (Tailwind as in the table above, abbreviated here):

```astro
---
/**
 * Homepage AI coach section, first section after the hero (2026-10-29).
 * Replaces TrainingPlanningTeaser + GuidanceFeature. Training planning leads,
 * daily guidance is a callout in the last step.
 */
import { getTranslations } from '../i18n/translations';
import { localeHref } from '../utils/paths';
import { webAppImage, type WebAppImageKey } from '../webAppImages';
import BetaTag from './BetaTag.astro';
import WebAppLink from './WebAppLink.astro';

const lang = (Astro.currentLocale as 'en' | 'de') || 'en';
const t = getTranslations(lang).coach;

// Per-step layout data; strings come from t.steps (same order).
const meta: { image: WebAppImageKey; beta: boolean; mobileCrop?: boolean }[] = [
  { image: 'loadForecast', beta: true },
  { image: 'planWithCoach', beta: true, mobileCrop: true },
  { image: 'sessionAlternatives', beta: false },
];
const steps = t.steps.map((s, i) => ({ ...s, ...meta[i], img: webAppImage(lang, meta[i].image) }));
---

<section id="coach" class="py-20 md:py-28">
  <div class="container mx-auto px-6">
    <div class="max-w-6xl mx-auto">
      <header data-reveal> eyebrow · <h2> · intro </header>
      <ol>
        <!-- step 0: text | image(max 480) -->
        <!-- step 1: (number+h3 | body) then full-width image; mobile crop + caption -->
        <!-- step 2: image(max 620) | text + daily callout  (lg:flex-row-reverse) -->
        Each image:
        <button type="button" data-lightbox-src={img.src} data-lightbox-alt={s.imageAlt} class="group …">
          <img src={img.src} alt={s.imageAlt} width={img.width} height={img.height}
               loading="lazy" decoding="async" class="block w-full h-auto" />
          <span aria-hidden="true" class="…chip…">{magnifier} {t.enlarge}</span>
        </button>
      </ol>
      <div data-reveal class="…link row…">
        <a href={localeHref(lang, '/features/training-planning')} class="btn-secondary …">{t.link} <span aria-hidden="true">→</span></a>
        <a href={localeHref(lang, '/features/ai-coach')} class="…">{t.coachLink} →</a>
        <WebAppLink lang={lang} placement="home-coach" label={t.webLink} />
      </div>
    </div>
  </div>
</section>

<script>
  // Screenshots open full size in the shared Lightbox (same pattern as TrainingPlanningPage).
  document.querySelectorAll<HTMLElement>('#coach [data-lightbox-src]').forEach((el) => {
    el.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('lightbox:open', {
        detail: { src: el.dataset.lightboxSrc, alt: el.dataset.lightboxAlt },
      }));
    });
  });
</script>
```

Step 2 mobile crop: the button gets `aspect-[580/1289] md:aspect-auto`, the image `h-full w-full object-cover object-right-top md:h-auto`. The Lightbox gets the unchanged full `src`.

Render the step layouts explicitly (three blocks or a `switch` on the index) rather than one generic row with flags; the three rows differ enough that a generic template gets harder to read than three short blocks.

### Reused components

| Component | Use |
|---|---|
| `BetaTag.astro` | After the H3 of steps 1 and 2. Not on the H2 |
| `WebAppLink.astro` | Link row, `label={t.webLink}`, `placement="home-coach"` |
| `Lightbox.astro` | Already mounted in `index.astro`; opened through the `lightbox:open` event. Do not use `data-zoomable` here: the Lightbox binds it to the `<img>` only, and the button wrapper is what makes the tap target keyboard-accessible |
| `webAppImages.ts` | `webAppImage(lang, key)` for `src`, `width`, `height`. No new keys needed |

## Images

| Step | File (`public/assets/web-app/<lang>/`) | Intrinsic | Shown at (CSS px) | UI text at that size |
|---|---|---|---|---|
| 1 | `crop-load-forecast.webp` | 820 × 937 | 342 mobile · 480 tablet/desktop | ~10 px · ~14 px |
| 2 | `crop-plan-with-coach.webp` | 1600 × 1289 | 342 × 760 crop mobile · 720 tablet · 976 at 1024 · 1152 at ≥ 1200 | ~11 px · ~8 px · ~11 px · ~13 px |
| 3 | `crop-session-alternatives.webp` | 1277 × 1376 | 342 mobile · 600 tablet · ~530–620 desktop | ~7 px · ~12 px · ~11–13 px |

- Always set `width` / `height` from `webAppImage()` so nothing shifts.
- `loading="lazy" decoding="async"` on all three; no `fetchpriority` (the section starts below the hero fold). Payload per locale ~190 KB.
- The files are 2× already; a `srcset` with 1× variants is optional and not needed for this change.
- Alt texts per language are in `copy.md`; the Lightbox reuses them.
- Small text at tablet (step 2) and mobile (step 3) is the known weak spot; the Enlarge chip and Lightbox cover it (see open question 4).

## Site wiring (in the same change)

1. `src/pages/index.astro` and `src/pages/de/index.astro`: replace `<TrainingPlanningTeaser />` with `<CoachSection />` (after `<Ticker />`), remove `<GuidanceFeature />` and both imports. New order: Hero, Ticker, **CoachSection**, PlatformsShowcase, Proof, Trial, Features, …
2. Delete `src/components/TrainingPlanningTeaser.astro` and `src/components/GuidanceFeature.astro`.
3. `src/i18n/translations.ts`: add `coach` for en and de (`copy.md`), delete `trainingPlanningTeaser` and `guidance` (only those two components read them).
4. `store-attribution.ts` needs no change; `WebAppLink` carries `data-placement`. New placement name `home-coach` replaces `home-teaser`.
5. `CLAUDE.md`, positioning paragraph: replace "the training planning teaser is the first section after the hero, the daily guidance section (\"What should I train today?\") sits after Proof and Trial" with: the AI coach section (`CoachSection.astro`) is the first section after the hero, in three steps: Week planner, Plan with coach, Every session explained with daily guidance as part of the last step.
6. `public/llms.txt`: no new page. Check the summary still matches (it does not describe homepage sections today).
7. No anchor links point at `#guidance` or `#training-planning` inside the site (checked). The new section id is `coach`.

## Open questions

1. **German load-forecast label.** The DE screenshot shows **Passend**; `CONTEXT.md` says **Im Rahmen**, and the training planning page already mixes both (body "Im Rahmen", alt "Passend"). The body copy here follows the glossary, the alt follows the screenshot. Align the app or the glossary, then re-shoot or update.
2. **"Verwerfen" wraps in the DE Plan with coach screenshot** ("Verwer / fen" on the button). It shows on the homepage at desktop size. Fix in the app and re-shoot, or accept for now?
3. **"Wochenart" vs "Wochentyp".** The existing DE alt text on `/features/training-planning/` says "Wochenart"; the glossary and this copy say "Wochentyp". Out of scope here, worth fixing alongside.
4. **Small UI text on narrow screens.** Step 3 at 342 px (~7 px) and step 2 at tablet width (~8 px) rely on the Lightbox. Better: dedicated narrow screenshots (session details and coach draft taken at a ~430 px viewport) used below `md` via `<picture>`. That needs new assets from the screenshot pipeline; decide whether it is worth it.
5. **GA4 placement.** `home-coach` is the honest name, but breaks the `home-teaser` series in reports. Rename (recommended) or keep?
6. **Section id.** `coach` instead of `training-planning`. Any external links (newsletter, social) to `/#training-planning`? If yes, keep that id.
7. **BetaTag contrast.** `text-slate-400` (#9DA0A6) on the page background is about 2.5:1, below 4.5:1 for 11–12 px text. Existing component, unchanged here; consider `text-slate-500` or `slate-600` site-wide.

## Acceptance checklist

- [ ] `npm run build` passes; `/` and `/de/` show the section right after the Ticker; `GuidanceFeature` and `TrainingPlanningTeaser` are gone from both.
- [ ] All strings come from `translations.ts` (`coach`, en + de); links use `localeHref`; the web-app link uses `WebAppLink` (no hardcoded URL).
- [ ] Beta tag on steps 1 and 2 only; none on the H2 or step 3.
- [ ] Checked at 390, 768, 1024, 1280, 1440 px in EN and DE: no horizontal scroll, steps stacked below 1024, German strings fit.
- [ ] Every screenshot opens in the Lightbox by click, tap, Enter and Space; Escape closes it; the image alt is the button's accessible name.
- [ ] Step 2 shows the draft-panel crop below 768 px and the full image from 768 px; the Lightbox always shows the full image.
- [ ] Touch targets ≥ 44 px (image buttons, three links).
- [ ] `data-reveal` on header, step texts, images and link row; nothing visible jumps or overflows with `prefers-reduced-motion`.
- [ ] Copy rules: no number of weeks, no fixed multi-month plan, no "adjusts by itself", company voice; hero headline not repeated.
- [ ] `CLAUDE.md` positioning paragraph updated as above.
