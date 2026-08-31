# Saguaro Seed Vault 🌵

A premium cactus & succulent seed e-commerce web app, built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS.

## Features

- **Product catalog** — 16+ seed and growing-tool products across 4 categories (Cactus, Succulents, Rare & Exotic, Growing Tools)
- **Category filtering** — URL-driven filters on the shop page
- **Product detail pages** — dynamic routes with full descriptions, ratings, and related products
- **Shopping cart** — add/remove/update quantities, persisted in localStorage via React Context
- **Cart drawer** — slide-out cart with live subtotal
- **Newsletter signup** — email capture section
- **Contact form** — validated form with success state
- **Responsive design** — mobile-first, works on all screen sizes

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Cart state | React Context + localStorage |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev       # development server
npm run build     # production build
npm run start     # serve production build
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── app/                 # Pages & routes
│   ├── layout.tsx       # Root layout (providers, nav, footer)
│   ├── page.tsx         # Homepage
│   ├── shop/            # Shop + category filtering
│   ├── product/[slug]/  # Product detail
│   ├── about/           # About + growing guides
│   ├── contact/         # Contact form
│   └── not-found.tsx    # 404 page
├── components/          # Reusable UI components
├── context/             # Cart context
├── lib/                 # Product data
└── types/               # Type declarations
```

## Deployment

Push to the `main` branch and connect the repository to Vercel for automatic builds and deployments.
