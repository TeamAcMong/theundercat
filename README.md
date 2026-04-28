# The Under Cats — Puzzle Game Studio

Official website for **The Under Cats**, an indie game studio creating brain-teasing puzzle games.

🌐 **Live:** [https://theundercat.github.io](https://theundercat.github.io)

## Tech Stack

- **Framework:** Next.js 16 (Static Export)
- **Styling:** Tailwind CSS 4 + CSS Custom Properties
- **Deploy:** GitHub Pages via GitHub Actions

## Project Structure

```
theundercat/
├── public/                     ← Static files (ads, verification)
│   ├── app-ads.txt             ← 📢 QC: Ad seller config
│   └── google8e...html         ← 📢 QC: Google verification
├── src/
│   ├── app/                    ← 🌐 WEB: Pages (Next.js App Router)
│   │   ├── layout.js           ← Root layout (shared footer, fonts, SEO)
│   │   ├── page.js             ← Home — game showcase
│   │   ├── about/page.js       ← About Us
│   │   ├── privacy-policy/page.js ← Privacy Policy
│   │   ├── terms/page.js       ← Terms & Conditions
│   │   └── not-found.js        ← 404 page
│   ├── components/             ← 🌐 WEB: Reusable components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── GameCard.js
│   └── data/
│       └── games.js            ← 🌐 WEB: Game data (single source of truth)
└── .github/workflows/
    └── static.yml              ← ⚙️ Build & deploy workflow
```

## Development

```bash
npm install
npm run dev     # Dev server at http://localhost:3000
npm run build   # Static export to ./out
```

## Adding a New Game

Edit `src/data/games.js` — that's it!
