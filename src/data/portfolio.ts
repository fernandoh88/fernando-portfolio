import {
  Boxes,
  Braces,
  Cloud,
  Code2,
  Database,
  FileCode2,
  Globe2,
  HardDrive,
  Layers3,
  Network,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Skill = {
  name: string
  description: string
  icon: LucideIcon
}

export type SkillGroup = {
  title: string
  summary: string
  icon: LucideIcon
  skills: Skill[]
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    summary: 'Interfaces built with semantic markup, component architecture, and responsive styling.',
    icon: Layers3,
    skills: [
      { name: 'HTML5', description: 'Semantic structure, accessible landmarks, and clean document flow.', icon: FileCode2 },
      { name: 'CSS', description: 'Responsive layouts, modern selectors, transitions, and visual systems.', icon: Braces },
      { name: 'JavaScript', description: 'Browser APIs, interactivity, data flow, and practical debugging.', icon: Code2 },
      { name: 'TypeScript', description: 'Typed components, safer contracts, and maintainable application logic.', icon: ShieldCheck },
      { name: 'React', description: 'Reusable UI components, hooks, state, and polished user experiences.', icon: Globe2 },
    ],
  },
  {
    title: 'Backend / Programming',
    summary: 'Server-side logic, APIs, automation, and general-purpose programming.',
    icon: Server,
    skills: [
      { name: 'Node.js', description: 'Event-driven JavaScript services and backend tooling.', icon: Server },
      { name: 'Express', description: 'REST APIs, route structure, middleware, and request handling.', icon: Workflow },
      { name: 'Python', description: 'Automation, scripting, problem solving, and backend fundamentals.', icon: TerminalSquare },
      { name: 'Java', description: 'Object-oriented programming and application foundations.', icon: Boxes },
      { name: 'Kotlin', description: 'Modern JVM development with concise typed syntax.', icon: Code2 },
    ],
  },
  {
    title: 'Infrastructure',
    summary: 'Systems thinking for support, environments, networks, and dependable operations.',
    icon: Network,
    skills: [
      { name: 'Linux', description: 'Command line workflows, services, permissions, and troubleshooting.', icon: TerminalSquare },
      { name: 'Windows', description: 'Desktop support, configuration, and user-focused problem solving.', icon: HardDrive },
      { name: 'Networking', description: 'Connectivity, protocols, diagnostics, and layered troubleshooting.', icon: Network },
      { name: 'Cloud', description: 'Cloud concepts, hosted services, deployment awareness, and scalability.', icon: Cloud },
      { name: 'Virtualization', description: 'Isolated environments, VM concepts, and infrastructure flexibility.', icon: Boxes },
    ],
  },
  {
    title: 'Data',
    summary: 'Data modeling, persistence, querying, and practical database design.',
    icon: Database,
    skills: [
      { name: 'MongoDB', description: 'Document data models and full-stack application persistence.', icon: Database },
      { name: 'SQL', description: 'Relational data, queries, joins, and structured records.', icon: Database },
      { name: 'Database Design', description: 'Schema decisions, relationships, constraints, and data integrity.', icon: Workflow },
    ],
  },
]

export const projects = [
  {
    title: 'Silent Auction Platform',
    label: 'Full-stack real-time web application',
    description:
      'Built a full-stack auction platform where authenticated users can browse auction items, place bids, view live bid updates, track auction countdowns, and review bid history. The application also includes an administrative dashboard for creating, closing, and deleting auctions, along with automated winner and outbid email notifications.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase Authentication', 'Socket.IO', 'Nodemailer'],
    links: {
      project: 'https://silentauctionapp-4ca96.web.app/',
      source: 'https://github.com/fernandoh88/silent-auction-app',
    },
    featured: true,
  },
  {
    title: 'Workout Planner App',
    label: 'Native Android fitness application',
    description:
      'A native Android fitness application that allows users to securely manage their profile, browse exercises from an external REST API, and track personal fitness progress using weight records, dates, and uploaded images.',
    technologies: [
      'Java',
      'Android SDK',
      'AndroidX',
      'XML Layouts',
      'Firebase Authentication',
      'Cloud Firestore',
      'Firebase Storage',
      'Retrofit',
      'Gson',
      'Glide',
      'RecyclerView',
      'Wger API',
    ],
    links: { project: '', source: 'https://github.com/fernandoh88/WorkoutPlannerApp' },
    featured: false,
  },
  {
    title: 'Spam Email Detection',
    label: 'Machine Learning / Classification',
    description:
      'An end-to-end machine-learning project that classifies email as spam or not spam using the UCI Spambase dataset. The workflow uses 4,601 email examples with 57 engineered input features, compares a Logistic Regression baseline with a Random Forest classifier, and includes data validation, stratified splitting, cross-validation, model evaluation, confusion-matrix analysis, ROC analysis, feature importance, threshold analysis, and model persistence.',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Random Forest',
      'Logistic Regression',
      'Matplotlib',
      'Jupyter Notebook',
      'Machine Learning',
    ],
    links: { project: '', source: 'https://github.com/fernandoh88/spam-email-detection-ml' },
    featured: false,
  },
]

export const experienceBullets = [
  'Team supervision and day-to-day operations coordination in a production-focused environment.',
  'Customer communication, issue resolution, and practical problem solving under operational constraints.',
  'Business process awareness across scheduling, coordination, service expectations, and handoffs.',
]

export const principles = [
  { title: 'Clean', copy: 'Small components, clear state, and deliberate interface decisions.' },
  { title: 'Semantic', copy: 'HTML structure that supports accessibility, SEO, and long-term maintenance.' },
  { title: 'Responsive', copy: 'Layouts designed for mobile, desktop, and the spaces between.' },
  { title: 'Operational', copy: 'Built with the same troubleshooting mindset used to keep systems running.' },
]

export const contactLinks = [
  { label: 'Email', value: 'fernando403@gmail.com', href: 'mailto:fernando403@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/fernando-machado8',
    href: 'https://www.linkedin.com/in/fernando-machado8/',
  },
  { label: 'GitHub', value: 'github.com/fernandoh88', href: 'https://github.com/fernandoh88' },
  { label: 'Location', value: 'New Westminster, BC, Canada', href: '#contact' },
]
