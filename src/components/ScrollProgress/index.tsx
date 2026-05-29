import { useScroll, useSpring, motion } from 'motion/react'
import styled from 'styled-components'

const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${(p) => p.theme.accent};
  transform-origin: left;
  z-index: 200;
`

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return <Bar style={{ scaleX }} />
}
