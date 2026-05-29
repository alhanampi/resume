import { useScroll, useSpring } from 'motion/react'

import { Bar } from './ScrollProgress.styles'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return <Bar style={{ scaleX }} />
}
