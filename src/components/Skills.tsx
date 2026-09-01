import { skillGroups } from '../data/portfolio'
import { Section } from './Section'

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical stack across frontend, backend, infrastructure, and data."
      intro="No percentage bars. Just the technologies and operating context that matter for support, software, and systems roles."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group) => {
          const GroupIcon = group.icon
          return (
            <article key={group.title} className="premium-card p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <GroupIcon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{group.summary}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="group min-h-28 border border-white/10 bg-white/[0.025] p-4 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.055]"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={17} className="text-cyan-300/85" aria-hidden="true" />
                        <h4 className="font-medium text-zinc-100">{skill.name}</h4>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-zinc-500 transition group-hover:text-zinc-300">
                        {skill.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
