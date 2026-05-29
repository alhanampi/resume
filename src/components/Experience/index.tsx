import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import { experience } from '../../data/experience'
import { fadeUp, fadeIn, stagger, viewport } from '../../animations/variants'
import { panelVariants } from './Experience.constants'
import {
  Section,
  SectionLabel,
  Slash,
  Num,
  Heading,
  Lead,
  List,
  Item,
  Toggle,
  ToggleLeft,
  TitleRow,
  Company,
  Role,
  Summary,
  ToggleRight,
  Period,
  PlusIcon,
  DetailsInner,
  Bullets,
  Bullet,
  BulletArrow,
  StackLine,
  StackAccent,
} from './Experience.styles'


export default function Experience() {
  const [expanded, setExpanded] = useState<string | null>('GlobalLogic-0')

  return (
    <Section
      id="experience"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div variants={fadeIn}>
        <SectionLabel>
          <Slash>//</Slash>
          <Num>&nbsp;04.</Num>&nbsp;experience
        </SectionLabel>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Heading>Work History</Heading>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Lead>
          6+ years across fintech, banking, AI platforms, and education — building and shipping at
          scale.
        </Lead>
      </motion.div>

      <List>
        {experience.map((job, i) => {
          const key = `${job.company}-${i}`
          const isOpen = expanded === key
          return (
            <Item key={key} $last={i === experience.length - 1} $open={isOpen} variants={fadeUp}>
              <Toggle onClick={() => setExpanded(isOpen ? null : key)}>
                <ToggleLeft>
                  <TitleRow>
                    <Company $open={isOpen}>{job.company}</Company>
                    <Role>— {job.role}</Role>
                  </TitleRow>
                  <Summary $hidden={isOpen}>{job.description}</Summary>
                </ToggleLeft>
                <ToggleRight>
                  <Period>{job.period}</Period>
                  <PlusIcon $open={isOpen}>+</PlusIcon>
                </ToggleRight>
              </Toggle>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="details"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={panelVariants}
                    style={{ overflow: 'hidden' }}
                  >
                    <DetailsInner>
                      <Bullets>
                        {job.bullets.map((b, bi) => (
                          <Bullet key={bi}>
                            <BulletArrow>▸</BulletArrow>
                            {b}
                          </Bullet>
                        ))}
                      </Bullets>
                      {job.stack && (
                        <StackLine>
                          <StackAccent>Stack:</StackAccent> {job.stack}
                        </StackLine>
                      )}
                    </DetailsInner>
                  </motion.div>
                )}
              </AnimatePresence>
            </Item>
          )
        })}
      </List>
    </Section>
  )
}
