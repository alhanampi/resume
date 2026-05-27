import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiHtml5,
  SiCss,
  SiSass,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiJest,
  SiVitest,
  SiCypress,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGithubcopilot,
  SiPostman,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

import { skills } from '../../data/skills'
import { useInView } from '../../hooks/useInView'

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

const ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  'React Native': SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Vite: SiVite,
  HTML: SiHtml5,
  CSS: SiCss,
  Sass: SiSass,
  Redux: SiRedux,
  'Material UI': SiMui,
  'Tailwind CSS': SiTailwindcss,
  Jest: SiJest,
  Vitest: SiVitest,
  Cypress: SiCypress,
  Postman: SiPostman,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  'GitHub Copilot': SiGithubcopilot,
}

export default function Skills() {
  const [ref, visible] = useInView()

  return (
    <Outer ref={ref} $visible={visible}>
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
