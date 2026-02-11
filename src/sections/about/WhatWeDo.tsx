"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Zap, BarChart3, Cpu, ArrowRight, CheckCircle2, Layout, MousePointer2, PieChart, GitBranch } from "lucide-react";

export default function WhatWeDo() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "01",
      title: "Acquisition Engine",
      description: "We don't just buy ads. We engineer reliable traffic sources using algorithmic targeting and programmatic SEO infrastructure.",
      icon: Target,
      color: "bg-[#5210F8]",
      text: "text-[#5210F8]",
      features: ["Paid Media (Meta/Google)", "Technical SEO", "Creator Partnerships"],
      visual_icon: Layout
    },
    {
      id: "02",
      title: "Conversion Protocol",
      description: "Traffic is meaningless without action. We deploy rigorous A/B testing and persuasive design to maximize revenue per user.",
      icon: Zap,
      color: "bg-[#C47DFD]",
      text: "text-[#C47DFD]",
      features: ["CRO Experimentation", "Landing Page Dev", "Direct Response Copy"],
      visual_icon: MousePointer2
    },
    {
      id: "03",
      title: "Intelligence & Data",
      description: "Replace opinion with fact. We build single-source-of-truth dashboards that attribute every dollar to a business outcome.",
      icon: BarChart3,
      color: "bg-[#00CC76]",
      text: "text-[#00CC76]",
      features: ["Multi-Touch Attribution", "Predictive Modeling", "CRM Architecture"],
      visual_icon: PieChart
    },
    {
      id: "04",
      title: "Autonomous Ops",
      description: "Scale without headcount. We automate manual workflows to nurture leads, sync data, and execute campaigns 24/7.",
      icon: Cpu,
      color: "bg-[#00FF94]",
      text: "text-[#00FF94]",
      features: ["Workflow Automation", "AI Agents", "Email Ops"],
      visual_icon: GitBranch
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
             <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#072C55] animate-pulse" />
                <span className="font-mono text-xs font-bold text-[#072C55] uppercase tracking-widest">
                    Service Capabilities
                </span>
             </div>
             <h2 className="text-3xl md:text-6xl font-black text-[#072C55] tracking-tight leading-[0.9]">
                 Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5210F8] to-[#C47DFD]">Infrastructure.</span>
             </h2>
        </div>
 
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* LEFT: Interactive List */}
            <div className="lg:w-1/2 space-y-4">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        onMouseEnter={() => setActiveService(index)}
                        onClick={() => setActiveService(index)}
                        className={`group relative p-6 md:p-8 rounded-[2rem] transition-all duration-300 cursor-pointer border ${activeService === index ? 'bg-white border-[#072C55]/5 shadow-xl' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${activeService === index ? service.color + ' text-white' : 'bg-[#072C55]/5 text-[#072C55]'}`}>
                                    <service.icon size={activeService === index ? 24 : 20} className="md:w-6 md:h-6" />
                                </div>
                                <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${activeService === index ? 'text-[#072C55]' : 'text-[#072C55]/40'}`}>
                                    {service.title}
                                </h3>
                            </div>
                            <span className={`font-mono text-sm font-bold transition-colors duration-300 ${activeService === index ? 'text-[#5210F8]' : 'text-[#072C55]/20'}`}>
                                {service.id}
                            </span>
                        </div>
                        
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeService === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-[#072C55]/60 text-sm md:text-base leading-relaxed mb-6 pl-14 md:pl-16">
                                {service.description}
                            </p>
                            <div className="pl-14 md:pl-16 flex flex-wrap gap-2 md:gap-3">
                                {service.features.map((feature, f) => (
                                    <span key={f} className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#072C55]/50 bg-[#F1F5F9] px-2 py-1 rounded-md">
                                        <CheckCircle2 size={12} className={service.text} />
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* RIGHT: Dynamic Visual Preview (Sticky) */}
            <div className="lg:w-1/2 relative h-[500px] lg:h-auto hidden lg:block">
                <div className="sticky top-24 h-[600px] rounded-[3rem] bg-[#072C55] overflow-hidden shadow-2xl">
                    
                    {/* Background Noise & Glow */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 p-12 flex flex-col justify-between"
                        >
                            {/* Dynamic Background Glow */}
                            <div className={`absolute -top-[50%] -right-[50%] w-[100%] h-[100%] rounded-full blur-[120px] opacity-40 ${services[activeService].color}`} />
                            <div className={`absolute -bottom-[50%] -left-[50%] w-[100%] h-[100%] rounded-full blur-[120px] opacity-40 ${services[activeService].color}`} />
                            
                            {/* Top Bar (Mock UI) */}
                            <div className="relative z-10 flex justify-between items-center opacity-50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white/20" />
                                    <div className="w-3 h-3 rounded-full bg-white/20" />
                                </div>
                                <div className="font-mono text-xs text-white/50 uppercase tracking-widest">
                                    Growth View v2.0
                                </div>
                            </div>

                            {/* Central Visualization */}
                            <div className="relative z-10 flex-1 flex items-center justify-center">
                                {/* Abstract UI Elements based on service */}
                                <div className="relative w-64 h-64 border border-white/10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm animate-[spin_20s_linear_infinite]">
                                    <div className="absolute top-0 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]" />
                                    <div className="absolute bottom-0 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]" />
                                    <div className="absolute left-0 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]" />
                                    <div className="absolute right-0 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_white]" />
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Icon overlaid on central viz */}
                                    {(() => {
                                        const ActiveIcon = services[activeService].visual_icon;
                                        return <ActiveIcon size={64} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />;
                                    })()}
                                </div>
                            </div>

                            {/* Bottom Stats (Mock UI) */}
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                                    <div className="text-white/40 text-xs font-bold uppercase mb-1">Efficiency</div>
                                    <div className="text-white text-2xl font-mono font-bold">98.4%</div>
                                    <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-[#00FF94] h-full w-[98%]" />
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                                    <div className="text-white/40 text-xs font-bold uppercase mb-1">Scale</div>
                                    <div className="text-white text-2xl font-mono font-bold">Infinite</div>
                                    <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-[#5210F8] h-full w-[100%]" />
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
