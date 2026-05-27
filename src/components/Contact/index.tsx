import { CONTACT_LINKS } from '../../constants'

import {
  Outer,
  Inner,
  SectionLabel,
  Slash,
  Num,
  Heading,
  Lead,
  ContactList,
  ContactRow,
  ContactLabel,
  ContactValue,
  Arrow,
  Footer,
} from './Contact.styles'

export default function Contact() {
  return (
    <Outer>
      <Inner id="contact">
        <SectionLabel>
          <Slash>//</Slash>
          <Num>&nbsp;05.</Num>&nbsp;contact
        </SectionLabel>
        <Heading>Let's build something great.</Heading>
        <Lead>
          Open to senior frontend roles, AI-driven product teams, and remote-first opportunities.
          Based in Argentina — available worldwide.
        </Lead>

        <ContactList>
          {CONTACT_LINKS.map((c) => (
            <ContactRow
              key={c.href}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <ContactLabel className="contact-label">{c.label}</ContactLabel>
              <ContactValue>{c.value}</ContactValue>
              <Arrow>→</Arrow>
            </ContactRow>
          ))}
        </ContactList>

        <Footer>
          // pamina.goldenberg.thiery · senior frontend developer · buenos aires · 2026
        </Footer>
      </Inner>
    </Outer>
  )
}
