import { AnimatedSection } from '../../components/AnimatedSection'
import { CountUp } from '../../components/CountUp'
import { profile } from '../../data/profile'

export function ProfileSection() {
  return (
    <AnimatedSection
      eyebrow="About me"
      id="profile"
      subtitle={profile.intro}
      title="I design the path between product ideas, technical delivery, and teams that ship."
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,1.1fr)]">
        <div>
          <p className="text-lg leading-9 text-slate-700">{profile.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {profile.focus.map((focus) => (
              <span
                className="rounded-full border border-[#f765ff]/30 bg-[#ffc3b2]/40 px-4 py-2 text-sm font-semibold text-[#172033]"
                key={focus}
              >
                {focus}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {profile.stats.map((stat) => (
            <div
              className="rounded-[24px] border border-[#172033]/10 bg-white/75 p-5 shadow-[0_18px_48px_rgba(20,42,77,0.08)]"
              key={stat.label}
            >
              <p className="text-3xl font-semibold text-[#172033]">
                <CountUp
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  target={stat.target}
                />
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
