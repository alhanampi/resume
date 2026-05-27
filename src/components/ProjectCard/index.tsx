import { useState } from 'react'

import type { Project } from '../../utils/types'

import {
  Card,
  PreviewSide,
  Chrome,
  ChromeDots,
  Dot,
  UrlBar,
  Preview,
  PreviewIframe,
  PreviewFallback,
  IndexBadge,
  InfoSide,
  CardTitle,
  CardDesc,
  Tags,
  Tag,
  Actions,
  ActionLink,
} from './ProjectCard.styles'

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
