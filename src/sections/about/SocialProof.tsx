"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Activity,
  Binary,
  Layers,
  Search,
  Database,
  Lock,
  Workflow,
  ArrowRight,
  ChevronRight,
  Hash,
  Microchip,
  TrendingUp,
  Globe2,
  Quote,
  CheckCircle2,
  Server,
  Network,
  Fingerprint,
  BarChart,
  Target,
  FileSearch,
  Settings,
  Terminal,
  Clock,
  Scan,
  Shield,
  Box,
  Share2,
  HardDrive
} from "lucide-react";

// The "Case Study" Data
const CASE_STUDIES = [
  {
    serial: "0x_PRML_42",
    client: "TechFlow",
    focus: "SaaS_Growth_Kernel",
    impact: "-62%_CAC",
    logic: "os.execute({ target: 'GROWTH', attribution: 'STRICT' });",
    context: "Unit-Economic Calibration for Series A scale. We eliminated $600k/yr in wasted attribution noise by deploying custom server-side tracking scripts.",
    metric_a: "ROI: 12X",
    metric_b: "LTV: +18%",
    metric_c: "CHURN: -4%",
    author: "Alex V.",
    role: "CEO",
    hex: "#5210F8"
  },
  {
    serial: "0x_VEL_99",
    client: "Vertex",
    focus: "FinTech_Rev_Protocol",
    impact: "+340%_REV",
    logic: "core.scale({ mode: 'VELOCITY', cycle: 'COMPRESSED' });",
    context: "Revenue Velocity Architecture for institutional scaling. Orchestrated a full lead-to-revenue automation layer, cutting sales cycle time by 45 days.",
    metric_a: "REV: +340%",
    metric_b: "PACE: 1.5X",
    metric_c: "SPAN: 45D",
    author: "Sarah J.",
    role: "CMO",
    hex: "#00FF94"
  },
  {
    serial: "0x_CONV_08",
    client: "Nebula",
    focus: "Ecom_Infra_Tuning",
    impact: "4.2X_CONV",
    logic: "edge.tune({ layer: 'PERSONALIZATION', ttf: '2ms' });",
    context: "Conversion Infrastructure Deployment at the edge. Leveraged custom Next.js middleware to deliver hyper-personalized session experiences instantly.",
    metric_a: "CONV: 4.2X",
    metric_b: "AOV: +22%",
    metric_c: "ROAS: 12X",
    author: "David L.",
    role: "VP Growth",
    hex: "#C47DFD"
  }
];

