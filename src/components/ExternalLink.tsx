import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

type ExternalLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export function ExternalLink({
  href,
  children,
  className = '',
}: ExternalLinkProps) {
  return (
    <a
      className={`group inline-flex items-center justify-center gap-2 rounded-lg border border-[#172033]/10 bg-white/75 px-4 py-3 text-sm font-semibold text-[#172033] shadow-[0_1px_0_rgba(255,255,255,0.9)_inset] transition hover:border-[#f765ff]/60 hover:bg-[#ffc3b2]/35 focus:outline-none focus:ring-2 focus:ring-[#f765ff] focus:ring-offset-2 focus:ring-offset-[#fff8f3] ${className}`}
      href={href}
      rel="noreferrer"
      target={href.startsWith('http') ? '_blank' : undefined}
    >
      {children}
      {href.startsWith('http') ? (
        <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : null}
    </a>
  )
}
