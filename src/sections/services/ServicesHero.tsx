"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

// --- VISUAL ASSETS ---
// A complex, structured service grid representing "capabilities"
function ServiceGrid(props: any) {
  const groupRef = useRef<THREE.Group>(null!);
  const gridRef = useRef<THREE.LineSegments>(null!);
  const particlesRef = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Slight undulation for the whole system
    if (groupRef.current) {
        groupRef.current.rotation.y = t * 0.05;
        groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    }

    // Particles: Flowing up
    if (particlesRef.current) {
        particlesRef.current.rotation.y = t * 0.02;
    }
  });

  // Generate structured particles (Grid intersections)
  const particlePositions = useMemo(() => {
      const count = 600;
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count; i++) {
          const r = 15;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(2 * Math.random() - 1);
          
          positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
          positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
          positions[i*3+2] = r * Math.cos(phi);
      }
      return positions;
  }, []);

  return (
    <group ref={groupRef} {...props}>
      {/* Central Architecture: A Wireframe Globe/Net */}
      <mesh scale={[3, 3, 3]}>
        <icosahedronGeometry args={[4, 2]} />
        <meshBasicMaterial 
            color="#5210F8" // Brand Purple for "Active Services"
            wireframe 
            transparent 
            opacity={0.03} 
            side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner Core: Stability */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <dodecahedronGeometry args={[2.5, 0]} />
        <meshBasicMaterial 
            color="#5210F8" 
            wireframe 
            transparent 
            opacity={0.08} 
        />
      </mesh>

      {/* Floating Data Points */}
      <Points ref={particlesRef} positions={particlePositions} stride={3} frustumCulled={false}>
         <PointMaterial 
            transparent 
            color="#5210F8" 
            size={0.06} 
            sizeAttenuation={true} 
            opacity={0.4} 
            depthWrite={false}
         />
      </Points>
    </group>
  );
}

import { servicesHeroContent } from "@/data/services/hero";

// --- MAIN COMPONENT ---
export default function ServicesHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP Parallax
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined" || !containerRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Create context to easily revert styles
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
    <section ref={containerRef} className="relative w-full h-[100vh] bg-[#072C55] overflow-hidden">
        
        {/* LAYER 0: THREE.JS BACKGROUND (The Digital Void) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
             <Canvas camera={{ position: [0, 0, 14], fov: 50 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                    <ServiceGrid />
                    <ambientLight intensity={0.5} />
                    <fog attach="fog" args={['#072C55', 8, 25]} />
                </Suspense>
             </Canvas>
        </div>

        {/* PARALLAX CONTAINER */}
        <div className="absolute inset-0 z-10 w-full h-full">

            {/* LAYER 1: SKY IMAGE (Server/Data Center) */}
            <div data-layer="sky" className="absolute inset-0 w-full h-[120vh] -top-[10%] z-0 pointer-events-none">
                 <img 
                    src={servicesHeroContent.visuals.skyImage} 
                    className="w-full h-full object-cover opacity-10 mix-blend-screen"
                    alt="Data Center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#072C55] via-[#072C55]/50 to-[#072C55]/90" />
            </div>

            {/* LAYER 2: TYPOGRAPHY (The Core Message) */}
            <div data-layer="text" className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 pb-20">
                
                {/* Badge */}
                <div className="mb-8 overflow-hidden">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5210F8]/20 bg-[#5210F8]/5 backdrop-blur-md text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C47DFD]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5210F8] animate-pulse" />
                            {servicesHeroContent.badge}
                        </span>
                    </div>
                </div>

                {/* Main Title - Stacked & Massive */}
                <h1 className="flex flex-col items-center text-center font-black tracking-tighter leading-[0.85] select-none text-white mix-blend-screen relative">
                    <span className="text-[14vw] md:text-[8vw] opacity-20 blur-[1px] animate-in fade-in zoom-in duration-1000 delay-100" 
                          style={{ WebkitTextStroke: '1px rgba(82, 16, 248, 0.3)', color: 'transparent' }}>
                        {servicesHeroContent.title.static}
                    </span>
                    <span className="text-[18vw] md:text-[11vw] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {servicesHeroContent.title.highlight}
                    </span>
                </h1>

                {/* Subtext Box */}
                <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 relative z-20">
                    <p className="text-base md:text-xl text-white/70 font-light leading-relaxed drop-shadow-lg p-2 rounded-lg bg-[#072C55]/40 backdrop-blur-sm border border-white/5">
                        {servicesHeroContent.description.split(servicesHeroContent.highlight)[0]}
                        <span className="text-white font-medium">{servicesHeroContent.highlight}</span>
                        {servicesHeroContent.description.split(servicesHeroContent.highlight)[1]}
                    </p>
                </div>

                {/* Control Panel / Stats Strip */}
                <div className="mt-12 md:mt-16 grid grid-cols-3 gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 divide-x divide-white/10 w-full max-w-3xl pointer-events-auto z-30">
                    {servicesHeroContent.stats.map((item, i) => (
                        <div key={i} className="flex flex-col items-center group cursor-default px-4 hover:text-[#5210F8] transition-colors">
                            <span className="text-lg md:text-2xl font-bold text-white transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* LAYER 3: TERRAIN (Dashboard) */}
            <div data-layer="hill" className="absolute inset-0 z-20 pointer-events-none w-full h-[120vh] top-[5%] flex items-end">
                 <div className="w-full h-[55%] relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#072C55] via-[#072C55] to-transparent" />
                    <img 
                        src={servicesHeroContent.visuals.terrainImage}
                        className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
                        style={{ maskImage: 'linear-gradient(to top, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)' }}
                        alt="Control Dashboard"
                    />
                 </div>
                 
                 <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                     <div className="w-[1px] h-12 bg-gradient-to-b from-[#5210F8] to-transparent" />
                     <span className="text-white text-[10px] font-mono tracking-[0.3em] uppercase drop-shadow-md">{servicesHeroContent.scrollLabel}</span>
                     <ArrowDown className="w-4 h-4 text-[#5210F8] animate-bounce" />
                 </div>
            </div>
        </div>

    </section>
  );
}
