"use client";

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Radio, Activity, Cpu, Database } from 'lucide-react';
import { ProjectData } from '@/lib/projects';

// Pseudo-random data ticker
const DataTicker = ({ value, label }: { value: string, label: string }) => {
    const [display, setDisplay] = useState(value);
    
    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.8) {
               setDisplay(Math.floor(Math.random() * 999).toString().padStart(3, '0'));
               setTimeout(() => setDisplay(value), 100);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [value]);

    return (
        <div className="flex flex-col">
            <span className="font-mono text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{label}</span>
            <span className="font-mono text-lg font-bold text-white tracking-widest">{display}</span>
        </div>
    );
};

export default function ProjectHero({ project }: { project: ProjectData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] overflow-hidden flex items-end bg-[#020617]">
      
      {/* Parallax Background Layer */}
      <motion.div 
         style={{ y: yBg }}
         className="absolute inset-0 z-0"
      >
         <motion.div 
            initial={{ scale: 1.2, filter: "blur(10px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="w-full h-full"
         >
            <img 
               src={project.heroImage} 
               alt={project.title} 
               className="w-full h-full object-cover opacity-60"
            />
         </motion.div>
         
         {/* Advanced Gradients */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-90" />
         <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 to-transparent opacity-60" />
         
         {/* Digital Noise & Scanlines */}
         <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay pointer-events-none" />
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
      </motion.div>

      {/* Hero Content */}
      <motion.div 
         style={{ y: yText, opacity: opacityText }}
         className="relative z-10 w-full max-w-[1600px] mx-auto px-6 pb-12 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
      >
          
          {/* Left: Main Titles */}
          <div className="md:col-span-8 space-y-8">
              
              {/* System Badge */}
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="flex flex-wrap items-center gap-4"
              >
                  <div className="pl-3 pr-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: project.color }}></span>
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: project.color }}></span>
                      </span>
                      <span className="text-[10px] md:text-xs font-mono font-bold text-white uppercase tracking-[0.2em]">
                        CASE_LOG // {project.year} // ESTABLISHED
                      </span>
                  </div>
              </motion.div>

              {/* Massive Title */}
              <div>
                  <div className="overflow-hidden">
                      <motion.h1 
                         initial={{ y: "100%" }}
                         animate={{ y: 0 }}
                         transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                         className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter leading-[0.8] mb-4 mix-blend-screen"
                      >
                          {project.title.toUpperCase()}
                      </motion.h1>
                  </div>
                  
                  {/* Category Subtitle */}
                  <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex items-center gap-4"
                  >
                        <div className="h-[1px] w-12 bg-white/30" />
                        <span className="text-xl md:text-2xl text-white/60 font-medium tracking-tight">
                            {project.category}
                        </span>
                  </motion.div>
              </div>

              {/* Abstract */}
              <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.8, delay: 1 }}
                 className="text-lg md:text-xl text-white/50 font-medium max-w-2xl leading-relaxed border-l-2 border-white/10 pl-6"
              >
                  {project.summary}
              </motion.p>
          </div>

          {/* Right: Data HUD */}
          <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end gap-12 h-full">
              
              {/* HUD Grid */}
              <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 1.2 }}
                 className="grid grid-cols-2 gap-x-8 gap-y-6 text-right bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm w-full md:w-auto"
              >
                  <div className="col-span-2 border-b border-white/10 pb-4 mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity size={14} className="text-[#00FF94]" />
                        <span className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Sys_Metrics</span>
                      </div>
                      <Radio size={14} className="text-white/40 animate-pulse" />
                  </div>
                  
                  <DataTicker label="Protocol_ID" value={`SYS_${project.year.slice(-2)}`} />
                  <DataTicker label="Sector" value="Enterprise" />
                  <DataTicker label="SLA_Uptime" value="99.9%" />
                  <DataTicker label="Latency" value="<20ms" />
                  
                  <div className="col-span-2 mt-2 pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-[10px] text-white/30 font-mono">
                          <span>ENCRYPTION: AES-256</span>
                          <span>STATUS: DEPLOYED</span>
                      </div>
                  </div>
              </motion.div>
              
              {/* Scroll Reminder */}
              <motion.div 
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                 className="hidden md:flex flex-col items-center gap-2"
              >
                 <span className="text-[9px] font-mono font-bold text-white/30 uppercase tracking-[0.3em] rotate-90 origin-left translate-x-4 mb-8">
                     Initiate_Scroll
                 </span>
                 <ArrowDown className="text-white w-5 h-5" />
              </motion.div>
          </div>

      </motion.div>

    </section>
  );
}
