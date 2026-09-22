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
} from 'lucide-react';

/* ================================================================== */
/*  Illustrations (original SVG, theme-aware via CSS variables)       */
/* ================================================================== */

function HeroArt() {
  return (
    <svg
      viewBox="0 0 480 480"
      className="w-full max-w-[460px] xl:max-w-[520px] 2xl:max-w-[560px] mx-auto transition-transform duration-300"
      aria-hidden="true"
    >
      <defs>
        {/* Atmospheric backdrop glow */}
        <radialGradient id="atmo" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgb(var(--c-accent))" stopOpacity="0.18" />
          <stop offset="60%" stopColor="rgb(var(--c-accent))" stopOpacity="0.04" />
          <stop offset="100%" stopColor="rgb(var(--c-accent))" stopOpacity="0" />
        </radialGradient>

        {/* Big accent orb — glossy 3D-feel gradient (light top-left → deep bottom-right) */}
        <radialGradient id="bigOrb" cx="32%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#f4b095" />
          <stop offset="35%" stopColor="rgb(var(--c-accent))" />
          <stop offset="100%" stopColor="rgb(var(--c-accent-hover))" />
        </radialGradient>

        {/* Halo around the big orb */}
        <radialGradient id="bigHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(var(--c-accent))" stopOpacity="0.50" />
          <stop offset="60%" stopColor="rgb(var(--c-accent))" stopOpacity="0.08" />
          <stop offset="100%" stopColor="rgb(var(--c-accent))" stopOpacity="0" />
        </radialGradient>

        {/* Glassy cream orb — fixed cream tones so it pops in both themes */}
        <radialGradient id="glassOrb" cx="32%" cy="28%" r="82%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#fbf8f1" />
          <stop offset="100%" stopColor="#f1ebde" />
        </radialGradient>
      </defs>

      {/* Atmospheric backdrop — CIRCLE (no rectangular edges in dark mode) */}
      <circle cx="240" cy="240" r="240" fill="url(#atmo)" />

      {/* Halo behind the big orb */}
      <circle cx="240" cy="280" r="170" fill="url(#bigHalo)" />

      {/* ===== ORB 1: BIG accent (main focal) — reduced from r=128 to r=108 ===== */}
      <circle cx="240" cy="280" r="108" fill="url(#bigOrb)" />
      {/* Soft outer specular */}
      <ellipse
        cx="200"
        cy="228"
        rx="52"
        ry="22"
        fill="white"
        fillOpacity="0.32"
        transform="rotate(-25 200 228)"
      />
      {/* Hot specular */}
      <ellipse
        cx="190"
        cy="216"
        rx="18"
        ry="8"
        fill="white"
        fillOpacity="0.6"
        transform="rotate(-25 190 216)"
      />
      {/* Rim light at bottom */}
      <ellipse cx="256" cy="375" rx="50" ry="5" fill="rgb(var(--c-accent-hover))" fillOpacity="0.5" />

      {/* ===== ORB 2: Glassy cream with nested shield (security focal) ===== */}
      {/* Reduced from r=72 to r=60 */}
      <circle
        cx="380"
        cy="130"
        r="60"
        fill="url(#glassOrb)"
        stroke="rgb(var(--c-ink))"
        strokeOpacity="0.08"
      />
      <ellipse cx="362" cy="110" rx="18" ry="8" fill="white" fillOpacity="0.85" />
      {/* OUTER shield — rounded top peak, smooth bottom point, proper proportions */}
      <path
        d="M 358 110 L 358 138 Q 358 153 380 163 Q 402 153 402 138 L 402 110 Q 380 98 358 110 Z"
        fill="rgb(var(--c-accent))"
      />
      {/* INNER shield (nested, heraldic style — proportional to outer) */}
      <path
        d="M 365 119 L 365 140 Q 365 150 380 156 Q 395 150 395 140 L 395 119 Q 380 109 365 119 Z"
        fill="#ffffff"
        fillOpacity="0.88"
      />

      {/* ===== ORB 3: Small accent (top-left) ===== */}
      <circle cx="92" cy="112" r="34" fill="url(#bigOrb)" />
      <ellipse cx="80" cy="100" rx="13" ry="6" fill="white" fillOpacity="0.45" />

      {/* ===== ORB 4: Small glass (bottom-right) with accent core ===== */}
      <circle
        cx="402"
        cy="376"
        r="40"
        fill="url(#glassOrb)"
        stroke="rgb(var(--c-ink))"
        strokeOpacity="0.08"
      />
      <ellipse cx="390" cy="363" rx="12" ry="5" fill="white" fillOpacity="0.65" />
      <circle cx="402" cy="376" r="12" fill="rgb(var(--c-accent))" />

      {/* ===== Sparkles in negative space ===== */}
      <circle cx="55" cy="240" r="6" fill="rgb(var(--c-accent))" />
      <circle cx="55" cy="240" r="14" fill="rgb(var(--c-accent))" opacity="0.22" />

      <circle cx="445" cy="240" r="4" fill="rgb(var(--c-accent))" />
      <circle cx="445" cy="240" r="10" fill="rgb(var(--c-accent))" opacity="0.18" />

      <circle cx="240" cy="62" r="3.5" fill="rgb(var(--c-ink))" fillOpacity="0.25" />
      <circle cx="170" cy="438" r="3.5" fill="rgb(var(--c-accent))" />
      <circle cx="320" cy="58" r="2.5" fill="rgb(var(--c-ink))" fillOpacity="0.3" />
      <circle cx="50" cy="380" r="2.5" fill="rgb(var(--c-ink))" fillOpacity="0.25" />
    </svg>
  );
}

