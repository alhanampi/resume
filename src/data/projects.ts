import type { Project } from '../utils/types'

export const projects: Project[] = [
  {
    id: 'my-pantry',
    name: 'My Pantry',
    description:
      'Fullstack PWA to track pantry items and shopping lists with your partner or roommates. Built with real-time sync, auth, and geolocation for store maps.',
    liveUrl: 'https://my-pantry-one.vercel.app',
    githubUrl: 'https://github.com/alhanampi/my-pantry',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'MUI',
      'React Query',
      'Axios',
      'Clerk',
      'Prisma',
      'PostgreSQL',
      'MapLibre',
    ],
    featured: true,
  },
  {
    id: 'lifting-daily',
    name: '01 Lifting Daily',
    description:
      'Modern workout tracking app with calendar view, exercise logs, and daily goals. Built on Next.js 16 with Shadcn UI, serverless Postgres, and Clerk auth.',
    liveUrl: 'https://01-lifting-daily.vercel.app',
    githubUrl: 'https://github.com/alhanampi/01-lifting-daily',
    tags: [
      'Next.js 16',
      'TypeScript',
      'Shadcn UI',
      'Tailwind CSS',
      'Clerk',
      'Neon DB',
      'Drizzle ORM',
      'Zod',
    ],
    featured: true,
  },
  {
    id: 'ai-chat-app',
    name: 'AI Chat App',
    description:
      'Fully functional AI chat application demonstrating frontend engineering skills. Markdown rendering, syntax highlighting, emoji picker, and Groq LLM integration.',
    liveUrl: 'https://ai-chat-app-flax-eight.vercel.app',
    githubUrl: 'https://github.com/alhanampi/AI-chat-app',
    tags: ['React', 'TypeScript', 'Vite', 'Groq SDK', 'SASS', 'react-markdown', 'Axios'],
    featured: true,
  },
  {
    id: 'recipe-search',
    name: 'Recipe Search App',
    description:
      'Recipe discovery app using the Spoonacular API with multilingual support and AI-powered translations via Groq. E2E tested with Cypress.',
    liveUrl: 'https://recipe-search-app-nu.vercel.app',
    githubUrl: 'https://github.com/alhanampi/recipe-search-app',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'MUI',
      'React Query',
      'Groq AI',
      'i18next',
      'Cypress',
      'Vitest',
    ],
    featured: true,
  },
  {
    id: 'liteflix',
    name: 'Liteflix',
    description:
      'Frontend challenge app replicating a custom streaming interface — featuring animated transitions, drag-and-drop uploads, and TMDB API integration.',
    liveUrl: 'https://liteflix-iota.vercel.app',
    githubUrl: 'https://github.com/alhanampi/liteflix',
    tags: ['Next.js', 'TypeScript', 'MUI', 'Styled Components', 'Axios', 'React Animations'],
    featured: true,
  },
  {
    id: 'pokemon-app',
    name: 'Pokemon App',
    description:
      'Fun infinite-scroll Pokémon browser using the PokeAPI. Demonstrates performant list rendering with seamless pagination.',
    liveUrl: 'https://pokemon-app-alhanampi.vercel.app',
    githubUrl: 'https://github.com/alhanampi/pokemon-app',
    tags: ['React', 'TypeScript', 'Styled Components', 'Axios', 'Infinite Scroll', 'PokeAPI'],
  },
  {
    id: 'hangman',
    name: 'Hangman (Rough Edition)',
    description:
      'A modern Hangman game with hand-drawn SVG aesthetics powered by Rough.js. Clean game logic, animated transitions, and category selection.',
    liveUrl: 'https://hangman-game-orpin-two.vercel.app',
    githubUrl: 'https://github.com/alhanampi/new-Hangman',
    tags: ['React', 'TypeScript', 'Vite', 'Styled Components', 'Rough.js'],
  },
]
