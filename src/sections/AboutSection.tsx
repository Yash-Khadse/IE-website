"use client";
import React, { useRef, useLayoutEffect, useEffect } from "react";
import { ArrowRight, Box, Code, Cpu, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const mobileTextRef = useRef<HTMLParagraphElement>(null);

  // Initialize GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let titleSplit: SplitType;
    let textSplit: SplitType;

    const context = gsap.context(() => {
      // 1. Text Splitting
      // We check if refs exist before splitting to avoid errors
      if (titleRef.current) {
         titleSplit = new SplitType(titleRef.current, { types: 'chars,words' });
         
         // 2. Animate Title Chars (Staggered Reveal)
         if (titleSplit.chars) {
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
         }
      }

      if (textRef.current) {
          // split-type requires the element to be visible to calculate lines correctly.
          // Since textRef is hidden on mobile, line splitting might be unreliable or unnecessary there.
          // However, to avoid 'removeChild' errors, we must manage the instance if we create it.
          textSplit = new SplitType(textRef.current, { types: 'lines' });
          
          // 3. Animate Body Text Lines (Fade Up)
          if (textSplit.lines) {
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
          }
      }

      // 3b. Animate Mobile Body Text (Simple Fade)
      if (mobileTextRef.current) {
        gsap.from(mobileTextRef.current, {
          scrollTrigger: {
            trigger: mobileTextRef.current,
            start: "top 90%",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      }

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
      // Crucial: Revert SplitType changes to the DOM so React can safely manage the nodes again.
      if (titleSplit) titleSplit.revert();
      if (textSplit) textSplit.revert();
    };
  }, []);

  return (
        <section ref={containerRef} className="py-16 md:py-32 px-4 md:px-6 bg-background min-h-[80svh] md:min-h-screen relative overflow-hidden flex items-center border-t border-border" id="about">
      {/* Background: Geometric Tech Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <div className="absolute w-full h-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:40px_40px] text-foreground" />
      </div>

      {/* Background: Ambient Glow Orb */}
      <div className="absolute -left-[20%] top-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative HUD Elements (GSAP Animated opacity) */}
      <div className="absolute top-10 left-10 text-muted-foreground font-mono text-xs tracking-widest hidden md:block animate-pulse">
         // Status: Active
      </div>
      <div className="absolute bottom-10 right-10 text-muted-foreground font-mono text-xs tracking-widest hidden md:block">
         MARKET: GLOBAL
      </div>

      <div className="max-w-[1500px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-center">
          
          {/* Left Column: The Manifesto */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Scroll Line */}
            <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden xl:block" />

            <div className="mb-8 flex items-center gap-4">
                <div className="px-3 py-1 border border-primary/30 bg-primary/10 rounded text-primary font-mono text-xs uppercase tracking-widest">
                    Our Mission
                </div>
                <div className="h-px w-24 bg-border" />
            </div>

            {/* GSAP Target: Title */}
             <h2 ref={titleRef} className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] md:leading-[1] font-bold text-foreground tracking-tighter perspective-1000">
              We don’t build websites. We build <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary/70 via-foreground to-primary/70 animate-gradient-x bg-[length:200%_auto]">
                growth engines
              </span>
            </h2>
            
            {/* GSAP Target: Body Text (Desktop Only) */}
            <p ref={textRef} className="hidden lg:block mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl border-l-2 border-primary/50 pl-6">
              The digital landscape is fragmented. <span className="text-foreground font-medium">InvisiEdge</span> architects the digital strategy and multi-channel campaigns that transform disparate assets into a revenue-generating ecosystem.
            </p>

            {/* Decorative Lottie Arrow - Pointing Left (Reversed) */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-48 hidden lg:block pointer-events-none opacity-80 mix-blend-screen" style={{ transform: 'scaleX(-1)' }}>
                <DotLottieReact
                    src="https://lottie.host/74947dba-0c8d-44b6-b088-e0bf96251dd8/gxNaRo3hVW.lottie"
                    loop
                    autoplay
                />
            </div>
          </div>

          {/* Right Column: System Modules */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                  {[
                    { icon: Layers, label: "Scalable Infrastructure", desc: "Foundation for scaling multiple brands.", code: "01" },
                    { icon: Cpu, label: "Smart Automation", desc: "Automating customer journeys.", code: "02" },
                    { icon: Code, label: "Strategic Planning", desc: "Data-backed strategies for scalable growth.", code: "03" },
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

            {/* Mobile Description (Visible only on mobile) */}
            <p ref={mobileTextRef} className="lg:hidden mt-2 mb-2 text-lg text-muted-foreground leading-relaxed font-light border-l-2 border-primary/50 pl-6">
              The digital landscape is fragmented. <span className="text-foreground font-medium">InvisiEdge</span> architects the digital strategy and multi-channel campaigns that transform disparate assets into a revenue-generating ecosystem.
            </p>

            <div className="pt-6 flex justify-end">
                <button className="sys-card group relative px-8 py-3 bg-foreground text-background font-bold tracking-wide rounded overflow-hidden">
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        START GROWTH <ArrowRight className="w-4 h-4" />
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
