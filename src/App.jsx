// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Cloud, 
//   Code2, 
//   Mail, 
//   Github, 
//   Linkedin, 
//   ArrowRight, 
//   BookOpen, 
//   CheckCircle2, 
//   Server, 
//   Layers, 
//   FileText, 
//   BarChart3, 
//   Container, 
//   ExternalLink,
  
//   // ===== NEW ICONS FOR PROJECTS =====
  
//   // IoT & Sensors
//   Radio,           // 📡 IoT/Wireless - BEST for IoT projects
//   Wifi,            // 📶 Network connectivity
//   Zap,             // ⚡ Real-time processing
//   Activity,        // 📈 Live monitoring/metrics
  
//   // Cloud & Infrastructure
//   CloudCog,        // ☁️⚙️ Cloud configuration
//   CloudLightning,  // ☁️⚡ Serverless/Fast cloud
//   Database,        // 🗄️ Database projects
//   HardDrive,       // 💾 Storage solutions
  
//   // Security & Compliance
//   Shield,          // 🛡️ Security projects
//   ShieldCheck,     // ✅🛡️ Security compliance
//   Lock,            // 🔒 Encryption/Auth
//   Key,             // 🔑 Access management
  
//   // DevOps & Automation
//   GitBranch,       // 🌳 Git/CI/CD
//   Workflow,        // 🔄 Automation workflows
//   Cpu,             // 🖥️ Processing/Compute
//   Boxes,           // 📦 Microservices
  
//   // Data & Analytics
//   TrendingUp,      // 📊 Analytics/Growth
//   PieChart,        // 🥧 Data visualization
//   LineChart,       // 📉 Time-series data
//   Brain,           // 🧠 AI/ML projects
  
//   // Web & API
//   Globe,           // 🌐 Web applications
//   Webhook,         // 🪝 APIs/Webhooks
//   Network,         // 🕸️ Network architecture
//   Share2,          // 🔗 Data sharing/Integration
  
//   // Development Tools
//   Terminal,        // 💻 CLI tools
//   Package,         // 📦 Package management
//   Wrench,          // 🔧 Configuration
//   Rocket,          // 🚀 Deployment
  
//   // Monitoring & Alerts
//   Bell,            // 🔔 Notifications/Alerts
//   Eye,             // 👁️ Monitoring
//   AlertTriangle,   // ⚠️ Error handling
//   Target           // 🎯 Goal/Performance
// } from 'lucide-react';





// // Static data outside component - no recreation on re-renders
// const PROJECTS_DATA = [
  

//   {
//   id: 1,
//   title: "E-Commerce Microservices Cluster Platform (Kubernetes)",
//   category: "azure",
//   impact: "Production-Ready Architecture",
//   description: "Architected and deployed enterprise-grade e-commerce platform with 5 microservices on Azure Kubernetes Service. Implemented MongoDB 3-node replica set with automatic failover, RabbitMQ message queue for async processing, and automated CI/CD pipelines achieving 95% faster deployments.",
//   tech: ["Kubernetes", "Docker", "Azure AKS", "MongoDB", "RabbitMQ", "Node.js", "Go", "Vue.js", "GitHub Actions", "YAML"],
//   metric: "99.9% Uptime",
//   icon: <Boxes className="w-6 h-6" />,
//   color: "from-indigo-500 to-purple-500",
//   details: [
//     "5 microservices with independent scaling",
//     "MongoDB replica set: 1 PRIMARY + 2 SECONDARY with auto-failover",
//     "RabbitMQ AMQP 1.0 message queue for 1000+ orders/min",
//     "CI/CD pipelines: 2 hours → 3 minutes deployment time"
//   ],
//   link: "https://github.com/ruda0008/fullstack-final-project",
//   comingSoon: false
// },
//   {
//     id: 2,
//     title: "Real-Time IoT Monitoring Pipeline",
//     category: "azure",
//     impact: "30x faster queries",
//     description: "Built Azure IoT pipeline for public safety monitoring across 3 canal locations. Streams sensor data through IoT Hub to Stream Analytics with 5-min windows. Optimized Cosmos DB from 300ms to <10ms using partition strategy. Live dashboard with Chart.js.",
//     tech: ["IoT Hub", "Stream Analytics", "Cosmos DB", "Blob Storage", "Node.js", "Python"],
//     metric: "Full Automation",
//     icon: <Radio className="w-6 h-6" />,
//     color: "from-cyan-500 to-blue-500",
//     details: [

