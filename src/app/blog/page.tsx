import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CTASection from '@/sections/CTASection';

export const metadata = {
  title: 'Blog | InvisiEdge',
  description: 'Insights on digital architecture, performance engineering, and system design.',
};

const blogs = [
    {
        id: 1,
        title: "The Latency Trap: Why Your 'Fast' Site is Losing Revenue",
        excerpt: "Analyzing the millisecond-impact on conversion rates and how to optimize TTB (Time to Byte).",
        date: "2024-03-12",
        category: "PERFORMANCE",
        slug: "latency-trap"
    },
    {
        id: 2,
        title: "Beyond Frameworks: Engineering Robust Backends",
        excerpt: "Why relying solely on Next.js abstractions might be limiting your scalability.",
        date: "2024-03-05",
        category: "ARCHITECTURE",
        slug: "beyond-frameworks"
    },
    {
        id: 3,
        title: "Visual Hierarchy in Dark Mode Interfaces",
        excerpt: "Designing for low-light environments without sacrificing contrast or legibility.",
        date: "2024-02-28",
        category: "DESIGN_SYSTEM",
        slug: "dark-mode-hierarchy"
    },
    {
        id: 4,
        title: "AI-Driven UX: The Future of Adaptive Interfaces",
        excerpt: "Using real-time telemetry to adjust UI layouts based on user behavior patterns.",
        date: "2024-02-15",
        category: "INTELLIGENCE",
        slug: "ai-driven-ux"
    }
];

export default function BlogPage() {
    return (
        <main className="pt-20 bg-background min-h-screen">
            <div className="py-24 md:py-32 text-center relative overflow-hidden border-b border-border">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
                 <div className="max-w-4xl mx-auto px-6 relative z-10">
                     <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                         SYSTEM <span className="text-primary">LOGS</span>
                     </h1>
                     <p className="text-xl text-muted-foreground">
                         Transmission of thoughts on engineering, design, and growth.
                     </p>
                 </div>
            </div>

            <section className="py-20 px-6 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {blogs.map((blog) => (
                        <Link href={`/blog/${blog.slug}`} key={blog.id} className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                             <div className="h-48 bg-secondary border-b border-border flex items-center justify-center relative overflow-hidden">
                                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                 <span className="font-mono text-4xl text-primary/20 font-bold">LOG_0{blog.id}</span>
                             </div>
                             <div className="p-8 flex flex-col flex-1">
                                 <div className="flex justify-between items-center mb-4">
                                     <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">{blog.category}</span>
                                     <span className="text-xs font-mono text-muted-foreground">{blog.date}</span>
                                 </div>
                                 <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{blog.title}</h3>
                                 <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{blog.excerpt}</p>
                                 <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:translate-x-2 transition-transform">
                                     READ_ENTRY <ArrowUpRight size={16} />
                                 </div>
                             </div>
                        </Link>
                    ))}
                </div>
            </section>

            <CTASection />
        </main>
    );
}
