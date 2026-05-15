import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Footprint = {
  id: number
  x: number
  y: number
  side: 'left' | 'right'
}

const duckImage = '/images/rubber-duck%20(1).png'

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
        return false
      }

      lastFootprintAtRef.current = now
      footprintIdRef.current += 1

      const side = footprintIdRef.current % 2 === 0 ? 'left' : 'right'
      const footprint: Footprint = {
        id: footprintIdRef.current,
        side,
        x: pointerRef.current.x + (side === 'left' ? -14 : 10),
        y: pointerRef.current.y + 18,
      }

      setFootprints((current) => [...current.slice(-14), footprint])

      const cleanupTimer = window.setTimeout(() => {
        setFootprints((current) =>
          current.filter((item) => item.id !== footprint.id),
        )
      }, 2600)

      cleanupTimersRef.current.push(cleanupTimer)

      return true
    }

    const triggerTrail = () => {
      setIsVisible(true)
      const added = addFootprint()

      if (!added) {
        return
      }

      setIsWalking(true)

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsWalking(false)
      }, 520)
    }

    const handleMouseMove = (event: MouseEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }
      xTarget.set(event.clientX)
      yTarget.set(event.clientY)
      triggerTrail()
    }

    const handleScroll = () => {
      triggerTrail()
    }

    document.body.classList.add('duck-cursor')

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('duck-cursor')

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }

      cleanupTimersRef.current.forEach((timer) => window.clearTimeout(timer))
    }
  }, [xTarget, yTarget])

  return (
    <>
      {footprints.map((footprint) => (
        <motion.img
          aria-hidden="true"
          className="pointer-events-none fixed z-[54] h-6 w-6 opacity-80"
          initial={{ opacity: 0.6, scale: 0.55, rotate: footprint.side === 'left' ? -15 : 15 }}
          animate={{ opacity: 0, scale: 1.08, y: 6 }}
          key={footprint.id}
          src={duckImage}
          style={{ left: footprint.x, top: footprint.y }}
          transition={{ duration: 2, ease: 'easeOut' }}
        />
      ))}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[55] h-16 w-16 -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          rotate: isWalking ? [0, -3, 3, -2, 0] : 0,
          scale: isWalking ? [1, 1.04, 0.98, 1.02, 1] : 1,
        }}
        transition={{ duration: 0.45 }}
      >
        <img
          alt=""
          className={isWalking ? 'duck-walk h-full w-full drop-shadow-lg' : 'h-full w-full drop-shadow-lg'}
          src={duckImage}
        />
      </motion.div>
    </>
  )
}
