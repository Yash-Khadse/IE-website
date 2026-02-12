"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface LegalSection {
  id: string;
  title: string;
  content: string;
  subpoints?: string[];
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  sections: LegalSection[];
  iconType: 'shield' | 'file';
}

const iconMap = {
  shield: Shield,
  file: FileText,
};

export default function LegalLayout({ title, subtitle, description, sections, iconType }: LegalLayoutProps) {
  const Icon = iconMap[iconType];
  return (
    <div className="min-h-screen bg-white text-[#072C55] font-sans pt-32 pb-24 selection:bg-[#5210F8] selection:text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/" 
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#072C55]/60 hover:text-[#5210F8] transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <header className="mb-20 border-l-4 border-[#5210F8] pl-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 text-[#5210F8] font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4"
          >
            <Icon size={14} /> {subtitle}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#072C55] to-[#5210F8]"
          >
            {title.toUpperCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#072C55]/60 font-medium leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>
        </header>

        {/* Content Table of Contents */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <aside className="md:col-span-1 hidden md:block sticky top-32 h-fit">
            <nav className="flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#072C55]/40 mb-2">Sections</span>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-xs font-bold uppercase tracking-wider text-[#072C55]/60 hover:text-[#5210F8] transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Body */}
          <div className="md:col-span-3 space-y-20">
            {sections.map((section, idx) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="scroll-mt-32"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-bold text-[#5210F8]/10 font-mono leading-none">0{idx + 1}</span>
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#072C55] mb-6 border-b border-[#072C55]/5 pb-4">
                      {section.title}
                    </h2>
                    <p className="text-[#072C55]/70 leading-relaxed font-medium mb-6">
                      {section.content}
                    </p>
                    {section.subpoints && (
                      <ul className="space-y-3">
                        {section.subpoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-sm text-[#072C55]/60 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#5210F8] mt-1.5 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>

        {/* Final CTA/Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 pt-16 border-t border-[#072C55]/10 text-center"
        >
          <p className="text-sm font-bold text-[#072C55]/40 uppercase tracking-widest mb-8">Need clarification?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#072C55] text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#5210F8] transition-all duration-300 shadow-xl shadow-[#5210F8]/20"
          >
            Connect with Legal Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
