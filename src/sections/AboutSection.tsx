"use client";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import { ArrowRight, Box, Code, Cpu, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  // Initialize GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      // 1. Text Splitting
      const titleSplit = new SplitType(titleRef.current!, { types: 'chars,words' });
      const textSplit = new SplitType(textRef.current!, { types: 'lines' });

      // 2. Animate Title Chars (Staggered Reveal)
      gsap.from(titleSplit.chars, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: false,
        },
        y: 100,
        opacity: 0,
        rotateX: -90,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out"
      });

      // 3. Animate Body Text Lines (Fade Up)
      gsap.from(textSplit.lines, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
      });

      // 4. Animate System Cards (Staggered Slide In)
      gsap.utils.toArray<HTMLElement>('.sys-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          x: 50,
          opacity: 0,
          duration: 1,
          delay: i * 0.15,
          ease: "expo.out"
        });
      });

    }, containerRef);

    return () => {
      context.revert();
      // Clean up split types to prevent duplications on strict mode
      // SplitType doesn't have a clean revert, but context.revert handles GSAP. 
      // DOM cleanup is manual if needed, but usually fine in React unless remounting heavily.
    };
  }, []);

  return (
        <section ref={containerRef} className="py-20 md:py-32 px-6 bg-background min-h-screen relative overflow-hidden flex items-center border-t border-border" id="about">
      {/* Background: Geometric Tech Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute w-full h-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] text-foreground" />
      </div>

      {/* Background: Ambient Glow Orb */}
      <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative HUD Elements (GSAP Animated opacity) */}
      <div className="absolute top-10 left-10 text-muted-foreground font-mono text-xs tracking-widest hidden md:block animate-pulse">
         // SYSTEM_STATUS: ONLINE
      </div>
      <div className="absolute bottom-10 right-10 text-muted-foreground font-mono text-xs tracking-widest hidden md:block">
         COORD: 34.05.92
      </div>

      <div className="max-w-[1500px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: The Manifesto */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Scroll Line */}
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden xl:block" />

            <div className="mb-8 flex items-center gap-4">
                <div className="px-3 py-1 border border-primary/30 bg-primary/10 rounded text-primary font-mono text-xs uppercase tracking-widest">
                    Mission Brief
                </div>
                <div className="h-px w-24 bg-border" />
            </div>

            {/* GSAP Target: Title */}
            <h2 ref={titleRef} className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1] font-bold text-foreground tracking-tighter perspective-1000">
              We don’t just build websites. We express <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/70 via-foreground to-primary/70 animate-gradient-x bg-[length:200%_auto]">
                infrastructure
              </span>.
            </h2>
            
            {/* GSAP Target: Body Text */}
            <p ref={textRef} className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl border-l-2 border-primary/50 pl-6">
              The digital landscape is crowded with noise. <span className="text-foreground font-medium">InvisiEdge</span> engineers the backend logic and frontend performance that transforms passive visitors into active revenue.
            </p>
          </div>

          {/* Right Column: System Modules */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                 {[
                    { icon: Layers, label: "Core Architecture", desc: "Robust, scalable Next.js backbones.", code: "SYS.01" },
                    { icon: Cpu, label: "Neural Logic", desc: "AI-driven user behavior analysis.", code: "SYS.02" },
                    { icon: Code, label: "Clean Syntax", desc: "Maintainable, enterprise-grade code.", code: "SYS.03" },
                  ].map((item, idx) => (
                    <div
                        key={idx}
                        className="sys-card group relative p-6 border border-border bg-card/50 hover:bg-secondary/10 transition-all duration-500 rounded-lg overflow-hidden cursor-crosshair"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        
                        <div className="flex items-start gap-5 relative z-10">
                            <div className="p-3 bg-secondary/50 rounded-md border border-border group-hover:border-primary/50 transition-colors">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1">
                                    <h4 className="text-foreground font-semibold text-lg">{item.label}</h4>
                                    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{item.code}</span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </div>
                 ))}
            </div>

            <div className="pt-6 flex justify-end">
                <button className="sys-card group relative px-8 py-3 bg-foreground text-background font-bold tracking-wide rounded overflow-hidden">
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        INITIATE SEQUENCE <ArrowRight className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 bg-foreground group-hover:bg-muted transition-colors" />
                </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
