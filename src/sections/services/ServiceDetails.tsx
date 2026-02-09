"use client";

import Link from 'next/link';
import { 
  ArrowLeft, Activity, Layers, Terminal, CheckCircle2,
  Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap,
  Monitor, ArrowRight, Server, Cpu
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ServiceData } from '@/lib/services';
import ServiceImpact from './ServiceImpact';
import ServiceProcess from './ServiceProcess';

// Icon Map
const ICON_MAP: Record<string, any> = {
  Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap, Monitor, Server, Cpu
};

export default function ServiceDetails({ service }: { service: ServiceData }) {
  const Icon = ICON_MAP[service.iconName] || Target;
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <main className="min-h-screen bg-[#F8F9FA] relative overflow-hidden">
      
      {/* Dynamic Background Grids */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#072C55_1px,transparent_1px),linear-gradient(to_bottom,#072C55_1px,transparent_1px)] bg-[size:60px_60px]" />
          <motion.div 
            style={{ y: yParallax }}
            className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br ${service.gradient} rounded-full filter blur-[150px] opacity-10 mix-blend-multiply`} 
          />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10 py-32 md:py-40">
        
        {/* Navigation Breadcrumb */}
        <Link 
          href="/services" 
          className="inline-flex items-center gap-2 text-[#072C55]/60 hover:text-[#5210F8] transition-colors mb-16 font-mono text-xs uppercase tracking-widest font-bold group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          System_Index // Return to Matrix
        </Link>
        
        {/* HERO: Data-Centric Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-24 mb-32 items-stretch">
            
            {/* Left: Manifesto & Value Prop */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center"
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#072C55]/10 mb-8 shadow-sm w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
                    <span className="text-[#072C55] text-[10px] font-mono font-black uppercase tracking-[0.2em]">Protocol: {service.id.toUpperCase()}</span>
                </div>

                <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-[#072C55] tracking-tighter mb-6 leading-[0.85]">
                    {service.title.split(' ')[0]} <br/>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.gradient}`}>
                        {service.title.split(' ').slice(1).join(' ')}
                    </span>
                </h1>

                <p className="text-xl font-medium text-[#072C55]/40 mb-8 max-w-xl font-mono tracking-tight leading-tighter">
                   // {service.tagline}
                </p>

                <p className="text-xl md:text-2xl text-[#072C55]/80 font-medium leading-relaxed max-w-2xl mb-12">
                   {service.fullDescription}
                </p>

                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-[#072C55] text-white rounded-2xl font-mono text-sm font-black uppercase tracking-widest hover:bg-[#5210F8] transition-all shadow-xl hover:shadow-[#5210F8]/20 hover:-translate-y-1 group flex items-center gap-3">
                        Initialize Mission
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white border border-[#072C55]/10 text-[#072C55] rounded-2xl font-mono text-sm font-black uppercase tracking-widest hover:border-[#5210F8] hover:text-[#5210F8] transition-all shadow-sm">
                        View Case Data
                    </button>
                </div>
            </motion.div>

            {/* Right: Cybernetic HUD Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                className="relative h-full min-h-[500px]"
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-[3rem] transform rotate-3 blur-3xl`} />
                
                <div className="relative h-full bg-white border border-[#072C55]/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden flex flex-col justify-between group hover:border-[#5210F8]/20 transition-colors duration-500">
                    
                    {/* HUD Header */}
                    <div className="flex justify-between items-start mb-12 border-b border-[#072C55]/5 pb-8">
                         <div className="flex items-center gap-6">
                             <div className="w-16 h-16 rounded-2xl bg-[#F8F9FA] flex items-center justify-center relative overflow-hidden group-hover:bg-[#072C55] transition-colors duration-500">
                                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${service.gradient}`} />
                                 <Icon size={32} className="text-[#072C55] group-hover:text-white transition-colors duration-500 relative z-10" />
                             </div>
                             <div>
                                 <div className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#072C55]/40 mb-1">System_ID</div>
                                 <div className="text-2xl font-black text-[#072C55] tracking-tight">SYS_{service.id.substring(0,4).toUpperCase()}</div>
                             </div>
                         </div>
                         <div className="px-3 py-1 bg-[#00FF94]/10 rounded border border-[#00FF94]/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
                            <span className="text-[#00FF94] font-mono text-[10px] font-bold uppercase tracking-widest">Live</span>
                         </div>
                    </div>

                    {/* Key Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {service.metrics?.map((m, i) => (
                            <div key={i} className="p-6 bg-[#F8F9FA] rounded-[2rem] border border-[#072C55]/5 group/card hover:border-[#5210F8]/20 hover:bg-white transition-all duration-300">
                                <div className="font-mono text-[9px] font-black uppercase tracking-widest text-[#072C55]/40 mb-3 group-hover/card:text-[#5210F8] transition-colors">{m.label.replace('_', ' ')}</div>
                                <div className="text-3xl xl:text-4xl font-black text-[#072C55] tracking-tight">{m.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* System Visualization Area */}
                    <div className="mt-auto pt-8 border-t border-[#072C55]/5 relative">
                        <div className="absolute top-0 right-0 p-2 bg-[#F8F9FA] rounded-bl-xl border-l border-b border-[#072C55]/5 font-mono text-[9px] text-[#072C55]/40 uppercase tracking-widest">
                            Output_Stream
                        </div>
                        {/* Abstract Graph */}
                        <div className="h-24 flex items-end justify-between gap-1 px-1 opacity-50">
                             {[...Array(24)].map((_, i) => (
                                 <motion.div 
                                    key={i} 
                                    initial={{ height: "20%" }}
                                    animate={{ height: `${30 + Math.random() * 60}%` }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
                                    className={`w-full rounded-t-sm transition-colors duration-500 hover:bg-[#5210F8] ${i % 3 === 0 ? 'bg-[#00FF94]' : 'bg-[#072C55]/20'}`}
                                 />
                             ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* SECTION 2: DEEP DIVE MODULES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-32">
            
            {/* Sidebar: Navigation or Quick Links (Sticky) */}
            <div className="lg:col-span-4 sticky top-32 space-y-8">
                 <ServiceProcess process={service.process} />
            </div>

            {/* Main Content: Impact & Specs */}
            <div className="lg:col-span-8 space-y-8">
                
                {/* Impact Simulator */}
                <ServiceImpact data={service.impactGraph} />

                {/* Core Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features?.map((feature, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-white border border-[#072C55]/10 rounded-2xl p-6 group hover:border-[#5210F8]/30 transition-all hover:shadow-lg flex items-start gap-4"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center shrink-0 group-hover:bg-[#072C55] transition-colors duration-300">
                                <span className="font-mono text-xs font-bold text-[#072C55] group-hover:text-white transition-colors">{i+1 < 10 ? `0${i+1}` : i+1}</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-[#072C55] text-lg mb-1 group-hover:text-[#5210F8] transition-colors">{feature}</h4>
                                <div className="h-0.5 w-8 bg-[#00FF94] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* SECTION 3: RELATED SYSTEMS */}
        <div className="border-t border-[#072C55]/10 pt-24 mb-24">
            <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-black text-[#072C55] tracking-tight">Connected Systems</h3>
                <Link href="/services" className="font-mono text-xs font-bold uppercase tracking-widest text-[#5210F8] hover:text-[#072C55] transition-colors flex items-center gap-2">
                    View Full Matrix <ArrowRight size={14} />
                </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.relatedServices?.map((relId, i) => (
                    <Link key={i} href={`/services/${relId}`} className="group block">
                        <div className="bg-white border border-[#072C55]/10 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full flex flex-col justify-between">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] to-white group-hover:opacity-50 transition-opacity" />
                            
                            <div className="relative z-10 mb-8">
                                <div className="font-mono text-[9px] text-[#072C55]/40 uppercase tracking-widest mb-4">REL_SYS_0{i+1}</div>
                                <h4 className="font-bold text-xl text-[#072C55] leading-tight group-hover:text-[#5210F8] transition-colors">
                                    {relId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                </h4>
                            </div>

                            <div className="relative z-10 flex justify-end">
                                <div className="w-8 h-8 rounded-full bg-[#F8F9FA] group-hover:bg-[#072C55] flex items-center justify-center transition-colors">
                                    <ArrowRight size={14} className="text-[#072C55] group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        
        {/* Footer CTA */}
        <div className="relative rounded-[3rem] bg-[#072C55] overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b ${service.gradient} opacity-20 blur-3xl`} />
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                    Ready to Deploy?
                </h2>
                <p className="text-white/60 text-lg mb-10 font-medium">
                    Initialize the {service.title} protocol and scale your operations today.
                </p>
                <button className="px-10 py-5 bg-white text-[#072C55] rounded-full font-mono text-sm font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                    Start Integration
                </button>
            </div>
        </div>

      </div>
    </main>
  );
}
