# "One plan on every screen" – design options

Canvas: https://claude.ai/code/artifact/a4190680-ef6d-4802-a23a-fe88849b51e2 (12 artboards, `lang` tweak switches EN/DE).
The `*.dc.html` files here are copies of those artboards with the image paths pointed at `../assets/`. They use the Claude Design runtime (`support.js`, `{{holes}}`), so treat them as markup/spec for the Astro port, not as standalone pages.

All coordinates are `left, top` inside the stage (`position: relative`), widths are outer frame widths, heights follow the image aspect ratio. Stage y includes 16 px headroom for the label chips (chip = 28 px pill, `top: -14px` on each device, 24–26 px at ≤ 768).

## A · Desk stage

Back to front: Browser (z1) → Windows (z2) → Tablet (z3) → Phone (z4). Phone front-left covers only the Windows sidebar, tablet front-right covers Fr–So of the lower weeks, the KW column with the weekly verdict stays free.

| Breakpoint | Stage | Browser | Windows | Tablet | Phone |
|---|---|---|---|---|---|
| 1440 | 1280 × 710 | 0, 16 · w 640 (bar 40) | 150, 88 · w 1000 | 900, 316 · w 356 | 40, 316 · w 180 |
| 1024 | 944 × 610 | 0, 16 · w 472 (bar 34) | 111, 69 · w 737 | 664, 237 · w 262 | 30, 237 · w 172 |
| 768 | 704 × 540 | 0, 16 · w 352 (bar 30) | 83, 56 · w 550 | 492, 186 · w 202 | 0, 166 · w 172 |
| 390 | 358 × 530 | 40, 14 · w 318 (bar 26) | 0, 48 · w 318 | 0, 190 · w 200 | 186, 164 · w 172 |

## B · Hero window

Same order. Windows is the focal screen (1440: 1140 px ≈ 60 % scale, readable), browser peeks out top-right behind it, tablet and phone sit bottom-right in front. 390 switches to a horizontal scroll-snap row (cards 300 × 400, gap 12, next card peeks; order Phone, Tablet, Windows, Browser).

| Breakpoint | Stage | Browser | Windows | Tablet | Phone |
|---|---|---|---|---|---|
| 1440 | 1280 × 885 | 320, 16 · w 960 (bar 40) | 0, 72 · w 1140 | 820, 416 · w 376 | 1094, 486 · w 186 |
| 1024 | 944 × 710 | 236, 16 · w 708 (bar 34) | 0, 60 · w 841 | 590, 316 · w 278 | 772, 336 · w 172 |
| 768 | 704 × 620 | 176, 16 · w 528 (bar 30) | 0, 52 · w 627 | 330, 246 · w 212 | 532, 246 · w 172 |
| 390 | swipe row | card · w 272 | card · w 272 | card · w 262 | card · w 172 |

## C · Spotlight (interactive)

One device at a time, centred in a fixed-height stage (no layout shift); chips with a small screenshot thumbnail switch it (`aria-pressed`). Default Windows on desktop, Phone on 390 (segmented control without thumbnails). Needs a few lines of vanilla JS or a radio-input pattern.

| Breakpoint | Stage | Windows w | Browser w | Tablet screen h | Phone screen h |
|---|---|---|---|---|---|
| 1440 | 1280 × 680 | 1200 | 1080 (bar 40) | 620 | 620 |
| 1024 | 944 × 540 | 900 | 860 (bar 36) | 490 | 490 |
| 768 | 704 × 450 | 704 | 680 (bar 32) | 410 | 410 |
| 390 | 358 × 440 | 358 | 358 (bar 26) | 342 | 400 |

## Device frames (CSS only, no images)

- **Phone:** outer rim `#4A4E57` (2–3 px padding, `inset 0 0 0 1px rgba(255,255,255,.12)`), black bezel `#0E0F12` (4–7 px), screen clipped with `overflow:hidden`, punch-hole camera centred at the top, power + volume keys on the right edge (3 px wide, `#3A3E46`). Radius: outer 30–44, each inner layer minus the layer's padding.
- **Tablet (Pixel Fold):** same build, bezel 3–9 px, camera dot in the top-right bezel, faint vertical fold line (`linear-gradient`, 6 % opacity) at 50 %.
- **Windows:** 1 px `rgba(22,24,29,.18)` border, 8 px radius, screenshot carries its own title bar.
- **Browser:** 1 px `#E5E5E1` border, 12 px radius, `#F4F4F2` top bar with three `#D3D3CE` dots and a centred `app.endure-cycling.com` pill.
- Shadows: front devices `0 30px 80px rgba(22,24,29,.16)`, Windows `.14`, browser behind `0 20px 60px rgba(22,24,29,.10)`.

Every device is a `<button>` with an `aria-label` ("Open the … view full size") as the lightbox trigger.

## Open point

`#C2552B` on `#FCFCFB` is about 4.4 : 1, just under AA for the 13 px eyebrow. `#A84620` would pass if that matters.
