import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Cloud,
  Code2,
  Mail,
  Github,
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
  Workflow,
  Lock,
  Sparkles,
  ChevronDown,
  Briefcase,
  Building2,
  Calendar,
  Linkedin,
  Terminal,
  Cpu,
  Shield,
  Copy,
  Check,
  Zap,
} from 'lucide-react';
import CyberBackground from './components/CyberBackground';
import TelemetryBar from './components/TelemetryBar';

/* ================================================================== */
/*  Futuristic Illustrations (Interactive / Theme-Aware Vector Art)   */
/* ================================================================== */

function HeroArt() {
  return (
    <div className="relative w-full max-w-[480px] xl:max-w-[540px] 2xl:max-w-[600px] mx-auto select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/20 via-cyber-purple/15 to-transparent blur-3xl rounded-full pointer-events-none" />

      <svg
        viewBox="0 0 520 520"
        className="w-full h-auto relative z-10 transition-transform duration-500 hover:scale-[1.02]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--c-accent))" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#05070f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--c-accent))" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="rgb(var(--c-accent))" />
          </linearGradient>
        </defs>

        {/* Outer Telemetry Compass Ring */}
        <circle cx="260" cy="260" r="240" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1.5" />
        <circle cx="260" cy="260" r="225" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 8" />

        {/* Crosshairs & Angle Marks */}
        <line x1="260" y1="15" x2="260" y2="35" stroke="rgb(var(--c-accent))" strokeWidth="2" />
        <line x1="260" y1="485" x2="260" y2="505" stroke="rgb(var(--c-accent))" strokeWidth="2" />
        <line x1="15" y1="260" x2="35" y2="260" stroke="rgb(var(--c-accent))" strokeWidth="2" />
        <line x1="485" y1="260" x2="505" y2="260" stroke="rgb(var(--c-accent))" strokeWidth="2" />

        {/* Rotating Outer Gyro Ring */}
        <g className="spin-slow" style={{ transformOrigin: '260px 260px' }}>
          <ellipse cx="260" cy="260" rx="195" ry="195" fill="none" stroke="url(#ringGrad1)" strokeWidth="1.8" strokeDasharray="18 14 6 14" opacity="0.75" />
          <circle cx="260" cy="65" r="5" fill="rgb(var(--c-accent))" />
          <circle cx="260" cy="65" r="10" fill="rgb(var(--c-accent))" opacity="0.3" />
          <circle cx="455" cy="260" r="4" fill="#a855f7" />
        </g>

        {/* Counter-Rotating Mid Ring */}
        <g className="spin-slow-reverse" style={{ transformOrigin: '260px 260px' }}>
          <ellipse cx="260" cy="260" rx="150" ry="150" fill="none" stroke="url(#ringGrad2)" strokeWidth="1.5" strokeDasharray="28 10" opacity="0.65" />
          <circle cx="110" cy="260" r="4.5" fill="#10b981" />
        </g>

        {/* Hexagonal Quantum Shield Mesh */}
        <polygon
          points="260,140 364,200 364,320 260,380 156,320 156,200"
          fill="none"
          stroke="rgb(var(--c-accent))"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
        <polygon
          points="260,158 348,209 348,311 260,362 172,311 172,209"
          fill="rgb(var(--c-card))"
          fillOpacity="0.45"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        {/* Central Luminous Energy Sphere */}
        <circle cx="260" cy="260" r="95" fill="url(#coreGlow)" />
        <circle cx="260" cy="260" r="52" fill="rgb(var(--c-card))" stroke="rgb(var(--c-accent))" strokeWidth="2.5" className="animate-pulse-subtle" />

        {/* Futuristic Cloud Core Glyph */}
        <g transform="translate(242, 242) scale(1.5)" className="text-accent">
          <path
            d="M 17.5 19 H 9 A 7 7 0 1 1 15.71 10 H 17.5 A 4.5 4.5 0 1 1 17.5 19 Z"
            fill="none"
            stroke="rgb(var(--c-accent))"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="14" r="1.5" fill="rgb(var(--c-accent))" />
        </g>

        {/* Floating Cyber HUD Badges */}
        <g transform="translate(370, 110)">
          <rect width="112" height="26" rx="6" fill="rgb(var(--c-card))" stroke="rgb(var(--c-accent))" strokeOpacity="0.4" strokeWidth="1" />
          <circle cx="12" cy="13" r="3.5" fill="rgb(var(--c-accent))" className="animate-ping" />
          <circle cx="12" cy="13" r="3.5" fill="rgb(var(--c-accent))" />
          <text x="24" y="17" fill="rgb(var(--c-ink))" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            AKS :: 100% OK
          </text>
        </g>

        <g transform="translate(45, 380)">
          <rect width="124" height="26" rx="6" fill="rgb(var(--c-card))" stroke="#10b981" strokeOpacity="0.4" strokeWidth="1" />
          <circle cx="12" cy="13" r="3.5" fill="#10b981" />
          <text x="24" y="17" fill="rgb(var(--c-ink))" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            IaC :: TF_LOCKED
          </text>
        </g>
      </svg>
    </div>
  );
}

function ArtArchitecture() {
  return (
    <svg viewBox="0 0 140 140" className="w-28 h-28 xl:w-32 xl:h-32 mx-auto" aria-hidden="true">
      {/* Central Hub */}
      <circle cx="70" cy="70" r="22" fill="rgb(var(--c-card))" stroke="rgb(var(--c-accent))" strokeWidth="2" />
      <circle cx="70" cy="70" r="7" fill="rgb(var(--c-accent))" />
      {/* Spoke Connectors */}
      <line x1="70" y1="48" x2="70" y2="24" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="88" y1="82" x2="112" y2="100" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="52" y1="82" x2="28" y2="100" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Spokes */}
      <rect x="56" y="10" width="28" height="16" rx="4" fill="rgb(var(--c-surface))" stroke="#38bdf8" strokeWidth="1.5" />
      <rect x="100" y="94" width="28" height="16" rx="4" fill="rgb(var(--c-surface))" stroke="#10b981" strokeWidth="1.5" />
      <rect x="12" y="94" width="28" height="16" rx="4" fill="rgb(var(--c-surface))" stroke="#a855f7" strokeWidth="1.5" />
    </svg>
  );
}

