import { ArrowUpRight, Code2, Mail, MapPin, Network } from 'lucide-react'
import { contactLinks } from '../data/portfolio'
import { Section } from './Section'

const iconMap = {
  Email: Mail,
  LinkedIn: Network,
  GitHub: Code2,
  Location: MapPin,
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something useful.">
      <div className="premium-card grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-lg leading-8 text-zinc-400">
            I am open to conversations about IT support, application support, cloud and infrastructure work, and junior
            developer opportunities.
          </p>
        </div>
        <div className="grid gap-3">
          {contactLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap]
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border border-white/10 bg-white/[0.025] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.055]"
              >
                <Icon size={20} className="text-cyan-300" aria-hidden="true" />
                <span>
                  <span className="block text-sm font-medium text-zinc-100">{link.label}</span>
                  <span className="mt-1 block text-sm text-zinc-500">{link.value}</span>
                </span>
                <ArrowUpRight size={17} className="text-zinc-500 transition group-hover:text-cyan-200" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
