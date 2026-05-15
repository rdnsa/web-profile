import { motion } from 'framer-motion'
import { AnimatedSection } from '../../components/AnimatedSection'

const visualCards = [
  {
    title: 'Roadmap & Sprint Execution',
    caption: 'Product roadmap, backlog prioritization, and sprint execution.',
    src: '/images/roadmap-dashboard.svg',
  },
  {
    title: 'AI Product Lab',
    caption: 'AI summarization, recommendation systems, and machine learning.',
    src: '/images/ai-product-lab.svg',
  },
  {
    title: 'Mobile Product Research',
    caption: 'Usability testing, user feedback analysis, and product experience.',
    src: '/images/mobile-research.svg',
  },
  {
    title: 'Cross-functional Leadership',
    caption: 'Stakeholders, AI engineers, QA, developers, product, and design.',
    src: '/images/leadership-network.svg',
  },
]

export function VisualGallerySection() {
  return (
    <AnimatedSection
      eyebrow="Visual System"
      id="visuals"
      subtitle="A brighter visual layer inspired by product dashboards, AI workflows, mobile research, and team leadership."
      title="Visual stories behind the work."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {visualCards.map((card, index) => (
          <motion.article
            className="group overflow-hidden rounded-[28px] border border-[#172033]/10 bg-white/80 shadow-[0_20px_60px_rgba(20,42,77,0.08)]"
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: true, margin: '-120px' }}
          >
            <div className="overflow-hidden">
              <img
                alt=""
                className="aspect-[16/11] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                src={card.src}
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#172033]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.caption}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  )
}
