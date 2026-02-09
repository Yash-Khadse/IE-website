"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Brain, 
  Paintbrush, 
  Code2, 
  BarChart3, 
  ArrowRight,
  Globe,
  ShieldCheck,
  Terminal,
  Cpu,
  Target,
  Zap,
  Fingerprint
} from "lucide-react";

const TEAM_UNITS = [
  {
    id: "UNIT_01",
    role: "Growth Architects",
    concept: "Strategic Intelligence",
    desc: "Ex-founders who treat growth as a technical problem. They don't guess; they architect systems that force scaling through unit-economic transparency and market arbitrage.",
    icon: Brain,
    color: "#5210F8",
    accent: "text-[#5210F8]",
    bg: "bg-[#5210F8]/5",
    skills: [
      { name: "Unit Econ Analysis", level: 98 },
      { name: "GTM Orchestration", level: 95 },
      { name: "Retention Logic", level: 92 }
    ],
    metadata: {
      deployment: "48H_READY",
      clearance: "LEVEL_10",
      rank: "PRINCIPAL"
    }
  },
  {
    id: "UNIT_02",
    role: "Creative Commandos",
    concept: "Psychological Ops",
    desc: "Engineering desire at the intersection of psychology and aesthetics. Our visionaries build movements, not just campaigns, using high-velocity performance creative protocols.",
    icon: Paintbrush,
    color: "#C47DFD",
    accent: "text-[#C47DFD]",
    bg: "bg-[#C47DFD]/5",
    skills: [
      { name: "Aesthetic Synthesis", level: 96 },
      { name: "Conversion Design", level: 94 },
      { name: "Visual Hooking", level: 98 }
    ],
    metadata: {
      deployment: "IMMEDIATE",
      clearance: "LEVEL_09",
      rank: "ELITE"
    }
  },
  {
    id: "UNIT_03",
    role: "Core Builders",
    concept: "Infrastructure Mastery",
    desc: "Ensuring zero-latency and infinite scale. Our full-stack engineers build custom middleware and API bridges that turn your tech stack into a performance-enhancing weapon.",
    icon: Code2,
    color: "#00FF94",
    accent: "text-[#00FF94]",
    bg: "bg-[#00FF94]/5",
    skills: [
      { name: "Next.js Protocols", level: 99 },
      { name: "API Orchestration", level: 95 },
      { name: "Cloud Scaling", level: 97 }
    ],
    metadata: {
      deployment: "SCHEDULED",
      clearance: "LEVEL_10",
      rank: "LEAD_ARCH"
    }
  },
  {
    id: "UNIT_04",
    role: "Data Alchemists",
    concept: "Algorithmic Precision",
    desc: "Extracting truth from advertising chaos. Our data scientists deploy custom ML models and server-side tracking to ensure every dollar spent is backed by high-confidence execution signals.",
    icon: BarChart3,
    color: "#072C55",
    accent: "text-[#072C55]",
    bg: "bg-[#072C55]/5",
    skills: [
      { name: "Attribution Modeling", level: 94 },
      { name: "Predictive Analytics", level: 96 },
      { name: "SQL Orchestration", level: 98 }
    ],
    metadata: {
      deployment: "ACTIVE",
      clearance: "LEVEL_10",
      rank: "SCIENTIST"
    }
  }
];

