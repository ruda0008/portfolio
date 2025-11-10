import React, { useState, useEffect } from 'react';
import { Cloud, Shield, Database, Code2, Mail, Github, Linkedin, ArrowRight, Award, BookOpen, CheckCircle2, Server, Layers, FileText, BarChart3, Container } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Serverless Resume Parser",
      category: "aws",
      impact: "Event-driven processing",
      description: "Built automated resume processing system using Lambda with S3 triggers. Extracts candidate data (contact info, skills, education) using PyPDF2 and regex, stores in DynamoDB. Includes SQS + SES notification system.",
      tech: ["Lambda", "S3", "DynamoDB", "SES", "SQS", "Python", "PyPDF2"],
      metric: "Full automation",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      details: [
        "S3 event-driven architecture with Lambda triggers",
        "PyPDF2 extraction with regex parsing algorithms",
        "IAM least-privilege access policies",
        "Optimized DynamoDB partition keys"
      ]
    },
    {
      id: 2,
      title: "Enterprise Data Analytics Pipeline",
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
      ]
    },
    {
      id: 3,
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
      ]
    },
    {
      id: 4,
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
      ]
    }
  ];

  const stats = [
    { number: "4", label: "Cloud Projects", icon: <Cloud className="w-5 h-5" /> },
    { number: "2", label: "Cloud Platforms", icon: <Server className="w-5 h-5" /> },
    { number: "3", label: "Programs", icon: <BookOpen className="w-5 h-5" /> },
    { number: "85%", label: "Cost Optimization", icon: <BarChart3 className="w-5 h-5" /> }
  ];

  const skills = [
    { 
      category: "Cloud Platforms",
      icon: <Cloud className="w-5 h-5" />,
      items: [
        { name: "AWS (Lambda, S3, DynamoDB, IAM, SES, SQS)", full: true },
        { name: "Azure (Data Factory, SQL, Blob, App Service, Functions, VMs)", full: true }
      ]
    },
    { 
      category: "Programming & Databases",
      icon: <Code2 className="w-5 h-5" />,
      items: [
        { name: "Python, SQL, Bash, Java, C++", full: true },
        { name: "Azure SQL Database, DynamoDB", full: true },
        { name: "Star Schema Design, Database Normalization", full: true }
      ]
    },
    { 
      category: "Security & Frameworks",
      icon: <Shield className="w-5 h-5" />,
      items: [
        { name: "IAM Policies, RBAC, Firewall Configuration", full: true },
        { name: "Least-Privilege Access, Palo Alto NGFW", full: true },
        { name: "NIST, ISO 27001/27002, OWASP Top 10, MITRE ATT&CK", full: true },
        { name: "AES-256, RSA, PKI, X.509 Certificates", full: true }
      ]
    },
    { 
      category: "DevOps & Tools",
      icon: <Layers className="w-5 h-5" />,
      items: [
        { name: "Docker, Docker Compose, Git, GitHub", full: true },
        { name: "RabbitMQ, RESTful APIs, Event-Driven Architecture", full: true },
        { name: "CI/CD with GitHub Actions", full: true },
        { name: "Power BI Desktop, PyPDF2", full: true }
      ]
    }
  ];

  const education = [
    {
      school: "Algonquin College",
      program: "Cloud Development and Operations",
      status: "In Progress",
      graduation: "June 2026",
      location: "Ottawa, ON"
    },
    {
      school: "Algonquin College",
      program: "Cybersecurity Analysis",
      status: "Completed",
      graduation: "June 2025",
      location: "Ottawa, ON"
    },
    {
      school: "Veer Narmad South Gujarat University",
      program: "Bachelor of Computer Applications",
      status: "Completed",
      graduation: "June 2024",
      location: ""
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-full px-6 py-2 mb-8 backdrop-blur-xl">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-semibold">Open to Cloud & Security Opportunities</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              Aryan Rudani
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Cloud Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Building secure cloud infrastructure with <span className="text-cyan-400">AWS</span> and <span className="text-blue-400">Azure</span>. 
            Cybersecurity analyst turned cloud engineer specializing in <span className="text-white font-semibold">serverless architectures</span>, 
            <span className="text-purple-400"> microservices</span>, and <span className="text-pink-400">DevSecOps</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-cyan-400 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
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
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
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
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
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

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-black to-purple-950/20">
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
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                      edu.status === "In Progress" 
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
              {/* <div>
                <p className="text-gray-400 text-sm mb-1">Phone</p>
                <a href="tel:+12269616526" className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
                  +1 (226) 961-6526
                </a>
              </div> */}
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
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 <span className="text-white font-semibold">Aryan Rudani</span> • Cloud Developer & Security Specialist
          </p>
        </div>
      </footer>
    </div>
  );
}