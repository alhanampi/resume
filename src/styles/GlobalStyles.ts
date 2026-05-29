import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: auto;
    scroll-padding-top: 72px;
    overflow-anchor: none;
  }

  body {
    font-family: ${(p) => p.theme.fontBody};
    background: ${(p) => p.theme.bg};
    color: ${(p) => p.theme.fg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
    background: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: ${(p) => p.theme.bg}; }
  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.border};
    border-radius: 2px;
  }
  ::-webkit-scrollbar-thumb:hover { background: ${(p) => p.theme.fg2}; }

  @keyframes scrollPulse {
    0%, 100% { opacity: 1; transform: scaleY(1); }
    50%       { opacity: 0.2; transform: scaleY(0.45); }
  }
`
