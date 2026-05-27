import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import type { Project } from '../../utils/types'
import { projects as staticProjects } from '../../data/projects'
import ProjectCard from '../ProjectCard'
import { fadeUp, fadeIn, stagger, viewport } from '../../animations/variants'
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
    <Section
      id="projects"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <motion.div variants={fadeIn}>
        <SectionLabel>
          <Slash>//</Slash>
          <Num>&nbsp;02.</Num>&nbsp;projects
        </SectionLabel>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Heading>Selected Work</Heading>
      </motion.div>
      <motion.div variants={fadeUp}>
        <Lead>
          Personal and challenge projects demonstrating frontend architecture, AI integration, and
          product thinking — all deployed and live.
        </Lead>
      </motion.div>
      <Grid variants={stagger}>
        {projects.map((p, i) => (
          <motion.div key={p.id} variants={fadeUp}>
            <ProjectCard project={p} index={i} />
          </motion.div>
        ))}
      </Grid>
    </Section>
  )
}
