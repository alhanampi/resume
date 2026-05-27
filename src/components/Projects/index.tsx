import { useEffect, useState } from 'react'

import type { Project } from '../../utils/types'
import { projects as staticProjects } from '../../data/projects'
import ProjectCard from '../ProjectCard'
import { useInView } from '../../hooks/useInView'

import { Section, SectionLabel, Slash, Num, Heading, Lead, Grid, SkeletonCard } from './Projects.styles'

export default function Projects() {
  const [ref, visible] = useInView()
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
    <Section ref={ref} id="projects" $visible={visible}>
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
