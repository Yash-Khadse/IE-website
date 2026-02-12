"use client";

import { motion } from 'framer-motion';
import { BLOGS } from '@/lib/blogs';
import BlogCard from '@/sections/blog/BlogCard';

export default function BlogListing() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-background relative overflow-hidden">
        
        {/* Background Decorative Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-black/5 dark:border-white/5 pb-8 gap-6"
            >
               <div>
                   <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#5210F8] animate-pulse" />
                        <span className="font-mono text-xs font-bold text-[#5210F8] uppercase tracking-[0.2em]">Our Blog</span>
                   </div>
                   <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-[0.9]">
                       LATEST ARTICLES
                   </h2>
               </div>
               
               <div className="hidden md:flex items-center gap-6 text-xs text-muted-foreground/60 font-mono tracking-widest uppercase">
                   <div className="flex flex-col items-end">
                         <span>Total Articles</span>
                        <span className="text-foreground font-bold text-lg">{BLOGS.length.toString().padStart(2, '0')}</span>
                   </div>
               </div>
            </motion.div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12">
                {BLOGS.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} index={index} />
                ))}
            </div>

            {/* Load More / Pagination Placeholder */}
            {BLOGS.length > 6 && (
                <div className="flex justify-center mt-12 md:mt-20 relative">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -z-10" />
                    <button className="px-8 py-3 rounded-full border border-border bg-background text-foreground font-mono uppercase tracking-widest text-xs hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300 shadow-xl">
                        Load More
                    </button>
                </div>
            )}
        </div>
    </section>
  );
}
