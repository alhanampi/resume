import type { Variants } from 'motion/react'

export const WORDS = ['PAMINA', 'GOLDENBERG', 'THIERY']

export const STATS = [
  '6+ years experience',
  'React & TypeScript',
  'AI-driven products',
  'Remote worldwide',
]

const ease = [0.22, 1, 0.36, 1] as const

export const nameContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

export const nameItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const underlineVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease, delay: 0.1 } },
}

export const contentContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.7 } },
}

export const heroFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
}

export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

export const statContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
