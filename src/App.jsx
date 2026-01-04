import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, 
  Code2, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowRight, 
  BookOpen, 
  CheckCircle2, 
  Server, 
  Layers, 
  FileText, 
  BarChart3, 
  Container, 
  ExternalLink,
  
  // ===== NEW ICONS FOR PROJECTS =====
  
  // IoT & Sensors
  Radio,           // 📡 IoT/Wireless - BEST for IoT projects
  Wifi,            // 📶 Network connectivity
  Zap,             // ⚡ Real-time processing
  Activity,        // 📈 Live monitoring/metrics
  
  // Cloud & Infrastructure
  CloudCog,        // ☁️⚙️ Cloud configuration
  CloudLightning,  // ☁️⚡ Serverless/Fast cloud
  Database,        // 🗄️ Database projects
  HardDrive,       // 💾 Storage solutions
  
  // Security & Compliance
  Shield,          // 🛡️ Security projects
  ShieldCheck,     // ✅🛡️ Security compliance
  Lock,            // 🔒 Encryption/Auth
  Key,             // 🔑 Access management
  
  // DevOps & Automation
  GitBranch,       // 🌳 Git/CI/CD
  Workflow,        // 🔄 Automation workflows
  Cpu,             // 🖥️ Processing/Compute
  Boxes,           // 📦 Microservices
  
  // Data & Analytics
  TrendingUp,      // 📊 Analytics/Growth
  PieChart,        // 🥧 Data visualization
  LineChart,       // 📉 Time-series data
  Brain,           // 🧠 AI/ML projects
  
  // Web & API
  Globe,           // 🌐 Web applications
  Webhook,         // 🪝 APIs/Webhooks
  Network,         // 🕸️ Network architecture
  Share2,          // 🔗 Data sharing/Integration
  
  // Development Tools
  Terminal,        // 💻 CLI tools
  Package,         // 📦 Package management
  Wrench,          // 🔧 Configuration
  Rocket,          // 🚀 Deployment
  
  // Monitoring & Alerts
  Bell,            // 🔔 Notifications/Alerts
  Eye,             // 👁️ Monitoring
  AlertTriangle,   // ⚠️ Error handling
  Target           // 🎯 Goal/Performance
} from 'lucide-react';





// Static data outside component - no recreation on re-renders
const PROJECTS_DATA = [
  


{
  id: 1,
  title: "E-Commerce Microservices Platform with DevSecOps Pipeline",
  category: "azure",
  impact: "Security Gated Pipeline Deployment",
  description: "Enterprise e-commerce platform with 5 microservices on Azure Kubernetes Service. Implements DevSecOps: SonarQube SAST + Trivy container scanning enforce broken build policy. MongoDB 3-node replica set with automatic failover, RabbitMQ async messaging. Pipeline blocks any deployment failing security gates.",
  tech: ["Kubernetes", "Docker", "Azure AKS", "SonarQube", "Trivy", "MongoDB", "RabbitMQ", "GitHub Actions", "SAST"],
  metric: "Security-First",
  icon: <Boxes className="w-6 h-6" />,
  color: "from-indigo-500 to-purple-500",
  details: [
    "SonarQube SAST: blocks deployment on code vulnerabilities",
    "Trivy: scans Docker images for CVEs before push",
    "MongoDB replica set: 1 PRIMARY + 2 SECONDARY with auto-failover",
    "Defense in Depth: 2 automated security gates in CI/CD",
    "CI/CD pipelines: 2 hours → 3 minutes deployment time"
  ],
  link: "https://github.com/ruda0008/fullstack-final-project",
  comingSoon: false
},

  {
    id: 2,
    title: "Real-Time IoT Monitoring Pipeline",
    category: "azure",
    impact: "30x faster queries",
    description: "Built Azure IoT pipeline for public safety monitoring across 3 canal locations. Streams sensor data through IoT Hub to Stream Analytics with 5-min windows. Optimized Cosmos DB from 300ms to <10ms using partition strategy. Live dashboard with Chart.js.",
    tech: ["IoT Hub", "Stream Analytics", "Cosmos DB", "Blob Storage", "Node.js", "Python"],
    metric: "Full Automation",
    icon: <Radio className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500",
    details: [

      "Python sensors → Azure pipeline → Node.js dashboard",
      "Partition key optimization: 300ms → <10ms queries",
      "5-min tumbling windows with safety classification",
      "Dual storage: Cosmos DB (fast) + Blob (archive)"
    ],
    link: "https://github.com/ruda0008/rideau-canal-monitoring",
    comingSoon: false
  },
{
    id: 3,
    title: "Serverless Resume Screening Platform (AWS)",
    category: "aws",
    impact: "Event-driven processing",
    description: "Built automated resume processing system using Lambda with S3 triggers. Extracts candidate data (contact info, skills, education) using PyPDF2 and regex, stores in DynamoDB. Includes SQS + SES notification system.",
    tech: ["Lambda", "S3", "DynamoDB", "SES", "SQS", "Python", "PyPDF2"],
    metric: "Full automation",
    icon: <CloudLightning className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    details: [
      "S3 event-driven architecture with Lambda triggers",
      "PyPDF2 extraction with regex parsing algorithms",
      "IAM least-privilege access policies",
      "Optimized DynamoDB partition keys"
    ],
    link: "https://github.com/ruda0008/AWS_resume_parser"
  },
  {
    id: 4,
    title: "Cloud Data Analytics Pipeline",
    category: "azure",
    impact: "Cost-Optimized Architecture",
    description: "Built automated ETL pipeline with Azure Data Factory moving data from Blob Storage to SQL Database. Created normalized star schema and Power BI dashboards with regional heatmaps.",
    tech: ["Data Factory", "SQL Database", "Blob Storage", "Power BI"],
    metric: "300K+ transactions",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Automated data movement with ADF",
      "Star schema with normalization best practices",
      "Basic tier SQL (5 DTU) + LRS storage optimization",
      "SQL firewall rules + RBAC security"
    ],
    link: "https://github.com/ruda0008/Cloud-Data-Analytics-Pipeline"
  },
  {
    id: 5,
    title: "Cloud-Native Microservices",
    category: "azure",
    impact: "Multi-service architecture",
    description: "Deployed e-commerce app on Azure PaaS: App Service for Node.js/Python APIs, Static Web Apps for Vue.js frontend. RabbitMQ on Azure VM handles async messaging between services.",
    tech: ["App Service", "Static Web Apps", "RabbitMQ", "Node.js", "Python"],
    metric: "CI/CD with GitHub Actions",
    icon: <Server className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    details: [
      "RabbitMQ message broker for order/product services",
      "GitHub Actions pipeline with env variables",
      "CORS policies + environment-based routing",
      "PaaS deployment architecture"
    ],
    link: ""
  },
  {
    id: 6,
    title: "Containerized Application",
    category: "devops",
    impact: "Multi-container setup",
    description: "Created Docker images for Flask apps with layered architecture. Used Docker Compose to orchestrate Flask + Redis cache. Configured volumes for persistence and container networking.",
    tech: ["Docker", "Docker Compose", "Flask", "Redis", "Python"],
    metric: "Container isolation",
    icon: <Container className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    details: [
      "Dockerfiles with layered architecture",
      "Docker Compose multi-container orchestration",
      "Volume configuration for data persistence",
      "Copy-on-write behavior demonstration"
    ],
    link: ""
  },
  {
    id: 7,
    title: "More Projects Coming Soon",
    category: "all",
    impact: "In Development",
    description: "Currently working on exciting new cloud projects involving Kubernetes orchestration, serverless architectures, and advanced DevSecOps pipelines. Stay tuned for updates!",
    tech: ["Kubernetes", "Terraform", "CI/CD", "AWS", "Azure"],
    metric: "Coming Soon",
    icon: <Cloud className="w-6 h-6" />,
    color: "from-gray-500 to-gray-700",
    details: [
      "Kubernetes cluster deployment and management",
      "Infrastructure as Code with Terraform",
      "Advanced CI/CD pipeline automation",
      "Multi-cloud deployment strategies"
    ],
    link: "",
    comingSoon: true
  }
];

