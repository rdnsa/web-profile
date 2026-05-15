import { useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'
import { Check, Copy, Send } from 'lucide-react'
import { AnimatedSection } from '../../components/AnimatedSection'
import { ExternalLink } from '../../components/ExternalLink'
import { profile } from '../../data/profile'

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const resetTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(profile.email)
    setCopied(true)

    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current)
    }

    resetTimerRef.current = window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <AnimatedSection
      className="pb-20 lg:pb-28"
      eyebrow="Contact"
      id="contact"
      subtitle="Open to project management, delivery, and coordination conversations."
      title="Let&apos;s move the next digital project with sharper planning and calmer execution."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,1.05fr)]">
        <m.div
          className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4 sm:p-7"
          initial={{ opacity: 0, y: 22 }}
          viewport={{ once: true, amount: 0.18, margin: '-40px' }}
          whileHover={{ y: -5, borderColor: 'rgba(240, 201, 135, 0.24)' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Send className="mb-6 size-8 text-[#f0c987]" />
          <p className="text-xl font-semibold leading-snug text-white sm:text-2xl">
            {profile.fullName}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            {profile.contactCopy}
          </p>
          <button
            className="mt-6 inline-flex w-full min-w-40 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-[#090910] transition hover:bg-[#f0c987] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#07070d] sm:w-auto"
            onClick={handleCopyEmail}
            type="button"
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? 'Email copied' : 'Copy email'}
          </button>
        </m.div>

        <div className="grid gap-3">
          {profile.contacts.map((contact, index) => {
            const Icon = contact.icon

            return (
              <m.div
                initial={{ opacity: 0, y: 16 }}
                key={contact.href}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.2, margin: '-40px' }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <ExternalLink
                  className="w-full justify-between rounded-[22px] px-4 py-4 sm:px-5"
                  href={contact.href}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-5 text-[#f0c987]" />
                    <span className="grid gap-1 text-left">
                      <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        {contact.label}
                      </span>
                      <span className="break-all sm:break-normal">{contact.value}</span>
                    </span>
                  </span>
                </ExternalLink>
              </m.div>
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
