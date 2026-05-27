import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`

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

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const SkeletonCard = styled.div`
  height: 320px;
  border-radius: 3px;
  border: 1px solid ${(p) => p.theme.border};
  background: linear-gradient(
    90deg,
    ${(p) => p.theme.card} 25%,
    ${(p) => p.theme.border} 50%,
    ${(p) => p.theme.card} 75%
  );
  background-size: 1200px 100%;
  animation: ${shimmer} 1.8s ease-in-out infinite;
`
