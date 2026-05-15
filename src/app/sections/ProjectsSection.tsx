import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../../components/AnimatedSection'
import { CountUp } from '../../components/CountUp'
import { projects } from '../../data/profile'

export function ProjectsSection() {
  return (
    <AnimatedSection
      eyebrow="Selected projects"
      id="projects"
      subtitle="A snapshot of shipped and managed digital products across financial news, property partnership, and luxury commerce experiences."
      title="Portfolio pieces with product thinking behind the interface."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            className="group flex min-h-full flex-col overflow-hidden rounded-[30px] border border-[#172033]/10 bg-white/80 shadow-[0_24px_70px_rgba(20,42,77,0.1)]"
            initial={{ opacity: 0, y: 24 }}
            key={project.href}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true, margin: '-120px' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative overflow-hidden">
              <img
                alt=""
                className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                loading="lazy"
                src={project.image}
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#172033] backdrop-blur">
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-semibold text-[#172033]">
                  {project.title}
                </h3>
                <a
                  aria-label={`Open ${project.title}`}
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-[#172033]/10 bg-[#ffc3b2]/60 text-[#172033] transition hover:border-[#f765ff]/60 hover:bg-[#f765ff] hover:text-white"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight className="size-5" />
                </a>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">{project.summary}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {project.metrics.map((metric) => (
                  <div
                    className="rounded-[20px] border border-[#172033]/10 bg-[#fff7f1] p-4"
                    key={metric.label}
                  >
                    <p className="text-2xl font-semibold text-[#172033]">
                      <CountUp
                        decimals={metric.decimals}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        target={metric.target}
                      />
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full border border-[#f765ff]/20 bg-[#f765ff]/10 px-3 py-2 text-xs font-semibold text-[#8b168f]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