export default function SocialProof() {
  const [activeFile, setActiveFile] = useState(0);
  const [dataReady, setDataReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDataReady(true);
  }, []);

  const current = CASE_STUDIES[activeFile];

  return (
    <section ref={containerRef} className="relative py-24 md:py-48 bg-[#F8F9FA] overflow-hidden leading-tight font-sans">
      
      {/* Background Architectural Architecture (The Grid OS) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#072C55_1px,transparent_1px),linear-gradient(to_bottom,#072C55_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-[15%] left-0 w-full h-[1px] bg-[#072C55]" />
          <div className="absolute top-[85%] left-0 w-full h-[1px] bg-[#072C55]" />
          <div className="absolute top-0 right-10 flex flex-col items-end opacity-20">
              <span className="font-mono text-[10vw] font-black text-[#072C55] leading-none">GROWTH</span>
              <span className="font-mono text-[10vw] font-black text-[#072C55] leading-none">ARCHIVE</span>
          </div>
      </div>

      <div className="max-w-[1450px] mx-auto px-6 relative z-10">
        
        {/* Superior Header: The Command HUD */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-20 md:mb-40 gap-16">
            <div className="max-w-4xl">
                 <div className="flex items-center gap-4 mb-10">
                     <span className="flex h-3 w-3 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF94] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FF94]"></span>
                     </span>
                     <div className="h-[2px] w-12 bg-[#072C55]/10" />
                     <span className="font-mono text-xs font-black text-[#072C55]/30 uppercase tracking-[0.6em]">Market Validation // Performance Ledger</span>
                 </div>
                 <h2 className="text-4xl md:text-9xl lg:text-[11rem] font-black text-[#072C55] tracking-tighter leading-[0.75] mb-8 md:mb-12">
                     Verified <br />
                     <span className="text-[#5210F8]">Authority.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-[#072C55]/50 font-medium max-w-2xl leading-[1.1] pr-4 md:pr-12">
                    Every result is a secure data entry in our global performance archive. We don't deal in promises—we deliver <strong className="text-[#072C55]">engineered growth specifications.</strong>
                 </p>
            </div>

            {/* Live System Specs Card */}
            <div className="flex flex-col gap-6 w-full xl:w-96">
                 <div className="p-8 bg-white border border-[#072C55]/10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                           <Microchip size={140} />
                      </div>
                      <div className="relative z-10 mb-8 flex justify-between items-center px-2">
                           <span className="font-mono text-[10px] font-black text-[#072C55]/30 tracking-widest uppercase">Market_Demand</span>
                           <Activity size={14} className="text-[#5210F8]" />
                      </div>
                      <div className="flex items-end justify-between px-2 mb-10">
                           <div>
                               <span className="text-5xl font-black text-[#072C55] tracking-tight">4.98</span>
                               <span className="font-mono text-xs text-[#072C55]/30 ml-2 font-bold uppercase">/5.0CSAT</span>
                           </div>
                           <div className="text-right">
                               <span className="text-sm font-black text-[#00FF94] block">99.98%</span>
                               <span className="font-mono text-[8px] font-black text-[#072C55]/30 uppercase tracking-widest">Campaign_Uptime</span>
                           </div>
                      </div>
                      <div className="h-1 w-full bg-[#072C55]/5 rounded-full overflow-hidden">
                           <motion.div 
                              animate={{ width: ["10%", "95%", "92%"] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="h-full bg-[#5210F8]" 
                           />
                      </div>
                 </div>
            </div>
        </div>

        {/* The Master Control Interface: Archive Dossier */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch min-h-[850px]">
            
            {/* Left Rail: Selective Navigation Nodes */}
            <div className="lg:col-span-4 flex flex-col gap-6">
                 <div className="bg-white border border-[#072C55]/10 rounded-[4rem] p-6 shadow-sm flex flex-col h-full">
                      <div className="flex items-center justify-between px-6 py-8 border-b border-[#072C55]/5 mb-8">
                           <div className="flex items-center gap-3">
                                <Database size={18} className="text-[#5210F8]" />
                                <span className="font-mono text-[10px] font-black text-[#072C55] uppercase tracking-widest">Case_Archive:03</span>
                           </div>
                           <Terminal size={14} className="text-[#072C55]/20" />
                      </div>
                      
                       <div className="space-y-4 px-2 flex-1">
                            {CASE_STUDIES.map((file, i) => (
                               <button
                                   key={i}
                                   onClick={() => setActiveFile(i)}
                                   className={`w-full group p-8 rounded-[3rem] text-left transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-52 lg:h-auto lg:flex-1 ${activeFile === i ? 'bg-[#072C55] border-[#072C55] text-white shadow-2xl scale-[1.03] z-20' : 'bg-white border border-[#072C55]/5 text-[#072C55] hover:border-[#5210F8]/30 hover:bg-[#F8F9FA]'}`}
                               >
                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                         <div>
                                              <div className="flex justify-between items-center mb-4">
                                                   <span className={`font-mono text-[10px] font-black tracking-widest uppercase mb-1 block ${activeFile === i ? 'text-[#00FF94]' : 'text-[#5210F8]'}`}>{file.serial}</span>
                                                   {activeFile === i && <Scan size={16} className="text-[#00FF94] animate-pulse" />}
                                              </div>
                                              <h4 className="text-4xl font-black tracking-tighter mb-1">{file.client}</h4>
                                              <p className={`text-[10px] font-black uppercase tracking-[0.3em] opacity-30 ${activeFile === i ? 'text-white' : 'text-[#072C55]'}`}>{file.focus}</p>
                                         </div>

                                         <div className="flex justify-between items-end mt-12">
                                              <span className="text-4xl font-black tracking-tighter">{file.impact.split('_')[0]}</span>
                                              <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 ${activeFile === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                                                   <ArrowRight size={20} />
                                              </div>
                                         </div>
                                    </div>
                                    
                                    {activeFile === i && (
                                        <motion.div 
                                            layoutId="active-nav-glow"
                                            className="absolute inset-0 bg-gradient-to-br from-[#5210F8]/20 to-transparent pointer-events-none" 
                                        />
                                    )}
                               </button>
                           ))}
                      </div>

                      <div className="mt-8 p-10 bg-[#072C55]/[0.02] border border-[#072C55]/10 rounded-[3.5rem] relative group hover:border-[#5210F8]/20 transition-all cursor-default overflow-hidden">
                           <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                <Shield size={120} />
                           </div>
                           <div className="relative z-10 flex items-center justify-between">
                                <div>
                                    <span className="block font-mono text-[10px] font-black text-[#072C55]/30 tracking-widest uppercase mb-1">Data_Integrity</span>
                                    <div className="flex items-center gap-2">
                                         <CheckCircle2 size={18} className="text-[#00FF94]" />
                                         <span className="text-xl font-black text-[#072C55]">SOC2_AUDITED</span>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white border border-[#072C55]/10 shadow-sm text-[#072C55]/50 group-hover:text-[#5210F8] transition-colors">
                                     <Lock size={20} />
                                </div>
                           </div>
                      </div>
                 </div>
            </div>

            {/* Right Display: Deep Audit Dossier Panel */}
            <div className="lg:col-span-8 bg-white border border-[#072C55]/10 rounded-[3rem] md:rounded-[5rem] p-6 md:p-24 relative overflow-hidden shadow-[0_80px_160px_-40px_rgba(7,44,85,0.06)] flex flex-col justify-center min-h-[600px] md:min-h-[850px]">
                
                {/* HUD High-Density Background Mask */}
                <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none select-none">
                     <Fingerprint size={1000} strokeWidth={0.5} />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFile}
                        initial={{ opacity: 0, x: 80, filter: "blur(20px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -80, filter: "blur(20px)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full"
                    >
                        {/* Dossier Tactical Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                            <div className="space-y-8">
                                 <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#F8F9FA] border border-[#072C55]/5 shadow-sm">
                                    <Cpu size={16} className="text-[#5210F8]" />
                                    <span className="font-mono text-[10px] md:text-xs font-black text-[#5210F8] uppercase tracking-widest">Active_Dossier:0x{activeFile + 1}</span>
                                </div>
                                <h3 className="text-6xl md:text-[11rem] lg:text-[13rem] font-black text-[#072C55] tracking-tighter leading-[0.7]">
                                    {current.impact.split('_')[0]}
                                </h3>
                                <div className="font-mono text-[10px] md:text-[12px] font-black text-[#072C55]/20 uppercase tracking-[0.8em] block">{current.impact.split('_')[1]}</div>
                            </div>

                            <div className="p-10 bg-[#F8F9FA] border border-[#072C55]/5 rounded-[4rem] shadow-inner relative group/logic min-w-[360px]">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                     <Binary size={100} />
                                </div>
                                <div className="flex items-center gap-3 mb-6">
                                     <Terminal size={14} className="text-[#072C55]/30" />
                                     <span className="font-mono text-[10px] font-black text-[#072C55]/30 uppercase tracking-widest">Logic_Protocol</span>
                                </div>
                                <code className="font-mono text-sm text-[#5210F8] mb-8 block leading-relaxed bg-[#F8F9FA] border border-[#5210F8]/10 p-4 rounded-xl shadow-sm">
                                    {current.logic}
                                </code>
                                <div className="flex items-center gap-2 text-[#00FF94]">
                                     <CheckCircle2 size={16} />
                                     <span className="font-mono text-[11px] font-black uppercase tracking-widest">INTEGRITY_CHECK_PASS</span>
                                </div>
                            </div>
                        </div>

                        {/* Analysis Narrative & Production Shards */}
                        <div className="grid md:grid-cols-12 gap-16 items-center flex-1">
                             <div className="md:col-span-12 lg:col-span-7 space-y-12">
                                  <div className="relative">
                                       <Quote size={120} className="absolute -top-16 -left-16 text-[#072C55]/[0.03]" />
                                       <p className="text-4xl md:text-5xl font-medium text-[#072C55] italic leading-[1.1] relative z-10 tracking-tight">
                                           "{current.context}"
                                       </p>
                                  </div>
                                  
                                  <div className="flex items-center gap-8 pt-10 border-t border-[#072C55]/10">
                                       <div className="w-20 h-20 rounded-[2.5rem] bg-[#072C55] text-[#00FF94] flex items-center justify-center font-mono font-black text-3xl shadow-[0_20px_40px_-10px_rgba(7,44,85,0.3)]">
                                           {current.author.charAt(0)}
                                       </div>
                                       <div>
                                            <div className="text-2xl font-black text-[#072C55]">{current.author}</div>
                                            <div className="font-mono text-xs font-bold text-[#072C55]/40 uppercase tracking-widest">{current.role} // {current.client}</div>
                                       </div>
                                  </div>
                             </div>

                             {/* Specialized Output Stat Shards */}
                             <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-4">
                                  <div className="p-10 bg-[#072C55] rounded-[4rem] text-white overflow-hidden shadow-2xl relative group/shard flex flex-col justify-center h-full min-h-[400px]">
                                       <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                                       <div className="relative z-10 space-y-12">
                                            <div className="flex justify-between items-center opacity-30 px-2">
                                                <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em]">OUTPUT_METRIC_AGGREGATOR</span>
                                                <BarChart size={16} />
                                            </div>
                                            <div className="grid gap-12 px-2">
                                                 {[current.metric_a, current.metric_b, current.metric_c].map((m, i) => (
                                                     <div key={i} className="flex flex-col group/stat hover:translate-x-2 transition-transform duration-500">
                                                          <span className="font-mono text-[9px] font-black text-white/30 uppercase tracking-widest mb-2">GrowthMetric_0{i + 1}</span>
                                                          <span className="text-5xl font-black text-[#00FF94] tracking-tighter group-hover/stat:text-white transition-colors">{m}</span>
                                                     </div>
                                                 ))}
                                            </div>
                                       </div>
                                       {/* Decorative Laser Scan */}
                                       <motion.div 
                                          initial={{ top: -100 }}
                                          animate={{ top: "100%" }}
                                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                          className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF94]/40 to-transparent z-20" 
                                       />
                                  </div>
                             </div>
                        </div>

                        {/* Dossier Functional Footer */}
                        <div className="mt-24 pt-10 border-t border-[#072C55]/10 flex flex-wrap justify-between items-center gap-12">
                             <div className="flex items-center gap-12">
                                  <div className="flex items-center gap-3">
                                      <Globe2 size={18} className="text-[#072C55]/20" />
                                      <span className="font-mono text-[10px] font-black text-[#072C55]/40 uppercase tracking-widest">Network: GLOBAL_RELAY_0{activeFile + 1}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                      <HardDrive size={18} className="text-[#072C55]/20" />
                                      <span className="font-mono text-[10px] font-black text-[#072C55]/40 uppercase tracking-widest">Block_Size: 4.2MB</span>
                                  </div>
                             </div>
                             <div className="flex gap-4">
                                  <button className="p-5 rounded-[2rem] bg-[#F8F9FA] border border-[#072C55]/10 text-[#072C55]/40 hover:text-[#5210F8] hover:border-[#5210F8]/30 transition-all shadow-sm">
                                      <Share2 size={20} />
                                  </button>
                                  <button className="flex items-center gap-4 px-12 py-6 bg-[#072C55] text-white rounded-[2.5rem] font-mono text-xs font-black uppercase tracking-[0.3em] hover:bg-[#5210F8] transition-all group shadow-3xl overflow-hidden relative">
                                      <span className="relative z-10">Access Case Study</span>
                                      <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                      <motion.div 
                                          initial={{ x: "-100%" }}
                                          whileHover={{ x: "0%" }}
                                          className="absolute inset-0 bg-[#5210F8] z-0" 
                                      />
                                  </button>
                             </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

        {/* Global Scaling Network Ticker */}
        <div className="mt-40 relative py-16 border-y border-[#072C55]/10 overflow-hidden bg-white/50 backdrop-blur-3xl">
             <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#072C55]/10 to-transparent" />
             <div className="relative z-20">
                <motion.div 
                    animate={{ x: [0, -1200] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-32 items-center"
                >
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex items-center gap-12 group cursor-default opacity-30 hover:opacity-100 transition-opacity">
                             <div className="flex flex-col">
                                  <span className="font-mono text-[10px] font-black text-[#5210F8] uppercase tracking-widest">Success_Node_0{i + 1}</span>
                                  <span className="text-4xl font-black text-[#072C55] tracking-tighter">OPERATIONAL_DATA_VERIFIED</span>
                             </div>
                             <div className="h-12 w-[1px] bg-[#072C55]/20 group-hover:bg-[#5210F8] transition-colors" />
                             <span className="text-6xl font-black text-[#072C55]/5 group-hover:text-[#5210F8]/20 transition-colors">v{42 + i}.{i}.0</span>
                        </div>
                    ))}
                </motion.div>
             </div>
        </div>

      </div>

      {/* Structural Watermark Detail */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 font-mono text-[18vw] font-black text-[#072C55]/[0.01] pointer-events-none select-none">
          SECURE_OUTPUT
      </div>
    </section>
  );
}
