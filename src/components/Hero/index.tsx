import { fadeIn } from '../../animations/variants'
import { HERO_LINKS } from '../../constants'
import { useScramble } from '../../hooks/useScramble'
import {
  WORDS,
  STATS,
  nameContainer,
  nameItem,
  underlineVariant,
  contentContainer,
  heroFadeIn,
  heroFadeUp,
  statContainer,
} from './Hero.constants'

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

export default function Hero() {
  const scrambled = useScramble('system.init', 300)

  return (
    <Section id="me" initial="hidden" animate="visible">
      <CodeComment variants={heroFadeIn}>
        <span>// </span>{scrambled}
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
        <Heading variants={heroFadeUp}>Senior Frontend Engineer, AI enthusiast.</Heading>
        <Bio variants={heroFadeUp}>
          I build complex, user-facing products end-to-end — from architecture decisions to
          production delivery. My focus is React and TypeScript, with deep experience in fintech,
          banking, and AI-powered platforms.
        </Bio>
        <Bio variants={heroFadeUp}>
          I actively integrate AI tools into my workflow and the products I build, and I&apos;m
          looking for remote-first teams where frontend craft and product thinking go hand in hand.
        </Bio>
        <StatRow variants={statContainer}>
          {STATS.map((s) => (
            <Stat key={s} variants={heroFadeUp}>
              <span>▸</span>
              {s}
            </Stat>
          ))}
        </StatRow>
        <LinkRow variants={heroFadeUp}>
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
