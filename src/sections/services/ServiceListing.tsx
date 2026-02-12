"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Target, Layout, Search, BarChart3, Database, Workflow, Cpu, ShieldCheck, Zap, Globe,
  Layers, Terminal, Activity, Monitor, Server, Command, Code2, Sparkles, SlidersHorizontal
} from 'lucide-react';
import { SERVICES } from '@/lib/services';

// Icon Map
const ICON_MAP: Record<string, any> = {
  Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap, Cpu, Terminal, Activity, Layers, Monitor, Server, Command, Code2
};

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'growth', label: 'Growth' },
  { id: 'infrastructure', label: 'Infrastructure' }
];

const getServiceCategory = (id: string) => {
  if (['branding-systems', 'event-expo-branding', 'gtm-sales-enablement', 'brand-strategy', 'creative-direction'].includes(id)) return 'strategy';
  if (['seo-digital-visibility', 'social-content-engines', 'ai-video-production', 'paid-media', 'content-marketing'].includes(id)) return 'growth';
  return 'infrastructure';
};

export default function ServiceListing() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Chasing Effect for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth) * 20 - 10, 
        y: (e.clientY / window.innerHeight) * 20 - 10 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const filteredServices = SERVICES.filter(s => {
    const matchesCategory = activeCategory === 'all' || getServiceCategory(s.id) === activeCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-white relative overflow-hidden min-h-screen">
       
      {/* --- LAYER 0: FLUID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
           {/* Animated Gradient Globs */}
           <motion.div 
             animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                rotate: [0, 45, 0]
             }}
             transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-purple-100 to-blue-50 rounded-full blur-[100px]" 
           />
           <motion.div 
             animate={{ 
                x: [0, -100, 0], 
                y: [0, 50, 0],
                scale: [1, 1.2, 1]
             }}
             transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-yellow-50 to-pink-50 rounded-full blur-[80px]" 
           />
      </div>

      {/* --- LAYER 1: TECHNICAL GRID --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.3]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center mb-12 md:mb-28 text-center relative">
            
            {/* Status Pill */}
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.04)] mb-8"
            >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fooror-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-fooror-purple"></span>
                </span>
                <span className="text-slate-500 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                    Active
                </span>
            </motion.div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8 relative z-10 mix-blend-darken">
              System <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fooror-navy via-fooror-purple to-fooror-navy bg-[length:200%_auto] animate-shine">
                Capabilities
              </span>
            </h2>

            {/* Subtitle */}
            <p className="max-w-2xl text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-8 md:mb-12 px-4 md:px-0">
                Deployable modules for orchestration, automation, and intelligent growth. Select a protocol to initialize.
            </p>

            {/* Controls Toolbar */}
            <motion.div 
               className="w-full max-w-4xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-2xl p-2 md:p-2 flex flex-col md:flex-row gap-4 md:gap-2 relative z-20 transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
                {/* Search */}
                <div className="relative flex-1 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-fooror-purple transition-colors" />
                    <input 
                        type="text" 
                        placeholder="Search services..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full h-12 md:h-14 pl-12 pr-4 bg-transparent rounded-xl text-slate-700 font-medium placeholder:text-slate-400 outline-none focus:bg-white/50 transition-all font-mono text-sm"
                    />
                </div>

                {/* Divider (Mobile hidden) */}
                <div className="hidden md:block w-[1px] bg-slate-200 my-2" />

                {/* Categories */}
                <div className="flex overflow-x-auto no-scrollbar gap-2 p-1 w-full md:w-auto pb-2 md:pb-1">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider font-mono transition-all duration-300 border ${
                                activeCategory === cat.id 
                                ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                                : 'bg-transparent text-slate-500 border-transparent hover:bg-slate-100'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* --- GRID LAYOUT --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = ICON_MAP[service.iconName] || Target;
              const category = getServiceCategory(service.id);
              
              return (
              <motion.div 
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-full perspective-1000"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={service.href} className="block h-full cursor-pointer">
                  <div className="h-full bg-white border border-slate-200 rounded-[20px] p-6 md:p-8 relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 group-hover:border-transparent">
                    
                    {/* Active Border Gradient (The 'Foil' Effect) */}
                    <div className="absolute inset-0 rounded-[20px] p-[2px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-fooror-purple group-hover:via-fooror-yellow group-hover:to-fooror-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <div className="absolute inset-[1px] bg-white rounded-[19px] -z-10" />

                     {/* Subtle Background Tint on Hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />

                    {/* Top Row: Tag & Icon */}
                    <div className="flex justify-between items-start mb-8">
                        {/* Category Tag */}
                        <div className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            {category}
                        </div>
                        
                        {/* Icon Box */}
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 group-hover:scale-110 group-hover:bg-fooror-purple group-hover:text-white transition-all duration-300 shadow-sm">
                            <Icon size={22} strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Content Body */}
                    <div className="mb-8">
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-[10px] font-mono text-slate-300 font-bold">0{index+1}</span>
                            <div className="h-[1px] flex-1 bg-slate-100" />
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-fooror-purple transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                            {service.description}
                        </p>
                    </div>

                    {/* Footer / Action */}
                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group-hover:border-slate-200/50">
                         {/* Metrics snippet */}
                         {service.metrics && service.metrics[0] ? (
                             <div className="flex flex-col">
                                 <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Impact</span>
                                 <span className="text-sm font-bold text-slate-900 font-mono">
                                     {service.metrics[0].value} <span className="text-[10px] font-normal text-slate-400">/ {service.metrics[0].label}</span>
                                 </span>
                             </div>
                         ) : <div/>}

                         {/* Arrow Button */}
                         <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                             <ArrowRight size={14} className="text-slate-400 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                         </div>
                    </div>
                    
                  </div>
                </Link>
              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>

        {/* --- EMPTY STATE --- */}
        <AnimatePresence>
            {filteredServices.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-20 md:py-32 text-center"
                >
                    <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 animate-pulse">
                        <SlidersHorizontal className="text-slate-300" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">No Service Found</h3>
                    <p className="text-slate-500 max-w-sm mb-8">We couldn't locate any services matching your search.</p>
                    <button 
                        onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                        className="px-6 py-2.5 bg-slate-900 text-white rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-fooror-purple transition-colors shadow-lg shadow-slate-200"
                    >
                        Reset Filters
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}