function ArtArchitecture() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden="true">
      <rect x="20" y="74" width="80" height="22" rx="6" fill="rgb(var(--c-accent-soft))" />
      <rect x="25" y="44" width="75" height="22" rx="6" fill="rgb(var(--c-ink))" fillOpacity="0.08" />
      <rect x="30" y="14" width="65" height="22" rx="6" fill="rgb(var(--c-accent))" />
      <circle cx="42" cy="25" r="4.5" fill="white" />
      <path
        d="M 39.5 25 L 41.5 27 L 45 23"
        fill="none"
        stroke="rgb(var(--c-accent))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="52" y="22" width="32" height="3" rx="1.5" fill="white" fillOpacity="0.95" />
      <rect x="52" y="28" width="20" height="2.5" rx="1.25" fill="white" fillOpacity="0.7" />
      <line x1="62" y1="36" x2="62" y2="44" stroke="rgb(var(--c-ink))" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="2 2" />
      <line x1="62" y1="66" x2="62" y2="74" stroke="rgb(var(--c-ink))" strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

function ArtDevSecOps() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden="true">
      <line x1="14" y1="60" x2="106" y2="60" stroke="rgb(var(--c-ink))" strokeOpacity="0.15" strokeWidth="2" strokeDasharray="3 4" />
      <circle cx="20" cy="60" r="9" fill="rgb(var(--c-card))" stroke="rgb(var(--c-ink))" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="20" cy="60" r="3.5" fill="rgb(var(--c-ink))" fillOpacity="0.4" />
      <circle cx="50" cy="60" r="12" fill="rgb(var(--c-accent))" />
      <path
        d="M 50 52 L 56.5 55 L 56.5 62 Q 56.5 67.5 50 70.5 Q 43.5 67.5 43.5 62 L 43.5 55 Z"
        fill="white"
        fillOpacity="0.95"
      />
      <path
        d="M 47 60 L 49 62 L 54 57"
        stroke="rgb(var(--c-accent))"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="80" cy="60" r="9" fill="rgb(var(--c-card))" stroke="rgb(var(--c-ink))" strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="80" cy="60" r="3.5" fill="rgb(var(--c-accent))" />
      <circle cx="100" cy="60" r="6" fill="rgb(var(--c-accent-soft))" stroke="rgb(var(--c-accent))" strokeWidth="1" />
    </svg>
  );
}

