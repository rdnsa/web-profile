import { Award, CalendarDays, MapPin } from 'lucide-react'
import { AnimatedSection } from '../../components/AnimatedSection'
import { education, organizations } from '../../data/profile'

export function EducationSection() {
  return (
    <AnimatedSection
      eyebrow="Journey"
      id="education"
      subtitle="Scholarship, research, student leadership, and community programs that shaped the way I work."
      title="Recognition, research, and leadership beyond the product board."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <article className="rounded-[28px] border border-[#172033]/10 bg-white/80 p-5 shadow-[0_24px_70px_rgba(20,42,77,0.09)] sm:p-7">
          <div className="flex flex-col gap-4 border-b border-[#172033]/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#a71faf]">
                Education Level
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#172033]">
                {education.institution}
              </h3>
              <p className="mt-2 text-slate-700">{education.degree}</p>
            </div>
            <div className="grid gap-2 text-sm text-slate-500 sm:text-right">
              <span className="flex items-center gap-2 sm:justify-end">
                <CalendarDays className="size-4 text-[#f765ff]" />
                {education.period}
              </span>
              <span className="flex items-center gap-2 sm:justify-end">
                <MapPin className="size-4 text-[#f765ff]" />
                {education.location}
              </span>
            </div>
          </div>

          <ul className="mt-7 grid gap-4">
            {education.highlights.map((highlight) => (
              <li className="flex gap-3 text-sm leading-7 text-slate-700" key={highlight}>
                <Award className="mt-1 size-4 shrink-0 text-[#f765ff]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-4">
          {organizations.map((organization) => (
            <article
              className="rounded-[24px] border border-[#172033]/10 bg-white/75 p-5 shadow-[0_18px_48px_rgba(20,42,77,0.08)]"
              key={organization.name}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a71faf]">
                {organization.period}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-[#172033]">
                {organization.name}
              </h3>
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500">
                <span>{organization.role}</span>
                <span>{organization.location}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {organization.description}
              </p>
              <ul className="mt-5 grid gap-3">
                {organization.highlights.map((highlight) => (
                  <li className="flex gap-3 text-sm leading-6 text-slate-700" key={highlight}>
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#f765ff]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
