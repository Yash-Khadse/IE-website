"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Target, Zap, ArrowRight, Fingerprint, TrendingUp, Sparkles, Activity } from "lucide-react";

import { ourStoryContent } from "@/data/about/story";

export default function OurStory() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Parallax logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative py-16 md:py-32 bg-[#F8F9FA] overflow-hidden text-[#072C55]">
      
      {/* Light Mode Grid & Background */}
      <div className="absolute inset-0 pointer-events-none">
          {/* Light Mode Grid & Background removed */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#E0CCFD]/40 to-transparent rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#D6E4FF]/40 to-transparent rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* --- Left Column: Narrative --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Tag */}
            <div className="flex items-center gap-3 mb-8">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5210F8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5210F8]"></span>
                </span>
                <span className="text-[#5210F8] font-mono text-xs uppercase tracking-[0.2em] font-bold">{ourStoryContent.badge}</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.95] tracking-tight">
              {ourStoryContent.title.line1}<br />
              <span className="relative inline-block text-[#5210F8]">
                {ourStoryContent.title.highlight}
                <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-[#C47DFD]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h2>

            <div className="space-y-6 text-base md:text-xl text-[#072C55]/70 leading-relaxed font-normal">
              <p>
                {ourStoryContent.paragraphs[0]}
              </p>
              
              <p className="border-l-4 border-[#5210F8] pl-6 py-1 italic font-medium text-[#072C55]">
                "{ourStoryContent.quote}"
              </p>
 
              <p>
                {ourStoryContent.paragraphs[1].split(ourStoryContent.highlightLabel)[0]}
                <span className="bg-[#E0CCFD]/50 px-1 rounded text-[#5210F8] font-bold whitespace-nowrap md:whitespace-normal">{ourStoryContent.highlightLabel}</span>
                {ourStoryContent.paragraphs[1].split(ourStoryContent.highlightLabel)[1]}
              </p>
            </div>

          </motion.div>
          
          {/* --- Right Column: Visual System (Light Mode) --- */}
          <motion.div 
            style={{ y, rotate }}
            className="relative lg:h-[700px] flex items-center justify-center perspective-1000"
          >
            {/* Glass Card Container */}
            <div className="relative w-full aspect-[4/5] max-w-[500px] bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(7,44,85,0.1)] overflow-hidden p-8 flex flex-col justify-between">
                
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-xs font-mono uppercase tracking-widest text-[#072C55]/40 mb-1">{ourStoryContent.statsCard.statusLabel}</div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-bold text-[#072C55]">{ourStoryContent.statsCard.activeLabel}</span>
                        </div>
                    </div>
                    <Fingerprint className="text-[#072C55]/10 w-12 h-12" />
                </div>

                {/* Central Viz */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]">
                    <div className="absolute inset-0 border-2 border-[#5210F8]/10 rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute inset-4 border border-[#5210F8]/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative z-10 p-6 bg-white rounded-2xl shadow-xl flex flex-col items-center border border-[#5210F8]/10">
                            <Rocket className="w-12 h-12 text-[#5210F8] mb-2" />
                            <div className="text-2xl font-black text-[#072C55]">{ourStoryContent.statsCard.growthValue}</div>
                            <div className="text-[10px] uppercase font-bold text-[#072C55]/40">{ourStoryContent.statsCard.growthDesc}</div>
                        </div>
                    </div>
                    
                    {/* Orbiting Elements */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#C47DFD]">
                            <Sparkles size={14} />
                        </div>
                    </motion.div>
                </div>

                {/* Footer Graph */}
                <div className="relative h-24 mt-auto">
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#072C55]/10" />
                    <div className="flex items-end justify-between h-full px-2 gap-2">
                        {ourStoryContent.statsCard.graphData.map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ delay: i * 0.05, duration: 0.5, ease: "backOut" }}
                                className="w-full bg-[#5210F8] opacity-20 hover:opacity-100 transition-opacity rounded-t-sm"
                            />
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E0CCFD]/50 to-transparent rounded-bl-[4rem]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#D6E4FF]/50 to-transparent rounded-tr-[4rem]" />
            </div>

            

          </motion.div>
        </div>
      </div>
    </section>
  );
}
