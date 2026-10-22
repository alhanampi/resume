export const NAV_LINKS = [
  { label: 'me', href: '#me' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
  { label: 'experience', href: '#experience' },
  { label: 'learning', href: '#certificates' },
  { label: 'contact', href: '#contact' },
] as const

export const SECTION_IDS = {
  projects: 'projects',
  skills: 'skills',
  experience: 'experience',
  certificates: 'certificates',
  contact: 'contact',
} as const

export const CONTACT_LINKS = [
  { label: 'email', value: 'alhanampi@gmail.com', href: 'mailto:alhanampi@gmail.com' },
  { label: 'github', value: 'github.com/alhanampi', href: 'https://github.com/alhanampi' },
  {
    label: 'linkedin',
    value: 'linkedin.com/in/pamina-goldenberg-thiery',
    href: 'https://www.linkedin.com/in/pamina-goldenberg-thiery/',
  },
] as const

export const HERO_LINKS = [
  { label: 'github →', href: 'https://github.com/alhanampi' },
  { label: 'linkedin →', href: 'https://www.linkedin.com/in/pamina-goldenberg-thiery/' },
  { label: 'alhanampi@gmail.com →', href: 'mailto:alhanampi@gmail.com' },
  { label: 'download CV ↓', href: '/Pamina_Goldenberg_Thiery_CV.pdf' },
] as const
