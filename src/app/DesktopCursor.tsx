import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function DesktopCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isInteractive, setIsInteractive] = useState(false)
  const xTarget = useMotionValue(-120)
  const yTarget = useMotionValue(-120)
  const x = useSpring(xTarget, { stiffness: 420, damping: 32, mass: 0.4 })
  const y = useSpring(yTarget, { stiffness: 420, damping: 32, mass: 0.4 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (!finePointer) {
      return undefined
    }

    document.body.classList.add('desktop-cursor')

    const handleMouseMove = (event: MouseEvent) => {
      xTarget.set(event.clientX)
      yTarget.set(event.clientY)
      setIsVisible(true)
    }

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      setIsInteractive(Boolean(target.closest('a, button')))
    }

    const handleMouseOut = (event: MouseEvent) => {
      const target = event.relatedTarget as HTMLElement | null
      setIsInteractive(Boolean(target?.closest('a, button')))
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.body.classList.remove('desktop-cursor')
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [xTarget, yTarget])

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[65] hidden size-2 rounded-full bg-[#f0c987] mix-blend-screen lg:block"
        animate={{ opacity: isVisible ? 1 : 0 }}
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[64] hidden rounded-full border border-[#a78bfa]/70 lg:block"
        animate={{
          opacity: isVisible ? 1 : 0,
          width: isInteractive ? 46 : 28,
          height: isInteractive ? 46 : 28,
        }}
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      />
    </>
  )
}
