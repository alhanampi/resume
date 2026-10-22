import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import {
  fadeUp,
  fadeIn,
  stagger,
  staggerFast,
  viewport,
  panelVariants,
} from '../../animations/variants'

import { certificates, education } from '../../data/certificates'
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
  ExtraList,
  ToggleButton,
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

const VISIBLE_CERTS = 8

export default function Certificates() {
  const [showAll, setShowAll] = useState(false)
  const visibleCerts = certificates.slice(0, VISIBLE_CERTS)
  const extraCerts = certificates.slice(VISIBLE_CERTS)

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
            {visibleCerts.map((cert) => (
              <CertItem key={cert.title} variants={fadeUp}>
                <CertLeft>
                  <CertTitle>{cert.title}</CertTitle>
                  <CertIssuer>{cert.issuer}</CertIssuer>
                </CertLeft>
                <CertDate>{cert.date}</CertDate>
              </CertItem>
            ))}
          </List>
          <AnimatePresence initial={false}>
            {showAll && (
              <ExtraList
                id="extra-certificates"
                key="extra-certificates"
                initial="closed"
                animate="open"
                exit="closed"
                variants={panelVariants}
                style={{ overflow: 'hidden' }}
              >
                {extraCerts.map((cert) => (
                  <CertItem key={cert.title}>
                    <CertLeft>
                      <CertTitle>{cert.title}</CertTitle>
                      <CertIssuer>{cert.issuer}</CertIssuer>
                    </CertLeft>
                    <CertDate>{cert.date}</CertDate>
                  </CertItem>
                ))}
              </ExtraList>
            )}
          </AnimatePresence>
          {extraCerts.length > 0 && (
            <motion.div variants={fadeUp}>
              <ToggleButton
                type="button"
                aria-expanded={showAll}
                aria-controls="extra-certificates"
                onClick={() => setShowAll((prev) => !prev)}
              >
                {showAll ? 'show less ↑' : `show all (${certificates.length}) ↓`}
              </ToggleButton>
            </motion.div>
          )}
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
