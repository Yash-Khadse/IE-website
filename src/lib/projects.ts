
import { BarChart3, Database, Layers, Radio, Terminal, Cpu, Search, Activity, Zap, Globe, ShieldCheck, Workflow } from 'lucide-react';

export interface ProjectData {
  id: string;
  href: string;
  title: string;
  category: string;
  role: string[];
  summary: string;
  
  // 1. Hero
  headline: string; // "Scaled ROAS by 3.2x..."
  tags: string[];

  // 2. Client Overview
  clientOverview: {
    about: string;
    industry: string;
    companySize: string;
    headquarters: string;
  };

  // 3. Challenge
  challenge: {
    description: string;
    constraints: string[]; // "Budget constraints", "Legacy tech"
    prevState: string;
  };

  // 4. Goals & Metrics
  goals: string[];

  // 5. Strategy
  strategy: {
    title: string;
    description: string;
  }[];

  // 6. Execution
  executionPhases: {
    phase: string;
    title: string;
    description: string;
  }[];

  // 7. Tech Stack (existing but maybe expand)
  techStack: string[];
  
  // 8. Results (existing but map to visual counters)
  results: { label: string; value: string; suffix?: string; prefix?: string, description?: string }[];
  
  // 9. Takeaways
  keyTakeaways: string[];

  // 10. Testimonial
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  heroImage: string;
  galleryImages: string[];
  color: string;
  year: string;
  nextProject: string;
  relatedServices: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'compqsoft',
    href: '/work/compqsoft',
    title: 'CompQsoft',
    category: 'Government // IT Services',
    role: ['Strategic Branding', 'UI/UX Design', 'Enterprise Development'],
    summary: 'Strategic Digital Transformation for Federal Enterprise.',
    headline: 'Modernizing Federal IT Infrastructure',
    tags: ['GovTech', 'Compliance', 'Enterprise'],
    
    clientOverview: {
      about: 'A premier government contractor providing high-level IT solutions to federal agencies.',
      industry: 'Defense & Aerospace',
      companySize: '500+ Employees',
      headquarters: 'Houston, TX'
    },
    
    challenge: {
      description: 'Communicating complex technical capabilities to federal agencies while maintaining strict compliance.',
      constraints: ['Strict FEDRAMP compliance', 'Legacy system integration', 'Zero-downtime requirement'],
      prevState: 'Outdated, non-responsive site with poor accessibility scores.'
    },

    goals: [
      'Achieve 100% Section 508 Compliance',
      'Reduce page load time by 50%',
      'Increase government contract inquiries'
    ],

    strategy: [
      { title: 'Trust-First Architecture', description: 'Prioritizing security signals and compliance certifications in the UX.' },
      { title: 'Modular Design System', description: 'Creating a repeatable component library for rapid federal deployment.' }
    ],

    executionPhases: [
      { phase: '01', title: 'Audit & Discovery', description: 'Comprehensive analysis of existing assets and compliance gaps.' },
      { phase: '02', title: 'Architecture', description: 'Developing a secure, headless CMS structure.' },
      { phase: '03', title: 'Deployment', description: 'Rolling out the new platform with zero downtime.' }
    ],

    results: [
        { label: 'Contract Sensitivity', value: '100', suffix: '%', description: 'Compliance adherence' },
        { label: 'Load Speed', value: '0.8', suffix: 's', description: 'Global access performance' },
        { label: 'Trust Score', value: '98', suffix: '/100', description: 'Stakeholder confidence' }
    ],
    techStack: ['Next.js', 'AWS GovCloud', 'Tailwind', 'Typescript'],
    heroImage: 'https://res.cloudinary.com/dr32w1unf/image/upload/v1770920757/Screenshot_2026-02-12_235515_kqi3xt.png',
    galleryImages: [
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923489/Screenshot_2026-02-13_004021_rausyd.png',
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923487/Screenshot_2026-02-13_004059_m6wfqg.png'
    ],
    color: '#072C55',
    year: '2024',
    nextProject: 'compqsoft-digital',
    relatedServices: ['branding-systems', 'website-uiux-engineering'],
    
