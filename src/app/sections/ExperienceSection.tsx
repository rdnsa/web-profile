import { m } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'
import { AnimatedSection } from '../../components/AnimatedSection'
import { experiences } from '../../data/profile'

export function ExperienceSection() {
  return (
    <AnimatedSection
      eyebrow="Experience"
      id="experience"
      subtitle="A few roles that shaped how I lead projects, work with engineers, and think about delivery."
      title="Selected experience, kept concise."
    >
      <div className="grid gap-4">
        {experiences.map((experience, index) => (
          <m.article
            className="grid gap-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)] lg:p-6"
            initial={{ opacity: 0, y: 22 }}
            key={experience.company}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true, amount: 0.16, margin: '-40px' }}
            whileHover={{ y: -5, borderColor: 'rgba(240, 201, 135, 0.24)' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0c987]">
                {experience.role}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                {experience.company}
              </h3>
              <div className="mt-4 grid gap-2 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-[#a78bfa]" />
                  {experience.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#a78bfa]" />
                  {experience.location}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {experience.description}
              </p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-400">
                {experience.highlights.slice(0, 2).map((highlight) => (
                  <li className="flex gap-3" key={highlight}>
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#f0c987]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
