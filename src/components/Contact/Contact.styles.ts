import styled from 'styled-components'
import { motion } from 'motion/react'

export const Outer = styled.div`
  background: ${(p) => p.theme.bg2};
  border-top: 1px solid ${(p) => p.theme.border};
`

export const Inner = styled(motion.section)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 112px 64px;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  font-size: clamp(36px, 5.5vw, 72px);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.fg};
  line-height: 1.05;
  margin-bottom: 40px;
  max-width: 700px;
`

export const Lead = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 17px;
  color: ${(p) => p.theme.fg2};
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 56px;
`

export const ContactList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-width: 480px;
`

export const ContactRow = styled(motion.a)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid ${(p) => p.theme.border};
  transition: padding-left 0.2s;

  &:hover {
    padding-left: 12px;
  }

  &:hover .contact-label {
    color: ${(p) => p.theme.accent};
  }
`

export const ContactLabel = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fg2};
  transition: color 0.2s;
  min-width: 90px;
`

export const ContactValue = styled.span`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 16px;
  color: ${(p) => p.theme.fg};
  letter-spacing: 0.01em;
`

export const Arrow = styled.span`
  color: ${(p) => p.theme.fg2};
  font-size: 14px;
`

export const Footer = styled(motion.p)`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  color: ${(p) => p.theme.fg2};
  margin-top: 80px;
  letter-spacing: 0.04em;
  opacity: 0.4;
`
