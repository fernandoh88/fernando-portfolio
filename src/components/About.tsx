import { Cpu, LifeBuoy, Wrench } from 'lucide-react'
import { principles } from '../data/portfolio'
import { Section } from './Section'

const highlights = [
  { icon: Wrench, title: 'Problem Solver', copy: 'Comfortable moving from symptoms to root causes across code, systems, and workflows.' },
  { icon: Cpu, title: 'Technical Builder', copy: 'Focused on practical web applications, maintainable interfaces, and reliable implementation details.' },
  { icon: LifeBuoy, title: 'Support Mindset', copy: 'Clear communication, careful triage, and ownership when users or systems need help.' },
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A technical profile built around execution, support, and clear communication."
      intro="I am developing a career at the intersection of software, support, and infrastructure. This portfolio is designed to show how I think through interfaces, systems, and practical technical problems."
      className="wide-section pb-10 sm:pb-12 lg:pb-14"
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon
          return (
            <article
              key={item.title}
              className="premium-card p-6 transition duration-300 ease-out hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.045] sm:p-7"
            >
              <span className="mb-5 grid h-11 w-11 place-items-center border border-cyan-300/18 bg-cyan-300/[0.07] text-cyan-200">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{item.copy}</p>
            </article>
          )
        })}
      </div>
      <div className="mt-8 border-y border-white/10 py-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-start">
          {principles.map((item, index) => (
            <li key={item.title} className="flex items-center gap-6">
              <span className="mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300">
                {item.title}
              </span>
              {index < principles.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-cyan-300/55 sm:block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
