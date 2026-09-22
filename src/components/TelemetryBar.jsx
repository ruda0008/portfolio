import React from 'react';
import { Terminal, ShieldCheck, Activity, Cpu, Server, Lock } from 'lucide-react';

const TELEMETRY_ITEMS = [
  { label: 'STATUS', value: 'ALL SYSTEMS OPERATIONAL', icon: <Activity className="w-3.5 h-3.5 text-cyber-emerald" /> },
  { label: 'CLUSTER', value: 'AKS PROD (MULTI-ZONE FAILOVER)', icon: <Server className="w-3.5 h-3.5 text-cyber-cyan" /> },
  { label: 'IaC ENGINE', value: 'TERRAFORM CAF HUB-SPOKE', icon: <Cpu className="w-3.5 h-3.5 text-cyber-purple" /> },
  { label: 'SECURITY GATES', value: 'SAST + TRIVY ZERO-TOLERANCE', icon: <ShieldCheck className="w-3.5 h-3.5 text-cyber-emerald" /> },
  { label: 'AUTH PROTOCOL', value: 'ENTRA ID SAML SSO & OIDC', icon: <Lock className="w-3.5 h-3.5 text-cyber-cyan" /> },
  { label: 'SYNTHETIC MONITORING', value: 'GRAFANA K6 100% PASS', icon: <Activity className="w-3.5 h-3.5 text-cyber-emerald" /> },
  { label: 'COSMOS DB LATENCY', value: '< 10MS PARTITION OPTIMIZED', icon: <Terminal className="w-3.5 h-3.5 text-cyber-cyan" /> },
];

export default function TelemetryBar() {
  return (
    <div className="relative w-full overflow-hidden border-y border-line bg-card/40 backdrop-blur-md py-2.5 z-20">
      {/* Subtle scanline */}
      <div className="scanline" />

      <div className="flex w-max animate-marquee gap-8">
        {[...TELEMETRY_ITEMS, ...TELEMETRY_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2.5 font-mono text-xs whitespace-nowrap text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan" />
            </span>
            <span className="font-semibold text-cyber-cyan uppercase tracking-wider">{item.label}:</span>
            <span className="text-ink font-medium">{item.value}</span>
            <span className="text-line ml-3">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
