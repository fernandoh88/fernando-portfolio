import { BriefcaseBusiness } from 'lucide-react'
import { experienceBullets } from '../data/portfolio'
import { Section } from './Section'

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Operations experience translated into technical reliability."
      intro="Operations background shaped around coordination, customer communication, and practical problem solving."
    >
      <div className="relative border-l border-white/10 pl-6 sm:pl-8">
        <article className="premium-card relative p-6 sm:p-7">
          <span className="absolute -left-[39px] top-7 grid h-8 w-8 place-items-center border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 sm:-left-[45px]">
            <BriefcaseBusiness size={17} aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300/75">Professional Experience</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Operations / Branch Management</h3>
              <p className="mt-2 text-zinc-400">Structural steel industry</p>
            </div>
            <span className="border border-white/10 px-3 py-1.5 text-sm text-zinc-500">2017-2020</span>
          </div>
          <ul className="mt-6 grid gap-3">
            {experienceBullets.map((item) => (
              <li key={item} className="flex gap-3 text-zinc-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
