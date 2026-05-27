import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`

export const pulseLine = keyframes`
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50%       { opacity: 0.2; transform: scaleY(0.45); }
`

export { fadeUp }

export const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 560px;
  overflow: hidden;
  background: ${(p) => p.theme.bg};
`

export const CodeComment = styled.div`
  position: absolute;
  top: 96px;
  left: 64px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.02em;
  z-index: 1;

  span {
    color: ${(p) => p.theme.accent};
  }

  @media (max-width: 600px) {
    left: 24px;
    top: 80px;
  }
`

export const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

export const SubtitleArea = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 80px;
  left: 64px;
  right: 64px;
  z-index: 1;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => (p.$visible ? 'translateY(0)' : 'translateY(18px)')};
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  @media (max-width: 600px) {
    left: 24px;
    right: 24px;
    bottom: 60px;
  }
`

export const Subtitle = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: clamp(15px, 1.6vw, 18px);
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.01em;
  margin-bottom: 32px;
  max-width: 520px;
  line-height: 1.75;
`

export const LinkRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 9px 18px;
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 2px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 13px;
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.03em;
  transition:
    border-color 0.2s,
    color 0.2s,
    background 0.2s;

  &:hover {
    border-color: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.accentDim};
  }
`

export const ScrollIndicator = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 24px;
  left: 64px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${(p) => (p.$visible ? 0.35 : 0)};
  transition: opacity 0.8s ease 0.5s;

  @media (max-width: 600px) {
    left: 24px;
  }
`

export const ScrollLine = styled.div`
  width: 1px;
  height: 36px;
  background: ${(p) => p.theme.fg2};
  animation: ${pulseLine} 2s ease-in-out infinite;
`

export const ScrollLabel = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fg2};
`
