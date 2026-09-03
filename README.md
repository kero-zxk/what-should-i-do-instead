# What Should I Do Instead?

A tiny, deliberately silly five-minute procrastination app. Type the thing you
should be doing, get a harmless escape, mark it done, and download the evidence.

## Run locally

Requires Node.js 20.19+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verify

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

The production-ready static site is written to `dist/`.

## Deploy to Vercel

The included `vercel.json` builds the Vite app with `npm run build` and serves
the `dist/` directory. Import the GitHub repository as a new Vercel project;
keep the framework preset as Vite and the production branch as `main`. No
environment variables or backend are required. Pushes to `main` create
production deployments, while other branches create preview deployments.

## Product boundaries

- All 24 escape prompts live locally in `src/data/escapes.ts`.
- The app has no login, history, database, tracking, or AI generation.
- Card export happens entirely in the browser as a 1080×1350 PNG.
- Native sharing is intentionally outside V1.
