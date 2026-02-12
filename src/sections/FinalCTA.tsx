"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { finalCTAContent } from '@/data/common/final-cta';

const FinalCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 md:py-48 bg-foreground overflow-hidden flex items-center justify-center"
    >
      {/* Background Warp Effect */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,16,248,0.15)_0%,transparent_70%)]" />
          <motion.div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] rounded-full border border-background/5 opacity-20"
             animate={{ scale: [1, 1.2], opacity: [0.2, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
           <motion.div 
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] rounded-full border border-background/5 opacity-20"
             animate={{ scale: [1, 1.2], opacity: [0.2, 0] }}
             transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
          />
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 border border-background/10 text-primary font-mono text-xs tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {finalCTAContent.header.badge}
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-background leading-[0.9] tracking-tighter mb-8">
              {finalCTAContent.header.titleLine1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-background via-primary to-background">{finalCTAContent.header.highlight}</span>
            </h2>

            <p className="text-background/60 text-lg md:text-xl max-w-2xl mx-auto mb-12">
               {finalCTAContent.header.description}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <motion.button
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="group relative px-10 py-5 bg-background text-foreground text-lg font-bold rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                    <span className="relative z-10 flex items-center gap-3">
                       <Terminal size={20} />
                       {finalCTAContent.cta.buttonText}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out" />
                </motion.button>
                
                <span className="text-background/30 text-sm font-mono flex items-center gap-2">
                    {finalCTAContent.cta.secondaryText} <ArrowRight size={14} />
                </span>
            </div>
        </motion.div>

      </div>
      
      {/* Bottom Code Ticker */}
      <div className="absolute bottom-10 left-0 w-full text-center">
           <p className="font-mono text-[10px] text-background/20 uppercase tracking-[0.2em]">
                {finalCTAContent.footer.ticker}
           </p>
      </div>

    </section>
  );
};

export default FinalCTA;
