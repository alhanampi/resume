import styled from 'styled-components'

const Outer = styled.div`
  background: ${(p) => p.theme.bg2};
  border-top: 1px solid ${(p) => p.theme.border};
`

const Inner = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 112px 64px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${(p) => p.theme.fg2};
  margin-bottom: 48px;

  &::after {
    content: '';
    display: block;
    height: 1px;
    background: ${(p) => p.theme.border};
    width: 80px;
    margin-left: 16px;
  }
`

const Slash = styled.span`
  color: ${(p) => p.theme.accent};
  margin-right: 4px;
`
const Num = styled.span`
  color: ${(p) => p.theme.accent};
`

const Heading = styled.h2`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(36px, 5.5vw, 72px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.fg};
  line-height: 1.05;
  margin-bottom: 40px;
  max-width: 700px;
`

const Lead = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 15px;
  color: ${(p) => p.theme.fg2};
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 56px;
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
`

const ContactRow = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0 18px 0;
  border-bottom: 1px solid ${(p) => p.theme.border};
  transition: padding-left 0.2s;

  &:hover {
    padding-left: 12px;
  }

  &:hover .contact-label {
    color: ${(p) => p.theme.accent};
  }
`

const ContactLabel = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fg2};
  transition: color 0.2s;
  min-width: 90px;
`

const ContactValue = styled.span`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  color: ${(p) => p.theme.fg};
  letter-spacing: 0.01em;
`

const Arrow = styled.span`
  color: ${(p) => p.theme.fg2};
  font-size: 14px;
`

const Footer = styled.p`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  color: ${(p) => p.theme.fg2};
  margin-top: 80px;
  letter-spacing: 0.04em;
  opacity: 0.4;
`

const contacts = [
  { label: 'email', value: 'alhanampi@gmail.com', href: 'mailto:alhanampi@gmail.com' },
  { label: 'github', value: 'github.com/alhanampi', href: 'https://github.com/alhanampi' },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/paminagoldenberg-thiery',
    href: 'https://linkedin.com/in/paminagoldenberg-thiery',
  },
]

export default function Contact() {
  return (
    <Outer>
      <Inner id="contact">
        <SectionLabel>
          <Slash>//</Slash>
          <Num>&nbsp;04.</Num>&nbsp;contact
        </SectionLabel>
        <Heading>Let's build something great.</Heading>
        <Lead>
          Open to senior frontend roles, AI-driven product teams, and remote-first opportunities.
          Based in Argentina — available worldwide.
        </Lead>

        <ContactList>
          {contacts.map((c) => (
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
