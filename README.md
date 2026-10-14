# Rajdeep Nag — Portfolio

Personal portfolio site. Two kinds of work sit side by side: **paintings** in oil, acrylic and watercolour, and **product** case studies and prototypes.

**Live:** https://rajdeepnag24.github.io/portfolio/

## Pages

- **Projects** (`index.html`) — product case studies, AI build challenges and earlier class projects.
- **Art** (`art.html`) — a gallery of paintings, each with its title and medium.
- **About** (`about.html`) — short bio and interests.

## Projects featured

| Project | What it is | Links |
|---|---|---|
| **Trippie — Reel to Real** | A living Canvas inside MakeMyTrip that turns a saved Instagram reel into a booked trip. MMT Young Turks' Challenge, 2026. | [Prototype](https://www.figma.com/proto/ljjwusqf0C3P7tymk1eEoj/Trippie-%E2%80%94-Living-board-journey?node-id=26-8082) · [Deck](images/projects/trippie-reel-to-real.pdf) |
| **Brandfluence** | From 25 interviews to a tested MVP for a creator–brand marketplace. ISB product-discovery case study, 2026. | [Live demo](https://brandfluence-rosy.vercel.app) · [Repo](https://github.com/rajdeepnag24/brandfluence) |
| **Razorpay Dues** | A Razorpay app feature that groups unpaid payment links by client and drafts a WhatsApp nudge. Razorpay AI × PM Build Challenge, 2026. | [Live demo](https://razorpay-dues-rajdeepnag2410-5143.vercel.app) · [Repo](https://github.com/rajdeepnag24/razorpay-dues) |
| **Payday Hub** | A Paytm-inspired concept for planning recurring payments. 2026. | [Live demo](https://payday-hub-vercel.vercel.app/) · [Repo](https://github.com/rajdeepnag24/paytm-payday-hub) |
| **CreATE** | A recipe-manager web app, built as a class project — full case study. | [Case study](create.html) |
| **SociusQR** | A platform for sharing customizable QR profiles — case study. | [Case study](sociusqr.html) |

## Built with

- Plain HTML, CSS and a little vanilla JavaScript — no build step.
- Type: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) and [Manrope](https://fonts.google.com/specimen/Manrope) (text), via Google Fonts.
- Icons: Font Awesome. Hosted on **GitHub Pages**.

## Run locally

```bash
# from the repo root
python -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
.
├── index.html          # Projects (home)
├── art.html            # Paintings gallery
├── about.html          # About
├── create.html         # CreATE case study
├── sociusqr.html       # SociusQR case study
├── src/
│   ├── styles.css      # Site styles
│   └── app.js          # Menu, section toggles, image lightbox
└── images/
    ├── art/            # Painting images
    └── projects/       # Project thumbnails + Trippie deck
```
