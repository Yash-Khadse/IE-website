"use client";

import React, { useRef, useMemo, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// --- VISUAL ASSETS ---
// --- VISUAL ASSETS ---
// A geometric wireframe mesh representing structure and data
// --- VISUAL ASSETS ---
// A complex, layered digital ecosystem representing the "InvisiEdge"
function DigitalEcosystem(props: any) {
  const outerRef = useRef<THREE.Mesh>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  const particlesRef = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Outer Shell: Slow, majestic rotation (The Infrastructure)
    if (outerRef.current) {
        outerRef.current.rotation.y = t * 0.05;
        outerRef.current.rotation.z = Math.sin(t * 0.1) * 0.1;
    }

    // Inner Core: Faster, complex rotation (The Intelligence)
    if (innerRef.current) {
        innerRef.current.rotation.x = t * 0.2;
        innerRef.current.rotation.y = t * 0.25;
    }

    // Particles: Breathing/Pulsing effect
    if (particlesRef.current) {
        particlesRef.current.rotation.y = -t * 0.1;
        particlesRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.1);
    }
  });

  // Generate particles
  const particlePositions = useMemo(() => {
      const count = 400;
      const positions = new Float32Array(count * 3);
      for(let i=0; i<count; i++) {
          const r = 10 + Math.random() * 15; // Spread around the core
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
      {/* Outer Shell: The Systems Boundary */}
      <mesh ref={outerRef} scale={[1.8, 1.8, 1.8]}>
        <icosahedronGeometry args={[10, 1]} />
        <meshBasicMaterial 
            color="#5210F8" // Fooror Purple
            wireframe 
            transparent 
            opacity={0.12} 
            side={THREE.DoubleSide}
        />
      </mesh>

      {/* Inner Core: The Logic Engine (Torus Knot) */}
      <mesh ref={innerRef}>
        <torusKnotGeometry args={[6, 1.5, 150, 20]} />
        <meshBasicMaterial 
            color="#C47DFD" // Fooror Light Purple
            wireframe 
            transparent 
            opacity={0.15} 
        />
      </mesh>

      {/* Dynamic Data Particles */}
      <Points ref={particlesRef} positions={particlePositions} stride={3}>
         <PointMaterial 
            transparent 
            color="#FFFFFF" 
            size={0.06} 
            sizeAttenuation={true} 
            opacity={0.4} 
         />
      </Points>
    </group>
  );
}

// --- MAIN COMPONENT ---
export function HybridHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Initialize GSAP Parallax
  useEffect(() => {
    if (typeof window === "undefined" || !parallaxRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 0
            }
        });

        // Parallax Logic
        tl.to("[data-layer='sky']",  { yPercent: 40, ease: "none" }, 0);
        tl.to("[data-layer='text']", { yPercent: 20, ease: "none" }, 0);
        tl.to("[data-layer='hill']", { yPercent: 5, ease: "none" }, 0); // Almost static
        
    }, parallaxRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100svh] md:h-[120vh] bg-fooror-navy overflow-hidden">
        
        {/* LAYER 0: THREE.JS BACKGROUND (The Deep Void) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
             <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: false }}>
                <Suspense fallback={null}>
                    <DigitalEcosystem />
                    <ambientLight intensity={0.5} />
                </Suspense>
             </Canvas>
        </div>

        {/* PARALLAX CONTAINER */}
        <div ref={parallaxRef} className="absolute inset-0 z-10 w-full h-full">

            {/* LAYER 1: SKY IMAGE & GLOW (Blends with Three.js) */}
            <div data-layer="sky" className="absolute inset-0 w-full h-[120vh] -top-[10%] z-0">
                 {/* Image Texture: Dark Geometric Grid */}
                 <img 
                    src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2560&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                    alt="Dark Grid"
                />
                
                {/* Gradient to darken the top/bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-fooror-navy via-fooror-navy/50 to-fooror-navy/90" />
                
                {/* Sun/Core Glow */}
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fooror-purple/30 rounded-full blur-[120px] animate-pulse-glow mix-blend-screen" />
            </div>

            {/* LAYER 2: TYPOGRAPHY (The Subject) */}
            <div data-layer="text" className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none pb-20">
                {/* "SYSTEMS" - Background Text - Fixed Contrast */}
                <h1 className="text-[16vw] leading-[0.8] font-black tracking-tighter text-white/10 text-center select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 blur-[1px]"
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
                    ARCHITECT
                </h1>
                
                {/* "GROWTH" - Foreground Text - High Visibility */}
                <h1 className="text-[13vw] leading-[0.8] font-black tracking-tighter text-white text-center drop-shadow-2xl relative z-10 transform -translate-y-4">
                    AUTOMATE
                </h1>
                
                <p className="mt-12 text-xl text-white font-semibold max-w-xl text-center leading-relaxed drop-shadow-lg bg-fooror-navy/20 backdrop-blur-sm rounded-lg py-2 px-4 border border-white/5 relative z-20">
                    Engineered brand systems for the next distribution cycle.
                </p>
            </div>

            {/* LAYER 3: FOREGROUND TERRAIN (Analytics Dashboard) */}
            <div data-layer="hill" className="absolute inset-0 z-20 pointer-events-none w-full h-[120vh] top-[5%] flex items-end">
                 <div className="w-full h-[55%] relative">
                    {/* The Dark Hill Base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-fooror-navy via-fooror-navy/100 to-transparent" />
                    
                    {/* Analytics Graph Image masked as terrain */}
                    <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                        className="w-full h-full object-cover object-center opacity-70 mix-blend-normal mask-image-hill"
                        style={{ maskImage: 'linear-gradient(to top, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)' }}
                        alt="Analytics Dashboard"
                    />
                 </div>
                 
                 {/* Scroll Indicator anchored to terrain */}
                 <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                     <div className="w-[2px] h-16 bg-gradient-to-b from-fooror-purple-light to-transparent" />
                     <span className="text-white text-[10px] font-bold font-mono tracking-[0.3em] uppercase drop-shadow-md">Scroll</span>
                 </div>
            </div>

        </div>

        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
    </div>
  );
}
