import { m } from 'framer-motion'

export function PageTransition() {
  return (
    <m.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] origin-top bg-[#0b0b14]"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.9, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
    />
  )
}
