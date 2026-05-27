import styled from 'styled-components'
import { motion } from 'motion/react'

export const Section = styled(motion.section)`
  border-top: 1px solid ${(p) => p.theme.border};
  padding: 112px 64px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`

export const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
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
  margin-bottom: 16px;
  line-height: 1.1;
`

export const Lead = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 19px;
  color: ${(p) => p.theme.fg2};
  margin-bottom: 64px;
  max-width: 540px;
  line-height: 1.7;
`

export const Grid = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
