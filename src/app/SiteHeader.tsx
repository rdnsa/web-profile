import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const navItems = [
  { label: 'About', href: '#profile' },
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('profile')

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-32% 0px -52% 0px',
        threshold: [0.12, 0.28, 0.45, 0.62],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-[20px] border border-white/10 bg-[#0b0b14]/82 px-4 shadow-[0_22px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:h-[72px] sm:rounded-[22px] sm:px-5">
        <a
          className="min-w-0 text-sm font-semibold text-white"
          href="#home"
          onClick={() => {
            setActiveId('profile')
            setIsOpen(false)
          }}
        >
          <span className="block truncate text-sm sm:text-base">{profile.name}</span>
          <span className="hidden truncate text-xs text-slate-400 sm:block">
            {profile.role}
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1)

            return (
              <a
                className={`relative rounded-[18px] px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#0b0b14] ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:bg-white/8 hover:text-white'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setActiveId(item.href.slice(1))}
              >
                {isActive ? (
                  <motion.span
                    className="absolute inset-x-4 bottom-2 h-0.5 rounded-full bg-[#f0c987]"
                    layoutId="desktop-nav-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                ) : null}
                {item.label}
              </a>
            )
          })}
        </div>

        <a
          className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#f0c987] hover:text-[#f0c987] sm:inline-flex"
          href="#contact"
          onClick={() => setActiveId('contact')}
        >
          Let&apos;s talk
        </a>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="grid size-11 place-items-center rounded-[18px] border border-white/15 text-white transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#0b0b14] lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          className="mx-auto mt-2 max-w-7xl rounded-[22px] border border-white/10 bg-[#0b0b14]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1)

              return (
                <a
                  className={`relative rounded-[18px] px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-100 hover:bg-white/8'
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => {
                    setActiveId(item.href.slice(1))
                    setIsOpen(false)
                  }}
                >
                  {isActive ? (
                    <motion.span
                      className="absolute inset-x-3 bottom-2 h-0.5 rounded-full bg-[#f0c987]"
                      layoutId="mobile-nav-underline"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  {item.label}
                </a>
              )
            })}
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}
