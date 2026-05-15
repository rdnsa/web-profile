import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Footprint = {
  id: number
  x: number
  y: number
  side: 'left' | 'right'
}

export function DuckFollower() {
  const [isVisible, setIsVisible] = useState(false)
  const [isWalking, setIsWalking] = useState(false)
  const [footprints, setFootprints] = useState<Footprint[]>([])
  const timeoutRef = useRef<number | null>(null)
  const footprintIdRef = useRef(0)
  const lastFootprintAtRef = useRef(0)
  const cleanupTimersRef = useRef<number[]>([])
  const pointerRef = useRef({ x: 120, y: 180 })
  const xTarget = useMotionValue(120)
  const yTarget = useMotionValue(180)
  const x = useSpring(xTarget, { stiffness: 150, damping: 18, mass: 0.5 })
  const y = useSpring(yTarget, { stiffness: 150, damping: 18, mass: 0.5 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (!finePointer) {
      return undefined
    }

    const addFootprint = () => {
      const now = performance.now()

      if (now - lastFootprintAtRef.current < 120) {
        return
      }

      lastFootprintAtRef.current = now
      footprintIdRef.current += 1

      const side = footprintIdRef.current % 2 === 0 ? 'left' : 'right'
      const footprint: Footprint = {
        id: footprintIdRef.current,
        side,
        x: pointerRef.current.x + (side === 'left' ? -14 : 12),
        y: pointerRef.current.y + 58,
      }

      setFootprints((current) => [...current.slice(-14), footprint])

      const cleanupTimer = window.setTimeout(() => {
        setFootprints((current) =>
          current.filter((item) => item.id !== footprint.id),
        )
      }, 2600)

      cleanupTimersRef.current.push(cleanupTimer)
    }

    const startWalking = () => {
      setIsVisible(true)
      setIsWalking(true)
      addFootprint()

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsWalking(false)
      }, 520)
    }

    const handleMouseMove = (event: MouseEvent) => {
      setIsVisible(true)
      pointerRef.current = { x: event.clientX, y: event.clientY }
      xTarget.set(event.clientX + 18)
      yTarget.set(event.clientY + 18)
    }

    const handleScroll = () => {
      startWalking()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      cleanupTimersRef.current.forEach((timer) => window.clearTimeout(timer))
    }
  }, [xTarget, yTarget])

  return (
    <>
      {footprints.map((footprint) => (
        <motion.svg
          aria-hidden="true"
          className="pointer-events-none fixed z-[54] hidden h-8 w-8 text-[#f765ff] lg:block"
          initial={{ opacity: 0.55, scale: 0.7, rotate: footprint.side === 'left' ? -12 : 12 }}
          animate={{ opacity: 0, scale: 1.08, y: 8 }}
          key={footprint.id}
          style={{ left: footprint.x, top: footprint.y }}
          transition={{ duration: 2.6, ease: 'easeOut' }}
          viewBox="0 0 42 42"
        >
          <ellipse cx="21" cy="25" fill="currentColor" rx="8" ry="6" />
          <ellipse cx="12" cy="16" fill="currentColor" rx="4" ry="7" />
          <ellipse cx="21" cy="12" fill="currentColor" rx="4" ry="8" />
          <ellipse cx="30" cy="16" fill="currentColor" rx="4" ry="7" />
        </motion.svg>
      ))}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[55] hidden h-16 w-24 -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          rotate: isWalking ? [0, -3, 3, -2, 0] : 0,
          scale: isWalking ? [1, 1.04, 0.98, 1.02, 1] : 1,
        }}
        transition={{ duration: 0.45 }}
      >
        <svg
          className={isWalking ? 'duck-walk drop-shadow-lg' : 'drop-shadow-lg'}
          viewBox="0 0 140 100"
          role="img"
        >
          <path
            d="M28 58C28 37 45 22 68 22c25 0 44 16 44 38 0 23-22 37-49 33-20-3-35-16-35-35Z"
            fill="#F8D96F"
          />
          <path
            d="M69 31c9-18 35-20 47-5 13 16 5 38-16 43-18 4-34-8-36-25-.5-5 1-9 5-13Z"
            fill="#FFE68E"
          />
          <path
            d="M110 42c9-4 22-2 27 4-4 7-17 10-28 6-5-2-5-8 1-10Z"
            fill="#F08B3E"
          />
          <path
            d="M112 47c7 1 15 1 22-1"
            stroke="#D66D28"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <circle cx="96" cy="34" r="3.4" fill="#172033" />
          <path
            d="M43 55c13 11 36 13 53 4-7 14-24 22-43 18-12-3-20-11-22-22 5 2 9 2 12 0Z"
            fill="#EFBF4D"
            opacity=".72"
          />
          <path
            className="duck-leg duck-leg-a"
            d="M51 83c-4 5-9 8-16 10M35 93c5-1 11-1 16 1"
            fill="none"
            stroke="#DE7D35"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <path
            className="duck-leg duck-leg-b"
            d="M76 84c4 5 10 8 18 9M82 95c5-2 11-2 17-1"
            fill="none"
            stroke="#DE7D35"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </svg>
      </motion.div>
    </>
  )
}
