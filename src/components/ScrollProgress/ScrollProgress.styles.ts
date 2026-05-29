import styled from 'styled-components'
import { motion } from 'motion/react'

export const Bar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${(p) => p.theme.accent};
  transform-origin: left;
  z-index: 200;
`
