"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GoalsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 md:py-32 bg-secondary"
    >
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-16 lg:gap-0">
          
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
                OUR GOAL
              </h2>
              
              {/* Blurred Background Text */}
              <div className="absolute top-[3.5rem] left-0 w-full select-none pointer-events-none overflow-hidden">
                 <h2 className="text-[3.5rem] md:text-[4.5rem] font-bold text-muted-foreground/20 blur-[2px] leading-[1] tracking-tight whitespace-nowrap">
                   BUILD A SYSTEM
                 </h2>
              </div>

              {/* Handwritten Overlay */}
              <div className="relative mt-2 ml-2">
                <h3 className="font-bold italic text-[4rem] md:text-[5.5rem] leading-[0.85] text-primary transform -rotate-3">
                  scale <br />
                  <span className="ml-8">your brand</span>
                </h3>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg tracking-wide hover:shadow-xl transition-all shadow-md"
            >
              DISCUSS THE PROJECT
            </motion.button>
          </motion.div>

          {/* Right Side - Isometric Pillars */}
          <div className="lg:w-6/12 flex items-end justify-center lg:justify-end h-[400px] md:h-[500px] pb-10 perspective-[1000px]">
             {/* 3D Scene Container */}
             <div className="relative transform-style-3d rotate-x-[60deg] rotate-z-[45deg] flex gap-10"> {/* Logic: Custom CSS transforms for isometric view */}
                
                {/* We need a robust custom CSS construction for these pillars. 
                    Standard CSS 3D transforms are best. 
                    Let's use a simpler approach that mimics the visual perfectly without complex 3d scene logic if possible, 
                    OR build a dedicated 3D structure. The visual is ISOMETRIC.
                */}
             </div>
             
             {/* Implementing Isometric Pillars via strict CSS construction */}
             <div className="flex items-end gap-2 lg:mr-10 relative">
                <IsometricPillar 
                   colorFace="#072C55" // Navy
                   colorTop="#1E4B85" 
                   colorSide="#041C36"
                   label="Strategy"
                   height="h-48 md:h-64"
                   delay={0.2}
                   isInView={isInView}
                   zIndex={30}
                   style={{ transform: 'translate3d(0px, 4.6116em, 0px)' }}
                />
                <IsometricPillar 
                   colorFace="#5210F8" // Primary
                   colorTop="#7E41F9" 
                   colorSide="#3B0BB3"
                   label="Execution"
                   height="h-64 md:h-80"
                   delay={0.4}
                   isInView={isInView}
                   zIndex={20}
                   style={{ transform: 'translate3d(0px, -8.3595em, 0px)' }}
                />
                <IsometricPillar 
                   colorFace="#C47DFD" // Secondary
                   colorTop="#E0B8FE" 
                   colorSide="#A050E0"
                   label="Growth"
                   height="h-80 md:h-96"
                   delay={0.6}
                   isInView={isInView}
                   zIndex={10}
                   style={{ transform: 'translate3d(0px, -16.5306em, 0px)' }}
                />
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
