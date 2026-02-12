"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

// --- VISUAL ASSETS ---
// Floating blocks representing "Built Projects" or "Deployments"
function ProjectConstellation(props: any) {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
        groupRef.current.rotation.y = t * 0.05;
        groupRef.current.rotation.z = Math.sin(t * 0.05) * 0.02;
    }
  });

  // Generate cubic particle field
  const particlePositions = useMemo(() => {
      const count = 400;
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count; i++) {
          const x = (Math.random() - 0.5) * 25;
          const y = (Math.random() - 0.5) * 25;
          const z = (Math.random() - 0.5) * 10;
          positions[i*3] = x;
          positions[i*3+1] = y;
          positions[i*3+2] = z;
      }
      return positions;
  }, []);

  return (
    <group ref={groupRef} {...props}>
      {/* Central Structure: Abstract Monolith */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh rotation={[0.5, 0.5, 0]}>
            <boxGeometry args={[3, 4, 3]} />
            <meshBasicMaterial 
                color="#5210F8" 
                wireframe 
                transparent 
                opacity={0.05} 
            />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[3, -2, -1]} rotation={[0, 0.5, 0.5]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial 
                color="#00FF94" 
                wireframe 
                transparent 
                opacity={0.05} 
            />
        </mesh>
      </Float>

      {/* Scattered Data Points */}
      <Points positions={particlePositions} stride={3} frustumCulled={false}>
         <PointMaterial 
            transparent 
            color="#5210F8" 
            size={0.05} 
            sizeAttenuation={true} 
            opacity={0.5} 
            depthWrite={false}
         />
      </Points>
    </group>
  );
}

// --- MAIN COMPONENT ---
export default function WorkHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP Parallax
  useEffect(() => {
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

        if (textRef.current) tl.to(textRef.current, { yPercent: 40, ease: "none", opacity: 0 }, 0);
        if (fgRef.current) tl.to(fgRef.current, { yPercent: 10, ease: "none" }, 0);
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100vh] bg-[#020617] overflow-hidden">
        
        {/* LAYER 0: THREE.JS BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
             <Canvas camera={{ position: [0, 0, 15], fov: 50 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                    <ProjectConstellation />
                    <ambientLight intensity={0.5} />
                    <fog attach="fog" args={['#020617', 10, 30]} />
                </Suspense>
             </Canvas>
        </div>

        {/* Cinematic Filters */}
        <div className="absolute inset-0 z-1 pointer-events-none">
            <div className="absolute top-0 w-full h-[30vh] bg-gradient-to-b from-[#020617] to-transparent opacity-90" />
            <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />
        </div>

        {/* LAYER 1: TYPOGRAPHY */}
        <div ref={textRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6">
            
            {/* Badge */}
            <div className="mb-8 overflow-hidden">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5210F8]/20 bg-[#5210F8]/5 backdrop-blur-md text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#5210F8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5210F8] animate-pulse" />
                        Client Success
                    </span>
                </div>
            </div>

            {/* Main Title */}
            <h1 className="flex flex-col items-center text-center font-black tracking-tighter leading-[0.85] select-none text-white mix-blend-screen">
                <span className="text-[14vw] md:text-[8vw] opacity-20 blur-[1px] animate-in fade-in zoom-in duration-1000 delay-100" 
                      style={{ WebkitTextStroke: '1px rgba(82, 16, 248, 0.4)', color: 'transparent' }}>
                    ACTIVE
                </span>
                <span className="text-[16vw] md:text-[10vw] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    RESULTS
                </span>
            </h1>

            {/* Subtext */}
            <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <p className="text-base md:text-xl text-white/70 font-light leading-relaxed">
                    A showcase of our <span className="text-white font-medium">strategic leadership</span>. 
                    Real-world campaigns that drive measurable impact.
                </p>
            </div>

            {/* Stats */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:flex justify-center gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 w-full max-w-3xl">
                {['Industry Agnostic', 'Global Reach', 'High Impact'].map((item, i) => (
                    <div key={i} className="flex flex-col items-center cursor-default pointer-events-auto px-4 border-l border-white/10 first:border-0">
                        <span className="text-lg md:text-xl font-bold text-white uppercase tracking-wider">{item}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* LAYER 2: SCROLL INDICATOR */}
        <div ref={fgRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-50">
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">View Client Feedback</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#5210F8] to-transparent" />
             <ArrowDown className="w-4 h-4 text-[#5210F8] animate-bounce" />
        </div>

    </section>
  );
}
