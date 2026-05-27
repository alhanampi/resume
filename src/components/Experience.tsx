import { useState } from 'react'
import styled from 'styled-components'
import { experience } from '../data/experience'

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

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const Item = styled.div<{ $last: boolean }>`
  border-top: 1px solid ${(p) => p.theme.border};
  border-bottom: ${(p) => (p.$last ? `1px solid ${p.theme.border}` : 'none')};
`

const Toggle = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 16px;
  padding: 28px 0;
  cursor: pointer;
  text-align: left;
`

const ToggleLeft = styled.div``

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 4px;
  flex-wrap: wrap;
`

const Company = styled.span<{ $open: boolean }>`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 700;
  color: ${(p) => (p.$open ? p.theme.accent : p.theme.fg)};
  letter-spacing: -0.01em;
  transition: color 0.2s;
`

const Role = styled.span`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
`

const Summary = styled.p<{ $hidden: boolean }>`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 13px;
  color: ${(p) => p.theme.fg2};
  margin-top: 2px;
  display: ${(p) => (p.$hidden ? 'none' : 'block')};
`

const ToggleRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
`

const Period = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.02em;
  white-space: nowrap;
`

const PlusIcon = styled.span<{ $open: boolean }>`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: 18px;
  color: ${(p) => p.theme.fg2};
  display: inline-block;
  transition: transform 0.2s;
  transform: ${(p) => (p.$open ? 'rotate(45deg)' : 'none')};
`

const Details = styled.div<{ $open: boolean }>`
  overflow: hidden;
  max-height: ${(p) => (p.$open ? '600px' : '0')};
  transition: max-height 0.35s ease;
`

const DetailsInner = styled.div`
  padding-bottom: 32px;
`

const Bullets = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`

const Bullet = styled.li`
  display: flex;
  gap: 12px;
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  line-height: 1.65;
  color: ${(p) => p.theme.fg2};
  padding-right: 40px;
`

const BulletArrow = styled.span`
  color: ${(p) => p.theme.accent};
  flex-shrink: 0;
  margin-top: 1px;
`

const StackLine = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 12px;
  color: ${(p) => p.theme.fg2};
  border-top: 1px solid ${(p) => p.theme.border};
  padding-top: 16px;
`

const StackAccent = styled.span`
  color: ${(p) => p.theme.accent};
  font-weight: 500;
`

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
