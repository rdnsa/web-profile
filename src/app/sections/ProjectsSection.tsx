import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../../components/AnimatedSection'
import { projects } from '../../data/profile'

export function ProjectsSection() {
  return (
    <AnimatedSection
      eyebrow="Projects"
      id="projects"
      subtitle="Three live projects across financial news, property, and luxury commerce."
      title="Selected work that shows how I manage digital projects."
    >
      <div className="grid gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <motion.article
            className="grid gap-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)] lg:items-center lg:p-6"
            initial="hidden"
            key={project.href}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true, margin: '-120px' }}
            whileHover={{ y: -6, borderColor: 'rgba(240, 201, 135, 0.28)' }}
            whileInView="visible"
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0c987]">
                0{index + 1} / {project.category}
              </p>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{project.role}</p>
                </div>
                <a
                  aria-label={`Open ${project.title}`}
                  className="grid size-11 shrink-0 place-items-center rounded-full border border-white/12 text-white transition hover:border-[#f0c987] hover:text-[#f0c987]"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight className="size-5" />
                </a>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                {project.summary}
              </p>

              <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-400">
                {project.highlights.map((highlight) => (
                  <li className="flex gap-3" key={highlight}>
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#a78bfa]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <motion.div
              className={`overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] ${
                index % 2 === 1 ? 'lg:order-1' : ''
              }`}
              variants={{
                hidden: { opacity: 0, y: 24, clipPath: 'inset(0 0 100% 0 round 24px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  clipPath: 'inset(0 0 0% 0 round 24px)',
                },
              }}
              whileHover={{ scale: 1.01 }}
              transition={{
                clipPath: { duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.5, delay: index * 0.08 },
                y: { duration: 0.5, delay: index * 0.08 },
                scale: { type: 'spring', stiffness: 220, damping: 22 },
              }}
            >
              <img
                alt=""
                className={`aspect-[16/10] w-full object-cover ${project.imageClassName ?? ''}`}
                loading="lazy"
                src={project.image}
              />
            </motion.div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
