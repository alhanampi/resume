import type { Job } from '../utils/types'

export const experience: Job[] = [
  {
    company: 'GlobalLogic',
    role: 'Senior Frontend Developer',
    period: 'Jun 2026 — Present',
    description:
      'Sole frontend developer on two data applications — an interactive dashboard built around dynamic tables and a monitoring dashboard — owning architecture, code quality and delivery.',
    bullets: [
      'Own the frontend of both applications as the only frontend developer, after the team scaled down.',
      "Led a large refactor that removed 20% of the application's code (dead code), leaving a smaller and easier to maintain codebase.",
      'Migrated the data layer from adapters to React Query hooks, simplifying fetching, caching and state synchronization.',
      'Migrated global state from Context to Redux.',
      'Set up and maintain Knip, Prettier and ESLint to keep standards consistent across the codebase.',
      'Took part in the full development of a new feature, delivered on time, and defined the API contract together with the backend team.',
    ],
    stack: 'React, Vite, TypeScript, React Query, Redux, MUI, Knip, Prettier, ESLint',
  },
  {
    company: 'GlobalLogic',
    role: 'Senior Frontend Developer',
    period: 'Mar 2023 — Apr 2026',
    description:
      'Lead frontend engineer on a large-scale AI-powered SaaS platform, responsible for the full product lifecycle from architecture to delivery.',
    bullets: [
      'Owned end-to-end frontend architecture across the full product lifecycle: planning, implementation, iterative refactoring, and sustained delivery under evolving requirements.',
      'Built complex UI workflows and stateful business logic using React, TypeScript, Zustand, React Query, and Vite, with custom API orchestration layers for LLM output handling.',
      'Led multiple major refactors to improve rendering performance, state consistency, and long-term maintainability as the product matured.',
      'Designed resilient data handling strategies for frequently changing backend structures and generative AI outputs.',
      'Defined Jest unit testing strategy and drove Cypress end-to-end test adoption.',
      'Coordinated closely with backend and ML teams on API contract evolution and model behavior integration.',
      'Completed formal training in LLMs, Agentic Systems, and Generative AI; applies Claude AI actively in day-to-day development workflows.',
    ],
    stack:
      'React, TypeScript, Next.js, Vite, Zustand, React Query, Axios, Jest, Cypress, Emotion, Mockoon, Postman',
  },
  {
    company: 'Santander Tecnología',
    role: 'Frontend Developer',
    period: 'Nov 2021 — Mar 2023',
    description:
      'Developed Next.js microfrontends for the Help Center and online appointment scheduling, integrated across multiple product teams.',
    bullets: [
      'Developed Next.js microfrontends for the Help Center and online appointment scheduling, integrated across multiple product teams.',
      'Implemented and enforced accessibility standards (WCAG) and UI consistency across distributed frontend teams.',
      'Built native mobile features using React Native integrated with Salesforce.',
      'Led research and full migration of a legacy .NET 4.6 kiosk application to Next.js.',
      'Documented legacy SQL data structures to support future integration and migration efforts.',
    ],
  },
  {
    company: 'GlobalLogic',
    role: 'Frontend Developer',
    period: 'Aug 2020 — Nov 2021',
    description: 'Developed a high-traffic Progressive Web App (PWA) for a digital wallet product.',
    bullets: [
      'Developed a high-traffic PWA for a digital wallet product using React, TypeScript, and Jest.',
      'Acted as lead developer for multiple key product features within a 30-person Agile team.',
    ],
  },
  {
    company: 'NUCBA',
    role: 'Fullstack Instructor',
    period: 'Aug 2020 — May 2022',
    description:
      'Taught HTML, CSS, JavaScript, Node.js, Express, and MongoDB to aspiring developers.',
    bullets: [
      'Taught HTML, CSS, JavaScript, Node.js, Express, and MongoDB to cohorts of aspiring developers.',
      'Designed curriculum materials and mentored students through full project development cycles.',
    ],
  },
  {
    company: 'Accenture',
    role: 'Frontend Developer',
    period: 'Sep 2019 — Aug 2020',
    description:
      'Built React microfrontends for a large-scale banking platform within an international Agile team.',
    bullets: [
      'Built React microfrontends for a large-scale banking platform within an international 20+ person Agile team.',
      'Delivered a government microsite as sole frontend developer.',
      'Contributed to an international mortgage emergency tools project.',
    ],
  },
]
