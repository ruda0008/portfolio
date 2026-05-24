import React, { useState, useEffect, useRef } from 'react';
import {
  Cloud,
  Code2,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Server,
  Layers,
  BarChart3,
  Container,
  Sun,
  Moon,
  Menu,
  X,
  MapPin,
  GraduationCap,
  Boxes,
  Radio,
  CloudLightning,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-Commerce Microservices Platform with DevSecOps Pipeline',
    category: 'azure',
    impact: 'Security-Gated Pipeline',
    description:
      'Enterprise e-commerce platform with 5 microservices on Azure Kubernetes Service. Implements DevSecOps: SonarQube SAST + Trivy container scanning enforce a broken-build policy. MongoDB 3-node replica set with automatic failover, RabbitMQ async messaging. Pipeline blocks any deployment failing security gates.',
    tech: ['Kubernetes', 'Docker', 'Azure AKS', 'SonarQube', 'Trivy', 'MongoDB', 'RabbitMQ', 'GitHub Actions', 'SAST'],
    metric: 'SonarQube + Trivy scanning in CI/CD',
    icon: <Boxes className="w-6 h-6" />,
    details: [
      'SonarQube SAST: blocks deployment on code vulnerabilities',
      'Trivy: scans Docker images for CVEs before push',
      'MongoDB replica set: 1 PRIMARY + 2 SECONDARY with auto-failover',
      'Defense in depth: 2 automated security gates in CI/CD',
      'CI/CD pipelines: 2 hours → 3 minutes deployment time',
    ],
    link: 'https://github.com/ruda0008/fullstack-final-project',
    comingSoon: false,
  },
  {
    id: 2,
    title: 'Real-Time IoT Monitoring Pipeline',
    category: 'azure',
    impact: '30x faster queries',
    description:
      'Built an Azure IoT pipeline for public-safety monitoring across 3 canal locations. Streams sensor data through IoT Hub to Stream Analytics with 5-min windows. Optimized Cosmos DB from 300ms to <10ms using a partition strategy. Live dashboard with Chart.js.',
    tech: ['IoT Hub', 'Stream Analytics', 'Cosmos DB', 'Blob Storage', 'Node.js', 'Python'],
    metric: 'Full automation, end to end',
    icon: <Radio className="w-6 h-6" />,
    details: [
      'Python sensors → Azure pipeline → Node.js dashboard',
      'Partition key optimization: 300ms → <10ms queries',
      '5-min tumbling windows with safety classification',
      'Dual storage: Cosmos DB (fast) + Blob (archive)',
    ],
    link: 'https://github.com/ruda0008/rideau-canal-monitoring',
    comingSoon: false,
  },
  {
    id: 3,
    title: 'Serverless Resume Screening Platform (AWS)',
    category: 'aws',
    impact: 'Event-driven',
    description:
      'Built an automated resume processing system using Lambda with S3 triggers. Extracts candidate data (contact info, skills, education) using PyPDF2 and regex, stores in DynamoDB. Includes SQS + SES notification system.',
    tech: ['Lambda', 'S3', 'DynamoDB', 'SES', 'SQS', 'Python', 'PyPDF2'],
    metric: 'Full automation',
    icon: <CloudLightning className="w-6 h-6" />,
    details: [
      'S3 event-driven architecture with Lambda triggers',
      'PyPDF2 extraction with regex parsing algorithms',
      'IAM least-privilege access policies',
      'Optimized DynamoDB partition keys',
    ],
    link: 'https://github.com/ruda0008/AWS_resume_parser',
  },
  {
    id: 4,
    title: 'Cloud Data Analytics Pipeline',
    category: 'azure',
    impact: 'Cost-optimized',
    description:
      'Built an automated ETL pipeline with Azure Data Factory moving data from Blob Storage to SQL Database. Created a normalized star schema and Power BI dashboards with regional heatmaps.',
    tech: ['Data Factory', 'SQL Database', 'Blob Storage', 'Power BI'],
    metric: '300K+ transactions',
    icon: <BarChart3 className="w-6 h-6" />,
    details: [
      'Automated data movement with ADF',
      'Star schema with normalization best practices',
      'Basic-tier SQL (5 DTU) + LRS storage optimization',
      'SQL firewall rules + RBAC security',
    ],
    link: 'https://github.com/ruda0008/Cloud-Data-Analytics-Pipeline',
  },
  {
    id: 5,
    title: 'Cloud-Native Microservices',
    category: 'azure',
    impact: 'Multi-service',
    description:
      'Deployed an e-commerce app on Azure PaaS: App Service for Node.js/Python APIs, Static Web Apps for the Vue.js frontend. RabbitMQ on an Azure VM handles async messaging between services.',
    tech: ['App Service', 'Static Web Apps', 'RabbitMQ', 'Node.js', 'Python'],
    metric: 'CI/CD with GitHub Actions',
    icon: <Server className="w-6 h-6" />,
    details: [
      'RabbitMQ message broker for order/product services',
      'GitHub Actions pipeline with env variables',
      'CORS policies + environment-based routing',
      'PaaS deployment architecture',
    ],
    link: '',
  },
  {
    id: 6,
    title: 'Containerized Application',
    category: 'devops',
    impact: 'Multi-container',
    description:
      'Created Docker images for Flask apps with a layered architecture. Used Docker Compose to orchestrate Flask + Redis cache. Configured volumes for persistence and container networking.',
    tech: ['Docker', 'Docker Compose', 'Flask', 'Redis', 'Python'],
    metric: 'Container isolation',
    icon: <Container className="w-6 h-6" />,
    details: [
      'Dockerfiles with layered architecture',
      'Docker Compose multi-container orchestration',
      'Volume configuration for data persistence',
      'Copy-on-write behavior demonstration',
    ],
    link: '',
  },
  {
    id: 7,
    title: 'More Projects Coming Soon',
    category: 'all',
    impact: 'In development',
    description:
      'Currently working on new cloud projects involving Kubernetes orchestration, serverless architectures, and advanced DevSecOps pipelines. Stay tuned.',
    tech: ['Kubernetes', 'Terraform', 'CI/CD', 'AWS', 'Azure'],
    metric: 'Coming soon',
    icon: <Cloud className="w-6 h-6" />,
    details: [
      'Kubernetes cluster deployment and management',
      'Infrastructure as Code with Terraform',
      'Advanced CI/CD pipeline automation',
      'Multi-cloud deployment strategies',
    ],
    link: '',
    comingSoon: true,
  },
];

