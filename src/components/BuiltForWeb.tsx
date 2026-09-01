import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { MonitorSmartphone } from 'lucide-react'
import { useState } from 'react'
import { Section } from './Section'

const demos = {
  HTML: {
    code: [
      ['tag', '<main'],
      ['attr', ' class="profile"'],
      ['tag', '>'],
      ['', '\n  '],
      ['tag', '<section'],
      ['attr', ' aria-labelledby="intro"'],
      ['tag', '>'],
      ['', '\n    '],
      ['tag', '<h1'],
      ['attr', ' id="intro"'],
      ['tag', '>'],
      ['', 'Useful systems, clearly built.'],
      ['tag', '</h1>'],
      ['', '\n    '],
      ['tag', '<p>'],
      ['', 'Responsive, accessible, and maintainable.'],
      ['tag', '</p>'],
      ['', '\n  '],
      ['tag', '</section>'],
      ['', '\n'],
      ['tag', '</main>'],
    ],
  },
  CSS: {
    code: [
      ['selector', '.profile'],
      ['', ' {\n  '],
      ['prop', 'display'],
      ['', ': grid;\n  '],
      ['prop', 'grid-template-columns'],
      ['', ': repeat(auto-fit, minmax(18rem, 1fr));\n  '],
      ['prop', 'gap'],
      ['', ': clamp(1rem, 3vw, 2rem);\n  '],
      ['prop', 'border'],
      ['', ': 1px solid color-mix(in oklab, white 12%, transparent);\n  '],
      ['prop', 'background'],
      ['', ': linear-gradient(180deg, #10131a, #080a0f);\n}'],
    ],
  },
  React: {
    code: [
      ['kw', 'function'],
      ['', ' StatusCard({ system }) {\n  '],
      ['kw', 'return'],
      ['', ' (\n    '],
      ['tag', '<article'],
      ['attr', ' aria-live="polite"'],
      ['tag', '>'],
      ['', '\n      '],
      ['tag', '<h2>'],
      ['', '{system.name}'],
      ['tag', '</h2>'],
      ['', '\n      '],
      ['tag', '<Badge>'],
      ['', '{system.state}'],
      ['tag', '</Badge>'],
      ['', '\n    '],
      ['tag', '</article>'],
      ['', '\n  )\n}'],
    ],
  },
}

const colors: Record<string, string> = {
  tag: 'text-cyan-300',
  attr: 'text-sky-200',
  selector: 'text-emerald-200',
  prop: 'text-cyan-200',
  kw: 'text-fuchsia-200',
}

export function BuiltForWeb() {
  const [active, setActive] = useState<keyof typeof demos>('HTML')
  const reduceMotion = useReducedMotion()

  return (
    <Section
      id="web"
      eyebrow="Built for the Web"
      title="Clean. Semantic. Responsive."
      intro="An interactive demo pairing readable code with a live-looking preview."
      className="wide-section pt-10 sm:pt-12 lg:pt-14"
    >
      <motion.div
        className="premium-card relative overflow-hidden"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.42, delay: 0.08, ease: 'easeOut' }}
      >
        <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-cyan-300/[0.055] blur-3xl" />
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
          <div className="flex items-center gap-2 text-zinc-300">
            <MonitorSmartphone size={18} className="text-cyan-300" aria-hidden="true" />
            <span className="mono text-sm">web.demo</span>
          </div>
          <div
            className="grid grid-cols-3 border border-white/10 bg-black/25 p-1"
            role="tablist"
            aria-label="Code demo tabs"
          >
            {(Object.keys(demos) as Array<keyof typeof demos>).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active === tab}
                className={`px-5 py-2.5 text-sm font-medium transition duration-300 ${
                  active === tab
                    ? 'border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-50'
                    : 'border border-transparent text-zinc-500 hover:text-zinc-200'
                }`}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-white/10 bg-black/25 p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <AnimatePresence mode="wait">
              <motion.pre
                key={active}
                className="mono min-h-[360px] overflow-auto text-sm leading-7 text-zinc-300 sm:text-[15px] lg:min-h-[430px]"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
              >
                <code>
                  {demos[active].code.map(([kind, value], index) => (
                    <span key={`${active}-${index}`} className={colors[kind] ?? ''}>
                      {value}
                    </span>
                  ))}
                </code>
              </motion.pre>
            </AnimatePresence>
          </div>
          <div className="grid min-h-[380px] place-items-center bg-white/[0.012] p-5 sm:p-7 lg:min-h-[430px]">
            <motion.article
              key={active}
              className="w-full max-w-md border border-white/10 bg-zinc-950/72 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.26)] sm:p-7"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="mono text-xs uppercase tracking-[0.2em] text-zinc-500">Preview</span>
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight text-white">Useful systems, clearly built.</h3>
              <p className="mt-3 leading-7 text-zinc-400">Responsive, accessible, and maintainable by design.</p>
              <div className="mt-7 grid grid-cols-3 gap-2">
                {['HTML', 'CSS', 'React'].map((item) => (
                  <span
                    key={item}
                    className={`border px-3 py-3 text-center text-xs font-medium ${
                      item === active
                        ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-100'
                        : 'border-white/10 bg-white/[0.03] text-zinc-500'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
