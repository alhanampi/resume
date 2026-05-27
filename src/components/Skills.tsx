import styled from 'styled-components'
import { skills } from '../data/skills'

// Full-width background — separate from the inner container
const Outer = styled.div`
  background: ${(p) => p.theme.bg2};
  border-top: 1px solid ${(p) => p.theme.border};
  border-bottom: 1px solid ${(p) => p.theme.border};
`

const Inner = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 112px 64px;

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
  margin-bottom: 64px;
  line-height: 1.1;
`

const CatList = styled.div`
  display: flex;
  flex-direction: column;
`

const CategoryRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 48px;
  padding: 24px 0;
  border-top: 1px solid ${(p) => p.theme.border};

  &:last-child {
    border-bottom: 1px solid ${(p) => p.theme.border};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 20px 0;
  }
`

const CatLabel = styled.p`
  flex: 0 0 160px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fg2};
  padding-top: 6px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`

const TagRow = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
`

const Pill = styled.span`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 12px;
  font-weight: 400;
  color: ${(p) => p.theme.fg};
  background: ${(p) => p.theme.card};
  border: 1px solid ${(p) => p.theme.border};
  padding: 5px 12px;
  border-radius: 2px;
  letter-spacing: 0.01em;
  white-space: nowrap;
`

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
