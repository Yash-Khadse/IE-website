import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import CTASection from '@/sections/CTASection';

export default function CaseStudyPost({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return (
    <main className="pt-24 bg-background min-h-screen">
      
      {/* Hero Header */}
      <div className="w-full bg-secondary border-b border-border py-20 md:py-32 relative overflow-hidden">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 pointer-events-none" />
           <div className="max-w-[1200px] mx-auto px-6 relative z-10">
               <div className="mb-6 flex items-center gap-2">
                   <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm font-bold tracking-wide">
                        <ArrowLeft size={16} /> BACK_TO_CASES
                   </Link>
                   <span className="text-border">/</span>
                   <span className="text-primary font-mono text-sm uppercase">Nebula Finance</span>
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 max-w-4xl tracking-tighter">
                   Scaling High-Frequency Trading Infrastructure
               </h1>
               <div className="flex flex-wrap gap-4 md:gap-12 border-t border-border pt-8">
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Client</div>
                       <div className="text-xl font-medium text-foreground">Nebula Finance</div>
                   </div>
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Service</div>
                       <div className="text-xl font-medium text-foreground">System Architecture</div>
                   </div>
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Duration</div>
                       <div className="text-xl font-medium text-foreground">6 Months</div>
                   </div>
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Outcome</div>
                       <div className="text-xl font-bold text-green-500">+400% Throughput</div>
                   </div>
               </div>
           </div>
      </div>

      <article className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              
              <div className="md:col-span-8 space-y-12">
                  <section>
                      <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                          Nebula Finance was experiencing severe latency spikes during market open hours. Their existing monolithic architecture could not handle the concurrent write-operations required for real-time order matching, resulting in lost trades and user churn.
                      </p>
                  </section>
                  
                  <section>
                      <h2 className="text-3xl font-bold text-foreground mb-6">The Solution</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          We proposed a complete decoupling of the order matching engine from the user-facing dashboard. By implementing an event-driven microservices architecture on top of Kubernetes, we ensured that the trading core remained isolated from high read-traffic.
                      </p>
                      <ul className="space-y-4">
                          {[
                              "Implemented Redis clustering for sub-millisecond caching",
                              "Migrated to TimescaleDB for high-throughput time-series data",
                              "Developed custom WebSocket edge network for global low-latency"
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                                  <CheckCircle2 className="shrink-0 text-primary mt-1" />
                                  <span className="text-foreground">{item}</span>
                              </li>
                          ))}
                      </ul>
                  </section>

                  <section>
                      <h2 className="text-3xl font-bold text-foreground mb-6">The Results</h2>
                      <div className="grid grid-cols-2 gap-4">
                           <div className="p-6 bg-secondary rounded-2xl text-center">
                               <div className="text-4xl font-bold text-foreground mb-2">99.99%</div>
                               <div className="text-sm font-mono text-muted-foreground uppercase">System Uptime</div>
                           </div>
                           <div className="p-6 bg-secondary rounded-2xl text-center">
                               <div className="text-4xl font-bold text-foreground mb-2">&lt;12ms</div>
                               <div className="text-sm font-mono text-muted-foreground uppercase">Global Latency</div>
                           </div>
                      </div>
                  </section>
              </div>
              
              <div className="md:col-span-4 space-y-8">
                  <div className="sticky top-32">
                      <div className="bg-card border border-border p-6 rounded-2xl">
                          <h3 className="text-lg font-bold text-foreground mb-4">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                              {['Next.js', 'Kubernetes', 'Redis', 'Go', 'TimescaleDB', 'AWS'].map((tech) => (
                                  <span key={tech} className="px-3 py-1 bg-secondary text-xs font-mono rounded-full text-muted-foreground border border-border">
                                      {tech}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </article>

      <CTASection />
    </main>
  );
}
