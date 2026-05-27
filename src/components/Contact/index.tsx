import { motion } from 'motion/react'

import { CONTACT_LINKS } from '../../constants'
import { fadeUp, fadeIn, stagger, viewport } from '../../animations/variants'
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
      <Inner
        id="contact"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeIn}>
          <SectionLabel>
            <Slash>//</Slash>
            <Num>&nbsp;06.</Num>&nbsp;contact
          </SectionLabel>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Heading>Let&apos;s build something great.</Heading>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Lead>
            Open to senior frontend roles, AI-driven product teams, and remote-first opportunities.
            Based in Argentina — available worldwide.
          </Lead>
        </motion.div>

        <ContactList variants={stagger}>
          {CONTACT_LINKS.map((c) => (
            <ContactRow
              key={c.href}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              variants={fadeUp}
            >
              <ContactLabel className="contact-label">{c.label}</ContactLabel>
              <ContactValue>{c.value}</ContactValue>
              <Arrow>→</Arrow>
            </ContactRow>
          ))}
        </ContactList>

        <Footer variants={fadeUp}>
          // pamina.goldenberg.thiery · senior frontend developer · buenos aires · 2026
        </Footer>
      </Inner>
    </Outer>
  )
}
