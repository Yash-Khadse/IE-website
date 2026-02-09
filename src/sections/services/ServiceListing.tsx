"use client";

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, Target, Layout, Search, BarChart3, Database, Workflow, Cpu, ShieldCheck, Zap, Globe,
  Layers, Terminal, Activity, Monitor, Server
} from 'lucide-react';
import { SERVICES } from '@/lib/services';

// Icon Map
const ICON_MAP: Record<string, any> = {
  Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap, Cpu, Terminal, Activity, Layers, Monitor, Server
};

const CATEGORIES = [
  { id: 'all', label: 'System_All' },
  { id: 'strategy', label: 'Strategy_Layer' },
  { id: 'growth', label: 'Growth_Engine' },
  { id: 'infrastructure', label: 'Infra_Core' }
];

const getServiceCategory = (id: string) => {
  if (['strategic-architecture', 'brand-protection', 'global-expansion'].includes(id)) return 'strategy';
  if (['performance-creative', 'search-intelligence', 'conversion-optimization'].includes(id)) return 'growth';
  return 'infrastructure';
};

export default function ServiceListing() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredServices = SERVICES.filter(s => {
    const matchesCategory = activeCategory === 'all' || getServiceCategory(s.id) === activeCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden min-h-screen">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#072C55_1px,transparent_1px),linear-gradient(to_bottom,#072C55_1px,transparent_1px)] bg-[size:40px_40px]" />
          <motion.div 
            animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-[#5210F8]"
          />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#072C55]/10 mb-6 shadow-sm group hover:border-[#5210F8]/20 transition-colors cursor-default"
            >
                <div className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse" />
                <span className="text-[#072C55] text-xs font-mono font-bold uppercase tracking-widest group-hover:text-[#5210F8] transition-colors">
                    System_Matrix_v5.0 // {filteredServices.length}_Modules_Active
                </span>
            </motion.div>
            
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.1 }}
               className="text-4xl md:text-6xl font-black text-[#072C55] tracking-tight leading-[0.9] mb-8"
            >
              DEPLOYABLE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5210F8] to-[#00FF94]">GROWTH PROTOCOLS</span>
            </motion.h2>

            {/* Controls Container */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
                {/* Search Bar */}
                <div className="relative group w-full md:w-auto">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={14} className="text-[#072C55]/40 group-focus-within:text-[#5210F8] transition-colors" />
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search Protocols..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-64 pl-10 pr-4 py-3 rounded-full bg-white border border-[#072C55]/10 text-sm font-mono text-[#072C55] placeholder:text-[#072C55]/30 focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all shadow-sm"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-3 rounded-full font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                                activeCategory === cat.id 
                                ? 'bg-[#072C55] text-white border-[#072C55] shadow-lg transform scale-105' 
                                : 'bg-white text-[#072C55]/60 border-[#072C55]/10 hover:border-[#5210F8] hover:text-[#5210F8]'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[500px]"
          onMouseLeave={() => setHoveredCard(null)}
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = ICON_MAP[service.iconName] || Target;
              const isBlurred = hoveredCard !== null && hoveredCard !== service.id;
              
              return (
              <motion.div 
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isBlurred ? 0.4 : 1, scale: 1, filter: isBlurred ? "blur(2px)" : "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-full"
                onMouseEnter={() => setHoveredCard(service.id)}
              >
                <Link href={service.href} className="block h-full">
                  <div className="h-full bg-white border border-[#072C55]/10 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(82,16,248,0.15)] hover:border-[#5210F8]/30 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between z-10">
                    
                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
                    
                    <div>
                      {/* Header: Icon & ID */}
                      <div className="flex justify-between items-start mb-8 md:mb-10">
                          <div className="w-14 h-14 rounded-2xl bg-[#F8F9FA] border border-[#072C55]/5 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10">
                              <Icon size={28} className="text-[#072C55] group-hover:text-[#5210F8] transition-colors duration-300" />
                          </div>
                          <div className="flex flex-col items-end">
                              <div className="font-mono text-[9px] font-black text-[#072C55]/20 uppercase tracking-widest group-hover:text-[#5210F8] transition-colors">
                                  ID_0{index + 1}
                              </div>
                              <div className="h-1 w-8 bg-[#072C55]/5 mt-1 rounded-full group-hover:bg-[#00FF94] group-hover:w-12 transition-all duration-500" />
                          </div>
                      </div>

                      <h3 className="text-2xl font-black text-[#072C55] mb-2 tracking-tight leading-none group-hover:text-[#5210F8] transition-colors duration-300 relative z-10">
                        {service.title}
                      </h3>
                      
                      {/* Tagline Badge */}
                      <div className="mb-4 inline-block">
                          <span className={`text-[10px] font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} opacity-80`}>
                             // {service.tagline}
                          </span>
                      </div>

                      <p className="text-[#072C55]/50 font-medium leading-relaxed relative z-10 mb-8 text-sm md:text-base line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Data Point Pill */}
                    {service.metrics && service.metrics[0] && (
                        <div className="mb-6 w-fit px-3 py-1.5 bg-[#F8F9FA] rounded-lg border border-[#072C55]/5 flex items-center gap-2 group-hover:bg-[#fff] group-hover:border-[#5210F8]/20 transition-colors">
                            <Activity size={12} className="text-[#00FF94]" />
                            <span className="text-[10px] font-mono font-bold text-[#072C55] uppercase tracking-wider">
                                {service.metrics[0].label.replace('_', ' ')}: <span className="text-[#5210F8]">{service.metrics[0].value}</span>
                            </span>
                        </div>
                    )}

                    {/* Action Footer */}
                    <div className="flex items-center justify-between border-t border-[#072C55]/5 pt-6 mt-auto relative z-10 group/btn">
                        <span className="font-mono text-[10px] font-black text-[#072C55]/30 uppercase tracking-[0.2em] group-hover:text-[#072C55]/60 transition-colors">
                          INIT_PROTOCOL
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#F8F9FA] flex items-center justify-center group-hover:bg-[#072C55] transition-all duration-300">
                            <ArrowRight size={16} className="text-[#072C55] group-hover:text-white transition-colors duration-300 group-hover:-rotate-45" />
                        </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>
        
        {/* No Results State */}
        {filteredServices.length === 0 && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
            >
                <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-[#F8F9FA] mb-6">
                    <Search className="text-[#072C55]/20" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#072C55] mb-2">System Protocol Not Found</h3>
                <p className="text-[#072C55]/50">Adjust your search parameters or query the full matrix.</p>
                <button 
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="mt-6 text-[#5210F8] font-bold text-sm uppercase tracking-widest hover:underline"
                >
                    Reset Filters
                </button>
            </motion.div>
        )}

      </div>
    </section>
  );
}
