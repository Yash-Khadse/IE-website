"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation, animate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Database, Terminal, Activity, Radio, Layers, Search, BarChart3, Cpu } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

// Reusable animated background
const NoiseGridBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Moving Grid */}
            <motion.div 
                animate={{ y: [0, -40] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
                className="absolute inset-0 w-full h-[200%] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" 
            />
            {/* Radial Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>
    )
}

const FeaturedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Use data from PROJECTS but map for grid layout
  const gridProjects = PROJECTS.map((p, i) => ({
      ...p,
      gridClass: i % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1', // Example logic
      imageClass: i % 3 === 0 ? 'h-full min-h-[300px] md:min-h-0' : 'aspect-[3/4]',
  }));

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full bg-background pt-16 pb-32 md:pt-40 md:pb-80 px-4 sm:px-6 md:px-8 overflow-hidden z-20"
    >
      <NoiseGridBackground />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-2 border-b border-border pb-8"
        >
          <div className="flex flex-col items-start border-l-2 border-primary/50 pl-6 relative">
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(196,125,253,0.8)] animate-ping" />
            
            <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest mb-2">
               <Database size={14} /> DEPLOYED_SYSTEMS // V.5.0
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tighter">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">Case Logs</span>
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs font-mono mt-6 md:mt-0">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full text-muted-foreground backdrop-blur-sm">
                  <Terminal size={12} />
                  <span>FILTER: ALL_SYSTEMS</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                  <Activity size={12} className="relative z-10" />
                  <span className="relative z-10">STATUS: LIVE</span>
                  <span className="relative z-10 w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_#4ade80]" />
              </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20" onMouseLeave={() => setHoveredId(null)}>
          {gridProjects.map((project, index) => (
             <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index * 0.1}
                isBlurred={hoveredId !== null && hoveredId !== project.id}
                onMouseEnter={() => setHoveredId(project.id)}
             />
          ))}
        </div>

      </div>
    </section>
  );
};

const NumberCounter = ({ value, suffix = '' }: { value: string; suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });
  const numericalValue = parseFloat(value);

  useEffect(() => {
    if (isInView && nodeRef.current && !isNaN(numericalValue)) {
        animate(0, numericalValue, {
            duration: 1.5,
            ease: "circOut",
            onUpdate(latest) {
                if (nodeRef.current) {
                    nodeRef.current.textContent = latest.toFixed(numericalValue % 1 === 0 ? 0 : 1) + suffix;
                }
            }
        });
    }
  }, [isInView, numericalValue, suffix]);

  return <span ref={nodeRef} className="text-2xl font-bold text-foreground leading-none tabular-nums">0</span>;
};

const DecryptText = ({ text }: { text: string }) => {
    const [display, setDisplay] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    const handleMouseEnter = () => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                text.split("").map((letter, index) => {
                    if (index < iterations) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
    };

    return <span onMouseEnter={handleMouseEnter} className="font-mono">{display}</span>;
}


const ProjectCard = ({ project, delay, isBlurred, onMouseEnter }: { project: any, delay: number, isBlurred: boolean, onMouseEnter: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-7, 7]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
  }

  const handleMouseLeave = () => {
      x.set(0); y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group flex flex-col w-full ${project.gridClass} h-full transition-all duration-500 perspective-1000 ${isBlurred ? 'blur-sm opacity-30 grayscale' : 'opacity-100 z-10'}`}
    >
      <Link href={project.href} className="flex-grow w-full h-full block">
          <div className={`relative w-full bg-card/50 border border-border rounded-2xl overflow-hidden shadow-2xl group-hover:border-primary/50 transition-all duration-500 ${project.imageClass} flex-grow transform-gpu`}>
            
            {/* Animated Scanning Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.8)] z-30 opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[500px] transition-all duration-[1.5s] ease-linear pointer-events-none" />

            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/10 transition-colors duration-500 mix-blend-multiply" />
            </div>
            
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />

            {/* Stats HUD (Top Left) */}
            {project.results && project.results[0] && (
              <div className="absolute top-6 left-6 z-20" style={{ transform: "translateZ(30px)" }}>
                <div className="bg-background/90 backdrop-blur-md border border-primary/30 p-4 min-w-[140px] shadow-xl rounded-sm">
                   <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[10px] text-primary font-mono tracking-wider mb-1">
                          RESULT <Radio size={8} className="animate-pulse text-primary" />
                      </div>
                      <NumberCounter value={project.results[0].value} suffix={project.results[0].suffix} />
                      <span className="text-[10px] font-medium text-muted-foreground uppercase">{project.results[0].label}</span>
                   </div>
                   <div className="w-full h-0.5 bg-muted mt-2 overflow-hidden">
                       <motion.div 
                         initial={{ x: "-100%" }}
                         whileInView={{ x: "0%" }}
                         transition={{ duration: 1, delay: 0.5 }}
                         className="h-full bg-primary w-full" 
                       />
                   </div>
                </div>
              </div>
            )}

            {/* Bottom Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 pt-12 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300" style={{ transform: "translateZ(20px)" }}>
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-primary">
                        <span className="opacity-80">{project.category}</span>
                        <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 hidden md:inline-block">
                            <DecryptText text={project.summary} />
                        </span>
                    </div>
                </div>
                <div className="p-3 bg-secondary/10 border border-border rounded-full group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <ArrowUpRight className="text-foreground w-5 h-5 group-hover:rotate-45 group-hover:text-primary-foreground transition-all duration-300" />
                </div>
            </div>
          </div>
      </Link>
    </motion.div>
  );
}

export default FeaturedProjects;