const STATS_DATA = [
  { number: "6+", label: "Cloud Projects", icon: <Cloud className="w-5 h-5" /> },
  { number: "2", label: "Security Gates", icon: <CheckCircle2 className="w-5 h-5" /> }, // NEW - from Kubernetes
  { number: "30x", label: "Query Optimization", icon: <BarChart3 className="w-5 h-5" /> },
 // { number: "85%", label: "Cost Optimization", icon: <BarChart3 className="w-5 h-5" /> }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visitCount, setVisitCount] = useState(null);
  const [orbs, setOrbs] = useState([
    { id: 1, x: 15, y: 20, dx: 0.08, dy: 0.06, size: 180, color: 'from-cyan-700 to-blue-700' },
    { id: 2, x: 75, y: 60, dx: -0.06, dy: 0.09, size: 160, color: 'from-purple-700 to-pink-700' },
    { id: 3, x: 50, y: 80, dx: 0.07, dy: -0.05, size: 140, color: 'from-indigo-700 to-purple-700' },
    { id: 4, x: 85, y: 30, dx: -0.05, dy: 0.08, size: 170, color: 'from-pink-700 to-purple-700' },
    { id: 5, x: 30, y: 50, dx: 0.06, dy: -0.07, size: 150, color: 'from-blue-700 to-cyan-700' },
    { id: 6, x: 60, y: 15, dx: -0.07, dy: 0.06, size: 155, color: 'from-violet-700 to-indigo-700' }
  ]);
  const rafRef = useRef();
  // Smooth scroll helper function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Fetch visitor count
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch('https://api.countapi.xyz/hit/aryanrudani-portfolio/visits');
        const data = await response.json();
        setVisitCount(data.value);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
        setVisitCount('--');
      }
    };

    fetchVisitorCount();

    // Optimized orb animation with RAF
    const animateOrbs = () => {
      setOrbs(prevOrbs => prevOrbs.map(orb => {
        let newX = orb.x + orb.dx;
        let newY = orb.y + orb.dy;
        let newDx = orb.dx;
        let newDy = orb.dy;

        // Bounce with randomization
        if (newX <= 5 || newX >= 95) {
          newDx = -orb.dx + (Math.random() - 0.5) * 0.02;
          newX = Math.max(5, Math.min(95, newX));
        }
        if (newY <= 5 || newY >= 95) {
          newDy = -orb.dy + (Math.random() - 0.5) * 0.02;
          newY = Math.max(5, Math.min(95, newY));
        }

        // Organic drift
        newDx += (Math.random() - 0.5) * 0.001;
        newDy += (Math.random() - 0.5) * 0.001;

        // Clamp speed
        newDx = Math.max(-0.1, Math.min(0.1, newDx));
        newDy = Math.max(-0.1, Math.min(0.1, newDy));

        return { ...orb, x: newX, y: newY, dx: newDx, dy: newDy };
      }));

      rafRef.current = requestAnimationFrame(animateOrbs);
    };

    rafRef.current = requestAnimationFrame(animateOrbs);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const projects = PROJECTS_DATA;
  const stats = STATS_DATA;

  const skills = [
    {
      category: "Cloud Platforms",
      icon: <Cloud className="w-5 h-5" />,
      items: [
        { name: "AWS (Lambda, S3, DynamoDB, IAM, SES, SQS)", full: true },
        { name: "Azure (IoT Hub, Stream Analytics, Cosmos DB, Data Factory, SQL, Blob, App Service, Functions, VMs)", full: true }
      ]
    },
    {
      category: "Programming & Databases",
      icon: <Code2 className="w-5 h-5" />,
      items: [
        { name: "Python, SQL, Bash, Java, C++", full: true },
        { name: "Azure SQL Database, DynamoDB, MongoDB", full: true },
        { name: "Star Schema Design, Database Normalization", full: true }
      ]
    },
    {
      category: "Security & Frameworks",
      icon: <CheckCircle2 className="w-5 h-5" />,
      items: [
        { name: "IAM Policies, RBAC, Firewall Configuration", full: true },
        { name: "Least-Privilege Access, Palo Alto NGFW", full: true },
        { name: "NIST, ISO 27001/27002, OWASP Top 10, MITRE ATT&CK", full: true },
        { name: "AES-256, RSA, PKI, X.509 Certificates", full: true }
      ]
    },
 {
      category: "DevSecOps & Automation",
      icon: <Layers className="w-5 h-5" />,
      items: [
        { name: "Kubernetes, Docker, Docker Compose, Git, GitHub", full: true },
        { name: "CI/CD with GitHub Actions, Security Gates (SAST, Container Scanning)", full: true },
        { name: "RabbitMQ, RESTful APIs, Event-Driven Architecture", full: true },
        { name: "SonarCloud, Trivy, Broken Build Policies", full: true }
      ]
    }
  ];

  const education = [
    {
      school: "Algonquin College",
      program: "Cloud Development and Operations",
      status: "In Progress",
      graduation: "August 2026",
      location: "Ottawa, ON",
      gpa: "3.84/4.0"
    },
    {
      school: "Algonquin College",
      program: "Cybersecurity Analysis",
      status: "Completed",
      graduation: "April 2025",
      location: "Ottawa, ON",
      gpa: "3.7/4.0"
    },
    {
      school: "Veer Narmad South Gujarat University",
      program: "Bachelor of Computer Applications",
      status: "Completed",
      graduation: "June 2024",
      location: "Gujarat, IN",
      gpa: "3.3/4.0"
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab || p.category === 'all');

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Orbs Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {orbs.map(orb => (
          <div
            key={orb.id}
            className={`absolute bg-gradient-to-br ${orb.color} rounded-full filter blur-3xl opacity-30`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.5s ease-out'
            }}
          ></div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-green-500/20 border rounded-full px-6 py-2 mb-8 backdrop-blur-xl">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-500 font-semibold">Open to Cloud & Security Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Aryan Rudani
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cloud Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building secure cloud infrastructure with <span className="text-cyan-500">AWS</span> and <span className="text-blue-500">Azure</span>.
            Cybersecurity analyst turned cloud engineer specializing in <span className="text-purple-500">Automation</span>, <span className="text-white font-semibold">serverless architectures</span>,
            and <span className="text-pink-500">DevSecOps</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => smoothScrollTo('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => smoothScrollTo('contact')}
              className="px-8 py-4 bg-white/5 border-white/10 backdrop-blur-xl border rounded-full font-bold text-lg hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 border-white/10 backdrop-blur-xl border rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="text-cyan-400 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {/* My Journey */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                <span>Approach</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  With a foundation in cybersecurity, I focus on building cloud infrastructure that’s secure, scalable, and resilient because security should be part of the design, not an afterthought. </p>
                <p>
                  What drives me? Learning from different Perspectives. Whether it's a new Cloud service, a better way to architect solutions, or insights from the people around me I'm constantly evolving my approach.
                </p>
              </div>
            </div>

            {/* Life Beyond Tech */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl border rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                <div className="w-2 h-8 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full"></div>
                <span>Life Beyond Tech</span>
              </h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Outside of tech, you'll find me on nature trails or grabbing coffee with friends. Some of my best solutions come when I step away from the screen.
                </p>
                <p className="text-white font-semibold">
                  I aim to build meaningful solutions that are secure, scalable and addresses needs and creates real impact. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Cloud Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real production projects from AWS, Azure, and containerized deployments
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'aws', label: 'AWS' },
              { id: 'azure', label: 'Azure' },
              { id: 'devops', label: 'DevOps' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${project.comingSoon ? 'opacity-75' : ''
                  }`}
              >
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  {project.impact}
                </div>

                <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center space-x-2 mb-6 text-cyan-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">{project.metric}</span>
                </div>

                <div className="space-y-2 mb-6">
                  {project.details.map((detail, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-400">{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                {!project.comingSoon && (
                  <a
                    href={project.link || "#"}
                    target={project.link ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 ${!project.link ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    onClick={(e) => !project.link && e.preventDefault()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{project.link ? 'View Project' : 'Link Coming Soon'}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Cloud platforms, security frameworks, and development tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
                </div>

                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.program}</h3>
                    <p className="text-cyan-400 font-semibold">{edu.school}</p>
                    {edu.gpa && (
                      <p className="text-purple-400 font-semibold mt-2">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${edu.status === "In Progress"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      }`}>
                      {edu.status}
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{edu.graduation}</p>
                  </div>
                </div>
                <p className="text-gray-400">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Looking for a cloud developer with cybersecurity expertise? Let's discuss how I can help build and secure your infrastructure.
          </p>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a href="mailto:ruda0008@algonquinlive.com" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
                  ruda0008@algonquinlive.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:ruda0008@algonquinlive.com"
              className="group w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <Mail className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/ruda0008"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
            >
              <Github className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-rudani-871258227/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50"
            >
              <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-white/10 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 <span className="text-white font-semibold">Aryan Rudani</span> • Cloud Developer & Security Specialist
            </p>

            {/* Visitor Counter */}
            {visitCount !== null && (
              <div className="flex items-center space-x-2 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl border rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Visitors:</span>
                <span className="text-sm font-bold text-cyan-500">{visitCount.toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}











// new cyberpunk ui. NEW CYBERPUNK UI


// import React, { useState, useEffect } from 'react';
// import {
//   Cloud, Code2, Mail, Github, Linkedin, ArrowRight,
//   BarChart3, ExternalLink, Radio, CloudLightning,
//   CheckCircle2, Boxes, Activity, Shield, Terminal, 
//   Target, Zap, ChevronDown, GraduationCap, Award, User
// } from 'lucide-react';

// /* --- DATA CONSTANTS --- */

// const EDUCATION_DATA = [
//   {
//     id: 1,
//     degree: "Cloud Development & Operations",
//     school: "Algonquin College",
//     year: "2024 - Present",
//     status: "IN_PROGRESS",
//     desc: "Specializing in Cloud Native Architecture, Kubernetes orchestration, and Azure/AWS DevOps pipelines. Leading real-time IoT monitoring projects.",
//     color: "cyan"
//   },
//   {
//     id: 2,
//     degree: "Cybersecurity Program",
//     school: "Algonquin College",
//     year: "Completed",
//     status: "GRADUATED",
//     desc: "Comprehensive training in network security, risk management, ethical hacking, and defense strategies. Foundation for DevSecOps approach.",
//     color: "pink"
//   }
// ];

// const CERTIFICATIONS_DATA = [
//   "AWS Certified Cloud Practitioner",
//   "Microsoft Certified: Azure Fundamentals",
//   "CompTIA Security+"
// ];

// const PROJECTS_DATA = [
//   {
//     id: 1,
//     title: "E-Commerce Microservices Platform",
//     category: "azure",
//     impact: "PRODUCTION-READY",
//     description: "Enterprise-grade platform with 5 microservices on Azure Kubernetes. MongoDB 3-node replica set, RabbitMQ messaging, automated CI/CD achieving 95% faster deployments.",
//     tech: ["Kubernetes", "Docker", "Azure AKS", "MongoDB", "RabbitMQ"],
//     metric: "99.9% UPTIME",
//     icon: <Boxes className="w-6 h-6" />,
//     link: "https://github.com/ruda0008/fullstack-final-project",
//   },
//   {
//     id: 2,
//     title: "Real-Time IoT Monitoring Pipeline",
//     category: "azure",
//     impact: "30x FASTER QUERIES",
//     description: "Azure IoT pipeline for public safety monitoring. Streams sensor data through IoT Hub to Stream Analytics. Optimized Cosmos DB from 300ms to <10ms response time.",
//     tech: ["IoT Hub", "Stream Analytics", "Cosmos DB", "Python"],
//     metric: "SUB-10MS LATENCY",
//     icon: <Radio className="w-6 h-6" />,
//     link: "https://github.com/ruda0008/rideau-canal-monitoring",
//   },
//   {
//     id: 3,
//     title: "Serverless Resume Screening",
//     category: "aws",
//     impact: "EVENT-DRIVEN",
//     description: "Automated resume processing using Lambda with S3 triggers. PyPDF2 extraction with regex parsing, DynamoDB indexing, SQS + SES notifications.",
//     tech: ["Lambda", "S3", "DynamoDB", "SES", "SQS", "Python"],
//     metric: "ZERO-OPS",
//     icon: <CloudLightning className="w-6 h-6" />,
//     link: "https://github.com/ruda0008/AWS_resume_parser"
//   },
//   {
//     id: 4,
//     title: "Cloud Data Analytics Pipeline",
//     category: "azure",
//     impact: "85% COST REDUCTION",
//     description: "Automated ETL pipeline with Azure Data Factory. Star schema design with normalized structure. Power BI dashboards with regional heatmaps for 300K+ transactions.",
//     tech: ["Data Factory", "SQL Database", "Blob Storage", "Power BI"],
//     metric: "300K+ TRANSACTIONS",
//     icon: <BarChart3 className="w-6 h-6" />,
//     link: "https://github.com/ruda0008/Cloud-Data-Analytics-Pipeline"
//   }
// ];

// const SKILLS_DATA = [
//   {
//     category: "CLOUD PLATFORMS",
//     icon: <Cloud className="w-6 h-6" />,
//     items: ["AWS (Lambda, S3, DynamoDB, IAM)", "Azure (IoT Hub, AKS, Cosmos DB)", "Event-Driven Architecture"]
//   },
//   {
//     category: "CORE ENGINEERING",
//     icon: <Code2 className="w-6 h-6" />,
//     items: ["Python, SQL, Java, C++", "MongoDB, DynamoDB, Azure SQL", "RESTful APIs, Message Queues"]
//   },
//   {
//     category: "SECURITY OPS",
//     icon: <Shield className="w-6 h-6" />,
//     items: ["IAM Policies, RBAC, Firewall", "NIST, ISO 27001, OWASP", "AES-256, RSA, PKI"]
//   },
//   {
//     category: "DEVOPS ARSENAL",
//     icon: <Terminal className="w-6 h-6" />,
//     items: ["Kubernetes, Docker, Git", "CI/CD with GitHub Actions", "RabbitMQ, Power BI"]
//   }
// ];

// export default function App() {
//   const [activeTab, setActiveTab] = useState('all');
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const filteredProjects = activeTab === 'all'
//     ? PROJECTS_DATA
//     : PROJECTS_DATA.filter(p => p.category === activeTab);

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap');

//         * { font-family: 'Space Grotesk', -apple-system, sans-serif; }
//         .font-mono { font-family: 'JetBrains Mono', monospace; }

//         .text-neon-cyan { color: #00F0FF; text-shadow: 0 0 20px rgba(0, 240, 255, 0.6); }
//         .text-neon-pink { color: #FF006E; text-shadow: 0 0 20px rgba(255, 0, 110, 0.6); }
//         .text-neon-purple { color: #B24BF3; text-shadow: 0 0 20px rgba(178, 75, 243, 0.6); }

//         .clip-corner { clip-path: polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px); }
//         .clip-corner-sm { clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px); }
        
//         .grid-dots {
//           background-image: radial-gradient(circle, rgba(0, 240, 255, 0.15) 1px, transparent 1px);
//           background-size: 32px 32px;
//         }

//         .scanlines {
//           background: linear-gradient(to bottom, transparent 50%, rgba(0, 240, 255, 0.02) 50%);
//           background-size: 100% 4px;
//           pointer-events: none;
//         }

//         .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
//         @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        
//         .delay-100 { animation-delay: 0.1s; }
//         .delay-200 { animation-delay: 0.2s; }
//         .delay-300 { animation-delay: 0.3s; }
        
//         .hover-lift { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
//         .hover-lift:hover { transform: translateY(-8px); }
        
//         .glitch:hover::before { animation: glitch-1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite; color: #00F0FF; }
//         .glitch:hover::after { animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite; color: #FF006E; }
//         @keyframes glitch-1 { 0% { transform: translateX(0); } 20% { transform: translateX(-2px); } 40% { transform: translateX(2px); } 100% { transform: translateX(0); } }
//         @keyframes glitch-2 { 0% { transform: translateX(0); } 20% { transform: translateX(2px); } 40% { transform: translateX(-2px); } 100% { transform: translateX(0); } }
//       `}</style>

//       {/* BACKGROUND FX */}
//       <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-50" />
//       <div className="fixed inset-0 pointer-events-none z-40 transition-opacity duration-300"
//         style={{ background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 240, 255, 0.08), transparent 70%)` }} />
//       <div className="fixed inset-0 grid-dots opacity-40" />
//       <div className="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60">
//         <div className="h-full w-1/3 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse" />
//       </div>
      
//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className={`flex items-center gap-3 mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
//             <div className="flex items-center gap-3 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/40 clip-corner-sm backdrop-blur-sm">
//               <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
//               <span className="text-cyan-400 text-xs font-bold tracking-[0.2em] font-mono">SYSTEM_ACTIVE</span>
//             </div>
//             <div className="h-px w-24 bg-gradient-to-r from-cyan-500/50 to-transparent" />
//           </div>

//           <div className={`mb-10 ${isVisible ? 'fade-in-up delay-100' : 'opacity-0'}`}>
//             <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tighter leading-none mb-4 glitch" data-text="ARYAN RUDANI">
//               <span className="block text-white">ARYAN</span>
//               <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">RUDANI</span>
//             </h1>
//           </div>

//           <div className={`flex flex-wrap items-center gap-5 mb-12 ${isVisible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
//             <div className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-lg tracking-[0.15em] clip-corner hover-lift">
//               CLOUD_ARCHITECT
//             </div>
//             <div className="w-16 h-px bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
//             <div className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-400 text-black font-bold text-lg tracking-[0.15em] clip-corner hover-lift">
//               SECURITY_SPECIALIST
//             </div>
//           </div>

//           <div className={`max-w-3xl mb-14 ${isVisible ? 'fade-in-up delay-300' : 'opacity-0'}`}>
//             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
//               Building <span className="text-neon-cyan font-bold">resilient cloud infrastructure</span> with AWS & Azure.
//               Specializing in <span className="text-neon-pink font-bold">serverless architectures</span> and DevSecOps.
//             </p>
//           </div>

//           <div className={`flex flex-wrap gap-5 ${isVisible ? 'fade-in-up delay-300' : 'opacity-0'}`}>
//              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-black font-bold text-lg tracking-wider clip-corner hover-lift">
//               VIEW PROJECTS
//             </button>
//             <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-zinc-900/50 border-2 border-cyan-500/60 text-cyan-400 font-bold text-lg tracking-wider clip-corner hover:bg-cyan-500/10 transition-all hover-lift">
//               ABOUT ME
//             </button>
//           </div>
          
//           <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
//              <span className="text-xs text-gray-600 font-bold tracking-wider font-mono">SCROLL</span>
//              <ChevronDown className="w-5 h-5 text-cyan-400 animate-bounce" />
//           </div>
//         </div>
//       </section>

//       {/* ABOUT & EDUCATION SECTION */}
//       <section id="about" className="relative py-32 px-6 bg-zinc-900/20 border-y border-zinc-800">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex items-center gap-6 mb-16">
//             <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent" />
//             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
//               <span className="text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text">BIO_DATA</span>
//             </h2>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Left: Narrative Bio */}
//             <div>
//                <div className="flex items-center gap-3 mb-6">
//                  <User className="w-6 h-6 text-cyan-400" />
//                  <h3 className="text-2xl font-bold text-white tracking-widest font-mono">PROFILE_SUMMARY</h3>
//                </div>
//                <div className="relative bg-zinc-900/40 border border-zinc-800 p-8 clip-corner backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
//                   <p className="text-lg text-gray-300 leading-relaxed mb-6">
//                     I am a <span className="text-neon-cyan font-bold">Cloud Development and Operations</span> student with a robust background in <span className="text-neon-pink font-bold">Cybersecurity</span>.
//                   </p>
//                   <p className="text-lg text-gray-300 leading-relaxed mb-6">
//                     My unique background allows me to bridge the gap between development and security (DevSecOps). I don't just build cloud infrastructure; I design it to be resilient, scalable, and impenetrable from day one.
//                   </p>
//                   <p className="text-lg text-gray-300 leading-relaxed">
//                     Currently focusing on Kubernetes orchestration and serverless patterns on Azure, aiming to secure a challenging role where code meets infrastructure.
//                   </p>
                  
//                   {/* Decorative bar */}
//                   <div className="mt-8 flex gap-2">
//                     <div className="h-2 w-full bg-zinc-800 rounded-sm overflow-hidden">
//                       <div className="h-full w-3/4 bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse" />
//                     </div>
//                   </div>
//                   <div className="flex justify-between mt-2 text-xs font-mono text-gray-500">
//                     <span>PROGRESS</span>
//                     <span>LOADING_OPPORTUNITIES...</span>
//                   </div>
//                </div>
//             </div>

//             {/* Right: Education & Certs */}
//             <div>
//                <div className="flex items-center gap-3 mb-6">
//                  <GraduationCap className="w-6 h-6 text-pink-500" />
//                  <h3 className="text-2xl font-bold text-white tracking-widest font-mono">EDUCATION_LOG</h3>
//                </div>

//                <div className="space-y-6">
//                  {EDUCATION_DATA.map((edu) => (
//                    <div key={edu.id} className="relative group bg-zinc-900/40 border border-zinc-800 p-6 clip-corner-sm hover:border-zinc-600 transition-all hover-lift">
//                       <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
//                          <Award className={`w-8 h-8 text-${edu.color}-500`} />
//                       </div>
                      
//                       <div className="flex justify-between items-start mb-2">
//                         <span className={`text-xs font-bold px-2 py-1 bg-${edu.color}-500/10 text-${edu.color}-400 border border-${edu.color}-500/30 rounded-sm font-mono`}>
//                           {edu.year}
//                         </span>
//                         <span className="text-xs font-bold text-gray-500 font-mono tracking-wider">{edu.status}</span>
//                       </div>
                      
//                       <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
//                       <p className="text-cyan-400 font-mono text-sm mb-3">{edu.school}</p>
//                       <p className="text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
//                    </div>
//                  ))}
//                </div>

//                {/* Mini Certs Section */}
//                <div className="mt-8">
//                   <div className="flex flex-wrap gap-2">
//                     {CERTIFICATIONS_DATA.map((cert, i) => (
//                       <span key={i} className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 text-gray-300 text-xs font-bold tracking-wider font-mono hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default">
//                         {cert}
//                       </span>
//                     ))}
//                   </div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <section id="projects" className="relative py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-20">
//             <div className="flex items-center gap-6 mb-10">
//               <div className="h-px w-20 bg-gradient-to-r from-cyan-500 to-transparent" />
//               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
//                 <span className="text-transparent bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text">PROJECTS</span>
//               </h2>
//             </div>
            
//             <div className="flex gap-4 flex-wrap">
//               {['all', 'aws', 'azure'].map(tab => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`relative px-8 py-4 font-bold text-sm tracking-[0.2em] transition-all duration-300 clip-corner-sm backdrop-blur-sm font-mono hover-lift ${
//                     activeTab === tab 
//                       ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-xl' 
//                       : 'bg-zinc-900/40 border border-zinc-800 text-gray-400 hover:border-cyan-500/50 hover:text-white'
//                   }`}
//                 >
//                   {tab.toUpperCase()}
//                   {activeTab === tab && <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500" />}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {filteredProjects.map((project, idx) => (
//               <div key={project.id} className="group relative bg-zinc-900/40 border border-zinc-800 p-10 hover:border-cyan-500/60 transition-all duration-500 clip-corner backdrop-blur-sm hover-lift">
//                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 clip-corner" />
//                 <div className="relative z-10">
//                   <div className="absolute -top-5 -right-5 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black text-xs tracking-[0.2em] clip-corner-sm shadow-xl font-mono">{project.impact}</div>
//                   <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center mb-8 clip-corner-sm group-hover:scale-110 transition-transform duration-500 shadow-xl">
//                     {React.cloneElement(project.icon, { className: "w-8 h-8 text-black" })}
//                   </div>
//                   <h3 className="text-3xl font-bold mb-5 text-white group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
//                   <p className="text-gray-400 mb-8 leading-relaxed text-base">{project.description}</p>
//                   <div className="flex items-center gap-3 mb-8 px-5 py-3 bg-cyan-500/10 border border-cyan-500/40 w-fit clip-corner-sm backdrop-blur-sm">
//                     <Activity className="w-5 h-5 text-cyan-400" />
//                     <span className="font-bold text-cyan-400 text-sm tracking-wider font-mono">{project.metric}</span>
//                   </div>
//                   <div className="flex flex-wrap gap-3 mb-8">
//                     {project.tech.map((tech, i) => (
//                       <span key={i} className="px-4 py-2 bg-zinc-800/70 border border-zinc-700 text-purple-400 text-xs font-bold tracking-wider backdrop-blur-sm">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   {project.link && (
//                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold text-sm tracking-wider clip-corner-sm hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 hover-lift font-mono">
//                       <ExternalLink className="w-4 h-4" /> VIEW_CODE
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SKILLS SECTION */}
//       <section className="relative py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-20">
//             <div className="flex items-center gap-6 mb-10">
//               <div className="h-px w-20 bg-gradient-to-r from-pink-500 to-transparent" />
//               <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
//                 <span className="text-transparent bg-gradient-to-r from-white via-pink-400 to-purple-500 bg-clip-text">TECH_STACK</span>
//               </h2>
//             </div>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {SKILLS_DATA.map((skill, idx) => (
//               <div key={idx} className="group relative bg-zinc-900/40 border border-zinc-800 p-8 hover:border-pink-500/60 transition-all duration-500 clip-corner backdrop-blur-sm hover-lift">
//                 <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center mb-8 clip-corner-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
//                   {React.cloneElement(skill.icon, { className: "w-7 h-7 text-black" })}
//                 </div>
//                 <h3 className="text-lg font-bold mb-6 text-pink-400 tracking-wider font-mono">{skill.category}</h3>
//                 <ul className="space-y-3">
//                   {skill.items.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group/item hover:text-gray-200 transition-colors duration-300">
//                       <span className="w-1.5 h-1.5 bg-purple-500 mt-2 flex-shrink-0 rounded-full group-hover/item:bg-pink-400 transition-colors duration-300" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="relative py-32 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="mb-16">
//             <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 glitch" data-text="LET'S CONNECT">
//               <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">LET'S CONNECT</span>
//             </h2>
//             <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//               Looking for a cloud architect with <span className="text-cyan-400 font-bold">cybersecurity expertise</span>?
//               Let's build something <span className="text-pink-400 font-bold">exceptional</span>.
//             </p>
//           </div>
//           <div className="flex justify-center gap-5">
//             {[
//               { icon: <Mail />, href: "mailto:ruda0008@algonquinlive.com" },
//               { icon: <Github />, href: "https://github.com/ruda0008" },
//               { icon: <Linkedin />, href: "https://www.linkedin.com/in/aryan-rudani-871258227/" }
//             ].map((social, i) => (
//               <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="group relative w-20 h-20 bg-zinc-900/50 border border-zinc-800 flex items-center justify-center hover:border-cyan-500/60 transition-all duration-300 clip-corner-sm backdrop-blur-sm hover-lift">
//                 {React.cloneElement(social.icon, { className: "w-7 h-7 text-cyan-500 group-hover:text-pink-500 transition-colors duration-300" })}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="relative py-16 px-6 border-t border-zinc-800">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="text-center md:text-left">
//             <div className="text-3xl font-bold tracking-tighter text-transparent bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text mb-2">ARYAN_RUDANI</div>
//             <div className="text-gray-600 text-xs font-bold tracking-[0.15em] font-mono">© 2025 • CLOUD_ARCHITECT • SECURITY_SPECIALIST</div>
//           </div>
//           <div className="flex items-center gap-3 px-5 py-3 bg-zinc-900/50 border border-zinc-800 clip-corner-sm backdrop-blur-sm">
//             <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse" />
//             <span className="text-xs text-gray-500 font-bold tracking-[0.15em] font-mono">STATUS_OPERATIONAL</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }









































































    // NEWWWWW UI



// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Cloud, Code2, Mail, Github, Linkedin, ArrowRight, Server, Layers, 
//   BarChart3, Container, ExternalLink, Radio, CloudLightning, 
//   Activity, Shield, Globe, Terminal, Cpu, Database
// } from 'lucide-react';

// // ==========================================
// // 1. DATA (YOUR EXACT DATA)
// // ==========================================
// const PROJECTS_DATA = [
//   {
//     id: 1,
//     title: "E-Commerce Microservices",
//     category: "azure",
//     description: "Enterprise platform on Azure AKS. 5 microservices, MongoDB replica sets, RabbitMQ messaging, and self-healing node pools.",
//     tech: ["Kubernetes", "AKS", "MongoDB", "RabbitMQ", "Go"],
//     metric: "99.9% Uptime",
//     icon: <Server className="w-6 h-6" />,
//     color: "cyan",
//     link: "https://github.com/ruda0008/fullstack-final-project",
//   },
//   {
//     id: 2,
//     title: "IoT Real-Time Sentinel",
//     category: "azure",
//     description: "Public safety monitoring. Streams sensors via IoT Hub to Stream Analytics. Cosmos DB optimized for sub-10ms latency.",
//     tech: ["IoT Hub", "Stream Analytics", "Cosmos DB", "Python"],
//     metric: "<10ms Latency",
//     icon: <Radio className="w-6 h-6" />,
//     color: "blue",
//     link: "https://github.com/ruda0008/rideau-canal-monitoring",
//   },
//   {
//     id: 3,
//     title: "Serverless Resume Parser",
//     category: "aws",
//     description: "Automated screening using Lambda & S3 triggers. Extracts data via regex, indexes in DynamoDB with SQS notifications.",
//     tech: ["Lambda", "S3", "DynamoDB", "SQS", "Python"],
//     metric: "Auto-Scaling",
//     icon: <CloudLightning className="w-6 h-6" />,
//     color: "purple",
//     link: "https://github.com/ruda0008/AWS_resume_parser"
//   },
//   {
//     id: 4,
//     title: "Data Analytics Pipeline",
//     category: "azure",
//     description: "ETL pipeline moving data from Blob to SQL via Data Factory. Star schema design with Power BI visualization.",
//     tech: ["Data Factory", "Azure SQL", "Blob Storage", "Power BI"],
//     metric: "85% Cost Red.",
//     icon: <BarChart3 className="w-6 h-6" />,
//     color: "cyan",
//     link: "https://github.com/ruda0008/Cloud-Data-Analytics-Pipeline"
//   },
// ];

// const SKILLS_DATA = [
//   { category: "Cloud Infrastructure", icon: <Cloud />, items: ["AWS (Lambda, S3, IAM)", "Azure (IoT, AKS, Cosmos)"] },
//   { category: "Core Engineering", icon: <Cpu />, items: ["Python, Java, C++", "SQL & NoSQL Design"] },
//   { category: "Security Operations", icon: <Shield />, items: ["IAM, RBAC, Firewall", "NIST, OWASP Top 10"] },
//   { category: "DevOps & Automation", icon: <Layers />, items: ["Docker, K8s, Git", "CI/CD, Terraform"] }
// ];

// // ==========================================
// // 2. HIGH-END VISUAL COMPONENTS
// // ==========================================

// // Smooth Neural Network Background
// const NeuralCanvas = () => {
//   const canvasRef = useRef(null);
  
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;
    
//     const particles = [];
//     const particleCount = 70;
//     const connectionDist = 150;
//     let mouse = { x: -100, y: -100 };

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     window.addEventListener('resize', resize);
//     window.addEventListener('mousemove', (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     });
//     resize();

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//         this.size = Math.random() * 2 + 1;
//       }
//       update() {
//         this.x += this.vx;
//         this.y += this.vy;
        
//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//       }
//       draw() {
//         ctx.fillStyle = 'rgba(6, 182, 212, 0.5)'; // Cyan
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < particleCount; i++) particles.push(new Particle());

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach((p, i) => {
//         p.update();
//         p.draw();
        
//         // Connect to mouse
//         const dxMouse = p.x - mouse.x;
//         const dyMouse = p.y - mouse.y;
//         const distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
//         if (distMouse < 200) {
//            ctx.strokeStyle = `rgba(6, 182, 212, ${1 - distMouse/200})`;
//            ctx.lineWidth = 1;
//            ctx.beginPath();
//            ctx.moveTo(p.x, p.y);
//            ctx.lineTo(mouse.x, mouse.y);
//            ctx.stroke();
//         }

//         // Connect to others
//         for (let j = i; j < particles.length; j++) {
//           const dx = p.x - particles[j].x;
//           const dy = p.y - particles[j].y;
//           const dist = Math.sqrt(dx*dx + dy*dy);
//           if (dist < connectionDist) {
//             ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - dist/connectionDist)})`;
//             ctx.beginPath();
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       });
//       animationFrameId = requestAnimationFrame(animate);
//     };
//     animate();
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-[#0a0a0a]" />;
// };

// // Glassmorphism Card with Gradient Border
// const GlassCard = ({ children, className = "" }) => (
//   <div className={`relative group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] ${className}`}>
//     <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
//     <div className="relative z-10 p-8 h-full flex flex-col">{children}</div>
//   </div>
// );

// // ==========================================
// // 3. MAIN APP
// // ==========================================
// export default function App() {
//   const [activeTab, setActiveTab] = useState('all');

//   const filteredProjects = activeTab === 'all' 
//     ? PROJECTS_DATA 
//     : PROJECTS_DATA.filter(p => p.category === activeTab);

//   return (
//     <div className="min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
//       <NeuralCanvas />
      
//       {/* Background Gradient Orbs for Depth */}
//       <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
//       <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

//       {/* --- HERO SECTION --- */}
//       <section className="relative z-10 min-h-screen flex flex-col justify-center px-6">
//         <div className="max-w-7xl mx-auto w-full pt-20">
          
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-xs font-medium tracking-wide mb-8 animate-fade-in">
//             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//             SYSTEM ONLINE
//           </div>

//           <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-8 leading-tight">
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">ARYAN</span>
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/50 via-white/20 to-transparent">RUDANI</span>
//           </h1>

//           <div className="max-w-2xl">
//             <div className="text-2xl md:text-3xl font-light text-cyan-100 mb-8 flex items-center gap-4">
//               <span className="text-cyan-400 font-bold">Cloud Architect</span>
//               <span className="w-1 h-1 rounded-full bg-white/50" />
//               <span className="text-purple-400 font-bold">Security Specialist</span>
//             </div>
            
//             <p className="text-lg text-gray-400 leading-relaxed mb-10 border-l-2 border-cyan-500/50 pl-6">
//               I build resilient, scalable infrastructure. Specialized in <strong className="text-white">AWS & Azure</strong> serverless architectures and <strong className="text-white">DevSecOps</strong> pipelines.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button 
//                 onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}
//                 className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-cyan-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
//               >
//                 View Projects <ArrowRight className="w-4 h-4" />
//               </button>
//               <a 
//                 href="mailto:ruda0008@algonquinlive.com" 
//                 className="px-8 py-4 bg-white/5 text-white font-bold rounded-lg border border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
//               >
//                 Contact Me
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- PROJECTS SECTION --- */}
//       <section id="projects" className="relative z-10 py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//              <h2 className="text-5xl font-bold text-white">Selected Works</h2>
             
//              <div className="flex bg-white/5 p-1 rounded-lg backdrop-blur-md border border-white/10">
//                {['all', 'aws', 'azure'].map(tab => (
//                  <button
//                    key={tab}
//                    onClick={() => setActiveTab(tab)}
//                    className={`px-6 py-2 rounded-md text-sm font-medium capitalize transition-all ${
//                      activeTab === tab ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'
//                    }`}
//                  >
//                    {tab}
//                  </button>
//                ))}
//              </div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             {filteredProjects.map((project) => (
//               <GlassCard key={project.id}>
//                 <div className="flex justify-between items-start mb-6">
//                   <div className={`p-3 rounded-xl bg-${project.color}-500/20 text-${project.color}-300`}>
//                     {project.icon}
//                   </div>
//                   <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
//                 </div>

//                 <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
//                 <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-col gap-4 mt-auto">
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((t, i) => (
//                       <span key={i} className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/5 text-gray-300">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center justify-between pt-6 border-t border-white/10">
//                     <span className="text-sm font-bold text-cyan-400 flex items-center gap-2">
//                       <Activity className="w-4 h-4" /> {project.metric}
//                     </span>
//                     {project.link && (
//                       <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-bold hover:text-cyan-400 transition-colors">
//                         View Code
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </GlassCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- SKILLS SECTION --- */}
//       <section className="relative z-10 py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold mb-16 text-center">Technical Arsenal</h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {SKILLS_DATA.map((skill, idx) => (
//               <div key={idx} className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-cyan-500/30 transition-colors group">
//                 <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center mb-6 text-gray-400 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
//                   {React.cloneElement(skill.icon, { size: 24 })}
//                 </div>
//                 <h3 className="text-lg font-bold mb-4">{skill.category}</h3>
//                 <ul className="space-y-2">
//                   {skill.items.map((item, i) => (
//                     <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
//                       <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500" />
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="relative z-10 py-16 px-6 border-t border-white/10 bg-[#050505]">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight">ARYAN RUDANI</h2>
//             <p className="text-gray-500 text-sm mt-1">© 2025. Secure Infrastructure.</p>
//           </div>
          
//           <div className="flex gap-4">
//              {[
//                { icon: <Mail />, href: "mailto:ruda0008@algonquinlive.com" },
//                { icon: <Github />, href: "https://github.com/ruda0008" },
//                { icon: <Linkedin />, href: "https://www.linkedin.com/in/aryan-rudani-871258227/" }
//              ].map((social, i) => (
//                <a 
//                  key={i} 
//                  href={social.href}
//                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-cyan-500 hover:text-black transition-all"
//                >
//                  {React.cloneElement(social.icon, { size: 18 })}
//                </a>
//              ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }