import styled from 'styled-components'

export const Section = styled.section<{ $visible: boolean }>`
  border-top: 1px solid ${(p) => p.theme.border};
  padding: 112px 64px;
  max-width: 1200px;
  margin: 0 auto;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => (p.$visible ? 'translateY(0)' : 'translateY(32px)')};
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`

export const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
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

export const Slash = styled.span`
  color: ${(p) => p.theme.accent};
  margin-right: 4px;
`

export const Num = styled.span`
  color: ${(p) => p.theme.accent};
`

export const Heading = styled.h2`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(42px, 4.5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.fg};
  margin-bottom: 32px;
  line-height: 1.1;
  max-width: 720px;
`

export const Bio = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 19px;
  color: ${(p) => p.theme.fg2};
  line-height: 1.75;
  max-width: 620px;
  margin-bottom: 20px;
`

export const StatRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 48px;
`

export const Stat = styled.div`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fg2};
  border: 1px solid ${(p) => p.theme.border};
  padding: 8px 16px;
  border-radius: 2px;

  span {
    color: ${(p) => p.theme.accent};
    margin-right: 8px;
  }
`
