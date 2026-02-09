"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Target, 
  Cpu, 
  Terminal, 
  BarChart3,
  Activity,
  CheckCircle2,
  Database,
  ShieldCheck,
  Zap,
  Network
} from "lucide-react";

export default function ResultsImpact() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeCase, setActiveCase] = useState(0);
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toLocaleTimeString('en-GB', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    { label: "REV_GEN", value: "$250.42M", growth: "+12% MOE", icon: Database },
    { label: "ACQ_LOAD", value: "3,521,089", growth: "+4.1% VEL", icon: Network },
    { label: "ROI_AVG", value: "125.4%", growth: "OPTIMAL", icon: Zap },
    { label: "SYS_UP", value: "99.99%", growth: "STABLE", icon: Activity },
  ];

  const caseLogs = [
    {
      id: "LOG_01_SAAS",
      client: "CLOUDCORE SYSTEMS",
      impact: "425%",
      metric: "ROI_UPLIFT",
      desc: "Systematic overhaul of enterprise acquisition architecture. Implemented high-fidelity tracking and performance-creative protocols.",
      stats: [
        { label: "MRR_INC", val: "$140k" },
        { label: "CAC_RED", val: "-45%" },
        { label: "LTV_UFT", val: "+22%" }
      ],
      accent: "#5210F8"
    },
    {
      id: "LOG_02_ECOMM",
      client: "VELOCITY LUXE",
      impact: "8.2X",
      metric: "ROAS_SCALE",
      desc: "Massive scaling project targeting global luxury markets. Deployed automated bidding logic and custom DSP integrations.",
      stats: [
        { label: "REV_GEN", val: "$2.1M" },
        { label: "AOV_INC", val: "+18%" },
        { label: "CR_OPT", val: "2.8%" }
      ],
      accent: "#00FF94"
    },
    {
      id: "LOG_03_FIN",
      client: "ARCHON TRADING",
      impact: "-60%",
      metric: "CAC_EFFICIENCY",
      desc: "Privacy-first tracking migration for high-security fintech platform. Replaced legacy scripts with server-side API orchestration.",
      stats: [
        { label: "MAU_UP", val: "2.1X" },
        { label: "DATA_IP", val: "100%" },
        { label: "LATENCY", val: "8ms" }
      ],
      accent: "#C47DFD"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-16 md:py-32 bg-[#F8F9FA] overflow-hidden">
      
      {/* Background Micro-Details */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none font-mono text-[8vw] font-black leading-none uppercase flex flex-wrap content-center text-[#072C55]">
        RESULTS_IMPACT_DATA_CORE_PERFORMANCE_METRICS_GROWTH_SYSTEMS_INVISIEDGE_ORCHESTRATOR
      </div>
      
      {/* Grid Underlay */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none" 
           style={{ 
             backgroundImage: `radial-gradient(#072C55 1px, transparent 1px)`, 
             backgroundSize: '32px 32px' 
           }} />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* System Header HUD */}
        <div className="mb-24 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-12">
            <div className="max-w-3xl">
                 <div className="flex items-center gap-4 mb-8">
                     <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5210F8] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#5210F8]"></span>
                     </span>
                     <div className="h-[2px] w-12 bg-[#072C55]/10" />
                     <span className="font-mono text-xs font-bold text-[#072C55] uppercase tracking-[0.5em]">Live System Output // {systemTime}</span>
                 </div>
                 <h2 className="text-3xl md:text-8xl lg:text-9xl font-black text-[#072C55] tracking-tighter leading-[0.85]">
                     The Proof <br />
                     <span className="text-[#5210F8]">In The Code.</span>
                 </h2>
            </div>

            {/* Global Metrics HUD */}
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-2 gap-3 md:gap-4 w-full xl:w-auto">
                {metrics.map((m, i) => (
                    <div key={i} className="p-4 md:p-6 bg-white border border-[#072C55]/10 rounded-2xl shadow-sm group hover:border-[#5210F8]/30 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <m.icon size={16} className="text-[#5210F8]/40 group-hover:text-[#5210F8] transition-colors" />
                            <span className="font-mono text-[9px] font-black text-[#00FF94] bg-[#00FF94]/10 px-2 py-0.5 rounded uppercase">
                                {m.growth}
                            </span>
                        </div>
                        <div className="text-[10px] md:text-sm font-mono font-bold text-[#072C55]/30 uppercase tracking-widest mb-1">{m.label}</div>
                        <div className="text-2xl md:text-3xl font-black text-[#072C55]">{m.value}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* Master Case Interface */}
        <div className="grid xl:grid-cols-12 gap-8 items-start">
            
            {/* Sector Switcher (Left) */}
            <div className="xl:col-span-3 flex xl:flex-col gap-4 overflow-x-auto pb-4 xl:pb-0 scrollbar-hide">
                {caseLogs.map((log, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveCase(i)}
                        className={`p-4 md:p-6 rounded-3xl border text-left transition-all duration-500 whitespace-nowrap xl:whitespace-normal group ${activeCase === i ? `bg-[#072C55] border-[#072C55] text-white shadow-xl translate-x-1` : 'bg-white border-[#072C55]/10 text-[#072C55] hover:border-[#5210F8]/30'}`}
                    >
                        <div className="flex justify-between items-center mb-2 md:mb-4">
                            <span className={`font-mono text-[9px] md:text-[10px] font-black tracking-widest uppercase ${activeCase === i ? 'text-white/40' : 'text-[#072C55]/40'}`}>
                                SEGMENT_{i+1}
                            </span>
                            {activeCase === i && <ArrowUpRight size={16} className="text-[#00FF94]" />}
                        </div>
                        <h4 className="font-bold text-base md:text-lg mb-1 leading-tight">{log.client}</h4>
                        <span className={`font-mono text-[9px] md:text-[10px] font-black uppercase tracking-widest ${activeCase === i ? 'text-[#00FF94]' : 'text-[#5210F8]'}`}>
                            {log.impact} {log.metric.split('_')[0]}
                        </span>
                    </button>
                ))}
            </div>

            {/* Active Analysis View (Right) */}
            <div className="xl:col-span-9 bg-white border border-[#072C55]/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-16 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(7,44,85,0.05)] h-full">
                
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
                     <Terminal size={300} />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCase}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                            <div className="flex-1 max-w-xl">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8F9FA] border border-[#072C55]/5 mb-10">
                                    <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: caseLogs[activeCase].accent }} />
                                    <span className="font-mono text-xs font-bold text-[#072C55] uppercase tracking-widest">Case_Log: {caseLogs[activeCase].id}</span>
                                </div>
                                
                                <h3 className="text-3xl md:text-6xl font-black text-[#072C55] tracking-tight mb-8 leading-none">
                                    {caseLogs[activeCase].impact} <span className="opacity-20 text-xl font-mono align-middle uppercase ml-2">{caseLogs[activeCase].metric.replace('_', ' ')}</span>
                                </h3>
                                
                                <p className="text-xl text-[#072C55]/60 leading-relaxed mb-12 border-l-4 border-[#5210F8] pl-8">
                                    {caseLogs[activeCase].desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                    {caseLogs[activeCase].stats.map((s, idx) => (
                                        <div key={idx} className="bg-[#F8F9FA] rounded-[2rem] p-6 border border-[#072C55]/5">
                                            <div className="font-mono text-[10px] font-black text-[#072C55]/30 uppercase tracking-[0.2em] mb-2">{s.label}</div>
                                            <div className="text-2xl font-black text-[#072C55]">{s.val}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3 space-y-4">
                               <div className="bg-[#072C55] text-white rounded-[2rem] p-8 relative overflow-hidden group">
                                   <div className="absolute top-0 right-0 p-4 opacity-10">
                                       <ShieldCheck size={120} />
                                   </div>
                                   <h5 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-40">System_Security</h5>
                                   <p className="font-bold relative z-10">Verified with server-side SDK payloads. Data integrity score: 99.9%.</p>
                                   <div className="mt-8 flex items-center gap-2 text-[#00FF94] font-mono text-xs font-bold tracking-widest">
                                       <CheckCircle2 size={14} />
                                       AUTH_COMPLETE
                                   </div>
                               </div>

                               <div className="bg-white border border-[#072C55]/10 rounded-[2rem] p-8">
                                    <div className="mb-6 flex justify-between items-center text-[#072C55]/30">
                                        <span className="font-mono text-[10px] font-black uppercase tracking-widest">Network_Latency</span>
                                        <Activity size={16} />
                                    </div>
                                    <div className="h-20 flex items-end gap-1.5 grayscale hover:grayscale-0 transition-all cursor-crosshair">
                                        {[40, 70, 45, 90, 65, 80, 50, 40].map((h, i) => (
                                            <motion.div 
                                                key={i} 
                                                className="flex-1 bg-[#5210F8]/20 group-hover:bg-[#5210F8] rounded-t-sm"
                                                animate={{ height: [`${h}%`, `${Math.min(100, h+20)}%`, `${h}%`] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                            />
                                        ))}
                                    </div>
                               </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

        {/* Console Footnote */}
        <div className="mt-24 pt-10 border-t border-[#072C55]/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-12 font-mono text-[10px] font-black text-[#072C55]/30 uppercase tracking-[0.3em]">
                <span>ARCHIVE_STD_4.0</span>
                <span className="hidden md:inline">ENCRYPTED_DATA_LAYER_LOADED</span>
            </div>
            <div className="flex items-center gap-6">
                 <button className="flex items-center gap-2 font-mono text-xs font-black text-[#5210F8] uppercase tracking-widest hover:gap-4 transition-all">
                     Download Full Archive <Terminal size={14} />
                 </button>
            </div>
        </div>

      </div>
    </section>
  );
}