//       "Python sensors → Azure pipeline → Node.js dashboard",
//       "Partition key optimization: 300ms → <10ms queries",
//       "5-min tumbling windows with safety classification",
//       "Dual storage: Cosmos DB (fast) + Blob (archive)"
//     ],
//     link: "https://github.com/ruda0008/rideau-canal-monitoring",
//     comingSoon: false
//   },
// {
//     id: 3,
//     title: "Serverless Resume Screening Platform (AWS)",
//     category: "aws",
//     impact: "Event-driven processing",
//     description: "Built automated resume processing system using Lambda with S3 triggers. Extracts candidate data (contact info, skills, education) using PyPDF2 and regex, stores in DynamoDB. Includes SQS + SES notification system.",
//     tech: ["Lambda", "S3", "DynamoDB", "SES", "SQS", "Python", "PyPDF2"],
//     metric: "Full automation",
//     icon: <CloudLightning className="w-6 h-6" />,
//     color: "from-orange-500 to-red-500",
//     details: [
//       "S3 event-driven architecture with Lambda triggers",
//       "PyPDF2 extraction with regex parsing algorithms",
//       "IAM least-privilege access policies",
//       "Optimized DynamoDB partition keys"
//     ],
//     link: "https://github.com/ruda0008/AWS_resume_parser"
//   },
//   {
//     id: 4,
//     title: "Cloud Data Analytics Pipeline",
//     category: "azure",
//     impact: "300K+ transactions",
//     description: "Built automated ETL pipeline with Azure Data Factory moving data from Blob Storage to SQL Database. Created normalized star schema and Power BI dashboards with regional heatmaps.",
//     tech: ["Data Factory", "SQL Database", "Blob Storage", "Power BI"],
//     metric: "85% cost reduction",
//     icon: <BarChart3 className="w-6 h-6" />,
//     color: "from-blue-500 to-cyan-500",
//     details: [
//       "Automated data movement with ADF",
//       "Star schema with normalization best practices",
//       "Basic tier SQL (5 DTU) + LRS storage optimization",
//       "SQL firewall rules + RBAC security"
//     ],
//     link: "https://github.com/ruda0008/Cloud-Data-Analytics-Pipeline"
//   },
//   {
//     id: 5,
//     title: "Cloud-Native Microservices",
//     category: "azure",
//     impact: "Multi-service architecture",
//     description: "Deployed e-commerce app on Azure PaaS: App Service for Node.js/Python APIs, Static Web Apps for Vue.js frontend. RabbitMQ on Azure VM handles async messaging between services.",
//     tech: ["App Service", "Static Web Apps", "RabbitMQ", "Node.js", "Python"],
//     metric: "CI/CD with GitHub Actions",
//     icon: <Server className="w-6 h-6" />,
//     color: "from-purple-500 to-pink-500",
//     details: [
//       "RabbitMQ message broker for order/product services",
//       "GitHub Actions pipeline with env variables",
//       "CORS policies + environment-based routing",
//       "PaaS deployment architecture"
//     ],
//     link: ""
//   },
//   {
//     id: 6,
//     title: "Containerized Application",
//     category: "devops",
//     impact: "Multi-container setup",
//     description: "Created Docker images for Flask apps with layered architecture. Used Docker Compose to orchestrate Flask + Redis cache. Configured volumes for persistence and container networking.",
//     tech: ["Docker", "Docker Compose", "Flask", "Redis", "Python"],
//     metric: "Container isolation",
//     icon: <Container className="w-6 h-6" />,
//     color: "from-green-500 to-emerald-500",
//     details: [
//       "Dockerfiles with layered architecture",
//       "Docker Compose multi-container orchestration",
//       "Volume configuration for data persistence",
//       "Copy-on-write behavior demonstration"
//     ],
//     link: ""
//   },
//   {
//     id: 7,
//     title: "More Projects Coming Soon",
//     category: "all",
//     impact: "In Development",
//     description: "Currently working on exciting new cloud projects involving Kubernetes orchestration, serverless architectures, and advanced DevSecOps pipelines. Stay tuned for updates!",
//     tech: ["Kubernetes", "Terraform", "CI/CD", "AWS", "Azure"],
//     metric: "Coming Soon",
//     icon: <Cloud className="w-6 h-6" />,
//     color: "from-gray-500 to-gray-700",
//     details: [
//       "Kubernetes cluster deployment and management",
//       "Infrastructure as Code with Terraform",
//       "Advanced CI/CD pipeline automation",
//       "Multi-cloud deployment strategies"
//     ],
//     link: "",
//     comingSoon: true
//   }
// ];

// const STATS_DATA = [
//   { number: "6+", label: "Cloud Projects", icon: <Cloud className="w-5 h-5" /> },
//  { number: "99.9%", label: "Uptime SLA", icon: <CheckCircle2 className="w-5 h-5" /> }, // NEW - from Kubernetes
//   { number: "30x", label: "Query Optimization", icon: <BarChart3 className="w-5 h-5" /> },
//   { number: "85%", label: "Cost Optimization", icon: <BarChart3 className="w-5 h-5" /> }
// ];

