# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static portfolio site originally forked from the BootstrapMade "Personal" template (`https://bootstrapmade.com/personal-free-resume-bootstrap-template/`) and the `rajaprerak.github.io` GitHub Pages repo. The current owner / content subject is **Andrei Ciprian Popescu** (see `assets/js/resume.js`). `Readme.md` is leftover from the upstream template — its plan/sections list does not reflect the current fork's state.

There is **no build system, no package manager, no tests, and no CI**. Everything is plain HTML/CSS/JS loaded directly by the browser. Deployment is GitHub Pages serving the repo root.

## Running locally

Open `index.html` directly, or serve the repo root with any static server (e.g. `python -m http.server`, `npx serve`, VS Code Live Server). All asset paths are relative, so the working directory must be the repo root.

## Architecture — the parts that need multiple files to understand

### Single source of truth: `window.resume`

`assets/js/resume.js` declares a large `resume` object literal inside a `$(document).ready(...)` and assigns it to `window.resume`. **All other dynamic content modules read from `window.resume`.** When editing personal data (profile text, languages, education, certifications, contact, social links), edit `resume.js` — not the HTML.

Script load order in `index.html` matters: vendor libs → `main.js` → `resume.js` (populates `window.resume`) → `typed.js`, `social.js`, `about.js`, `contact.js`, `education.js`, `certification.js` (all consumers).

### Lazy DOM population on nav click

`index.html` ships with empty container elements (`#rowInterests`, `#rowLanguages`, `#rowEducation`, `#rowCertifications`, `#address`, `#details`, `#emails`, `#telephone`, etc.). These are populated **on demand** when the user clicks a top-nav link:

- `#about-link` click → `onAbout()` in `about.js` fills interests + languages.
- `#education-link` click → `onEducation()` + `onCertification()` in `education.js`.
- `#contact-link` click → `onContact()` in `contact.js` fills info-boxes.
- Each `onX()` guards against re-population by checking child count or existing `<a>`/`<p>` elements.

When adding a new section that reads from `window.resume`, follow the same pattern: bind to both `#<section>-link` and the cloned `.mobile-nav > ul > li > a[href='#<section>']` (the mobile nav is a runtime clone of the desktop nav — see `main.js:67-72`).

### Section show/hide is custom, not Bootstrap

`main.js` implements a **single-section-visible** model: clicking a hash link adds `header-top` to `#header`, removes `section-show` from all `<section>`s, then adds `section-show` to the target after a 350ms delay. The `#header` link returns to the home state. CSS in `assets/css/style.css` drives the visual transition. Don't expect typical scroll-to-anchor behavior — the framework here is closer to a tabbed SPA.

### Dead code to be aware of

- `assets/js/fetchResume.js` exposes `parseAndCacheResume`, `getResumeHighlights`, `getResumeData`, `clearResumeCache` on `window`, but the document-ready call that would actually use them is **commented out** (`fetchResume.js:5`). It also has a bug: it calls `$.getJSON('resume.json')` and then `.then(response => response.json())` — `$.getJSON` already returns parsed data. The JSON file `assets/js/resume.json` (which contains `work-experience`) is currently **unused at runtime**; experience data in `index.html` is hardcoded HTML, not generated from JSON.
- `assets/js/certification.js` is empty (just commented-out handlers). The actual certification rendering lives in `education.js` (`onCertification`, `certification`).
- `assets/js/education.js` contains a long commented-out alternative `education(x)` function alongside the active `education2(x)`. Don't delete without checking which one is referenced.
- `index.html` has many commented-out portfolio items (Tech Blog, To-Do App) — these are intentionally hidden, not stale.

### Vendor lock-in

The page depends on jQuery (the entire codebase is jQuery-style), plus Bootstrap 4, Owl Carousel, Isotope, Venobox, Typed.js, Waypoints, CounterUp, IcoFont, RemixIcon, and BoxIcons. All vendored under `assets/vendor/`. Don't introduce a different DOM library — every existing module assumes `$`/jQuery.

### Projects subpages

`projects/*.html` (gan, iras, ml, musicplayer, recommender, resume, twitteranalysis, vdg, blog, todo) are standalone pages opened inside a Venobox iframe lightbox from the portfolio section in `index.html`. They are **leftovers from the upstream `rajaprerak` content** and unrelated to the current owner's work.

## Conventions

- Personal/resume data goes in `assets/js/resume.js`, not in `index.html`.
- New images: `assets/img/<category>/` (existing categories: `education`, `certification`, `project`).
- New PDFs (e.g., certification proofs): `assets/pdf/`, then reference by filename in the relevant `resume.js` entry's `pdf` field.
- Match the existing inline-styling habit (`style="text-align:left;color:#12d640"` etc.) — the codebase mixes Bootstrap classes with inline styles freely; don't refactor toward strict separation unless asked.
