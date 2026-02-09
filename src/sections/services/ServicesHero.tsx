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
            color="#00FF94" // Neon Green for "Active Services"
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
            color="#00FF94" 
            size={0.06} 
            sizeAttenuation={true} 
            opacity={0.4} 
            depthWrite={false}
         />
      </Points>
    </group>
  );
}

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

        // Parallax Logic - Text moves slower than foreground
        if (textRef.current) tl.to(textRef.current, { yPercent: 40, ease: "none", opacity: 0 }, 0);
        if (fgRef.current) tl.to(fgRef.current, { yPercent: 10, ease: "none" }, 0);
        
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

        {/* Cinematic Filters (Grain/Vignette) */}
        <div className="absolute inset-0 z-1 pointer-events-none">
            {/* Top Vignette */}
            <div className="absolute top-0 w-full h-[30vh] bg-gradient-to-b from-[#072C55] to-transparent opacity-90" />
            {/* Bottom Fade */}
            <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-[#072C55] via-[#072C55]/80 to-transparent" />
            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />
        </div>

        {/* LAYER 1: TYPOGRAPHY (The Core Message) */}
        <div ref={textRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6">
            
            {/* Badge */}
            <div className="mb-8 overflow-hidden">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00FF94]/20 bg-[#00FF94]/5 backdrop-blur-md text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#00FF94]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-pulse" />
                        System_Capabilities // Index
                    </span>
                </div>
            </div>

            {/* Main Title - Stacked & Massive */}
            <h1 className="flex flex-col items-center text-center font-black tracking-tighter leading-[0.85] select-none text-white mix-blend-screen">
                <span className="text-[14vw] md:text-[8vw] opacity-20 blur-[1px] animate-in fade-in zoom-in duration-1000 delay-100" 
                      style={{ WebkitTextStroke: '1px rgba(0, 255, 148, 0.3)', color: 'transparent' }}>
                    SCALING
                </span>
                <span className="text-[18vw] md:text-[11vw] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    MATRIX
                </span>
            </h1>

            {/* Subtext Box */}
            <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <p className="text-base md:text-xl text-white/70 font-light leading-relaxed">
                    Precision engineering for <span className="text-white font-medium">high-velocity enterprises</span>. 
                    We architect the infrastructure that powers your next growth cycle.
                </p>
            </div>

            {/* Control Panel / Stats Strip */}
            <div className="mt-12 md:mt-16 grid grid-cols-3 gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 divide-x divide-white/10 w-full max-w-3xl">
                {['9 Core Modules', 'Full Stack', 'Global Scale'].map((item, i) => (
                    <div key={i} className="flex flex-col items-center group cursor-default pointer-events-auto px-4">
                        <span className="text-lg md:text-2xl font-bold text-white group-hover:text-[#00FF94] transition-colors">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* LAYER 2: FOREGROUND ELEMENT (Scroll Indicator) */}
        <div ref={fgRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-50">
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">Initialize Audit</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#00FF94] to-transparent" />
             <ArrowDown className="w-4 h-4 text-[#00FF94] animate-bounce" />
        </div>

    </section>
  );
}
