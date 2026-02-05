"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation, animate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, BarChart3, Database, Layers, Radio, Terminal, Cpu, Search, Activity } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'SkyScalar',
    category: 'INFRASTRUCTURE // DESIGN',
    description: 'Series B SaaS Architecture',
    stats: { label: 'Pipeline Lift', value: 210, suffix: '%', sub: 'T-90 DAYS' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    gridClass: 'md:col-span-2', 
    imageClass: 'h-full min-h-[300px] md:min-h-0', 
  },
  {
    id: 2,
    name: 'DataFlow',
    category: 'GROWTH // ENGINE',
    description: 'AI Analytics Scaling',
    stats: { label: 'ARR Multiplier', value: 8.4, suffix: 'x', sub: 'SUSTAINED' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    gridClass: 'md:col-span-1',
    imageClass: 'aspect-[4/5]',
  },
  {
    id: 3,
    name: 'Nexus Core',
    category: 'SYSTEM // REBRAND',
    description: 'Enterprise Platform Identity',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    gridClass: 'md:col-span-1',
    imageClass: 'aspect-[3/4]',
    overlayText: 'NEXUS_OS',
  },
  {
    id: 4,
    name: 'Alpha Stream',
    category: 'AUTOMATION // LOGIC',
    description: 'Fintech Automated Funnel',
    stats: { label: 'Retention', value: 94, suffix: '%', sub: 'COHORT_A' },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    gridClass: 'md:col-span-2',
    imageClass: 'h-full min-h-[300px] md:min-h-0',
  },
];

const NoiseGridBackground = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
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
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
            {/* Blinking Status LED */}
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(196,125,253,0.8)] animate-ping" />
            
            <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest mb-2">
               <Database size={14} /> DEPLOYED_SYSTEMS // V.5.0
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tighter">
              System <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground">Case Logs</span>
            </h2>
          </div>

          {/* Terminal Status Filter (Visual) */}
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
          {projects.map((project, index) => (
             <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index * 0.1}
                isBlurred={hoveredId !== null && hoveredId !== project.id}
                onMouseEnter={() => setHoveredId(project.id)}
             />
          ))}
        </div>

        {/* Footer Button "Access Archive" */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="relative z-20 flex justify-center mt-12"
        >
           <a href="#projects" className="group relative w-[400px] h-[280px] cursor-pointer flex items-end justify-center perspective-1000">
              
              {/* Holographic Files Stack */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[280px] h-[180px] z-10 transition-transform duration-500 group-hover:-translate-y-8">
                 {[1, 2, 3].map((i) => (
                    <div 
                        key={i}
                        className={`absolute inset-0 bg-fooror-navy border border-fooror-purple/30 rounded-lg shadow-lg transform transition-all duration-500 origin-bottom 
                        ${i === 1 ? 'group-hover:-rotate-6 group-hover:-translate-x-8' : ''}
                        ${i === 2 ? 'group-hover:rotate-0 group-hover:-translate-y-4' : ''}
                        ${i === 3 ? 'group-hover:rotate-6 group-hover:translate-x-8' : ''}
                        `}
                        style={{ 
                            transform: `rotate(${(i-2)*3}deg) translateY(${-(i-1)*4}px)`,
                            zIndex: i 
                        }}
                    >
                        <div className="absolute inset-0 bg-fooror-purple/5 backdrop-blur-sm" />
                        {/* Fake Code / Data Lines */}
                        <div className="p-4 flex flex-col gap-2 opacity-50">
                            <div className="w-8 h-1 bg-fooror-purple/50 rounded-full mb-2" />
                            <div className="w-full h-1 bg-white/10 rounded-full" />
                            <div className="w-[80%] h-1 bg-white/10 rounded-full" />
                             <div className="w-[60%] h-1 bg-white/10 rounded-full" />
                        </div>
                    </div>
                 ))}
                 
                 {/* Floating Particles/Glow */}
                 <div className="absolute -top-10 left-1/2 w-full h-20 bg-fooror-purple/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Folder Front */}
              <div className="absolute bottom-0 w-full h-[70%] z-20 pointer-events-none transform origin-bottom transition-transform duration-500 group-hover:rotate-x-12 bg-fooror-purple rounded-t-[2rem] rounded-b-[1rem] shadow-[0_-10px_60px_rgba(82,16,248,0.5)] border-t border-white/20 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
                 
                 {/* Lock Icon Logic */}
                 <span className="relative z-10 text-2xl font-bold font-mono text-white tracking-widest flex items-center gap-3 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-6 h-6" /> ACCESS_ARCHIVE
                 </span>
              </div>
           </a>
        </motion.div>
      </div>

    </section>
  );
};

const NumberCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView && nodeRef.current) {
        animate(0, value, {
            duration: 1.5,
            ease: "circOut",
            onUpdate(latest) {
                if (nodeRef.current) {
                    nodeRef.current.textContent = latest.toFixed(value % 1 === 0 ? 0 : 1) + suffix;
                }
            }
        });
    }
  }, [isInView, value, suffix]);

  return <span ref={nodeRef} className="text-2xl font-bold text-foreground leading-none tabular-nums">0</span>;
};

// Decrypting Text Effect
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
  
  // Use springs for smoother tilt
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
      x.set(0);
      y.set(0);
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
      className={`group flex flex-col w-full cursor-pointer ${project.gridClass} h-full transition-all duration-500 perspective-1000 ${isBlurred ? 'blur-sm opacity-30 grayscale' : 'opacity-100 z-10'}`}
    >
      <div className={`relative w-full bg-card/50 border border-border rounded-2xl overflow-hidden shadow-2xl group-hover:border-primary/50 transition-all duration-500 ${project.imageClass} flex-grow transform-gpu`}>
        
        {/* Animated Scanning Line (Hover) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.8)] z-30 opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[500px] transition-all duration-[1.5s] ease-linear pointer-events-none" />

        {/* Image with Glitch/Scanline effect potential */}
        <div className="absolute inset-0 z-0 overflow-hidden">
             <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-background/60 group-hover:bg-background/10 transition-colors duration-500 mix-blend-multiply" />
        </div>
        
        {/* Overlay Grid */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />

        {/* Overlay Text for specific IDs */}
        {project.overlayText && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
             <span className="text-5xl md:text-7xl font-bold text-white/10 group-hover:text-white/20 tracking-[0.2em] transition-colors duration-500 font-mono">{project.overlayText}</span>
          </div>
        )}
        
        {/* Stats HUD (Top Left) */}
        {project.stats && (
          <div className="absolute top-6 left-6 z-20" style={{ transform: "translateZ(30px)" }}>
            <div className="bg-background/90 backdrop-blur-md border border-primary/30 p-4 min-w-[140px] shadow-xl rounded-sm">
               <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px] text-primary font-mono tracking-wider mb-1">
                      {project.stats.sub} <Radio size={8} className="animate-pulse text-primary" />
                  </div>
                  <NumberCounter value={project.stats.value} suffix={project.stats.suffix} />
                  <span className="text-[10px] font-medium text-muted-foreground uppercase">{project.stats.label}</span>
               </div>
               {/* Progress Bar */}
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
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-primary">
                    <span className="opacity-80">{project.category}</span>
                    <span className="w-1 h-1 bg-muted-foreground/50 rounded-full" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <DecryptText text={project.description} />
                    </span>
                </div>
            </div>
            <div className="p-3 bg-secondary/10 border border-border rounded-full group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                <ArrowUpRight className="text-foreground w-5 h-5 group-hover:rotate-45 group-hover:text-primary-foreground transition-all duration-300" />
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProjects;
