"use client";

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Share2, Printer, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function BlogPostHeader({ post }: { post: any }) {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-end overflow-hidden pb-12">
      
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] to-transparent z-10 opacity-60" />
          <img 
              src={post.coverImage || "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"} 
              alt={post.title} 
              className="w-full h-full object-cover"
          />
          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-overlay z-10" />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-20 w-full">
          
          {/* Navigation Breadcrumb */}
          <motion.div 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="mb-8"
          >
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-[#00FF94] transition-colors font-mono text-xs uppercase tracking-widest group">
                   <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
                   Return_To_Insights
              </Link>
          </motion.div>

          {/* Meta Badges */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="flex flex-wrap items-center gap-4 mb-6"
          >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00FF94]/20 bg-[#00FF94]/10 text-[#00FF94] text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-pulse" />
                 {post.category}
              </span>
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  POST_ID: {post.id.toString().padStart(3, '0')}
              </span>
              <div className="w-1 h-1 bg-white/20 rounded-full" />
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {post.date}
              </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8"
          >
              {post.title}
          </motion.h1>

          {/* Author & Actions Row */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-white/10"
          >
              <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`} alt={post.author} className="w-full h-full" />
                  </div>
                  <div>
                      <div className="text-sm font-bold text-white uppercase tracking-wide">{post.author}</div>
                      <div className="text-xs font-mono text-white/40">Growth Strategist</div>
                  </div>
              </div>

              <div className="flex items-center gap-4">
                   <button className="p-3 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/30 transition-all" aria-label="Share">
                       <Share2 size={18} />
                   </button>
                   <button className="p-3 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/30 transition-all" aria-label="Bookmark">
                       <Bookmark size={18} />
                   </button>
                   <button className="p-3 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/30 transition-all" aria-label="Print">
                       <Printer size={18} />
                   </button>
              </div>
          </motion.div>

      </div>
    </section>
  );
}
