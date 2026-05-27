import type { SkillCategory } from '../utils/types'

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'React Native',
      'Vite',
      'HTML',
      'CSS',
      'Sass',
    ],
  },
  {
    label: 'State & Data',
    items: ['Zustand', 'React Query', 'Redux', 'Axios', 'React Router'],
  },
  {
    label: 'UI & Styling',
    items: ['Material UI', 'Tailwind CSS', 'Shadcn UI', 'Styled Components', 'Emotion'],
  },
  {
    label: 'Testing & QA',
    items: ['Jest', 'Vitest', 'Cypress', 'Testing Library', 'Mockoon', 'Postman'],
  },
  {
    label: 'AI & LLM',
    items: [
      'Claude AI',
      'GitHub Copilot',
      'Groq',
      'Google Gemini',
      'Prompt Engineering',
      'Agentic Workflows',
      'RAG',
      'LLMs',
      'Generative AI',
    ],
  },
  {
    label: 'Backend & DB',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma', 'Drizzle ORM', 'Neon DB'],
  },
  {
    label: 'Practices',
    items: [
      'Agile / Scrum',
      'Microfrontend Architecture',
      'Accessibility (WCAG)',
      'Performance Optimization',
      'A/B Testing',
      'PWA',
    ],
  },
  {
    label: 'Data & Analytics',
    items: ['Power BI', 'Data Analytics', 'Data Science'],
  },
]
