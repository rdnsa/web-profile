import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, BriefcaseBusiness, MapPin } from 'lucide-react'
import { ExternalLink } from '../../components/ExternalLink'
import { profile } from '../../data/profile'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 72])
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 32])
  const detailY = useTransform(scrollYProgress, [0, 1], [0, -18])

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto grid min-h-0 w-full max-w-7xl items-start gap-8 px-4 pb-8 pt-6 sm:px-6 sm:pb-12 sm:pt-10 lg:min-h-[calc(100svh-6rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.72fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10 lg:px-8 lg:py-14"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ y: copyY }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-base font-medium text-[#a78bfa] sm:text-lg">Hello, I&apos;m</p>
        <h1 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-lg sm:leading-8">
          {profile.tagline}
        </p>

        <div className="mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
          <ExternalLink className="w-full sm:w-auto" href="#projects">
            View projects
          </ExternalLink>
          {profile.socials.map((social) => {
            const Icon = social.icon

            return (
              <ExternalLink className="w-full sm:w-auto" href={social.href} key={social.href}>
                <Icon className="size-4" />
                {social.label}
              </ExternalLink>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        className="relative order-first mx-auto flex w-full max-w-[320px] justify-center sm:max-w-[360px] lg:order-none"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1 }}
        style={{ y: portraitY }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative w-full"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-x-8 bottom-4 top-10 rounded-full bg-[#3c246f]/65 blur-3xl"
            animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b14]"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          >
            <img
              alt={profile.fullName}
              className="h-full w-full object-cover object-top"
              src={profile.avatar}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid gap-5"
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        style={{ y: detailY }}
        transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <p className="text-lg font-medium text-[#a78bfa]">Delivery-focused</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Project Manager
          </h2>
        </div>

        <p className="max-w-md text-base leading-8 text-slate-300">
          {profile.shortBio}
        </p>

        <div className="grid gap-2 sm:gap-3">
          {profile.focus.map((item, index) => (
            <motion.div
              className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-slate-300"
              key={item}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.42, delay: 0.32 + index * 0.08 }}
            >
              <span>{item}</span>
              <span className="size-2 rounded-full bg-[#f0c987]" />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:flex-wrap sm:gap-4">
          <span className="inline-flex items-center gap-2">
            <BriefcaseBusiness className="size-4 text-[#f0c987]" />
            {profile.role}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-[#f0c987]" />
            {profile.location}
          </span>
        </div>

        <a
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#f0c987] transition hover:text-white"
          href="#profile"
        >
          More about me
          <ArrowDown className="size-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
