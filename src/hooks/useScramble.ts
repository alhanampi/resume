import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'

export function useScramble(text: string, delay = 0) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    let frame = 0
    const totalFrames = 40
    let timerId: ReturnType<typeof setTimeout>
    let intervalId: ReturnType<typeof setInterval>

    timerId = setTimeout(() => {
      intervalId = setInterval(() => {
        setOutput(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (frame >= totalFrames * ((i + 1) / text.length)) return char
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join(''),
        )
        frame++
        if (frame > totalFrames) {
          setOutput(text)
          clearInterval(intervalId)
        }
      }, 30)
    }, delay)

    return () => {
      clearTimeout(timerId)
      clearInterval(intervalId)
    }
  }, [text, delay])

  return output
}
