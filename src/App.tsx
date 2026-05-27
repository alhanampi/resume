import { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Certificates from './components/Certificates'

export default function App() {
  useLayoutEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </ThemeProvider>
  )
}
