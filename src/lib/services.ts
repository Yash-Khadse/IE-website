
export interface ServiceData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  iconName: string;
  metrics: { label: string; value: string }[];
  features: string[];
  process: string[];
  impactGraph: { label: string; before: number; after: number; unit: string }[];
  relatedServices: string[];
  href: string;
  gradient: string; // Tailwind gradient classes
}

export const SERVICES: ServiceData[] = [
  {
    id: "strategic-architecture",
    title: "Strategic Architecture",
    tagline: "The Blueprint for Market Dominance.",
    description: "Full-spectrum digital audit and roadmap engineering. We identify bottlenecks and architect the growth trajectory.",
    fullDescription: "Our Strategic Architecture service is the foundational audit of your entire digital ecosystem. We deconstruct your current stack, analyze performance bottlenecks, and engineer a roadmap for scalable growth. This isn't just advice; it's a blueprint for market dominance.",
    iconName: "Target",
    metrics: [
      { label: "Efficiency_Gain", value: "+45%" },
      { label: "Cost_Reduction", value: "-22%" },
      { label: "Scalability", value: "MAX" }
    ],
    features: [
      "Full-Stack Audit",
      "Tech Debt Analysis",
      "Growth Roadmap",
      "Vendor Selection"
    ],
    process: [
      "Initial Diagnostics",
      "Bottleneck ID",
      "Architectural Blueprint",
      "Implementation Plan"
    ],
    impactGraph: [
      { label: "System Load", before: 85, after: 20, unit: "%" },
      { label: "Revenue Velocity", before: 20, after: 90, unit: "idx" }
    ],
    relatedServices: ["data-analytics", "automation-workflow"],
    href: "/services/strategic-architecture",
    gradient: "from-[#5210F8] to-[#C47DFD]"
  },
  {
    id: "performance-creative",
    title: "Performance Creative",
    tagline: "Assets That Arrest Attention.",
    description: "High-velocity asset production designed to stop the scroll. Psychology-driven visuals that convert attention into revenue.",
    fullDescription: "Creativity without data is art. Creativity with data is a weapon. Our Performance Creative unit produces high-velocity, psychology-driven assets designed specifically to stop the scroll and convert attention into revenue.",
    iconName: "Layout",
    metrics: [
      { label: "CTR_Lift", value: "3.2x" },
      { label: "Creative_Vol", value: "50/wk" },
      { label: "ROAS_Impact", value: "+140%" }
    ],
    features: [
      "Motion Graphics",
      "UGC Production",
      "Static Variations",
      "Hooks & Angles"
    ],
    process: [
      "Briefing & Research",
      "Concept Development",
      "Rapid Production",
      "Testing & Iteration"
    ],
    impactGraph: [
      { label: "Ad Fatigue", before: 80, after: 15, unit: "%" },
      { label: "Engagement Rate", before: 15, after: 85, unit: "idx" }
    ],
    relatedServices: ["conversion-optimization", "brand-protection"],
    href: "/services/performance-creative",
    gradient: "from-[#00FF94] to-[#072C55]"
  },
  {
    id: "search-intelligence",
    title: "Search Intelligence",
    tagline: "Dominating the Digital Shelf.",
    description: "Dominating SERPs with technical SEO and intent-based content strategies. We turn organic traffic into a compounding asset.",
    fullDescription: "We don't chase algorithms; we anticipate them. Our Search Intelligence protocols combine technical SEO, semantic content structuring, and authority building to turn organic traffic into a compounding asset that grows over time.",
    iconName: "Search",
    metrics: [
      { label: "Organic_Traffic", value: "+210%" },
      { label: "Keyword_Rank", value: "Top 3" },
      { label: "Domain_Auth", value: "High" }
    ],
    features: [
      "Technical Audits",
      "Content Strategy",
      "Link Building",
      "Semantic Schema"
    ],
    process: [
      "Keyword Mapping",
      "On-Page Optimization",
      "Content Deployment",
      "Authority Building"
    ],
    impactGraph: [
      { label: "Traffic Cost", before: 70, after: 30, unit: "%" },
      { label: "Organic Reach", before: 10, after: 95, unit: "idx" }
    ],
    relatedServices: ["global-expansion", "performance-creative"],
    href: "/services/search-intelligence",
    gradient: "from-[#C47DFD] to-[#5210F8]"
  },
  {
    id: "data-analytics",
    title: "Data Analytics & BI",
    tagline: "Turning Raw Data Into Weaponized Intelligence.",
    description: "Turning raw data into actionable intelligence. Custom dashboards, attribution modeling, and predictive analytics.",
    fullDescription: "Data is useless without interpretation. We build custom dashboards, implement advanced attribution modeling, and deploy predictive analytics to give you a real-time view of your business health and future performance.",
    iconName: "BarChart3",
    metrics: [
      { label: "Data_Clarity", value: "100%" },
      { label: "Decision_Speed", value: "Real-Time" },
      { label: "Attribution", value: "Multi-Touch" }
    ],
    features: [
      "Custom Dashboards",
      "Attribution Modeling",
      "Predictive Analytics",
      "Data Warehousing"
    ],
    process: [
      "Data Source Audit",
      "Pileline Engineering",
      "Visualization",
      "Insight Generation"
    ],
    impactGraph: [
      { label: "Integration", before: 20, after: 98, unit: "%" },
      { label: "Insight Depth", before: 15, after: 90, unit: "idx" }
    ],
    relatedServices: ["strategic-architecture", "automation-workflow"],
    href: "/services/data-analytics",
    gradient: "from-[#072C55] to-[#00FF94]"
  },
  {
    id: "conversion-optimization",
    title: "Conversion Optimization",
    tagline: "Turning Traffic into Revenue.",
    description: "Iterative testing protocols to maximize yield. CRO, A/B testing, and user journey refinement.",
    fullDescription: "Traffic is expensive. We make sure you don't waste it. Through rigorous A/B testing, user journey mapping, and friction reduction, we systematically increase your yield per visitor.",
    iconName: "Zap",
    metrics: [
      { label: "Conv_Rate", value: "+85%" },
      { label: "AOV_Lift", value: "+30%" },
      { label: "Bounce_Rate", value: "-40%" }
    ],
    features: [
      "A/B Testing",
      "User Research",
      "Heatmapping",
      "Funnel Analysis"
    ],
    process: [
      "Heuristic Analysis",
      "Hypothesis Creation",
      "Test Deployment",
      "Result Analysis"
    ],
    impactGraph: [
      { label: "Bounce Rate", before: 65, after: 30, unit: "%" },
      { label: "Conversion Yield", before: 20, after: 85, unit: "idx" }
    ],
    relatedServices: ["performance-creative", "data-analytics"],
    href: "/services/conversion-optimization",
    gradient: "from-[#5210F8] to-[#00FF94]"
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    tagline: "Engineering The Backbone of Scale.",
    description: "Robust, scalable web applications built on modern frameworks. From custom platforms to complex integrations.",
    fullDescription: "From custom platforms to complex API integrations, our engineering team builds robust, scalable web applications that power your business logic. We use modern frameworks to ensure speed, security, and longevity.",
    iconName: "Database",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Load_Time", value: "<500ms" },
      { label: "Security", value: "Enterprise" }
    ],
    features: [
      "Custom Web Apps",
      "API Development",
      "Cloud Infrastructure",
      "Database Design"
    ],
    process: [
      "Requirement Spec",
      "Agile Development",
      "QA & Testing",
      "Deployment CI/CD"
    ],
    impactGraph: [
      { label: "Load Time Cost", before: 80, after: 10, unit: "idx" },
      { label: "System Uptime", before: 90, after: 99, unit: "%" }
    ],
    relatedServices: ["strategic-architecture", "automation-workflow"],
    href: "/services/full-stack-development",
    gradient: "from-[#C47DFD] to-[#072C55]"
  },
  {
    id: "automation-workflow",
    title: "Automation & Workflow",
    tagline: "The Silent Engine of Efficiency.",
    description: "Streamlining operations with intelligent automation. CRM integrations, custom scripts, and efficiency protocols.",
    fullDescription: "Efficiency is the ultimate competitive advantage. We automate repetitive tasks, integrate disparate systems, and streamline your operations so your team can focus on high-value strategic work.",
    iconName: "Workflow",
    metrics: [
      { label: "Time_Saved", value: "40hrs/wk" },
      { label: "Error_Rate", value: "0%" },
      { label: "Throughput", value: "10x" }
    ],
    features: [
      "CRM Integration",
      "Zapier/Make",
      "Custom Scripts",
      "Bot Development"
    ],
    process: [
      "Workflow Audit",
      "Tool Selection",
      "Automation Build",
      "Training & Handoff"
    ],
    impactGraph: [
      { label: "Manual Hours", before: 95, after: 5, unit: "%" },
      { label: "Throughput", before: 10, after: 95, unit: "idx" }
    ],
    relatedServices: ["full-stack-development", "data-analytics"],
    href: "/services/automation-workflow",
    gradient: "from-[#00FF94] to-[#C47DFD]"
  },
  {
    id: "brand-protection",
    title: "Brand Protection",
    tagline: "Digital Armor for the Modern Enterprise.",
    description: "Safeguarding your digital assets and reputation. Monitoring, compliance, and proactive defense strategies.",
    fullDescription: "In a digital world, your reputation is everything. We monitor brand mentions, enforce compliance, and implement proactive defense strategies to safeguard your digital assets and corporate integrity.",
    iconName: "ShieldCheck",
    metrics: [
      { label: "Brand_Safety", value: "Max" },
      { label: "Risk_Mitigated", value: "High" },
      { label: "Compliance", value: "100%" }
    ],
    features: [
      "Social Monitoring",
      "Crisis Management",
      "IP Enforcement",
      "Compliance Audits"
    ],
    process: [
      "Audit & Baseline",
      "Monitoring Setup",
      "Incident Response",
      "Ongoing Defense"
    ],
    impactGraph: [
      { label: "Risk Exposure", before: 80, after: 10, unit: "idx" },
      { label: "Sentiment", before: 60, after: 95, unit: "idx" }
    ],
    relatedServices: ["global-expansion", "search-intelligence"],
    href: "/services/brand-protection",
    gradient: "from-[#072C55] to-[#5210F8]"
  },
  {
    id: "global-expansion",
    title: "Global Expansion",
    tagline: "Borderless Commerce, Local Precision.",
    description: "Localization and market entry strategies for international scaling. Navigating cultural and technical nuances.",
    fullDescription: "Going global requires more than just translation. We provide localization strategies, cultural nuance analysis, and technical infrastructure planning to ensure your international expansion is smooth and successful.",
    iconName: "Globe",
    metrics: [
      { label: "Markets_Entered", value: "Global" },
      { label: "Loc_Efficiency", value: "High" },
      { label: "Market_Share", value: "Growing" }
    ],
    features: [
      "Market Research",
      "Localization",
      "Intl. SEO",
      "Regulatory Guide"
    ],
    process: [
      "Market Selection",
      "Strategy Loc",
      "Launch Campaign",
      "Scale & Optimize"
    ],
    impactGraph: [
      { label: "Market Reach", before: 10, after: 90, unit: "idx" },
      { label: "Loc. Error", before: 70, after: 5, unit: "%" }
    ],
    relatedServices: ["brand-protection", "performance-creative"],
    href: "/services/global-expansion",
    gradient: "from-[#5210F8] to-[#072C55]"
  }
];