function ArtDevSecOps() {
  return (
    <svg viewBox="0 0 140 140" className="w-28 h-28 xl:w-32 xl:h-32 mx-auto" aria-hidden="true">
      {/* Pipeline Track */}
      <path d="M 20 70 Q 45 40 70 70 T 120 70" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3" />
      <path d="M 20 70 Q 45 40 70 70 T 120 70" fill="none" stroke="rgb(var(--c-accent))" strokeWidth="2" strokeDasharray="8 6" />
      {/* Security Gate Checkpoint */}
      <circle cx="70" cy="70" r="16" fill="rgb(var(--c-card))" stroke="#10b981" strokeWidth="2" />
      <path d="M 65 70 L 69 74 L 76 66" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArtServerless() {
  return (
    <svg viewBox="0 0 140 140" className="w-28 h-28 xl:w-32 xl:h-32 mx-auto" aria-hidden="true">
      <circle cx="70" cy="70" r="48" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 6" />
      <polygon points="70,30 105,90 35,90" fill="none" stroke="rgb(var(--c-accent))" strokeWidth="1.8" />
      <circle cx="70" cy="30" r="5" fill="rgb(var(--c-accent))" />
      <circle cx="105" cy="90" r="5" fill="#a855f7" />
      <circle cx="35" cy="90" r="5" fill="#10b981" />
      <circle cx="70" cy="70" r="10" fill="rgb(var(--c-card))" stroke="rgb(var(--c-accent))" strokeWidth="1.5" />
    </svg>
  );
}

function ArtSecurity() {
  return (
    <svg viewBox="0 0 140 140" className="w-28 h-28 xl:w-32 xl:h-32 mx-auto" aria-hidden="true">
      <g className="spin-slow" style={{ transformOrigin: '70px 70px' }}>
        <circle cx="70" cy="70" r="54" fill="none" stroke="rgb(var(--c-accent))" strokeOpacity="0.25" strokeDasharray="3 8" />
        <circle cx="124" cy="70" r="3.5" fill="rgb(var(--c-accent))" />
      </g>
      <circle cx="70" cy="70" r="28" fill="rgb(var(--c-accent-soft))" stroke="rgb(var(--c-accent))" strokeWidth="1.8" />
      <path
        d="M 70 54 L 82 60 L 82 72 Q 82 82 70 88 Q 58 82 58 72 L 58 60 Z"
        fill="rgb(var(--c-card))"
        stroke="rgb(var(--c-accent))"
        strokeWidth="1.8"
      />
      <circle cx="70" cy="68" r="2.5" fill="rgb(var(--c-accent))" />
    </svg>
  );
}

function Monogram() {
  return (
    <div className="relative w-full aspect-square max-w-[260px] mx-auto grid place-items-center">
      <div className="absolute inset-0 rounded-full bg-cyber-cyan/10 blur-xl pointer-events-none" />
      <svg viewBox="0 0 240 240" className="w-full h-full relative z-10" aria-hidden="true">
        <circle cx="120" cy="120" r="110" fill="none" stroke="rgb(var(--c-accent))" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 6" />
        <g className="spin-slow" style={{ transformOrigin: '120px 120px' }}>
          <circle cx="120" cy="120" r="96" fill="none" stroke="rgb(var(--c-accent))" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="20 10" />
          <circle cx="216" cy="120" r="3.5" fill="rgb(var(--c-accent))" />
        </g>
        <circle cx="120" cy="120" r="80" fill="rgb(var(--c-card))" stroke="var(--c-line)" strokeWidth="1.5" />
        <text
          x="120"
          y="136"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="54"
          fontWeight="700"
          fill="rgb(var(--c-accent))"
          letterSpacing="-1"
        >
          AR
        </text>
        <text
          x="120"
          y="166"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="9"
          letterSpacing="4"
          fill="rgb(var(--c-muted))"
        >
          DEVSECOPS
        </text>
      </svg>
    </div>
  );
}

/* ================================================================== */
/*  Data Entities                                                     */
/* ================================================================== */

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Enterprise Azure Landing Zone (Hub-and-Spoke)',
    category: 'azure',
    impact: 'Multi-Environment Terraform IaC',
    description:
      'Enterprise-grade Azure Landing Zone designed with modular Terraform following Microsoft Cloud Adoption Framework (CAF). Deploys a hub-and-spoke network topology with Azure Firewall, Azure Bastion, VPN Gateway, Private DNS, and dedicated Dev, QA, and Prod AKS spoke clusters integrated with Azure Key Vault and ACR. Automated via GitHub Actions with passwordless Azure OIDC and remote state locking.',
    tech: ['Terraform', 'Azure AKS', 'Azure Firewall', 'Hub & Spoke', 'Key Vault', 'ACR', 'GitHub Actions', 'Azure OIDC', 'Private DNS'],
    metric: '100% Modular IaC · Hub-Spoke Topology',
    icon: <Workflow className="w-6 h-6 text-cyber-cyan" />,
    details: [
      'Modular Terraform architecture implementing Microsoft Cloud Adoption Framework (CAF)',
      'Centralized Hub network: Azure Firewall, Azure Bastion host, VPN Gateway, and Private DNS Resolver',
      'Isolated DEV, QA, and PROD spokes with dedicated AKS clusters and Azure Key Vault integration',
      'Shared services spoke hosting Azure Container Registry (ACR) with private endpoints and AcrPull role bindings',
      'GitHub Actions CI/CD with passwordless Azure OIDC authentication and remote tfstate locking in Azure Blob Storage',
      'Strict network egress filtering, UDR routing tables, and zero-trust Network Security Groups (NSGs)',
    ],
    link: 'https://github.com/ruda0008/terraform_ALZ_project',
    comingSoon: false,
  },
  {
    id: 2,
    title: 'E-Commerce Microservices Platform with DevSecOps Pipeline',
    category: 'azure',
    impact: 'Security-Gated Pipeline',
    description:
      'Enterprise e-commerce platform with 5 microservices on Azure Kubernetes Service. Implements DevSecOps: SonarQube SAST + Trivy container scanning enforce a broken-build policy. MongoDB 3-node replica set with automatic failover, RabbitMQ async messaging. Pipeline blocks any deployment failing security gates.',
    tech: ['Kubernetes', 'Docker', 'Azure AKS', 'SonarQube', 'Trivy', 'MongoDB', 'RabbitMQ', 'GitHub Actions', 'SAST'],
    metric: 'SonarQube + Trivy scanning in CI/CD',
    icon: <Boxes className="w-6 h-6 text-cyber-purple" />,
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
    id: 3,
    title: 'Automated Serverless Resume Screening Platform (AWS)',
    category: 'aws',
    impact: 'Event-driven Architecture',
    description:
      'Built an automated serverless hiring automation platform using AWS Lambda with S3 event triggers. Automatically extracts candidate data (contact info, skills, education) using PyPDF2 and regex, stores candidate profiles in DynamoDB, and orchestrates scoring and notifications via SQS queues and SES emails.',
    tech: ['AWS Lambda', 'S3', 'DynamoDB', 'SES', 'SQS', 'Python', 'PyPDF2', 'IAM'],
    metric: 'Full Event-Driven Automation',
    icon: <CloudLightning className="w-6 h-6 text-cyber-amber" />,
    details: [
      'S3 event-driven architecture with AWS Lambda triggers for instant candidate scoring',
      'Automated candidate parsing algorithm extracting contact info, skills, and work history',
      'Enforced least-privilege security by blocking public S3 access and defining granular IAM Roles',
      'Asynchronous notification workflows via SQS message queues and SES transactional emails',
      'Optimized DynamoDB partition keys for fast single-digit millisecond candidate queries',
    ],
    link: 'https://github.com/ruda0008/Serverless-Resume-Screening-Platform',
    comingSoon: false,
  },
  {
    id: 4,
    title: 'Real-Time IoT Monitoring Pipeline',
    category: 'azure',
    impact: '30x faster queries',
    description:
      'Built an Azure IoT pipeline for public-safety monitoring across 3 canal locations. Streams sensor data through IoT Hub to Stream Analytics with 5-min windows. Optimized Cosmos DB from 300ms to <10ms using a partition strategy. Live dashboard with Chart.js.',
    tech: ['IoT Hub', 'Stream Analytics', 'Cosmos DB', 'Blob Storage', 'Node.js', 'Python'],
    metric: '<10ms latency via partition keys',
    icon: <Radio className="w-6 h-6 text-cyber-cyan" />,
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
    id: 5,
    title: 'Cloud Data Analytics Pipeline',
    category: 'azure',
    impact: 'Cost-optimized',
    description:
      'Built an automated ETL pipeline with Azure Data Factory moving data from Blob Storage to SQL Database. Created a normalized star schema and Power BI dashboards with regional heatmaps.',
    tech: ['Data Factory', 'SQL Database', 'Blob Storage', 'Power BI'],
    metric: '300K+ Transactions Processed',
    icon: <BarChart3 className="w-6 h-6 text-cyber-emerald" />,
    details: [
      'Automated data movement with ADF',
      'Star schema with normalization best practices',
      'Basic-tier SQL (5 DTU) + LRS storage optimization',
      'SQL firewall rules + RBAC security',
    ],
    link: 'https://github.com/ruda0008/Cloud-Data-Analytics-Pipeline',
    comingSoon: false,
  },
  {
    id: 6,
    title: 'Cloud-Native Microservices',
    category: 'azure',
    impact: 'Multi-service',
    description:
      'Deployed an e-commerce app on Azure PaaS: App Service for Node.js/Python APIs, Static Web Apps for the Vue.js frontend. RabbitMQ on an Azure VM handles async messaging between services.',
    tech: ['App Service', 'Static Web Apps', 'RabbitMQ', 'Node.js', 'Python'],
    metric: 'CI/CD with GitHub Actions',
    icon: <Server className="w-6 h-6 text-cyber-blue" />,
    details: [
      'RabbitMQ message broker for order/product services',
      'GitHub Actions pipeline with env variables',
      'CORS policies + environment-based routing',
      'PaaS deployment architecture',
    ],
    link: '',
    comingSoon: false,
  },
  {
    id: 7,
    title: 'Containerized Application',
    category: 'devops',
    impact: 'Multi-container',
    description:
      'Created Docker images for Flask apps with a layered architecture. Used Docker Compose to orchestrate Flask + Redis cache. Configured volumes for persistence and container networking.',
    tech: ['Docker', 'Docker Compose', 'Flask', 'Redis', 'Python'],
    metric: 'Container Isolation & Persistence',
    icon: <Container className="w-6 h-6 text-cyber-purple" />,
    details: [
      'Dockerfiles with layered architecture',
      'Docker Compose multi-container orchestration',
      'Volume configuration for data persistence',
      'Copy-on-write behavior demonstration',
    ],
    link: '',
    comingSoon: false,
  },
];

