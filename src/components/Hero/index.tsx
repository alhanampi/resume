import type { Variants } from 'motion/react'
import { HERO_LINKS } from '../../constants'

import {
  Section,
  CodeComment,
  NameBlock,
  NameLine,
  NameUnderline,
  ContentArea,
  AvailableBadge,
  AvailableDot,
  Heading,
  Bio,
  StatRow,
  Stat,
  LinkRow,
  LinkButton,
} from './Hero.styles'

const WORDS = ['PAMINA', 'GOLDENBERG', 'THIERY']

const STATS = [
  '6+ years experience',
  'React & TypeScript',
  'AI-driven products',
  'Remote worldwide',
]

const ease = [0.22, 1, 0.36, 1] as const

const nameContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const nameItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

const underlineVariant: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.9, ease, delay: 0.1 } },
}

const contentContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.7 } },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

const statContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

export default function Hero() {
  return (
    <Section id="me" initial="hidden" animate="visible">
      <CodeComment variants={fadeIn}>
        <span>// </span>system.init
      </CodeComment>

      <NameBlock variants={nameContainer}>
        {WORDS.map((word) => (
          <NameLine key={word} variants={nameItem}>
            {word}
          </NameLine>
        ))}
        <NameUnderline variants={underlineVariant} />
      </NameBlock>

      <ContentArea variants={contentContainer}>
        <AvailableBadge variants={fadeIn}>
          <AvailableDot
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(74,222,128,0.6)',
                '0 0 0 8px rgba(74,222,128,0)',
                '0 0 0 0 rgba(74,222,128,0)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
          />
          Available for opportunities
        </AvailableBadge>
        <Heading variants={fadeUp}>Senior Frontend Engineer, AI enthusiast.</Heading>
        <Bio variants={fadeUp}>
          I build complex, user-facing products end-to-end — from architecture decisions to
          production delivery. My focus is React and TypeScript, with deep experience in fintech,
          banking, and AI-powered platforms.
        </Bio>
        <Bio variants={fadeUp}>
          I actively integrate AI tools into my workflow and the products I build, and I&apos;m
          looking for remote-first teams where frontend craft and product thinking go hand in hand.
        </Bio>
        <StatRow variants={statContainer}>
          {STATS.map((s) => (
            <Stat key={s} variants={fadeUp}>
              <span>▸</span>
              {s}
            </Stat>
          ))}
        </StatRow>
        <LinkRow variants={fadeUp}>
          {HERO_LINKS.map((l) => (
            <LinkButton
              key={l.href}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              {l.label}
            </LinkButton>
          ))}
        </LinkRow>
      </ContentArea>
    </Section>
  )
}