// export default function App() {
//   const [activeTab, setActiveTab] = useState('all');
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [visitCount, setVisitCount] = useState(null);
//   const [orbs, setOrbs] = useState([
//     { id: 1, x: 15, y: 20, dx: 0.08, dy: 0.06, size: 180, color: 'from-cyan-700 to-blue-700' },
//     { id: 2, x: 75, y: 60, dx: -0.06, dy: 0.09, size: 160, color: 'from-purple-700 to-pink-700' },
//     { id: 3, x: 50, y: 80, dx: 0.07, dy: -0.05, size: 140, color: 'from-indigo-700 to-purple-700' },
//     { id: 4, x: 85, y: 30, dx: -0.05, dy: 0.08, size: 170, color: 'from-pink-700 to-purple-700' },
//     { id: 5, x: 30, y: 50, dx: 0.06, dy: -0.07, size: 150, color: 'from-blue-700 to-cyan-700' },
//     { id: 6, x: 60, y: 15, dx: -0.07, dy: 0.06, size: 155, color: 'from-violet-700 to-indigo-700' }
//   ]);
//   const rafRef = useRef();
//   // Smooth scroll helper function
//   const smoothScrollTo = (elementId) => {
//     const element = document.getElementById(elementId);
//     if (element) {
//       const top = element.offsetTop - 80;
//       window.scrollTo({ top, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setScrollProgress(progress);
//     };

//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     // Fetch visitor count
//     const fetchVisitorCount = async () => {
//       try {
//         const response = await fetch('https://api.countapi.xyz/hit/aryanrudani-portfolio/visits');
//         const data = await response.json();
//         setVisitCount(data.value);
//       } catch (error) {
//         console.error('Failed to fetch visitor count:', error);
//         setVisitCount('--');
//       }
//     };

//     fetchVisitorCount();

//     // Optimized orb animation with RAF
//     const animateOrbs = () => {
//       setOrbs(prevOrbs => prevOrbs.map(orb => {
//         let newX = orb.x + orb.dx;
//         let newY = orb.y + orb.dy;
//         let newDx = orb.dx;
//         let newDy = orb.dy;

//         // Bounce with randomization
//         if (newX <= 5 || newX >= 95) {
//           newDx = -orb.dx + (Math.random() - 0.5) * 0.02;
//           newX = Math.max(5, Math.min(95, newX));
//         }
//         if (newY <= 5 || newY >= 95) {
//           newDy = -orb.dy + (Math.random() - 0.5) * 0.02;
//           newY = Math.max(5, Math.min(95, newY));
//         }

//         // Organic drift
//         newDx += (Math.random() - 0.5) * 0.001;
//         newDy += (Math.random() - 0.5) * 0.001;

//         // Clamp speed
//         newDx = Math.max(-0.1, Math.min(0.1, newDx));
//         newDy = Math.max(-0.1, Math.min(0.1, newDy));

//         return { ...orb, x: newX, y: newY, dx: newDx, dy: newDy };
//       }));

//       rafRef.current = requestAnimationFrame(animateOrbs);
//     };

//     rafRef.current = requestAnimationFrame(animateOrbs);
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   const projects = PROJECTS_DATA;
//   const stats = STATS_DATA;

//   const skills = [
//     {
//       category: "Cloud Platforms",
//       icon: <Cloud className="w-5 h-5" />,
//       items: [
//         { name: "AWS (Lambda, S3, DynamoDB, IAM, SES, SQS)", full: true },
//         { name: "Azure (IoT Hub, Stream Analytics, Cosmos DB, Data Factory, SQL, Blob, App Service, Functions, VMs)", full: true }
//       ]
//     },
//     {
//       category: "Programming & Databases",
//       icon: <Code2 className="w-5 h-5" />,
//       items: [
//         { name: "Python, SQL, Bash, Java, C++", full: true },
//         { name: "Azure SQL Database, DynamoDB, MongoDB", full: true },
//         { name: "Star Schema Design, Database Normalization", full: true }
//       ]
//     },
//     {
//       category: "Security & Frameworks",
//       icon: <CheckCircle2 className="w-5 h-5" />,
//       items: [
//         { name: "IAM Policies, RBAC, Firewall Configuration", full: true },
//         { name: "Least-Privilege Access, Palo Alto NGFW", full: true },
//         { name: "NIST, ISO 27001/27002, OWASP Top 10, MITRE ATT&CK", full: true },
//         { name: "AES-256, RSA, PKI, X.509 Certificates", full: true }
//       ]
//     },
//  {
//   category: "DevOps & Tools",
//   icon: <Layers className="w-5 h-5" />,
//   items: [
//     { name: "Kubernetes, Docker, Docker Compose, Git, GitHub", full: true }, // Added Kubernetes
//     { name: "RabbitMQ, RESTful APIs, Event-Driven Architecture", full: true },
//     { name: "CI/CD with GitHub Actions", full: true },
//     { name: "Power BI Desktop, PyPDF2", full: true }
//   ]
// }
//   ];

//   const education = [
//     {
//       school: "Algonquin College",
//       program: "Cloud Development and Operations",
//       status: "In Progress",
//       graduation: "August 2026",
//       location: "Ottawa, ON",
//       gpa: null
//     },
//     {
//       school: "Algonquin College",
//       program: "Cybersecurity Analysis",
//       status: "Completed",
//       graduation: "April 2025",
//       location: "Ottawa, ON",
//       gpa: "3.7/4.0"
//     },
//     {
//       school: "Veer Narmad South Gujarat University",
//       program: "Bachelor of Computer Applications",
//       status: "Completed",
//       graduation: "June 2024",
//       location: "Gujarat, IN",
//       gpa: "3.3/4.0"
//     }
//   ];

