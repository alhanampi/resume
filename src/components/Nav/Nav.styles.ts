import styled from 'styled-components'
import { motion } from 'motion/react'

export const Wrapper = styled(motion.nav)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
  padding: 0 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: ${(p) => (p.$scrolled ? 'rgba(12,10,11,0.88)' : 'transparent')};
  backdrop-filter: ${(p) => (p.$scrolled ? 'blur(14px)' : 'none')};
  border-bottom: 1px solid ${(p) => (p.$scrolled ? p.theme.border : 'transparent')};
  transition:
    background 0.3s,
    border-color 0.3s,
    backdrop-filter 0.3s;

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 400px) {
    padding: 0 16px;
  }
`

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 600px) {
    gap: 20px;
  }
`

export const NavLink = styled.a<{ $active: boolean }>`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: ${(p) => (p.$active ? p.theme.accent : p.theme.fg2)};
  transition: color 0.2s;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 11px;
  }

  &:hover {
    color: ${(p) => p.theme.fg};
  }
`
