import { useRef, useState } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

import type { Project } from '../../utils/types'

import {
  Card,
  PreviewSide,
  Chrome,
  ChromeDots,
  Dot,
  UrlBar,
  Preview,
  PreviewImg,
  PreviewGradient,
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
  const [imgError, setImgError] = useState(false)
  const cardRef = useRef<HTMLElement>(null)

  const rotateXVal = useMotionValue(0)
  const rotateYVal = useMotionValue(0)
  const rotateX = useSpring(rotateXVal, { stiffness: 200, damping: 25 })
  const rotateY = useSpring(rotateYVal, { stiffness: 200, damping: 25 })

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = cardRef.current!.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    rotateYVal.set(x * 6)
    rotateXVal.set(-y * 6)
  }

  function handleMouseLeave() {
    rotateXVal.set(0)
    rotateYVal.set(0)
  }

  return (
    <Card
      ref={cardRef}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
          {imgError ? (
            <PreviewGradient $index={index} />
          ) : (
            <PreviewImg
              src={`/previews/${project.githubUrl.split('/').pop()}.png`}
              alt={project.name}
              onError={() => setImgError(true)}
            />
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