function ArtServerless() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden="true">
      <rect x="18" y="18" width="22" height="22" rx="5" fill="rgb(var(--c-ink))" fillOpacity="0.08" />
      <rect x="49" y="18" width="22" height="22" rx="5" fill="rgb(var(--c-accent))" />
      <rect x="80" y="18" width="22" height="22" rx="5" fill="rgb(var(--c-ink))" fillOpacity="0.08" />

      <rect x="18" y="49" width="22" height="22" rx="5" fill="rgb(var(--c-accent-soft))" stroke="rgb(var(--c-accent))" strokeWidth="1" />
      <rect x="49" y="49" width="22" height="22" rx="5" fill="rgb(var(--c-ink))" fillOpacity="0.08" />
      <rect x="80" y="49" width="22" height="22" rx="5" fill="rgb(var(--c-accent))" />

      <rect x="18" y="80" width="22" height="22" rx="5" fill="rgb(var(--c-accent))" />
      <rect x="49" y="80" width="22" height="22" rx="5" fill="rgb(var(--c-ink))" fillOpacity="0.08" />
      <rect x="80" y="80" width="22" height="22" rx="5" fill="rgb(var(--c-accent-soft))" stroke="rgb(var(--c-accent))" strokeWidth="1" />
    </svg>
  );
}

function ArtSecurity() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden="true">
      <g className="spin-slow" style={{ transformOrigin: '60px 60px' }}>
        <circle cx="60" cy="60" r="50" fill="none" stroke="rgb(var(--c-ink))" strokeOpacity="0.1" strokeDasharray="3 5" />
        <circle cx="110" cy="60" r="3" fill="rgb(var(--c-accent))" />
      </g>
      <g className="spin-slow-reverse" style={{ transformOrigin: '60px 60px' }}>
        <circle cx="60" cy="60" r="36" fill="none" stroke="rgb(var(--c-ink))" strokeOpacity="0.15" strokeDasharray="2 4" />
        <circle cx="24" cy="60" r="2.5" fill="rgb(var(--c-accent))" />
      </g>
      <circle cx="60" cy="60" r="22" fill="rgb(var(--c-accent))" />
      <path
        d="M 60 49 L 71 54.5 L 71 64 Q 71 73 60 78 Q 49 73 49 64 L 49 54.5 Z"
        fill="rgb(var(--c-accent-soft))"
      />
      <path
        d="M 53 62 L 58 67 L 67 57"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Monogram() {
  return (
    <svg viewBox="0 0 240 240" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="monoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(var(--c-accent))" stopOpacity="0.15" />
          <stop offset="100%" stopColor="rgb(var(--c-accent))" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="120" cy="120" r="115" fill="url(#monoGlow)" />
      <g className="spin-slow" style={{ transformOrigin: '120px 120px' }}>
        <circle cx="120" cy="120" r="108" fill="none" stroke="rgb(var(--c-accent))" strokeOpacity="0.25" strokeDasharray="2 6" />
        <circle cx="228" cy="120" r="3" fill="rgb(var(--c-accent))" />
      </g>
      <circle cx="120" cy="120" r="88" fill="rgb(var(--c-page))" stroke="rgb(var(--c-ink))" strokeOpacity="0.1" />
      <text
        x="120"
        y="148"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="96"
        fontWeight="600"
        fill="rgb(var(--c-accent))"
        letterSpacing="-2"
      >
        AR
      </text>
      <line x1="78" y1="160" x2="162" y2="160" stroke="rgb(var(--c-ink))" strokeOpacity="0.15" />
      <text
        x="120"
        y="178"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        letterSpacing="6"
        fill="rgb(var(--c-muted))"
      >
        CLOUD · SECURITY
      </text>
    </svg>
  );
}

