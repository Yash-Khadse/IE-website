"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Cpu, Network, Zap } from 'lucide-react';
import { blogHeroContent } from '@/data/blog/hero';

// --- THREE.JS VISUALS ---
function KnowledgeStream(props: any) {
  const groupRef = useRef<THREE.Group>(null!);
  const particlesRef = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
        groupRef.current.rotation.y = t * 0.03;
        groupRef.current.rotation.z = Math.sin(t * 0.05) * 0.05;
    }
    if (particlesRef.current) {
        particlesRef.current.rotation.x = t * 0.05;
    }
  });

  const particlePositions = useMemo(() => {
      const count = 1200;
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count; i++) {
          const theta = THREE.MathUtils.randFloatSpread(360); 
          const phi = THREE.MathUtils.randFloatSpread(360); 
          const r = 12 + Math.random() * 12;
          positions[i*3] = r * Math.sin(theta) * Math.cos(phi);
          positions[i*3+1] = r * Math.sin(theta) * Math.sin(phi);
          positions[i*3+2] = r * Math.cos(theta);
      }
      return positions;
  }, []);

  return (
    <group ref={groupRef} {...props}>
      <mesh scale={[2.5, 2.5, 2.5]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#5210F8" wireframe transparent opacity={0.05} />
      </mesh>
      <Points ref={particlesRef} positions={particlePositions} stride={3} frustumCulled={false}>
         <PointMaterial transparent color="#5210F8" size={0.06} sizeAttenuation={true} opacity={0.6} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
         <torusGeometry args={[9, 0.02, 16, 100]} />
         <meshBasicMaterial color="#5210F8" transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, 0]}>
         <torusGeometry args={[14, 0.02, 16, 100]} />
         <meshBasicMaterial color="#5210F8" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// --- MAIN COMPONENT ---
export default function BlogHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0
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
    <section ref={containerRef} className="relative w-full min-h-[100dvh] bg-[#020617] overflow-hidden">
        
        {/* LAYER 0: THREE.JS BACKGROUND (The Knowledge Stream) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
             <Canvas camera={{ position: [0, 0, 20], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                    <KnowledgeStream />
                    <ambientLight intensity={0.5} />
                    <fog attach="fog" args={['#020617', 12, 35]} />
                </Suspense>
             </Canvas>
        </div>

        {/* PARALLAX CONTAINER */}
        <div className="absolute inset-0 z-10 w-full h-full">

            {/* LAYER 1: SKY IMAGE (Abstract Data Stream) */}
            <div data-layer="sky" className="absolute inset-0 w-full h-[120vh] -top-[10%] z-0 pointer-events-none">
                 <img 
                    src={blogHeroContent.visuals.skyImage} 
                    className="w-full h-full object-cover opacity-20 mix-blend-screen"
                    alt="Data Stream"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#020617]/50 to-[#020617]/90" />
            </div>

            {/* LAYER 2: TYPOGRAPHY (The Message) */}
            <div data-layer="text" className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 pb-20">
                <div className="mb-8 overflow-hidden">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#5210F8]/30 bg-[#5210F8]/10 backdrop-blur-md text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C47DFD]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#5210F8] animate-pulse" />
                            {blogHeroContent.badge}
                        </span>
                    </div>
                </div>
                <h1 className="flex flex-col items-center text-center font-black tracking-tighter leading-[0.85] select-none text-white mix-blend-screen relative">
                    <div className="absolute inset-0 text-transparent opacity-10 bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 blur-[2px] animate-pulse pointer-events-none">DATA</div>
                    <span className="text-[14vw] md:text-[8vw] opacity-30 blur-[1px] animate-in fade-in zoom-in duration-1000 delay-100" 
                          style={{ WebkitTextStroke: '1px rgba(82, 16, 248, 0.5)', color: 'transparent' }}>
                        {blogHeroContent.title.row1}
                    </span>
                    <span className="text-[18vw] md:text-[11vw] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 drop-shadow-[0_0_40px_rgba(82,16,248,0.4)] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {blogHeroContent.title.row2}
                    </span>
                </h1>
                <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 relative z-20">
                    <p className="text-base md:text-xl text-white/70 font-light leading-relaxed drop-shadow-lg p-2 rounded-lg bg-[#020617]/40 backdrop-blur-sm border border-white/5">
                        {blogHeroContent.description.split(blogHeroContent.highlights[0])[0]}
                        <span className="text-[#C47DFD] font-medium">{blogHeroContent.highlights[0]}</span>
                        {blogHeroContent.description.split(blogHeroContent.highlights[0])[1].split(blogHeroContent.highlights[1])[0]}
                        <span className="text-[#C47DFD] font-medium">{blogHeroContent.highlights[1]}</span>
                        {blogHeroContent.description.split(blogHeroContent.highlights[1])[1]}
                    </p>
                </div>
                <div className="hidden md:grid grid-cols-3 gap-12 mt-16 max-w-4xl w-full text-center border-t border-white/5 pt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-700 pointer-events-auto z-30">
                    {blogHeroContent.stats.map((stat, i) => (
                         <div key={i} className="group flex flex-col items-center gap-2 cursor-pointer">
                            {/* Icons rendered simply here or mapped map icons if needed */}
                            <span className="text-xs font-mono font-bold text-white/60 tracking-widest uppercase group-hover:text-white transition-colors">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* LAYER 3: TERRAIN (Digital Archive) */}
            <div data-layer="hill" className="absolute inset-0 z-20 pointer-events-none w-full h-[120vh] top-[5%] flex items-end">
                 <div className="w-full h-[45%] relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617] to-transparent" />
                    <img 
                        src={blogHeroContent.visuals.terrainImage}
                        className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
                        style={{ maskImage: 'linear-gradient(to top, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)' }}
                        alt="Digital Archive"
                    />
                 </div>
                 
                 <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                     <div className="w-[1px] h-12 bg-gradient-to-b from-[#5210F8] to-transparent" />
                     <span className="text-white text-[10px] font-mono tracking-[0.3em] uppercase drop-shadow-md">{blogHeroContent.scrollLabel}</span>
                 </div>
            </div>

        </div>

        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
    </section>
  );
}
