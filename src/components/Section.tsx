import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title?: string
  intro?: string
  children: ReactNode
  className?: string
  revealAmount?: number
}

export function Section({ id, eyebrow, title, intro, children, className = '', revealAmount = 0.18 }: SectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={`section-shell scroll-mt-28 py-16 sm:py-20 lg:py-24 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: revealAmount }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {(eyebrow || title || intro) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="mono mb-3 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300/80">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
          {intro && <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{intro}</p>}
        </div>
      )}
      {children}
    </motion.section>
  )
}
