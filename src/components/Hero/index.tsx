import { useEffect, useRef, useState } from 'react'
import { prepareWithSegments, measureNaturalWidth, layout } from '@chenglou/pretext'

import { HERO_LINKS } from '../../constants'

import {
  Section,
  CodeComment,
  Canvas,
  SubtitleArea,
  AvailableBadge,
  AvailableDot,
  Subtitle,
  LinkRow,
  LinkButton,
  ScrollIndicator,
  ScrollLine,
  ScrollLabel,
} from './Hero.styles'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    let live = true

    const run = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      const ctx = canvas.getContext('2d')!
      ctx.scale(dpr, dpr)

      const pad = w < 600 ? 24 : 64
      const available = w - pad * 2
      const words = ['PAMINA', 'GOLDENBERG', 'THIERY']

      // Start at viewport-proportional size, then scale down until widest word fits
      let fontSize = Math.min(Math.floor(w * 0.148), 136)
      ctx.font = `700 ${fontSize}px 'Space Grotesk', system-ui`
      const rawMax = Math.max(...words.map((word) => ctx.measureText(word).width))
      if (rawMax > available) {
        fontSize = Math.floor(fontSize * (available / rawMax))
      }

      const lineH = Math.round(fontSize * 1.13)
      const font = `700 ${fontSize}px 'Space Grotesk', system-ui`
      ctx.font = font

      const wordData = words.map((word) => {
        const prep = prepareWithSegments(word, font)
        return {
          word,
          naturalWidth: measureNaturalWidth(prep),
          measuredH: layout(prep, Infinity, lineH).height,
        }
      })

      const actualLineH = wordData[0].measuredH > 0 ? wordData[0].measuredH : lineH
      const startY = h * 0.44 - (words.length * actualLineH) / 2
      let startTime: number | null = null

      const draw = (now: number) => {
        if (!live) return
        if (!startTime) startTime = now
        const elapsed = now - startTime

        ctx.clearRect(0, 0, w, h)

        wordData.forEach(({ word }, i) => {
          const raw = Math.min(1, Math.max(0, elapsed - i * 200) / 500)
          const eased = 1 - Math.pow(1 - raw, 3)
          const y = startY + (i + 1) * actualLineH
          ctx.save()
          ctx.font = font
          ctx.fillStyle = '#f0ece8'
          ctx.globalAlpha = eased
          ctx.fillText(word, pad, y - (1 - eased) * 48)
          ctx.restore()
        })

        const maxW = Math.max(...wordData.map((d) => d.naturalWidth))
        const lProg = Math.min(1, Math.max(0, elapsed - (words.length * 200 + 560)) / 400)
        if (lProg > 0) {
          const ly = startY + words.length * actualLineH + 28
          ctx.strokeStyle = '#f9a8d4'
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(pad, ly)
          ctx.lineTo(pad + Math.min(maxW + 20, available) * lProg, ly)
          ctx.stroke()
        }

        if (elapsed < 2100) rafRef.current = requestAnimationFrame(draw)
        else setVisible(true)
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const timer = setTimeout(run, 120)
    return () => {
      live = false
      clearTimeout(timer)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <Section id="top">
      <CodeComment>
        <span>// </span>system.init
      </CodeComment>
      <Canvas ref={canvasRef} />

      <SubtitleArea $visible={visible}>
        <AvailableBadge>
          <AvailableDot />
          Available for opportunities
        </AvailableBadge>
        <Subtitle>
          Senior Frontend Engineer — React · TypeScript · AI-Driven Applications
          <br />
          6+ years building products end-to-end in fintech, banking &amp; AI platforms.
        </Subtitle>
        <LinkRow>
          {HERO_LINKS.map((l) => (
            <LinkButton
              key={l.href}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              {l.label}
            </LinkButton>
          ))}
        </LinkRow>
      </SubtitleArea>

      <ScrollIndicator $visible={visible}>
        <ScrollLine />
      </ScrollIndicator>
    </Section>
  )
}
