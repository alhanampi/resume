# Animation Standards

## Library

This project uses **Motion** (`motion/react`) — the unified successor to Framer Motion. Install: `npm install motion`. Import from `"motion/react"`, never from `"framer-motion"`.

```ts
import { motion, AnimatePresence, MotionConfig } from 'motion/react'
import type { Variants } from 'motion/react'
```

## Shared variants

All reusable animation variants live in `src/animations/variants.ts`. Import from there — don't redeclare them inline across components.

```ts
import { fadeUp, fadeIn, stagger, staggerFast, viewport } from '../../animations/variants'
```

| Export | Use for |
|--------|---------|
| `fadeUp` | Section headings, body text, cards appearing on scroll |
| `fadeIn` | Section labels, subtle opacity-only reveals |
| `stagger` | Container that staggers 8 children (0.08s between) |
| `staggerFast` | Container that staggers many small items (0.05s between) |
| `viewport` | `{ once: true, margin: '-80px' }` — apply to all `whileInView` |

Define component-specific variants in `ComponentName.constants.ts` (colocated with the component) when they are not reusable. Import them into `index.tsx` — don't declare them inline.

## styled-components integration

To make a styled component animatable, extend a motion element instead of a raw HTML element:

```ts
// correct — styled motion element
import { motion } from 'motion/react'
export const Section = styled(motion.section)`...`
export const Card = styled(motion.article)`...`

// also valid — use motion.create for existing styled components
const MotionCard = motion.create(StyledCard)
```

Apply animation props directly on the styled component in JSX:

```tsx
<Section variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
  <motion.div variants={fadeUp}>
    <Heading>...</Heading>
  </motion.div>
</Section>
```

## Scroll-triggered sections

Every full-page section follows the same pattern:

```tsx
<Section
  variants={stagger}
  initial="hidden"
  whileInView="visible"
  viewport={viewport}      // always use the shared viewport constant
>
  <motion.div variants={fadeIn}><SectionLabel /></motion.div>
  <motion.div variants={fadeUp}><Heading /></motion.div>
  <motion.div variants={fadeUp}><Lead /></motion.div>
  {/* list items get variants directly if they're motion elements */}
</Section>
```

**Rules:**
- Always `once: true` — re-animating on scroll-up looks cheap
- Always use `margin: '-80px'` to trigger slightly before the element is fully in view
- `fadeIn` for metadata/labels, `fadeUp` for content

## Variant propagation

When a parent has `animate="visible"` or `whileInView="visible"`, Framer propagates the variant name through the React tree via context. Child motion elements with a matching `variants` key will animate automatically — you don't need to repeat `initial`/`animate` on every child.

Non-motion elements (plain divs, styled components not using `motion`) pass the context through transparently — they don't break propagation.

```tsx
<Section variants={stagger} initial="hidden" whileInView="visible" viewport={viewport}>
  {/* Section propagates "visible" → children pick it up */}
  <motion.div variants={fadeUp}>...</motion.div>

  <ul>
    {/* plain <ul> passes context through */}
    <motion.li variants={fadeUp}>...</motion.li>
  </ul>
</Section>
```

Propagation stops if a child sets its own `animate` prop explicitly — use this to give an element independent animation (e.g., the `AvailableDot` pulse loop).

## Hero entry animations

The Hero uses `initial="hidden" animate="visible"` (not `whileInView`) since it's above the fold on load. It has three orchestrated stagger groups:

1. `nameContainer` — staggered name words + underline (starts at t=0.15s)
2. `contentContainer` — all content below (starts at t=0.7s, staggered internally)

These variants live in `Hero/Hero.constants.ts` since they're specific to that component.

## AnimatePresence (accordions, conditionals)

Use `AnimatePresence` for elements that mount/unmount — this enables exit animations. The Experience accordion uses it:

```tsx
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      key="details"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      style={{ overflow: 'hidden' }}
    >
      ...content...
    </motion.div>
  )}
</AnimatePresence>
```

**Rules:**
- `initial={false}` prevents exit animations from running on first render
- Wrap the conditional, not the content — `AnimatePresence` must always be rendered
- Use stable, unique `key` props on animated children (not array indices)
- `style={{ overflow: 'hidden' }}` is required for height animations

## Hover animations

Use `whileHover` for pointer interactions. Keep transforms in motion, keep color/border transitions in CSS:

```tsx
// motion handles the lift
<Card whileHover={{ y: -4 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}>

// CSS handles color change — no need for motion here
export const Card = styled(motion.article)`
  transition: border-color 0.25s;
  &:hover { border-color: rgba(249,168,212,0.3); }
`
```

## Easing

Use `[0.22, 1, 0.36, 1]` (easeOutExpo) as the standard ease throughout. It's defined in `variants.ts` and repeated inline for component-specific variants. Never use `"easeOut"` or other named easings for primary animations — they feel less refined.

Exception: `'easeOut'` is acceptable for looping/ambient animations like the `AvailableDot` pulse.

## Accessibility — reduced motion

`MotionConfig reducedMotion="user"` is set in `App.tsx`. When the OS `prefers-reduced-motion: reduce` setting is active, Motion skips all animations automatically. No additional code needed per-component.

## Do not

- Do not animate things that are already in view on load with `whileInView` — use `animate` instead
- Do not use `viewport={{ once: false }}` — re-animating on scroll looks unpolished
- Do not stagger more than ~10 items — deep stagger lists feel slow (use a shorter delay or skip)
- Do not put Framer `keyframes` arrays (`[a, b, c]`) on properties controlled by styled-components CSS — pick one owner per property
- Do not add animations to every element — reserve motion for meaningful reveals and interactions
