"use client";

import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceProcess({ process }: { process: string[] }) {
  if (!process || process.length === 0) return null;

  return (
    <div className="w-full bg-white border border-[#072C55]/10 rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden">
      
      {/* Background Grid removed */}

      <div className="flex items-center gap-3 mb-10 relative z-10">
          <Terminal className="text-[#5210F8]" size={20} />
          <h3 className="font-bold text-[#072C55] uppercase tracking-tight">Growth Roadmap</h3>
      </div>

      <div className="relative z-10 border-l-2 border-[#072C55]/10 ml-4 space-y-12">
        {process.map((step, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-12 group"
          >
            {/* Interactive Node Point */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-[#072C55]/20 group-hover:border-[#5210F8] group-hover:scale-125 transition-all shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#072C55]/20 group-hover:bg-[#5210F8] transition-colors" />
            </div>
            
            <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-[9px] font-black text-[#072C55]/30 group-hover:text-[#5210F8] transition-colors">PHASE_0{i+1}</span>
                <ArrowRight size={12} className="text-[#072C55]/20 -rotate-45" />
            </div>

            <h4 className="text-xl font-black text-[#072C55] mb-2 group-hover:text-[#5210F8] transition-colors cursor-default">
                {step}
            </h4>
            
            <p className="text-[#072C55]/50 text-sm leading-relaxed font-medium max-w-sm">
                Strategic execution phase ensuring maximum impact and ROI.
            </p>

            {/* Completion Indicator (Mock) */}
            <div className="absolute -right-4 top-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300">
                <CheckCircle2 size={16} className="text-[#00FF94]" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
