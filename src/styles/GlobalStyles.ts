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
