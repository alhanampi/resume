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
      'Web Workers',
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
      'Claude Code',
      'Anthropic API',
      'MCP (Model Context Protocol)',
      'GitHub Copilot',
      'Groq',
      'Google Gemini',
      'Prompt Engineering',
      'Agentic Workflows',
      'RAG',
      'LLMs',
      'Generative AI',
      'LLM Fine-Tuning',
      'AI Governance / Responsible AI',
    ],
  },
  {
    label: 'Code Quality & Tooling',
    items: ['ESLint', 'Prettier', 'Knip', 'Large-scale Refactoring'],
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
      'API Integration',
      'API Contract Design',
      'Data Dashboards & Tables',
      'A/B Testing',
      'PWA',
    ],
  },
  {
    label: 'Data & Analytics',
    items: ['Power BI', 'Python', 'Data Analytics', 'Data Science'],
  },
]
