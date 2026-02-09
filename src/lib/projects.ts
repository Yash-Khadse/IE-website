import { BarChart3, Database, Layers, Radio, Terminal, Cpu, Search, Activity, Zap, Globe, ShieldCheck, Workflow } from 'lucide-react';

export interface ProjectData {
  id: string;
  href: string;
  title: string;
  category: string;
  role: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; suffix?: string; prefix?: string, description?: string }[];
  techStack: string[];
  heroImage: string;
  galleryImages: string[];
  color: string;
  year: string;
  nextProject: string;
  relatedServices: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'aether-system',
    href: '/work/aether-system',
    title: 'AetherSystem',
    category: 'Brand // Orchestration',
    role: ['Strategy', 'Visual Identity', 'Web Development'],
    summary: 'Multi-Region Market Entry. Orchestrating a seamless brand launch across 3 continents simultaneously.',
    challenge: 'AetherSystem needed to launch in North America, Europe, and Asia simultaneously while maintaining strict brand consistency and local relevance. The challenge was fragmentation: disparate data sources and disconnected regional teams.',
    solution: 'We deployed a centralized "Brand OS" — a digital design system and content engine that fed localized assets to regional teams in real-time. This ensured 100% brand compliance while allowing for 20% local adaptation.',
    results: [
        { label: 'Sync Efficiency', value: '92', suffix: '%', description: 'Reduction in asset localized time' },
        { label: 'Market Reach', value: '3', suffix: 'Regions', description: 'Simultaneous successful launches' },
        { label: 'Conversion', value: '14', suffix: '%', description: 'Above industry vertical average' }
    ],
    techStack: ['Next.js', 'Sanity CMS', 'Framer Motion', 'Vercel'],
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
    galleryImages: [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
    ],
    color: '#00FF94',
    year: '2025',
    nextProject: 'neural-pulse',
    relatedServices: ['strategic-architecture', 'global-expansion']
  },
  {
    id: 'neural-pulse',
    href: '/work/neural-pulse',
    title: 'NeuralPulse',
    category: 'Logic // Automation',
    role: ['AI Integration', 'Workflow Automation', 'UI/UX Design'],
    summary: 'Autonomous Funnel Scaling. Leveraging predictive AI to automate lead qualification and routing.',
    challenge: 'NeuralPulse was drowning in unqualified leads. Their sales team spent 60% of their time filtering bad data, leading to burnout and missed high-value opportunities.',
    solution: 'We implemented an AI-driven "Logic Gate" system. By analyzing behavioral signals and historical data, the system autonomously scored and routed leads. Only high-intent prospects reached human agents.',
    results: [
        { label: 'Conversion Lift', value: '3.1', suffix: 'x', description: 'Increase in qualified pipeline' },
        { label: 'Time Saved', value: '450', suffix: 'Hrs/Mo', description: 'Reclaimed for strategic selling' },
        { label: 'Accuracy', value: '99.8', suffix: '%', description: 'Routing precision' }
    ],
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js'],
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
    galleryImages: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
    ],
    color: '#5210F8',
    year: '2024',
    nextProject: 'prism-core',
    relatedServices: ['automation-workflow', 'search-intelligence']
  },
  {
    id: 'prism-core',
    href: '/work/prism-core',
    title: 'PrismCore',
    category: 'Identity // System',
    role: ['Rebranding', '3D Motion', 'Design System'],
    summary: 'Global Brand Architecture. Unifying 12 sub-brands under a single, cohesive visual language.',
    challenge: 'After a series of acquisitions, PrismCore became a "Frankenstein" brand. Customer confusion was at an all-time high, and cross-selling was impossible due to lack of brand trust.',
    solution: 'We developed "Prism_OS", a modular identity system. Based on a shared geometric core, each sub-brand received a distinct customized facet, maintaining individuality while ensuring they clearly belonged to the parent ecosystem.',
    results: [
        { label: 'Brand Equity', value: '40', suffix: '%', description: 'Increase in perceived value' },
        { label: 'Cross-Sell', value: '18', suffix: '%', description: 'Uplift in Q1 post-launch' },
        { label: 'Speed', value: '4', suffix: 'x', description: 'Faster campaign deployment' }
    ],
    techStack: ['WebGL', 'Three.js', 'Typescript', 'Figma'],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
    galleryImages: [
        'https://images.unsplash.com/photo-1558655146-d09347e0b7a9?w=800&q=80',
        'https://images.unsplash.com/photo-1550745165-9010d618953d?w=800&q=80'
    ],
    color: '#C47DFD',
    year: '2025',
    nextProject: 'velocity-stream',
    relatedServices: ['brand-protection', 'performance-creative']
  },
  {
    id: 'velocity-stream',
    href: '/work/velocity-stream',
    title: 'VelocityStream',
    category: 'Data // Distribution',
    role: ['Data Engineering', 'Dashboard UI', 'Backend Dev'],
    summary: 'Real-time Lead Routing. Engineering low-latency data pipelines for high-frequency trading firms.',
    challenge: 'Milliseconds mattered. The client\'s existing infrastructure had a 400ms lag in data visualization, causing traders to miss critical market movements.',
    solution: 'We re-architected the entire frontend data layer using WebSockets and a custom binary protocol. We coupled this with a GPU-accelerated rendering engine to handle millions of points per second without stutter.',
    results: [
        { label: 'Latency', value: '84', suffix: '%', description: 'Reduction in data lag' },
        { label: 'Uptime', value: '99.99', suffix: '%', description: 'System reliability' },
        { label: 'Volume', value: '50', suffix: 'M+', description: 'Events processed daily' }
    ],
    techStack: ['Rust', 'WebAssembly', 'React', 'Go'],
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
    galleryImages: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'
    ],
    color: '#072C55',
    year: '2024',
    nextProject: 'aether-system',
    relatedServices: ['data-analytics', 'full-stack-development']
  }
];
