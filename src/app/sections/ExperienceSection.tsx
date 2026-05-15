import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'
import { AnimatedSection } from '../../components/AnimatedSection'
import { experiences } from '../../data/profile'

export function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExperience = experiences[activeIndex]

  return (
    <AnimatedSection
      eyebrow="Delivery stories"
      id="experience"
      subtitle="Selected product delivery moments across AI products, marketplace finance features, and mental health innovation."
      title="A behind-the-scenes look at how the work gets shipped."
    >
      <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="grid gap-3">
          {experiences.map((experience, index) => {
            const isActive = activeIndex === index

            return (
              <button
                aria-pressed={isActive}
                className={`rounded-[22px] border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#f765ff] focus:ring-offset-2 focus:ring-offset-[#fff8f3] ${
                  isActive
                    ? 'border-[#f765ff]/45 bg-[#ffc3b2]/35 text-[#172033]'
                    : 'border-[#172033]/10 bg-white/70 text-slate-700 hover:border-[#f765ff]/35 hover:bg-white'
                }`}
                key={experience.company}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span className="text-sm font-semibold">{experience.role}</span>
                <span className="mt-2 block text-base font-semibold text-[#172033]">
                  {experience.company}
                </span>
                <span className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <CalendarDays className="size-3.5" />
                  {experience.period}
                </span>
              </button>
            )
          })}
        </div>

        <article className="min-h-[560px] rounded-[28px] border border-[#172033]/10 bg-white/80 p-5 shadow-[0_24px_70px_rgba(20,42,77,0.09)] sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              initial={{ opacity: 0, y: 14 }}
              key={activeExperience.company}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-4 border-b border-[#172033]/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a71faf]">
                    {activeExperience.role}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#172033]">
                    {activeExperience.company}
                  </h3>
                </div>
                <div className="grid gap-2 text-sm text-slate-500 sm:text-right">
                  <span className="flex items-center gap-2 sm:justify-end">
                    <CalendarDays className="size-4 text-[#f765ff]" />
                    {activeExperience.period}
                  </span>
                  <span className="flex items-center gap-2 sm:justify-end">
                    <MapPin className="size-4 text-[#f765ff]" />
                    {activeExperience.location}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-700">
                {activeExperience.description}
              </p>

              <ul className="mt-7 grid gap-4">
                {activeExperience.highlights.map((highlight) => (
                  <li className="flex gap-3 text-sm leading-7 text-slate-700" key={highlight}>
                    <span className="mt-2.5 size-2 shrink-0 rounded-full bg-[#f765ff]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {activeExperience.tags.map((tag) => (
                  <span
                    className="rounded-lg border border-[#f765ff]/25 bg-[#ffc3b2]/35 px-3 py-2 text-xs font-semibold text-[#8b168f]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </AnimatedSection>
  )
}
