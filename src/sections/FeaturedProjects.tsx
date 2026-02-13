"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation, animate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Database, Terminal, Activity, Radio, Layers, Search, BarChart3, Cpu } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import { featuredProjectsContent } from '@/data/home/featured-projects';

// Reusable animated background
const NoiseGridBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            {/* Moving Grid removed */}
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
  const gridProjects = PROJECTS.map((p, i) => {
      // Logic for 2-1, 1-2, 2-1 pattern
      const isLarge = i % 4 === 0 || i % 4 === 3;
      return {
        ...p,
        gridClass: isLarge ? 'md:col-span-2' : 'md:col-span-1',
        // Mobile: Uniform aspect ratio of 4/5. Desktop: Original chaotic grid logic.
        imageClass: isLarge ? 'aspect-[4/5] md:aspect-auto md:h-full' : 'aspect-[4/5] md:aspect-[3/4]',
      };
  });

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full bg-background pt-12 pb-20 md:pt-20 md:pb-32 px-4 sm:px-6 md:px-8 overflow-hidden z-20"
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
               <Database size={14} /> {featuredProjectsContent.header.badge} 
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tighter">
              {featuredProjectsContent.header.title.line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">{featuredProjectsContent.header.title.highlight}</span>
            </h2>
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
      className={`group flex flex-col w-full ${project.gridClass} h-full transition-all duration-500 perspective-1000 ${isBlurred ? 'blur-[2px] opacity-100' : 'opacity-100 z-10'}`}
    >
      <Link href={project.href} className="flex-grow w-full h-full block">
          <div className={`relative w-full bg-card/50 border border-border rounded-2xl overflow-hidden shadow-2xl group-hover:border-primary/50 transition-all duration-500 ${project.imageClass} flex-grow transform-gpu`}>
            
            {/* Animated Scanning Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.8)] z-30 opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[500px] transition-all duration-[1.5s] ease-linear pointer-events-none" />

            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500 mix-blend-multiply" />
            </div>
            
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />

            {/* Stats HUD (Top Right) */}
            {project.results && project.results[0] && (
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20" style={{ transform: "translateZ(30px)" }}>
                <div className="bg-background/90 backdrop-blur-md border border-primary/30 p-3 md:p-4 min-w-[120px] md:min-w-[140px] shadow-xl rounded-sm">
                   <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-[10px] text-primary font-mono tracking-wider mb-1">
                          Impact <Radio size={8} className="animate-pulse text-primary" />
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4 md:p-6 pt-12 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300" style={{ transform: "translateZ(20px)" }}>
                <div>
                    <h3 className="text-lg md:text-2xl font-bold text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-primary">
                        <span className="opacity-80">{project.category}</span>
                        <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 hidden sm:inline-block">
                            {project.summary}
                        </span>
                    </div>
                </div>
                <div className="p-2 md:p-3 bg-secondary/10 border border-border rounded-full group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <ArrowUpRight className="text-foreground w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 group-hover:text-primary-foreground transition-all duration-300" />
                </div>
            </div>
          </div>
      </Link>
    </motion.div>
  );
}

export default FeaturedProjects;
