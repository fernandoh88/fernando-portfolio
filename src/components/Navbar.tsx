import { Download, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { navItems } from '../data/portfolio'

const NAV_OFFSET = 84
const BOTTOM_OFFSET = 180

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  const updateActiveSection = useCallback(() => {
    const documentElement = document.documentElement
    const nearBottom = window.innerHeight + window.scrollY >= documentElement.scrollHeight - BOTTOM_OFFSET

    if (nearBottom) {
      setActive('contact')
      return
    }

    const marker = window.scrollY + window.innerHeight * 0.35
    const sections = navItems
      .map((item) => {
        const id = item.href.slice(1)
        const element = document.getElementById(id)
        return element ? { id, top: element.offsetTop } : null
      })
      .filter((section): section is { id: string; top: number } => Boolean(section))

    const current = sections.reduce((closest, section) => (section.top <= marker ? section : closest), sections[0])

    if (current?.id) setActive(current.id)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18)
      updateActiveSection()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [updateActiveSection])

  function handleNavClick(href: string) {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()

      const id = href.slice(1)
      const target = document.getElementById(id)
      if (!target) return

      setActive(id)
      setOpen(false)
      window.history.pushState(null, '', href)

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({
        top: Math.max(target.offsetTop - NAV_OFFSET, 0),
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      })
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-zinc-950/72 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="group inline-flex items-center gap-3" aria-label="Fernando Machado home">
          <span className="grid h-9 w-9 place-items-center border border-cyan-300/30 bg-cyan-300/10 text-sm font-semibold text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.14)]">
            FM
          </span>
          <span className="hidden text-sm font-medium text-zinc-100 sm:block">Fernando Machado</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === id ? 'page' : undefined}
                onClick={handleNavClick(item.href)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active === id ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/Fernando_Machado_IT_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/15"
          >
            <Download size={16} aria-hidden="true" />
            View résumé
          </a>
        </div>

        <button
          type="button"
          className="inline-grid h-10 w-10 place-items-center border border-white/10 bg-white/[0.04] text-zinc-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="section-shell pb-4 lg:hidden">
          <div className="premium-card grid gap-2 p-3">
            {navItems.map((item) => {
              const id = item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active === id ? 'page' : undefined}
                  className={`px-3 py-3 text-sm transition ${
                    active === id ? 'bg-white/10 text-white' : 'text-zinc-300 hover:text-white'
                  }`}
                  onClick={handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              )
            })}
            <a
              href="/Fernando_Machado_IT_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm font-medium text-cyan-100"
            >
              <Download size={16} aria-hidden="true" />
              View résumé
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