//   const filteredProjects = activeTab === 'all'
//     ? projects
//     : projects.filter(p => p.category === activeTab || p.category === 'all');

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       {/* Floating Orbs Background */}
//       <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
//         {orbs.map(orb => (
//           <div
//             key={orb.id}
//             className={`absolute bg-gradient-to-br ${orb.color} rounded-full filter blur-3xl opacity-30`}
//             style={{
//               width: `${orb.size}px`,
//               height: `${orb.size}px`,
//               left: `${orb.x}%`,
//               top: `${orb.y}%`,
//               transform: 'translate(-50%, -50%)',
//               transition: 'all 0.5s ease-out'
//             }}
//           ></div>
//         ))}
//       </div>

//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
//         <div
//           className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"
//           style={{ width: `${scrollProgress}%` }}
//         ></div>
//       </div>

//       {/* Cursor Glow */}
//       <div
//         className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
//         style={{
//           background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`
//         }}
//       ></div>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

//         <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

//         <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//           <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-green-500/20 border rounded-full px-6 py-2 mb-8 backdrop-blur-xl">
//             <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//             <span className="text-sm text-green-500 font-semibold">Open to Cloud & Security Opportunities</span>
//           </div>

//           <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
//             <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
//               Aryan Rudani
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Cloud Developer
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Building secure cloud infrastructure with <span className="text-cyan-500">AWS</span> and <span className="text-blue-500">Azure</span>.
//             Cybersecurity analyst turned cloud engineer specializing in <span className="text-purple-500">Automation</span>, <span className="text-white font-semibold">serverless architectures</span>,
//             and <span className="text-pink-500">DevSecOps</span>.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//             <button
//               onClick={() => smoothScrollTo('projects')}
//               className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
//             >
//               <span className="relative z-10 flex items-center justify-center space-x-2">
//                 <span>View Projects</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </span>
//             </button>
//             <button
//               onClick={() => smoothScrollTo('contact')}
//               className="px-8 py-4 bg-white/5 border-white/10 backdrop-blur-xl border rounded-full font-bold text-lg hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
//             >
//               Get in Touch
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <div key={index} className="bg-white/5 border-white/10 backdrop-blur-xl border rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300">
//                 <div className="text-cyan-400 mb-2">{stat.icon}</div>
//                 <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
//                   {stat.number}
//                 </div>
//                 <div className="text-sm text-gray-400">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-32 px-6 relative overflow-hidden">
//         <div className="max-w-5xl mx-auto relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black mb-4">
//               <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                 About Me
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-6">
//             {/* My Journey */}
//             <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8">
//               <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
//                 <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
//                 <span>Approach</span>
//               </h3>
//               <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
//                 <p>
//                   With a foundation in cybersecurity, I focus on building cloud infrastructure that’s secure, scalable, and resilient because security should be part of the design, not an afterthought. </p>
//                 <p>
//                   What drives me? Learning from different Perspectives. Whether it's a new Cloud service, a better way to architect solutions, or insights from the people around me I'm constantly evolving my approach.
//                 </p>
//               </div>
//             </div>

//             {/* Life Beyond Tech */}
//             <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl border rounded-3xl p-8 shadow-lg">
//               <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
//                 <div className="w-2 h-8 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full"></div>
//                 <span>Life Beyond Tech</span>
//               </h3>
//               <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
//                 <p>
//                   Outside of tech, you'll find me on nature trails or grabbing coffee with friends. Some of my best solutions come when I step away from the screen.
//                 </p>
//                 <p className="text-white font-semibold">
//                   I aim to build meaningful solutions that are secure, scalable and addresses needs and creates real impact. </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-32 px-6 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black mb-4">
//               <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//                 Cloud Projects
//               </span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Real production projects from AWS, Azure, and containerized deployments
//             </p>
//           </div>

//           {/* Filter Tabs */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {[
//               { id: 'all', label: 'All Projects' },
//               { id: 'aws', label: 'AWS' },
//               { id: 'azure', label: 'Azure' },
//               { id: 'devops', label: 'DevOps' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === tab.id
//                     ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/50'
//                     : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
//                   }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>

//           {/* Projects Grid */}
//           <div className="grid md:grid-cols-2 gap-8">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${project.comingSoon ? 'opacity-75' : ''
//                   }`}
//               >
//                 <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
//                   {project.impact}
//                 </div>

//                 <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
//                   {project.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
//                   {project.title}
//                 </h3>

//                 <p className="text-gray-400 mb-6 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex items-center space-x-2 mb-6 text-cyan-400">
//                   <CheckCircle2 className="w-5 h-5" />
//                   <span className="font-semibold">{project.metric}</span>
//                 </div>

