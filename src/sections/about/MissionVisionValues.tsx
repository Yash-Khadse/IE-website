"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Lightbulb, Heart, ArrowUpRight, Plus } from "lucide-react";

import { missionVisionValuesContent } from "@/data/about/mission";

export default function MissionVisionValues() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = missionVisionValuesContent.pillars;

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
                    <span className="text-[#072C55] font-mono text-xs uppercase tracking-[0.2em] font-bold">{missionVisionValuesContent.header.badge}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#072C55]">{missionVisionValuesContent.header.title}</h2>
            </div>
            <p className="hidden md:block text-[#072C55]/50 text-right max-w-sm text-sm">
                {missionVisionValuesContent.header.description}
            </p>
        </div>

        {/* The Pillars (Accordion) */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px] mb-20">
            {pillars.map((pillar, index) => {
                const isActive = activePillar === index;
                
                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setActivePillar(index)}
                        className={`relative rounded-[2rem] overflow-hidden cursor-pointer bg-white shadow-sm border transition-all duration-500 ease-out
                        ${isActive ? 'border-[#072C55]/60 lg:flex-[3]' : 'border-transparent lg:flex-[1]'}
                        lg:h-auto h-auto w-full group`}
                    >
                         {/* Background Gradient (Shared) */}
                         <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-50`} />
                         
                         {/* =======================
                            DESKTOP LAYOUT 
                            (Hidden on Mobile)
                            ======================= */}
                         <div className="hidden lg:flex flex-col justify-between h-full p-8 relative z-10">
                             
                             {/* Top: Icon & ID */}
                             <div className="flex justify-between items-start">
                                 <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#072C55] transition-all duration-300 ${isActive ? 'scale-100' : 'scale-75 opacity-50'}`}>
                                     <pillar.icon size={20} />
                                 </div>
                                 <span className="font-mono text-xs font-bold text-[#072C55]/30">
                                     {pillar.id}
                                 </span>
                             </div>

                             {/* Middle: Content or Vertical Title */}
                             <AnimatePresence mode="wait">
                                 {isActive ? (
                                     <motion.div 
                                        key="content"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.1 }}
                                        className="space-y-6 mt-8"
                                     >
                                         <h3 className="text-5xl font-bold text-[#072C55] leading-none tracking-tight">
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
                                     <div key="title" className="h-full flex items-center justify-center absolute inset-0 pointer-events-none">
                                         <motion.h3 
                                            layoutId={`title-${index}`}
                                            className="text-4xl font-bold text-[#072C55]/20 -rotate-90 whitespace-nowrap tracking-widest uppercase"
                                         >
                                             {pillar.title}
                                         </motion.h3>
                                     </div>
                                 )}
                             </AnimatePresence>

                             {/* Bottom: Interaction Hint */}
                             <div className={`flex justify-between items-end mt-auto ${!isActive ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                                 <div className="px-3 py-1 rounded-full border border-[#072C55]/10 bg-white/50 text-[10px] uppercase font-bold text-[#072C55] tracking-widest">
                                     {pillar.title} Value
                                 </div>
                                 <button className="w-10 h-10 rounded-full bg-[#072C55] text-white flex items-center justify-center rotate-45">
                                     <Plus size={20} />
                                 </button>
                             </div>
                         </div>


                         {/* =======================
                            MOBILE LAYOUT 
                            (Vertical Accordion)
                            ======================= */}
                         <div className="lg:hidden flex flex-col p-6 relative z-10 w-full">
                             {/* Mobile Header */}
                             <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-4">
                                     <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#072C55]`}>
                                         <pillar.icon size={20} />
                                     </div>
                                     <h3 className="text-xl font-bold text-[#072C55] tracking-tight">
                                        {pillar.title}
                                     </h3>
                                </div>
                                <div className={`w-8 h-8 rounded-full border border-[#072C55]/10 flex items-center justify-center text-[#072C55] transition-transform duration-300 ${isActive ? 'bg-[#072C55] text-white rotate-45' : 'bg-white'}`}>
                                    <Plus size={16} />
                                </div>
                             </div>

                             {/* Mobile Expandable Body */}
                             <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-6 space-y-4">
                                            <h4 className="text-2xl font-bold text-[#072C55] leading-tight">
                                                {pillar.headline}
                                            </h4>
                                            <p className="text-base text-[#072C55]/70 leading-relaxed">
                                                {pillar.desc}
                                            </p>
                                            
                                            {/* Mobile Stats */}
                                            <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-[#072C55]/10">
                                                {pillar.stats.map((stat, s) => (
                                                     <div key={s}>
                                                         <div className={`text-xl font-bold font-mono ${pillar.accent}`}>{stat.value}</div>
                                                         <div className="text-[10px] uppercase tracking-wider text-[#072C55]/50 font-bold">{stat.label}</div>
                                                     </div>
                                                 ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                             </AnimatePresence>
                         </div>

                    </motion.div>
                );
            })}
        </div>



      </div>
    </section>
  );
}
