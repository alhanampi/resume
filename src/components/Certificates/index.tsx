import { certificates, education } from '../../data/certificates'
import { useInView } from '../../hooks/useInView'

import {
  Section,
  SectionLabel,
  Slash,
  Num,
  Heading,
  Lead,
  Grid,
  Column,
  ColTitle,
  List,
  CertItem,
  CertLeft,
  CertTitle,
  CertIssuer,
  CertDate,
  EduItem,
  EduLeft,
  EduTitle,
  EduInstitution,
  EduYear,
} from './Certificates.styles'

export default function Certificates() {
  const [ref, visible] = useInView()
  return (
    <Section ref={ref} id="certificates" $visible={visible}>
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