export default function OurTeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeUnit, setActiveUnit] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionIndex = Math.min(Math.floor(latest * TEAM_UNITS.length * 1.05), TEAM_UNITS.length - 1);
    setActiveUnit(sectionIndex);
  });

  const currentUnit = TEAM_UNITS[activeUnit];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#F8F9FA]">
      
      {/* Sticky Orchestration Layer */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Column: Collective HUD */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-20 flex flex-col justify-center relative border-r border-[#072C55]/5 border-b lg:border-b-0 h-[45vh] lg:h-full">
            {/* Background Kinetic Viz */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="w-[600px] h-[600px] rounded-full border-[2px] border-dashed border-[#072C55]"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] rounded-full border-[1px] border-[#072C55]"
                />
            </div>

            <div className="relative z-10 w-full">
                <div className="flex items-center gap-4 mb-6 md:mb-10">
                    <div className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5210F8] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5210F8]"></span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#072C55]/40 uppercase tracking-[0.6em]">System Collective // Human Intel</span>
                </div>

                <div className="mb-8 md:mb-16">
                    <h2 className="text-4xl md:text-8xl lg:text-9xl font-black text-[#072C55] tracking-tighter leading-[0.85] mb-4 md:mb-8">
                        The <br />
                        <span className="text-[#5210F8]">Personnel.</span>
                    </h2>
                    <p className="text-base md:text-xl text-[#072C55]/50 font-medium max-w-md leading-relaxed">
                        We don't maintain a payroll of generalists. We deploy a collective of <strong className="text-[#072C55]">senior specialists</strong> optimized for the mission.
                    </p>
                </div>

                {/* Unit Local Navigation - Compact for Mobile */}
                <div className="flex lg:flex-col gap-3 md:gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                    {TEAM_UNITS.map((unit, i) => (
                        <div 
                            key={i}
                            className={`flex items-center gap-4 md:gap-6 transition-all duration-500 shrink-0 lg:shrink-1 ${activeUnit === i ? 'translate-x-0 lg:translate-x-4 opacity-100' : 'opacity-20 blur-[0.5px]'}`}
                        >
                            <span className="font-mono text-[10px] md:text-sm font-black text-[#5210F8]">{unit.id}</span>
                            <div className={`h-[1px] ${activeUnit === i ? 'w-10 md:w-20' : 'w-5 md:w-10'} bg-current transition-all duration-500`} style={{ color: unit.color }} />
                            <span className="font-black text-lg md:text-2xl text-[#072C55]">{unit.role.split(' ')[0]}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="absolute bottom-10 left-10 lg:left-20 font-mono text-[9px] font-bold text-[#072C55]/20 uppercase tracking-widest hidden lg:block">
                SYS_ORCH_VERSION_42.0.1 // READY_FOR_DEPLOYMENT
            </div>
        </div>

        {/* Right Column: Deployment Dossier */}
        <div className="w-full lg:w-1/2 bg-white relative p-6 md:p-12 lg:p-24 flex flex-col justify-center h-[55vh] lg:h-full overflow-y-auto">
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeUnit}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 w-full"
                >
                    <div className="flex items-start justify-between mb-8 md:mb-12">
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl ${currentUnit.bg} flex items-center justify-center border border-[#072C55]/5 shadow-sm`}>
                            <currentUnit.icon className={`w-7 h-7 md:w-9 md:h-9 ${currentUnit.accent}`} />
                        </div>
                        <div className="text-right">
                             <div className="font-mono text-[9px] md:text-[10px] font-black text-[#072C55]/30 uppercase tracking-[0.2em] mb-1">Clearance</div>
                             <div className="text-base md:text-lg font-black text-[#072C55]">{currentUnit.metadata.clearance}</div>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-10">
                        <div className={`font-mono text-[10px] md:text-xs font-black mb-2 uppercase tracking-[0.4em] ${currentUnit.accent}`}>/ {currentUnit.concept}</div>
                        <h3 className="text-3xl md:text-5xl font-black text-[#072C55] tracking-tight leading-none mb-4 md:mb-6">
                            {currentUnit.role}
                        </h3>
                        <p className="text-base md:text-lg text-[#072C55]/60 leading-relaxed border-l-4 border-[#072C55]/10 pl-4 md:pl-8 group-hover:border-[#5210F8] transition-colors">
                            {currentUnit.desc}
                        </p>
                    </div>

                    {/* Skill Affinity Matrix */}
                    <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                        <h4 className="font-mono text-[10px] font-black text-[#072C55]/40 uppercase tracking-[0.3em]">Competency_Spectrum</h4>
                        <div className="grid gap-4">
                            {currentUnit.skills.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[12px] font-black text-[#072C55] uppercase tracking-wider">{skill.name}</span>
                                        <span className="font-mono text-[10px] font-bold text-[#072C55]/40">{skill.level}%</span>
                                    </div>
                                    <div className="h-[2px] w-full bg-[#072C55]/5 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                                            className="h-full bg-current"
                                            style={{ color: currentUnit.color }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metadata Footer */}
                    <div className="pt-6 md:pt-10 border-t border-[#072C55]/5 grid grid-cols-2 gap-8">
                        <div>
                            <div className="font-mono text-[9px] font-black text-[#072C55]/30 uppercase tracking-widest mb-1">Deployment</div>
                            <div className="flex items-center gap-2">
                                <Zap size={14} className="text-[#00FF94]" />
                                <span className="text-sm font-black text-[#072C55]">{currentUnit.metadata.deployment}</span>
                            </div>
                        </div>
                        <div>
                            <div className="font-mono text-[9px] font-black text-[#072C55]/30 uppercase tracking-widest mb-1">Rank_Status</div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={14} className="text-[#5210F8]" />
                                <span className="text-sm font-black text-[#072C55]">{currentUnit.metadata.rank}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Immersive Corner Watermark */}
            <div className="absolute bottom-10 right-10 text-9xl font-black text-[#072C55]/[0.02] font-mono pointer-events-none select-none uppercase">
                {currentUnit.id}
            </div>
        </div>

      </div>

      {/* Global Specialist Network Block (Transition to next section) */}
      {/* <div className="relative h-screen bg-[#072C55] z-50 flex items-center overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none font-mono text-[15vw] font-black leading-none uppercase flex items-center justify-center text-white">
                SPECIALISTS
            </div>
            
            <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                         <div className="flex items-center gap-3 mb-8">
                            <Globe size={20} className="text-[#00FF94]" />
                            <span className="font-mono text-xs uppercase tracking-[0.4em] font-black text-white/40">Global_Support_Vector</span>
                         </div>
                         <h3 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none">
                            Augmented by <br />
                            <span className="text-[#00FF94]">15+ Specialists.</span>
                         </h3>
                         <p className="text-white/40 text-xl leading-relaxed max-w-xl">
                            Our core intelligence units are augmented by a curated network of niche elite—from TikTok specialized creators to technical SEO architects. We scale your team dynamically based on mission requirements.
                         </p>
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-12">
                        <div className="flex -space-x-8">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="w-20 h-20 rounded-full border-[6px] border-[#072C55] bg-white flex items-center justify-center relative group overflow-hidden transition-all hover:z-20 hover:scale-110 shadow-2xl">
                                    <div className="absolute inset-0 bg-[#5210F8] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <Fingerprint size={28} className="text-[#072C55] group-hover:text-white relative z-10 transition-colors" />
                                </div>
                            ))}
                        </div>
                        <button className="flex items-center gap-4 px-10 py-5 bg-[#5210F8] text-white rounded-2xl font-mono text-sm font-black uppercase tracking-widest hover:bg-[#00FF94] hover:text-[#072C55] transition-all group shadow-2xl">
                            Request Deployment Spec
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
      </div> */}
    </section>
  );
}
