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

export default function Hero() {
  return (
    <Section id="me">
      <CodeComment>
        <span>// </span>system.init
      </CodeComment>

      <NameBlock>
        {WORDS.map((word) => (
          <NameLine key={word}>{word}</NameLine>
        ))}
        <NameUnderline />
      </NameBlock>

      <ContentArea>
        <AvailableBadge>
          <AvailableDot />
          Available for opportunities
        </AvailableBadge>
        <Heading>Senior Frontend Engineer, AI enthusiast.</Heading>
        <Bio>
          I build complex, user-facing products end-to-end — from architecture decisions to
          production delivery. My focus is React and TypeScript, with deep experience in fintech,
          banking, and AI-powered platforms.
        </Bio>
        <Bio>
          I actively integrate AI tools into my workflow and the products I build, and I&apos;m
          looking for remote-first teams where frontend craft and product thinking go hand in hand.
        </Bio>
        <StatRow>
          {STATS.map((s) => (
            <Stat key={s}>
              <span>▸</span>
              {s}
            </Stat>
          ))}
        </StatRow>
        <LinkRow>
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
