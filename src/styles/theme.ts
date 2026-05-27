export const theme = {
  bg: '#0c0a0b',
  bg2: '#100d0e',
  fg: '#f0ece8',
  fg2: '#6a6260',
  accent: '#f9a8d4',
  accentDim: 'rgba(249, 168, 212, 0.09)',
  border: '#201a1c',
  card: '#0f0c0d',

  // Explicit full stacks — never rely on CSS var cascade for font-family
  fontDisplay: "'Space Grotesk', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  fontBody: "'Inter', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  fontMono: "'JetBrains Mono', 'IBM Plex Mono', ui-monospace, 'Courier New', monospace",
} as const

export type Theme = typeof theme
