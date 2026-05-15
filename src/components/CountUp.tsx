import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

type CountUpProps = {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
}

export function CountUp({
  target,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1200,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: '0px 0px 120px 0px',
  })
  const [value, setValue] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (!isInView) {
      return undefined
    }

    if (shouldReduceMotion) {
      setValue(target)
      return undefined
    }

    const startedAt = performance.now()
    let frameId = 0

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = 1 - (1 - progress) ** 3

      setValue(target * eased)

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frameId)
  }, [duration, isInView, shouldReduceMotion, target])

  return (
    <span className={className} ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