/* ================================================================== */
/*  Data                                                              */
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
    metric: 'Modular IaC · Hub-Spoke Architecture',
    icon: <Workflow className="w-6 h-6" />,
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
    id: 3,
    title: 'Automated Serverless Resume Screening Platform (AWS)',
    category: 'aws',
    impact: 'Event-driven Architecture',
    description:
      'Built an automated serverless hiring automation platform using AWS Lambda with S3 event triggers. Automatically extracts candidate data (contact info, skills, education) using PyPDF2 and regex, stores candidate profiles in DynamoDB, and orchestrates scoring and notifications via SQS queues and SES emails.',
    tech: ['AWS Lambda', 'S3', 'DynamoDB', 'SES', 'SQS', 'Python', 'PyPDF2', 'IAM'],
    metric: 'Event-Driven Automation',
    icon: <CloudLightning className="w-6 h-6" />,
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
    id: 5,
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
    icon: <Server className="w-6 h-6" />,
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
    metric: 'Container isolation',
    icon: <Container className="w-6 h-6" />,
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
    type: 'Co-op',
    description:
      'Migrated production workloads to Azure Kubernetes Service (AKS), built automated CI/CD pipelines, integrated enterprise SSO & access controls, and engineered containerized synthetic observability.',
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
    category: 'Cloud & Infrastructure (IaC)',
    icon: <Cloud className="w-5 h-5" />,
    items: [
      'Terraform (Modular Hub-and-Spoke Landing Zones, State Locking, Azure OIDC)',
      'Azure (AKS, Functions, Key Vault, Cosmos DB, Azure Firewall, Entra ID, Storage, Service Bus)',
      'AWS (Lambda, S3, DynamoDB, EC2, IAM Policies, SQS, SES, RBAC)',
    ],
  },
  {
    category: 'DevOps, Containers & CI/CD',
    icon: <Layers className="w-5 h-5" />,
    items: [
      'Kubernetes (K8s), Azure Kubernetes Service (AKS), Red Hat OpenShift',
      'Docker, Docker Compose, Helm Charts, Container Registries (ACR)',
      'GitHub Actions CI/CD (Multi-stage pipelines, automated deployment, broken build policy)',
      'SonarCloud / SonarQube SAST, Trivy Container CVE Scanning',
    ],
  },
  {
    category: 'Monitoring & Observability',
    icon: <BarChart3 className="w-5 h-5" />,
    items: [
      'Grafana, Grafana k6 (Automated containerized synthetic monitoring)',
      'InfluxDB, Azure Monitor, Log Analytics Workspaces, Dynatrace',
      'Automated failure detection and pod lifecycle auto-healing on AKS',
    ],
  },
  {
    category: 'Security, Identity & Languages',
    icon: <CheckCircle2 className="w-5 h-5" />,
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
  },
  {
    school: 'Algonquin College',
    program: 'Cybersecurity Analysis Graduate Certificate',
    status: 'Completed',
    graduation: 'April 2025',
    location: 'Ottawa, ON',
    gpa: '3.7 / 4.0',
  },
  {
    school: 'Veer Narmad South Gujarat University',
    program: 'Bachelor of Computer Applications',
    status: 'Completed',
    graduation: 'April 2024',
    location: 'Gujarat, IN',
    gpa: '3.3 / 4.0',
  },
];

