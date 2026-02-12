"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  Lock, 
  Terminal, 
  Database, 
  ArrowUpRight, 
  ChevronRight,
  Scan,
  Workflow,
  Fingerprint
} from "lucide-react";

import { aboutFinalCTAContent } from "@/data/about/cta";

export default function AboutFinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLogic, setActiveLogic] = useState(0);

  const strategyStream = aboutFinalCTAContent.strategyStream;

  useEffect(() => {
    const interval = setInterval(() => {
        setActiveLogic(prev => (prev + 1) % strategyStream.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [strategyStream.length]);

  return (
    <section ref={containerRef} className="relative py-16 md:py-32 bg-[#F8F9FA] overflow-hidden flex items-center justify-center min-h-[50vh] md:min-h-[70vh]">
      
      {/* Light Mode System Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Neutral Neural Grid removed */}
          
          {/* Geometric Accents */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#072C55]/10" />
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#072C55]/10" />

          {/* Large Architectural Watermark */}
          <div className="absolute top-10 right-10 flex flex-col items-end opacity-[0.02] select-none">
               <span className="font-mono text-[12vw] font-black text-[#072C55] leading-none">INITIALIZE</span>
               <span className="font-mono text-[12vw] font-black text-[#072C55] leading-none">ALPHA</span>
          </div>

          {/* Fingerprint Detail */}
          <div className="absolute -bottom-20 -left-20 opacity-[0.03] text-[#072C55]">
               <Fingerprint size={500} strokeWidth={0.5} />
          </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        <div className="flex flex-col items-center text-center">
            
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center"
            >
                {/* Campaign Status HUD - Light Mode */}
                <div className="flex flex-col items-center gap-6 mb-12">
                     <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-[#072C55]/10 bg-white shadow-xl">
                         <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5210F8] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5210F8]"></span>
                         </span>
                         <div className="h-4 w-[1px] bg-[#072C55]/10" />
                         <span className="font-mono text-[10px] font-black text-[#072C55] uppercase tracking-[0.6em]">
                             {aboutFinalCTAContent.header.statusBadge}
                         </span>
                     </div>
                     
                     <div className="h-10 overflow-hidden flex items-center justify-center">
                          <motion.span 
                            key={activeLogic}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="font-mono text-[11px] font-black text-[#5210F8] uppercase tracking-widest bg-[#5210F8]/5 px-4 py-1 rounded-lg border border-[#5210F8]/10"
                          >
                             {strategyStream[activeLogic]}
                          </motion.span>
                     </div>
                </div>

                <h2 className="text-5xl md:text-8xl lg:text-[8rem] font-black text-[#072C55] tracking-tighter mb-6 md:mb-8 leading-[0.8] md:leading-[0.8]">
                    {aboutFinalCTAContent.header.title.row1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5210F8] via-[#C47DFD] to-[#072C55]">
                        {aboutFinalCTAContent.header.title.highlight}
                    </span>
                </h2>

                <p className="text-lg md:text-2xl text-[#072C55]/40 font-medium max-w-3xl mx-auto mb-10 md:mb-16 leading-tight px-4">
                    {aboutFinalCTAContent.header.description}
                </p>

                {/* Tactical Action Grid - Light Contrast */}
                <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 mb-16 w-full justify-center px-6">
                    <button className="h-16 md:h-20 w-full md:w-auto px-8 md:px-12 rounded-2xl md:rounded-[2.5rem] bg-[#072C55] text-white hover:bg-[#5210F8] text-base md:text-lg font-black uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(7,44,85,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(82,16,248,0.4)] group flex items-center justify-center md:justify-start gap-4 md:gap-6 overflow-hidden relative">
                         <span className="relative z-10 flex items-center gap-4">
                             {aboutFinalCTAContent.actions.primary.label}
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-500" />
                         </span>
                         <div className="absolute top-0 left-0 w-full h-[3px] bg-[#00FF94]/30" />
                    </button>
 
                    <button className="h-16 md:h-20 w-full md:w-auto px-8 md:px-12 rounded-2xl md:rounded-[2.5rem] bg-white border-2 border-[#072C55]/10 text-[#072C55] hover:border-[#5210F8] hover:text-[#5210F8] text-base md:text-lg font-black uppercase tracking-[0.2em] transition-all duration-500 group flex items-center justify-center md:justify-start gap-4 md:gap-6 shadow-sm hover:shadow-xl">
                         {aboutFinalCTAContent.actions.secondary.label}
                         <Scan className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Growth Prerequisite Matrix - Light Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl border-t border-[#072C55]/10 pt-16 px-6">
                    {aboutFinalCTAContent.prerequisites.map((item: any, i: number) => (
                        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left group cursor-default border-b border-[#072C55]/5 md:border-b-0 pb-8 md:pb-0 last:border-b-0">
                             <div className="flex items-center gap-3 mb-4">
                                <item.icon size={20} className="text-[#5210F8] group-hover:text-[#C47DFD] transition-colors" />
                                <span className="font-mono text-[10px] font-black text-[#072C55]/30 uppercase tracking-[0.4em]">{item.label}</span>
                             </div>
                             <div className="text-2xl md:text-3xl font-black text-[#072C55] mb-2 tracking-tight group-hover:translate-x-2 transition-transform">{item.val}</div>
                             <p className="text-[10px] md:text-xs font-bold text-[#072C55]/20 uppercase tracking-widest">{item.detail}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

      </div>

      {/* Corporate Metadata Overlay */}
      <div className="absolute bottom-10 left-10 flex items-center gap-4 opacity-20">
          <Terminal size={14} className="text-[#072C55]" />
          <span className="font-mono text-[9px] font-black text-[#072C55] uppercase tracking-[0.5em]">{aboutFinalCTAContent.footer.terminal}</span>
      </div>
      <div className="absolute bottom-10 right-10 flex items-center gap-4 opacity-20 text-right">
          <span className="font-mono text-[9px] font-black text-[#072C55] uppercase tracking-[0.5em]">{aboutFinalCTAContent.footer.coordinate}</span>
          <Activity size={14} className="text-[#072C55]" />
      </div>

    </section>
  );
}
