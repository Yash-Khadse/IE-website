"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Lightbulb, Heart, ArrowUpRight, Plus } from "lucide-react";

export default function MissionVisionValues() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "01",
      title: "CLARITY",
      headline: "Clarity Over Noise.",
      desc: "We believe growth starts with clarity. Every decision, system, and solution we build is intentional, removing confusion and focusing on what truly drives impact.",
      icon: Eye,
      color: "from-[#5210F8]/25 to-[#5210F8]/40",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/60",
      stats: [
        { label: "Focus", value: "100%" },
        { label: "Confusion", value: "0%" }
      ]
    },
    {
      id: "02",
      title: "SYSTEMS",
      headline: "Systems Before Scale.",
      desc: "Scaling without structure leads to chaos. We prioritize building strong, connected systems first, so growth becomes stable, repeatable, and sustainable.",
      icon: Target,
      color: "from-[#5210F8]/10 to-[#5210F8]/20",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/40",
      stats: [
        { label: "Stability", value: "Max" },
        { label: "Chaos", value: "Min" }
      ]
    },
    {
      id: "03",
      title: "PURPOSE",
      headline: "Purposeful Design.",
      desc: "Design and technology are not about looking impressive they exist to solve real problems. We create only what adds value and moves the business forward.",
      icon: Lightbulb,
      color: "from-[#C47DFD]/25 to-[#C47DFD]/40",
      accent: "text-[#C47DFD]",
      border: "border-[#C47DFD]/60",
      stats: [
        { label: "Value", value: "High" },
        { label: "Fluff", value: "None" }
      ]
    },
    {
      id: "04",
      title: "PARTNER",
      headline: "Long-Term Partnership.",
      desc: "We don’t chase quick wins. We work as long-term partners, aligning with our clients’ goals and evolving alongside their business as it grows.",
      icon: Heart,
      color: "from-[#072C55]/10 to-[#072C55]/20",
      accent: "text-[#072C55]",
      border: "border-[#072C55]/40",
      stats: [
        { label: "Commitment", value: "Long" },
        { label: "Churn", value: "Low" }
      ]
    }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#F8F9FA] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#072C55] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#072C55]"></span>
                    </span>
                    <span className="text-[#072C55] font-mono text-xs uppercase tracking-[0.2em] font-bold">Our Principles</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#072C55]">Our Values</h2>
            </div>
            <p className="hidden md:block text-[#072C55]/50 text-right max-w-sm text-sm">
                The principles that shape our decisions, define how we work, and guide every system we build.
            </p>
        </div>

        {/* The Pillars (Accordion) */}
        <div className="flex flex-col lg:flex-row gap-4 h-[1000px] md:h-[800px] lg:h-[600px] mb-20">
            {pillars.map((pillar, index) => {
                const isActive = activePillar === index;
                
                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setActivePillar(index)}
                        className={`relative rounded-[2rem] overflow-hidden cursor-pointer border hover:border-[#072C55]/20 transition-all duration-500 ease-out bg-white shadow-sm ${isActive ? 'lg:flex-[3] flex-[3] ' + pillar.border : 'lg:flex-[1] flex-[1] border-transparent'}`}
                    >
                         {/* Background Gradient */}
                         <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-50`} />
                         
                         <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                             
                             {/* Top ID */}
                             <div className="flex justify-between items-start">
                                 <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#072C55] ${isActive ? 'scale-100' : 'scale-75 opacity-50'}`}>
                                     <pillar.icon size={20} />
                                 </div>
                                 <span className="font-mono text-xs font-bold text-[#072C55]/30">
                                     {pillar.id}
                                 </span>
                             </div>

                             {/* Middle Content (When Active) */}
                             <AnimatePresence mode="wait">
                                 {isActive ? (
                                     <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="space-y-6"
                                     >
                                         <h3 className="text-4xl md:text-5xl font-bold text-[#072C55] leading-none tracking-tight">
                                             {pillar.headline}
                                         </h3>
                                         <p className="text-lg text-[#072C55]/70 leading-relaxed max-w-lg">
                                             {pillar.desc}
                                         </p>
                                         
                                         {/* Stats Grid */}
                                         <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#072C55]/5">
                                             {pillar.stats.map((stat, s) => (
                                                 <div key={s}>
                                                     <div className={`text-2xl font-bold font-mono ${pillar.accent}`}>{stat.value}</div>
                                                     <div className="text-xs uppercase tracking-wider text-[#072C55]/50 font-bold">{stat.label}</div>
                                                 </div>
                                             ))}
                                         </div>
                                     </motion.div>
                                 ) : (
                                     /* Vertical Title (When Inactive - Desktop Only) */
                                     <div className="hidden lg:flex h-full items-center justify-center absolute inset-0 pointer-events-none">
                                         <motion.h3 
                                            layoutId={`title-${index}`}
                                            className="text-4xl font-bold text-[#072C55]/20 -rotate-90 whitespace-nowrap tracking-widest uppercase"
                                         >
                                             {pillar.title}
                                         </motion.h3>
                                     </div>
                                 )}
                             </AnimatePresence>
                             
                             {/* Mobile Title (When Inactive) */}
                             {!isActive && (
                                <div className="lg:hidden absolute bottom-8 left-8">
                                    <h3 className="text-2xl font-bold text-[#072C55]/40">{pillar.title}</h3>
                                </div>
                             )}

                             {/* Bottom Interaction Hint */}
                             <div className="flex justify-between items-end">
                                 <div className={`px-3 py-1 rounded-full border border-[#072C55]/10 bg-white/50 text-[10px] uppercase font-bold text-[#072C55] tracking-widest ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                     {pillar.title} Value
                                 </div>
                                 <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[#072C55] text-white rotate-45' : 'bg-white text-[#072C55] hover:bg-[#072C55] hover:text-white'}`}>
                                     {isActive ? <Plus size={20} /> : <ArrowUpRight size={20} />}
                                 </button>
                             </div>

                         </div>
                    </motion.div>
                );
            })}
        </div>



      </div>
    </section>
  );
}
