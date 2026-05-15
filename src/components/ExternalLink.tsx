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
      className={`group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-[#f0c987] hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#07070d] ${className}`}
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
