import { motion, useReducedMotion } from 'framer-motion'
import { Cloud, Code2, Server, TerminalSquare } from 'lucide-react'
import type { MouseEvent } from 'react'

const stack = [
  { label: 'frontend', value: 'React', icon: Code2 },
  { label: 'backend', value: 'Node.js', icon: Server },
  { label: 'systems', value: 'Linux', icon: TerminalSquare },
  { label: 'cloud', value: 'Ready', icon: Cloud },
]

export function DeveloperProfile() {
  const reduceMotion = useReducedMotion()

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10
    event.currentTarget.style.setProperty('--profile-x', `${x}px`)
    event.currentTarget.style.setProperty('--profile-y', `${y}px`)
  }

  return (
    <motion.div
      className="relative overflow-hidden rounded-[14px] border border-cyan-200/16 bg-zinc-950/68 p-4 shadow-[0_16px_42px_rgba(0,0,0,0.22),0_0_24px_rgba(34,211,238,0.045)] backdrop-blur-md sm:p-5"
      onMouseMove={onMouseMove}
      onMouseLeave={(event) => {
        event.currentTarget.style.setProperty('--profile-x', '0px')
        event.currentTarget.style.setProperty('--profile-y', '0px')
      }}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.25 }}
      aria-label="Developer profile technical summary"
    >
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-cyan-100/[0.07] to-transparent"
          animate={{ x: ['0%', '430%'] }}
          transition={{ duration: 5.5, repeat: Infinity, repeatDelay: 3.5, ease: 'easeInOut' }}
        />
      )}
      <div
        className="pointer-events-none absolute h-24 w-24 rounded-full bg-cyan-300/[0.07] blur-2xl transition-transform duration-300"
        style={{ transform: 'translate(var(--profile-x, 0px), var(--profile-y, 0px))', right: '-2rem', top: '-2rem' }}
      />
      <div className="relative mb-4 flex items-center justify-between gap-3">
        <p className="mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">developer.profile</p>
        <span className="mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/60">01</span>
      </div>

      <div className="relative grid gap-2.5">
        {stack.map((item) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.label}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 border border-white/[0.07] bg-white/[0.022] px-3 py-2.5 transition hover:border-cyan-300/20 hover:bg-cyan-300/[0.04]"
              whileHover={reduceMotion ? undefined : { x: 2 }}
            >
              <span className="grid h-7 w-7 place-items-center border border-white/10 bg-black/25 text-cyan-200">
                <Icon size={14} aria-hidden="true" />
              </span>
              <span className="text-sm font-medium text-zinc-100">{item.value}</span>
              <span className="mono text-xs text-zinc-500">{item.label}</span>
            </motion.div>
          )
        })}
      </div>

      <div className="relative mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-medium text-emerald-200">
        <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.62)]" />
        Available
      </div>
    </motion.div>
  )
}
