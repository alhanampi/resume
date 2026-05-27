import { NAV_LINKS } from '../../constants'
import { useScrolled } from '../../hooks/useScrolled'
import { useActiveSection } from '../../hooks/useActiveSection'

import { Wrapper, LinkList, NavLink } from './Nav.styles'

const hrefs = NAV_LINKS.map((l) => l.href)

export default function Nav() {
  const scrolled = useScrolled()
  const active = useActiveSection(hrefs)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Wrapper
      $scrolled={scrolled}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <LinkList>
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <NavLink
              href={l.href}
              $active={active === l.href}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </LinkList>
    </Wrapper>
  )
}
