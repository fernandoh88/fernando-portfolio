import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects } from '../data/portfolio'
import { Section } from './Section'

type Screenshot = {
  title: string
  description: string
  src: string
  alt: string
}

type Gallery = 'silent-auction' | 'workout-planner' | 'spam-email-detection'

const silentAuctionScreenshots: Screenshot[] = [
  {
    title: 'Auction Marketplace',
    description: 'Real auction listing interface with search, item cards, auction status, pricing, and countdowns.',
    src: '/images/projects/silent-auction/auction-listing.png',
    alt: 'Silent Auction marketplace showing multiple auction items',
  },
  {
    title: 'Live Bidding',
    description: 'Detailed bidding page showing item information, highest bid, bidder identity, countdown, and bid history.',
    src: '/images/projects/silent-auction/auction-details.png',
    alt: 'Silent Auction item detail page showing live bidding and bid history',
  },
  {
    title: 'Admin Dashboard',
    description: 'Administrative interface for creating auction items and managing auction lifecycle actions.',
    src: '/images/projects/silent-auction/admin-dashboard.png',
    alt: 'Silent Auction administrative dashboard',
  },
]

const workoutScreenshots: Screenshot[] = [
  {
    title: 'Exercise Library',
    description: 'Exercises retrieved from the Wger API and displayed dynamically with descriptions and images.',
    src: '/images/projects/workout-planner/workout-planner.png',
    alt: 'Workout Planner exercise library showing exercises loaded from the Wger API',
  },
  {
    title: 'Authentication',
    description: 'Email/password registration and Google Sign-In powered by Firebase Authentication.',
    src: '/images/projects/workout-planner/login.png',
    alt: 'Workout Planner authentication screen',
  },
  {
    title: 'User Profile',
    description: 'Profile dashboard for managing personal information, current weight, target weight, and profile image.',
    src: '/images/projects/workout-planner/user-profile.png',
    alt: 'Workout Planner user profile dashboard',
  },
]

const spamScreenshots: Screenshot[] = [
  {
    title: 'ROC Curve - Random Forest',
    description:
      'Receiver Operating Characteristic analysis of the final Random Forest classifier, achieving an ROC-AUC of 0.983 on the held-out test set.',
    src: '/images/projects/spam-classificator-ml/roc-curve.png',
    alt: 'Random Forest ROC curve notebook output showing an AUC of 0.983',
  },
  {
    title: 'Random Forest Confusion Matrix',
    description:
      'Held-out test predictions visualized across spam and non-spam classes, making correct classifications and false-positive / false-negative errors easy to inspect.',
    src: '/images/projects/spam-classificator-ml/confusion-matrix.png',
    alt: 'Random Forest spam classification confusion matrix',
  },
  {
    title: 'Feature Importance',
    description:
      'Ranking of influential email features learned by the Random Forest model, including character-frequency, word-frequency, and capital-run-length signals.',
    src: '/images/projects/spam-classificator-ml/feature-importance.png',
    alt: 'Random Forest spam classifier feature importance table',
  },
]

const galleries: Record<Gallery, Screenshot[]> = {
  'silent-auction': silentAuctionScreenshots,
  'workout-planner': workoutScreenshots,
  'spam-email-detection': spamScreenshots,
}

const silentAuctionHighlights = [
  { title: 'Authentication', description: 'Firebase-based user authentication and protected actions.' },
  {
    title: 'Real-Time Bidding',
    description: 'Socket.IO updates bids between connected users without requiring a page refresh.',
  },
  { title: 'Auction Management', description: 'Admin dashboard for creating, closing, and deleting auction items.' },
  { title: 'Persistence', description: 'MongoDB stores items, bids, auction state, and related application data.' },
  { title: 'Notifications', description: 'Automated winner and outbid email notifications using Nodemailer.' },
]

const workoutHighlights = [
  {
    title: 'Authentication',
    description: 'Secure email/password registration and login along with Google Sign-In using Firebase Authentication.',
  },
  {
    title: 'Profile Management',
    description: 'Users can manage their name, current weight, target weight, and profile image.',
  },
  {
    title: 'Exercise Library',
    description:
      'Exercises are retrieved from the Wger REST API using Retrofit and Gson and displayed using RecyclerView with images loaded through Glide.',
  },
  {
    title: 'Progress Tracking',
    description:
      'Users can create fitness progress entries containing dates, weight values, and uploaded photos stored through Firebase Storage and Cloud Firestore.',
  },
]

