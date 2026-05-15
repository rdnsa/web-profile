import { motion } from 'framer-motion'
import { ArrowDown, BriefcaseBusiness, MapPin } from 'lucide-react'
import { ExternalLink } from '../../components/ExternalLink'
import { profile } from '../../data/profile'

export function HeroSection() {
  return (
    <section
      className="relative mx-auto grid min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.72fr)_minmax(0,0.9fr)] lg:px-8 lg:py-14"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-lg font-medium text-[#a78bfa]">Hello, I&apos;m</p>
        <h1 className="mt-3 max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <ExternalLink href="#projects">View projects</ExternalLink>
          {profile.socials.map((social) => {
            const Icon = social.icon

            return (
              <ExternalLink href={social.href} key={social.href}>
                <Icon className="size-4" />
                {social.label}
              </ExternalLink>
            )
          })}
        </div>
      </motion.div>

      <motion.div
        className="relative order-first mx-auto flex w-full max-w-[360px] justify-center lg:order-none"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-x-8 bottom-4 top-10 rounded-full bg-[#3c246f]/65 blur-3xl" />
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b14]">
          <img
            alt={profile.fullName}
            className="h-full w-full object-cover object-top"
            src={profile.avatar}
          />
        </div>
      </motion.div>

      <motion.div
        className="grid gap-5"
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
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

        <div className="grid gap-3">
          {profile.focus.map((item) => (
            <div
              className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-slate-300"
              key={item}
            >
              <span>{item}</span>
              <span className="size-2 rounded-full bg-[#f0c987]" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
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
