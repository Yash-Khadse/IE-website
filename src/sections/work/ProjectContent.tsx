"use client";

import { motion } from 'framer-motion';
import { ProjectData } from '@/lib/projects';
import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, CloudLightning, Maximize2, Layers } from 'lucide-react';
import Link from 'next/link';

// Animated Number Counter with Easing
const MetricCounter = ({ value, suffix = '' }: { value: string, suffix?: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    
    useEffect(() => {
        if (!isInView || isNaN(numericValue)) return;
        
        const controls = animate(0, numericValue, {
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1], // Custom Ease
            onUpdate(latest) {
                if (nodeRef.current) {
                    nodeRef.current.textContent = latest.toFixed(numericValue % 1 === 0 ? 0 : 1) + suffix;
                }
            }
        });
        
        return () => controls.stop();
    }, [isInView, numericValue, suffix]);
    
    return <span ref={nodeRef} className="font-mono tabular-nums tracking-tighter">0</span>;
};

// Sticky Challenge/Solution Layout
const SplitSection = ({ title, content, type }: { title: string, content: string, type: 'challenge' | 'solution' }) => {
    const isChallenge = type === 'challenge';
    return (
        <motion.div 
            initial={{ opacity: 0, x: isChallenge ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`relative p-8 md:p-12 rounded-[2rem] border overflow-hidden group h-full flex flex-col justify-between
                ${isChallenge 
                    ? 'bg-[#F8F9FA] dark:bg-white/5 border-[#072C55]/10 dark:border-white/10' 
                    : 'bg-[#072C55] border-[#072C55] text-white shadow-2xl'
                }`}
        >
            {/* Background Flair */}
            <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none 
                ${isChallenge ? 'bg-red-500' : 'bg-[#00FF94]'}`} 
            />
            
            <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest mb-8 border
                    ${isChallenge ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-[#00FF94]/10 text-[#00FF94] border-[#00FF94]/20'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isChallenge ? 'bg-red-500' : 'bg-[#00FF94]'} animate-pulse`} />
                    {isChallenge ? 'System_Friction' : 'Protocol_Deployed'}
                </div>
                
                <h3 className={`text-4xl md:text-5xl font-black tracking-tight leading-[0.9] mb-6 
                    ${isChallenge ? 'text-[#072C55] dark:text-white' : 'text-white'}`}>
                    {title}
                </h3>
                
                <p className={`text-lg md:text-xl font-medium leading-relaxed 
                    ${isChallenge ? 'text-[#072C55]/70 dark:text-white/70' : 'text-white/80'}`}>
                    {content}
                </p>
            </div>
            
            {/* Bottom Tech Decoration */}
            <div className="mt-12 pt-6 border-t border-current opacity-20 flex justify-between items-end font-mono text-[10px]">
                <span>{isChallenge ? 'ERR_CODE: 409_CONFLICT' : 'STATUS: 200_OK'}</span>
                {isChallenge ? <Layers size={16} /> : <CheckCircle2 size={16} />}
            </div>
        </motion.div>
    );
};

export default function ProjectContent({ project }: { project: ProjectData }) {
  const { challenge, solution, results, techStack, galleryImages } = project;

  return (
    <section className="bg-background py-24 md:py-32 px-6 overflow-hidden relative">
        
        {/* Abstract Grid Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
             <div className="absolute left-1/4 h-full w-px bg-current" />
             <div className="absolute right-1/4 h-full w-px bg-current" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
            
            {/* 1. ANIMATED CHALLENGE / SOLUTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-40 items-stretch">
                <SplitSection title="THE BOTTLENECK" content={challenge} type="challenge" />
                <SplitSection title="THE ORCHESTRATION" content={solution} type="solution" />
            </div>

            {/* 2. QUANTIFIED RESULTS */}
            <div className="mb-40">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-[#072C55] dark:text-white tracking-tight">
                        SYSTEM OUTPUT
                    </h2>
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-[#072C55]/10 dark:border-white/10 bg-[#F8F9FA] dark:bg-white/5">
                        <span className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse" />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#072C55]/60 dark:text-white/60">Live Metrics</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {results.map((result, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-[#F8F9FA] dark:bg-white/5 border border-[#072C55]/5 dark:border-white/5 rounded-3xl p-10 flex flex-col justify-between hover:border-[#5210F8]/20 transition-all duration-500 hover:bg-white dark:hover:bg-white/10 hover:shadow-xl group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                <ArrowUpRight className="text-[#5210F8]" />
                            </div>
                            
                            <div className="mb-8">
                                <span className="font-mono text-[10px] uppercase font-bold text-[#072C55]/40 dark:text-white/40 tracking-[0.2em] mb-2 block">
                                    KPI_0{i+1}
                                </span>
                                <div className="text-6xl md:text-7xl lg:text-8xl font-black text-[#072C55] dark:text-white tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500 origin-left">
                                    <MetricCounter value={result.value} suffix={result.suffix} />
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-[#072C55]/5 dark:border-white/5">
                                <span className="font-bold text-lg text-[#072C55] dark:text-white block mb-1">
                                    {result.label}
                                </span>
                                <p className="text-sm font-medium text-[#072C55]/60 dark:text-white/60 leading-snug">
                                    {result.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. IMMERSIVE GALLERY */}
            <div className="mb-40">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {galleryImages.map((img, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className={`group relative rounded-[2rem] overflow-hidden shadow-2xl ${i === 2 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}
                        >
                            <div className="absolute inset-0 bg-[#072C55]/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none mix-blend-multiply" />
                            <img 
                                src={img} 
                                alt={`Project Gallery ${i}`} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full">
                                    <Maximize2 className="text-white w-6 h-6" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 4. TECH ARCHITECTURE FOOTER */}
            <div className="border-t border-[#072C55]/10 dark:border-white/10 pt-20">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                     <div className="lg:col-span-4">
                         <h3 className="text-3xl font-black text-[#072C55] dark:text-white tracking-tight mb-4">
                             ARCHITECTURE
                         </h3>
                         <p className="text-[#072C55]/60 dark:text-white/60 font-medium max-w-sm">
                             Engineered with cutting-edge frameworks ensuring maximum scalability and zero-downtime deployment.
                         </p>
                     </div>
                     <div className="lg:col-span-8">
                         <div className="flex flex-wrap gap-4">
                             {techStack.map((tech, i) => (
                                 <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="px-6 py-3 rounded-xl bg-[#F8F9FA] dark:bg-white/5 border border-[#072C55]/10 dark:border-white/10 flex items-center gap-3 hover:border-[#5210F8] hover:text-[#5210F8] transition-all cursor-default group"
                                 >
                                     <CloudLightning size={14} className="text-[#072C55]/40 dark:text-white/40 group-hover:text-[#5210F8]" />
                                     <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#072C55]/80 dark:text-white/80 group-hover:text-[#5210F8]">
                                         {tech}
                                     </span>
                                 </motion.div>
                             ))}
                         </div>
                     </div>
                 </div>
            </div>

        </div>
    </section>
  );
}
