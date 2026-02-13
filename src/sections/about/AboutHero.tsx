"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';
import { aboutHeroContent } from '@/data/about/hero';

// --- VISUAL ASSETS ---
// A connecting network representing the "Team + Data" synergy
function ConstellationNetwork(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
        // Gentle, flowing rotation
        ref.current.rotation.x = t * 0.05;
        ref.current.rotation.y = t * 0.03;
        // Breathing scale
        ref.current.scale.setScalar(1 + Math.sin(t * 0.3) * 0.05);
    }
  });

  // Generate starfield/node positions
  const sphere = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    for(let i=0; i<count; i++) {
        // Create a galaxy-like spiral or sphere distribution
        const r = 12 * Math.cbrt(Math.random()); 
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i*3+2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  return (
    <group {...props}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
         <PointMaterial
            transparent
            color="#C47DFD" // Fooror Lilac
            size={0.08}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.6}
            blending={THREE.AdditiveBlending}
         />
      </Points>
      {/* Central Core Glow */}
      <mesh scale={[2, 2, 2]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#5210F8" transparent opacity={0.05} wireframe />
      </mesh>
    </group>
  );
}


// --- MAIN COMPONENT ---
export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP Parallax
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined" || !containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.5
            }
        });

        // Parallax Logic matching HybridHero
        tl.to("[data-layer='sky']",  { yPercent: 30, ease: "none" }, 0);
        tl.to("[data-layer='text']", { yPercent: 15, ease: "none" }, 0);
        tl.to("[data-layer='hill']", { yPercent: 5, ease: "none" }, 0);
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[110vh] bg-fooror-navy overflow-hidden">
        
        {/* LAYER 0: THREE.JS BACKGROUND (The Network) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
             <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ antialias: true }}>
                <Suspense fallback={null}>
                    <ConstellationNetwork />
                    <ambientLight intensity={0.5} />
                    {/* Fog to blend into background color */}
                    <fog attach="fog" args={['#072C55', 10, 25]} />
                </Suspense>
             </Canvas>
        </div>

        {/* PARALLAX CONTAINER */}
        <div className="absolute inset-0 z-10 w-full h-full">

            {/* LAYER 1: SKY IMAGE (Network) */}
            <div data-layer="sky" className="absolute inset-0 w-full h-[120vh] -top-[10%] z-0 pointer-events-none">
                 <img 
                    src={aboutHeroContent.visuals.skyImage} 
                    className="w-full h-full object-cover opacity-10 mix-blend-screen"
                    alt="Network"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#072C55] via-[#072C55]/50 to-[#072C55]/90" />
            </div>

            {/* LAYER 2: TYPOGRAPHY (The Message) */}
            <div data-layer="text" className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 pb-20">
                
                {/* Badge */}
                <div className="mb-8 overflow-hidden">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C47DFD]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5210F8] animate-pulse" />
                            {aboutHeroContent.badge}
                        </span>
                    </div>
                </div>

                {/* Main Title - Stacked & Massive */}
                <h1 className="flex flex-col items-center text-center font-black tracking-tighter leading-[0.85] select-none text-white mix-blend-screen relative">
                    <span className="text-[14vw] md:text-[8vw] opacity-30 blur-[1px] animate-in fade-in zoom-in duration-1000 delay-100" 
                          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', color: 'transparent' }}>
                        {aboutHeroContent.titleRow1}
                    </span>
                    <span className="text-[18vw] md:text-[11vw] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {aboutHeroContent.titleRow2}
                    </span>
                </h1>

                {/* Subtext */}
                <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 relative z-20">
                    <p className="text-base md:text-xl text-white/70 font-light leading-relaxed drop-shadow-lg p-2 rounded-lg bg-[#072C55]/40 backdrop-blur-sm border border-white/5">
                        {aboutHeroContent.description}
                    </p>
                </div>
                
                {/* Control Panel / Stats Strip */}
                <div className="mt-12 md:mt-16 grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 pointer-events-auto z-30">
                    {aboutHeroContent.metrics.map((item, i) => (
                        <div key={i} className={`flex flex-col items-center group cursor-default ${i === 2 && i % 2 === 0 ? 'col-span-2' : ''}`}>
                            <span className="text-xl md:text-3xl font-bold text-white group-hover:text-[#C47DFD] transition-colors">{item.value}</span>
                            <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* LAYER 3: TERRAIN (Team/People) */}
            <div data-layer="hill" className="absolute inset-0 z-20 pointer-events-none w-full h-[120vh] top-[5%] flex items-end">
                 <div className="w-full h-[55%] relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#072C55] via-[#072C55] to-transparent" />
                    <img 
                        src={aboutHeroContent.visuals.terrainImage}
                        className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
                        style={{ maskImage: 'linear-gradient(to top, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)' }}
                        alt="Team Foundation"
                    />
                 </div>
                 
                 <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                     <div className="w-[1px] h-12 bg-gradient-to-b from-[#5210F8] to-transparent" />
                     <span className="text-white text-[10px] font-mono tracking-[0.3em] uppercase drop-shadow-md">{aboutHeroContent.scrollLabel}</span>
                     <ArrowDown className="w-4 h-4 text-[#5210F8] animate-bounce" />
                 </div>
            </div>
        </div>

    </section>
  );
}