const spamHighlights = [
  {
    title: 'MODEL DEVELOPMENT',
    description: 'Compared a Logistic Regression baseline with a Random Forest classifier.',
  },
  {
    title: 'ROBUST EVALUATION',
    description:
      'Used stratified train/test splitting, 5-fold cross-validation, and multiple classification metrics rather than relying only on training accuracy.',
  },
  {
    title: 'INTERPRETABILITY',
    description:
      'Analyzed Random Forest feature importance to understand which engineered email signals contributed most strongly to predictions.',
  },
  {
    title: 'ERROR & THRESHOLD ANALYSIS',
    description:
      'Examined false positives and classification-threshold trade-offs because incorrectly classifying legitimate email as spam is an important practical concern.',
  },
]

const implementationNotes = [
  { title: 'Java + Android SDK', description: 'Native application logic' },
  { title: 'Retrofit + Gson', description: 'REST API integration and JSON parsing' },
  { title: 'RecyclerView + Glide', description: 'Dynamic exercise lists and image loading' },
  { title: 'Firebase', description: 'Authentication, cloud data, and image storage' },
]

function BrowserFrame({
  screenshot,
  featured = false,
  onOpen,
}: {
  screenshot: Screenshot
  featured?: boolean
  onOpen: () => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group"
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <button
        type="button"
        className="block w-full border border-white/10 bg-zinc-950/78 text-left shadow-[0_24px_70px_rgba(0,0,0,0.26)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 focus-visible:outline-cyan-200"
        onClick={onOpen}
        aria-label={`Open screenshot: ${screenshot.title}`}
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
          <span className="mono ml-2 truncate text-xs text-zinc-500">silent-auction.app</span>
        </div>
        <div className={`grid place-items-center bg-black/28 p-3 sm:p-4 ${featured ? 'min-h-[360px]' : 'min-h-[240px]'}`}>
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className="max-h-full w-full object-contain"
            loading={featured ? 'eager' : 'lazy'}
          />
        </div>
      </button>
      <ScreenshotCaption screenshot={screenshot} />
    </motion.article>
  )
}

function ScreenshotCaption({ screenshot }: { screenshot: Screenshot }) {
  return (
    <div className="mt-4">
      <h4 className="text-base font-semibold text-zinc-100">{screenshot.title}</h4>
      <p className="mt-1 text-sm leading-6 text-zinc-500">{screenshot.description}</p>
    </div>
  )
}

function WorkoutScreenshot({
  screenshot,
  primary = false,
  onOpen,
}: {
  screenshot: Screenshot
  primary?: boolean
  onOpen: () => void
}) {
  return (
    <motion.article className={`group ${primary ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}>
      <button
        type="button"
        className="relative grid w-full place-items-center overflow-hidden border border-white/10 bg-white/[0.018] p-3 shadow-[0_22px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-cyan-300/25 focus-visible:outline-cyan-200"
        onClick={onOpen}
        aria-label={`Open Workout Planner screenshot: ${screenshot.title}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.10),transparent_38%),radial-gradient(circle_at_52%_70%,rgba(34,211,238,0.08),transparent_42%)]" />
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          className={`${primary ? 'max-h-[620px]' : 'max-h-[330px]'} relative w-full object-contain`}
          loading={primary ? 'eager' : 'lazy'}
        />
      </button>
      <ScreenshotCaption screenshot={screenshot} />
    </motion.article>
  )
}

