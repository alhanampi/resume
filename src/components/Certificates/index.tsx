import { motion } from 'motion/react'

import { certificates, education } from '../../data/certificates'
import { fadeUp, fadeIn, stagger, staggerFast, viewport } from '../../animations/variants'
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
  return (
    <Section
      id="certificates"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div variants={fadeIn}>
        <SectionLabel>
          <Slash>//</Slash>
          <Num>&nbsp;05.</Num>&nbsp;learning
        </SectionLabel>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Heading>Certifications & Education</Heading>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Lead>
          Continuously upskilling across AI, data, and frontend — formal training and self-directed
          learning side by side.
        </Lead>
      </motion.div>

      <Grid>
        <Column variants={staggerFast}>
          <motion.div variants={fadeUp}>
            <ColTitle>Certifications</ColTitle>
          </motion.div>
          <List>
            {certificates.map((cert, i) => (
              <CertItem key={i} variants={fadeUp}>
                <CertLeft>
                  <CertTitle>{cert.title}</CertTitle>
                  <CertIssuer>{cert.issuer}</CertIssuer>
                </CertLeft>
                <CertDate>{cert.date}</CertDate>
              </CertItem>
            ))}
          </List>
        </Column>

        <Column variants={staggerFast}>
          <motion.div variants={fadeUp}>
            <ColTitle>Education</ColTitle>
          </motion.div>
          <List>
            {education.map((deg, i) => (
              <EduItem key={i} variants={fadeUp}>
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
