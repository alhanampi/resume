import styled from 'styled-components'
import { certificates, education } from '../data/certificates'

const Section = styled.section`
  border-top: 1px solid ${(p) => p.theme.border};
  padding: 112px 64px;
  max-width: 1200px;
  margin: 0 auto;

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
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.fg};
  margin-bottom: 16px;
  line-height: 1.1;
`

const Lead = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 15px;
  color: ${(p) => p.theme.fg2};
  margin-bottom: 64px;
  max-width: 520px;
  line-height: 1.7;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`

const Column = styled.div``

const ColTitle = styled.h3`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.accent};
  margin-bottom: 28px;
  text-transform: uppercase;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const CertItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  border-top: 1px solid ${(p) => p.theme.border};

  &:last-child {
    border-bottom: 1px solid ${(p) => p.theme.border};
  }
`

const CertLeft = styled.div``

const CertTitle = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.fg};
  line-height: 1.4;
  margin-bottom: 4px;
`

const CertIssuer = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 12px;
  color: ${(p) => p.theme.fg2};
`

const CertDate = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  color: ${(p) => p.theme.fg2};
  white-space: nowrap;
  letter-spacing: 0.02em;
`

const EduItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  border-top: 1px solid ${(p) => p.theme.border};

  &:last-child {
    border-bottom: 1px solid ${(p) => p.theme.border};
  }
`

const EduLeft = styled.div``

const EduTitle = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.fg};
  margin-bottom: 4px;
`

const EduInstitution = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 12px;
  color: ${(p) => p.theme.fg2};
`

const EduYear = styled.span<{ $inProgress: boolean }>`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  color: ${(p) => (p.$inProgress ? p.theme.accent : p.theme.fg2)};
  white-space: nowrap;
  letter-spacing: 0.02em;
`

export default function Certificates() {
  return (
    <Section id="certificates">
      <SectionLabel>
        <Slash>//</Slash>
        <Num>&nbsp;04.</Num>&nbsp;learning
      </SectionLabel>
      <Heading>Certifications & Education</Heading>
      <Lead>
        Continuously upskilling across AI, data, and frontend — formal training and self-directed
        learning side by side.
      </Lead>

      <Grid>
        <Column>
          <ColTitle>Certifications</ColTitle>
          <List>
            {certificates.map((cert, i) => (
              <CertItem key={i}>
                <CertLeft>
                  <CertTitle>{cert.title}</CertTitle>
                  <CertIssuer>{cert.issuer}</CertIssuer>
                </CertLeft>
                <CertDate>{cert.date}</CertDate>
              </CertItem>
            ))}
          </List>
        </Column>

        <Column>
          <ColTitle>Education</ColTitle>
          <List>
            {education.map((deg, i) => (
              <EduItem key={i}>
                <EduLeft>
                  <EduTitle>{deg.title}</EduTitle>
                  <EduInstitution>{deg.institution}</EduInstitution>
                </EduLeft>
                <EduYear $inProgress={deg.year === 'In Progress'}>{deg.year}</EduYear>
              </EduItem>
            ))}
          </List>
        </Column>
      </Grid>
    </Section>
  )
}