const EXPERIENCE_DATA = [
  {
    company: 'Canadian Blood Services',
    role: 'Systems Analyst (DevOps) Co-op',
    period: 'May 2026 – Aug 2026',
    location: 'Ottawa, ON',
    type: 'Enterprise Co-op',
    description:
      'Migrated production Drupal workloads from on-prem OpenShift to Azure Kubernetes Service (AKS), engineered automated CI/CD pipelines, integrated platform SSO, and built containerized synthetic observability.',
    highlights: [
      'Migrated Drupal-based web apps along with database from on-premises OpenShift cluster to Azure Kubernetes Service (AKS) using Helm charts, with GitHub Actions deploying across Dev, QA and Production environments.',
      'Deployed multiple applications on a Red Hat OpenShift cluster and built SSO and access-control integrations across internal platforms: an OAuth-based access gateway using an oauth-proxy sidecar with Nginx, and Microsoft Entra ID SAML SSO for SonarQube with attribute/claims mapping and group synchronization.',
      'Migrated synthetic monitoring from a paid Dynatrace platform to an open-source Grafana k6, building browser-based synthetic checks across multiple production applications with automated failure capture and containerized execution.',
      'Developed a rate-limiting feature for an internal app that fetches secrets from Azure Key Vault, capping read/delete actions per user and service per hour to prevent abuse and unauthorized mass access.',
      'Built an automated GitHub Actions pipeline that detects and scales down crash-looping workloads on AKS using a restart-count and time-based threshold, reducing manual intervention on failed deployments.',
    ],
    tech: [
      'Azure AKS',
      'Red Hat OpenShift',
      'Helm',
      'GitHub Actions',
      'Microsoft Entra ID',
      'OAuth & SAML SSO',
      'Grafana k6',
      'Azure Key Vault',
      'Nginx',
      'Dynatrace',
    ],
  },
  {
    company: 'CarClinch',
    role: 'Cloud Engineer (Client Project - AI Lead Management Platform)',
    period: 'Jan 2026 – Apr 2026',
    location: 'Remote',
    type: 'Client Project',
    description:
      'Designed and delivered serverless cloud infrastructure on Azure using modular Terraform for an AI-powered lead management platform.',
    highlights: [
      'Designed and delivered the infrastructure using Terraform for a serverless AI lead management platform, provisioning Azure Functions, Cosmos DB, Service Bus, Key Vault, Static Web Apps, and Azure AI Foundry.',
      'Implemented production-grade security controls including managed identities, Key Vault secret references, and least-privilege RBAC across services.',
      'Collaborated with team members and worked directly with the client in agile sprints to deliver the platform.',
    ],
    tech: [
      'Terraform',
      'Azure Functions',
      'Cosmos DB',
      'Azure Service Bus',
      'Azure Key Vault',
      'Static Web Apps',
      'Azure AI Foundry',
      'RBAC',
    ],
  },
];

