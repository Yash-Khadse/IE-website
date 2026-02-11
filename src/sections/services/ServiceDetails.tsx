"use client";

import Link from 'next/link';
import { 
  ArrowLeft, Activity, Terminal, 
  Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap,
  Monitor, ArrowRight, Server, Cpu, AlertTriangle, Check, Play, MousePointer2,
  ChevronRight, BoxSelect, Grip, Layers, Crosshair, Sparkles, SlidersHorizontal,
  ChevronDown, Hexagon, Code, Lock, FileJson, Share2, Grid3X3, List, PieChart,
  Network, CircleDot, GitBranch
} from 'lucide-react';
import { motion, useScroll, useSpring, useTransform, useInView, MotionValue } from 'framer-motion';
import { ServiceData } from '@/lib/services';
import { useRef, useState, useEffect } from 'react';

// Icon Map
const ICON_MAP: Record<string, any> = {
  Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap, Monitor, Server, Cpu, Activity
};

export default function ServiceDetails({ service }: { service: ServiceData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const Icon = ICON_MAP[service.iconName] || Target;

  return (
    <main ref={containerRef} className="bg-slate-950 px-4 md:px-8 pb-8 md:pb-12 pt-24 md:pt-32 relative min-h-screen">
      
       {/* -------------------------------------------------------------
          CARD 0: HERO (BASE LAYER)
      ----------------------------------------------------------------- */}
      <section className="sticky top-4 md:top-8 h-[85vh] md:h-[90vh] w-full bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 md:p-20 relative mb-8 z-0 transition-transform duration-500 origin-top hover:scale-[0.98]">
          <HeroContent service={service} Icon={Icon} />
      </section>

       {/* -------------------------------------------------------------
          CARD 1: DIAGNOSTICS (DARK MODE)
      ----------------------------------------------------------------- */}
      <CardIndex index={1} total={4} color="text-white" />
      <section className="sticky top-8 md:top-12 h-auto min-h-[90vh] w-full bg-[#0F1115] text-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] border-t border-white/10 p-8 md:p-20 relative mb-8 z-10 transition-transform duration-500 origin-top hover:scale-[0.99]">
          <DiagnosticsContent service={service} />
      </section>

       {/* -------------------------------------------------------------
          CARD 2: ARCHITECTURE (LIGHT MODE)
      ----------------------------------------------------------------- */}
      <CardIndex index={2} total={4} color="text-slate-900" />
      <section className="sticky top-12 md:top-16 h-auto min-h-[90vh] w-full bg-slate-50 text-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.2)] border-t border-slate-200 p-8 md:p-20 relative mb-8 z-20 transition-transform duration-500 origin-top hover:scale-[0.99]">
          <ArchitectureContent service={service} />
      </section>

       {/* -------------------------------------------------------------
          CARD 3: METRICS (BRAND MATRIX)
      ----------------------------------------------------------------- */}
      <CardIndex index={3} total={4} color="text-white" />
      <section className="sticky top-16 md:top-20 h-auto min-h-[90vh] w-full bg-slate-900 text-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] border-t border-white/10 relative mb-8 z-30 flex flex-col">
          {/* Animated Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
          
          <MetricsContent service={service} />
      </section>

       {/* -------------------------------------------------------------
          CARD 4: FINALE (FOOTER)
      ----------------------------------------------------------------- */}
      <section className="sticky top-20 md:top-24 h-[50vh] w-full bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-20 relative z-40 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 max-w-4xl">
                SYSTEM READY FOR DEPLOYMENT
            </h2>
            <button className="px-10 py-5 bg-black text-white rounded-full font-mono text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl hover:bg-fooror-purple">
                Initialize Project
            </button>
      </section>
      
    </main>
  );
}

// --- SUB-COMPONENTS FOR CLEANER CODE ---

function CardIndex({ index, total, color }: { index: number, total: number, color: string }) {
    return (
        <div className={`hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-50 pointer-events-none mix-blend-difference ${color}`}>
            <span className="font-mono text-xs font-bold">0{index}</span>
            <div className="w-px h-12 bg-current opacity-20" />
            <span className="font-mono text-xs opacity-50">0{total}</span>
        </div>
    );
}

function HeroContent({ service, Icon }: { service: ServiceData, Icon: any }) {

    return (
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
            <div className="flex flex-col justify-center order-2 md:order-1">
                 <Link href="/services" className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors mb-8 group w-fit">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Protocol_Index
                 </Link>
                 
                 <div className="mb-6 flex gap-4">
                     <div className="px-3 py-1 rounded border border-slate-200 bg-slate-50 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                         v5.2.0
                     </div>
                 </div>

                 <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                     {service.title}
                 </h1>
                 <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-lg mb-12">
                     {service.fullDescription}
                 </p>
                 
                 <div className="flex gap-4">
                     <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                         <ArrowRight size={20} className="rotate-90 md:rotate-0" />
                     </button>
                     <span className="self-center font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">Scroll to Initialize</span>
                 </div>
            </div>

            <div className="flex items-center justify-center relative order-1 md:order-2">
                 <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-slate-50 rounded-full flex items-center justify-center relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl`} />
                      <div className="absolute inset-0 border border-slate-100 rounded-full animate-[spin_30s_linear_infinite]" />
                      <div className="absolute inset-8 border border-dashed border-slate-200 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                      
                      <div className="relative z-10 w-32 h-32 bg-white shadow-2xl rounded-3xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 border border-slate-100 group">
                          <Icon size={48} className="text-slate-900 group-hover:scale-110 transition-transform" />
                      </div>
                 </div>
            </div>
        </div>
    );
}

function DiagnosticsContent({ service }: { service: ServiceData }) {
    return (
        <div className="w-full max-w-[1400px] mx-auto h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 gap-6">
                <div>
                     <span className="font-mono text-red-500 text-xs font-bold uppercase tracking-widest mb-2 block">/// System_Alert</span>
                     <h2 className="text-4xl md:text-6xl font-black tracking-tight">Diagnostic Log</h2>
                </div>
                <div className="hidden md:block text-right">
                    <div className="text-lg font-bold text-red-500">{service.painPoints?.length} Errors Found</div>
                    <div className="text-xs text-white/40 font-mono uppercase">Scan Complete</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.painPoints?.map((point, i) => (
                    <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden h-full">
                        <div className="absolute top-4 right-4 text-white/20 font-mono text-xs font-bold group-hover:text-red-500">
                            ERR_0{i+1}
                        </div>
                        <AlertTriangle className="text-white/20 mb-6 group-hover:text-red-500 transition-colors" size={24} />
                        <h3 className="text-xl font-bold leading-snug group-hover:text-red-100 transition-colors">{point}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ArchitectureContent({ service }: { service: ServiceData }) {
    return (
        <div className="w-full max-w-[1400px] mx-auto h-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-8 gap-6">
                <div>
                     <span className="font-mono text-fooror-purple text-xs font-bold uppercase tracking-widest mb-2 block">/// Solution_Matrix</span>
                     <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900">Architecture</h2>
                </div>
                <div className="hidden md:block">
                     <button className="px-6 py-2 border border-slate-300 rounded-full font-mono text-xs font-bold uppercase hover:bg-slate-900 hover:text-white transition-colors">
                         View Full Map
                     </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
                {/* Tech Stack Ticker (Vertical on Desktop) */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-6 overflow-hidden relative">
                    <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest">Tech Stack</div>
                    <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible no-scrollbar pb-2 lg:pb-0">
                        {service.techStack?.map((tech, i) => (
                            <div key={i} className="flex items-center gap-3 shrink-0 group cursor-default">
                                <Code size={16} className="text-slate-300 group-hover:text-fooror-purple transition-colors" />
                                <span className="font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modules Grid */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.deliverables?.map((module, i) => (
                        <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                                <Grid3X3 size={18} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-fooror-purple transition-colors leading-tight">{module}</h3>
                                <p className="text-slate-400 text-xs uppercase font-bold tracking-wider pt-1">Validating module integrity...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MetricsContent({ service }: { service: ServiceData }) {
    return (
        <div className="w-full max-w-[1400px] mx-auto h-full flex flex-col justify-center relative z-10 p-8 md:p-20">
            <div className="text-center mb-20">
                 <span className="font-mono text-white/50 text-xs font-bold uppercase tracking-widest mb-4 block">/// Performance_Index</span>
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6">
                     SYSTEM IMPACT
                 </h2>
                 <p className="text-white/60 max-w-2xl mx-auto text-lg">
                     Verified performance metrics post-initialization.
                 </p>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {service.metrics?.map((m, i) => (
                    <div key={i} className="text-center p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                        <div className="font-mono text-white/40 text-xs font-bold uppercase tracking-widest mb-8">{m.label.replace('_', ' ')}</div>
                        <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4 group-hover:scale-110 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            {m.value}
                        </div>
                        <div className="h-1 w-12 bg-fooror-purple mx-auto rounded-full" />
                    </div>
                ))}
            </div>

            {/* Process / Steps Ticker at Bottom */}
            <div className="mt-20 border-t border-white/10 pt-8 hidden md:block">
                <div className="flex justify-between items-center text-white/30 font-mono text-xs uppercase tracking-widest mb-4">
                    <span>Initiation</span>
                    <span>Execution</span>
                    <span>Completion</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-fooror-purple w-2/3 rounded-full" />
                </div>
            </div>
        </div>
    );
}
