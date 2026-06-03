# MorphX Corporate Website

Premium commercial furniture and surfaces — Next.js marketing site for MorphX.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Prerequisites

- Node.js 20.9 or later
- npm, pnpm, or yarn

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

The build outputs a static-friendly app (all main routes are pre-rendered).

## Deploy to Vercel (recommended)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (defaults are fine).
4. Build command: `npm run build`
5. Output: handled automatically by Next.js.
6. Deploy.

`@vercel/analytics` is included and loads only in production.

## Deploy elsewhere

Any Node host that supports Next.js works:

- Build: `npm run build`
- Start: `npm run start` (default port 3000)
- Set `NODE_ENV=production`

For static export, this project uses Next.js Image with remote Unsplash URLs and `images.unoptimized: true`; keep the Node server mode unless you migrate images to `/public`.

## Environment variables

No required env vars for the current static marketing pages. Optional:

| Variable | Purpose |
|----------|---------|
| `NODE_ENV` | Set to `production` on deploy |

## Project structure

```
app/              # Routes (home, about, products, contact)
components/       # UI and page sections
lib/              # Shared image URLs and utilities
public/           # Static assets
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint (if configured) |
