"use client";
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Quote, BarChart3, Radio } from 'lucide-react';
import { CometCard } from "@/components/ui/comet-card";

const VoiceVisualizer = () => (
  <div className="flex items-center gap-0.5 h-4 ml-3 opacity-80">
    {[1, 2, 3, 4, 5].map((i) => (
      <motion.div
        key={i}
        className="w-0.5 bg-fooror-purple-light/80 rounded-full"
        animate={{
          height: ["20%", "80%", "30%"],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 0.6 + Math.random() * 0.4,
          repeat: Infinity,
          repeatType: "mirror",
          delay: i * 0.05,
          ease: "easeInOut"
        }}
        style={{ height: '40%' }}
      />
    ))}
  </div>
);

const QuoteSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xRight = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);
  const xLeft = useTransform(scrollYProgress, [0, 1], ['10%', '-20%']);
  const rotateVar = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-48 bg-background min-h-[60vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden border-t border-border"
    >
      {/* Background: Geometric Tech Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute w-full h-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fooror-purple/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Huge Background Text - Row 1 (Moves Right) */}
      <motion.div
        style={{ x: xRight }}
        className="absolute top-[10%] left-[-20%] w-[140%] flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0"
      >
        <span className="text-[12vw] font-black leading-none tracking-tighter text-foreground mr-8 font-outline-2">
          STRATEGY // GROWTH // PERFORMANCE
        </span>
      </motion.div>

      {/* Huge Background Text - Row 2 (Moves Left) */}
      <motion.div
        style={{ x: xLeft }}
        className="absolute bottom-[10%] left-[-20%] w-[140%] flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0"
      >
         <span className="text-[12vw] font-black leading-none tracking-tighter text-foreground ml-8 font-outline-2">
          MARKETING // DATA // RESULTS
        </span>
      </motion.div>

      <div className="relative z-10 w-full px-4 flex justify-center max-w-[1100px]">
        <CometCard className="w-full">
            <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-card/50 backdrop-blur-xl border border-border rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group"
          >
            {/* Animated Scanline Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent bg-[length:100%_4px] animate-scanline pointer-events-none" />

            {/* Decorative Corner Accents */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-fooror-purple/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-fooror-purple/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100" />

            {/* Quote Icon Background */}
            <div className="absolute -top-10 -right-10 text-fooror-purple opacity-[0.07] transform rotate-12 scale-150 pointer-events-none">
               <Quote size={300} strokeWidth={0} fill="currentColor" />
            </div>
            
            <div className="relative z-10 flex flex-col md:items-center md:text-center">
                {/* Badge with Visualizer */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-widest mb-10 w-fit mx-auto shadow-[0_0_15px_-3px_rgba(82,16,248,0.3)]">
                    <Radio size={14} className="animate-pulse" />
                    <span>GROWTH_INSIGHT_01</span>
                    <VoiceVisualizer />
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-4xl lg:text-[2.75rem] font-medium text-foreground leading-[1.25] mb-12 tracking-tight">
                    "Scale is not a destination; it's a <span className="relative inline-block text-primary font-semibold">
                        <span className="relative z-10">strategic process</span>
                        <motion.span 
                            initial={{ width: "0%" }}
                            animate={isInView ? { width: "100%" } : {}}
                            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                            className="absolute bottom-1 left-0 h-[0.3em] bg-primary/30 -z-10 -rotate-1 skew-x-12" 
                        />
                    </span>. We build the marketing engines that allow digital portfolios to scale, adapt, and dominate without <span className="underline decoration-primary decoration-2 underline-offset-8 decoration-wavy">friction</span>."
                    </h3>
                </div>

                {/* Author Profile */}
                <div className="flex flex-col md:flex-row items-center gap-6 border-t border-white/5 pt-10 w-full md:w-auto px-10">
                  <div className="relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary/50 p-1 relative z-10 bg-background">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                            alt="Dima Diuh"
                            className="w-full h-full object-cover rounded-full opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                      </div>
                      {/* Architectural Rings */}
                      <div className="absolute inset-0 -m-2 border border-border rounded-full animate-spin-slow-reverse" />
                      <div className="absolute inset-0 -m-1 border-t border-r border-primary/30 rounded-full animate-spin-slow" />
                  </div>
                  
                  <div className="flex flex-col text-center md:text-left gap-1">
                    <span className="font-bold text-foreground text-xl tracking-wide">Dima Diuh</span>
                    <div className="flex items-center gap-2 text-sm font-mono text-primary uppercase tracking-wider">
                        <BarChart3 size={14} />
                        <span>Growth Director // Strategist</span>
                    </div>
                  </div>
                </div>
            </div>

          </motion.div>
        </CometCard>
      </div>
    </section>
  );
};

export default QuoteSection;
