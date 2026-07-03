# Dev Content & Animations — Design

Date: 2026-07-03 · Branch: `feature/dev-content-and-animations`

## Goal

Add more dev content and simple modern animations to the portfolio. Keep existing
colors, fonts (Courier Prime / Unica One), hero image, and section structure.
Zero new dependencies.

## Scope

### 1. Professional work grid (extend Projects area)

Keep the QR generator as the featured project. Add a grid of 3 proprietary work
cards below it — **no external links** (closed-source client work):

| Project | Company | One-liner | Tags |
|---|---|---|---|
| Gernix | Mapp / Miticon | Marketing platform for triggering campaigns across mobile and other devices | Angular, Dashboards, Data Viz |
| Ash | Mindnow / Holycode | E-commerce platform for meat products in Germany | Python, E-commerce, Integrations |
| Auction Platform | Mindnow / Holycode | Real-estate auction platform for apartments in Italy | Python, Celery, CI/CD |

Card = title, company, one-liner, tags. Reuses existing `.tag` style and
`stagger-fade` scroll reveal. New component: `components/sections/WorkHighlightsSection.vue`.

### 2. "What I Do" section (skills in depth)

Terminal-style block: dark window with fake title bar, monospace `$ command`
lines describing actual practice — team leadership, backend architecture,
frontend, delivery. Pure HTML/CSS, leans into the monospace font.
New component: `components/sections/WhatIDoSection.vue`, placed between About
and Experience.

### 3. Animations (zero-dep)

- **Typewriter** on hero subtitle — pure CSS `steps()` width animation + blinking
  caret (works because Courier Prime is monospace; width in `ch`).
- **Micro-interactions** — hover lift + border emphasis on cards, animated
  underline on text links.
- **Scroll progress bar** — 2px fixed bar at top, `--white-gray`, tiny JS scroll
  listener. New component: `components/utils/ScrollProgress.vue`.
- **`prefers-reduced-motion`** media query disables all animations globally.

## Out of scope

GitHub activity section, blog, ambient/particle backgrounds, new dependencies.

## Verification

`npm run generate` succeeds; visual check of sections and animations in dev server.
