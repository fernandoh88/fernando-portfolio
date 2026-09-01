import { useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent, ReactNode } from 'react'
import { Section } from './Section'

type Line = {
  type: 'input' | 'output'
  value: ReactNode
}

const initialLines: Line[] = [
  { type: 'output', value: 'Fernando Machado portfolio terminal. Type "help" to begin.' },
  { type: 'output', value: 'New Westminster, BC, Canada' },
]

const commandResponses: Record<string, ReactNode> = {
  help: (
    <span className="whitespace-pre-wrap">{`Available commands:

about      Who I am
skills     Technical skills
projects   Featured projects
contact    Contact information
socials    LinkedIn and GitHub
clear      Clear terminal`}</span>
  ),
  about: (
    <span className="whitespace-pre-wrap">{`Fernando Machado
IT & Software Professional

Education
Computer Studies & Information Systems
2024–2026

New Westminster, BC, Canada

Focus:
Software development, IT support, cloud infrastructure, networking, and technical problem solving.`}</span>
  ),
  skills: (
    <span className="whitespace-pre-wrap">{`Frontend
React
JavaScript
TypeScript
HTML
CSS

Programming
Python
Java
Node.js

Infrastructure
Linux
Windows
Networking
Cloud

Data
MongoDB
SQL

Mobile
Android
Firebase`}</span>
  ),
  projects: (
    <span className="whitespace-pre-wrap">{`01  Silent Auction Platform
    Full-stack real-time web application

02  Workout Planner App
    Native Android fitness application

03  Spam Email Detection
    Machine-learning classification project

Try: projects silent-auction, projects workout-planner, projects spam-detector`}</span>
  ),
  'projects silent-auction': (
    <span className="whitespace-pre-wrap">{`Silent Auction Platform
Full-stack real-time web application

React / Node.js / Express / MongoDB / Firebase Authentication / Socket.IO / Nodemailer`}</span>
  ),
  'projects workout-planner': (
    <span className="whitespace-pre-wrap">{`Workout Planner App
Native Android fitness application

Java / Android SDK / Firebase / Retrofit / Wger API`}</span>
  ),
  'projects spam-detector': (
    <span className="whitespace-pre-wrap">{`Spam Email Detection
Machine-learning classification project

Python / Pandas / Scikit-learn / Random Forest / Jupyter Notebook`}</span>
  ),
  contact: (
    <span className="whitespace-pre-wrap">
      Email{'\n'}
      <TerminalLink href="mailto:fernando403@gmail.com">fernando403@gmail.com</TerminalLink>
      {'\n\n'}Location{'\n'}New Westminster, BC, Canada{'\n\n'}LinkedIn{'\n'}
      <TerminalLink href="https://www.linkedin.com/in/fernando-machado8/">
        linkedin.com/in/fernando-machado8
      </TerminalLink>
      {'\n\n'}GitHub{'\n'}
      <TerminalLink href="https://github.com/fernandoh88">github.com/fernandoh88</TerminalLink>
    </span>
  ),
  socials: (
    <span className="whitespace-pre-wrap">
      LinkedIn  →{' '}
      <TerminalLink href="https://www.linkedin.com/in/fernando-machado8/">
        linkedin.com/in/fernando-machado8
      </TerminalLink>
      {'\n'}GitHub    → <TerminalLink href="https://github.com/fernandoh88">github.com/fernandoh88</TerminalLink>
      {'\n'}Email     → <TerminalLink href="mailto:fernando403@gmail.com">fernando403@gmail.com</TerminalLink>
    </span>
  ),
}

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(initialLines)
  const [command, setCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalized = command.trim().toLowerCase()
    if (!normalized) return

    if (normalized === 'clear') {
      setLines(initialLines)
      setCommand('')
      setCommandHistory([])
      setHistoryIndex(null)
      return
    }

    const enteredCommand = command.trim()
    setCommandHistory((current) => [...current, enteredCommand])
    setHistoryIndex(null)
    setLines((current) => [
      ...current,
      { type: 'input', value: enteredCommand },
      {
        type: 'output',
        value: commandResponses[normalized] ?? (
          <span className="whitespace-pre-wrap">{`Command not found: ${enteredCommand}
Type "help" to see available commands.`}</span>
        ),
      },
    ])
    setCommand('')
  }

  function onInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return
    if (commandHistory.length === 0) return

    event.preventDefault()

    if (event.key === 'ArrowUp') {
      const nextIndex = historyIndex === null ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
      setHistoryIndex(nextIndex)
      setCommand(commandHistory[nextIndex])
      return
    }

    if (historyIndex === null) return

    const nextIndex = historyIndex + 1
    if (nextIndex >= commandHistory.length) {
      setHistoryIndex(null)
      setCommand('')
      return
    }

    setHistoryIndex(nextIndex)
    setCommand(commandHistory[nextIndex])
  }

  function onCommandChange(value: string) {
    setCommand(value)
    setHistoryIndex(null)
  }

  return (
    <Section
      id="terminal"
      eyebrow="Interactive Terminal"
      title="A small command surface powered by React state."
      intro="The portfolio includes focused interactivity without turning the whole site into a terminal theme."
    >
      <div
        className="premium-card overflow-hidden"
        onClick={() => inputRef.current?.focus()}
        role="group"
        aria-label="Interactive portfolio terminal"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
          <span className="mono ml-3 text-xs text-zinc-500">portfolio-terminal</span>
        </div>
        <div className="mono max-h-[540px] min-h-[330px] overflow-y-auto p-5 text-sm leading-7 text-zinc-300">
          <div aria-live="polite" className="space-y-2">
            {lines.map((line, index) => (
              <div key={`${line.type}-${index}`} className={line.type === 'input' ? 'text-cyan-200' : 'text-zinc-400'}>
                {line.type === 'input' ? `$ ${line.value}` : line.value}
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="mt-4 flex items-center gap-2">
            <label htmlFor="terminal-input" className="text-cyan-200">
              $
            </label>
            <input
              id="terminal-input"
              ref={inputRef}
              value={command}
              onChange={(event) => onCommandChange(event.target.value)}
              onKeyDown={onInputKeyDown}
              className="min-w-0 flex-1 border-none bg-transparent text-zinc-100 outline-none placeholder:text-zinc-600"
              placeholder="help"
              autoComplete="off"
              aria-label="Portfolio terminal command input"
            />
          </form>
        </div>
      </div>
    </Section>
  )
}

function TerminalLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="text-cyan-200 underline decoration-cyan-300/30 underline-offset-4 transition hover:text-cyan-100"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
    </a>
  )
}
