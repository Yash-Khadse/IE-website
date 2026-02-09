"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Layers, 
  Zap, 
  BarChart3,
  TrendingUp, 
  CheckCircle2,
  ChevronDown
} from "lucide-react";

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      phase: "DISCOVERY",
      title: "Deep Recon.",
      desc: "We autopsy your current setup. No assumptions. Only data. We build a 90-day roadmap based on mathematical truth.",
      icon: Search,
      bg: "bg-[#072C55]",
      text: "text-white",
      accent: "text-[#5210F8]",
      border: "border-white/10"
    },
    {
      id: "02",
      phase: "BUILD",
      title: "Architecture.",
      desc: "Constructing the growth engine. Pixel-perfect tracking, high-velocity landing pages, and performance creative assets.",
      icon: Layers,
      bg: "bg-[#F8F9FA]",
      text: "text-[#072C55]",
      accent: "text-[#C47DFD]",
      border: "border-[#072C55]/10"
    },
    {
      id: "03",
      phase: "OPTIMIZE",
      title: "Calibration.",
      desc: "Scientific iteration. We launch campaigns and iterate weekly. We kill losers ruthlessly and scale winners aggressively.",
      icon: Zap,
      bg: "bg-[#072C55]",
      text: "text-white",
      accent: "text-[#00FF94]",
      border: "border-white/10"
    },
    {
      id: "04",
      phase: "SCALE",
      title: "Velocity.",
      desc: "Pouring fuel on the fire. Once unit economics are proven, we execute aggressive budget scaling across multiple channels.",
      icon: BarChart3,
      bg: "bg-[#F8F9FA]",
      text: "text-[#072C55]",
      accent: "text-[#FBBF24]",
      border: "border-[#072C55]/10"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Precise phase detection
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map 0-1 to step indices with a slight buffer at the end
    const index = Math.min(Math.floor(latest * steps.length * 1.1), steps.length - 1);
    if (index !== activeStep) setActiveStep(index);
  });

  const currentStep = steps[activeStep];

  return (
    <section ref={containerRef} className="relative h-[300vh] w-full">
      
      {/* Sticky Container - Pinned to absolute top for max robustness */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
          
          {/* Dynamic Background Panel */}
          <div className={`absolute inset-0 transition-colors duration-700 ease-in-out ${currentStep.bg}`} />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ 
                 backgroundImage: `linear-gradient(${currentStep.text === 'text-white' ? '#ffffff' : '#072C55'} 1px, transparent 1px), linear-gradient(90deg, ${currentStep.text === 'text-white' ? '#ffffff' : '#072C55'} 1px, transparent 1px)`, 
                 backgroundSize: '40px 40px' 
               }} />

          {/* Header Offset Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row h-full max-w-[1400px] mx-auto p-6 md:p-12 md:pt-32 items-center">
               
               {/* Left: Headline & Phase Indicator */}
               <div className="w-full md:w-1/2 flex flex-col justify-center h-full relative mb-8 md:mb-0">
                   <div className="mb-6 md:mb-10">
                       <AnimatePresence mode="wait">
                           <motion.div
                               key={activeStep}
                               initial={{ opacity: 0, x: -20 }}
                               animate={{ opacity: 1, x: 0 }}
                               exit={{ opacity: 0, x: 20 }}
                               transition={{ duration: 0.4 }}
                           >
                               <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${currentStep.border} ${currentStep.text === 'text-white' ? 'bg-white/5' : 'bg-[#072C55]/5'}`}>
                                   <span className={`w-2 h-2 rounded-full animate-pulse ${currentStep.text === 'text-white' ? 'bg-white' : 'bg-[#072C55]'}`} />
                                   <span className={`font-mono text-[10px] md:text-sm font-bold uppercase tracking-widest ${currentStep.text}`}>
                                       Phase {currentStep.id} // {currentStep.phase}
                                   </span>
                               </div>
                           </motion.div>
                       </AnimatePresence>
                   </div>

                   <div className="overflow-hidden">
                       <AnimatePresence mode="wait">
                           <motion.h2
                               key={activeStep}
                               initial={{ y: "100%", opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               exit={{ y: "-100%", opacity: 0 }}
                               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                               className={`text-4xl md:text-8xl lg:text-9xl font-black ${currentStep.text} tracking-tighter leading-[0.85]`}
                           >
                               {currentStep.title} <span className={`${currentStep.accent}`}>_</span>
                           </motion.h2>
                       </AnimatePresence>
                   </div>

                   {/* Scroll Indicator Hint */}
                   <div className="absolute bottom-4 left-0 hidden md:flex items-center gap-4 opacity-30">
                        <div className={`w-[2px] h-12 bg-current ${currentStep.text}`} />
                        <span className={`font-mono text-[10px] uppercase font-bold tracking-widest ${currentStep.text}`}>Scroll To Advance</span>
                   </div>
               </div>

               {/* Right: Description Card */}
               <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-20 relative">
                   <AnimatePresence mode="wait">
                       <motion.div
                           key={activeStep}
                           initial={{ opacity: 0, scale: 0.95, y: 30 }}
                           animate={{ opacity: 1, scale: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 1.05, y: -30 }}
                           transition={{ duration: 0.5, ease: "easeOut" }}
                           className={`p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] ${currentStep.text === 'text-white' ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-white border border-[#072C55]/10 shadow-2xl'}`}
                       >
                           <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-8 ${currentStep.text === 'text-white' ? 'bg-white text-[#072C55]' : 'bg-[#072C55] text-white'} shadow-lg hover:rotate-3 transition-transform cursor-default`}>
                               <currentStep.icon size={32} />
                           </div>
                           
                           <p className={`text-xl md:text-3xl lg:text-4xl font-medium leading-tight md:leading-[1.15] ${currentStep.text} opacity-90 mb-8 md:mb-12`}>
                               {currentStep.desc}
                           </p>

                           <div className={`pt-6 md:pt-8 border-t ${currentStep.border} flex justify-between items-center`}>
                               <div className="flex flex-col">
                                   <span className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] ${currentStep.text} opacity-30 mb-1`}>Process Status</span>
                                   <span className={`font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest ${currentStep.text} opacity-70`}>Core Operational</span>
                               </div>
                               <button className={`w-10 h-10 rounded-full border ${currentStep.border} flex items-center justify-center ${currentStep.text} opacity-50 hover:opacity-100 transition-opacity`}>
                                   <ChevronDown size={18} />
                               </button>
                           </div>
                       </motion.div>
                   </AnimatePresence>
               </div>
          </div>

          {/* Global Progress Bar Tracking */}
          <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-current opacity-[0.05]" />
          <motion.div 
               style={{ scaleX: scrollYProgress, transformOrigin: "0%" }} 
               className={`absolute bottom-0 left-0 w-full h-1 md:h-2 z-50 ${currentStep.id === '03' ? 'bg-[#00FF94]' : currentStep.accent.replace('text-', 'bg-')} transition-colors duration-500 shadow-[0_0_20px_rgba(82,16,248,0.3)]`} 
          />

      </div>

      {/* Side Narrative Markers (Visual guides to scroll) */}
      <div className="absolute top-0 right-4 md:right-10 h-screen flex flex-col justify-center items-center gap-3 md:gap-4 z-50 pointer-events-none opacity-40">
          {steps.map((_, i) => (
              <motion.div 
                  key={i} 
                  animate={{ 
                    height: activeStep === i ? 40 : 8,
                    backgroundColor: activeStep === i ? (currentStep.text === 'text-white' ? '#fff' : '#072C55') : (currentStep.text === 'text-white' ? 'rgba(255,255,255,0.2)' : 'rgba(7,44,85,0.1)')
                  }}
                  className="w-1 rounded-full transition-colors duration-500" 
              />
          ))}
      </div>

    </section>
  );
}
