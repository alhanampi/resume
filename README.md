# Pamina Goldenberg Thiery — Portfolio

![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

Personal portfolio site for **Pamina Goldenberg Thiery**, Senior Frontend Developer specializing in React, TypeScript, and AI-driven applications.

> **Live →** [alhanampi.vercel.app](https://alhanampi.vercel.app)

---

## Features

- **Canvas hero** — name rendered via `@chenglou/pretext` with a custom animation loop and frame-accurate easing
- **Live projects** — fetched at runtime from GitHub pinned repos via a Vercel edge function; no rebuild needed to update projects, just pin/unpin on GitHub
- **Smooth-scroll sections** — Projects · Skills · Experience · Certifications & Education · Contact
- **Fully typed** — strict TypeScript throughout, shared interfaces in `src/utils/types.ts`
- **Dark theme** — token-based design system in `src/styles/theme.ts`, zero hardcoded values
- **Responsive** — mobile-first breakpoints, canvas scales to viewport

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Language | TypeScript (strict) |
| Styling | styled-components + theme tokens |
| Edge function | Vercel (GitHub GraphQL API) |
| Deployment | Vercel |

---

## Project structure

```
src/
  components/         # One folder per component
    Nav/              #   index.tsx + ComponentName.styles.ts
    Hero/
    Projects/
    ProjectCard/
    Skills/
    Experience/
    Certificates/
    Contact/
  constants/
    index.ts          # NAV_LINKS, CONTACT_LINKS, HERO_LINKS, SECTION_IDS
  data/               # Static content arrays (experience, skills, certificates)
  hooks/
    useScrolled.ts    # scroll position listener
    useActiveSection.ts # IntersectionObserver for nav highlight
  styles/
    theme.ts          # Design tokens (colors, fonts)
    GlobalStyles.ts
  utils/
    types.ts          # Shared TypeScript interfaces
api/
  pinned.ts           # Vercel edge function — GitHub GraphQL pinned repos
```

See [`docs/clean-code.md`](docs/clean-code.md) for full architecture conventions.

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check + production build
npm run build

# Format source files
npm run format
```

> The `/api/pinned` edge function does not run under `npm run dev`. To test the live projects section locally, use `vercel dev` with a `.env.local` file at the project root containing `GITHUB_TOKEN`.

---

## Environment variables

| Variable | Where to set | Purpose |
|---|---|---|
| `GITHUB_TOKEN` | Vercel → Environment Variables | GitHub personal access token with `public_repo` read scope. Required by `api/pinned.ts` to fetch pinned repos via the GitHub GraphQL API. |

---

## Docs

| File | Contents |
|---|---|
| [`docs/clean-code.md`](docs/clean-code.md) | Architecture conventions, folder structure, import order, hook extraction rules, TypeScript standards |
| [`docs/ui.md`](docs/ui.md) | styled-components standards: theme tokens, transient props, fonts, breakpoints, keyframes |
| [`docs/components.md`](docs/components.md) | Component conventions: section vs. leaf, how to add a section, state rules |
| [`docs/data.md`](docs/data.md) | Content layer: `src/data/` conventions, how to add projects or new categories |

---

## Deployment

The site deploys automatically to Vercel on every push to `main`. The `api/pinned.ts` edge function runs server-side at request time — no rebuild is needed when pinned repos change on GitHub.

To update which projects appear on the site, **pin or unpin repos on your GitHub profile**. Set the repo's **Website** field in GitHub settings so the "live demo →" link resolves correctly.