function WorkoutArchitecture() {
  const nodes = ['Firebase Authentication', 'Cloud Firestore', 'Firebase Storage', 'Retrofit', 'Wger API']

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="border border-white/10 bg-black/20 p-5">
        <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-300/75">Technical Implementation</p>
        <div className="mt-5 grid gap-3">
          <div className="border border-cyan-300/20 bg-cyan-300/[0.07] p-4 text-sm font-semibold text-zinc-100">
            Android Application
          </div>
          <div className="ml-4 border-l border-cyan-300/20 pl-4">
            {nodes.map((node, index) => (
              <div key={node} className="relative py-2">
                <span className="absolute -left-[21px] top-1/2 h-px w-4 bg-cyan-300/25" />
                <div className="border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-zinc-300">{node}</div>
                {node === 'Retrofit' && (
                  <div className="mono ml-5 mt-2 text-[11px] uppercase tracking-[0.16em] text-zinc-600">
                    REST bridge to Wger API
                  </div>
                )}
                {index === nodes.length - 2 && <div className="ml-8 h-4 border-l border-cyan-300/20" />}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {implementationNotes.map((note) => (
          <div key={note.title} className="border border-white/10 bg-white/[0.025] p-4">
            <h4 className="text-sm font-semibold text-zinc-100">{note.title}</h4>
            <p className="mt-2 text-sm leading-6 text-zinc-500">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function NotebookFrame({
  screenshot,
  label,
  primary = false,
  onOpen,
}: {
  screenshot: Screenshot
  label: string
  primary?: boolean
  onOpen: () => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
    >
      <button
        type="button"
        className="block w-full border border-white/10 bg-zinc-950/80 text-left shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_26px_78px_rgba(34,211,238,0.08)] focus-visible:outline-cyan-200"
        onClick={onOpen}
        aria-label={`Open machine-learning screenshot: ${screenshot.title}`}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="mono truncate text-xs text-cyan-200/75">spam_classifier.ipynb</span>
          <span className="mono shrink-0 text-[10px] uppercase tracking-[0.18em] text-zinc-600">{label}</span>
        </div>
        <div className={`grid place-items-center bg-black/30 p-3 sm:p-4 ${primary ? 'min-h-[300px] lg:min-h-[430px]' : 'min-h-[230px]'}`}>
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className={`${primary ? 'max-h-[560px]' : 'max-h-[380px]'} w-full object-contain`}
            loading={primary ? 'eager' : 'lazy'}
          />
        </div>
      </button>
      <ScreenshotCaption screenshot={screenshot} />
    </motion.article>
  )
}

function MlPipeline() {
  const analysisOutputs = ['Confusion Matrix', 'ROC / AUC', 'Feature Importance']

  return (
    <div className="border border-white/10 bg-black/20 p-5">
      <p className="mono text-xs uppercase tracking-[0.2em] text-cyan-300/75">ML Pipeline</p>
      <div className="mt-5 grid gap-2 text-sm">
        <div className="border border-cyan-300/20 bg-cyan-300/[0.07] p-4">
          <h4 className="font-semibold text-zinc-100">UCI Spambase</h4>
          <p className="mt-1 text-zinc-500">4,601 examples / 57 features</p>
        </div>
        <PipelineConnector />
        <PipelineStep title="Data Validation" />
        <PipelineConnector />
        <PipelineStep title="Stratified Split" />
        <div className="mx-auto h-4 w-px bg-cyan-300/25" />
        <div className="mx-auto hidden h-px w-2/3 bg-cyan-300/20 sm:block" />
        <div className="grid gap-3 sm:grid-cols-2">
          <PipelineStep title="Logistic Regression" detail="Baseline" />
          <PipelineStep title="Random Forest" detail="Final model" accent />
        </div>
        <PipelineConnector />
        <PipelineStep title="Evaluation & Analysis" accent />
        <div className="mx-auto h-4 w-px bg-cyan-300/25" />
        <div className="mx-auto hidden h-px w-3/4 bg-cyan-300/20 sm:block" />
        <div className="grid gap-3 sm:grid-cols-3">
          {analysisOutputs.map((output) => (
            <div key={output} className="border border-white/10 bg-white/[0.025] px-3 py-2 text-zinc-300">
              {output}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PipelineConnector() {
  return (
    <div className="grid place-items-center text-cyan-300/45" aria-hidden="true">
      <span className="h-4 w-px bg-cyan-300/25" />
      <span className="mono -mt-1 text-[10px] leading-none">v</span>
    </div>
  )
}

function PipelineStep({ title, detail, accent = false }: { title: string; detail?: string; accent?: boolean }) {
  return (
    <div className={`border px-3 py-2 ${accent ? 'border-cyan-300/20 bg-cyan-300/[0.055]' : 'border-white/10 bg-white/[0.025]'}`}>
      <h4 className="font-semibold text-zinc-100">{title}</h4>
      {detail && <p className="mt-1 text-xs text-zinc-500">{detail}</p>}
    </div>
  )
}

export function Projects() {
  const [silentAuction, workoutPlanner, spamProject, ...rest] = projects
  const [lightbox, setLightbox] = useState<{ gallery: Gallery; index: number } | null>(null)

  useEffect(() => {
    if (!lightbox) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') showNext()
      if (event.key === 'ArrowLeft') showPrevious()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightbox])

  const activeGallery = lightbox ? galleries[lightbox.gallery] : []
  const selected = lightbox ? activeGallery[lightbox.index] : null

  function openLightbox(gallery: Gallery, index: number) {
    setLightbox({ gallery, index })
  }

  function showPrevious() {
    setLightbox((current) => {
      if (!current) return null
      const gallery = galleries[current.gallery]
      return { ...current, index: (current.index - 1 + gallery.length) % gallery.length }
    })
  }

  function showNext() {
    setLightbox((current) => {
      if (!current) return null
      const gallery = galleries[current.gallery]
      return { ...current, index: (current.index + 1) % gallery.length }
    })
  }

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Project work with real product structure, not just isolated snippets."
      intro="The featured projects pair real application screenshots with concise implementation details."
      revealAmount={0.04}
    >
      <article className="premium-card overflow-hidden p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300/80">Featured Project / 01</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{silentAuction.title}</h3>
            <p className="mt-3 text-lg text-zinc-300">Real-time full-stack auction application.</p>
            <p className="mt-5 text-base leading-7 text-zinc-400">{silentAuction.description}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {silentAuction.technologies.map((tech) => (
                <span key={tech} className="border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href={silentAuction.links.project}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-cyan-300/35 bg-cyan-300/[0.08] px-4 py-2.5 text-sm font-semibold text-zinc-50 shadow-[0_0_20px_rgba(34,211,238,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-300/[0.14]"
              >
                Live Demo
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a
                href={silentAuction.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/12 bg-zinc-950/50 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              >
                <Code2 size={16} aria-hidden="true" />
                Source Code
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <BrowserFrame screenshot={silentAuctionScreenshots[0]} featured onOpen={() => openLightbox('silent-auction', 0)} />
        </div>

        <div className="mt-7 grid gap-7 md:grid-cols-2">
          {silentAuctionScreenshots.slice(1).map((screenshot, index) => (
            <BrowserFrame
              key={screenshot.src}
              screenshot={screenshot}
              onOpen={() => openLightbox('silent-auction', index + 1)}
            />
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300/75">Project Highlights</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {silentAuctionHighlights.map((highlight) => (
              <div key={highlight.title} className="border border-white/10 bg-white/[0.025] p-4">
                <h4 className="text-sm font-semibold text-zinc-100">{highlight.title}</h4>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="premium-card mt-8 overflow-hidden p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300/80">02 / Mobile Application</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{workoutPlanner.title}</h3>
            <p className="mt-3 text-lg text-zinc-300">Native Android fitness and progress tracking application.</p>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Workout Planner is a Java-based Android fitness application designed to help users organize their workout
              routines and monitor personal fitness progress.
            </p>
            <p className="mt-4 text-base leading-7 text-zinc-400">
              Users can create an account or authenticate with Google using Firebase Authentication. The app includes an
              exercise library powered by the Wger API through Retrofit, Gson, RecyclerView, and Glide, plus progress
              entries stored with Firebase Storage and Cloud Firestore under the authenticated user&apos;s account.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {workoutPlanner.technologies.map((tech) => (
                <span key={tech} className="border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-zinc-300">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={workoutPlanner.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/12 bg-zinc-950/50 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.055]"
              >
                <Code2 size={16} aria-hidden="true" />
                Source Code
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12),transparent_55%),radial-gradient(circle,rgba(34,211,238,0.10),transparent_60%)] blur-3xl" />
            <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr]">
              <WorkoutScreenshot
                screenshot={workoutScreenshots[0]}
                primary
                onOpen={() => openLightbox('workout-planner', 0)}
              />
              <div className="grid gap-5">
                <WorkoutScreenshot screenshot={workoutScreenshots[1]} onOpen={() => openLightbox('workout-planner', 1)} />
                <WorkoutScreenshot screenshot={workoutScreenshots[2]} onOpen={() => openLightbox('workout-planner', 2)} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300/75">Project Highlights</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {workoutHighlights.map((highlight) => (
                <div key={highlight.title} className="border border-white/10 bg-white/[0.025] p-4">
                  <h4 className="text-sm font-semibold text-zinc-100">{highlight.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
          <WorkoutArchitecture />
        </div>
      </article>

      {spamProject && (
        <article className="premium-card mt-8 overflow-hidden p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300/80">03 / Machine Learning</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{spamProject.title}</h3>
              <p className="mt-3 text-lg text-zinc-300">Binary email classification using the UCI Spambase dataset.</p>
              <p className="mt-5 text-base leading-7 text-zinc-400">
                An end-to-end machine-learning project that classifies email as spam or not spam using 4,601 examples
                with 57 engineered input features. The workflow compares a Logistic Regression baseline with a Random
                Forest classifier and includes validation, stratified splitting, cross-validation, evaluation,
                confusion-matrix analysis, ROC analysis, feature importance, threshold analysis, and model persistence.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {spamProject.technologies.slice(0, 5).map((tech) => (
                  <span key={tech} className="border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-zinc-300">
                    {tech === 'Jupyter Notebook' ? 'Jupyter' : tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href={spamProject.links.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/12 bg-zinc-950/50 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.055]"
                >
                  <Code2 size={16} aria-hidden="true" />
                  Source Code
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <NotebookFrame
              screenshot={spamScreenshots[0]}
              label="Model Performance"
              primary
              onOpen={() => openLightbox('spam-email-detection', 0)}
            />
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="mono border border-cyan-300/25 bg-cyan-300/[0.07] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan-100">
                Model Performance
              </span>
              <span className="text-sm font-semibold text-zinc-200">ROC-AUC 0.983</span>
            </div>
          </div>

          <div className="mt-7 grid gap-7 lg:grid-cols-2">
            <NotebookFrame
              screenshot={spamScreenshots[1]}
              label="Classification Results"
              onOpen={() => openLightbox('spam-email-detection', 1)}
            />
            <NotebookFrame
              screenshot={spamScreenshots[2]}
              label="Model Interpretability"
              onOpen={() => openLightbox('spam-email-detection', 2)}
            />
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 xl:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mono text-xs uppercase tracking-[0.22em] text-cyan-300/75">Project Highlights</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {spamHighlights.map((highlight) => (
                  <div key={highlight.title} className="border border-white/10 bg-white/[0.025] p-4">
                    <h4 className="text-sm font-semibold text-zinc-100">{highlight.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <MlPipeline />
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <div className="border border-white/10 bg-white/[0.025] p-4">
                  <p className="mono text-xs uppercase tracking-[0.18em] text-zinc-500">Dataset</p>
                  <h4 className="mt-2 text-base font-semibold text-zinc-100">UCI Spambase</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    4,601 email examples, 57 input features, and a binary Spam / Not Spam target.
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.025] p-4">
                  <p className="mono text-xs uppercase tracking-[0.18em] text-zinc-500">Dataset Limitation</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Spambase provides engineered features extracted from emails rather than complete raw email messages,
                    so this is a classical machine-learning classification workflow, not a production-ready email
                    filtering service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}

      {rest.length > 0 && (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          {rest.map((project) => (
            <article key={project.title} className="premium-card p-6 transition hover:-translate-y-1 hover:border-cyan-300/25">
              <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-500">{project.label}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="border border-white/10 px-3 py-1.5 text-sm text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}

      <AnimatePresence>
        {selected && lightbox && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/82 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`Screenshot preview: ${selected.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setLightbox(null)
            }}
          >
            <motion.div
              className="relative w-full max-w-[min(96vw,1280px)] border border-white/12 bg-zinc-950 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.55)]"
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-2 pb-3">
                <div>
                  <p className="text-sm font-semibold text-zinc-100">{selected.title}</p>
                  <p className="mt-1 text-xs text-zinc-500">{selected.description}</p>
                </div>
                <button
                  type="button"
                  className="grid h-10 w-10 shrink-0 place-items-center border border-white/10 bg-white/[0.035] text-zinc-200 transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
                  onClick={() => setLightbox(null)}
                  aria-label="Close screenshot preview"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <div className="grid max-h-[80vh] place-items-center overflow-auto p-3">
                <img src={selected.src} alt={selected.alt} className="max-h-[76vh] w-full object-contain" />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-2 pt-3">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-cyan-300/30 hover:bg-white/[0.04]"
                  onClick={showPrevious}
                  aria-label="Show previous screenshot"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Previous
                </button>
                <p className="mono text-xs text-zinc-500">
                  {lightbox.index + 1} / {activeGallery.length}
                </p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-cyan-300/30 hover:bg-white/[0.04]"
                  onClick={showNext}
                  aria-label="Show next screenshot"
                >
                  Next
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
