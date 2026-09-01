import { About } from './components/About'
import { BuiltForWeb } from './components/BuiltForWeb'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Terminal } from './components/Terminal'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BuiltForWeb />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Terminal />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
