import { useState } from 'react'
import styled from 'styled-components'
import type { Project } from '../data/projects'

const Card = styled.article<{ $hovered: boolean }>`
  background: ${(p) => p.theme.card};
  border: 1px solid ${(p) => (p.$hovered ? 'rgba(249,168,212,0.3)' : p.theme.border)};
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  transform: ${(p) => (p.$hovered ? 'translateY(-3px)' : 'none')};
  transition:
    border-color 0.25s,
    transform 0.25s;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const PreviewSide = styled.div`
  flex: 0 0 48%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${(p) => p.theme.border};
  overflow: hidden;

  @media (max-width: 768px) {
    flex: unset;
    border-right: none;
    border-bottom: 1px solid ${(p) => p.theme.border};
  }
`

const Chrome = styled.div`
  background: ${(p) => p.theme.bg};
  border-bottom: 1px solid ${(p) => p.theme.border};
  padding: 9px 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

const ChromeDots = styled.div`
  display: flex;
  gap: 5px;
`

const Dot = styled.div<{ $color: string }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${(p) => p.$color};
  border: 1px solid rgba(255, 255, 255, 0.06);
`

const UrlBar = styled.div`
  flex: 1;
  background: ${(p) => p.theme.card};
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 2px;
  padding: 3px 10px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 10px;
  color: ${(p) => p.theme.fg2};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 0.01em;
  opacity: 0.65;
`

const Preview = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  background: #080508;
  min-height: 240px;
`

const PreviewIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  border: none;
  transform: scale(0.5);
  transform-origin: top left;
  pointer-events: none;
`

const PreviewFallback = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  color: ${(p) => p.theme.fg2};
`

const IndexBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 12px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 10px;
  color: ${(p) => p.theme.accent};
  letter-spacing: 0.08em;
  background: rgba(12, 10, 11, 0.82);
  padding: 2px 6px;
  border-radius: 2px;
  opacity: 0.8;
`

const InfoSide = styled.div`
  flex: 1;
  padding: 28px 28px 24px;
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h3`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: 20px;
  font-weight: 600;
  color: ${(p) => p.theme.fg};
  margin-bottom: 12px;
  letter-spacing: -0.01em;
`

const CardDesc = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 14px;
  line-height: 1.65;
  color: ${(p) => p.theme.fg2};
  margin-bottom: 24px;
  flex: 1;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 24px;
`

const Tag = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: rgba(249, 168, 212, 0.7);
  background: rgba(249, 168, 212, 0.07);
  padding: 3px 8px;
  border-radius: 2px;
  border: 1px solid rgba(249, 168, 212, 0.12);
`

const Actions = styled.div`
  display: flex;
  gap: 10px;
`

const ActionLink = styled.a<{ $primary?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-radius: 2px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  font-weight: ${(p) => (p.$primary ? 500 : 400)};
  letter-spacing: 0.04em;
  transition:
    opacity 0.2s,
    border-color 0.2s,
    color 0.2s;

  ${(p) =>
    p.$primary
      ? `
    background: ${p.theme.accent};
    color: ${p.theme.bg};
    &:hover { opacity: 0.82; }
  `
      : `
    border: 1px solid ${p.theme.border};
    color: ${p.theme.fg2};
    &:hover { border-color: rgba(249,168,212,0.3); color: ${p.theme.fg}; }
  `}
`

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const [iframeError, setIframeError] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <Card
      $hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PreviewSide>
        <Chrome>
          <ChromeDots>
            {['#3a2730', '#3a302a', '#2a3a2d'].map((c, i) => (
              <Dot key={i} $color={c} />
            ))}
          </ChromeDots>
          <UrlBar>{project.liveUrl.replace('https://', '')}</UrlBar>
        </Chrome>

        <Preview>
          {!iframeError ? (
            <PreviewIframe
              src={project.liveUrl}
              title={project.name}
              onError={() => setIframeError(true)}
            />
          ) : (
            <PreviewFallback>
              <span style={{ fontSize: 24, opacity: 0.2 }}>◇</span>preview unavailable
            </PreviewFallback>
          )}
          <IndexBadge>{String(index + 1).padStart(2, '0')}</IndexBadge>
        </Preview>
      </PreviewSide>

      <InfoSide>
        <CardTitle>{project.name}</CardTitle>
        <CardDesc>{project.description}</CardDesc>
        <Tags>
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </Tags>
        <Actions>
          <ActionLink $primary href={project.liveUrl} target="_blank" rel="noreferrer">
            live demo →
          </ActionLink>
          <ActionLink href={project.githubUrl} target="_blank" rel="noreferrer">
            github →
          </ActionLink>
        </Actions>
      </InfoSide>
    </Card>
  )
}
