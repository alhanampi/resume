import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Lenis from 'lenis'
import { setLenis } from './lib/lenis'
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
  useEffect(() => {
    window.scrollTo(0, 0)
    const lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 4) })
    setLenis(lenis)
    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      setLenis(null)
      lenis.destroy()
    }
  }, [])

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
