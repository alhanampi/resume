import { useEffect, useState } from 'react'

import type { Project } from '../../utils/types'
import { projects as staticProjects } from '../../data/projects'
import ProjectCard from '../ProjectCard'
import { Section, SectionLabel, Slash, Num, Heading, Lead, Grid } from './Projects.styles'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(staticProjects)

  useEffect(() => {
    fetch('/api/pinned')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: Project[]) => setProjects(data))
      .catch(() => {})
  }, [])

  return (
    <Section id="projects">
      <SectionLabel>
        <Slash>//</Slash>
        <Num>&nbsp;02.</Num>&nbsp;projects
      </SectionLabel>
      <Heading>Selected Work</Heading>
      <Lead>
        Personal and challenge projects demonstrating frontend architecture, AI integration, and
        product thinking — all deployed and live.
      </Lead>
      <Grid>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </Grid>
    </Section>
  )
}
