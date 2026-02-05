import Link from 'next/link';
import { ArrowRight, BarChart3, Clock, TrendingUp } from 'lucide-react';
import CTASection from '@/sections/CTASection';

export const metadata = {
  title: 'Case Studies | InvisiEdge',
  description: 'Deep dives into how we solved complex infrastructure challenges.',
};

const cases = [
    {
        id: 1,
        client: "Nebula Finance",
        title: "Scaling Fintech Infrastructure to 10k TPS",
        desc: "Optimizing database sharding and caching layers to handle high-frequency trading loads during market volatility.",
        impact: "+400% Throughput",
        metric: "99.99% Uptime",
        slug: "nebula-finance"
    },
    {
        id: 2,
        client: "Vortex Logistics",
        title: "Real-time Fleet Telemetry Dashboard",
        desc: "Building a WebSocket-driven visualization engine for tracking global asset movement with sub-second latency.",
        impact: "-150ms Latency",
        metric: "Real-time Sync",
        slug: "vortex-logistics"
    },
    {
        id: 3,
        client: "Aether Health",
        title: "HIPAA-Compliant Patient Data Pipeline",
        desc: "Architecting a secure, encrypted data lake for medical records with zero-trust security implementation.",
        impact: "Zero Breaches",
        metric: "ISO 27001",
        slug: "aether-health"
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="pt-20 bg-background min-h-screen">
             <div className="py-24 md:py-32 text-center relative overflow-hidden border-b border-border">
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
                 <div className="max-w-4xl mx-auto px-6 relative z-10">
                     <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                         MISSION <span className="text-primary">REPORTS</span>
                     </h1>
                     <p className="text-xl text-muted-foreground">
                         Detailed analysis of our most challenging deployments.
                     </p>
                 </div>
            </div>

            <section className="py-20 px-6 max-w-[1400px] mx-auto">
                <div className="flex flex-col gap-20">
                    {cases.map((study, i) => (
                        <div key={study.id} className="flex flex-col lg:flex-row gap-12 items-center group">
                            <div className={`lg:w-1/2 w-full h-[400px] bg-secondary rounded-3xl border border-border relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-mono text-6xl text-primary/20 font-bold tracking-tighter">CASE_{study.id}</span>
                                </div>
                            </div>
                            
                            <div className="lg:w-1/2 w-full flex flex-col gap-6">
                                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Client: {study.client}</span>
                                <h2 className="text-4xl text-foreground font-bold leading-tight group-hover:text-primary transition-colors">{study.title}</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">{study.desc}</p>
                                
                                <div className="grid grid-cols-2 gap-6 my-6">
                                    <div className="p-4 bg-card border border-border rounded-xl">
                                        <TrendingUp className="text-primary mb-2" size={20} />
                                        <div className="text-2xl font-bold text-foreground">{study.impact}</div>
                                        <div className="text-xs text-muted-foreground font-mono uppercase">Performance Delta</div>
                                    </div>
                                    <div className="p-4 bg-card border border-border rounded-xl">
                                        <Clock className="text-primary mb-2" size={20} />
                                        <div className="text-2xl font-bold text-foreground">{study.metric}</div>
                                        <div className="text-xs text-muted-foreground font-mono uppercase">Key Metric</div>
                                    </div>
                                </div>

                                <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 text-foreground font-bold hover:translate-x-2 transition-transform cursor-pointer">
                                    ACCESS_FILE <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </main>
    );
}