const STATS_DATA = [
  { number: '6+', label: 'Cloud Projects', icon: <Cloud className="w-5 h-5" /> },
  { number: '2', label: 'Security Gates', icon: <CheckCircle2 className="w-5 h-5" /> },
  { number: '30x', label: 'Query Optimization', icon: <BarChart3 className="w-5 h-5" /> },
  { number: '99.9%', label: 'Uptime Achieved', icon: <Server className="w-5 h-5" /> },
];

const SKILLS_DATA = [
  {
    category: 'Cloud Platforms',
    icon: <Cloud className="w-5 h-5" />,
    items: [
      'AWS (Lambda, S3, DynamoDB, IAM, SES, SQS)',
      'Azure (IoT Hub, Stream Analytics, Cosmos DB, Data Factory, SQL, Blob, App Service, Functions, VMs)',
    ],
  },
  {
    category: 'Programming & Databases',
    icon: <Code2 className="w-5 h-5" />,
    items: [
      'Python, SQL, Bash, Java, C++',
      'Azure SQL Database, DynamoDB, MongoDB',
      'Star Schema Design, Database Normalization',
    ],
  },
  {
    category: 'Security & Frameworks',
    icon: <CheckCircle2 className="w-5 h-5" />,
    items: [
      'IAM Policies, RBAC, Firewall Configuration',
      'Least-Privilege Access, Palo Alto NGFW',
      'NIST, ISO 27001/27002, OWASP Top 10, MITRE ATT&CK',
      'AES-256, RSA, PKI, X.509 Certificates',
    ],
  },
  {
    category: 'DevSecOps & Automation',
    icon: <Layers className="w-5 h-5" />,
    items: [
      'Kubernetes, Docker, Docker Compose, Git, GitHub',
      'CI/CD with GitHub Actions, Security Gates (SAST, Container Scanning)',
      'RabbitMQ, RESTful APIs, Event-Driven Architecture',
      'SonarCloud, Trivy, Broken Build Policies',
    ],
  },
];

