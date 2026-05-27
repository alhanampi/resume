export const NAV_LINKS = [
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
    value: 'linkedin.com/in/paminagoldenberg-thiery',
    href: 'https://linkedin.com/in/paminagoldenberg-thiery',
  },
] as const

export const HERO_LINKS = [
  { label: 'github →', href: 'https://github.com/alhanampi' },
  { label: 'linkedin →', href: 'https://linkedin.com/in/paminagoldenberg-thiery' },
  { label: 'alhanampi@gmail.com →', href: 'mailto:alhanampi@gmail.com' },
] as const
