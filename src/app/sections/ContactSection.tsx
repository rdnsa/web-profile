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
      subtitle="Open to product, project, and delivery conversations."
      title="Let&apos;s build the next product with sharper direction and calmer execution."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 sm:p-7">
          <Send className="mb-6 size-8 text-[#f0c987]" />
          <p className="text-2xl font-semibold leading-snug text-white">
            {profile.fullName}
          </p>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {profile.contactCopy}
          </p>
          <button
            className="mt-6 inline-flex min-w-40 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#090910] transition hover:bg-[#f0c987] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#07070d]"
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
                className="justify-between rounded-[22px] px-5 py-4"
                href={contact.href}
                key={contact.href}
              >
                <span className="flex items-center gap-3">
                  <Icon className="size-5 text-[#f0c987]" />
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
                  <Icon className="size-5 text-[#f0c987]" />
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
