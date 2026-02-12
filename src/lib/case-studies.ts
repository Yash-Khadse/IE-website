
export interface CaseStudy {
  id: number;
  client: string;
  title: string;
  desc: string;
  impact: string;
  metric: string;
  slug: string;
  tags: string[];
  image?: string;
  // Detail page fields
  service?: string;
  duration?: string;
  outcome?: string;
  challenge?: string;
  solution?: string;
  solutionList?: string[];
  results?: { label: string; value: string }[];
  techStack?: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",

    client: "Nebula Finance",
    title: "Scaling Fintech Infrastructure to 10k TPS",
    desc: "Optimizing database sharding and caching layers to handle high-frequency trading loads during market volatility.",
    impact: "+400% Throughput",
    metric: "99.99% Uptime",
    slug: "nebula-finance",
    tags: ["Fintech", "Infrastructure", "Scale"],
    // Details
    service: "System Architecture",
    duration: "6 Months",
    outcome: "+400% Throughput",
    challenge: "Nebula Finance was experiencing severe latency spikes during market open hours. Their existing monolithic architecture could not handle the concurrent write-operations required for real-time order matching, resulting in lost trades and user churn.",
    solution: "We proposed a complete decoupling of the order matching engine from the user-facing dashboard. By implementing an event-driven microservices architecture on top of Kubernetes, we ensured that the trading core remained isolated from high read-traffic.",
    solutionList: [
      "Implemented Redis clustering for sub-millisecond caching",
      "Migrated to TimescaleDB for high-throughput time-series data",
      "Developed custom WebSocket edge network for global low-latency"
    ],
    results: [
      { value: "99.99%", label: "System Uptime" },
      { value: "<12ms", label: "Global Latency" }
    ],
    techStack: ['Next.js', 'Kubernetes', 'Redis', 'Go', 'TimescaleDB', 'AWS']
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80",

    client: "Vortex Logistics",
    title: "Real-time Fleet Telemetry Dashboard",
    desc: "Building a WebSocket-driven visualization engine for tracking global asset movement with sub-second latency.",
    impact: "-150ms Latency",
    metric: "Real-time Sync",
    slug: "vortex-logistics",
    tags: ["Logistics", "Real-time", "Vue.js"],
    // Details
    service: "Dashboard Engineering",
    duration: "4 Months",
    outcome: "-150ms Latency Reduction",
    challenge: "Vortex Logistics struggled with a 30-second delay in their vehicle tracking dashboard, leading to operational inefficiencies and delayed dispatching decisions.",
    solution: "We engineered a real-time telemetry ingestion pipeline using IoT sensors and MQTT protocol, feeding directly into a high-performance Vue.js dashboard powered by WebSockets.",
    solutionList: [
      "Deployed MQTT brokers for lightweight IoT messaging",
      "Implemented geofencing algorithms at the edge",
      "Optimized frontend rendering for mapping 10,000+ simultaneous assets"
    ],
    results: [
      { value: "0.5s", label: "Data Latency" },
      { value: "10k+", label: "Active Assets" }
    ],
    techStack: ['Vue.js', 'MQTT', 'Node.js', 'PostgreSQL', 'Mapbox GL']
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1576091160550-2187d80afea2?w=1600&q=80",

    client: "Aether Health",
    title: "HIPAA-Compliant Patient Data Pipeline",
    desc: "Architecting a secure, encrypted data lake for medical records with zero-trust security implementation.",
    impact: "Zero Breaches",
    metric: "ISO 27001",
    slug: "aether-health",
    tags: ["Healthtech", "Security", "HIPAA"],
    // Details
    service: "Security Architecture",
    duration: "8 Months",
    outcome: "ISO 27001 Certification",
    challenge: "Aether Health needed to unify patient records from 15 disparate legacy systems while adhering to strict HIPAA compliance and zero-trust security mandates.",
    solution: "We designed a federated data lake architecture with field-level encryption. Access control was managed via a custom OPA (Open Policy Agent) implementation, ensuring strictly least-privileged access.",
    solutionList: [
      "Implemented field-level AES-256 encryption for PII",
      "Deployed Open Policy Agent for granular Authorization",
      "Automated compliance auditing and reporting pipelines"
    ],
    results: [
      { value: "100%", label: "Compliance Score" },
      { value: "0", label: "Security Incidents" }
    ],
    techStack: ['AWS Glue', 'Snowflake', 'OPA', 'Terraform', 'Python']
  }
];
