export interface Project {
  id: string
  name: string
  description: string
  liveUrl: string
  githubUrl: string
  tags: string[]
  featured?: boolean
}

export interface Job {
  company: string
  role: string
  period: string
  description: string
  bullets: string[]
  stack?: string
}

export interface SkillCategory {
  label: string
  items: string[]
}

export interface Certificate {
  title: string
  issuer: string
  platform: string
  date: string
}

export interface Degree {
  title: string
  institution: string
  year: string
}
