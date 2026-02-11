"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Shield, Globe, Radio } from 'lucide-react';

// --- VISUAL ASSETS ---
// A connecting network representing "Global Uplink"
function UplinkNetwork(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
        // Faster rotation for "active connection" feel
        ref.current.rotation.y = t * 0.08;
        ref.current.rotation.z = t * 0.02;
        // Signal pulse scale
        ref.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.08);
    }
  });

  // Generate node positions - Globe distribution
  const sphere = useMemo(() => {
    const count = 1200; // More dense
    const positions = new Float32Array(count * 3);
    for(let i=0; i<count; i++) {
        // Sphere distribution
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = 10 + (Math.random() * 0.5); // Thin shell
        
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
            color="#5210F8" // Brand Purple
            size={0.06}
            sizeAttenuation={true}
            depthWrite={false}
            opacity={0.8}
            blending={THREE.AdditiveBlending}
         />
      </Points>
      {/* Central Signal Core */}
      <mesh scale={[1.5, 1.5, 1.5]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#C47DFD" transparent opacity={0.05} wireframe />
      </mesh>
    </group>
  );
}

// --- MAIN COMPONENT ---
export default function ContactHero() {
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

        // Parallax Logic
        if (textRef.current) tl.to(textRef.current, { yPercent: 50, ease: "none", opacity: 0 }, 0);
        if (fgRef.current) tl.to(fgRef.current, { yPercent: 20, ease: "none" }, 0);
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[90vh] md:h-[100vh] bg-[#020617] overflow-hidden border-b border-white/5">
        
        {/* LAYER 0: THREE.JS BACKGROUND (The Network) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
             <Canvas camera={{ position: [0, 0, 18], fov: 60 }} gl={{ antialias: true }}>
                <Suspense fallback={null}>
                    <UplinkNetwork />
                    <ambientLight intensity={1} />
                    <fog attach="fog" args={['#020617', 10, 30]} />
                </Suspense>
             </Canvas>
        </div>

        {/* Cinematic Filters (Dark Mode) */}
        <div className="absolute inset-0 z-1 pointer-events-none">
            {/* Top Fade */}
            <div className="absolute top-0 w-full h-[30vh] bg-gradient-to-b from-[#020617] to-transparent opacity-90" />
            {/* Bottom Fade */}
            <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />
        </div>

        {/* LAYER 1: PARALLAX TYPOGRAPHY */}
        <div ref={textRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 mt-[-5vh]">
            
            {/* Badge */}
            <div className="mb-8 overflow-hidden">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5210F8]/20 bg-[#5210F8]/10 backdrop-blur-md text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C47DFD] shadow-[0_0_20px_rgba(82,16,248,0.3)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5210F8] animate-pulse shadow-[0_0_10px_#5210F8]" />
                        Growth Partners
                    </span>
                </div>
            </div>

            {/* Main Title - Stacked */}
            <h1 className="flex flex-col items-center text-center font-black tracking-tighter leading-[0.85] select-none text-white mix-blend-screen">
                <span className="text-[12vw] md:text-[8vw] opacity-20 blur-[1px] animate-in fade-in zoom-in duration-1000 delay-100" 
                      style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)', color: 'transparent' }}>
                    STRATEGIC
                </span>
                <span className="text-[15vw] md:text-[10vw] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-2xl">
                    PARTNERSHIP
                </span>
            </h1>

            {/* Subtext */}
            <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <p className="text-base md:text-xl text-white/70 font-light leading-relaxed">
                    Start a <span className="text-white font-medium border-b border-[#5210F8]">transformative dialogue</span> with our strategy team. 
                    Your brand's evolution begins here.
                </p>
            </div>
            
            {/* Stats Strip */}
            <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                {[
                    { icon: Globe, label: 'Global Reach', val: 'Market Leaders' },
                    { icon: Shield, label: 'Brand Safety', val: 'Verified' },
                    { icon: Radio, label: 'Response', val: '< 24 Hours' }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-default pointer-events-auto">
                        <div className="p-2 rounded-full bg-white/5 border border-white/10 text-[#C47DFD] group-hover:bg-[#5210F8] group-hover:text-white transition-colors duration-300">
                            <item.icon size={18} />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-bold text-white group-hover:text-[#C47DFD] transition-colors">{item.val}</span>
                            <span className="text-[9px] uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* LAYER 2: FOREGROUND ELEMENT (Scroll) */}
        <div ref={fgRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-50">
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">Scroll</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#5210F8] to-transparent" />
             <ArrowDown className="w-4 h-4 text-[#5210F8] animate-bounce" />
        </div>

    </section>
  );
}
