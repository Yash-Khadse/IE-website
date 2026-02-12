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
                scrub: 0.5
            }
        });
        if (textRef.current) tl.to(textRef.current, { yPercent: 40, ease: "none", opacity: 0 }, 0);
        if (fgRef.current) tl.to(fgRef.current, { yPercent: 10, ease: "none" }, 0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100dvh] bg-[#020617] overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
             <Canvas camera={{ position: [0, 0, 20], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <Suspense fallback={null}>
                    <KnowledgeStream />
                    <ambientLight intensity={0.5} />
                    <fog attach="fog" args={['#020617', 12, 35]} />
                </Suspense>
             </Canvas>
        </div>
        <div className="absolute inset-0 z-1 pointer-events-none">
            <div className="absolute top-0 w-full h-[30vh] bg-gradient-to-b from-[#020617] to-transparent opacity-90" />
            <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] mix-blend-overlay pointer-events-none" />
        </div>
        <div ref={textRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6">
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
            <div className="mt-8 md:mt-12 max-w-2xl text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <p className="text-base md:text-xl text-white/70 font-light leading-relaxed">
                    {blogHeroContent.description.split(blogHeroContent.highlights[0])[0]}
                    <span className="text-[#C47DFD] font-medium">{blogHeroContent.highlights[0]}</span>
                    {blogHeroContent.description.split(blogHeroContent.highlights[0])[1].split(blogHeroContent.highlights[1])[0]}
                    <span className="text-[#C47DFD] font-medium">{blogHeroContent.highlights[1]}</span>
                    {blogHeroContent.description.split(blogHeroContent.highlights[1])[1]}
                </p>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-12 mt-16 max-w-4xl w-full text-center border-t border-white/5 pt-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-700">
                <div className="group flex flex-col items-center gap-2 cursor-pointer">
                    <Cpu className="text-white/40 group-hover:text-[#5210F8] transition-colors w-6 h-6" />
                    <span className="text-xs font-mono font-bold text-white/60 tracking-widest uppercase group-hover:text-white transition-colors">
                        {blogHeroContent.stats[0].label}
                    </span>
                </div>
                <div className="group flex flex-col items-center gap-2 cursor-pointer">
                    <Network className="text-white/40 group-hover:text-[#5210F8] transition-colors w-6 h-6" />
                    <span className="text-xs font-mono font-bold text-white/60 tracking-widest uppercase group-hover:text-white transition-colors">
                        {blogHeroContent.stats[1].label}
                    </span>
                </div>
                <div className="group flex flex-col items-center gap-2 cursor-pointer">
                    <Zap className="text-white/40 group-hover:text-[#C47DFD] transition-colors w-6 h-6" />
                    <span className="text-xs font-mono font-bold text-white/60 tracking-widest uppercase group-hover:text-white transition-colors">
                        {blogHeroContent.stats[2].label}
                    </span>
                </div>
            </div>
        </div>
        <div ref={fgRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none opacity-50">
             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">{blogHeroContent.scrollLabel}</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#5210F8] to-transparent" />
             <ArrowDown className="w-4 h-4 text-[#5210F8] animate-bounce" />
        </div>
    </section>
  );
}