const SKILLS_DATA = [
  {
    code: 'MOD_01',
    category: 'Cloud & Infrastructure as Code',
    icon: <Cloud className="w-5 h-5 text-cyber-cyan" />,
    items: [
      'Terraform (Modular Hub-and-Spoke Landing Zones, State Locking, Azure OIDC)',
      'Azure (AKS, Functions, Key Vault, Cosmos DB, Azure Firewall, Entra ID, Storage, Service Bus)',
      'AWS (Lambda, S3, DynamoDB, EC2, IAM Policies, SQS, SES, RBAC)',
    ],
  },
  {
    code: 'MOD_02',
    category: 'DevOps, Containers & CI/CD',
    icon: <Layers className="w-5 h-5 text-cyber-emerald" />,
    items: [
      'Kubernetes (K8s), Azure Kubernetes Service (AKS), Red Hat OpenShift',
      'Docker, Docker Compose, Helm Charts, Container Registries (ACR)',
      'GitHub Actions CI/CD (Multi-stage pipelines, automated deployment, broken build policy)',
      'SonarCloud / SonarQube SAST, Trivy Container CVE Scanning',
    ],
  },
  {
    code: 'MOD_03',
    category: 'Observability & Telemetry',
    icon: <BarChart3 className="w-5 h-5 text-cyber-purple" />,
    items: [
      'Grafana, Grafana k6 (Automated containerized synthetic monitoring)',
      'InfluxDB, Azure Monitor, Log Analytics Workspaces, Dynatrace',
      'Automated failure detection and pod lifecycle auto-healing on AKS',
    ],
  },
  {
    code: 'MOD_04',
    category: 'Security, Identity & Languages',
    icon: <Shield className="w-5 h-5 text-cyber-pink" />,
    items: [
      'Microsoft Entra ID (SAML SSO, attribute/claims mapping, group sync)',
      'OAuth-Proxy Sidecars, Nginx, Least-Privilege IAM Roles, Azure RBAC',
      'Key Vault Rate Limiting & Secret References, NIST, OWASP Top 10, MITRE ATT&CK',
      'Languages: Python, Bash, JavaScript, SQL',
    ],
  },
];

const EDUCATION_DATA = [
  {
    school: 'Algonquin College',
    program: 'Cloud Development and Operations Graduate Certificate',
    status: 'Completed',
    graduation: 'August 2026',
    location: 'Ottawa, ON',
    gpa: '3.86 / 4.0',
    icon: <Cloud className="w-5 h-5 text-cyber-cyan" />,
  },
  {
    school: 'Algonquin College',
    program: 'Cybersecurity Analysis Graduate Certificate',
    status: 'Completed',
    graduation: 'April 2025',
    location: 'Ottawa, ON',
    gpa: '3.7 / 4.0',
    icon: <Shield className="w-5 h-5 text-cyber-emerald" />,
  },
  {
    school: 'Veer Narmad South Gujarat University',
    program: 'Bachelor of Computer Applications',
    status: 'Completed',
    graduation: 'April 2024',
    location: 'Gujarat, IN',
    gpa: '3.3 / 4.0',
    icon: <GraduationCap className="w-5 h-5 text-cyber-purple" />,
  },
];

