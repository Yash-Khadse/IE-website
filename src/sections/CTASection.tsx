"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { Terminal, Shield, Cpu, Zap, Activity, Globe, Lock } from 'lucide-react';

import { ctaContent } from '@/data/common/cta';

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
        let i = 0;
        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i === text.length) clearInterval(interval);
            }, 30); // Typing speed
            return () => clearInterval(interval);
        }, delay * 1000);
        return () => clearTimeout(timer);
    }, [text, delay]);

    return <span>{displayedText}<span className="animate-pulse">_</span></span>;
};

const CTASection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-4 md:py-8 bg-secondary flex items-center justify-center overflow-hidden"
    >
      {/* Background: Holographic Logic Map */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Rotating Grids */}
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle, #C47DFD 1px, transparent 1px)', backgroundSize: '50px 50px' }}
         />
         {/* Glowing Orbs */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse-slow" />
      </div>

      <div className="w-[90%] md:w-full max-w-[1000px] mx-auto md:px-6 relative z-10">
        <CardContainer className="!py-0 !block perspective-2000" containerClassName="!py-0 !block">
          <CardBody className="bg-card backdrop-blur-xl border border-primary/20 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 lg:p-8 relative flex flex-col items-center gap-2 md:gap-4 w-full h-auto shadow-2xl group/card overflow-hidden">
            
            {/* Circuit Board Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M10 10 L30 10 L30 30" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M70 70 L90 70 L90 90" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="30" cy="30" r="2" fill="currentColor" />
                        <circle cx="90" cy="90" r="2" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#circuit)" className="text-muted-foreground/20" />
                </svg>
            </div>
            
            {/* Edge Highlights */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />


            {/* Main Content: Command Interface */}
            <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 py-2 md:py-4">
              <CardItem translateZ="60" className="flex flex-col items-center">
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black text-foreground leading-[0.85] tracking-tighter mb-4 md:mb-6 max-w-4xl uppercase">
                  {ctaContent.header.titleLine1}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary/80 to-foreground/20">{ctaContent.header.highlight}</span>
                </h2>
              </CardItem>
              
              <CardItem translateZ="40" className="w-full relative mb-6 md:mb-8 h-6">
                 <div className="text-sm md:text-xl text-muted-foreground font-medium font-mono tracking-tight flex items-center justify-center gap-2">
                    <span className="text-primary animate-pulse">{isInView && <TypewriterText text={ctaContent.typewriter.prefix} delay={0.5} />}</span>
                    {isInView && <TypewriterText text={ctaContent.typewriter.text} delay={0.8} />}
                 </div>
              </CardItem>
  
              <CardItem translateZ="30" className="w-full max-w-2xl mb-6 md:mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 w-full">
                  {ctaContent.grid.map((item, i) => (
                    <div key={i} className="flex flex-row md:flex-col items-center md:justify-center gap-4 md:gap-2 p-3 md:p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-primary/40 transition-all group/item backdrop-blur-sm cursor-default text-left md:text-center">
                        <div className={`p-2 rounded-lg bg-background border border-border group-hover/item:border-primary/20 transition-all ${item.color}`}>
                            <item.icon size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-foreground text-xs md:text-xs font-bold tracking-tight uppercase">{item.text}</span>
                            <span className="text-muted-foreground/40 font-mono text-[8px] mt-0.5">[{item.id}]</span>
                        </div>
                    </div>
                  ))}
                </div>
              </CardItem>
  
              <CardItem translateZ="80" className="w-full flex flex-col items-center gap-4">
                 <button
                   className="group relative px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-xl font-black text-xs md:text-base tracking-[0.2em] uppercase overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(82,16,248,0.3)] border border-white/20"
                 >
                    {/* Animated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                    
                    <span className="relative flex items-center gap-3">
                       <Terminal size={16} className="md:w-5 md:h-5" /> {ctaContent.button.text}
                    </span>
                 </button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default CTASection;