const CAPABILITIES = [
  {
    num: '01',
    title: 'Cloud Architecture & IaC',
    desc: 'I design multi-service architectures and landing zones on Azure and AWS using modular Terraform. Hub-and-spoke networks, Kubernetes clusters, zero-trust security boundaries, and automated state management that scales reliably in production.',
    tags: 'Terraform · Azure · AWS · IaC',
    icon: <Cloud className="w-6 h-6" />,
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
    title: 'DevSecOps & Platform Automation',
    desc: 'Automated CI/CD pipelines that enforce quality and security before code reaches production. From container vulnerability scanning to crash-loop auto-remediation and Helm-based zero-downtime releases.',
    tags: 'GitHub Actions · OpenShift · AKS · Helm',
    icon: <Workflow className="w-6 h-6" />,
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
    title: 'Serverless & Containers',
    desc: 'Event-driven Lambdas, Kubernetes microservices, and Docker stacks. I pick the right tool for the load profile, not the trendiest one, then tune it until it pays for itself.',
    tags: 'Lambda · AKS · Docker',
    icon: <Boxes className="w-6 h-6" />,
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
    title: 'Security by Design',
    desc: 'IAM least-privilege, zero-trust patterns, and identity federation. A cybersecurity background means security shapes the architecture from day one, not a checklist at the end.',
    tags: 'Entra ID · SAML/OAuth · Key Vault · RBAC',
    icon: <Lock className="w-6 h-6" />,
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
  { id: 'capabilities', label: 'What I Build' },
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
  capabilities: 'What I Build',
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  skills: 'Skills',
  education: 'Education',
  contact: 'Contact',
};

const ROTATING_WORDS = ['Security', 'DevSecOps', 'Automation', 'Serverless', 'Kubernetes'];

/* ================================================================== */
/*  Helpers                                                           */
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
          if (optsRef.current.once !== false) obs.unobserve(el);
        }
      },
      {
        threshold: optsRef.current.threshold ?? 0.2,
        rootMargin: optsRef.current.rootMargin ?? '0px 0px -8% 0px',
      }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.12 });
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

function Ornament() {
  return (
    <div className="ornament max-w-xs mx-auto my-2">
      <Sparkles className="w-3.5 h-3.5 text-accent" />
    </div>
  );
}



/* ---------------- Rotating word ---------------- */

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
      }, 280);
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
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
      }}
    >
      {words[i]}
    </span>
  );
}

/* ---------------- Hero parallax blobs ---------------- */

function HeroBlobs() {
  const a = useRef(null);
  const b = useRef(null);
  useEffect(() => {
    let raf = 0;
    const apply = () => {
      const y = window.scrollY;
      if (a.current) a.current.style.transform = `translate3d(0, ${y * 0.25}px, 0)`;
      if (b.current) b.current.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div ref={a} className="absolute -top-32 -left-24 will-change-transform">
        <div className="w-[34rem] h-[34rem] rounded-full bg-accent-soft blur-3xl animate-float-slow" />
      </div>
      <div ref={b} className="absolute top-1/3 -right-24 will-change-transform">
        <div
          className="w-[28rem] h-[28rem] rounded-full bg-accent-soft blur-3xl animate-float-slow"
          style={{ animationDelay: '3s' }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(var(--c-ink) / 0.05) 1px, transparent 0)',
          backgroundSize: '26px 26px',
        }}
      />
    </div>
  );
}

/* ---------------- Sticky scroll-story ---------------- */

