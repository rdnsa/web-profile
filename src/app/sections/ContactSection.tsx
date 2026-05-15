import { useState } from 'react'
import { Check, Copy, Send } from 'lucide-react'
import { AnimatedSection } from '../../components/AnimatedSection'
import { ExternalLink } from '../../components/ExternalLink'
import { profile } from '../../data/profile'

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <AnimatedSection
      className="pb-20 lg:pb-28"
      eyebrow="Contact"
      id="contact"
      subtitle="Available through email, phone, LinkedIn, and GitHub from the CV contact section."
      title="Let us build digital products with clear product direction and technical execution."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
        <div className="rounded-[28px] border border-[#f765ff]/25 bg-[#ffc3b2]/35 p-5 shadow-[0_24px_70px_rgba(247,101,255,0.11)] sm:p-7">
          <Send className="mb-6 size-8 text-[#a71faf]" />
          <p className="text-2xl font-semibold leading-snug text-[#172033]">
            {profile.name}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            {profile.role} with a technical background in software development,
            creating backlog tickets, prioritizing tasks, monitoring development
            progress, and communicating with stakeholders.
          </p>
          <button
            className="mt-6 inline-flex min-w-40 items-center justify-center gap-2 rounded-lg bg-[#142a4d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#a71faf] focus:outline-none focus:ring-2 focus:ring-[#f765ff] focus:ring-offset-2 focus:ring-offset-[#ffc3b2]"
            onClick={handleCopyEmail}
            type="button"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? 'Email copied' : 'Copy email'}
          </button>
        </div>

        <div className="grid gap-3">
          {profile.contacts.map((contact) => {
            const Icon = contact.icon

            return (
              <ExternalLink
                className="justify-between px-5 py-4"
                href={contact.href}
                key={contact.href}
              >
                <span className="flex items-center gap-3">
                  <Icon className="size-5 text-[#a71faf]" />
                  <span className="grid gap-1 text-left">
                    <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {contact.label}
                    </span>
                    <span>{contact.value}</span>
                  </span>
                </span>
              </ExternalLink>
            )
          })}

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            {profile.socials.map((social) => {
              const Icon = social.icon

              return (
                <ExternalLink className="flex-1" href={social.href} key={social.href}>
                  <Icon className="size-5 text-[#a71faf]" />
                  {social.label}
                </ExternalLink>
              )
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
