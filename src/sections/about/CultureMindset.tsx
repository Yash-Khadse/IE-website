"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Zap, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Activity,
  Binary,
  Search,
  Workflow,
  Hash,
  Microchip
} from "lucide-react";

const PROTOCOLS = [
  {
    id: "v_01",
    title: "Velocity Protocol",
    axiom: "Bias For Action",
    desc: "We prioritize execution velocity over theoretical perfection. Speed is the only moat in an evolving market. We deploy, measure, and pivot while others are still debating the brief.",
    specs: {
      latency: "0.2ms",
      throughput: "72H_SPRINT",
      integrity: "98.4%",
      load: "AGGRESSIVE"
    },
    code: "os.execute({ target: 'GROWTH', speed: 'MAX' });",
    icon: Zap,
    color: "#5210F8"
  },
  {
    id: "v_02",
    title: "Veracity Layer",
    axiom: "Radical Truth",
    desc: "The data never lies, but interpretations do. We maintain absolute transparency with our clients and ourselves, exposing failures early to accelerate the pivot to success.",
    specs: {
      latency: "0.0ms",
      throughput: "REAL_TIME",
      integrity: "100.0%",
      load: "OPTIMAL"
    },
    code: "data.audit({ transparency: 1.0, report: 'RAW' });",
    icon: Search,
    color: "#00FF94"
  },
  {
    id: "v_03",
    title: "Sovereignty Core",
    axiom: "Extreme Ownership",
    desc: "Our engineers own the outcome, not just the task. We treat client capital as our own, architecting every solution with a founder-level obsession for unit-economic efficiency.",
    specs: {
      latency: "STATIC",
      throughput: "FULL_STACK",
      integrity: "MISSION_CRIT",
      load: "DEDICATED"
    },
    code: "core.own({ asset: 'CLIENT_KPTL', stake: 1.0 });",
    icon: ShieldCheck,
    color: "#C47DFD"
  },
  {
    id: "v_04",
    title: "Adaptive Kernel",
    axiom: "Infinite Learning",
    desc: "Stagnation is system failure. We operate in a state of perpetual beta, continuously upgrading our internal scripts and models to outpace the evolving algorithms.",
    specs: {
      latency: "<1ms",
      throughput: "CONT_EVOLVE",
      integrity: "99.2%",
      load: "EVOLVING"
    },
    code: "kernel.update({ feed: 'ALGO_LIVE', src: 'INF' });",
    icon: Binary,
    color: "#072C55"
  }
];