function StorySection() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  // Same center-line scroll-spy: whichever right-column card sits at the
  // viewport's vertical midline drives the sticky left panel.
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
            eyebrow="What I Build"
            title="Four areas where I go deep"
          />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-4">
          {/* LEFT (sticky banner): identity only — number, illustration, title, tags */}
          <div className="md:sticky md:top-28 md:self-start md:h-[calc(100vh-9rem)] flex flex-col justify-center">
            <div className="relative" style={{ minHeight: '480px' }}>
              <div key={current.num} className="animate-fade-up">
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-sm font-medium text-muted tracking-widest">
                    {current.num} / 04
                  </span>
                  <div className="h-px flex-1 bg-line" />
                </div>

                <div className="mb-8">
                  <CurrentArt />
                </div>

                <h3 className="font-serif text-5xl md:text-6xl font-semibold tracking-tight text-ink leading-[1.0]">
                  {current.title}
                </h3>

                <p className="mt-6 text-xs font-semibold text-accent tracking-[0.22em] uppercase">
                  {current.tags}
                </p>
              </div>

              {/* Progress bars (also act as jump nav) */}
              <div className="mt-12 flex gap-2">
                {CAPABILITIES.map((c, idx) => (
                  <button
                    key={c.num}
                    onClick={() =>
                      refs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }
                    aria-label={c.title}
                    className="group flex-1 h-1 rounded-full overflow-hidden bg-line"
                  >
                    <span
                      className="block h-full bg-accent transition-all duration-700 ease-out"
                      style={{ width: idx <= active ? '100%' : '0%' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT (scrolling cards): substance only — description + concrete bullets */}
          <div className="flex flex-col gap-6 md:gap-10">
            {CAPABILITIES.map((c, idx) => (
              <div
                key={c.num}
                ref={(el) => (refs.current[idx] = el)}
                className="md:min-h-[75vh] flex items-center"
              >
                <div
                  className={`w-full rounded-3xl border bg-card p-7 md:p-10 shadow-soft transition-all duration-500 ${idx === active
                      ? 'border-accent/40 shadow-lift md:scale-[1.01]'
                      : 'border-line opacity-70'
                    }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      In practice
                    </span>
                    <span className="font-mono text-xs font-semibold text-muted tracking-widest">
                      {c.num}
                    </span>
                  </div>

                  <p className="text-base md:text-lg text-muted leading-relaxed">{c.desc}</p>

                  <div className="h-px bg-line my-7" />

                  <ul className="space-y-4">
                    {c.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-[15px] md:text-base text-ink leading-relaxed">
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Project card with 3D tilt ---------------- */

function ProjectCard({ project, delay }) {
  const cardRef = useRef(null);
  const rafRef = useRef(0);
  const [expanded, setExpanded] = useState(false);

  // Capture pointer coords synchronously, then write the transform on the
  // next animation frame. Coalesces multiple mousemove events per frame.
  const handleMove = useCallback((e) => {
    const { clientX, clientY } = e;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const el = cardRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width - 0.5;
      const y = (clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1100px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`;
    });
  }, []);

  const handleLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    }
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
  }, []);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <Reveal delay={delay}>
      <article
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`group relative h-full rounded-3xl border border-line bg-card p-7 md:p-8 shadow-soft transition-all duration-200 will-change-transform hover:shadow-lift hover:border-accent/40 ${project.comingSoon ? 'opacity-80' : ''
          }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Decorative corner accent */}
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-bl-[80px] rounded-tr-3xl pointer-events-none opacity-60"
          style={{
            background:
              'radial-gradient(circle at top right, rgb(var(--c-accent)/0.10), transparent 65%)',
          }}
        />

        <div className="relative flex items-start justify-between gap-4 mb-6">
          <div className="grid place-items-center w-12 h-12 rounded-2xl bg-accent-soft text-accent">
            {project.icon}
          </div>
          <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-accent bg-accent-soft px-3 py-1.5 rounded-full">
            {project.impact}
          </span>
        </div>

        <h3 className="relative text-xl font-semibold text-ink leading-snug group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        <p className="relative mt-3 text-[15px] text-muted leading-relaxed">{project.description}</p>

        <div className="relative mt-5 flex items-center gap-2 text-accent">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span className="text-sm font-medium">{project.metric}</span>
        </div>

        {/* Collapsible details (grid-rows trick for smooth height animation) */}
        <div
          className={`relative grid transition-[grid-template-rows,opacity] duration-300 ease-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
        >
          <div className="overflow-hidden">
            <ul className="pt-5 space-y-2">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
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
              className="px-2.5 py-1 rounded-full text-xs font-medium text-muted bg-surface border border-line"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer row: details toggle + view link */}
        <div className="relative mt-6 flex items-center justify-between gap-3 pt-4 border-t border-line">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            {expanded ? 'Hide details' : 'Show details'}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''
                }`}
            />
          </button>

          {!project.comingSoon && (
            <a
              href={project.link || '#'}
              target={project.link ? '_blank' : '_self'}
              rel="noopener noreferrer"
              onClick={(e) => !project.link && e.preventDefault()}
              className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${project.link
                  ? 'text-accent hover:text-accent-hover'
                  : 'text-muted/60 cursor-not-allowed'
                }`}
            >
              {project.link ? 'View Project' : 'Link coming soon'}
              {project.link && <ArrowUpRight className="w-4 h-4" />}
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

