"use client";

import { use, useRef, useState, useEffect } from 'react';
import { PROJECTS, ProjectData } from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, Check, X, TrendingUp, BarChart3, 
  Layers, Zap, Target, ArrowUpRight, Smartphone,
  Monitor, Layout, PieChart, Users, Globe, ChevronRight,
  Star, Trophy, Rocket, ArrowLeft, MousePointer2,
  Cpu, Binary, Scan, Activity, Workflow, Lightbulb,
  CheckCircle2, Box, Command, Share2, Menu, X as CloseIcon,
  Maximize2, Terminal, Code, Database, ChevronDown
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView, Variants, AnimatePresence } from 'framer-motion';
import ProjectRelatedServices from '@/sections/work/ProjectRelatedServices';

// ----------------------------------------------------------------------------
// ANIMATION VARIANTS
// ----------------------------------------------------------------------------

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// ----------------------------------------------------------------------------
// PAGE COMPONENT
// ----------------------------------------------------------------------------

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS.find(p => p.id === slug) || PROJECTS[0]!;

  return <ProjectView project={project} />;
}

function ProjectView({ project }: { project: ProjectData }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const navIndex = PROJECTS.findIndex(p => p.id === project.id);
    const nextProject = PROJECTS[(navIndex + 1) % PROJECTS.length];

    return (
        <main className="bg-white min-h-screen text-[#072C55] font-sans selection:bg-[#5210F8] selection:text-white antialiased">
            
            {/* 🟢 NAVIGATION */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#072C55]/5 shadow-sm transition-all duration-300">
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        {/* Home / Brand */}
                        <Link href="/" className="group flex items-center gap-2 pr-6 border-r border-[#072C55]/10">
                            <div className="w-8 h-8 rounded bg-[#072C55] flex items-center justify-center text-white font-bold text-xs tracking-tighter hover:bg-[#5210F8] transition-colors">
                                IE
                            </div>
                        </Link>
                        
                        {/* Back to Work */}
                        <Link href="/work" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#072C55]/50 hover:text-[#072C55] transition-colors">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            All Projects
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">

                        <Link href="/contact" className="px-6 py-2.5 bg-[#072C55] text-white text-[10px] font-bold uppercase tracking-widest rounded hover:bg-[#5210F8] transition-colors shadow-lg shadow-[#5210F8]/20 hover:scale-105 active:scale-95 transform">
                            Start a Project
                        </Link>
                    </div>
                </div>
                {/* Progress Bar */}
                <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#5210F8] origin-left" />
            </header>

            {/* 🟢 1. IDENTITY (HERO) */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 max-w-[1400px] mx-auto min-h-[80vh] md:min-h-[90vh] flex flex-col justify-center">
                <HeroContent project={project} />
                
                {/* Scroll Hint */}
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-[#072C55]/30">
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                </div>
            </section>

            {/* 🟢 2. DIAGNOSTICS (CHALLENGE) - Dark Navy Brand Mode */}
            <section className="bg-[#072C55] text-white py-16 md:py-32 border-t border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <ChallengeContent project={project} />
                </div>
            </section>

            {/* 🟢 3. ARCHITECTURE (STRATEGY & VISUALS) */}
            <section className="py-16 md:py-32 px-6 max-w-[1400px] mx-auto bg-white">
                <ArchitectureContent project={project} />
            </section>

            {/* 🟢 4. OUTCOMES (RESULTS) - Brand Dark Navy */}
            <section className="bg-[#072C55] text-white py-16 md:py-32 px-6 relative overflow-hidden">
                {/* Decor */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#5210F8] rounded-full blur-[100px] opacity-20" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C47DFD] rounded-full blur-[100px] opacity-20" />
                
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <OutcomesContent project={project} />
                </div>
            </section>



            {/* 🟢 6. NEXT LOOP (FOOTER) */}
            {/* FooterContent removed as per request */}
        </main>
    )
}

// ----------------------------------------------------------------------------
// SUB-COMPONENTS (CONTENT BLOCKS)
// ----------------------------------------------------------------------------

function HeroContent({ project }: { project: ProjectData }) {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <motion.div 
                initial="hidden" 
                animate="visible" 
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16"
            >
                <div className="lg:col-span-7">
                    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
                        <span className="px-3 py-1 rounded bg-[#F8F9FA] text-[#072C55]/70 text-[10px] font-bold uppercase tracking-widest border border-[#072C55]/10">
                            {project.clientOverview.industry}
                        </span>
                        <div className="h-px w-8 bg-[#072C55]/20" />
                        <span className="text-[#072C55]/40 text-[10px] font-bold uppercase tracking-widest">
                            {project.year}
                        </span>
                    </motion.div>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-[5.5rem] font-bold tracking-tight text-[#072C55] mb-6 md:mb-8 leading-[0.95]">
                        {project.title.toUpperCase()}
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-[#072C55]/60 font-medium leading-relaxed max-w-xl border-l-4 border-[#5210F8] pl-6">
                        {project.headline}
                    </motion.p>
                </div>
                
                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-6">
                     <motion.div variants={fadeInUp} className="bg-[#F8F9FA] border border-[#072C55]/5 p-6 rounded-2xl max-w-sm w-full">
                         <span className="text-xs font-bold text-[#072C55]/40 uppercase tracking-widest block mb-4">Tech Stack</span>
                         <div className="flex flex-wrap gap-2">
                            {project.techStack?.slice(0, 6).map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 bg-white border border-[#072C55]/10 rounded text-[11px] font-bold uppercase tracking-wide text-[#072C55]/80">
                                    {tech}
                                </span>
                            ))}
                         </div>
                     </motion.div>
                     
                     <motion.div variants={fadeInUp} className="bg-[#5210F8]/5 border border-[#5210F8]/10 p-6 rounded-2xl max-w-sm w-full">
                         <div className="flex items-center gap-3 mb-2">
                             <TrendingUp size={16} className="text-[#5210F8]" />
                             <span className="text-xs font-bold text-[#5210F8] uppercase tracking-widest">Key Result</span>
                         </div>
                         <div className="text-4xl font-bold text-[#072C55]">{project.results[0].value}<span className="text-xl ml-1 text-[#072C55]/40">{project.results[0].suffix}</span></div>
                         <div className="text-xs font-bold text-[#072C55]/60 mt-1 uppercase tracking-wide">{project.results[0].label}</div>
                     </motion.div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-[#072C55]/10 bg-[#F8F9FA] group"
            >
                <Image
                    src={project.heroImage}
                    alt="Hero Visual"
                    fill
                    className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                    priority
                />
                
                {/* Interface Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white/50 shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5210F8] animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#072C55]">
                        Live Preview
                    </span>
                </div>
            </motion.div>
        </div>
    )
}

function ChallengeContent({ project }: { project: ProjectData }) {
    return (
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            <div className="lg:w-1/3">
                <span className="text-white/60 font-bold text-xs uppercase tracking-widest mb-6 block border-b border-white/20 pb-2 w-fit">01 // The Challenge</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
                    The Problem
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8 font-medium">
                    {project.challenge.description}
                </p>
                
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-[#C47DFD]/10 border border-[#C47DFD]/30 rounded-lg text-[#C47DFD] text-xs font-bold">
                    <Activity size={16} />
                    <span>KEY ISSUE IDENTIFIED</span>
                </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {project.challenge.constraints.map((item, i) => (
                    <div key={i} className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#5210F8]/50 transition-colors flex flex-col justify-between h-full group">
                        <div className="flex justify-between items-start mb-4 md:mb-6">
                             <Cpu size={24} className="text-white/40 group-hover:text-[#5210F8] transition-colors" />
                             <span className="font-bold text-xl text-white/60 group-hover:text-white transition-colors">0{i+1}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-2">{item}</h3>
                            <p className="text-white/50 text-sm">Challenge identified during audit phase.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

function ArchitectureContent({ project }: { project: ProjectData }) {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-20 pb-8 border-b border-[#072C55]/5">
                <div className="max-w-2xl">
                    <span className="text-[#5210F8] font-bold text-xs uppercase tracking-widest mb-4 block">02 // The Solution</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#072C55]">
                        Our Strategy
                    </h2>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {project.strategy.map((item, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-[#072C55]/10 hover:border-[#5210F8] transition-colors py-2 group">
                        <div className="text-4xl font-bold text-[#072C55]/5 absolute -top-4 left-6 group-hover:text-[#5210F8]/10 transition-colors -z-10">0{i+1}</div>
                        <h3 className="text-xl font-bold text-[#072C55] mb-3 group-hover:text-[#5210F8] transition-colors">{item.title}</h3>
                        <p className="text-[#072C55]/60 leading-relaxed text-sm font-medium">{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-12 gap-4 md:gap-8">
                {project.galleryImages[0] && (
                    <div className="col-span-12 lg:col-span-8 relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl group">
                        <Image 
                            src={project.galleryImages[0]} 
                            alt="Interface" 
                            fill 
                            className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                        />
                        <div className="absolute top-6 left-6 px-3 py-1 bg-[#072C55]/90 text-white text-[10px] font-bold uppercase tracking-widest rounded backdrop-blur border border-white/10">
                            Fig. 1.0 — Interface
                        </div>
                    </div>
                )}
                {project.galleryImages[1] && (
                    <div className="col-span-12 lg:col-span-4 relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden shadow-2xl group">
                         <div className="absolute inset-0 bg-[#072C55]" />
                        <Image 
                            src={project.galleryImages[1] || project.heroImage} 
                            alt="Mobile" 
                            fill 
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                        />
                         <div className="absolute bottom-6 left-6 px-3 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded backdrop-blur">
                            Fig. 1.1 — Mobile
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function OutcomesContent({ project }: { project: ProjectData }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
             <div>
                 <span className="text-white/60 font-bold text-xs uppercase tracking-widest mb-4 md:mb-6 block border-b border-white/20 pb-2 w-fit">03 // The Results</span>
                 <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 md:mb-12">
                     REAL<br/>IMPACT.
                 </h2>
                 {project.testimonial && (
                     <div className="relative pl-8 border-l-4 border-[#C47DFD]">
                         <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-6 text-white/90">
                             "{project.testimonial.quote}"
                         </p>
                         <div>
                             <div className="font-bold text-white text-lg">{project.testimonial.author}</div>
                             <div className="text-xs font-bold opacity-60 uppercase">{project.testimonial.role}</div>
                         </div>
                     </div>
                 )}
             </div>

             <div className="grid gap-4 md:gap-6">
                 {project.results.map((res, i) => (
                     <div key={i} className="flex items-center justify-between p-6 md:p-8 bg-white/10 backdrop-blur border border-white/10 rounded-2xl hover:bg-white/20 transition-colors">
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded bg-white text-[#5210F8] flex items-center justify-center shadow-lg">
                                 <BarChart3 size={20} />
                             </div>
                             <span className="font-bold text-lg">{res.label}</span>
                         </div>
                         <div className="text-right">
                             <div className="text-3xl font-black tracking-tight">{res.value}</div>
                             <div className="text-xs font-bold text-[#C47DFD] uppercase tracking-wide">{res.suffix}</div>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
    )
}
