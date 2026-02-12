"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Lightbulb, Heart, ArrowUpRight, Plus } from "lucide-react";

import { missionVisionValuesContent } from "@/data/about/mission";

export default function MissionVisionValues() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = missionVisionValuesContent.pillars;

  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5210F8]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C47DFD]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
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
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px] mb-20">
            {pillars.map((pillar, index) => {
                const isActive = activePillar === index;
                
                return (
                    <motion.div
                        key={index}
                        layout
                        onClick={() => setActivePillar(index)}
                        className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isActive ? `lg:flex-[4] border-2 ${pillar.border}` : 'bg-[#F8F9FF] border-[#5210F8]/5 lg:flex-[1] opacity-70 hover:opacity-100'}
                        lg:h-auto h-auto w-full group`}
                    >
                         {/* Background Gradient */}
                         <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ${isActive ? pillar.color : 'bg-white'}`} />
                         <div className={`absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat ${isActive ? '' : 'hidden'}`} />
                         
                         {/* =======================
                            DESKTOP LAYOUT 
                            ======================= */}
                         <div className="hidden lg:flex flex-col justify-between h-full p-10 relative z-10">
                             
                             {/* Top: Icon & ID */}
                             <div className="flex justify-between items-start">
                                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 ${isActive ? 'bg-white text-[#5210F8]' : 'bg-[#072C55]/5 text-[#072C55]/40'}`}>
                                      <pillar.icon size={28} />
                                  </div>
                                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-[#072C55]/40' : 'text-[#072C55]/20'}`}>
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
                                          <h3 className="text-5xl font-bold text-[#072C55] leading-[0.9] tracking-tight">
                                              {pillar.headline}
                                          </h3>
                                          <p className="text-xl text-[#072C55]/70 font-medium leading-relaxed max-w-lg">
                                              {pillar.desc}
                                          </p>
                                          
                                          {/* Stats Grid */}
                                          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#072C55]/10">
                                              {pillar.stats.map((stat, s) => (
                                                  <div key={s}>
                                                      <div className={`text-3xl font-black font-mono tracking-tighter ${pillar.accent}`}>{stat.value}</div>
                                                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#072C55]/50 font-bold mt-1">{stat.label}</div>
                                                  </div>
                                              ))}
                                          </div>
                                      </motion.div>
                                  ) : (
                                      <div key="title" className="h-full flex items-center justify-center absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100">
                                          <motion.h3 
                                             layoutId={`title-${index}`}
                                             className="text-4xl font-bold text-[#072C55]/10 -rotate-90 whitespace-nowrap tracking-widest uppercase group-hover:text-[#072C55]/30 group-hover:scale-105 transition-all duration-300"
                                          >
                                              {pillar.title}
                                          </motion.h3>
                                      </div>
                                  )}
                             </AnimatePresence>

                             {/* Bottom: Interaction Hint */}
                             <div className={`flex justify-between items-end mt-auto ${!isActive ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                                 <div className="px-4 py-2 rounded-full border border-[#072C55]/10 bg-white/50 text-[10px] uppercase font-bold text-[#072C55] tracking-[0.2em]">
                                     {pillar.title} Core
                                 </div>
                                 <div className="w-12 h-12 rounded-full bg-[#072C55] text-white flex items-center justify-center shadow-xl rotate-45 transform hover:scale-110 transition-transform">
                                     <Plus size={24} />
                                 </div>
                             </div>
                         </div>
 
 
                         {/* =======================
                            MOBILE LAYOUT 
                            ======================= */}
                         <div className="lg:hidden flex flex-col p-8 relative z-10 w-full transition-colors duration-500">
                             {/* Mobile Header */}
                             <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-5">
                                     <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-md ${isActive ? 'bg-white/20 text-white' : 'bg-[#072C55]/5 text-[#072C55]'}`}>
                                         <pillar.icon size={24} />
                                     </div>
                                     <h3 className={`text-2xl font-bold tracking-tight ${isActive ? 'text-white' : 'text-[#072C55]'}`}>
                                        {pillar.title}
                                     </h3>
                                </div>
                                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-white text-[#072C55] border-white rotate-45' : 'bg-white border-[#072C55]/10 text-[#072C55]'}`}>
                                    <Plus size={20} />
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
                                            <h4 className="text-3xl font-bold text-white leading-tight">
                                                {pillar.headline}
                                            </h4>
                                            <p className="text-lg text-white/70 leading-relaxed font-medium">
                                                {pillar.desc}
                                            </p>
                                            
                                            {/* Mobile Stats */}
                                            <div className="grid grid-cols-2 gap-4 pt-6 mt-4 border-t border-white/20">
                                                {pillar.stats.map((stat, s) => (
                                                     <div key={s}>
                                                         <div className="text-2xl font-black font-mono text-white tracking-tighter">{stat.value}</div>
                                                         <div className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-bold">{stat.label}</div>
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
