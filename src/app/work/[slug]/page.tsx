"use client";

import { use, useRef } from 'react';
import { PROJECTS, ProjectData } from '@/lib/projects';
import ProjectRelatedServices from '@/sections/work/ProjectRelatedServices';
import ProjectNavigation from '@/sections/work/ProjectNavigation';
import CTASection from '@/sections/CTASection';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, Binary, CheckCircle2, ShieldCheck, Target, Zap
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Use React.use() to unwrap the params promise in Client Component (Next.js 15 compatible pattern)
  // or simply rely on the fact that we can't await in the render body.
  // HOWEVER, for maximum compatibility and robustness in this "use client" file:
  // We will pass the promise to a child that unwraps it, or use the `use` hook contentiously.
  // Actually, standard practice for Client Components in Next 15 receiving params is:
  // they receive the promise.
  
  const { slug } = use(params);
  
  // Safe data fetching
  const project = PROJECTS.find(p => p.id === slug) || PROJECTS[0]!;

  return <ProjectView project={project} />;
}

// ----------------------------------------------------------------------------
// MAIN INTERACTIVE VIEW (Client Side)
// ----------------------------------------------------------------------------
function ProjectView({ project }: { project: ProjectData }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ container: containerRef });
    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    if (!project) return (
        <div className="flex items-center justify-center min-h-screen text-white bg-black">
            Project Matrix Not Found
        </div>
    );

    const navIndex = PROJECTS.findIndex(p => p.id === project.id);
    const nextProject = PROJECTS[(navIndex + 1) % PROJECTS.length];

    return (
        <main ref={containerRef} className="bg-[#F8F9FA] relative selection:bg-[#5210F8] selection:text-white overflow-hidden min-h-screen">
            
            {/* PROGRESS BAR */}
            <motion.div 
                style={{ scaleX: springScroll }} 
                className="fixed top-0 left-0 right-0 h-1 bg-[#5210F8] z-[100] origin-left"
            />

            {/* 🟢 HERO SECTION: IMMERSIVE VISUAL */}
            <section className="relative h-[95vh] flex items-end pb-20 px-6 md:px-12 overflow-hidden bg-[#072C55]">
                {/* Parallax Background */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={project.heroImage} 
                        alt={project.title} 
                        fill
                        className="object-cover opacity-30 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#072C55] via-[#072C55]/60 to-transparent" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                </div>

                <div className="absolute top-24 md:top-32 left-6 md:left-12 right-6 md:right-12 z-20 flex justify-between items-start pointer-events-none">
                     <Link href="/work" className="pointer-events-auto flex items-center gap-2 text-white/60 hover:text-white transition-colors group">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#072C55] transition-all">
                            <ArrowLeft size={16} />
                        </div>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest hidden md:block">Back to Matrix</span>
                     </Link>

                     <div className="flex flex-col items-end text-right">
                         <div className="font-mono text-[#5210F8] text-xs font-bold uppercase tracking-widest mb-1">
                             System_ID
                         </div>
                         <div className="text-white font-mono text-lg">{project.id.toUpperCase()}</div>
                     </div>
                </div>

                <div className="max-w-[1600px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-8">
                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-[#00FF94] uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="text-5xl md:text-7xl xl:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8"
                        >
                            {project.headline}
                        </motion.h1>
                    </div>

                    <div className="lg:col-span-4 lg:mb-4">
                        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                             <div className="grid grid-cols-2 gap-8">
                                 <div>
                                     <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Client</div>
                                     <div className="text-white font-bold">{project.title}</div>
                                 </div>
                                 <div>
                                     <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Industry</div>
                                     <div className="text-white font-bold">{project.clientOverview.industry}</div>
                                 </div>
                                 <div>
                                     <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Year</div>
                                     <div className="text-white font-bold">{project.year}</div>
                                 </div>
                                 <div>
                                     <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Service</div>
                                     <div className="text-white font-bold truncate">{project.role[0]}</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔴 OVERVIEW & CHALLENGE (Dark/Light Split) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left: Context (Sticky) */}
                <div className="bg-white p-12 lg:p-24 flex flex-col justify-center relative border-r border-[#072C55]/5">
                    <div className="max-w-xl">
                        <span className="font-mono text-[#5210F8] text-xs font-bold uppercase tracking-widest mb-6 block">
                            01 // Diagnostic Report
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#072C55] tracking-tight leading-none mb-12">
                            The <br/> Challenge
                        </h2>
                        
                        <div className="prose prose-lg text-[#072C55]/70 mb-12">
                            <p>{project.challenge.description}</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-500/10 rounded-lg text-red-500 mt-1">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#072C55] mb-1">Legacy Constraints</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.challenge.constraints.map((c, i) => (
                                            <span key={i} className="px-3 py-1 bg-[#F8F9FA] border border-[#072C55]/10 rounded text-xs font-medium text-[#072C55]/60">
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Goals (Dark Mode) */}
                <div className="bg-[#072C55] p-12 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden">
                     {/* Pattern */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                     <div className="max-w-xl relative z-10">
                        <span className="font-mono text-[#00FF94] text-xs font-bold uppercase tracking-widest mb-6 block">
                            02 // System Objectives
                        </span>

                        <ul className="space-y-8">
                            {project.goals.map((goal, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-6 group"
                                >
                                    <div className="font-mono text-[#00FF94]/40 text-sm pt-1">0{i+1}</div>
                                    <div className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-[#00FF94] transition-colors cursor-default">
                                        {goal}
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-16 pt-16 border-t border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-dashed border-white/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                    <Target size={20} className="text-[#00FF94]" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">Primary KPI</div>
                                    <div className="text-white/60 text-sm">Optimization Verified</div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </section>

            {/* 🔵 STRATEGY  */}
            <section className="py-32 px-6 bg-[#F8F9FA]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
                        <div>
                            <span className="font-mono text-[#5210F8] text-xs font-bold uppercase tracking-widest mb-4 block">
                                03 // Strategic Architecture
                            </span>
                            <h2 className="text-5xl md:text-7xl font-black text-[#072C55] tracking-tighter">
                                The Solution
                            </h2>
                        </div>
                        <p className="max-w-md text-[#072C55]/60 text-lg md:text-right mt-8 md:mt-0">
                            We engineered a bespoke solution to bridge the gap between legacy constraints and future-state objectives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {project.strategy.map((strat, i) => (
                            <div key={i} className="group bg-white p-10 rounded-3xl border border-[#072C55]/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                                <div className="w-16 h-16 bg-[#F8F9FA] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#5210F8] transition-colors">
                                    <Binary size={24} className="text-[#072C55] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#072C55] mb-4">{strat.title}</h3>
                                <p className="text-[#072C55]/60 leading-relaxed">{strat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ⚙️ EXECUTION TIMELINE */}
            <section className="py-32 px-6 bg-white border-y border-[#072C55]/5">
                <div className="max-w-[1000px] mx-auto">
                    <div className="text-center mb-24">
                        <span className="font-mono text-[#5210F8] text-xs font-bold uppercase tracking-widest mb-4 block">
                            04 // Execution Protocol
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-[#072C55] tracking-tight">Deploying the System</h2>
                    </div>
                    
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-[#072C55]/10 -translate-x-1/2" />
                        
                        {project.executionPhases.map((phase, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24 last:mb-0 relative ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                
                                {/* Center Node */}
                                <div className="absolute left-[27px] md:left-1/2 top-0 w-14 h-14 bg-white border border-[#072C55]/10 rounded-full flex items-center justify-center z-10 -translate-x-1/2 shadow-sm font-mono font-bold text-[#072C55]">
                                    {i+1}
                                </div>

                                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-3xl font-bold text-[#072C55] mb-4">{phase.title}</h3>
                                    <p className="text-[#072C55]/60 text-lg leading-relaxed">{phase.description}</p>
                                    <div className="mt-4 inline-block px-3 py-1 bg-[#F8F9FA] rounded text-xs font-mono text-[#072C55]/40 uppercase">
                                        Phase {phase.phase}
                                    </div>
                                </div>

                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🚀 RESULTS (Bento Grid Style) */}
            <section className="bg-[#072C55] text-white py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
                
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="mb-20">
                         <span className="font-mono text-[#00FF94] text-xs font-bold uppercase tracking-widest mb-4 block">
                            05 // Impact Analysis
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
                            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5210F8] to-[#C47DFD]">Performance</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Metric Cards */}
                        {project.results.map((res, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex items-end gap-1 mb-4">
                                    <span className="text-6xl md:text-8xl font-black leading-none tracking-tighter text-white group-hover:text-[#00FF94] transition-colors">{res.value}</span>
                                    <span className="text-2xl font-bold text-[#5210F8] mb-2">{res.suffix}</span>
                                </div>
                                <div className="h-px w-full bg-white/10 my-6" />
                                <div className="text-xl font-bold mb-2">{res.label}</div>
                                <p className="text-white/60">{res.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Key Takeaways */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 rounded-3xl p-12 border border-white/10">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Zap className="text-[#FACC15]" />
                                Critical Insights
                            </h3>
                            <p className="text-white/60 text-lg">
                                Key learnings derived from the execution of the {project.title} protocol.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {project.keyTakeaways.map((point, i) => (
                                <div key={i} className="flex items-start gap-4">
                                     <CheckCircle2 className="text-[#00FF94] mt-1 shrink-0" size={20} />
                                     <p className="text-lg leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

             {/* CLIENT TESTIMONIAL */}
            {project.testimonial && (
                <section className="py-40 px-6 bg-white text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-12">
                            {/* Quote Icon */}
                            <div className="w-16 h-16 mx-auto rounded-full bg-[#5210F8] flex items-center justify-center text-white mb-8">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                            </div>
                            <h3 className="text-3xl md:text-6xl font-medium text-[#072C55] leading-tight tracking-tight">
                                "{project.testimonial.quote}"
                            </h3>
                        </div>
                        <div>
                            <div className="font-bold text-xl text-[#072C55]">{project.testimonial.author}</div>
                            <div className="text-[#5210F8] font-mono text-sm uppercase tracking-widest mt-2">{project.testimonial.role}</div>
                        </div>
                    </div>
                </section>
            )}

            {/* FOOTER NAV & CTA */}
            <ProjectRelatedServices serviceIds={project.relatedServices} />
            <ProjectNavigation nextProject={nextProject} />
            <CTASection />

        </main>
    )
}