    keyTakeaways: [
      'Compliance can drive design excellence, not hinder it.',
      'Speed is a critical trust factor for government entities.'
    ],
    testimonial: {
      quote: "InvisiEdge transformed our digital presence into a strategic asset that actually wins contracts.",
      author: "John Doe",
      role: "CTO, CompQsoft"
    }
  },
  {
    id: 'compqsoft-digital',
    href: '/work/compqsoft-digital',
    title: 'CompQsoft Digital',
    category: 'Corporate // Innovation',
    role: ['Brand Strategy', 'Digital Experience', 'Content Engine'],
    summary: 'Modernizing Corporate Identity for a Digital-First Era.',
    headline: 'Bridging Technical Prowess with Commercial Appeal',
    tags: ['B2B', 'SaaS', 'Digital Transformation'],

    clientOverview: {
      about: 'The commercial innovation arm of a major government contractor.',
      industry: 'Enterprise Software',
      companySize: '200+ Employees',
      headquarters: 'Austin, TX'
    },

    challenge: {
        description: 'Creating a distinct commercial identity that still honors the parent brand\'s heritage.',
        constraints: ['Short timeline', 'Need for distinct market positioning'],
        prevState: 'Brand confusion between parent and commercial entities.'
    },

    goals: [
        'Establish reliable commercial brand identity',
        'Increase B2B lead generation by 200%',
        'Launch new digital product suite'
    ],

    strategy: [
        { title: 'Digital Twin Identity', description: 'A mirrored brand system that feels familiar but faster.' },
        { title: 'Inbound Content Engine', description: 'Automating thought leadership distribution.' }
    ],

    executionPhases: [
        { phase: '01', title: 'Brand Strategy', description: 'Defining the commercial value proposition.' },
        { phase: '02', title: 'Visual Identity', description: 'Designing the "Digital Twin" system.' },
        { phase: '03', title: 'Go-to-Market', description: 'Launching the new brand across all channels.' }
    ],

    results: [
        { label: 'Lead Gen', value: '240', suffix: '%', description: 'Increase in B2B inquiries' },
        { label: 'Engagement', value: '4.5', suffix: 'm', description: 'Average session duration' },
        { label: 'Brand Lift', value: '35', suffix: '%', description: 'Market perception score' }
    ],
    techStack: ['React', 'Framer Motion', 'Sanity CMS', 'Node.js'],
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    galleryImages: [
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    ],
    color: '#5210F8',
    year: '2024',
    nextProject: 'makaan-investment-group',
    relatedServices: ['social-content-engines', 'seo-digital-visibility'],

    keyTakeaways: [
        'B2B buyers expect B2C-level experiences.',
        'Content velocity is key to commercial growth.'
    ],
    testimonial: {
        quote: "The new identity perfectly captures our innovative spirit while respecting our roots.",
        author: "Jane Smith",
        role: "CMO, CompQsoft Digital"
    }
  },
  {
    id: 'makaan-investment-group',
    href: '/work/makaan-investment-group',
    title: 'Makaan Group',
    category: 'Finance // Investment',
    role: ['Web Operations', 'Secure Portal', 'Investor Relations'],
    summary: 'High-Stakes Investment Portal for Global Investors.',
    headline: 'Simplifying Cross-Border Investment Flows',
    tags: ['Fintech', 'EB-5', 'Investment'],

    clientOverview: {
        about: 'A global investment group facilitating EB-5 visa investments.',
        industry: 'Financial Services',
        companySize: 'Global Operations',
        headquarters: 'Dubai / New York'
    },

    challenge: {
        description: 'Migrating high-net-worth investors through complex visa processes requiring absolute trust.',
        constraints: ['High security requirements', 'Multi-language support'],
        prevState: 'Manual, paper-heavy processes causing delays.'
    },

    goals: [
        'Digitize the entire investment application process',
        'Ensure bank-grade security for documents',
        'Reduce processing time by 40%'
    ],

    strategy: [
        { title: 'Transparency-First UI', description: 'Visualizing complex legal steps as simple milestones.' },
        { title: 'Bank-Grade Infrastructure', description: 'Deploying encrypted document vaults.' }
    ],

    executionPhases: [
        { phase: '01', title: 'Security Audit', description: 'Designing the secure data architecture.' },
        { phase: '02', title: 'Portal Development', description: 'Building the investor dashboard.' },
        { phase: '03', title: 'Global Rollout', description: 'Launching in key international markets.' }
    ],

    results: [
        { label: 'Capital Raised', value: '50', suffix: 'M+', description: 'Through new digital funnel' },
        { label: 'User Retention', value: '88', suffix: '%', description: 'Portal return rate' },
        { label: 'Security', value: '100', suffix: '%', description: 'Zero breaches' }
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Stripe API', 'D3.js'],
    heroImage: 'https://res.cloudinary.com/dr32w1unf/image/upload/v1770922052/Screenshot_2026-02-13_001704_wqs0rq.png',
    galleryImages: [
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923633/Screenshot_2026-02-13_004317_xuo6ru.png',
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923633/Screenshot_2026-02-13_004329_xugegt.png'
    ],
    color: '#C47DFD',
    year: '2025',
    nextProject: 'ns4',
    relatedServices: ['api-integrations', 'crm-funnel-automation'],

     keyTakeaways: [
        'Trust is built through transparency and polished design.',
        'Security features should be visible to the user.'
    ],
    testimonial: {
        quote: "Our investors love the new portal. It's clean, fast, and most importantly, secure.",
        author: "Sarah Jones",
        role: "Director, Makaan Group"
    }
  },
  {
    id: 'ns4',
    href: '/work/ns4',
    title: 'NS4',
    category: 'Technology // Security',
    role: ['Identity System', 'Marketing Collateral', 'Web Design'],
    summary: 'Next-Gen Network Security Infrastructure.',
    headline: 'Visualizing the Invisible Layer of Protection',
    tags: ['Cybersecurity', 'SaaS', 'Branding'],

    clientOverview: {
        about: 'A cutting-edge network security firm protecting enterprise infrastructure.',
        industry: 'Cybersecurity',
        companySize: 'Startup (Series A)',
        headquarters: 'San Francisco, CA'
    },

    challenge: {
        description: 'Cybersecurity products often feel abstract and technical. Need to make the invisible tangible.',
        constraints: ['Complex technical concepts', 'Highly competitive market'],
        prevState: 'Generic, fear-based marketing imagery.'
    },

    goals: [
        'Create a distinct visual language for "Invisible Security"',
        'Increase demo requests from C-level execs',
        'Position as a premium enterprise solution'
    ],

    strategy: [
        { title: 'Active Shielding Aesthetics', description: 'Using generative mesh patterns to visualize protection.' },
        { title: 'Outcome-Focused Messaging', description: 'Shifting from features to business continuity.' }
    ],

    executionPhases: [
        { phase: '01', title: 'Concept Art', description: 'Developing the "Active Shield" visual language.' },
        { phase: '02', title: 'Web Experience', description: 'Building the immersive 3D website.' },
        { phase: '03', title: 'Asset Production', description: 'Creating sales enablement collateral.' }
    ],

    results: [
        { label: 'Demo Requests', value: '3', suffix: 'x', description: 'Increase post-launch' },
        { label: 'Site Speed', value: '99', suffix: '/100', description: 'Google Lighthouse score' },
        { label: 'Recall', value: '72', suffix: '%', description: 'Brand memorability' }
    ],
    techStack: ['WebGL', 'Three.js', 'React', 'Cloudflare'],
    heroImage: 'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923123/Screenshot_2026-02-13_003459_r3ihps.png',
    galleryImages: [
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923767/Screenshot_2026-02-13_004532_x5ykvj.png',
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923021/Screenshot_2026-02-13_003317_ldecfq.png'
    ],
    color: '#072C55',
    year: '2023',
    nextProject: 'madina-shaik',
    relatedServices: ['branding-systems', 'website-uiux-engineering'],

     keyTakeaways: [
        'Abstract concepts need concrete metaphors.',
        'Performance is a key part of the brand message in security.'
    ],
    testimonial: {
        quote: "Finally, our brand looks as advanced as our technology.",
        author: "David Chen",
        role: "CEO, NS4"
    }
  },
  {
    id: 'sustainable-plastic',
    href: '/work/sustainable-plastic',
    title: 'Sustainable Plastic',
    category: 'Eco // Manufacturing',
    role: ['Brand Narrative', 'Eco-Packaging Design', 'Web Experience'],
    summary: 'Redefining Sustainability in Material Science.',
    headline: 'Making the Circular Economy Visually Compelling',
    tags: ['Sustainability', 'Manufacturing', 'B2B'],

    clientOverview: {
        about: 'A pioneer in biodegradable plastic alternatives for industrial use.',
        industry: 'Manufacturing',
        companySize: 'Mid-Market',
        headquarters: 'Seattle, WA'
    },

    challenge: {
        description: 'Proving that their material was truly circular and eco-friendly without greenwashing.',
        constraints: ['Skeptical market', 'Complex scientific data'],
        prevState: 'Dry, technical datasheets that failed to inspire.'
    },

    goals: [
        'Visualize the full lifecycle of the material',
        'Secure pilots with major retail partners',
        'Educate the market on true sustainability'
    ],

    strategy: [
        { title: 'Radical Transparency', description: 'Visualizing every step of the supply chain.' },
        { title: 'Data Storytelling', description: 'Turning metrics into compelling narratives.' }
    ],

    executionPhases: [
        { phase: '01', title: 'Data Visualization', description: 'Mapping the material lifecycle.' },
        { phase: '02', title: 'Brand Identity', description: 'Creating a clean, eco-modern aesthetic.' },
        { phase: '03', title: 'Digital Experience', description: 'Building the interactive education hub.' }
    ],

    results: [
        { label: 'Partnerships', value: '12', suffix: '+', description: 'Major retail pilots' },
        { label: 'Trust', value: '94', suffix: '%', description: 'Consumer confidence' },
        { label: 'Traffic', value: '40', suffix: 'k', description: 'Monthly organic visitors' }
    ],
    techStack: ['Next.js', 'D3.js', 'GreenSock', 'Shopify'],
    heroImage: 'https://res.cloudinary.com/dr32w1unf/image/upload/v1770922565/Screenshot_2026-02-13_002539_bczfey.png',
    galleryImages: [
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923974/Screenshot_2026-02-13_004747_rawkdg.png',
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923917/Screenshot_2026-02-13_004808_eoigms.png'
    ],
    color: '#00FF94',
    year: '2024',
    nextProject: 'compqsoft',
    relatedServices: ['branding-systems', 'event-expo-branding'],

     keyTakeaways: [
        'Transparency is the new green.',
        'Data can be beautiful and emotional.'
    ],
    testimonial: {
        quote: "We finally have a way to explain our technology that gets people excited.",
        author: "Green Tech CEO",
        role: "CEO"
    }
  },
  {
    id: 'madina-shaik',
    href: '/work/madina-shaik',
    title: 'Madina Shaik',
    category: 'Personal Brand // Leadership',
    role: ['Personal Branding', 'Social Strategy', 'Digital Presence'],
    summary: 'Elevating Thought Leadership in the Digital Space.',
    headline: 'A Digital Home for Visionary Leadership',
    tags: ['Personal Brand', 'Coaching', 'Impact'],

    clientOverview: {
        about: 'A renowned leadership coach and speaker empowering executives.',
        industry: 'Professional Services',
        companySize: 'Individual Brand',
        headquarters: 'Global / Remote'
    },

    challenge: {
        description: 'Standing out as a thought leader in a saturated market requires authenticity.',
        constraints: ['Need for high personal connection', 'Content-heavy requirements'],
        prevState: 'Fragmented social presence with no central hub.'
    },

    goals: [
        'Consolidate content into a central thought leadership hub',
        'Increase speaking engagement bookings',
        'Build a owned audience email list'
    ],

    strategy: [
        { title: 'Editorial Aesthetics', description: 'Treating the website like a high-end magazine.' },
        { title: 'Content-First Architecture', description: 'Prioritizing articles and videos in the UX.' }
    ],

    executionPhases: [
        { phase: '01', title: 'Brand Storytelling', description: 'Refining the personal narrative.' },
        { phase: '02', title: 'Site Design', description: 'Creating the editorial web experience.' },
        { phase: '03', title: 'Growth Engine', description: 'Setting up the newsletter and social funnels.' }
    ],

    results: [
        { label: 'Follower Growth', value: '150', suffix: '%', description: 'Cross-platform' },
        { label: 'Engagement', value: '12', suffix: '%', description: 'Average rate' },
        { label: 'Bookings', value: '5', suffix: 'x', description: 'Speaking inquiries' }
    ],
    techStack: ['Next.js', 'Tailwind', 'ConvertKit', 'Vercel'],
    heroImage: 'https://res.cloudinary.com/dr32w1unf/image/upload/v1770922638/Screenshot_2026-02-13_002650_fn6bqe.png',
    galleryImages: [
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923980/Screenshot_2026-02-13_004854_jvjzzv.png',
        'https://res.cloudinary.com/dr32w1unf/image/upload/v1770923979/Screenshot_2026-02-13_004915_b0ojwo.png'
    ],
    color: '#5210F8',
    year: '2025',
    nextProject: 'sustainable-plastic',
    relatedServices: ['social-content-engines', 'branding-systems'],

     keyTakeaways: [
        'Personal brands must feel personal, yet professional.',
        'Content discoverability is the main diverse of engagement.'
    ],
    testimonial: {
        quote: "This website truly reflects who I am and the impact I want to make.",
        author: "Madina Shaik",
        role: "Founder"
    }
  }
];
