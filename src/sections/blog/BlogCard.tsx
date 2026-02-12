"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Clock, Tag, Share2, Layers, Zap } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogs';

const categoryColorMap: Record<string, string> = {
  PERFORMANCE: 'text-[#00FF94] border-[#00FF94]/20 bg-[#00FF94]/10',
  ARCHITECTURE: 'text-[#5210F8] border-[#5210F8]/20 bg-[#5210F8]/10',
  DESIGN_SYSTEM: 'text-[#C47DFD] border-[#C47DFD]/20 bg-[#C47DFD]/10',
  INTELLIGENCE: 'text-amber-400 border-amber-400/20 bg-amber-400/10',
  ENGINEERING: 'text-blue-400 border-blue-400/20 bg-blue-400/10',
  STRATEGY: 'text-red-400 border-red-400/20 bg-red-400/10'
};

const categoryIconMap: Record<string, any> = {
    PERFORMANCE: Zap,
    ARCHITECTURE: Layers,
    DESIGN_SYSTEM: Tag,
    INTELLIGENCE: Cpu,
    ENGINEERING: Cpu,
    STRATEGY: ArrowUpRight
};

export default function BlogCard({ blog, index }: { blog: BlogPost; index: number }) {
  const categoryStyle = categoryColorMap[blog.category] || 'text-primary border-primary/20 bg-primary/10';
  const Icon = categoryIconMap[blog.category] || Tag;

  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
    >
        <Link href={`/blog/${blog.slug}`} className="group block h-full">
            <div className="relative h-full bg-[#FAFAFA] dark:bg-[#020617] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-[#5210F8]/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col group-hover:bg-white dark:group-hover:bg-[#072C55]/20">
                
                {/* 1. Image Header (Visual richness) */}
                <div className="relative h-56 overflow-hidden">
                     {blog.coverImage ? (
                        <div className="absolute inset-0">
                             <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                     ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#072C55] to-[#020617]" />
                     )}
                     
                     <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-flex items-center gap-2 text-[10px] font-mono font-bold px-3 py-1.5 rounded-full border backdrop-blur-md uppercase tracking-wider ${categoryStyle}`}>
                            <Icon size={10} className="stroke-[3]" />
                            {blog.category}
                        </span>
                     </div>
                     <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3 text-white/80 text-[10px] font-mono font-bold uppercase tracking-widest">
                         <span className="bg-black/30 backdrop-blur-md border border-white/10 px-2 py-1 rounded">POST_ID: {blog.id.toString().padStart(3, '0')}</span>
                         <span className="bg-black/30 backdrop-blur-md border border-white/10 px-2 py-1 rounded">{blog.date}</span>
                     </div>
                </div>

                {/* 2. Content Body */}
                <div className="p-8 flex-1 flex flex-col gap-4 relative">
                    {/* Subtle Grid Bg removed */}
                    
                    <h3 className="text-xl md:text-2xl font-black text-foreground leading-[1.1] group-hover:text-[#5210F8] transition-colors line-clamp-2 relative z-10">
                        {blog.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed line-clamp-3 relative z-10">
                        {blog.excerpt}
                    </p>
                </div>

                {/* 3. Smart Footer */}
                <div className="px-8 py-5 mt-auto border-t border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 flex items-center justify-between group-hover:bg-[#5210F8]/5 transition-colors">
                    <div className="flex items-center gap-4 text-xs font-mono font-bold text-muted-foreground/80">
                        <span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                            <Clock size={14} />
                            {blog.readTime}
                        </span>
                        <span className="w-1 h-1 bg-current rounded-full opacity-30" />
                        <span className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                            <Tag size={14} />
                            {blog.tags[0]}
                        </span>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-white/10 border border-black/5 dark:border-white/5 flex items-center justify-center group-hover:bg-[#5210F8] group-hover:border-[#5210F8] transition-all duration-300">
                        <ArrowUpRight size={14} className="text-foreground group-hover:text-white transition-colors" />
                    </div>
                </div>

                {/* Hover Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00FF94] via-[#5210F8] to-[#C47DFD] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            
            </div>
        </Link>
    </motion.div>
  );
}