const EDUCATION_DATA = [
  {
    school: 'Algonquin College',
    program: 'Cloud Development and Operations',
    status: 'In Progress',
    graduation: 'August 2026',
    location: 'Ottawa, ON',
    gpa: '3.84 / 4.0',
  },
  {
    school: 'Algonquin College',
    program: 'Cybersecurity Analysis',
    status: 'Completed',
    graduation: 'April 2025',
    location: 'Ottawa, ON',
    gpa: '3.7 / 4.0',
  },
  {
    school: 'Veer Narmad South Gujarat University',
    program: 'Bachelor of Computer Applications',
    status: 'Completed',
    graduation: 'June 2024',
    location: 'Gujarat, IN',
    gpa: '3.3 / 4.0',
  },
];

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

// Fade/slide content in as it enters the viewport.
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                               */
/* ------------------------------------------------------------------ */

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  );

  // Apply + persist theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1a1714' : '#f1efe6');
  }, [theme]);

  // Scroll progress + nav state
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const handleNav = (id) => {
    setMenuOpen(false);
    smoothScrollTo(id);
  };

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeTab || p.category === 'all');

  return (
    <div className="min-h-screen bg-page text-ink overflow-x-hidden">
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[60]">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ---------------- Nav ---------------- */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-page/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <button
            onClick={() => handleNav('top')}
            className="flex items-center gap-2.5 group"
            aria-label="Back to top"
          >
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-accent text-white font-serif font-semibold text-lg shadow-soft">
              A
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight text-ink">
              Aryan Rudani
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="px-3.5 py-2 text-sm font-medium text-muted hover:text-ink rounded-full hover:bg-surface transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-2 grid place-items-center w-9 h-9 rounded-full border border-line text-ink hover:bg-surface transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid place-items-center w-9 h-9 rounded-full border border-line text-ink"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              className="grid place-items-center w-9 h-9 rounded-full border border-line text-ink"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-page/95 backdrop-blur-md border-b border-line px-6 py-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-left px-3 py-2.5 text-base font-medium text-muted hover:text-ink rounded-lg hover:bg-surface transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ---------------- Hero ---------------- */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
        {/* Subtle warm background texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-24 w-[34rem] h-[34rem] rounded-full bg-accent-soft blur-3xl animate-float-slow" />
          <div
            className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent-soft blur-3xl animate-float-slow"
            style={{ animationDelay: '3s' }}
          />
          <div
            className="absolute inset-0 opacity-[0.5] dark:opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(var(--c-ink) / 0.05) 1px, transparent 0)',
              backgroundSize: '26px 26px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/70 backdrop-blur px-4 py-1.5 mb-8 shadow-soft">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-medium text-ink">Open to Cloud &amp; Security roles</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-ink">
            Aryan Rudani
            <span className="block text-accent mt-2">Cloud Developer &amp; Security</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            I build secure cloud infrastructure on{' '}
            <span className="text-ink font-medium">AWS</span> and{' '}
            <span className="text-ink font-medium">Azure</span>. A cybersecurity analyst turned cloud
            engineer, focused on automation, serverless architectures, and{' '}
            <span className="text-ink font-medium">DevSecOps</span>.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
            <button
              onClick={() => smoothScrollTo('projects')}
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-soft hover:shadow-lift"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => smoothScrollTo('contact')}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-line bg-card text-ink font-medium hover:bg-surface transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {STATS_DATA.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-line bg-card p-5 shadow-soft"
              >
                <div className="text-accent mb-2.5">{stat.icon}</div>
                <div className="font-serif text-3xl font-semibold text-ink">{stat.number}</div>
                <div className="text-sm text-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- About ---------------- */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading eyebrow="About" title="A security mindset, applied to the cloud" />
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-3xl border border-line bg-card p-8 md:p-10 shadow-soft">
              <div className="space-y-5 text-lg text-muted leading-relaxed">
                <p>
                  I started in cybersecurity before moving into cloud development, and that background
                  still shapes how I work. Security isn't something I bolt on after building a system —
                  it's part of how I design from the beginning.
                </p>
                <p>
                  What drives me is learning, both in tech and in life: new cloud services, better ways
                  to architect solutions, insights from other professionals, even conversations over
                  coffee with friends. I like understanding not just how something works, but why it's
                  built that way. That curiosity pushes me to dig deeper into the technologies I use.
                </p>
                <p>
                  I've also learned that stepping away matters. Whether I'm on an adventure or just away
                  from my desk, my mind processes problems differently — some of my better solutions
                  arrived when I wasn't forcing them in front of a screen. Good work isn't just hours
                  logged; it's thinking clearly.
                </p>
                <p>
                  I believe good infrastructure should be invisible. If it's running well, nobody
                  notices it. That's what I aim for — systems reliable enough that teams can focus on
                  their work instead of the platform underneath.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Projects ---------------- */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Work"
              title="Cloud Projects"
              subtitle="Real production projects across AWS, Azure, and containerized deployments."
            />
          </Reveal>

          {/* Filter tabs */}
          <Reveal>
            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {[
                { id: 'all', label: 'All' },
                { id: 'aws', label: 'AWS' },
                { id: 'azure', label: 'Azure' },
                { id: 'devops', label: 'DevOps' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-accent text-white shadow-soft'
                      : 'bg-card text-muted border border-line hover:text-ink hover:bg-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 2) * 80}>
                <article
                  className={`group relative h-full rounded-3xl border border-line bg-card p-7 md:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-accent/40 ${
                    project.comingSoon ? 'opacity-80' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="grid place-items-center w-12 h-12 rounded-2xl bg-accent-soft text-accent">
                      {project.icon}
                    </div>
                    <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-accent bg-accent-soft px-3 py-1.5 rounded-full">
                      {project.impact}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[15px] text-muted leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-accent">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">{project.metric}</span>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                        <span className="text-sm text-muted leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-xs font-medium text-muted bg-surface border border-line"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {!project.comingSoon && (
                    <a
                      href={project.link || '#'}
                      target={project.link ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      onClick={(e) => !project.link && e.preventDefault()}
                      className={`mt-7 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                        project.link
                          ? 'text-accent hover:text-accent-hover'
                          : 'text-muted cursor-not-allowed'
                      }`}
                    >
                      {project.link ? 'View Project' : 'Link coming soon'}
                      {project.link && <ArrowUpRight className="w-4 h-4" />}
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Skills ---------------- */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Toolkit"
              title="Technical Skills"
              subtitle="Cloud platforms, security frameworks, and development tools."
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {SKILLS_DATA.map((group, i) => (
              <Reveal key={i} delay={(i % 2) * 80}>
                <div className="h-full rounded-3xl border border-line bg-card p-8 shadow-soft transition-all duration-300 hover:border-accent/40">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent-soft text-accent">
                      {group.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                        <span className="text-[15px] text-muted leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Education ---------------- */}
      <section id="education" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading eyebrow="Background" title="Education" />
          </Reveal>

          <div className="space-y-5">
            {EDUCATION_DATA.map((edu, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-2xl border border-line bg-card p-7 md:p-8 shadow-soft transition-all duration-300 hover:border-accent/40">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent-soft text-accent shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{edu.program}</h3>
                        <p className="text-accent font-medium mt-0.5">{edu.school}</p>
                        <p className="flex items-center gap-1.5 text-sm text-muted mt-2">
                          <MapPin className="w-3.5 h-3.5" /> {edu.location}
                          {edu.gpa && <span className="text-muted">· GPA {edu.gpa}</span>}
                        </p>
                      </div>
                    </div>
                    <div className="md:text-right md:shrink-0">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
                          edu.status === 'In Progress'
                            ? 'text-accent border-accent/30 bg-accent-soft'
                            : 'text-muted border-line bg-surface'
                        }`}
                      >
                        {edu.status}
                      </span>
                      <p className="text-sm text-muted mt-2">{edu.graduation}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-3xl border border-line bg-card p-10 md:p-14 shadow-soft text-center relative overflow-hidden">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-accent-soft blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                  Contact
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-semibold tracking-tight text-ink">
                  Let's build something
                </h2>
                <p className="mt-4 text-lg text-muted leading-relaxed max-w-xl mx-auto">
                  Looking for a cloud developer with cybersecurity expertise? Let's talk about how I can
                  help build and secure your infrastructure.
                </p>

                <a
                  href="mailto:ruda0008@algonquinlive.com"
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-soft hover:shadow-lift"
                >
                  <Mail className="w-4 h-4" />
                  ruda0008@algonquinlive.com
                </a>

                <div className="mt-9 flex justify-center gap-3">
                  <a
                    href="mailto:ruda0008@algonquinlive.com"
                    aria-label="Email"
                    className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink hover:bg-surface hover:text-accent transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/ruda0008"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink hover:bg-surface hover:text-accent transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aryan-rudani-871258227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink hover:bg-surface hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="py-10 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-ink font-medium">Aryan Rudani</span> ·
            Cloud Developer &amp; Security Specialist
          </p>
          <button
            onClick={() => smoothScrollTo('top')}
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
