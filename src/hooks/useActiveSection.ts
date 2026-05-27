import { useState, useEffect } from 'react'

export function useActiveSection(hrefs: readonly string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = hrefs.map((href) => document.querySelector(href))
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => s && obs.observe(s))
    return () => obs.disconnect()
  }, [hrefs])

  return active
}
