"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { goalsContent } from '@/data/home/goals';

const GoalsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-32 bg-secondary"
    >
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-0">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-5/12 relative z-10"
          >
            <div className="relative">
              {/* Main "OUR GOAL" */}
              <h2 className="text-[3rem] md:text-[4rem] font-bold text-foreground leading-[1] mb-2 tracking-tight">
                {goalsContent.header.title}
              </h2>
              
              {/* Blurred Background Text */}
              <div className="absolute top-[3.5rem] left-0 w-full select-none pointer-events-none overflow-hidden">
                 <h2 className="text-[3.5rem] md:text-[4.5rem] font-bold text-muted-foreground/20 blur-[2px] leading-[1] tracking-tight whitespace-nowrap">
                   {goalsContent.header.blurredBackground}
                 </h2>
              </div>

              {/* Handwritten Overlay */}
              <div className="relative mt-2 ml-2">
                <h3 className="font-bold italic text-[3.5rem] md:text-[4.5rem] leading-[0.85] text-primary transform -rotate-3">
                  {goalsContent.header.highlight.line1} <br />
                  <span className="ml-8">{goalsContent.header.highlight.line2}</span>
                </h3>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:shadow-xl transition-all shadow-md"
            >
              {goalsContent.header.buttonText}
            </motion.button>
          </motion.div>

          {/* Right Side - Isometric Pillars */}
          <div className="lg:w-6/12 flex items-end justify-center lg:justify-end h-[400px] md:h-[500px] pb-10 perspective-[1000px]">
             
             {/* Implementing Isometric Pillars via strict CSS construction */}
             <div className="flex items-end gap-2 lg:mr-10 relative">
                {goalsContent.pillars.map((pillar, idx) => (
                    <IsometricPillar 
                        key={idx}
                        colorFace={pillar.colors.face}
                        colorTop={pillar.colors.top}
                        colorSide={pillar.colors.side}
                        label={pillar.label}
                        height={pillar.height}
                        delay={pillar.delay}
                        isInView={isInView}
                        zIndex={pillar.zIndex}
                        style={{ transform: pillar.translateY }}
                    />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IsometricPillar = ({ colorFace, colorTop, colorSide, label, height, delay, isInView, style, zIndex }: any) => {
  return (
    <div className="relative w-24 md:w-32 group" style={{ ...style, zIndex }}>
      {/* Animation Wrapper */}
      <motion.div
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : {}}
        transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        className={`relative w-full ${height} flex items-end`}
      >
          {/* Pillar Construction */}
          <div className="relative w-full h-full">
             
             {/* Front Face (Main) */}
             <div 
               className="absolute bottom-0 left-0 w-full h-full border-2 border-black z-20"
               style={{ backgroundColor: colorFace }}
             />

             {/* Top Face (Lid) */}
             <div 
               className="absolute -top-[52px] md:-top-[68px] left-[26px] md:left-[34px] w-full h-[52px] md:h-[68px] border-2 border-black z-10 flex items-center justify-center text-center leading-none"
               style={{ 
                 backgroundColor: colorTop,
                 transform: "skewX(-45deg)",
                 transformOrigin: "bottom"
               }}
             >
                <span className="transform skew-x-[45deg] rotate-[-10deg] block text-xs md:text-sm font-bold text-black px-2 pt-4 md:pt-6 select-none">
                  {label}
                </span>
             </div>

             {/* Side Face (Depth) */}
             <div 
               className="absolute top-[-26px] md:top-[-34px] -right-[26px] md:-right-[34px] w-[26px] md:w-[34px] h-full border-2 border-black border-l-0 z-10"
               style={{ 
                 backgroundColor: colorSide,
                 transform: "skewY(-45deg)",
                 transformOrigin: "left"
               }}
             />
          </div>
      </motion.div>
    </div>
  );
};

export default GoalsSection;
