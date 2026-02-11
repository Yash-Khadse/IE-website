
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
  painPoints?: string[]; // Adding standard structure for pain points (Problem Statement)
  techStack?: string[]; // Tools & Tech Stack
  deliverables?: string[]; // What's Included
  faqs?: { question: string; answer: string }[]; // FAQs
  isComingSoon?: boolean; // New prop for upcoming services
  caseStudy?: { // Results & Case Studies
    title: string;
    metrics: string[];
  };
}

export const SERVICES: ServiceData[] = [
  {
    id: "branding-systems",
    title: "Branding Systems",
    tagline: "Identity That Resonates.",
    description: "Building cohesive, memorable brand identities that stand out in crowded markets. We craft systems, not just logos.",
    fullDescription: "A brand is more than a logo; it's a complete system of visual and verbal communication. We architect scalable branding systems that ensure consistency across every touchpoint, building trust and recognition at scale.",
    iconName: "Layers",
    metrics: [
      { label: "Brand_Recall", value: "+85%" },
      { label: "Consistency", value: "100%" },
      { label: "Equity_Growth", value: "High" }
    ],
    features: [
      "Visual Identity",
      "Brand Guidelines",
      "Tone of Voice",
      "Asset Libraries"
    ],
    painPoints: [
      "Inconsistent visual identity across channels",
      "Low brand recall among target audience",
      "Outdated or misaligned brand messaging"
    ],
    deliverables: [
      "Logo Suite & Variations",
      "Comprehensive Brand Guidelines",
      "Typography & Color System",
      "Social Media Templates",
      "Stationery Design"
    ],
    techStack: ["Adobe Illustrator", "Sketch", "Figma", "Cinema 4D"],
    process: [
      "Discovery Workshop",
      "Concept Design",
      "System Architecture",
      "Guideline Delivery"
    ],
    impactGraph: [
      { label: "Market Confusion", before: 75, after: 10, unit: "%" },
      { label: "Brand Value", before: 20, after: 90, unit: "idx" }
    ],
    relatedServices: ["website-uiux-engineering", "event-expo-branding"],
    href: "/services/branding-systems",
    gradient: "from-[#5210F8] to-[#C47DFD]",
    
  },
  {
    id: "website-uiux-engineering",
    title: "Website & UI/UX Engineering",
    tagline: "Digital Experiences That Convert.",
    description: "High-performance websites and applications engineered for conversion and speed. Where aesthetics meet robust functionality.",
    fullDescription: "Your website is your digital HQ. We engineer high-performance, visually stunning web experiences that are optimized for user engagement and conversion. Built on modern stacks for speed, security, and scalability.",
    iconName: "Monitor",
    metrics: [
      { label: "Load_Time", value: "<1s" },
      { label: "Conv_Rate", value: "+120%" },
      { label: "Engagement", value: "High" }
    ],
    painPoints: [
      "High bounce rates due to poor UX",
      "Slow loading times affecting SEO and revenue",
      "Non-responsive designs alienating mobile users"
    ],
    deliverables: [
      "Custom UI/UX Design",
      "Performance Optimization",
      "Responsive Layouts",
      "SEO-Ready Structure",
      "CMS Integration"
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "Custom UI/UX Design",
      "Next.js Development",
      "Interactive Motion",
      "Mobile Optimization"
    ],
    process: [
      "UX Wireframing",
      "UI Design System",
      "Full-Stack Dev",
      "Performance Tuning"
    ],
    impactGraph: [
      { label: "Bounce Rate", before: 60, after: 20, unit: "%" },
      { label: "User Session", before: 30, after: 85, unit: "sec" }
    ],
    relatedServices: ["seo-digital-visibility", "branding-systems"],
    href: "/services/website-uiux-engineering",
    gradient: "from-[#5210F8] to-[#072C55]"
  },
  {
    id: "seo-digital-visibility",
    title: "SEO & Digital Visibility",
    tagline: "Dominating the Search Landscape.",
    description: "Data-driven SEO strategies that capture high-intent traffic. We turn search engines into your primary growth channel.",
    fullDescription: "Visibility is the currency of the digital age. Our comprehensive SEO strategies combine technical optimization, semantic content clusters, and authority building to ensure you dominate the search results for the keywords that matter.",
    iconName: "Search",
    metrics: [
      { label: "Traffic_Lift", value: "+250%" },
      { label: "Rankings", value: "Top 3" },
      { label: "ROI", value: "10x" }
    ],
    painPoints: [
      "Invisible on Google for key terms",
      "Low organic traffic volume",
      "Dependent on paid ads for leads"
    ],
    deliverables: [
      "Technical SEO Audit",
      "Keyword Strategy & Mapping",
      "On-Page Optimization",
      "Content Strategy & Creation",
      "Backlink Profile Management"
    ],
    techStack: ["SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog"],
    features: [
      "Technical SEO",
      "Content Strategy",
      "Authority Link Building",
      "Local Domination"
    ],
    process: [
      "Audit & Benchmark",
      "Keyword Strategy",
      "On-Page Opt",
      "Off-Page Scale"
    ],
    impactGraph: [
      { label: "Organic Cost", before: 80, after: 20, unit: "idx" },
      { label: "Traffic Vol", before: 15, after: 95, unit: "k/mo" }
    ],
    relatedServices: ["website-uiux-engineering", "social-content-engines"],
    href: "/services/seo-digital-visibility",
    gradient: "from-[#C47DFD] to-[#5210F8]"
  },
  {
    id: "social-content-engines",
    title: "Social Media & Content Engines",
    tagline: "Fueling Your Brand Narrative.",
    description: "Consistent, high-quality content production and social distribution. We build engines that keep your audience engaged.",
    fullDescription: "Content is king, but distribution is queen. We build robust content engines that produce high-quality, relevant content at scale, distributed across key social channels to build community, trust, and brand loyalty.",
    iconName: "Activity",
    metrics: [
      { label: "Engagement", value: "+300%" },
      { label: "Reach", value: "Millions" },
      { label: "Followers", value: "Growth" }
    ],
    painPoints: [
      "Inconsistent posting schedule",
      "Low engagement on social platforms",
      "Lack of cohesive content strategy"
    ],
    deliverables: [
      "Social Media Strategy",
      "Content Calendar",
      "Video & Graphic Production",
      "Community Management",
      "Monthly Analytics Reports"
    ],
    techStack: ["Sprout Social", "Canva", "Adobe Premiere", "Buffer"],
    features: [
      "Content Strategy",
      "Video Production",
      "Community Mgmt",
      "Viral Campaigns"
    ],
    process: [
      "Trend Analysis",
      "Content Calendar",
      "Production Sprint",
      "Distribution & Engage"
    ],
    impactGraph: [
      { label: "Brand Noise", before: 10, after: 90, unit: "dB" },
      { label: "Content Cost", before: 80, after: 40, unit: "idx" }
    ],
    relatedServices: ["ai-video-production", "seo-digital-visibility"],
    href: "/services/social-content-engines",
    gradient: "from-[#072C55] to-[#C47DFD]"
  },
  {
    id: "crm-funnel-automation",
    title: "CRM & Funnel Automation (GHL)",
    tagline: "Automating the Path to Revenue.",
    description: "High-converting funnels and automated CRM workflows. We build systems that nurture leads and close deals while you sleep.",
    fullDescription: "Stop leaking leads. We architect advanced sales funnels and fully automated CRM workflows (specializing in GoHighLevel) that capture, nurture, and convert leads into paying customers with minimal manual intervention.",
    iconName: "Workflow",
    metrics: [
      { label: "Lead_Conv", value: "+40%" },
      { label: "Time_Saved", value: "20hrs/wk" },
      { label: "Revenue", value: "Auto" }
    ],
    painPoints: [
      "Manual lead follow-up is slow and inconsistent",
      "Lost leads due to lack of nurturing",
      "Disorganized customer data"
    ],
    deliverables: [
      "GoHighLevel Account Setup",
      "Custom Funnel Design",
      "Automated Email/SMS Sequences",
      "Lead Scoring Logic",
      "Integrations (Zapier/Make)"
    ],
    techStack: ["GoHighLevel", "Zapier", "Make", "Stripe"],
    features: [
      "GHL Setup",
      "Funnel Architecture",
      "Email/SMS Automation",
      "Lead Scoring"
    ],
    process: [
      "Process Mapping",
      "Tech Integration",
      "Workflow Build",
      "Testing & Launch"
    ],
    impactGraph: [
      { label: "Lead Leakage", before: 60, after: 5, unit: "%" },
      { label: "Auto Sales", before: 5, after: 50, unit: "%" }
    ],
    relatedServices: ["gtm-sales-enablement", "website-uiux-engineering"],
    href: "/services/crm-funnel-automation",
    gradient: "from-[#5210F8] to-[#C47DFD]"
  },
  {
    id: "ai-video-production",
    title: "AI Video & Content Production",
    tagline: "The Future of Content Creation.",
    description: "Leveraging cutting-edge AI to produce studio-quality video and content at unprecedented speed and scale.",
    fullDescription: "Harness the power of Artificial Intelligence to revolutionize your content supply chain. We use advanced AI models to generate, edit, and optimize video and written content, significantly reducing costs and turnaround times.",
    iconName: "Cpu",
    metrics: [
      { label: "Speed", value: "10x" },
      { label: "Cost", value: "-70%" },
      { label: "Volume", value: "Unlim" }
    ],
    painPoints: [
      "Video production is too expensive and slow",
      "Inability to scale content output",
      "Reliance on large production teams"
    ],
    deliverables: [
      "AI-Generated Video Assets",
      "Voiceover Synthesis",
      "Script Generation",
      "Automated Editing Workflows",
      "Multi-Format Content Adaptation"
    ],
    techStack: ["Midjourney", "Runway Gen-2", "ElevenLabs", "ChatGPT"],
    features: [
      "AI Avatars",
      "Voice Synthesis",
      "Generative Video",
      "Script Automation"
    ],
    process: [
      "Asset Training",
      "Prompt Engineering",
      "Generative Phase",
      "Human Polish"
    ],
    impactGraph: [
      { label: "Production Time", before: 90, after: 10, unit: "hrs" },
      { label: "Output Vol", before: 10, after: 95, unit: "idx" }
    ],
    relatedServices: ["social-content-engines", "branding-systems"],
    href: "/services/ai-video-production",
    gradient: "from-[#C47DFD] to-[#072C55]"
  },
  {
    id: "event-expo-branding",
    title: "Event & Expo Branding",
    tagline: "Unforgettable Physical Presence.",
    description: "Immersive branding experiences for events and expos. Booth design, collateral, and experiential marketing that draws crowds.",
    fullDescription: "Make your mark in the physical world. We design immersive event experiences and high-impact expo booths that capture attention on the trade show floor. From large-format graphics to interactive digital displays.",
    iconName: "Globe",
    metrics: [
      { label: "Foot_Traffic", value: "High" },
      { label: "Brand_Impact", value: "Max" },
      { label: "Recall", value: "Top" }
    ],
    painPoints: [
      "Generic booth designs that blend in",
      "Low attendee engagement",
      "Unclear brand messaging at events"
    ],
    deliverables: [
      "Custom Booth Design",
      "Large Format Graphics",
      "Digital Interactive Displays",
      "Promotional Merchandise",
      "Event Collateral"
    ],
    techStack: ["Adobe Creative Suite", "SketchUp", "TouchDesigner"],
    features: [
      "Booth Design",
      "Large Format Print",
      "Digital Signage",
      "Swag & Merch"
    ],
    process: [
      "Space Planning",
      "Concept Visuals",
      "Production Mgmt",
      "On-Site Install"
    ],
    impactGraph: [
      { label: "Attendee Inbound", before: 20, after: 80, unit: "ppl" },
      { label: "Visual Noise", before: 40, after: 90, unit: "dB" }
    ],
    relatedServices: ["branding-systems", "social-content-engines"],
    href: "/services/event-expo-branding",
    gradient: "from-[#072C55] to-[#C47DFD]"
  },
  {
    id: "gtm-sales-enablement",
    title: "GTM & Sales Enablement",
    tagline: "Accelerating Market Penetration.",
    description: "Comprehensive Go-To-Market strategies and sales assets. Equipping your team to win more deals, faster.",
    fullDescription: "Launching a product or entering a new market? We craft data-backed Go-To-Market strategies and equip your sales team with the collateral, playbooks, and tools they need to shorten sales cycles and close more revenue.",
    iconName: "BarChart3",
    metrics: [
      { label: "Sales_Cycle", value: "-30%" },
      { label: "Win_Rate", value: "+25%" },
      { label: "Revenue", value: "Scale" }
    ],
    painPoints: [
      "Long sales cycles",
      "Sales team lacks effective materials",
      "Unclear value proposition for new markets"
    ],
    deliverables: [
      "Go-To-Market Strategy Playbook",
      "Sales Decks & One-Pagers",
      "Competitor Analysis",
      "Email Outreach Templates",
      "Sales Training Modules"
    ],
    techStack: ["HubSpot", "Salesforce", "LinkedIn Sales Navigator", "Gong"],
    features: [
      "Sales Decks",
      "Battlecards",
      "Launch Strategy",
      "Training Materials"
    ],
    process: [
      "Market Analysis",
      "Asset Creation",
      "Sales Training",
      "Launch Execution"
    ],
    impactGraph: [
      { label: "Time to Rev", before: 80, after: 30, unit: "day" },
      { label: "Deal Velocity", before: 20, after: 75, unit: "idx" }
    ],
    relatedServices: ["crm-funnel-automation", "strategic-architecture"],
    href: "/services/gtm-sales-enablement",
    gradient: "from-[#072C55] to-[#5210F8]"
  }
];
