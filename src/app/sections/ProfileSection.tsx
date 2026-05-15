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
          {profile.about.map((paragraph) => (
            <p className="text-base leading-8 text-slate-300 sm:text-lg" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {profile.stats.map((stat) => (
            <div
              className="border-b border-white/10 pb-5 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-5 sm:last:border-r-0 lg:border-b lg:border-r-0 lg:pb-5 lg:pr-0"
              key={stat.label}
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
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
