import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type AnimatedSectionProps = {
  id?: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function AnimatedSection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-120px' }}
    >
      <div className="mb-8 max-w-3xl lg:mb-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#a71faf]">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold text-[#172033] sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-base leading-8 text-slate-600">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </motion.section>
  )
}