const CAPABILITIES = [
  {
    num: '01',
    code: 'ARCH_CORE',
    title: 'Cloud Architecture & IaC',
    desc: 'I design multi-service architectures and landing zones on Azure and AWS using modular Terraform. Hub-and-spoke networks, Kubernetes clusters, zero-trust security boundaries, and automated state management that scales reliably in production.',
    tags: 'TERRAFORM · AZURE · AWS · IaC',
    Art: ArtArchitecture,
    highlights: [
      'Hub-and-spoke Azure Landing Zone with Azure Firewall and isolated AKS spokes',
      'Modular Terraform with Azure OIDC authentication and remote tfstate locking',
      '5 microservices on Azure Kubernetes Service with auto-failover',
      'Cosmos DB partition strategy: 300ms to <10ms query latency',
    ],
  },
  {
    num: '02',
    code: 'PIPE_GATE',
    title: 'DevSecOps & Platform Automation',
    desc: 'Automated CI/CD pipelines that enforce quality and security before code reaches production. From container vulnerability scanning to crash-loop auto-remediation and Helm-based zero-downtime releases.',
    tags: 'GITHUB ACTIONS · OPENSHIFT · AKS · HELM',
    Art: ArtDevSecOps,
    highlights: [
      'Migrated production web workloads from on-prem OpenShift to AKS with Helm',
      'Automated pipeline detecting and scaling down crash-looping AKS workloads',
      'SonarQube SAST + Trivy container scanning with broken-build security gates',
      'Synthetic monitoring migration from Dynatrace to containerized Grafana k6',
    ],
  },
  {
    num: '03',
    code: 'EVENT_MESH',
    title: 'Serverless & Containers',
    desc: 'Event-driven Lambdas, Kubernetes microservices, and Docker stacks. I pick the right tool for the load profile, not the trendiest one, then tune it until it pays for itself.',
    tags: 'LAMBDA · AKS · DOCKER · RABBITMQ',
    Art: ArtServerless,
    highlights: [
      'AWS Lambda + S3 event triggers for automated resume screening',
      'Docker Compose: Flask + Redis multi-container stack',
      'Azure Functions serverless AI platform with Service Bus',
      'RabbitMQ async messaging between microservices',
    ],
  },
  {
    num: '04',
    code: 'SEC_ZERO',
    title: 'Security by Design',
    desc: 'IAM least-privilege, zero-trust patterns, and identity federation. A cybersecurity background means security shapes the architecture from day one, not a checklist at the end.',
    tags: 'ENTRA ID · SAML/OAUTH · KEY VAULT · RBAC',
    Art: ArtSecurity,
    highlights: [
      'Microsoft Entra ID SAML SSO and OAuth proxy sidecars with Nginx',
      'Azure Key Vault rate limiting capping unauthorized mass secret access',
      'Least-privilege RBAC roles and managed identity federation across cloud services',
      'OWASP Top 10, NIST frameworks, and automated CVE gate enforcement',
    ],
  },
];

const NAV_LINKS = [
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = ['top', 'capabilities', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

const SECTION_LABELS = {
  top: 'Home',
  capabilities: 'Capabilities',
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  education: 'Education',
  contact: 'Contact',
};

const ROTATING_WORDS = ['Security', 'DevSecOps', 'Automation', 'Serverless', 'Kubernetes'];

/* ================================================================== */
/*  Helpers & Micro-Components                                        */
/* ================================================================== */

function smoothScrollTo(id) {
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 76);
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const optsRef = useRef(options);
  optsRef.current = options;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      optsRef.current
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left max-w-3xl' : 'text-center max-w-2xl mx-auto';
  return (
    <div className={`${alignClass} mb-14`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-card/60 backdrop-blur font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyber-cyan mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base md:text-lg text-muted leading-relaxed font-sans">{subtitle}</p>}
    </div>
  );
}

function Ornament() {
  return (
    <div className="ornament max-w-xs mx-auto my-3 opacity-60">
      <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
    </div>
  );
}

function RotatingWord({ words, interval = 2400 }) {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    let timeoutId;
    const intervalId = setInterval(() => {
      setVisible(false);
      timeoutId = setTimeout(() => {
        setI((p) => (p + 1) % words.length);
        setVisible(true);
      }, 260);
    }, interval);
    return () => {
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [words.length, interval]);
  return (
    <span
      className="inline-block transition-all duration-300 will-change-transform"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
      }}
    >
      {words[i]}
    </span>
  );
}

/* ---------------- Sticky Scroll-Story ---------------- */

