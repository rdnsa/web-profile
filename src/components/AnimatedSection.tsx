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
  const headerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const headerItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.section
      id={id}
      className={`mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-12 sm:scroll-mt-32 sm:px-6 sm:py-16 lg:px-8 lg:py-24 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: '-120px' }}
    >
      <motion.div
        className="mb-6 max-w-3xl sm:mb-8 lg:mb-12"
        variants={headerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f0c987]"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          variants={headerItem}
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          className="text-2xl font-semibold leading-tight text-white sm:text-4xl"
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          variants={headerItem}
        >
          {title}
        </motion.h2>
        {subtitle ? (
          <motion.p
            className="mt-4 text-base leading-8 text-slate-400"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            variants={headerItem}
          >
            {subtitle}
          </motion.p>
        ) : null}
      </motion.div>
      {children}
    </motion.section>
  )
}
