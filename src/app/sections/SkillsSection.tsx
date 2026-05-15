import { AnimatedSection } from '../../components/AnimatedSection'
import { skillGroups } from '../../data/profile'

export function SkillsSection() {
  return (
    <AnimatedSection
      eyebrow="Toolkit"
      id="skills"
      subtitle="The tools, technical context, and product habits I use to turn ambiguous ideas into shipped features."
      title="A product toolkit with engineering depth."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = group.icon

          return (
            <section
              className="rounded-[24px] border border-[#172033]/10 bg-white/75 p-5 shadow-[0_18px_48px_rgba(20,42,77,0.08)]"
              key={group.title}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-[#ffc3b2]/45 text-[#a71faf]">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-lg font-semibold text-[#172033]">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    className="rounded-lg border border-[#172033]/10 bg-[#f8f3ea] px-3 py-2 text-sm text-slate-700"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </AnimatedSection>
  )
}
