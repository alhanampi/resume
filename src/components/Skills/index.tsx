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
      <Inner id="skills">
        <SectionLabel>
          <Slash>//</Slash>
          <Num>&nbsp;02.</Num>&nbsp;stack
        </SectionLabel>
        <Heading>Technical Stack</Heading>
        <CatList>
          {skills.map((cat) => (
            <CategoryRow key={cat.label}>
              <CatLabel>{cat.label}</CatLabel>
              <TagRow>
                {cat.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </TagRow>
            </CategoryRow>
          ))}
        </CatList>
      </Inner>
    </Outer>
  )
}
