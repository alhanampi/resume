import { useInView } from '../../hooks/useInView'
import { STATS } from './Me.constants'
import { Section, SectionLabel, Slash, Num, Heading, Bio, StatRow, Stat } from './Me.styles'

export default function Me() {
  const [ref, visible] = useInView()

  return (
    <Section ref={ref} id="me" $visible={visible}>
      <SectionLabel>
        <Slash>//</Slash>
        <Num>&nbsp;01.</Num>&nbsp;me
      </SectionLabel>
      <Heading>Senior Frontend Engineer, AI enthusiast.</Heading>
      <Bio>
        I build complex, user-facing products end-to-end — from architecture decisions to
        production delivery. My focus is React and TypeScript, with deep experience in fintech,
        banking, and AI-powered platforms.
      </Bio>
      <Bio>
        I actively integrate AI tools into my workflow and the products I build, and I'm looking
        for remote-first teams where frontend craft and product thinking go hand in hand.
      </Bio>
      <StatRow>
        {STATS.map((s) => (
          <Stat key={s}>
            <span>▸</span>
            {s}
          </Stat>
        ))}
      </StatRow>
    </Section>
  )
}
