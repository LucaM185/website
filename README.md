# Luca Miglioli — Portfolio

Static one-page portfolio. Hosted on GitHub Pages.

## Structure
- `index.html` — markup, 4 project sections + hero
- `styles.css` — dark theme, animated background, reveal animations
- `script.js` — scroll reveal, parallax glows, nav hide-on-scroll
- `images/` — drop your project images here (see filenames below)

## Image filenames expected
Place these in `/images/` (otherwise an elegant placeholder shows):
- `images/realtime.jpg` — Real-time UDP / dashboard
- `images/ai.jpg` — MathStudio / AI from scratch
- `images/feather.jpg` — Feather app
- `images/ahrs.jpg` — Embedded IMU / AHRS device

Any aspect ratio works; they're cropped to 4:3 via `object-fit: cover`.

## Local preview
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## GitHub Pages
1. Push to `main` of the repo `LucaM185/LucaM185` (or any repo).
2. Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`.
3. Done — the site is live at `https://lucam185.github.io/<repo>/`.
