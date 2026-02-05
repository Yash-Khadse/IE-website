import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import CTASection from '@/sections/CTASection';

export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real app, fetch data based on params.slug
  const slug = params.slug;

  return (
    <main className="pt-24 bg-background min-h-screen">
      <article className="max-w-[800px] mx-auto px-6 py-12 md:py-20">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm">
             <ArrowLeft size={16} /> RETURN_TO_LOGS
        </Link>
        
        <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold font-mono tracking-wider border border-primary/20 mb-4">
                SYSTEM_ARCHITECTURE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
                Optimizing Next.js for High-Frequency Data Streams
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground font-mono border-b border-border pb-8">
                <span className="flex items-center gap-2"><Calendar size={14} /> 2024-03-12</span>
                <span className="flex items-center gap-2"><User size={14} /> SYSTEM_ADMIN</span>
                <span className="flex items-center gap-2"><Tag size={14} /> PERFORMANCE</span>
            </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl">
            <p className="lead">
                In the era of real-time data, standard REST patterns often fall short. This log explores the implementation of WebSocket clusters within a serverless Next.js environment.
            </p>
            
            <h3>The Latency Bottleneck</h3>
            <p>
               Traditional request-response cycles introduce unacceptable overhead when dealing with financial tickers or live telemetry. By shifting to a persistent connection model, we reduced TTB (Time to Byte) by 94%.
            </p>

            <div className="my-8 p-6 bg-secondary rounded-xl border-l-4 border-primary">
                <p className="font-mono text-sm text-foreground mb-2 font-bold">// KEY INSIGHT</p>
                <p className="italic m-0">"State management must allow for optimistic UI updates while reconciling the stream in the background."</p>
            </div>

            <h3>Architectural Decisions</h3>
            <p>
                We utilized a custom edge worker logic to route socket connections to the nearest available node, bypassing central cold-start delays. 
            </p>
            
            {/* Placeholder for content expansion */}
            <p>
                [...Content continues with code snippets and diagrams...]
            </p>
        </div>
      </article>
      
      <CTASection />
    </main>
  );
}
