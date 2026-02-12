"use client";

import { motion } from 'framer-motion';
import { Send, ArrowRight, MessageSquare } from 'lucide-react';

import { contactContent } from '@/data/contact/content';

export default function ContactForm() {
    const { form } = contactContent;
    
    return (
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
        >
            {/* Glowing Border Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#5210F8] to-[#C47DFD] rounded-[2.5rem] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="relative bg-white rounded-[2rem] p-6 md:p-12 border border-[#072C55]/5 h-full shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <MessageSquare size={140} strokeWidth={0.5} className="text-[#072C55]" />
                </div>

                <h3 className="text-xl md:text-2xl font-black text-[#072C55] tracking-tight mb-6 md:mb-8">{form.title}</h3>

                <form className="space-y-4 md:space-y-6 relative z-10">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                                {form.fields.name.label}
                            </label>
                            <input 
                                type="text" 
                                placeholder={form.fields.name.placeholder} 
                                className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-4 text-[#072C55] placeholder:text-[#072C55]/30 focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm"
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                                {form.fields.email.label}
                            </label>
                            <input 
                                type="email" 
                                placeholder={form.fields.email.placeholder} 
                                className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-4 text-[#072C55] placeholder:text-[#072C55]/30 focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                            {form.fields.interest.label}
                        </label>
                        <div className="relative">
                            <select className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-3 md:py-4 text-[#072C55] focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm appearance-none cursor-pointer hover:bg-[#F8F9FA]/80">
                                {form.fields.interest.options.map((opt, i) => (
                                    <option key={i}>{opt}</option>
                                ))}
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <ArrowRight size={14} className="text-[#5210F8] rotate-90" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                            {form.fields.objectives.label}
                        </label>
                        <textarea 
                            rows={5} 
                            placeholder={form.fields.objectives.placeholder} 
                            className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-3 md:py-4 text-[#072C55] placeholder:text-[#072C55]/30 focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm resize-none"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full group bg-[#072C55] text-white font-black text-sm uppercase tracking-widest py-4 md:py-5 rounded-xl hover:bg-[#5210F8] transition-all duration-300 flex items-center justify-center gap-3 mt-2 md:mt-4 shadow-xl shadow-[#072C55]/20"
                    >
                        <span>{form.submitButton}</span>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                </form>
            </div>
        </motion.div>
    );
}
