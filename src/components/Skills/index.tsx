import { motion } from 'motion/react'

import { fadeUp, fadeIn, stagger, viewport } from '../../animations/variants'
import { ICON_MAP } from './Skills.constants'

import { skills } from '../../data/skills'

import {
  Outer,
  Inner,
  SectionLabel,
  Slash,
  Num,
  Heading,
  CatList,
  CategoryRow,
  CatLabel,
  TagRow,
  Pill,
} from './Skills.styles'

export default function Skills() {
  return (
    <Outer>
      <Inner
        id="skills"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={fadeIn}>
          <SectionLabel>
            <Slash>//</Slash>
            <Num>&nbsp;03.</Num>&nbsp;stack
          </SectionLabel>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Heading>Technical Stack</Heading>
        </motion.div>
        <CatList>
          {skills.map((cat) => (
            <CategoryRow key={cat.label} variants={fadeUp}>
              <CatLabel>{cat.label}</CatLabel>
              <TagRow>
                {cat.items.map((item) => {
                  const Icon = ICON_MAP[item]
                  return (
                    <Pill key={item}>
                      {Icon && <Icon size={13} />}
                      {item}
                    </Pill>
                  )
                })}
              </TagRow>
            </CategoryRow>
          ))}
        </CatList>
      </Inner>
    </Outer>
  )
}
