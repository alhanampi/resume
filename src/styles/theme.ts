export const theme = {
  bg: '#0c0a0b',
  bg2: '#100d0e',
  fg: '#f0ece8',
  fg2: '#f0e9e7',
  accent: '#f9a8d4',
  accentDim: 'rgba(253, 230, 243, 0.09)',
  border: '#201a1c',
  card: '#0f0c0d',

  // Explicit full stacks — never rely on CSS var cascade for font-family
  fontDisplay: "'Space Grotesk', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  fontBody: "'Inter', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, 'Courier New', monospace",
} as const

export type Theme = typeof theme