export default function CultureMindset() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Handle cross-platform viewport sizing for the orbital system
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionIndex = Math.min(Math.floor(latest * PROTOCOLS.length * 1.05), PROTOCOLS.length - 1);
    setActiveIdx(sectionIndex);
  });

  const current = PROTOCOLS[activeIdx];

  return (
    <section ref={containerRef} className="relative h-[350vh] bg-[#F8F9FA]">
      
      {/* Sticky Orchestration Layer */}
      <div className="sticky top-20 md:top-32 h-[calc(100vh-5rem)] md:h-[calc(100vh-8rem)] w-full overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Half: Protocol Specification Analysis */}
        <div className="w-full lg:w-1/2 h-[55vh] lg:h-full bg-white relative p-6 md:p-12 lg:p-24 pt-16 md:pt-40 lg:pt-56 flex flex-col justify-start order-2 lg:order-1 overflow-y-auto">
            
            {/* Background Texture Detail */}
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
                 <Terminal size={400} />
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 w-full"
                >
                    {/* Protocol Header HUD */}
                    <div className="mb-8 md:mb-12 flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded bg-[#072C55] text-[#00FF94]">
                                    <Hash size={12} />
                                </div>
                                <span className="font-mono text-xs font-black text-[#072C55] uppercase tracking-widest">{current.id}</span>
                            </div>
                            <h2 className="text-3xl md:text-[6rem] font-black text-[#072C55] tracking-tighter leading-[0.85] mb-4">
                                {current.axiom.split(' ').map((word, i) => (
                                    <span key={i} className={i === 1 ? 'text-[#5210F8]' : ''}>
                                        {word}<br />
                                    </span>
                                ))}
                            </h2>
                        </div>
                        <div className="flex flex-col items-end pt-4">
                            <span className="font-mono text-[9px] md:text-[10px] font-black text-[#072C55]/30 uppercase tracking-[0.4em] mb-1">Module_Status</span>
                            <div className="flex items-center gap-2 px-3 py-1 bg-[#F8F9FA] border border-[#072C55]/10 rounded font-mono text-[9px] md:text-[10px] font-bold text-[#00FF94]">
                                <Activity size={10} className="animate-pulse" />
                                ACTIVE
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 md:space-y-12 max-w-xl">
                        {/* Axiom Definition */}
                        <div className="space-y-3 md:space-y-4">
                             <div className="font-mono text-[9px] md:text-[10px] font-black text-[#5210F8] uppercase tracking-[0.4em]">Definition_Layer</div>
                             <p className="text-xl md:text-3xl font-medium text-[#072C55]/70 leading-tight">
                                {current.desc}
                             </p>
                        </div>

                        {/* System Performance Specs */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[#072C55]/10">
                            {Object.entries(current.specs).map(([key, val], i) => (
                                <div key={i}>
                                    <span className="font-mono text-[9px] font-black text-[#072C55]/30 uppercase tracking-widest block mb-2">{key.replace('_', ' ')}</span>
                                    <span className="text-sm font-black text-[#072C55]">{val}</span>
                                </div>
                            ))}
                        </div>

                        {/* Executable Script Mock */}
                        <div className="p-6 md:p-8 bg-[#072C55] rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl group/code">
                             <div className="absolute top-0 right-0 p-6 opacity-5">
                                 <Microchip size={140} />
                             </div>
                             <div className="flex items-center gap-2 mb-4 md:mb-6 opacity-30">
                                 <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                 <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                 <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                             </div>
                             <code className="font-mono text-xs md:text-sm inline-block text-[#00FF94] mb-6 md:mb-8 leading-relaxed">
                                {current.code}
                             </code>
                             <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-white/10">
                                 <span className="font-mono text-[8px] md:text-[9px] font-black text-white/30 uppercase tracking-[0.3em]">Protocol_ID: {activeIdx + 42}</span>
                                 <Workflow size={14} className="text-white/20 group-hover/code:text-[#5210F8] transition-colors" />
                             </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Scroll Progress Indicator (Left Column) */}
            <div className="absolute top-0 left-0 h-full w-2 flex flex-col pointer-events-none">
                 {PROTOCOLS.map((_, i) => (
                    <div 
                        key={i} 
                        className={`flex-1 transition-all duration-700 ${activeIdx === i ? 'bg-[#5210F8]' : 'bg-[#072C55]/5'}`} 
                    />
                 ))}
            </div>
        </div>

        {/* Right Half: The Radial Interface HUD */}
        <div className="w-full lg:w-1/2 h-[45vh] lg:h-full relative flex items-center justify-center p-6 md:p-12 lg:p-24 pt-20 lg:pt-56 border-l border-[#072C55]/5 order-1 lg:order-2">
            
            {/* Background Grid HUD */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                 <div className="absolute inset-0 bg-[radial-gradient(#072C55_1px,transparent_1px)] bg-[size:32px_32px]" />
                 <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#072C55]" />
                 <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#072C55]" />
            </div>

            {/* The Central Orbital System */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[450px] flex items-center justify-center">
                 {/* Main Orbital Path */}
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-[#072C55]/20" 
                 />
                 
                 {/* Secondary Orbital Path */}
                 <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-12 md:inset-20 rounded-full border border-[#072C55]/10" 
                 />

                 {/* Satellite Nodes (Protocols) */}
                 {PROTOCOLS.map((p, idx) => {
                    const angle = (idx / PROTOCOLS.length) * Math.PI * 2;
                    // Responsive orbital radius based on measured window width
                    const radius = windowWidth < 640 ? 110 : windowWidth < 768 ? 140 : 250;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={p.id}
                            className={`absolute w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border transition-all duration-700 ${activeIdx === idx ? 'bg-[#072C55] border-[#072C55] text-white shadow-2xl scale-125 z-20' : 'bg-white border-[#072C55]/10 text-[#072C55]/30 scale-100 opacity-20'}`}
                            initial={false}
                            animate={{ x, y }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                             {(() => {
                                 const Icon = p.icon;
                                 return <Icon size={activeIdx === idx ? 28 : 20} />;
                             })()}
                            
                            {/* Connector Line to Center */}
                            <div className={`absolute w-[1px] bg-gradient-to-t from-current to-transparent h-[150px] md:h-[250px] bottom-1/2 origin-bottom transition-all duration-700`} 
                                 style={{ 
                                    transform: `rotate(${angle + Math.PI/2}rad)`,
                                    opacity: activeIdx === idx ? 0.4 : 0 
                                 }} 
                            />
                        </motion.div>
                    );
                 })}

                 {/* Central Core Module */}
                 <div className="relative z-10 w-24 h-24 md:w-48 md:h-48 rounded-full bg-white border border-[#072C55]/10 shadow-2xl flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-[#072C55]/[0.02] group-hover:bg-[#072C55]/[0.05] transition-colors" />
                      <div className="relative text-center">
                           <motion.div
                             animate={{ scale: [1, 1.1, 1] }}
                             transition={{ duration: 2, repeat: Infinity }}
                             className={`mb-2 mx-auto transition-colors duration-700`}
                             style={{ color: current.color }}
                           >
                                <Cpu size={32} />
                           </motion.div>
                           <div className="font-mono text-[9px] font-black text-[#072C55] tracking-widest uppercase">CULTURE_OS</div>
                           <div className="font-mono text-[11px] font-bold text-[#5210F8] animate-pulse uppercase">v{activeIdx + 1}.4.2</div>
                      </div>
                      
                      {/* Scanning Visual */}
                      <motion.div 
                        animate={{ top: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5210F8]/20 to-transparent pointer-events-none" 
                      />
                 </div>
            </div>

            {/* Page Floating Indicators */}
            <div className="absolute bottom-10 right-10 lg:right-24 font-mono text-[10px] font-black text-[#072C55]/20 flex flex-col gap-2 items-end">
                 <span>SYS_TYPE: PHILOSOPHY_CORE</span>
                 <span>COORD_X: 42.08.11N</span>
                 <span>COORD_Y: 19.92.05E</span>
            </div>
        </div>

      </div>
    </section>
  );
}
