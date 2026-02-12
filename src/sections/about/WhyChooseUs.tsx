"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, AlertCircle } from "lucide-react";
import { whyChooseUsContent } from "@/data/about/why";

export default function WhyChooseUs() {
  const comparisons = whyChooseUsContent.comparisons;

  return (
    <section className="py-12 md:py-32 bg-white relative overflow-hidden">
        {/* Technical Grid Pattern Removed */}

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
            
            {/* Heading Interface */}
            <div className="mb-12 md:mb-24 text-center max-w-4xl mx-auto">
                 <h2 className="text-4xl md:text-8xl font-black text-[#072C55] tracking-tighter leading-[0.85]">
                    {whyChooseUsContent.header.title.static} <br />
                    <span className="text-[#5210F8]">{whyChooseUsContent.header.title.highlight}</span>
                 </h2>
            </div>

            {/* Benchmark Matrix */}
            <div className="space-y-8 md:space-y-6">
                {/* Visual Column Headers (Desktop Only) */}
                <div className="hidden md:grid grid-cols-[1.2fr_2fr_2fr] gap-8 px-8 mb-8">
                    <div />
                    <div className="text-center pt-4 border-t-2 border-[#072C55]/5">
                        <span className="font-mono text-[11px] uppercase font-black text-[#072C55]/20 tracking-[0.5em]">{whyChooseUsContent.header.col1}</span>
                    </div>
                    <div className="text-center pt-4 border-t-2 border-[#5210F8]/20">
                        <span className="font-mono text-[11px] uppercase font-black text-[#5210F8] tracking-[0.5em]">{whyChooseUsContent.header.col2}</span>
                    </div>
                </div>

                {comparisons.map((row, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr_2fr] gap-4 md:gap-8 items-stretch"
                    >
                        {/* Meta Label */}
                        <div className="flex flex-col justify-center py-2 md:py-4 md:pr-12">
                            <span className="font-mono text-[10px] md:text-[12px] font-black text-[#072C55] tracking-widest uppercase mb-2">/ {row.label}</span>
                            <div className="h-[2px] w-full bg-gradient-to-r from-[#5210F8]/20 to-transparent" />
                        </div>

                        {/* Traditional Card (Legacy State) */}
                        <div className="bg-[#F8F9FA] border border-[#072C55]/15 rounded-3xl p-6 md:p-10 opacity-70 hover:opacity-100 transition-all duration-700 flex flex-col justify-between hover:border-[#072C55]/30">
                            <div>
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-4 bg-white rounded-2xl border border-[#072C55]/20 flex items-center justify-center shadow-inner">
                                        <row.traditional.icon size={24} className="text-[#072C55]/60" />
                                    </div>
                                    <div className="flex items-center gap-2 font-mono text-[11px] font-black text-[#072C55]/60 bg-white px-3 py-1 rounded-lg border border-[#072C55]/10">
                                        <AlertCircle size={12} className="text-red-500/60" />
                                        {row.traditional.val}
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#072C55] mb-3">{row.traditional.title}</h4>
                                <p className="text-sm text-[#072C55]/70 leading-relaxed font-medium">
                                    {row.traditional.desc}
                                </p>
                            </div>
                        </div>

                        {/* InvisiEdge Card (Active State) */}
                        <div className="bg-white border-2 border-[#5210F8]/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-[0_40px_80px_-20px_rgba(82,16,248,0.12)] relative overflow-hidden group hover:border-[#5210F8]/40 transition-all duration-700 flex flex-col justify-between hover:-translate-y-2">
                            {/* System Glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#5210F8]/15 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-10">
                                    <div className="p-4 bg-[#5210F8] rounded-2xl text-white shadow-2xl shadow-[#5210F8]/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                        <row.invisi.icon size={24} />
                                    </div>
                                    <div className="flex flex-col items-end">
                                       <span className="font-mono text-sm font-black text-[#5210F8] mb-2 tracking-tighter">{row.invisi.val}</span>
                                       <div className="flex gap-1 h-4 items-end">
                                           {[1,2,3,4,5].map(b => (
                                               <motion.div 
                                                  key={b} 
                                                  animate={{ height: ["20%", "100%", "20%"] }}
                                                  transition={{ duration: 1.2, repeat: Infinity, delay: b * 0.15 }}
                                                  className="w-1.5 bg-[#5210F8] rounded-full opacity-60" 
                                               />
                                           ))}
                                       </div>
                                    </div>
                                </div>
                                
                                <h4 className="font-black text-[#072C55] mb-3 text-xl md:text-2xl group-hover:text-[#5210F8] transition-colors leading-tight">
                                    {row.invisi.title}
                                </h4>
                                <p className="text-sm md:text-md text-[#072C55]/80 leading-relaxed font-medium">
                                    {row.invisi.desc}
                                </p>

                                <div className="mt-8 pt-8 border-t border-[#072C55]/5 flex items-center justify-between">
                                     <div className="flex items-center gap-2.5">
                                         <CheckCircle2 size={16} className="text-[#00FF94]" />
                                         <span className="font-mono text-[10px] font-black text-[#072C55]/40 uppercase tracking-[0.2em]">Optimization Active</span>
                                     </div>
                                     <Activity size={20} className="text-[#5210F8]/20 group-hover:text-[#5210F8]/40 transition-all animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* System Spec Footer */}
            {/* <div className="mt-24 pt-10 border-t border-[#072C55]/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                {[
                    { label: "Contract Mode", val: "NO LOCK-IN" },
                    { label: "IP Ownership", val: "100% BRAND" },
                    { label: "Ops Model", val: "SLACK NATIVE" },
                    { label: "Success Metric", val: "NET PROFIT" }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col border-l border-[#072C55]/10 pl-6 group hover:border-[#5210F8] transition-all">
                        <span className="font-mono text-[9px] font-bold text-[#072C55]/30 uppercase tracking-[0.3em] mb-1 group-hover:text-[#5210F8]/40 transition-colors">
                            {item.label}
                        </span>
                        <span className="font-bold text-[#072C55] text-xs md:text-sm group-hover:translate-x-1 transition-transform inline-block">
                            {item.val}
                        </span>
                    </div>
                ))}
            </div> */}

        </div>
    </section>
  );
}
