import { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { prepareWithSegments, measureNaturalWidth, layout } from '@chenglou/pretext'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
`

const pulseLine = keyframes`
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50%       { opacity: 0.2; transform: scaleY(0.45); }
`

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  min-height: 560px;
  overflow: hidden;
  background: ${(p) => p.theme.bg};
`

const CodeComment = styled.div`
  position: absolute;
  top: 96px;
  left: 64px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 12px;
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.02em;
  z-index: 1;

  span {
    color: ${(p) => p.theme.accent};
  }

  @media (max-width: 600px) {
    left: 24px;
    top: 80px;
  }
`

const Canvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`

const SubtitleArea = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 80px;
  left: 64px;
  right: 64px;
  z-index: 1;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => (p.$visible ? 'translateY(0)' : 'translateY(18px)')};
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;

  @media (max-width: 600px) {
    left: 24px;
    right: 24px;
    bottom: 60px;
  }
`

const Subtitle = styled.p`
  font-family: ${(p) => p.theme.fontBody};
  font-size: clamp(13px, 1.4vw, 16px);
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.01em;
  margin-bottom: 32px;
  max-width: 520px;
  line-height: 1.75;
`

const LinkRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 9px 18px;
  border: 1px solid ${(p) => p.theme.border};
  border-radius: 2px;
  font-family: ${(p) => p.theme.fontMono};
  font-size: 11px;
  font-weight: 400;
  color: ${(p) => p.theme.fg2};
  letter-spacing: 0.03em;
  transition:
    border-color 0.2s,
    color 0.2s,
    background 0.2s;

  &:hover {
    border-color: ${(p) => p.theme.accent};
    color: ${(p) => p.theme.accent};
    background: ${(p) => p.theme.accentDim};
  }
`

const ScrollIndicator = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: 24px;
  left: 64px;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: ${(p) => (p.$visible ? 0.35 : 0)};
  transition: opacity 0.8s ease 0.5s;

  @media (max-width: 600px) {
    left: 24px;
  }
`

const ScrollLine = styled.div`
  width: 1px;
  height: 36px;
  background: ${(p) => p.theme.fg2};
  animation: ${pulseLine} 2s ease-in-out infinite;
`

const ScrollLabel = styled.span`
  font-family: ${(p) => p.theme.fontMono};
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(p) => p.theme.fg2};
`

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
        <Subtitle>
          Senior Frontend Engineer — React · TypeScript · AI-Driven Applications
          <br />
          6+ years building products end-to-end in fintech, banking &amp; AI platforms.
        </Subtitle>
        <LinkRow>
          {[
            { label: 'github →', href: 'https://github.com/alhanampi' },
            { label: 'linkedin →', href: 'https://linkedin.com/in/paminagoldenberg-thiery' },
            { label: 'alhanampi@gmail.com →', href: 'mailto:alhanampi@gmail.com' },
          ].map((l) => (
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
        <ScrollLabel>scroll</ScrollLabel>
      </ScrollIndicator>
    </Section>
  )
}