/* ---------------- Section progress dots ---------------- */

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
            {/* Soft halo behind the active dot */}
            <span
              className={`absolute inset-0 rounded-full bg-accent/15 transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-0'
                }`}
            />
            {/* The dot itself */}
            <span
              className={`relative block rounded-full transition-all duration-300 ${isActive
                  ? 'w-2.5 h-2.5 bg-accent'
                  : 'w-2 h-2 bg-ink/30 group-hover:bg-ink/60 group-hover:scale-110'
                }`}
            />
            {/* Hover label sliding in to the right of the dot */}
            <span className="absolute left-6 px-2.5 py-1 rounded-md text-[11px] font-medium bg-card border border-line text-ink shadow-soft whitespace-nowrap opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none">
              {SECTION_LABELS[id] || (id === 'top' ? 'Home' : id)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ---------------- LinkedIn badge ---------------- */

function LinkedInBadge({ theme }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const linkedinTheme = theme === 'dark' ? 'dark' : 'light';
    container.innerHTML = `<div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="${linkedinTheme}" data-type="HORIZONTAL" data-vanity="aryanrudani" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ca.linkedin.com/in/aryanrudani"></a></div>`;

    const SCRIPT_ID = 'linkedin-badge-script';
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, [theme]);

  return (
    <div className="mt-10 flex items-center justify-center w-full">
      <div
        ref={containerRef}
        className="flex items-center justify-center min-h-[110px]"
      />
    </div>
  );
}

