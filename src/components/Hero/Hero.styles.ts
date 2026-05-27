import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  width: 100%;
  background: ${(p) => p.theme.bg};
  padding: 0 64px;

  @media (max-width: 600px) {
    padding: 0 24px;
  }
`

export const CodeComment = styled.div`
  padding-top: 32px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.02em;

  span {
    color: ${(p) => p.theme.accent};
  }
`

export const NameBlock = styled.div`
  width: fit-content;
  padding-top: min(18vh, 140px);
`

export const NameLine = styled.span`
  display: block;
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(48px, 14.8vw, 136px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.fg};
  line-height: 1.13;
  white-space: nowrap;
`

export const NameUnderline = styled.div`
  height: 1.5px;
  width: 100%;
  background: ${(p) => p.theme.accent};
  margin-top: 28px;
`

export const ContentArea = styled.div`
  padding: 48px 0 80px;
`

export const AvailableBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4ade80;
  padding: 12px 0;
  margin-bottom: 12px;
`

export const AvailableDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  flex-shrink: 0;
`

export const Heading = styled.h1`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.fg};
  margin-bottom: 24px;
  line-height: 1.1;
  max-width: 720px;
`

export const Bio = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: clamp(15px, 1.6vw, 18px);
  color: ${(p) => p.theme.fg2};
  line-height: 1.75;
  max-width: 620px;
  margin-bottom: 20px;
`

export const StatRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 40px;
  margin-bottom: 32px;
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
