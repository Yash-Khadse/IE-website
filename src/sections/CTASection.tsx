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
      className="relative w-full py-16 md:py-32 bg-secondary flex items-center justify-center overflow-hidden"
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

      <div className="w-full max-w-[1320px] px-4 md:px-6 relative z-10">
        <CardContainer className="!py-0 !block perspective-2000" containerClassName="!py-0 !block">
          <CardBody className="bg-card backdrop-blur-xl border border-primary/20 rounded-[3rem] p-8 md:p-12 lg:p-16 relative flex flex-col lg:flex-row gap-12 lg:gap-20 w-full h-auto shadow-2xl group/card overflow-hidden">
            
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
                <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                        <div className="px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-primary font-mono text-xs tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            SYSTEM_READY
                        </div>
                        <span className="text-muted-foreground font-mono text-xs hidden sm:block">ID: CX-9902</span>
                    </div>
                    <div className="flex gap-1">
                        {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />)}
                    </div>
                </div>
                
                <h2 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-bold text-foreground leading-[0.9] tracking-tighter shadow-black drop-shadow-sm mb-6">
                  READY TO
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground">DEPLOY?</span>
                </h2>
              </CardItem>
              
              <CardItem translateZ="50" className="w-full relative mb-10 h-8">
                 <span className="text-xl md:text-2xl text-primary font-medium font-mono tracking-tight">
                    {isInView && <TypewriterText text="> Initialize multi-brand orchestration sequence..." delay={0.5} />}
                 </span>
              </CardItem>
  
              <CardItem translateZ="30" className="w-full mt-2 max-w-lg mb-10">
                <div className="flex flex-col w-full gap-3">
                  {[
                    { text: 'Cross-Brand Interface Audit', icon: Cpu, id: 'A01' },
                    { text: 'Automated Scalability Protocols', icon: Globe, id: 'S02' },
                    { text: 'Systemic Brand Safety Logic', icon: Lock, id: 'K03' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/30 transition-all group/item backdrop-blur-sm cursor-default">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded bg-background border border-primary/20 text-primary group-hover/item:text-foreground transition-colors">
                            <item.icon size={18} />
                        </div>
                        <span className="text-muted-foreground text-lg font-medium group-hover/item:text-foreground transition-colors">{item.text}</span>
                      </div>
                      <span className="text-muted-foreground/30 font-mono text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">[{item.id}]</span>
                    </div>
                  ))}
                </div>
              </CardItem>
  
              <CardItem translateZ="60" className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                 <button
                   className="group relative px-10 py-5 bg-fooror-purple/90 text-white rounded-xl font-bold text-lg tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(82,16,248,0.4)] hover:shadow-[0_0_60px_rgba(82,16,248,0.6)] border border-white/10"
                 >
                   {/* Light Glint Effect */}
                   <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                   
                   <span className="relative flex items-center gap-3">
                       <Terminal size={20} /> INITIATE_SEQUENCE
                   </span>
                 </button>
                 <div className="flex flex-col gap-1">
                     <span className="text-muted-foreground font-medium text-sm">Deployment Consultation</span>
                     <span className="text-fooror-purple-light/80 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Slots Open
                     </span>
                 </div>
              </CardItem>
            </div>
  
            {/* Right Content: Operator Stack */}
            <div className="flex-1 relative min-h-[500px] lg:min-h-auto flex items-center justify-center lg:justify-end perspective-1000">
               <CardItem translateZ="80" rotateX={5} rotateZ={-2} className="relative w-full max-w-[500px] lg:mr-4 flex flex-col items-end group/stack">
                  
                  {/* Operator Card 1 (Back) */}
                  <div className="bg-card/90 border border-border rounded-2xl p-5 w-[90%] flex items-center gap-5 shadow-xl relative z-10 
                       translate-y-24 translate-x-8 scale-95 opacity-60
                       group-hover/stack:translate-y-32 group-hover/stack:translate-x-12 group-hover/stack:opacity-80 group-hover/stack:rotate-3
                       transition-all duration-700 ease-out backdrop-blur-md">
                     <div className="w-16 h-16 rounded-xl bg-muted overflow-hidden border border-border relative shrink-0">
                         <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop" alt="Operator" className="w-full h-full object-cover grayscale" />
                     </div>
                     <div>
                        <div className="text-primary text-[0.65rem] font-mono tracking-widest uppercase mb-1">System_Architect</div>
                        <h4 className="text-lg font-bold text-foreground">Sarah Chen</h4>
                     </div>
                  </div>

                  {/* Operator Card 2 (Middle) */}
                  <div className="bg-card border border-border rounded-2xl p-5 w-[95%] flex items-center gap-5 shadow-xl relative z-20 
                       translate-y-12 translate-x-4 scale-95
                       group-hover/stack:translate-y-16 group-hover/stack:translate-x-6 group-hover/stack:rotate-1
                       transition-all duration-700 ease-out backdrop-blur-md hover:border-primary/30">
                     <div className="w-16 h-16 rounded-xl bg-muted overflow-hidden border border-border relative shrink-0">
                         <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop" alt="Operator" className="w-full h-full object-cover grayscale mix-blend-luminosity" />
                     </div>
                     <div>
                        <div className="text-primary text-[0.65rem] font-mono tracking-widest uppercase mb-1">Logic_Lead</div>
                        <h4 className="text-lg font-bold text-foreground">Andriy Semeshkin</h4>
                        <div className="text-muted-foreground text-xs leading-snug font-mono mt-1">&gt; Infrastructure</div>
                     </div>
                  </div>

                  {/* Operator Card 3 (Front - Main) */}
                  <div className="bg-card border border-primary/40 rounded-2xl p-6 w-full flex items-center gap-6 shadow-2xl relative z-30 
                       group-hover/stack:translate-y-0 group-hover/stack:-rotate-1
                       transition-all duration-700 ease-out backdrop-blur-xl">
                      
                      {/* Live Indicator */}
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[0.6rem] font-mono text-green-600 uppercase">ONLINE</span>
                      </div>

                     <div className="relative shrink-0">
                        <div className="w-20 h-20 rounded-xl bg-muted overflow-hidden border border-border relative">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop" alt="Operator" className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover/stack:mix-blend-normal transition-all duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                        </div>
                     </div>
                     <div>
                        <div className="text-primary text-[0.7rem] font-mono tracking-widest uppercase mb-1">Lead_Architect</div>
                        <h4 className="text-xl font-bold text-foreground mb-2">Dima Diuh</h4>
                        <div className="text-muted-foreground text-sm leading-snug font-mono">
                            &gt; Brand Systems<br/>&gt; Automation Logic
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
