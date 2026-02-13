"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Shield, Globe, Radio } from 'lucide-react';
import { contactHeroContent } from '@/data/contact/hero';

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

        // Parallax Logic matching HybridHero
        tl.to("[data-layer='sky']",  { yPercent: 30, ease: "none" }, 0);
        tl.to("[data-layer='text']", { yPercent: 15, ease: "none" }, 0);
        tl.to("[data-layer='hill']", { yPercent: 5, ease: "none" }, 0);
        
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] bg-[#020617] overflow-hidden border-b border-white/5 flex flex-col items-center justify-center">
        
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

        {/* PARALLAX CONTAINER */}
        <div className="absolute inset-0 z-10 w-full h-full">

            {/* LAYER 1: SKY IMAGE (Global Uplink) */}
            <div data-layer="sky" className="absolute inset-0 w-full h-[120vh] -top-[10%] z-0 pointer-events-none">
                 <img 
                    src={contactHeroContent.visuals.skyImage} 
                    className="w-full h-full object-cover opacity-10 mix-blend-screen"
                    alt="Global Network"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/50 to-[#020617]/90" />
            </div>

            {/* LAYER 2: TYPOGRAPHY */}
            <div data-layer="text" className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 pb-20">
                
                {/* Badge */}
                <div className="mb-8 overflow-hidden">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#5210F8]/20 bg-[#5210F8]/10 backdrop-blur-md text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C47DFD] shadow-[0_0_20px_rgba(82,16,248,0.3)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5210F8] animate-pulse shadow-[0_0_10px_#5210F8]" />
                            {contactHeroContent.badge}
                        </span>
                    </div>
                </div>

                {/* Main Title - Stacked */}
                <h1 className="flex flex-col items-center text-center font-black tracking-tighter leading-[0.85] select-none text-white mix-blend-screen">
                    <span className="text-[10vw] md:text-[8vw] opacity-20 blur-[1px] animate-in fade-in zoom-in duration-1000 delay-100" 
                          style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.2)', color: 'transparent' }}>
                        {contactHeroContent.backgroundTitle}
                    </span>
                    <span className="text-[13vw] md:text-[10vw] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 drop-shadow-2xl">
                        {contactHeroContent.mainTitle}
                    </span>
                </h1>

                {/* Subtext */}
                <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 relative z-20">
                    <p className="text-base md:text-xl text-white/70 font-light leading-relaxed drop-shadow-lg p-2 rounded-lg bg-[#020617]/40 backdrop-blur-sm border border-white/5">
                        {contactHeroContent.description.split(contactHeroContent.highlight)[0]}
                        <span className="text-white font-medium border-b border-[#5210F8]">{contactHeroContent.highlight}</span>
                        {contactHeroContent.description.split(contactHeroContent.highlight)[1]}
                    </p>
                </div>
                
                {/* Stats Strip */}
                <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 pointer-events-auto z-30">
                    {contactHeroContent.stats.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group cursor-default">
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

            {/* LAYER 3: TERRAIN (Communications) */}
            <div data-layer="hill" className="absolute inset-0 z-20 pointer-events-none w-full h-[120vh] top-[5%] flex items-end">
                 <div className="w-full h-[55%] relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617] to-transparent" />
                    <img 
                        src={contactHeroContent.visuals.terrainImage}
                        className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
                        style={{ maskImage: 'linear-gradient(to top, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)' }}
                        alt="Secure Checkpoint"
                    />
                 </div>
                 
                 <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                     <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/50">{contactHeroContent.scrollLabel}</span>
                     <div className="w-[1px] h-12 bg-gradient-to-b from-[#5210F8] to-transparent" />
                     <ArrowDown className="w-4 h-4 text-[#5210F8] animate-bounce" />
                 </div>
            </div>
        </div>

    </section>
  );
}
