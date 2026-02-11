export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
  author: string;
  tags: string[];
  coverImage?: string; // Optional for "System Log" style vs "Rich Blog"
}

export const BLOGS: BlogPost[] = [
  {
      id: 1,
      title: "The Latency Trap: Why Your 'Fast' Site is Losing Revenue",
      excerpt: "Analyzing the millisecond-impact on conversion rates and how to optimize TTB (Time to Byte) for high-frequency commerce platforms.",
      date: "2024-03-12",
      category: "PERFORMANCE",
      slug: "latency-trap",
      readTime: "5 min read",
      author: "Alex V.",
      tags: ["Performance", "Vercel", "Optimization"],
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
      id: 2,
      title: "Beyond Frameworks: Building Robust Digital Foundations",
      excerpt: "Why relying solely on Next.js abstractions might be limiting your scalability when campaigns go viral.",
      date: "2024-03-05",
      category: "STRATEGY",
      slug: "beyond-frameworks",
      readTime: "8 min read",
      author: "Sarah K.",
      tags: ["Backend", "Node.js", "Scalability"],
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
      id: 3,
      title: "Visual Hierarchy in Dark Mode Interfaces",
      excerpt: "Designing for low-light environments without sacrificing contrast or legibility. A case study on our latest dashboard UI.",
      date: "2024-02-28",
      category: "BRAND_IDENTITY",
      slug: "dark-mode-hierarchy",
      readTime: "6 min read",
      author: "Marcus D.",
      tags: ["UI/UX", "Dark Mode", "Accessibility"],
      coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80"
  },
  {
      id: 4,
      title: "AI-Driven UX: The Future of Adaptive Interfaces",
      excerpt: "Using real-time telemetry to adjust UI layouts based on user behavior patterns and predictive intent modeling.",
      date: "2024-02-15",
      category: "AI_INSIGHTS",
      slug: "ai-driven-ux",
      readTime: "7 min read",
      author: "Elena R.",
      tags: ["AI", "UX", "Adaptive"],
      coverImage: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80"
  },
  {
      id: 5,
      title: "Edge Computing Patterns for Global Campaigns",
      excerpt: "Implementing customization and smart delivery using middleware and edge compute.",
      date: "2024-02-01",
      category: "TECHNOLOGY",
      slug: "edge-functions-saas",
      readTime: "10 min read",
      author: "Alex V.",
      tags: ["Edge", "SaaS", "Middleware"],
      coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
      id: 6,
      title: "The ROI of Design Systems",
      excerpt: "Quantifying the efficiency gains of a centralized design language in enterprise software development cycles.",
      date: "2024-01-20",
      category: "STRATEGY",
      slug: "roi-design-systems",
      readTime: "6 min read",
      author: "Jessica L.",
      tags: ["Design Systems", "Business", "Efficiency"],
      coverImage: "https://images.unsplash.com/photo-1509395062549-0f44e22805aa?w=800&q=80"
  }
];
