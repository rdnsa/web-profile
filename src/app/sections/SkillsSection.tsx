import { AnimatedSection } from '../../components/AnimatedSection'
import { capabilities } from '../../data/profile'

export function SkillsSection() {
  return (
    <AnimatedSection
      eyebrow="Capabilities"
      id="skills"
      subtitle="The work is rarely only strategy or only engineering. I tend to sit in the overlap."
      title="What I bring to a product team."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {capabilities.map((capability) => {
          const Icon = capability.icon

          return (
            <section
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
              key={capability.title}
            >
              <Icon className="size-6 text-[#f0c987]" />
              <h3 className="mt-5 text-xl font-semibold text-white">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {capability.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.skills.map((skill) => (
                  <span
                    className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300"
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
