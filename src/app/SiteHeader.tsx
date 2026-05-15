import { useEffect, useState } from 'react'
import { Menu, Sparkles, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'About me', href: '#profile' },
  { label: 'Projects', href: '#projects' },
  { label: 'Visuals', href: '#visuals' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#education' },
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
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <nav className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center justify-between rounded-[26px] border border-white/20 bg-[#142a4d]/88 px-4 shadow-[0_22px_60px_rgba(20,42,77,0.24)] backdrop-blur-2xl sm:px-5">
        <a
          className="flex min-w-0 items-center gap-3 text-sm font-semibold text-white"
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-[18px] border border-white/15 bg-white/10">
            <span className="absolute left-3 top-3 h-1 w-6 rounded-full bg-[#ffc3b2]/90" />
            <span className="absolute bottom-3 left-5 h-6 w-1.5 rounded-full bg-white/80" />
            <Sparkles className="size-5 text-[#ffc3b2]" />
          </span>
          <span className="grid min-w-0">
            <span className="truncate text-base font-bold tracking-[0.08em]">
              Raden Issa
            </span>
            <span className="hidden truncate text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300 sm:block">
              Strategic product partner
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.href.slice(1)

            return (
              <a
                className={`rounded-[20px] px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#f765ff] focus:ring-offset-2 focus:ring-offset-[#142a4d] ${
                  isActive
                    ? 'bg-white text-[#142a4d] shadow-[0_1px_0_rgba(255,255,255,0.16)_inset]'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="hidden items-center rounded-[26px] border border-white/15 bg-white/10 p-1 text-xs font-bold text-slate-300 sm:flex">
          <span className="rounded-[22px] bg-white px-4 py-3 text-[#142a4d]">EN</span>
          <span className="px-4 py-3">ID</span>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className="grid size-11 place-items-center rounded-[18px] border border-white/15 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#f765ff] focus:ring-offset-2 focus:ring-offset-[#142a4d] lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          className="mx-auto mt-2 max-w-[1500px] rounded-[22px] border border-white/20 bg-[#142a4d]/92 p-3 shadow-2xl shadow-[#142a4d]/20 backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1)

              return (
                <a
                  className={`rounded-[18px] px-3 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-white text-[#142a4d]'
                      : 'text-slate-100 hover:bg-white/10'
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
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
