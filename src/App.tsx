import { useLayoutEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { MotionConfig } from 'motion/react'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Certificates from './components/Certificates'

export default function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ScrollProgress />
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
    </MotionConfig>
  )
}
