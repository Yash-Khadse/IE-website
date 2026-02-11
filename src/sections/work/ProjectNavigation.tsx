"use client";

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ProjectData } from '@/lib/projects';

export default function ProjectNavigation({ nextProject }: { nextProject: ProjectData }) {
  return (
    <section className="bg-[#072C55] py-24 md:py-32 px-6 relative overflow-hidden group cursor-pointer border-t border-white/5">
       <Link href={nextProject.href} className="absolute inset-0 z-20" aria-label={`Next project: ${nextProject.title}`} />
       
       {/* Background Overlay */}
       <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
            <img 
                src={nextProject.heroImage} 
                alt="" 
                className="w-full h-full object-cover grayscale mix-blend-overlay group-hover:scale-105 transition-transform duration-[2s] ease-out" 
            />
            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />
       </div>
       
       <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
           
           <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="font-mono text-xs font-bold text-[#C47DFD] uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
           >
               <span className="w-1.5 h-1.5 rounded-full bg-[#5210F8] animate-pulse" />
               Next_Case_Study &rarr; {nextProject.id.toUpperCase()}
           </motion.div>
           
           <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter group-hover:text-[#C47DFD] transition-colors duration-500 mb-8"
           >
               {nextProject.title}
           </motion.h2>
           
           <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-mono uppercase tracking-widest text-sm group-hover:bg-white group-hover:text-[#072C55] transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
           >
               Initialize Protocol
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </motion.div>
       </div>
    </section>
  );
}
