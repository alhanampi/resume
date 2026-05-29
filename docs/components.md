# Component Standards

## File structure

Each component lives in its own folder under `src/components/`. The folder always has an `index.tsx` and a `ComponentName.styles.ts`. When the component has non-trivial constants, data arrays, or component-specific variants, extract them to `ComponentName.constants.ts`.

```
src/components/
  Hero/
    index.tsx               ← component logic and JSX only
    Hero.styles.ts          ← all styled-components for this component
    Hero.constants.ts       ← WORDS, STATS, animation variants
  Experience/
    index.tsx
    Experience.styles.ts
    Experience.constants.ts ← panelVariants
  ProjectCard/
    index.tsx
    ProjectCard.styles.ts   ← no constants file needed (no inline data/variants)
  Nav/
    index.tsx
    Nav.styles.ts
```

### When to add a constants file

Add `ComponentName.constants.ts` when the component's `index.tsx` would otherwise contain any of:
- Static data arrays (`WORDS`, `STATS`, …)
- Component-specific animation variants (not imported from `src/animations/variants.ts`)
- Non-trivial configuration objects used only by this component

Do **not** create a constants file just to move a one-liner — keep obvious, single-use values inline.

## Section components vs. leaf components

**Section components** (Hero, Nav, Projects, Skills, Experience, Contact) map to a single page section. They:

- Take no props
- Import their content directly from `src/data/`
- Are rendered once in `App.tsx`

**Leaf components** (ProjectCard) are reusable units rendered inside a section. They:

- Receive typed props via a colocated `interface Props { ... }` block
- Do not import from `src/data/` directly

```ts
// leaf component — typed props, no data imports
interface Props {
  project: Project
  index:   number
}

export default function ProjectCard({ project, index }: Props) { ... }
```

## Adding a new section

1. Create `src/components/MySectionName.tsx`
2. If it needs content, add a data file at `src/data/my-section.ts` (see `docs/data.md`)
3. Add the component to `App.tsx` inside `<main>`
4. Add a nav link entry to the `links` array in `Nav.tsx`

The section's root element should have an `id` matching the nav href:

```tsx
<section id="my-section">...</section>
```

## State

Components manage their own local UI state with `useState`. There is no global state store — don't add one. If two components need to share state, lift it to `App.tsx` and pass it as props.

## No external UI libraries

This app uses styled-components for all UI. Do not install shadcn/ui, MUI, Radix, or any other component library. Build what you need with styled-components and native HTML elements.
