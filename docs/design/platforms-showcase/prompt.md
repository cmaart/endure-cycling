# Claude Design prompt: "One plan on every screen" section

Paste the prompt below into Claude Design and attach the five files from `assets/`.

---

Design one homepage section for endure-cycling.com, the website of ENDURE, an AI cycling coach and training planning app. The section sits directly below the training planning teaser and shows that the same training calendar runs on four screens: phone, tablet, the Windows app and the web app in a browser.

**Attached files**
- `phone.webp` (1080 × 2364): calendar week on an Android phone
- `tablet.webp` (2076 × 2152): the same calendar on an unfolded Pixel Fold, near-square
- `windows.webp` (1906 × 993): the same calendar in the Windows app, native title bar included in the image
- `web.webp` (1920 × 1120): the same calendar in the web app, no browser chrome in the image
- `current-section-1440.png`: my current attempt. It does not work: four devices in one row at the same height make every screenshot tiny and unreadable, the phone bezel is clumsy, and the row has no focal point.

Use the screenshots as they are. Do not redraw, crop away or invent app UI.

**Goal**
At a glance a visitor should see "same plan, every device", and at least one screen should be big enough to read the calendar (week rows, planned sessions, the coach's weekly verdict). Think of a composed device stage, not a row of thumbnails: for example the desktop window large in the back, the tablet overlapping in front of it, the phone in front of the tablet, the browser window offset behind. Labels (Phone / Tablet / Windows / Browser) may be small captions or chips. Show me 2 or 3 different compositions.

**Copy (fixed, do not rewrite)**
- Eyebrow: `PHONE · TABLET · WINDOWS · BROWSER` (DE: `HANDY · TABLET · WINDOWS · BROWSER`)
- Headline: `One plan on every screen.` (DE: `Ein Plan auf jedem Bildschirm.`)
- Body: `Your calendar, coach and analysis are on your phone, your tablet, the Windows app and the browser, with the same data on each. Plan at your desk and ride with the app on the trainer.`
  (DE: `Kalender, Coach und Analyse findest du auf dem Handy, dem Tablet, in der Windows-App und im Browser, überall mit denselben Daten. Plan am Schreibtisch und fahr mit der App am Trainer.`)
- Link: `Open ENDURE in your browser →` (DE: `ENDURE im Browser öffnen →`)

**Brand**
- Background `#FCFCFB`, surfaces `#FFFFFF`, borders `#E5E5E1`, light fill `#F4F4F2`
- Text `#16181D`, secondary `#5F646D`
- Accent `#C2552B` (hover `#A84620`), used sparingly: eyebrow, link underline
- Fonts: Sora (headline 46 px, extrabold, tracking −0.03 em; body 18 px), IBM Plex Mono for the eyebrow (13 px, tracking 0.04 em, with a thin accent line on each side)
- Phone bezel elsewhere on the site: 8 px `#16181D` border, 36 px radius, soft shadow `0 30px 80px rgba(22,24,29,0.16)`. Browser frame elsewhere: 40 px light top bar with three grey dots and a centred address pill `app.endure-cycling.com`.
- Calm, factual, sporty. No gradients behind the devices, no glow, no 3D tilt gimmicks, no decorative blobs.

**Breakpoints**
Show 1440, 1024, 768 and 390 px. On 390 the stage may become a swipeable row or a 2 × 2 grid, but the phone must not shrink below about 160 px wide. Every device opens full size in a lightbox on click, so the composition may crop slightly as long as each screen stays recognisable.

**Deliverable**
HTML/CSS I can port to Astro + Tailwind v4 (plain divs and utility-style classes, no JS framework), plus a short note on the stacking order, offsets and sizes per breakpoint.
