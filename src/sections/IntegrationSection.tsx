'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Mail, Users, Megaphone, Bot, Ticket, Database, MessageSquare, Network } from 'lucide-react';
import { GoogleGeminiEffect } from '@/components/ui/google-gemini-effect';

// Dark Mode Card with Neon Glow on Hover
const IntegrationCard = ({ icon: Icon, label, top, left, delay, isInView, className, style }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={isInView ? { opacity: 1, scale: 1 } : {}}
    whileHover={{ scale: 1.1, zIndex: 50 }}
    transition={{ duration: 0.5, delay, type: "spring" }}
    style={{ top, left, ...style }}
    className={`z-10 ${className || 'absolute -translate-x-1/2 -translate-y-1/2'}`} 
  >
    <div className="bg-card/80 backdrop-blur-md border border-border rounded-[1.2rem] p-4 shadow-xl w-[140px] h-[140px] flex flex-col items-center justify-center gap-3 group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(82,16,248,0.2)] transition-all duration-300">
        <div className="p-3 rounded-full bg-secondary group-hover:bg-primary transition-colors duration-300">
            <Icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground" strokeWidth={1.5} />
        </div>
        <span className="text-xs font-semibold text-center text-muted-foreground group-hover:text-foreground leading-tight">{label}</span>
    </div>
  </motion.div>
);

const IntegrationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-40 bg-background overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 relative z-10"
        >
          <div className="flex justify-center mb-4">
             <div className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-widest flex items-center gap-2">
                <Network size={12} />
                <span>UNIFIED_GROWTH</span>
             </div>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground leading-none tracking-tighter">
            Everything we build connects. 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">Nothing works in isolation.</span>
          </h2>
        </motion.div>

        {/* Diagram Container */}
        <div className="relative w-full overflow-visible pb-12">
           <div className="relative w-full min-h-[500px] md:h-[600px] mx-auto max-w-[1200px]">
             
            {/* --- GOOGLE GEMINI BACKGROUND LAYER (Retained for abstract connectivity) --- */}
            <div className="absolute inset-x-0 -top-40 h-full w-full opacity-40 pointer-events-none mix-blend-screen scale-125">
                <GoogleGeminiEffect
                    pathLengths={[
                        pathLengthFirst,
                        pathLengthSecond,
                        pathLengthThird,
                        pathLengthFourth,
                        pathLengthFifth,
                    ]}
                    className="h-full"
                    title=""
                    description=""
                />
            </div>
            
            {/* Central Core Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/50 bg-background/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(82,16,248,0.4)] z-20">
                <div className="w-20 h-20 bg-primary rounded-full animate-pulse-slow flex items-center justify-center">
                    <Database className="text-primary-foreground animate-spin-slow" size={32} />
                </div>
            </div>

            {/* --- CARDS LAYER (Desktop) --- */}
            <div className="hidden md:block">
                {/* Left Cards */}
                <IntegrationCard icon={Network} label="Websites & Infrastructure" top="10%" left="20%" delay={0.2} isInView={isInView} />
                <IntegrationCard icon={Megaphone} label="Branding & Identity" top="30%" left="5%" delay={0.4} isInView={isInView} />
                <IntegrationCard icon={Users} label="Social Media Engines" top="55%" left="20%" delay={0.6} isInView={isInView} />

                {/* Right Cards */}
                <IntegrationCard icon={Database} label="CRM" top="10%" left="80%" delay={0.3} isInView={isInView} />
                <IntegrationCard icon={Bot} label="Automation" top="30%" left="95%" delay={0.5} isInView={isInView} />
                <IntegrationCard icon={Ticket} label="Performance Marketing" top="55%" left="80%" delay={0.7} isInView={isInView} />
            </div>

            {/* --- CARDS LAYER (Mobile) --- */}
            <div className="md:hidden grid grid-cols-2 gap-4 pt-20 relative z-30">
                <IntegrationCard className="relative translate-x-0 translate-y-0 w-full" style={{}} icon={Network} label="Websites" delay={0.1} isInView={isInView} />
                <IntegrationCard className="relative translate-x-0 translate-y-0 w-full" style={{}} icon={Megaphone} label="Branding" delay={0.2} isInView={isInView} />
                
                <IntegrationCard className="relative translate-x-0 translate-y-0 w-full" style={{}} icon={Users} label="Social Media" delay={0.3} isInView={isInView} />
                <IntegrationCard className="relative translate-x-0 translate-y-0 w-full" style={{}} icon={Database} label="CRM" delay={0.4} isInView={isInView} />
                
                <IntegrationCard className="relative translate-x-0 translate-y-0 w-full" style={{}} icon={Bot} label="Automation" delay={0.5} isInView={isInView} />
                <IntegrationCard className="relative translate-x-0 translate-y-0 w-full" style={{}} icon={Ticket} label="Marketing" delay={0.6} isInView={isInView} />
            </div>
            
           </div>
        </div>
      </div>
    </section>
  );
};
  
export default IntegrationSection;
