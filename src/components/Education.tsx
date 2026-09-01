import { GraduationCap } from 'lucide-react'
import { Section } from './Section'

const coursework = ['Web development', 'Programming fundamentals', 'Databases', 'Systems analysis', 'Networking concepts']

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Formal training in computer studies and information systems."
    >
      <article className="premium-card grid gap-6 p-6 sm:p-7 lg:grid-cols-[auto_1fr]">
        <span className="grid h-14 w-14 place-items-center border border-cyan-300/25 bg-cyan-300/10 text-cyan-200">
          <GraduationCap size={28} aria-hidden="true" />
        </span>
        <div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Douglas College</h3>
              <p className="mt-2 text-zinc-300">Diploma in Computer Studies & Information Systems</p>
            </div>
            <span className="border border-white/10 px-3 py-1.5 text-sm text-zinc-500">2024-2026</span>
          </div>
          <div className="mt-6">
            <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-500">Relevant coursework</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {coursework.map((item) => (
                <span key={item} className="border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Section>
  )
}
