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
  max-width: 520px;
  line-height: 1.7;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`

export const Column = styled.div``

export const ColTitle = styled.h3`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.accent};
  margin-bottom: 28px;
  text-transform: uppercase;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

export const CertItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  border-top: 1px solid ${(p) => p.theme.border};

  &:last-child {
    border-bottom: 1px solid ${(p) => p.theme.border};
  }
`

export const CertLeft = styled.div``

export const CertTitle = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.fg};
  line-height: 1.4;
  margin-bottom: 4px;
`

export const CertIssuer = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 13px;
  color: ${(p) => p.theme.fg2};
`

export const CertDate = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  color: ${(p) => p.theme.fg2};
  white-space: nowrap;
  letter-spacing: 0.02em;
`

export const EduItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  gap: 16px;
  padding: 18px 0;
  border-top: 1px solid ${(p) => p.theme.border};

  &:last-child {
    border-bottom: 1px solid ${(p) => p.theme.border};
  }
`

export const EduLeft = styled.div``

export const EduTitle = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => p.theme.fg};
  margin-bottom: 4px;
`

export const EduInstitution = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 13px;
  color: ${(p) => p.theme.fg2};
`

export const EduYear = styled.span<{ $inProgress: boolean }>`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  color: ${(p) => (p.$inProgress ? p.theme.accent : p.theme.fg2)};
  white-space: nowrap;
  letter-spacing: 0.02em;
`
