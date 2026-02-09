"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { SERVICES } from '@/lib/services';

const ICON_MAP: Record<string, any> = {
  Target, Layout, Search, BarChart3, Database, Workflow, ShieldCheck, Globe, Zap
};

export default function ProjectRelatedServices({ serviceIds }: { serviceIds: string[] }) {
  if (!serviceIds || serviceIds.length === 0) return null;

  const relatedServices = SERVICES.filter(s => serviceIds.includes(s.id));

  return (
    <section className="bg-[#F8F9FA] dark:bg-[#020617] py-24 px-6 border-t border-[#072C55]/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-12"
        >
            <div className="w-2 h-2 rounded-full bg-[#5210F8] animate-pulse" />
            <h3 className="font-mono text-xs font-bold text-[#072C55]/60 dark:text-white/60 uppercase tracking-[0.2em]">
                System_Modules // Utilized
            </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((service, i) => {
                const Icon = ICON_MAP[service.iconName] || Target;
                
                return (
                    <motion.div 
                        key={service.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group relative"
                    >
                        <Link href={service.href} className="block h-full">
                            <div className="h-full bg-white dark:bg-white/5 border border-[#072C55]/10 dark:border-white/10 rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between">
                                
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`} />
                                
                                <div className="mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-[#F8F9FA] dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Icon size={24} className="text-[#072C55] dark:text-white group-hover:text-[#5210F8] transition-colors" />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#072C55] dark:text-white mb-2 group-hover:text-[#5210F8] transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-sm text-[#072C55]/60 dark:text-white/60 leading-relaxed font-medium">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-[#072C55]/5 dark:border-white/5">
                                    <span className="font-mono text-[10px] font-bold text-[#072C55]/30 dark:text-white/30 uppercase tracking-widest group-hover:text-[#072C55]/60 transition-colors">
                                        Deploy
                                    </span>
                                    <ArrowRight size={14} className="text-[#072C55]/40 dark:text-white/40 -rotate-45 group-hover:rotate-0 group-hover:text-[#5210F8] transition-all duration-300" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>

      </div>
    </section>
  );
}
