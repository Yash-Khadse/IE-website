"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Cpu, Activity, Code, Layers } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'MARKET AUDIT',
    badge: 'OPPORTUNITY ANALYSIS',
    description: 'We initiate a comprehensive analysis of your digital presence. Identifying conversion gaps, market opportunities, and competitive advantages. This audit builds the blueprint for market domination.',
    icon: Terminal
  },
  {
    id: 2,
    number: '02',
    title: 'STRATEGIC ROADMAP',
    badge: 'CAMPAIGN ARCHITECTURE',
    description: 'Mapping the growth strategy. We design multichannel funnels, integrated workflows, and brand consistency layers. Every channel is optimized for maximum ROI.',
    icon: Layers
  },
  {
    id: 3,
    number: '03',
    title: 'GROWTH ACTIVATION',
    badge: 'GO-TO-MARKET',
    description: 'Executing the strategy with precision. We launch targeted campaigns using data-backed content. Execution ensures seamless scaling across your entire digital portfolio.',
    icon: Code
  },
  {
    id: 4,
    number: '04',
    title: 'REVENUE SCALING',
    badge: 'PERFORMANCE OPTIMIZATION',
    description: 'The campaign enters continuous optimization. We utilize real-time analytics to fine-tune ROI, ensuring your revenue grows predictably with zero friction.',
    icon: Activity
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });


  const scrollToStep = (id: number) => {
    const element = document.getElementById(`process-step-${id}`);
    if (element) {
        // Calculate offset to account for sticky header (80px) + visual breathing room
        const y = element.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative w-full bg-background py-16 md:py-32 font-sans text-foreground border-t border-border"
    >
      {/* Background Wrapper (Clipped) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none text-left">
          {/* Background: Matrix Data Stream */}
          <div className="absolute inset-0 opacity-[0.05]">
              <div className="flex justify-between w-full h-full px-4 md:px-20">
                {[...Array(12)].map((_, i) => (
                    <motion.div 
                        key={i}
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: '120vh', opacity: [0, 0.8, 0] }}
                        transition={{ 
                            duration: Math.random() * 8 + 8, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: Math.random() * 8
                        }}
                        className="w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent h-[300px]"
                    />
                ))}
              </div>
          </div>
          
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      </div>


      {/* Section Title */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 mb-20 md:mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end gap-6"
        >
          <div>
            <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                OUR_APPROACH
            </div>
            <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-foreground leading-[0.9] tracking-tighter shadow-black drop-shadow-xl">
              GROWTH
              <span className="text-muted-foreground/30 block md:inline md:ml-6">ENGINE</span>
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative">
          
          {/* Left Side - Sticky Server Rack Indicator */}
          <div className="hidden lg:flex flex-col w-[360px] h-[calc(100vh-120px)] sticky top-28 bg-card/90 backdrop-blur-xl rounded-2xl border border-border p-8 shadow-2xl z-20">
             {/* <div className="flex justify-between items-center border-b border-border pb-4 mb-6">
                 <span className="text-xs font-mono text-muted-foreground/60">INSIGHT_UNIT_01</span>
                 <div className="flex gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                     <span className="w-1.5 h-1.5 rounded-full bg-green-500/30" />
                 </div>
             </div> */}
             
             <div className="relative flex-1 flex flex-col justify-center py-4 gap-2">
                {/* Vertical Rail Line */}
                <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-border rounded-full" />
                
                {processSteps.map((step) => (
                    <div 
                        key={step.id} 
                        onClick={() => scrollToStep(step.id)}
                        className="relative z-10 group cursor-pointer mb-4 last:mb-0"
                    >
                        <div className={`flex items-center gap-5 p-3 rounded-xl transition-all duration-500 border ${activeStep === step.id ? 'bg-secondary border-border shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] scale-105' : 'border-transparent opacity-40 hover:opacity-70 scale-100 hover:bg-secondary/50'}`}>
                           
                           {/* Step Number Badge */}
                           <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center border transition-all duration-500 ${activeStep === step.id ? 'bg-primary border-primary text-primary-foreground shadow-[0_0_15px_rgba(82,16,248,0.5)]' : 'bg-muted border-border text-muted-foreground'}`}>
                               <span className="font-mono font-bold text-sm">{step.number}</span>
                           </div>

                           <div className="flex flex-col">
                               <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-0.5">Step_{step.number}</span>
                               <span className="text-sm font-bold text-foreground leading-tight">{step.badge}</span>
                           </div>
                        </div>
                        
                        {/* Connecting Glow Line (Active only) */}
                        {activeStep === step.id && (
                           <>
                               <motion.div layoutId="activeGlow" className="absolute -left-[8px] top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50" />
                               <motion.div layoutId="activeDot" className="absolute -left-[14px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_#5210F8] border-2 border-background" />
                           </>
                        )}
                    </div>
                ))}
             </div>

             {/* <div className="mt-auto pt-6 border-t border-border">
                 <div className="flex justify-between text-[10px] font-mono text-muted-foreground mb-2">
                    <span>CAMPAIGN LOAD</span>
                    <span>84%</span>
                 </div>
                 <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
                     <div className="h-full bg-green-500/50 w-[34%]" />
                 </div>
             </div> */}
          </div>

          {/* Right Side - Step Content */}
          <div className="flex-1 min-w-0 pb-32">
             {processSteps.map((step) => (
               <StepContent 
                 key={step.id} 
                 id={`process-step-${step.id}`}
                 step={step} 
                 isActive={activeStep === step.id}
                 onInView={() => setActiveStep(step.id)} 
               />
             ))}
          </div>

        </div>

      </div>

      {/* Bottom Marquee */}
      {/* <div className="absolute bottom-0 left-0 w-full h-12 bg-background/80 border-t border-border flex items-center overflow-hidden pointer-events-none z-20 backdrop-blur-sm">
         <motion.div 
            className="flex gap-16 whitespace-nowrap text-xs font-mono text-muted-foreground/40"
            animate={{ x: "-20%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
         >
             {[...Array(6)].map((_, i) => (
                 <span key={i} className="flex items-center gap-6">
                     <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> MARKETING STATUS: ACTIVE</span>
                     <span>//</span>
                     <span>CONVERSION: 12%</span>
                     <span>//</span>
                     <span>RETENTION: 99.9%</span>
                     <span>//</span>
                     <span>LAST UPDATE: {new Date().toISOString().split('T')[0]}</span>
                 </span>
             ))}
         </motion.div>
      </div> */}

    </section>
  );
};

const StepContent = ({ step, isActive, onInView, id }: { step: any, isActive: boolean, onInView: () => void, id: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      onInView();
    }
  }, [isInView, onInView]);

  return (
    <div id={id} ref={ref} className="min-h-[70vh] md:min-h-screen flex flex-col justify-center py-16 md:py-20 border-b border-border last:border-0 border-dashed relative">
      <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
          
          {/* Text Content */}
          <div className="xl:w-1/2 flex flex-col justify-center order-2 xl:order-1 relative z-10">
               <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
               >
                   <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                            <step.icon size={26} />
                        </div>
                        <span className="px-4 py-2 bg-card border border-border rounded-full text-xs font-mono text-primary tracking-widest shadow-lg">
                            {step.badge}
                        </span>
                   </div>

                   <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mb-8 text-foreground leading-[0.95] drop-shadow-sm">
                       {step.title}
                   </h3>

                   <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-xl font-light">
                     {step.description}
                   </p>

                   {/* <div className="mt-12 flex flex-wrap gap-8 border-t border-border pt-8">
                       <div className="flex flex-col gap-1.5">
                           <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">Target Phase</span>
                           <span className="font-mono text-sm text-foreground/90">Growth_Vector_{step.number}</span>
                       </div>
                       <div className="flex flex-col gap-1.5">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">Campaign Status</span>
                            <span className="font-mono text-sm text-green-400 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Active
                            </span>
                       </div>
                   </div> */}
               </motion.div>
          </div>

          {/* Visual Component */}
          <div className="xl:w-1/2 w-full order-1 xl:order-2 flex items-center">
               <SchematicVisual isActive={isActive} stepId={step.id} />
          </div>

      </div>
    </div>
  );
};

const SchematicVisual = ({ isActive, stepId }: { isActive: boolean, stepId: number }) => {
  return (
    <div className={`w-full aspect-video md:aspect-[4/3] bg-card/50 rounded-3xl border ${isActive ? 'border-primary/40 shadow-[0_0_80px_-30px_rgba(82,16,248,0.5)]' : 'border-border'} overflow-hidden relative transition-all duration-700 group perspective-1000`}>
       
       {/* Background Grid */}
       <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
       
       {/* Scan Line */}
       <motion.div 
            className="absolute top-0 w-full h-[2px] bg-primary shadow-[0_0_20px_#C47DFD] z-10"
            animate={isActive ? { top: ["0%", "100%", "0%"] } : { top: "0%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{ opacity: isActive ? 0.6 : 0 }}
       />

       {/* Corner Markers */}
       <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-fooror-purple/50" />
       <div className="absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 border-fooror-purple/50" />
       <div className="absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 border-fooror-purple/50" />
       <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-fooror-purple/50" />

       {/* Central Animated Element */}
       <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
            {stepId === 1 && (
                <div className="relative w-full max-w-[280px] aspect-square">
                    {/* Radar Circles */}
                    <div className="absolute inset-0 border border-white/10 rounded-full" />
                    <div className="absolute inset-[25%] border border-white/10 rounded-full" />
                    <div className="absolute inset-[50%] border border-white/10 rounded-full" />
                    <div className="absolute inset-[85%] bg-white/5 rounded-full blur-xl" />
                    
                    {/* Rotating Scanner */}
                    <motion.div 
                        className="absolute inset-0 rounded-full border-t border-r border-fooror-purple/60 bg-gradient-to-tr from-transparent via-fooror-purple/10 to-transparent"
                        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Terminal Output */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[120%] mt-8 bg-[#0A0F1C]/90 rounded-lg px-4 py-3 border border-white/10 backdrop-blur font-mono text-[10px] text-green-400 shadow-xl">
                        &gt; Analyzing Market... <span className="text-white">OK</span><br/>
                        &gt; Calculating CPC... <span className="text-yellow-400">$2.40</span><br/>
                        &gt; Brand Health... <span className="animate-pulse">_</span>
                    </div>
                </div>
            )}

            {stepId === 2 && (
                <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
                     <div className="relative w-64 h-64 grid grid-cols-2 gap-4" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateY(-10deg)' }}>
                         {[1,2,3,4].map((i) => (
                             <motion.div 
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                                className="bg-[#0A0F1C] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-fooror-purple/50 transition-colors"
                             >
                                <Cpu size={24} className="text-fooror-purple-light" />
                                <span className="text-[9px] font-mono text-white/30">CHANNEL_0{i}</span>
                             </motion.div>
                         ))}
                     </div>
                </div>
            )}

            {stepId === 3 && (
                <div className="w-full max-w-md bg-[#080C14] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-mono text-xs scale-90 md:scale-100">
                     <div className="bg-white/5 px-4 py-2.5 border-b border-white/5 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                        <span className="ml-auto text-white/20 text-[10px]">launch.sh</span>
                     </div>
                     <div className="p-5 space-y-2 text-white/60 h-[220px] relative">
                         <p className="text-green-400 flex gap-2"><span>$</span> initiate launch_sequence</p>
                         <p className="text-white/40">... targeting audience [OK]</p>
                         <p className="text-white/40">... optimizing bids [OK]</p>
                         {isActive && (
                            <>
                                <motion.p 
                                    initial={{ opacity: 0, x: -10 }} 
                                    animate={{ opacity: 1, x: 0 }} 
                                    transition={{ delay: 0.5 }}
                                    className="text-white"
                                >
                                    &gt; maximizing roas [ai_model]
                                </motion.p>
                                <motion.p 
                                    initial={{ opacity: 0, x: -10 }} 
                                    animate={{ opacity: 1, x: 0 }} 
                                    transition={{ delay: 1.2 }}
                                    className="text-fooror-purple-light"
                                >
                                    &gt; CAMPAIGN LIVE (0.42s)
                                </motion.p>
                                <motion.div 
                                    className="w-full h-1 bg-white/10 mt-4 rounded overflow-hidden"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.div 
                                        className="h-full bg-green-400" 
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                    />
                                </motion.div>
                            </>
                         )}
                     </div>
                </div>
            )}

            {stepId === 4 && (
                <div className="w-full h-full flex items-end justify-between gap-2 px-4 md:px-12 pb-10">
                    {[35, 55, 40, 75, 50, 90, 65, 80, 45, 60].map((h, i) => (
                        <div key={i} className="relative w-full h-full flex items-end group/bar">
                             <motion.div 
                                className="w-full bg-fooror-purple/20 border-t border-fooror-purple hover:bg-fooror-purple/60 transition-colors shadow-[0_0_15px_rgba(82,16,248,0.2)]"
                                initial={{ height: "5%" }}
                                animate={isActive ? { height: `${h}%` } : { height: "5%" }}
                                transition={{ 
                                    type: "spring", 
                                    stiffness: 80, 
                                    damping: 15, 
                                    delay: i * 0.05,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 2 + Math.random() 
                                }}
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-fooror-purple/40 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity" />
                            </motion.div>
                        </div>
                    ))}
                </div>
            )}
       </div>

    </div>
  );
}

export default ProcessSection;
