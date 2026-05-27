import styled from 'styled-components'

export const Section = styled.section`
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

export const Slash = styled.span`
  color: ${(p) => p.theme.accent};
  margin-right: 4px;
`

export const Num = styled.span`
  color: ${(p) => p.theme.accent};
`

export const Heading = styled.h2`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.fg};
  margin-bottom: 16px;
  line-height: 1.1;
`

export const Lead = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 15px;
  color: ${(p) => p.theme.fg2};
  margin-bottom: 64px;
  max-width: 520px;
  line-height: 1.7;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const Item = styled.div<{ $last: boolean }>`
  border-top: 1px solid ${(p) => p.theme.border};
  border-bottom: ${(p) => (p.$last ? `1px solid ${p.theme.border}` : 'none')};
`

export const Toggle = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 16px;
  padding: 28px 0;
  cursor: pointer;
  text-align: left;
`

export const ToggleLeft = styled.div``

export const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 4px;
  flex-wrap: wrap;
`

export const Company = styled.span<{ $open: boolean }>`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(20px, 2.4vw, 28px);
  font-weight: 700;
  color: ${(p) => (p.$open ? p.theme.accent : p.theme.fg)};
  letter-spacing: -0.01em;
  transition: color 0.2s;
`

export const Role = styled.span`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
`

export const Summary = styled.p<{ $hidden: boolean }>`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 13px;
  color: ${(p) => p.theme.fg2};
  margin-top: 2px;
  display: ${(p) => (p.$hidden ? 'none' : 'block')};
`

export const ToggleRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
`

export const Period = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.02em;
  white-space: nowrap;
`

export const PlusIcon = styled.span<{ $open: boolean }>`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: 18px;
  color: ${(p) => p.theme.fg2};
  display: inline-block;
  transition: transform 0.2s;
  transform: ${(p) => (p.$open ? 'rotate(45deg)' : 'none')};
`

export const Details = styled.div<{ $open: boolean }>`
  overflow: hidden;
  max-height: ${(p) => (p.$open ? '600px' : '0')};
  transition: max-height 0.35s ease;
`

export const DetailsInner = styled.div`
  padding-bottom: 32px;
`

export const Bullets = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`

export const Bullet = styled.li`
  display: flex;
  gap: 12px;
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  line-height: 1.65;
  color: ${(p) => p.theme.fg2};
  padding-right: 40px;
`

export const BulletArrow = styled.span`
  color: ${(p) => p.theme.accent};
  flex-shrink: 0;
  margin-top: 1px;
`

export const StackLine = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 12px;
  color: ${(p) => p.theme.fg2};
  border-top: 1px solid ${(p) => p.theme.border};
  padding-top: 16px;
`

export const StackAccent = styled.span`
  color: ${(p) => p.theme.accent};
  font-weight: 500;
`
