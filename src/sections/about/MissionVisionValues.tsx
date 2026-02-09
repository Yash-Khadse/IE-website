"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, ShieldCheck, Activity, Lightbulb, BarChart3, Heart, ArrowUpRight, Plus } from "lucide-react";

export default function MissionVisionValues() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      id: "01",
      title: "MISSION",
      headline: "Engineer Growth.",
      desc: "We don't just spend budget. We build predictable revenue engines. By replacing guesswork with engineered systems, we turn marketing into a mathematical certainty.",
      icon: Target,
      color: "from-[#5210F8]/25 to-[#5210F8]/40",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/60",
      stats: [
        { label: "Precision", value: "100%" },
        { label: "Waste", value: "0%" }
      ]
    },
    {
      id: "02",
      title: "VISION",
      headline: "The Growth OS.",
      desc: "To become the operating system for ambitious brands. A world where every marketing dollar is an investment quantified by real-time data and clear ROI.",
      icon: Eye,
      color: "from-[#C47DFD]/25 to-[#C47DFD]/40",
      accent: "text-[#C47DFD]",
      border: "border-[#C47DFD]/60",
      stats: [
        { label: "Clarity", value: "High" },
        { label: "Scale", value: "Inf" }
      ]
    },
    {
      id: "03",
      title: "PROMISE",
      headline: "Radical Truth.",
      desc: "Transparency is our currency. If we don't see a path to profitable growth, we don't take the project. We trade in facts, not fluff.",
      icon: ShieldCheck,
      color: "from-[#00CC76]/25 to-[#00CC76]/40",
      accent: "text-[#00CC76]",
      border: "border-[#00CC76]/60",
      stats: [
        { label: "Trust", value: "Max" },
        { label: "Hidden Fees", value: "None" }
      ]
    }
  ];

  const values = [
    { icon: Activity, label: "Bias for Action", sub: "Speed wins." },
    { icon: Lightbulb, label: "First Principles", sub: "Reason up." },
    { icon: BarChart3, label: "Revenue First", sub: "Impact over ego." },
    { icon: Heart, label: "Human Centric", sub: "People buy." }
  ];

  return (
    <section className="relative py-24 bg-[#F8F9FA] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 flex items-end justify-between">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#072C55] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#072C55]"></span>
                    </span>
                    <span className="text-[#072C55] font-mono text-xs uppercase tracking-[0.2em] font-bold">System Architecture</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#072C55]">The Core</h2>
            </div>
            <p className="hidden md:block text-[#072C55]/50 text-right max-w-sm text-sm">
                Interact with the pillars to explore our foundational protocols.
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
                                     {pillar.title} Protocol
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

        {/* Values Footer */}
        <div className="border-t border-[#072C55]/10 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {values.map((v, i) => (
                    <div key={i} className="group flex items-start gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default">
                        <div className="mt-1 p-2 rounded-lg bg-white border border-[#072C55]/10 text-[#072C55] group-hover:scale-110 transition-transform">
                            <v.icon size={16} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#072C55] text-sm">{v.label}</h4>
                            <p className="text-[#072C55]/50 text-xs font-mono mt-1">{v.sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
