import { useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'
import { useInteractionPreferences } from '../hooks/useInteractionPreferences'

type DuckTrail = {
  id: number
  x: number
  y: number
  side: 'left' | 'right'
}

const duckImage = '/images/rubber-duck%20(1).png'

export function DuckFollower() {
  const [ducks, setDucks] = useState<DuckTrail[]>([])
  const duckIdRef = useRef(0)
  const lastDuckAtRef = useRef(0)
  const cleanupTimersRef = useRef(new Set<number>())
  const pointerRef = useRef({ x: 120, y: 180 })
  const { hasFinePointer, shouldReduceMotion } = useInteractionPreferences()
  const isEnabled = hasFinePointer && !shouldReduceMotion

  useEffect(() => {
    if (!isEnabled) {
      setDucks([])
      return undefined
    }

    const addDuck = (x: number, y: number) => {
      const now = performance.now()

      if (document.hidden || now - lastDuckAtRef.current < 150) {
        return
      }

      lastDuckAtRef.current = now
      duckIdRef.current += 1

      const side = duckIdRef.current % 2 === 0 ? 'left' : 'right'
      const duck: DuckTrail = {
        id: duckIdRef.current,
        side,
        x: x + (side === 'left' ? -14 : 10),
        y: y + 18,
      }

      setDucks((current) => [...current.slice(-9), duck])

      const cleanupTimer = window.setTimeout(() => {
        setDucks((current) => current.filter((item) => item.id !== duck.id))
        cleanupTimersRef.current.delete(cleanupTimer)
      }, 1800)

      cleanupTimersRef.current.add(cleanupTimer)
    }

    const handleMouseMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
      addDuck(event.clientX, event.clientY)
    }

    const handleScroll = () => {
      addDuck(pointerRef.current.x, pointerRef.current.y)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setDucks([])
      }
    }

    window.addEventListener('pointermove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cleanupTimersRef.current.forEach((timer) => window.clearTimeout(timer))
      cleanupTimersRef.current.clear()
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      {ducks.map((duck) => (
        <m.img
          aria-hidden="true"
          className="pointer-events-none fixed z-[54] h-6 w-6 opacity-80"
          initial={{
            opacity: 0.6,
            scale: 0.55,
            rotate: duck.side === 'left' ? -15 : 15,
          }}
          animate={{ opacity: 0, scale: 1.08, y: 6 }}
          key={duck.id}
          src={duckImage}
          style={{ left: duck.x, top: duck.y }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
      ))}
    </>
  )
}
