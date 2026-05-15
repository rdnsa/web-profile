import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { ExternalLink } from '../../components/ExternalLink'
import { profile, signaturePoints } from '../../data/profile'

export function HeroSection() {
  return (
    <section
      className="relative mx-auto grid min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:px-8 lg:py-20"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-[18px] border border-[#f765ff]/30 bg-white/70 px-4 py-2 text-sm font-semibold text-[#8b168f] shadow-sm">
          <Sparkles className="size-4" />
          {profile.role} with technical background in software development
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[#172033] sm:text-5xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ExternalLink href="#experience">View experience</ExternalLink>
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

        <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-600">
          <MapPin className="size-4 text-[#f765ff]" />
          {profile.location}
        </div>
      </motion.div>

      <motion.aside
        className="relative overflow-hidden rounded-[28px] border border-white/50 bg-[#142a4d] p-5 shadow-[0_30px_80px_rgba(20,42,77,0.24)] sm:p-6"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 hero-grid opacity-70" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#ffc3b2]">
                Portfolio console
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Product roadmap, backlog, sprint execution.
              </h2>
            </div>
            <div className="grid size-14 shrink-0 place-items-center rounded-[20px] border border-white/20 bg-white/10 text-sm font-bold text-[#ffc3b2]">
              RI
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            {profile.focus.map((item, index) => (
              <motion.div
                className="flex items-center justify-between rounded-[18px] border border-white/10 bg-white/10 px-4 py-3"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.28 + index * 0.08 }}
                key={item}
              >
                <span className="text-sm font-medium text-slate-200">{item}</span>
                <span className="h-2 w-16 rounded-full bg-gradient-to-r from-[#ffc3b2] to-[#f765ff]" />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {signaturePoints.map((point) => {
              const Icon = point.icon

              return (
                <div className="rounded-[20px] border border-white/10 bg-white/10 p-4" key={point.title}>
                  <Icon className="mb-4 size-5 text-[#ffc3b2]" />
                  <p className="text-sm font-semibold text-white">{point.title}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-300">{point.detail}</p>
                </div>
              )
            })}
          </div>

          <a
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#ffc3b2] transition hover:text-white"
            href="#profile"
          >
            Explore profile
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </motion.aside>
    </section>
  )
}
