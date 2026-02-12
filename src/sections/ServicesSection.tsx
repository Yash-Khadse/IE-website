"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { Globe, Lock, Smartphone, MousePointer, ArrowUpRight, CheckCircle2, MessageSquare, Users, BarChart3, Workflow, Zap } from 'lucide-react';
import { servicesContent } from '@/data/home/services';

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // Smooth out the scroll physics
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.5, stiffness: 100, damping: 20 });

  // Responsive check for parallax
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const y1Base = useTransform(smoothProgress, [0, 1], [0, -150]);
  const y2Base = useTransform(smoothProgress, [0, 1], [0, 150]);

  const y1 = isMobile ? 0 : y1Base;
  const y2 = isMobile ? 0 : y2Base;
  
  // Improvised Sticky Motion with 3D Physics:
  // 1. Y: Translates down ~1010px to land perfectly on the core after being shifted up by 64px.
  const y3 = useTransform(smoothProgress, [0, 1], [0, 1010]);
  const scale = useTransform(smoothProgress, [0, 0.8], [1, 0.5]); // Scale down to become the 'node'
  const rotate = useTransform(smoothProgress, [0, 0.5, 1], [0, -5, 0]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [0, 15, 0]);
  const boxShadow = useTransform(smoothProgress, [0, 0.5], ["0px 0px 0px rgba(0,0,0,0)", "0px 30px 60px -12px rgba(82,16,248,0.4)"]);


  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        delay: i * 0.1, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] // Custom snappy ease equivalent to circOut/expoOut
      }
    })
  };

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full py-12 md:py-20 bg-background overflow-visible z-30 perspective-1000"
    >
      {/* Background Grids removed */}

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6"
          >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
              <span className="text-primary text-xs font-mono uppercase tracking-widest">{servicesContent.header.badge}</span>
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight"
          >
            {servicesContent.header.title.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">{servicesContent.header.title.highlight}</span>
            <br />
            {servicesContent.header.title.line2} <span className="italic font-serif text-muted-foreground/50">{servicesContent.header.title.italic}</span>
          </motion.h2>
        </div>

        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1fr_1fr] gap-6 items-start perspective-1000">
          
          {/* Column 3 (Center - Growth Engine) - Mobile: Appear first or second */}
          <motion.div 
            className="lg:hidden col-span-1 md:col-span-2 w-full mb-8 -mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <div className="w-full bg-background/50 backdrop-blur-sm rounded-[2rem] border border-primary/30 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
                <div className="relative z-10 text-center">
                    <div className="mx-auto w-20 h-20 mb-4 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center relative">
                         <Globe size={40} className="text-foreground animate-spin-slow" strokeWidth={1} />
                         <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping-slow" />
                    </div>
                    <div className="text-foreground font-mono text-lg tracking-widest">{servicesContent.centralEngine.title}</div>
                    <div className="text-primary text-xs font-mono mt-2">{servicesContent.centralEngine.hub}</div>
                </div>
             </div>
          </motion.div>
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4 col-span-1">
             {/* Strategic Audit */}
             <motion.div 
               custom={0} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-6 min-h-[220px] flex flex-col justify-between group hover:border-primary/50 transition-colors duration-500"
             >
                <div className="flex justify-between items-start">
                    <div className="p-2 bg-secondary rounded-lg border border-border">
                        <servicesContent.cards.digitalAudit.icon className="text-primary" size={24} />
                    </div>
                    <ArrowUpRight className="text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" size={20} />
                </div>
                <div>
                    <h3 className="text-foreground text-lg font-medium mb-1">{servicesContent.cards.digitalAudit.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{servicesContent.cards.digitalAudit.desc}</p>
                </div>
             </motion.div>

             {/* Brand Loyalty */}
             <motion.div 
               custom={1} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-primary/10 border border-primary/20 rounded-3xl p-6 h-[180px] flex flex-col justify-end relative overflow-hidden group hover:bg-primary/20 transition-colors"
             >
                <div className="absolute top-4 right-4 text-primary text-xs font-mono">{servicesContent.cards.satisfaction.step}</div>
                <div className="text-foreground text-2xl font-bold mb-1">
                    {servicesContent.cards.satisfaction.score}<span className="text-primary text-lg">/5</span>
                </div>
                <div className="text-muted-foreground text-sm">{servicesContent.cards.satisfaction.label}</div>
                
                {/* Visualizer Lines */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end gap-1 px-6 pb-6 opacity-30">
                    {servicesContent.cards.satisfaction.stats.map((h, i) => (
                        <div key={i} className="flex-1 bg-primary rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                </div>
             </motion.div>
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 col-span-1">
             {/* Full Funnel */}
             <motion.div 
               custom={2} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-6 min-h-[240px] flex flex-col"
             >
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 bg-secondary rounded-lg border border-border">
                        <servicesContent.cards.funnel.icon className="text-primary" size={20} />
                   </div>
                   <h3 className="text-foreground font-medium">{servicesContent.cards.funnel.title}</h3>
                </div>
                {/* Simulated Nodes */}
                <div className="flex-1 relative border-l border-border ml-3 pl-6 flex flex-col justify-between py-2">
                    {servicesContent.cards.funnel.steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="absolute -left-[29px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-background border border-primary" />
                            <div className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded w-fit">{step}</div>
                        </div>
                    ))}
                </div>
             </motion.div>

             {/* ROI */}
             <motion.div 
               custom={3} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-card/70 border border-border rounded-3xl p-6 h-[160px] flex justify-between items-center group hover:border-border/80 transition-all"
             >
                  <div>
                    <h3 className="text-muted-foreground text-xs uppercase tracking-widest mb-1">{servicesContent.cards.roi.label}</h3>
                    <div className="text-4xl font-bold text-foreground tracking-tighter group-hover:text-primary transition-colors">{servicesContent.cards.roi.value}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center">
                    <ArrowUpRight className="text-primary" size={20} />
                  </div>
             </motion.div>
          </motion.div>

          {/* Column 3 (Center - Sticky) */}
          <motion.div 
            style={{ y: y3, scale: scale, rotate: rotate, rotateX: rotateX, boxShadow, zIndex: 100, transformStyle: "preserve-3d" }}
            custom={4} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="hidden lg:block col-span-1 h-[440px] relative perspective-1000 -mt-32"
          >
             <div className="w-full h-full bg-background rounded-[2rem] border border-primary/30 p-1 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-primary/20">
                {/* Glowing Core */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" />
                
                <div className="relative z-10 text-center">
                    <div className="mx-auto w-24 h-24 mb-6 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center relative">
                         <Globe size={48} className="text-foreground animate-spin-slow" strokeWidth={1} />
                         <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping-slow" />
                    </div>
                    <div className="text-foreground font-mono text-xl tracking-widest">{servicesContent.centralEngine.title}</div>
                    <div className="text-primary text-xs font-mono mt-2">{servicesContent.centralEngine.hub}</div>
                </div>

                {/* Vertical Lines */}
                <div className="absolute inset-0 pointer-events-none">
                     <div className="absolute left-1/2 top-0 w-px h-16 bg-gradient-to-b from-transparent to-primary" />
                     <div className="absolute left-1/2 bottom-0 w-px h-16 bg-gradient-to-t from-transparent to-primary" />
                </div>
             </div>
          </motion.div>

          {/* Column 4 */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-4 col-span-1">
             {/* Optimization */}
             <motion.div 
               custom={5} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-card/50 backdrop-blur-md border border-border rounded-3xl p-6 min-h-[220px] flex flex-col items-center justify-center relative overflow-hidden group"
             >
                <div className="absolute top-6 left-6 text-foreground text-sm font-medium z-10">{servicesContent.cards.optimization.label}</div>
                {/* Speedometer */}
                <div className="relative w-32 h-32 flex items-center justify-center mt-2 group-hover:scale-105 transition-transform duration-500">
                   <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="50" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="6" className="text-muted-foreground" />
                      <circle cx="64" cy="64" r="50" fill="none" stroke="#C47DFD" strokeWidth="6" strokeDasharray="250 314" strokeLinecap="round" className="animate-pulse" />
                   </svg>
                   <div className="absolute flex flex-col items-center">
                       <span className="text-3xl font-bold text-foreground">{servicesContent.cards.optimization.value}<span className="text-sm text-muted-foreground">{servicesContent.cards.optimization.unit}</span></span>
                   </div>
                </div>
             </motion.div>

             {/* Secure */}
             <motion.div 
               custom={6} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-card rounded-3xl p-6 h-[180px] border border-border flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-colors"
             >
                <div className="p-4 rounded-2xl bg-secondary text-primary mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <servicesContent.cards.consistency.icon size={24} />
                </div>
                <div className="text-foreground text-sm font-medium">{servicesContent.cards.consistency.title}</div>
                <div className="text-muted-foreground text-[10px] mt-1 font-mono">{servicesContent.cards.consistency.status}</div>
             </motion.div>
          </motion.div>

          {/* Column 5 */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-4 col-span-1">
             {/* Performance Marketing */}
             <motion.div 
               custom={7} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 min-h-[240px] flex flex-col relative overflow-hidden"
             >
                 <h3 className="text-foreground font-medium z-10 mb-4">{servicesContent.cards.intelligentConversion.titleLine1}<span className="lg:hidden"> </span><br className="hidden lg:block"/>{servicesContent.cards.intelligentConversion.titleLine2}</h3>
                 <div className="flex-1 bg-secondary/50 border border-border rounded-xl p-3 relative z-10 backdrop-blur-md">
                    {servicesContent.cards.intelligentConversion.metrics.map((metric, i) => (
                        <div key={i} className={`flex items-center gap-2 ${i !== servicesContent.cards.intelligentConversion.metrics.length - 1 ? 'mb-2' : ''}`}>
                            <metric.icon size={12} className={i === 0 ? 'text-muted-foreground' : i === 1 ? 'text-primary' : 'text-green-500'} />
                            <div className={`h-1 ${metric.color} rounded-full`} style={{ width: metric.width }} />
                        </div>
                    ))}
                 </div>
                 {/* Glow element */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/30 rounded-full blur-2xl" />
             </motion.div>

             {/* Scalable */}
             <motion.div 
               custom={8} variants={cardVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
               className="bg-card rounded-3xl p-6 h-full min-h-[180px] flex flex-col justify-between items-start relative overflow-hidden border border-border"
             >
                <div className="relative z-10 w-full">
                    <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background mb-2">
                        <servicesContent.cards.scalable.icon size={16} fill="currentColor" />
                    </div>
                    <div className="font-bold text-foreground">{servicesContent.cards.scalable.title}</div>
                </div>
                <div className="text-muted-foreground text-xs mt-2 relative z-10 w-full border-t border-border pt-2 flex justify-between">
                    <span>{servicesContent.cards.scalable.statusLabel}</span>
                    <span className="font-bold">{servicesContent.cards.scalable.statusValue}</span>
                </div>
             </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
