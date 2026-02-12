"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { Terminal, Shield, Cpu, Zap, Activity, Globe, Lock } from 'lucide-react';

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
      className="relative w-full py-6 md:py-16 bg-secondary flex items-center justify-center overflow-hidden"
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

      <div className="w-full max-w-[1100px] px-2 md:px-6 relative z-10">
        <CardContainer className="!py-0 !block perspective-2000" containerClassName="!py-0 !block">
          <CardBody className="bg-card backdrop-blur-xl border border-primary/20 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 lg:p-10 relative flex flex-col lg:flex-row gap-6 lg:gap-10 w-full h-auto shadow-2xl group/card overflow-hidden">
            
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


            {/* Left Content: Command Interface */}
            <div className="flex-1 flex flex-col justify-center relative z-10 pt-2">
              <CardItem translateZ="40" className="w-full">
                
                
                <h2 className="text-2xl sm:text-[3.5rem] md:text-5xl lg:text-[4rem] font-bold text-foreground leading-[0.95] md:leading-[0.9] tracking-tighter shadow-black drop-shadow-sm mb-4">
                  READY TO
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground">SCALE?</span>
                </h2>
              </CardItem>
              
              <CardItem translateZ="50" className="w-full relative mb-4 md:mb-10 h-6 md:h-8">
                 <span className="text-lg md:text-2xl text-primary font-medium font-mono tracking-tight">
                    {isInView && <TypewriterText text="> Start your growth journey..." delay={0.5} />}
                 </span>
              </CardItem>
  
              <CardItem translateZ="30" className="w-full mt-2 max-w-lg mb-4 md:mb-10">
                <div className="flex flex-col w-full gap-3">
                  {[
                    { text: 'Multi-Channel Performance Audit', icon: Cpu, id: '01' },
                    { text: 'Growth Automation', icon: Globe, id: '02' },
                    { text: 'Brand Systems', icon: Lock, id: '03' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-2 md:p-4 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/30 transition-all group/item backdrop-blur-sm cursor-default">
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="p-1.5 md:p-2 rounded bg-background border border-primary/20 text-primary group-hover/item:text-foreground transition-colors">
                            <item.icon size={16} className="md:w-[18px] md:h-[18px]" />
                        </div>
                        <span className="text-muted-foreground text-sm md:text-lg font-medium group-hover/item:text-foreground transition-colors">{item.text}</span>
                      </div>
                      <span className="text-muted-foreground/30 font-mono text-[10px] md:text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">[{item.id}]</span>
                    </div>
                  ))}
                </div>
              </CardItem>
  
              <CardItem translateZ="60" className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                 <button
                   className="group relative px-6 py-3 md:px-10 md:py-5 bg-fooror-purple/90 text-white rounded-xl font-bold text-sm md:text-lg tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(82,16,248,0.4)] hover:shadow-[0_0_60px_rgba(82,16,248,0.6)] border border-white/10"
                 >
                   {/* Light Glint Effect */}
                   <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                   
                   <span className="relative flex items-center gap-2 md:gap-3">
                       <Terminal size={16} className="md:w-5 md:h-5" /> START GROWTH
                   </span>
                 </button>
                 
              </CardItem>
            </div>
  
            {/* Right Content: Operator Stack */}
            <div className="hidden md:flex flex-1 relative min-h-[400px] lg:min-h-auto items-center justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0">
               <CardItem translateZ="80" rotateX={5} rotateZ={-2} className="relative w-full max-w-[420px] lg:mr-4 flex flex-col items-end group/stack">
                  
                  {/* Operator Card 1 (Back) */}
                  <div className="bg-card/90 border border-border rounded-2xl p-3 md:p-5 w-[90%] flex items-center gap-3 md:gap-5 shadow-xl relative z-10 
                       translate-y-4 translate-x-4 md:translate-y-24 md:translate-x-8 scale-95 opacity-60
                       group-hover/stack:translate-y-8 group-hover/stack:translate-x-6 md:group-hover/stack:translate-y-32 md:group-hover/stack:translate-x-12 group-hover/stack:opacity-80 group-hover/stack:rotate-3
                       transition-all duration-700 ease-out backdrop-blur-md">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-muted overflow-hidden border border-border relative shrink-0">
                         <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" alt="Operator" className="w-full h-full object-cover grayscale" />
                     </div>
                     <div>
                        <div className="text-primary text-[0.65rem] font-mono tracking-widest uppercase mb-1">Growth Strategist</div>
                        <h4 className="text-base md:text-lg font-bold text-foreground">Sarah Chen</h4>
                     </div>
                  </div>

                  {/* Operator Card 2 (Middle) */}
                  <div className="bg-card border border-border rounded-2xl p-3 md:p-5 w-[95%] flex items-center gap-3 md:gap-5 shadow-xl relative z-20 
                       translate-y-2 translate-x-2 md:translate-y-12 md:translate-x-4 scale-95
                       group-hover/stack:translate-y-4 group-hover/stack:translate-x-4 md:group-hover/stack:translate-y-16 md:group-hover/stack:translate-x-6 group-hover/stack:rotate-1
                       transition-all duration-700 ease-out backdrop-blur-md hover:border-primary/30">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-muted overflow-hidden border border-border relative shrink-0">
                         <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" alt="Operator" className="w-full h-full object-cover grayscale mix-blend-luminosity" />
                     </div>
                     <div>
                        <div className="text-primary text-[0.65rem] font-mono tracking-widest uppercase mb-1">Performance Lead</div>
                        <h4 className="text-base md:text-lg font-bold text-foreground">Andriy Semeshkin</h4>
                        <div className="text-muted-foreground text-xs leading-snug font-mono mt-1">&gt; Campaign Strategy</div>
                     </div>
                  </div>

                  {/* Operator Card 3 (Front - Main) */}
                  <div className="bg-card border border-primary/40 rounded-2xl p-3 md:p-6 w-full flex items-center gap-3 md:gap-6 shadow-2xl relative z-30 
                       group-hover/stack:translate-y-0 group-hover/stack:-rotate-1
                       transition-all duration-700 ease-out backdrop-blur-xl">
                      
                      {/* Live Indicator */}
                      

                      <div className="relative shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted overflow-hidden border border-border relative">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Operator" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover/stack:mix-blend-normal transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </div>
                     </div>
                     <div>
                        <div className="text-primary text-[0.7rem] font-mono tracking-widest uppercase mb-1">Growth Director</div>
                        <h4 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">Dima Diuh</h4>
                        <div className="text-muted-foreground text-xs md:text-sm leading-snug font-mono">
                            &gt; Brand Strategy<br/>&gt; Automation Flows
                        </div>
                     </div>
                  </div>

               </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default CTASection;
