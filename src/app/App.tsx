import {
  LazyMotion,
  MotionConfig,
  domAnimation,
  m,
  useScroll,
  useSpring,
} from 'framer-motion'
import { DesktopCursor } from './DesktopCursor'
import { DuckFollower } from './DuckFollower'
import { PageTransition } from './PageTransition'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProfileSection } from './sections/ProfileSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'
import { SiteHeader } from './SiteHeader'
import { profile } from '../data/profile'

export function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen overflow-x-hidden bg-[#07070d] text-[#f5f2fb]">
          <PageTransition />
          <m.div
            className="fixed left-0 top-0 z-[60] h-1 origin-left bg-[#a78bfa]"
            style={{ scaleX, width: '100%' }}
          />
          <DesktopCursor />
          <DuckFollower />
          <SiteHeader />
          <main className="pt-20 sm:pt-24">
            <HeroSection />
            <ProfileSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-400">
            <p>{profile.fullName} - project delivery with technical depth.</p>
          </footer>
        </div>
      </LazyMotion>
    </MotionConfig>
  )
}
