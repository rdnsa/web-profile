import { motion, useScroll, useSpring } from 'framer-motion'
import { DuckFollower } from './DuckFollower'
import { SiteHeader } from './SiteHeader'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProfileSection } from './sections/ProfileSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SkillsSection } from './sections/SkillsSection'
import { VisualGallerySection } from './sections/VisualGallerySection'
import { profile } from '../data/profile'

export function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff8f3] text-slate-700">
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-[#f765ff]"
        style={{ scaleX, width: '100%' }}
      />
      <SiteHeader />
      <DuckFollower />
      <main className="pt-24">
        <HeroSection />
        <ProfileSection />
        <ProjectsSection />
        <VisualGallerySection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="border-t border-[#172033]/10 px-5 py-8 text-center text-sm text-slate-500">
        <p>{profile.name} - Project Manager with technical background in software development.</p>
      </footer>
    </div>
  )
}
