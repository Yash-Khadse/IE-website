"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField(props: any) {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate particles
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color("#5210F8"); // Primary
    const color2 = new THREE.Color("#C47DFD"); // Secondary
    
    for (let i = 0; i < count; i++) {
        // Spherical distribution
        const r = Math.random() * 15 + 10; // Large radius
        const theta = 2 * Math.PI * Math.random();
        const phi = Math.acos(2 * Math.random() - 1);
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Mix colors
        const mixedColor = Math.random() > 0.5 ? color1 : color2;
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 30; // Slow rotation
        ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function Scene() {
    return (
        <group>
            <ParticleField />
            <ambientLight intensity={0.5} />
        </group>
    );
}

export function ThreeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div ref={containerRef} className="relative w-full h-[110vh] bg-background overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
             <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
             </Canvas>
        </div>
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />

            <motion.div 
               style={{ y }}
               className="text-center relative z-20"
            >
                <div className="mb-4 inline-block px-4 py-1.5 border border-border rounded-full bg-secondary/50 backdrop-blur-sm">
                    <span className="text-sm text-secondary-foreground font-mono tracking-[0.2em] uppercase">
                        Invisible Infrastructure
                    </span>
                </div>
                
                <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-foreground drop-shadow-2xl">
                    SYSTEMS<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/40">
                        OF GROWTH
                    </span>
                </h1>
                
                <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium tracking-tight">
                    We engineer the backend logic that powers billion-dollar brands.
                </p>
            </motion.div>
        </div>

        {/* Foreground Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10 pointer-events-none" />
        
        {/* Grain */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
    </div>
  );
}
