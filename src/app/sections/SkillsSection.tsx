import { motion } from 'framer-motion'
import { AnimatedSection } from '../../components/AnimatedSection'
import { capabilities } from '../../data/profile'

export function SkillsSection() {
  return (
    <AnimatedSection
      eyebrow="Capabilities"
      id="skills"
      subtitle="The work is rarely only strategy or only engineering. I tend to sit in the overlap."
      title="What I bring to a project team."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon

          return (
            <motion.section
              className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
              initial={{ opacity: 0, y: 22 }}
              key={capability.title}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2, margin: '-40px' }}
              whileHover={{ y: -6, borderColor: 'rgba(167, 139, 250, 0.28)' }}
              whileInView={{ opacity: 1, y: 0 }}
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
            </motion.section>
          )
        })}
      </div>
    </AnimatedSection>
  )
}
