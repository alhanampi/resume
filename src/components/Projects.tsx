import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { projects as staticProjects, type Project } from '../data/projects'
import ProjectCard from './ProjectCard'

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`

const Section = styled.section`
  border-top: 1px solid ${(p) => p.theme.border};
  padding: 112px 64px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 72px 24px;
  }
`

const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
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

const Slash = styled.span`
  color: ${(p) => p.theme.accent};
  margin-right: 4px;
`
const Num = styled.span`
  color: ${(p) => p.theme.accent};
`

const Heading = styled.h2`
  font-family: ${(p) => p.theme.fontDisplay};
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.fg};
  margin-bottom: 16px;
  line-height: 1.1;
`

const Lead = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: 15px;
  color: ${(p) => p.theme.fg2};
  margin-bottom: 64px;
  max-width: 540px;
  line-height: 1.7;
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const SkeletonCard = styled.div`
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


export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/pinned')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Project[]) => setProjects(data))
      .catch(() => setProjects(staticProjects))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Section id="projects">
      <SectionLabel>
        <Slash>//</Slash>
        <Num>&nbsp;01.</Num>&nbsp;projects
      </SectionLabel>
      <Heading>Selected Work</Heading>
      <Lead>
        Personal and challenge projects demonstrating frontend architecture, AI integration, and
        product thinking — all deployed and live.
      </Lead>
      <Grid>
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
      </Grid>
    </Section>
  )
}
