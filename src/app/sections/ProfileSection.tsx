import { m } from 'framer-motion'
import { AnimatedSection } from '../../components/AnimatedSection'
import { CountUp } from '../../components/CountUp'
import { profile } from '../../data/profile'

export function ProfileSection() {
  return (
    <AnimatedSection
      eyebrow="About"
      id="profile"
      subtitle={profile.intro}
      title="I help digital projects move with clearer plans and steadier execution."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)]">
        <div className="grid gap-5">
          {profile.about.map((paragraph, index) => (
            <m.p
              className="text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8"
              initial={{ opacity: 0, y: 18 }}
              key={paragraph}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-80px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {paragraph}
            </m.p>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {profile.stats.map((stat, index) => (
            <m.div
              className="border-b border-white/10 pb-5 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-5 sm:last:border-r-0 lg:border-b lg:border-r-0 lg:pb-5 lg:pr-0"
              initial={{ opacity: 0, y: 18 }}
              key={stat.label}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.18, margin: '0px 0px 100px 0px' }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <p className="text-3xl font-semibold text-white">
                <CountUp
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  target={stat.target}
                />
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</p>
            </m.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
