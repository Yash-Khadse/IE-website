"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Share2, Printer, Bookmark } from 'lucide-react';
import Link from 'next/link';
import { blogPostContent } from '@/data/blog/post';

export default function BlogPostContent({ post }: { post: any }) {
  const { sidebar, content } = blogPostContent;
  return (
    <article className="relative bg-background min-h-screen">
      
      {/* 1. Main Grid Layout: Constrained for readability */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 px-6 py-12 md:py-32">
        
        {/* Left Column: Table of Contents & Sticky Meta */}
        <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-32 space-y-12">
                
                {/* TOC */}
                <div>
                   <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-6">{sidebar.tocTitle}</h4>
                   <nav className="space-y-4 border-l border-border pl-4">
                       {sidebar.toc.map((item, i) => (
                           <a key={i} href={`#${item.id}`} className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                               {item.label}
                           </a>
                       ))}
                   </nav>
                </div>
                
                {/* Reading Progress */}
                <div>
                    <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">{sidebar.progressTitle}</h4>
                    <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-primary" />
                    </div>
                    <div className="mt-2 text-xs font-mono text-muted-foreground text-right">33% Complete</div>
                </div>

                {/* Related Tags */}
                <div>
                    <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-widest mb-4">{sidebar.tagsTitle}</h4>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string, i: number) => (
                            <span key={i} className="px-2 py-1 bg-secondary text-xs rounded text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </aside>

        {/* Center Column: The Content */}
        <main className="lg:col-span-8 lg:col-start-4 prose md:prose-lg prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border">
            
            <p className="lead text-lg md:text-2xl text-foreground font-medium mb-8 md:mb-12 border-l-4 border-primary pl-6 py-2">
               {post.excerpt}
            </p>

            <h2 id={content.introId}>{content.introTitle}</h2>
            <p>
                In the modern digital landscape, <strong>latency is the silent killer</strong> of conversion. When we approached the architecture for high-frequency trading platforms, traditional REST methodologies were immediately discarded. The overhead of TCP handshakes for every transaction was simply unacceptable.
            </p>
            <p>
                Instead, we pioneered a hybrid WebSocket approach, maintaining persistent connections only for critical data streams while offloading static assets to the edge.
            </p>
            
            <figure className="my-12">
                <div className="bg-secondary/30 border border-border rounded-3xl p-8 aspect-video flex items-center justify-center text-muted-foreground font-mono">
                    [Diagram: socket_vs_rest_latency_comparison.svg]
                </div>
                <figcaption className="text-center text-xs font-mono text-muted-foreground mt-4">{content.figPrefix} 1.0 - Latency comparison under load</figcaption>
            </figure>

            <h2 id={content.architectureId}>{content.architectureTitle}</h2>
            <p>
                Utilizing Node.js clustered workers, we achieved horizontal scale across 4 availability zones. The key was a custom load balancer written in Go, which handled connection pooling more efficiently than Nginx in this specific use case.
            </p>
            
            <div className="bg-[#020617] p-4 md:p-6 rounded-2xl border border-white/10 my-8 shadow-2xl overflow-x-auto">
                <code className="text-xs md:text-sm font-mono text-blue-400">
                    <span className="text-purple-400">const</span> <span className="text-yellow-400">initCluster</span> = <span className="text-blue-400">()</span> {`=>`} {'{'}<br/>
                    &nbsp;&nbsp;<span className="text-purple-400">if</span> (cluster.isPrimary) {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;console.log(<span className="text-green-400">`Primary ${process.pid} is running`</span>);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// Fork workers...</span><br/>
                    &nbsp;&nbsp;{'}'} <span className="text-purple-400">else</span> {'{'}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">startWorker</span>();<br/>
                    &nbsp;&nbsp;{'}'}<br/>
                    {'}'}
                </code>
            </div>

            <h2 id={content.metricsId}>{content.metricsTitle}</h2>
            <p>
                Post-deployment analysis showed a <strong>94% reduction</strong> in Time-to-Byte (TTB) and a concurrent user capacity increase of 400%.
            </p>
            <ul>
                <li><strong>TTB:</strong> Reduced from 450ms to 24ms</li>
                <li><strong>Concurrency:</strong> Scaled to 50k sustained socket connections per node</li>
                <li><strong>CPU Load:</strong> Stabilized at 60% under peak load</li>
            </ul>

            <h2 id={content.conclusionId}>{content.conclusionTitle}</h2>
            <p>
                While complexity increased initially, the long-term stability and responsiveness of the platform justified the architectural shift. For any application demanding real-time interactivity, WebSockets remain the gold standard.
            </p>

        </main>
      </div>

    </article>
  );
}