function StorySection() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = CAPABILITIES[active];
  const CurrentArt = current.Art;

  return (
    <section id="capabilities" className="relative px-6 py-24">
      <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
        <Reveal>
          <SectionHeading
            eyebrow="Core Architecture"
            title="Interactive Mission Control"
            subtitle="Four specialized disciplines engineered for high-availability enterprise scale."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-4 items-start">
          {/* LEFT (Sticky telemetry display) */}
          <div className="md:sticky md:top-28 md:self-start md:h-[calc(100vh-9rem)] flex flex-col justify-center">
            <div className="cyber-panel rounded-3xl p-8 xl:p-10 shadow-cyber-cyan/10">
              <span className="hud-corner-tl" />
              <span className="hud-corner-br" />

              <div key={current.num} className="animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-semibold text-cyber-cyan tracking-widest px-2.5 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                    {current.code}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    SYSTEM {current.num} / 04
                  </span>
                </div>

                <div className="my-6">
                  <CurrentArt />
                </div>

                <h3 className="font-heading text-3xl xl:text-4xl font-bold tracking-tight text-ink leading-tight">
                  {current.title}
                </h3>

                <p className="mt-4 font-mono text-xs font-semibold text-cyber-cyan tracking-[0.2em] uppercase">
                  {current.tags}
                </p>
              </div>

              {/* Progress selectors */}
              <div className="mt-10 flex gap-2">
                {CAPABILITIES.map((c, idx) => (
                  <button
                    key={c.num}
                    onClick={() =>
                      refs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                    aria-label={c.title}
                    className="group flex-1 h-1.5 rounded-full overflow-hidden bg-line"
                  >
                    <span
                      className="block h-full bg-cyber-cyan transition-all duration-700 ease-out"
                      style={{ width: idx <= active ? '100%' : '0%' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT (Scrolling specification cards) */}
          <div className="flex flex-col gap-6 md:gap-10">
            {CAPABILITIES.map((c, idx) => (
              <div
                key={c.num}
                ref={(el) => (refs.current[idx] = el)}
                className={`cyber-panel rounded-3xl p-8 xl:p-10 transition-all duration-500 ${
                  active === idx ? 'border-cyber-cyan/50 shadow-cyber-cyan' : 'opacity-70'
                }`}
              >
                <span className="hud-corner-tl" />
                <span className="hud-corner-br" />

                <div className="flex items-center gap-3 mb-4 font-mono text-xs font-semibold text-cyber-cyan">
                  <span>[PROTOCOL // 0{idx + 1}]</span>
                  <div className="h-px flex-1 bg-line" />
                </div>

                <h4 className="font-heading text-2xl font-bold text-ink mb-3">{c.title}</h4>
                <p className="text-base text-muted leading-relaxed font-sans">{c.desc}</p>

                <ul className="mt-6 space-y-3 font-sans">
                  {c.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-cyber-cyan shrink-0 mt-1" />
                      <span className="text-[15px] text-muted leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Spotlight Project Card ---------------- */

function ProjectCard({ project, delay }) {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <Reveal delay={delay}>
      <article
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="cyber-panel group relative h-full rounded-3xl p-7 md:p-8 overflow-hidden"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, var(--card-spotlight), transparent 70%), rgba(var(--c-card), 0.75)`,
        }}
      >
        <span className="hud-corner-tl" />
        <span className="hud-corner-br" />

        <div className="relative flex items-start justify-between gap-4 mb-6">
          <div className="grid place-items-center w-12 h-12 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
            {project.icon}
          </div>
          <span className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 px-3 py-1 rounded-full">
            {project.impact}
          </span>
        </div>

        <h3 className="relative font-heading text-xl font-bold text-ink leading-snug group-hover:text-cyber-cyan transition-colors">
          {project.title}
        </h3>

        <p className="relative mt-3 text-[15px] text-muted leading-relaxed font-sans">{project.description}</p>

        <div className="relative mt-5 flex items-center gap-2 font-mono text-xs text-cyber-emerald">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{project.metric}</span>
        </div>

        {/* Collapsible details */}
        <div
          className={`relative grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
            expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <ul className="pt-5 space-y-2 font-sans border-t border-line mt-4">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                  <span className="text-sm text-muted leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-md font-mono text-xs font-medium text-muted bg-surface/80 border border-line"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="relative mt-6 flex items-center justify-between gap-3 pt-4 border-t border-line">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted hover:text-cyber-cyan transition-colors"
          >
            {expanded ? '[- HIDE DETAILS]' : '[+ SHOW DETAILS]'}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {!project.comingSoon && (
            <a
              href={project.link || '#'}
              target={project.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={(e) => !project.link && e.preventDefault()}
              className={`inline-flex items-center gap-1.5 font-mono text-xs font-semibold transition-colors ${
                project.link
                  ? 'text-cyber-cyan hover:text-cyber-cyan/80'
                  : 'text-muted/50 cursor-not-allowed'
              }`}
            >
              {project.link ? 'LAUNCH PROJECT' : 'IN DEVELOPMENT'}
              {project.link && <ArrowUpRight className="w-3.5 h-3.5" />}
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* ---------------- Section Progress Dots ---------------- */

function SectionDots({ active }) {
  return (
    <div className="hidden md:flex fixed left-6 xl:left-8 2xl:left-10 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
      {SECTION_IDS.map((id) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            onClick={() => smoothScrollTo(id)}
            aria-label={`Go to ${SECTION_LABELS[id] || id}`}
            className="group relative grid place-items-center w-4 h-4"
          >
            <span
              className={`absolute inset-0 rounded-full bg-cyber-cyan/20 transition-transform duration-300 ${
                isActive ? 'scale-100' : 'scale-0'
              }`}
            />
            <span
              className={`relative block rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-2.5 h-2.5 bg-cyber-cyan shadow-cyber-cyan'
                  : 'w-2 h-2 bg-muted/40 group-hover:bg-cyber-cyan group-hover:scale-110'
              }`}
            />
            <span className="absolute left-6 px-2.5 py-1 rounded-md font-mono text-[11px] font-medium bg-card border border-line text-ink shadow-soft whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
              {SECTION_LABELS[id] || id}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/*  Main Application Component                                        */
/* ================================================================== */

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('theme_v3');
      if (stored === 'light') return 'light';
      if (stored === 'dark') return 'dark';
    }
    return 'dark'; // v3.0 defaults to futuristic Cyber Obsidian Void
  });

  const progressBarRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try {
      localStorage.setItem('theme_v3', theme);
    } catch {
      /* ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#05070f' : '#f8fafc');
  }, [theme]);

  // Scroll Progress
  useEffect(() => {
    let raf = 0;
    let lastScrolled = window.scrollY > 12;
    const update = () => {
      raf = 0;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress}%`;
      }
      const isScrolled = window.scrollY > 12;
      if (isScrolled !== lastScrolled) {
        lastScrolled = isScrolled;
        setScrolled(isScrolled);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Section Observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('theme_v3', next);
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const handleNav = (id) => {
    setMenuOpen(false);
    smoothScrollTo(id);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('venom0836@duck.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeTab || p.category === 'all');

  return (
    <div className="relative min-h-screen bg-page text-ink cyber-grid overflow-hidden transition-colors duration-500">
      {/* Interactive Constellation Mesh & Particle Canvas */}
      <CyberBackground theme={theme} />

      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[70]">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple shadow-cyber-cyan transition-[width] duration-150 ease-out"
          style={{ width: '0%' }}
        />
      </div>

      <SectionDots active={activeSection} />

      {/* ---------------- Cyber Navigation ---------------- */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-page/80 backdrop-blur-xl border-b border-line shadow-soft' : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <button
            onClick={() => handleNav('top')}
            className="group flex items-center gap-2.5"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-lg bg-cyber-cyan/15 border border-cyber-cyan/30 flex items-center justify-center font-mono font-bold text-cyber-cyan text-sm group-hover:scale-105 transition-transform">
              AR
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-ink group-hover:text-cyber-cyan transition-colors">
              Aryan Rudani
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3.5 py-1.5 font-mono text-xs font-semibold rounded-lg transition-all ${
                  activeSection === link.id
                    ? 'text-cyber-cyan bg-cyber-cyan/15 border border-cyber-cyan/30 shadow-cyber-cyan/20'
                    : 'text-muted hover:text-ink hover:bg-surface/80'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-3 grid place-items-center w-9 h-9 rounded-lg border border-line bg-card/80 text-ink hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-cyber-cyan" /> : <Moon className="w-4 h-4 text-cyber-cyan" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid place-items-center w-9 h-9 rounded-lg border border-line bg-card/80 text-ink"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              className="grid place-items-center w-9 h-9 rounded-lg border border-line bg-card/80 text-ink"
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-page/95 backdrop-blur-2xl border-b border-line px-6 py-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className="text-left px-3 py-2.5 font-mono text-sm font-medium text-muted hover:text-cyber-cyan rounded-lg hover:bg-surface transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ---------------- Hero Section ---------------- */}
      <section
        id="top"
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16"
      >
        <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/80 backdrop-blur px-4 py-1.5 mb-8 shadow-soft">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-emerald" />
                </span>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                  [SYSTEM: ONLINE] · CLOUD &amp; DEVSECOPS
                </span>
              </div>

              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.02]">
                Aryan Rudani
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple mt-2 text-glow">
                  <RotatingWord words={ROTATING_WORDS} /> Engineer
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg md:text-xl text-muted leading-relaxed font-sans">
                Engineering high-availability cloud platforms on{' '}
                <span className="text-ink font-semibold">Azure</span> and{' '}
                <span className="text-ink font-semibold">AWS</span>. Specialized in modular{' '}
                <span className="text-cyber-cyan font-mono font-medium">Terraform Landing Zones</span>,{' '}
                Kubernetes orchestration, and automated{' '}
                <span className="text-ink font-semibold">DevSecOps</span> security gates.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
                <button
                  onClick={() => smoothScrollTo('projects')}
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 hover:bg-cyber-cyan/25 hover:border-cyber-cyan shadow-cyber-cyan transition-all duration-300"
                >
                  Explore Architectures
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => smoothScrollTo('experience')}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider border border-line bg-card/70 backdrop-blur text-ink hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-all duration-300"
                >
                  Mission Log (CBS &amp; Co)
                </button>
              </div>
            </div>

            {/* Right: Futuristic Quantum Core Visualizer */}
            <div className="lg:col-span-5">
              <Reveal>
                <HeroArt />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Telemetry Bar */}
      <TelemetryBar />

      <Ornament />

      {/* ---------------- What I Build (Mission Control) ---------------- */}
      <StorySection />

      <Ornament />

      {/* ---------------- About Section ---------------- */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <Reveal>
            <SectionHeading eyebrow="Directive" title="Security Mindset, Cloud Scale" />
          </Reveal>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Hologram Monogram */}
            <Reveal className="md:col-span-4">
              <div className="cyber-panel rounded-3xl p-6 shadow-soft md:sticky md:top-28">
                <span className="hud-corner-tl" />
                <span className="hud-corner-br" />

                <Monogram />

                <div className="mt-4 text-center">
                  <p className="font-heading text-xl font-bold text-ink">Aryan Rudani</p>
                  <p className="font-mono text-xs text-muted mt-1 flex items-center justify-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyber-cyan" /> Ottawa, Ontario, Canada
                  </p>
                  <div className="flex justify-center gap-2 mt-4">
                    <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/20">
                      Cloud
                    </span>
                    <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold text-cyber-emerald bg-cyber-emerald/10 border border-cyber-emerald/20">
                      Security
                    </span>
                    <span className="px-2.5 py-1 rounded-md font-mono text-[11px] font-semibold text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/20">
                      DevSecOps
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* About Prose */}
            <Reveal delay={80} className="md:col-span-8">
              <div className="cyber-panel rounded-3xl p-8 md:p-10 shadow-soft">
                <span className="hud-corner-tl" />
                <span className="hud-corner-br" />

                <div className="space-y-5 text-lg text-muted leading-relaxed font-sans">
                  <p>
                    <span className="font-heading text-4xl text-cyber-cyan leading-none float-left mr-2.5 mt-0.5">
                      I
                    </span>
                    started in cybersecurity before moving into cloud development, and that background still influences how I work. Security isn't something I think about after building a system — it's part of how I design from the beginning.
                  </p>
                  <p>
                    What drives me is learning, both in tech and in life. New cloud services, better ways to architect solutions, insights from other professionals, even conversations over coffee with friends. I pick up perspectives everywhere. I like understanding not just how something works, but why it's built that way. That curiosity pushes me to dig deeper into the technologies I use.
                  </p>
                  <p>
                    I've learned that stepping away matters. Whether I'm on an adventure or just away from my desk, my mind processes problems differently. Some of my better technical solutions have come when I wasn't sitting in front of a screen trying to force them. It's taught me that good work isn't just about hours logged — it's about thinking clearly.
                  </p>
                  <p>
                    I believe good infrastructure should be invisible. If it's running well, nobody notices it. That's what I aim for — systems that are reliable enough that teams can focus on their work instead of worrying about the platform underneath.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Ornament />

      {/* ---------------- Experience Section ---------------- */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Mission History"
              title="Work Experience"
              subtitle="Production enterprise workloads, mission-critical migrations, and automated platforms."
            />
          </Reveal>

          <div className="space-y-8">
            {EXPERIENCE_DATA.map((exp, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="cyber-panel rounded-3xl p-8 md:p-10 shadow-soft">
                  <span className="hud-corner-tl" />
                  <span className="hud-corner-br" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-line">
                    <div className="flex items-start gap-4">
                      <div className="grid place-items-center w-12 h-12 rounded-2xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shrink-0">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-heading text-2xl font-bold text-ink">
                            {exp.role}
                          </h3>
                          <span className="px-3 py-0.5 rounded-full font-mono text-xs font-semibold text-cyber-cyan border border-cyber-cyan/30 bg-cyber-cyan/10">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-cyber-cyan font-medium text-lg mt-1 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </p>
                        <p className="flex items-center gap-1.5 text-sm text-muted mt-2 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-cyber-cyan" />
                          <span>{exp.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="md:text-right shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold border border-line bg-surface text-ink">
                        <Calendar className="w-3.5 h-3.5 text-cyber-cyan" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-base text-ink font-medium leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-3 font-sans">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-1" />
                        <span className="text-[15px] text-muted leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-line flex flex-wrap gap-2">
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-md font-mono text-xs font-medium border border-line bg-surface/80 text-muted hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* ---------------- Projects Section ---------------- */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Architectures"
              title="Featured Cloud Projects"
              subtitle="Production-grade Infrastructure as Code, Kubernetes deployments, and automated pipelines."
            />
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-2.5 mb-12">
              {[
                { id: 'all', label: 'All Architectures' },
                { id: 'azure', label: 'Azure' },
                { id: 'aws', label: 'AWS' },
                { id: 'devops', label: 'DevOps & Containers' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan shadow-cyber-cyan'
                      : 'bg-card/70 text-muted border border-line hover:text-ink hover:bg-surface'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={(i % 2) * 80} />
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* ---------------- Skills Section ---------------- */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Arsenal"
              title="Technical Modules"
              subtitle="Platform tooling, cloud infrastructure, and security frameworks."
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
            {SKILLS_DATA.map((group, i) => (
              <Reveal key={i} delay={(i % 2) * 80}>
                <div className="cyber-panel h-full rounded-3xl p-8 shadow-soft">
                  <span className="hud-corner-tl" />
                  <span className="hud-corner-br" />

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="grid place-items-center w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                        {group.icon}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-ink">{group.category}</h3>
                    </div>
                    <span className="font-mono text-xs font-semibold text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/30 px-2 py-0.5 rounded">
                      {group.code}
                    </span>
                  </div>

                  <ul className="space-y-3 font-sans">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-1" />
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

      <Ornament />

      {/* ---------------- Education Section ---------------- */}
      <section id="education" className="py-28 px-6">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <Reveal>
            <SectionHeading eyebrow="Credentials" title="Education &amp; Degrees" />
          </Reveal>

          <div className="space-y-5">
            {EDUCATION_DATA.map((edu, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="cyber-panel rounded-2xl p-7 md:p-8 shadow-soft">
                  <span className="hud-corner-tl" />
                  <span className="hud-corner-br" />

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="grid place-items-center w-11 h-11 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-ink">{edu.program}</h3>
                        <p className="text-cyber-cyan font-medium mt-0.5">{edu.school}</p>
                        <p className="flex items-center gap-1.5 font-mono text-xs text-muted mt-2">
                          <MapPin className="w-3.5 h-3.5 text-cyber-cyan" /> {edu.location}
                          {edu.gpa && <span className="text-cyber-emerald font-semibold">· GPA {edu.gpa}</span>}
                        </p>
                      </div>
                    </div>
                    <div className="md:text-right md:shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full font-mono text-xs font-semibold border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan">
                        {edu.status}
                      </span>
                      <p className="font-mono text-xs text-muted mt-2">{edu.graduation}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Ornament />

      {/* ---------------- Contact Section ---------------- */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
          <Reveal>
            <div className="cyber-panel rounded-3xl p-10 md:p-14 shadow-cyber-cyan/20 text-center relative overflow-hidden">
              <span className="hud-corner-tl" />
              <span className="hud-corner-br" />

              <div className="relative z-10">
                <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyber-cyan mb-4">
                  [INITIATE_CONTACT]
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-ink">
                  Let's Engineer the Future
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto font-sans">
                  Ready to deploy resilient infrastructure, automate security gates, or architect cloud systems? Send a transmission.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                  <a
                    href="mailto:venom0836@duck.com"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-cyber-cyan/15 text-cyber-cyan border border-cyber-cyan/40 hover:bg-cyber-cyan/25 hover:border-cyber-cyan shadow-cyber-cyan transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    venom0836@duck.com
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider border border-line bg-card text-muted hover:text-ink hover:border-cyber-cyan/40 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-cyber-emerald" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://github.com/ruda0008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium border border-line text-ink hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>github.com/ruda0008</span>
                  </a>
                  <a
                    href="https://ca.linkedin.com/in/aryanrudani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-medium border border-line text-ink hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/aryanrudani</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Footer ---------------- */}
      <footer className="py-10 px-6 border-t border-line relative z-10">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-ink font-semibold">Aryan Rudani</span> · Cloud &amp; DevSecOps Architect
          </p>
          <div className="flex items-center gap-4">
            <span className="text-cyber-cyan flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-pulse" />
              v3.0.0-PROD
            </span>
            <button
              onClick={() => smoothScrollTo('top')}
              className="hover:text-cyber-cyan transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