//                 <div className="space-y-2 mb-6">
//                   {project.details.map((detail, i) => (
//                     <div key={i} className="flex items-start space-x-2">
//                       <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-sm text-gray-400">{detail}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* View Project Button */}
//                 {!project.comingSoon && (
//                   <a
//                     href={project.link || "#"}
//                     target={project.link ? "_blank" : "_self"}
//                     rel="noopener noreferrer"
//                     className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 ${!project.link ? 'opacity-50 cursor-not-allowed' : ''
//                       }`}
//                     onClick={(e) => !project.link && e.preventDefault()}
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                     <span>{project.link ? 'View Project' : 'Link Coming Soon'}</span>
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-32 px-6 relative">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black mb-4">
//               <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//                 Technical Skills
//               </span>
//             </h2>
//             <p className="text-xl text-gray-400">
//               Cloud platforms, security frameworks, and development tools
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {skills.map((skillGroup, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300"
//               >
//                 <div className="flex items-center space-x-3 mb-6">
//                   <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     {skillGroup.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
//                 </div>

//                 <div className="space-y-3">
//                   {skillGroup.items.map((skill, i) => (
//                     <div key={i} className="flex items-start space-x-3">
//                       <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-300">{skill.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Education Section */}
//       <section className="py-32 px-6">
//         <div className="max-w-5xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black mb-4">
//               <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//                 Education
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-6">
//             {education.map((edu, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
//               >
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white mb-2">{edu.program}</h3>
//                     <p className="text-cyan-400 font-semibold">{edu.school}</p>
//                     {edu.gpa && (
//                       <p className="text-purple-400 font-semibold mt-2">GPA: {edu.gpa}</p>
//                     )}
//                   </div>
//                   <div className="mt-4 md:mt-0 text-right">
//                     <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${edu.status === "In Progress"
//                         ? "bg-green-500/20 text-green-400 border border-green-500/30"
//                         : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
//                       }`}>
//                       {edu.status}
//                     </div>
//                     <p className="text-gray-400 text-sm mt-2">{edu.graduation}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-400">{edu.location}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-32 px-6 relative">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl md:text-6xl font-black mb-6">
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//               Let's Connect
//             </span>
//           </h2>

//           <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
//             Looking for a cloud developer with cybersecurity expertise? Let's discuss how I can help build and secure your infrastructure.
//           </p>

//           {/* Contact Info */}
//           <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 max-w-2xl mx-auto">
//             <div className="space-y-4">
//               <div>
//                 <p className="text-gray-400 text-sm mb-1">Email</p>
//                 <a href="mailto:ruda0008@algonquinlive.com" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
//                   ruda0008@algonquinlive.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-6">
//             <a
//               href="mailto:ruda0008@algonquinlive.com"
//               className="group w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
//             >
//               <Mail className="w-7 h-7 group-hover:scale-110 transition-transform" />
//             </a>
//             <a
//               href="https://github.com/ruda0008"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
//             >
//               <Github className="w-7 h-7 group-hover:scale-110 transition-transform" />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/aryan-rudani-871258227/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50"
//             >
//               <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12 px-6 border-white/10 border-t">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <p className="text-gray-400 text-center md:text-left">
//               © 2025 <span className="text-white font-semibold">Aryan Rudani</span> • Cloud Developer & Security Specialist
//             </p>

//             {/* Visitor Counter */}
//             {visitCount !== null && (
//               <div className="flex items-center space-x-2 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl border rounded-full px-4 py-2 shadow-lg">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 <span className="text-sm text-gray-400">Visitors:</span>
//                 <span className="text-sm font-bold text-cyan-500">{visitCount.toLocaleString()}</span>
//               </div>
//             )}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }























import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, Code2, Mail, Github, Linkedin, ArrowRight, CheckCircle2, 
  Server, Layers, FileText, BarChart3, Container, ExternalLink,
  Radio, Wifi, Zap, Activity, CloudCog, CloudLightning, Database, 
  HardDrive, Shield, ShieldCheck, Lock, Key, GitBranch, Workflow, 
  Cpu, Boxes, TrendingUp, PieChart, LineChart, Brain, Globe, 
  Webhook, Network, Share2, Terminal, Package, Wrench, Rocket, 
  Bell, Eye, AlertTriangle, Target
} from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Microservices Cluster Platform (Kubernetes)",
    category: "azure",
    impact: "Production-Ready Architecture",
    description: "Architected and deployed enterprise-grade e-commerce platform with 5 microservices on Azure Kubernetes Service. Implemented MongoDB 3-node replica set with automatic failover, RabbitMQ message queue for async processing, and automated CI/CD pipelines achieving 95% faster deployments.",
    tech: ["Kubernetes", "Docker", "Azure AKS", "MongoDB", "RabbitMQ", "Node.js", "Go", "Vue.js", "GitHub Actions", "YAML"],
    metric: "99.9% Uptime",
    icon: <Boxes className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    details: [
      "5 microservices with independent scaling",
      "MongoDB replica set: 1 PRIMARY + 2 SECONDARY with auto-failover",
      "RabbitMQ AMQP 1.0 message queue for 1000+ orders/min",
      "CI/CD pipelines: 2 hours → 3 minutes deployment time"
    ],
    link: "https://github.com/ruda0008/fullstack-final-project",
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
    impact: "300K+ transactions",
    description: "Built automated ETL pipeline with Azure Data Factory moving data from Blob Storage to SQL Database. Created normalized star schema and Power BI dashboards with regional heatmaps.",
    tech: ["Data Factory", "SQL Database", "Blob Storage", "Power BI"],
    metric: "85% cost reduction",
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
];

const STATS_DATA = [
  { number: "6+", label: "Cloud Projects", icon: <Cloud className="w-5 h-5" /> },
  { number: "99.9%", label: "Uptime SLA", icon: <CheckCircle2 className="w-5 h-5" /> },
  { number: "30x", label: "Query Optimization", icon: <BarChart3 className="w-5 h-5" /> },
  { number: "85%", label: "Cost Optimization", icon: <BarChart3 className="w-5 h-5" /> }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visitCount, setVisitCount] = useState(null);
  const [particles, setParticles] = useState([]);
  const [gridLines, setGridLines] = useState([]);
  const canvasRef = useRef(null);
  const rafRef = useRef();

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize particles for neural network effect
    const initParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    }));
    setParticles(initParticles);

    // Initialize grid lines
    const initGrid = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      offset: Math.random() * 100,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setGridLines(initGrid);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

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

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(p => {
        let newX = p.x + p.vx;
        let newY = p.y + p.vy;
        let newVx = p.vx;
        let newVy = p.vy;

        if (newX < 0 || newX > window.innerWidth) newVx = -p.vx;
        if (newY < 0 || newY > window.innerHeight) newVy = -p.vy;

        return {
          ...p,
          x: newX < 0 ? 0 : newX > window.innerWidth ? window.innerWidth : newX,
          y: newY < 0 ? 0 : newY > window.innerHeight ? window.innerHeight : newY,
          vx: newVx,
          vy: newVy,
        };
      }));

      // Animate grid
      setGridLines(prev => prev.map(line => ({
        ...line,
        offset: (line.offset + line.speed) % 100,
      })));

      rafRef.current = requestAnimationFrame(animateParticles);
    };

    rafRef.current = requestAnimationFrame(animateParticles);
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
        { name: "AWS (Lambda, S3, DynamoDB, IAM, SES, SQS)" },
        { name: "Azure (IoT Hub, Stream Analytics, Cosmos DB, Data Factory, SQL, Blob, App Service, Functions, VMs)" }
      ]
    },
    {
      category: "Programming & Databases",
      icon: <Code2 className="w-5 h-5" />,
      items: [
        { name: "Python, SQL, Bash, Java, C++" },
        { name: "Azure SQL Database, DynamoDB, MongoDB" },
        { name: "Star Schema Design, Database Normalization" }
      ]
    },
    {
      category: "Security & Frameworks",
      icon: <CheckCircle2 className="w-5 h-5" />,
      items: [
        { name: "IAM Policies, RBAC, Firewall Configuration" },
        { name: "Least-Privilege Access, Palo Alto NGFW" },
        { name: "NIST, ISO 27001/27002, OWASP Top 10, MITRE ATT&CK" },
        { name: "AES-256, RSA, PKI, X.509 Certificates" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <Layers className="w-5 h-5" />,
      items: [
        { name: "Kubernetes, Docker, Docker Compose, Git, GitHub" },
        { name: "RabbitMQ, RESTful APIs, Event-Driven Architecture" },
        { name: "CI/CD with GitHub Actions" },
        { name: "Power BI Desktop, PyPDF2" }
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
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="cyan" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="scanline" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="cyan" stopOpacity="0" />
              <stop offset="50%" stopColor="cyan" stopOpacity="0.3" />
              <stop offset="100%" stopColor="cyan" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {gridLines.map(line => (
            <line
              key={line.id}
              x1="0"
              y1={`${line.offset}%`}
              x2="100%"
              y2={`${line.offset}%`}
              stroke="url(#scanline)"
              strokeWidth="2"
              opacity={line.opacity}
            />
          ))}
        </svg>
      </div>

      {/* Neural Network Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg className="w-full h-full">
          {particles.map((p1, i) => 
            particles.slice(i + 1).map((p2, j) => {
              const distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
              if (distance < 150) {
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke="cyan"
                    strokeWidth="0.5"
                    opacity={1 - distance / 150}
                  />
                );
              }
              return null;
            })
          )}
          {particles.map(p => (
            <circle
              key={p.id}
              cx={p.x}
              cy={p.y}
              r={p.size}
              fill="cyan"
              className="drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]"
            />
          ))}
        </svg>
      </div>

      {/* Holographic Scan Lines */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-scan"></div>
      </div>

      {/* Progress Bar - Neon Style */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50 shadow-[0_0_10px_rgba(0,255,255,0.5)]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_20px_rgba(0,255,255,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Cursor Glow - Enhanced */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.15), transparent 80%)`
        }}
      ></div>

      {/* Hero Section - Cyberspace */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Glitch Status Badge */}
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border-cyan-500/50 border-2 rounded-full px-6 py-3 mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.3)]">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
            <span className="text-sm text-cyan-400 font-bold tracking-wider uppercase">System Online • Ready for Deployment</span>
          </div>

          {/* Main Title - Holographic Effect */}
          <h1 className="text-6xl md:text-9xl font-black mb-6 leading-tight relative">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm">
              ARYAN RUDANI
            </span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
              ARYAN RUDANI
            </span>
            <br />
            <span className="relative text-5xl md:text-7xl bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,255,255,0.8)] animate-pulse">
              CLOUD_ARCHITECT
            </span>
          </h1>

          {/* Terminal-style Description */}
          <div className="bg-black/50 border-2 border-cyan-500/50 rounded-lg p-6 mb-12 max-w-4xl mx-auto backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.2)]">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.8)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.8)]"></div>
              <span className="text-cyan-400 text-sm font-mono ml-4">neural_link://cloud_systems/init</span>
            </div>
            <p className="text-lg md:text-xl text-left font-mono leading-relaxed">
              <span className="text-cyan-400">$</span> <span className="text-purple-400">aws</span> <span className="text-white">deploy --secure</span> <span className="text-pink-400">--optimize</span>
              <br />
              <span className="text-green-400">&gt;</span> Building infrastructure on <span className="text-cyan-400 font-bold">AWS</span> & <span className="text-blue-400 font-bold">Azure</span>
              <br />
              <span className="text-green-400">&gt;</span> Security: <span className="text-green-400 font-bold">ENABLED</span> | Automation: <span className="text-cyan-400 font-bold">ACTIVE</span>
              <br />
              <span className="text-green-400">&gt;</span> Specialization: <span className="text-purple-400 font-bold">Serverless</span> + <span className="text-pink-400 font-bold">DevSecOps</span>
            </p>
          </div>

          {/* CTA Buttons - Neon */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => smoothScrollTo('projects')}
              className="group relative px-8 py-4 bg-cyan-500/20 border-2 border-cyan-500 rounded-lg font-bold text-lg text-cyan-400 overflow-hidden transition-all duration-300 hover:bg-cyan-500 hover:text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.8)]"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Terminal className="w-5 h-5" />
                <span>ACCESS_PROJECTS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => smoothScrollTo('contact')}
              className="px-8 py-4 bg-purple-500/20 border-2 border-purple-500 rounded-lg font-bold text-lg text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]"
            >
              INITIALIZE_CONTACT
            </button>
          </div>

          {/* Stats - Holographic Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-black/70 border-2 border-cyan-500/50 backdrop-blur-xl rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                  <div className="text-cyan-400 mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1 drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Matrix Style */}
      <section id="about" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent blur-sm">
                NEURAL_PROFILE
              </span>
              <span className="relative bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                NEURAL_PROFILE
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-black/70 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400 transition-all shadow-[0_0_40px_rgba(0,255,255,0.2)]">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center space-x-3 font-mono">
                  <Brain className="w-6 h-6 animate-pulse" />
                  <span>&gt; CORE_DIRECTIVE</span>
                </h3>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed font-light">
                  <p className="border-l-2 border-cyan-500 pl-4">
                    Security-first architecture. Every system designed with defense in depth. Cloud infrastructure that's not just scalable—it's fortified.
                  </p>
                  <p className="border-l-2 border-purple-500 pl-4">
                    Constant evolution through knowledge synthesis. Every perspective matters. Every service teaches something new. Adaptation is survival.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-black/70 backdrop-blur-xl border-2 border-pink-500/50 rounded-2xl p-8 hover:border-pink-400 transition-all shadow-[0_0_40px_rgba(236,72,153,0.2)]">
                <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center space-x-3 font-mono">
                  <Activity className="w-6 h-6 animate-pulse" />
                  <span>&gt; OFFLINE_MODE</span>
                </h3>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed font-light">
                  <p className="border-l-2 border-pink-500 pl-4">
                    Nature trails. Coffee protocols with humans. Sometimes the best debugging happens away from the terminal.
                  </p>
                  <p className="border-l-2 border-purple-500 pl-4 text-cyan-400 font-semibold">
                    Mission: Build systems that matter. Secure. Scalable. Real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Holographic Cards */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent blur-sm">
                PROJECT_DATABASE
              </span>
              <span className="relative bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                PROJECT_DATABASE
              </span>
            </h2>
            <p className="text-xl text-cyan-400 max-w-2xl mx-auto font-mono">
              &gt; Production deployments • AWS • Azure • Kubernetes
            </p>
          </div>

          {/* Filter Tabs - Neon Style */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'all', label: 'ALL_SYSTEMS' },
              { id: 'aws', label: 'AWS_CLOUD' },
              { id: 'azure', label: 'AZURE_CLOUD' },
              { id: 'devops', label: 'DEVOPS_PIPELINE' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 border-2 font-mono tracking-wider ${activeTab === tab.id
                    ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_30px_rgba(0,255,255,0.8)]'
                    : 'bg-black/50 text-cyan-400 border-cyan-500/50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid - Holographic Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-black/70 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(0,255,255,0.2)] hover:shadow-[0_0_60px_rgba(0,255,255,0.4)]">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.6)] font-mono">
                    {project.impact}
                  </div>

                  <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)]`}>
                    {project.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors font-mono">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex items-center space-x-2 mb-6 text-cyan-400">
                    <CheckCircle2 className="w-5 h-5 animate-pulse" />
                    <span className="font-semibold font-mono">{project.metric}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(0,255,255,0.8)]"></div>
                        <span className="text-sm text-gray-400 font-light">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/50 rounded-full text-xs font-medium text-cyan-400 font-mono hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-sm font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] font-mono"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>ACCESS_PROJECT</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Matrix Grid */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent blur-sm">
                SKILL_MATRIX
              </span>
              <span className="relative bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                SKILL_MATRIX
              </span>
            </h2>
            <p className="text-xl text-purple-400 font-mono">
              &gt; Core competencies • Cloud • Security • Automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-black/70 backdrop-blur-xl border-2 border-purple-500/50 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-mono">{skillGroup.category}</h3>
                  </div>

                  <div className="space-y-3">
                    {skillGroup.items.map((skill, i) => (
                      <div key={i} className="flex items-start space-x-3 group/item">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover/item:animate-pulse" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors font-light">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Data Stream */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent blur-sm">
                TRAINING_LOG
              </span>
              <span className="relative bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                TRAINING_LOG
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-black/70 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 font-mono">{edu.program}</h3>
                      <p className="text-cyan-400 font-semibold font-mono">{edu.school}</p>
                      {edu.gpa && (
                        <p className="text-purple-400 font-semibold mt-2 font-mono">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className={`inline-block px-4 py-2 rounded-lg text-sm font-bold border-2 font-mono ${edu.status === "In Progress"
                          ? "bg-green-500/20 text-green-400 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                          : "bg-purple-500/20 text-purple-400 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        }`}>
                        {edu.status}
                      </div>
                      <p className="text-gray-400 text-sm mt-2 font-mono">{edu.graduation}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 font-mono">&gt; {edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Terminal Interface */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent blur-sm">
              INITIATE_CONTACT
            </span>
            <span className="relative bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              INITIATE_CONTACT
            </span>
          </h2>

          <p className="text-xl text-cyan-400 mb-12 max-w-2xl mx-auto font-mono">
            &gt; Cloud developer with security expertise online
            <br />
            &gt; Ready to deploy secure infrastructure
          </p>

          {/* Contact Terminal */}
          <div className="relative group mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/80 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-[0_0_50px_rgba(0,255,255,0.3)]">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.8)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.8)]"></div>
                <span className="text-cyan-400 text-sm font-mono ml-4">contact://secure_channel</span>
              </div>
              <div className="text-left font-mono space-y-2">
                <div>
                  <span className="text-purple-400">&gt; protocol:</span> <span className="text-white">EMAIL</span>
                </div>
                <div>
                  <span className="text-cyan-400">&gt; address:</span>
                  <a href="mailto:ruda0008@algonquinlive.com" className="text-cyan-300 hover:text-cyan-100 transition-colors ml-2 underline">
                    ruda0008@algonquinlive.com
                  </a>
                </div>
                <div>
                  <span className="text-green-400">&gt; status:</span> <span className="text-green-300 animate-pulse">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links - Neon Buttons */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:ruda0008@algonquinlive.com"
              className="group w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,255,0.8)] border-2 border-cyan-400"
            >
              <Mail className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/ruda0008"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] border-2 border-purple-400"
            >
              <Github className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-rudani-871258227/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(236,72,153,0.8)] border-2 border-pink-400"
            >
              <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer - System Status */}
      <footer className="py-12 px-6 border-t-2 border-cyan-500/30 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left font-mono">
              <span className="text-cyan-400">&copy; 2025</span> <span className="text-white font-semibold">ARYAN_RUDANI</span> <span className="text-purple-400">// CLOUD_ARCHITECT</span> <span className="text-pink-400">// SECURITY_SPECIALIST</span>
            </p>

            {visitCount !== null && (
              <div className="flex items-center space-x-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50 backdrop-blur-xl rounded-lg px-4 py-2 shadow-[0_0_30px_rgba(0,255,255,0.3)]">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                <span className="text-sm text-gray-400 font-mono">VISITORS:</span>
                <span className="text-sm font-bold text-cyan-400 font-mono">{visitCount.toLocaleString()}</span>
              </div>
            )}
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </div>
  );
}