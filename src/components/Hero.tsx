import { motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react'
import type { MouseEvent } from 'react'
import { DeveloperProfile } from './DeveloperProfile'

export function Hero() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const portraitX = useTransform(pointerX, [-0.5, 0.5], [-3, 3])
  const portraitY = useTransform(pointerY, [-0.5, 0.5], [-3, 3])
  const panelX = useTransform(pointerX, [-0.5, 0.5], [6, -6])
  const panelY = useTransform(pointerY, [-0.5, 0.5], [5, -5])
  const glowX = useTransform(pointerX, [-0.5, 0.5], [-14, 14])
  const glowY = useTransform(pointerY, [-0.5, 0.5], [-10, 10])

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      id="top"
      className="hero-shell grid min-h-[92svh] items-center gap-10 pt-28 sm:gap-11 lg:grid-cols-[minmax(0,1fr)_minmax(410px,0.8fr)] lg:gap-9 lg:pt-20 xl:gap-10"
    >
      <div className="max-w-[740px]">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400">
          <Sparkles size={13} className="text-cyan-300/85" aria-hidden="true" />
          IT support, infrastructure, and software delivery
        </div>
        <p className="text-lg font-medium text-zinc-200">Fernando Machado</p>
        <p className="mono mt-2 text-sm uppercase tracking-[0.22em] text-cyan-300/80">IT & Software Professional</p>
        <h1 className="mt-7 max-w-[760px] text-[3.35rem] font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-[4.15rem] lg:text-[4.55rem] xl:text-[5rem]">
          <span className="block">I build software,</span>
          <span className="block">solve technical problems,</span>
          <span className="block">and keep systems running.</span>
        </h1>
        <p className="mt-6 max-w-[620px] text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
          A technical portfolio for roles across IT support, application support, cloud infrastructure, and junior
          software development, built to show practical engineering judgment and clean execution.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-[6px] border border-cyan-300/35 bg-cyan-300/[0.08] px-5 py-2.5 text-sm font-semibold text-zinc-50 shadow-[0_0_20px_rgba(34,211,238,0.08)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-300/[0.14] focus-visible:outline-cyan-200"
          >
            Explore my work
            <ArrowRight size={16} className="transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="/Fernando_Machado_IT_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/12 bg-zinc-950/50 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.055] focus-visible:outline-cyan-200"
          >
            <Download size={16} aria-hidden="true" />
            Download résumé
          </a>
        </div>
        <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm text-zinc-400 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div className="border-l border-white/10 py-1 pl-4">
            <dt className="mono text-xs uppercase tracking-[0.18em] text-zinc-500">Location</dt>
            <dd className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-zinc-300">
              <MapPin size={14} className="shrink-0" aria-hidden="true" />
              New Westminster, BC, Canada
            </dd>
          </div>
          <div className="border-l border-white/10 py-1 pl-4">
            <dt className="mono text-xs uppercase tracking-[0.18em] text-zinc-500">Focus</dt>
            <dd className="mt-1 text-zinc-300">Software + systems</dd>
          </div>
          <div className="border-l border-white/10 py-1 pl-4">
            <dt className="mono text-xs uppercase tracking-[0.18em] text-zinc-500">Status</dt>
            <dd className="mt-1 text-zinc-300">Open to roles</dd>
          </div>
        </dl>
      </div>
      <motion.div
        className="relative mx-auto flex w-full max-w-[430px] flex-col items-center gap-4 lg:mr-0 lg:min-h-[600px] lg:max-w-[585px] lg:items-stretch lg:gap-0"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetPointer}
        initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <motion.div
          className="pointer-events-none absolute left-6 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl lg:h-[28rem] lg:w-[28rem]"
          style={reduceMotion ? undefined : { x: glowX, y: glowY }}
        />
        <div className="mono absolute -top-9 right-8 hidden text-[9px] uppercase tracking-[0.2em] text-cyan-200/28 lg:block">
          &lt;DeveloperProfile /&gt;
        </div>
        <div className="absolute right-20 top-4 hidden h-8 w-8 border-r border-t border-cyan-200/25 lg:block" />

        <motion.figure
          className="relative w-full max-w-[410px] overflow-hidden rounded-[16px] border border-cyan-200/20 bg-zinc-950/75 shadow-[0_26px_70px_rgba(0,0,0,0.32)] lg:absolute lg:left-0 lg:top-16"
          style={reduceMotion ? undefined : { x: portraitX, y: portraitY }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <div className="absolute -inset-px rounded-[16px] border border-cyan-100/10" />
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-[15px]"
            whileHover={reduceMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <img
              src="/images/fernando-profile.png"
              alt="Fernando Machado"
              className="h-full w-full object-cover"
              style={{ objectPosition: 'center 65%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/18 via-transparent to-cyan-200/[0.035]" />
          </motion.div>
        </motion.figure>

        <motion.div
          className="relative z-20 w-full max-w-[360px] lg:absolute lg:bottom-20 lg:right-0 lg:max-w-[300px]"
          style={reduceMotion ? undefined : { x: panelX, y: panelY }}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
        >
          <DeveloperProfile />
        </motion.div>
      </motion.div>
    </section>
  )
}
