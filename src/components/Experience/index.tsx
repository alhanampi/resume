import { useState } from 'react'

import { experience } from '../../data/experience'

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
  Details,
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
    <Section id="experience">
      <SectionLabel>
        <Slash>//</Slash>
        <Num>&nbsp;03.</Num>&nbsp;experience
      </SectionLabel>
      <Heading>Work History</Heading>
      <Lead>
        6+ years across fintech, banking, AI platforms, and education — building and shipping at
        scale.
      </Lead>

      <List>
        {experience.map((job, i) => {
          const key = `${job.company}-${i}`
          const isOpen = expanded === key
          return (
            <Item key={key} $last={i === experience.length - 1}>
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
              <Details $open={isOpen}>
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
              </Details>
            </Item>
          )
        })}
      </List>
    </Section>
  )
}
