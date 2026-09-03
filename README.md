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

## Deploy

### Cloudflare Pages

The project is ready for Git-based Cloudflare Pages deployment. The included
`public/_redirects` file is copied into `dist/` during the Vite build and
sends single-page-app routes back to `index.html`.

1. In Cloudflare, create a **Pages** application and connect the GitHub repository.
2. Select the `main` production branch.
3. Set the build command to `npm run build` and the build output directory to `dist`.
4. Use Node.js 22 (or another Node.js version supported by Vite), then deploy.

No environment variables are required. Cloudflare will provide a free
`*.pages.dev` URL after the first successful deployment.

### Vercel

The included `vercel.json` remains available as an alternative deployment
configuration. It builds the Vite app with `npm run build` and serves the
`dist/` directory. No environment variables or backend are required.

## Product boundaries

- All 24 escape prompts live locally in `src/data/escapes.ts`.
- The app has no login, history, database, tracking, or AI generation.
- Card export happens entirely in the browser as a 1080×1350 PNG.
- Native sharing is intentionally outside V1.