/* ================================================================== */
/*  App                                                               */
/* ================================================================== */

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') return 'dark';
      if (stored === 'light') return 'light';
    }
    return 'light';
  });

  // Progress bar is updated via direct DOM write inside the scroll handler
  // (no re-render of the whole tree on every scroll event).
  const progressBarRef = useRef(null);

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

  // rAF-batched scroll handler. Writes progress directly to the DOM, only
  // touches React state when the "scrolled past nav threshold" flag flips.
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

  // Scroll-spy: whichever section overlaps the viewport vertical midline
  // becomes active. This pattern is robust for sections of any height.
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
    <div className="relative min-h-screen bg-page text-ink">
      {/* Sitewide grain texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Scroll progress (width is driven directly by the scroll handler) */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-[60]">
        <div
          ref={progressBarRef}
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: '0%' }}
        />
      </div>

      <SectionDots active={activeSection} />

      {/* ---------------- Nav ---------------- */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-page/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
          }`}
      >
        <nav className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <button
            onClick={() => handleNav('top')}
            className="group"
            aria-label="Back to top"
          >
            <span className="font-serif text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
              Aryan Rudani
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${activeSection === link.id
                    ? 'text-accent bg-accent-soft'
                    : 'text-muted hover:text-ink hover:bg-surface'
                  }`}
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

      {/* ---------------- Hero (split layout with illustration) ---------------- */}
      <section
        id="top"
        className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
      >
        <HeroBlobs />

        <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card/70 backdrop-blur px-4 py-1.5 mb-8 shadow-soft">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-sm font-medium text-ink">
                  Open to Cloud &amp; Security roles
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight text-ink">
                Aryan Rudani
                <span className="block text-accent mt-2">
                  Cloud Developer &amp; <RotatingWord words={ROTATING_WORDS} />
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
                I build secure cloud infrastructure on{' '}
                <span className="text-ink font-medium">AWS</span> and{' '}
                <span className="text-ink font-medium">Azure</span>. I came up through
                cybersecurity, then moved into cloud engineering. These days I spend my time on
                automation, serverless, and{' '}
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
            </div>

            {/* Right: illustration */}
            <div className="lg:col-span-5">
              <Reveal>
                <HeroArt />
              </Reveal>
            </div>
          </div>


        </div>
      </section>

      <Ornament />

      {/* ---------------- What I Build ---------------- */}
      <StorySection />

      <Ornament />

      {/* ---------------- About (two-col with monogram) ---------------- */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <Reveal>
            <SectionHeading eyebrow="About" title="A security mindset, applied to the cloud" />
          </Reveal>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Monogram column */}
            <Reveal className="md:col-span-4">
              <div className="rounded-3xl border border-line bg-card p-6 shadow-soft md:sticky md:top-28">
                <div className="aspect-square">
                  <Monogram />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-serif text-xl font-semibold text-ink">Aryan Rudani</p>
                  <p className="text-sm text-muted mt-1">Ottawa, Canada</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium text-accent bg-accent-soft">
                      Cloud
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium text-accent bg-accent-soft">
                      Security
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium text-accent bg-accent-soft">
                      DevSecOps
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Prose column */}
            <Reveal delay={80} className="md:col-span-8">
              <div className="rounded-3xl border border-line bg-card p-8 md:p-10 shadow-soft">
                <div className="space-y-5 text-lg text-muted leading-relaxed">
                  <p>
                    <span className="font-serif text-4xl text-accent leading-none float-left mr-2 mt-1">
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

      {/* ---------------- Experience ---------------- */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Career"
              title="Work Experience"
              subtitle="Engineering production cloud platforms, automated DevSecOps pipelines, and enterprise migrations."
            />
          </Reveal>

          <div className="space-y-8">
            {EXPERIENCE_DATA.map((exp, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-3xl border border-line bg-card p-8 md:p-10 shadow-soft transition-all duration-300 hover:border-accent/40">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-line">
                    <div className="flex items-start gap-4">
                      <div className="grid place-items-center w-12 h-12 rounded-2xl bg-accent-soft text-accent shrink-0">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-serif text-2xl font-semibold text-ink">
                            {exp.role}
                          </h3>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold text-accent border border-accent/30 bg-accent-soft">
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-accent font-medium text-lg mt-1 flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </p>
                        <p className="flex items-center gap-1.5 text-sm text-muted mt-2">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="md:text-right shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-line bg-surface text-ink">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-base text-ink font-medium leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
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
                        className="px-3 py-1 rounded-full text-xs font-medium border border-line bg-surface text-muted hover:text-ink transition-colors"
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

      {/* ---------------- Projects ---------------- */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Work"
              title="Cloud Projects"
              subtitle="Real production projects across AWS, Azure, and containerized deployments."
            />
          </Reveal>

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
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                      ? 'bg-accent text-white shadow-soft'
                      : 'bg-card text-muted border border-line hover:text-ink hover:bg-surface'
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

      {/* ---------------- Skills ---------------- */}
      <section id="skills" className="py-28 px-6">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
          <Reveal>
            <SectionHeading
              eyebrow="Toolkit"
              title="Technical Skills"
              subtitle="Cloud platforms, security frameworks, and development tools."
            />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
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

      <Ornament />

      {/* ---------------- Education ---------------- */}
      <section id="education" className="py-28 px-6">
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
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
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${edu.status === 'In Progress'
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

      <Ornament />

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
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
                  If you need someone who can build cloud infrastructure and actually secure it,
                  send me a note. I read everything.
                </p>

                <a
                  href="mailto:venom0836@duck.com"
                  className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 shadow-soft hover:shadow-lift"
                >
                  <Mail className="w-4 h-4" />
                  venom0836@duck.com
                </a>

                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://github.com/ruda0008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-ink hover:bg-surface hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View on GitHub</span>
                  </a>
                  <a
                    href="https://ca.linkedin.com/in/aryanrudani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-ink hover:bg-surface hover:text-accent transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                </div>

                <LinkedInBadge theme={theme} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="py-10 px-6 border-t border-line">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
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
