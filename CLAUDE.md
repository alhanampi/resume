# Portfolio — CLAUDE.md

## Project

Pamina Goldenberg Thiery's portfolio site. Vite + React 18 + TypeScript, deployed to Vercel. Single-page app with a canvas hero (pretext), smooth-scroll sections, and no routing library.

## Stack

- **Styling** — styled-components (sole styling mechanism; no Tailwind, no CSS Modules)
- **Theme** — `src/styles/theme.ts` + `ThemeProvider` in `App.tsx`; always use theme tokens, never hardcode values
- **Projects** — fetched live from GitHub pinned repos via `api/pinned.ts` (Vercel edge function); requires `GITHUB_TOKEN` env var in Vercel
- **Other content** — static TypeScript files in `src/data/`; no database, no CMS
- **Formatting** — Prettier (`npm run format`); config in `.prettierrc`

## Docs

- [`docs/ui.md`](docs/ui.md) — styled-components standards: theme tokens, transient props, fonts, breakpoints, keyframes
- [`docs/components.md`](docs/components.md) — component conventions: section vs. leaf, how to add a section, state rules
- [`docs/data.md`](docs/data.md) — content layer: src/data/ conventions, how to add projects or new categories

## Commands

- `npm run dev` — start dev server
- `npm run build` — type-check + build
- `npm run format` — format all src files with Prettier
- `npm run format:check` — CI-safe format check
