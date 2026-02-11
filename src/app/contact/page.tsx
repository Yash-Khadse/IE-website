"use client";

import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, ArrowRight, Shield, MessageSquare } from 'lucide-react';
import CTASection from '@/sections/CTASection';
import ContactHero from '@/sections/contact/ContactHero';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pb-12 overflow-hidden">
      
      <ContactHero />

      {/* 2. Main Content Grid */}
      <section className="px-6 max-w-[1400px] pt-28 mx-auto pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              
              {/* LEFT: The Transmission Form */}
              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative group"
              >
                  {/* Glowing Border Background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-[#5210F8] to-[#C47DFD] rounded-[2.5rem] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500" />
                  
                  <div className="relative bg-white rounded-[2rem] p-8 md:p-12 border border-[#072C55]/5 h-full shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                          <MessageSquare size={140} strokeWidth={0.5} className="text-[#072C55]" />
                      </div>

                      <h3 className="text-2xl font-black text-[#072C55] tracking-tight mb-8">GROWTH INQUIRY</h3>

                      <form className="space-y-6 relative z-10">
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                                    Full Name
                                </label>
                                <input 
                                   type="text" 
                                   placeholder="Full Name" 
                                   className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-4 text-[#072C55] placeholder:text-[#072C55]/30 focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm"
                                />
                             </div>
                             
                             <div className="space-y-2">
                                <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                                    Business Email
                                </label>
                                <input 
                                   type="email" 
                                   placeholder="Email Address" 
                                   className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-4 text-[#072C55] placeholder:text-[#072C55]/30 focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm"
                                />
                             </div>
                          </div>

                          <div className="space-y-2">
                              <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                                  Interest
                              </label>
                              <div className="relative">
                                  <select className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-4 text-[#072C55] focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm appearance-none cursor-pointer hover:bg-[#F8F9FA]/80">
                                      <option>Marketing Strategy Consultation</option>
                                      <option>Brand Identity & Design</option>
                                      <option>Performance Marketing (SEO/SEM)</option>
                                      <option>Growth Engineering</option>
                                      <option>General Partnership</option>
                                  </select>
                                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                      <ArrowRight size={14} className="text-[#5210F8] rotate-90" />
                                  </div>
                              </div>
                          </div>

                          <div className="space-y-2">
                              <label className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest">
                                  Growth Objectives
                              </label>
                              <textarea 
                                 rows={5} 
                                 placeholder="Tell us about your brand vision and key objectives..." 
                                 className="w-full bg-[#F8F9FA] border border-[#072C55]/10 rounded-xl px-4 py-4 text-[#072C55] placeholder:text-[#072C55]/30 focus:outline-none focus:border-[#5210F8] focus:ring-1 focus:ring-[#5210F8] transition-all font-mono text-sm resize-none"
                              />
                          </div>

                          <button 
                             type="submit" 
                             className="w-full group bg-[#072C55] text-white font-black text-sm uppercase tracking-widest py-5 rounded-xl hover:bg-[#5210F8] transition-all duration-300 flex items-center justify-center gap-3 mt-4 shadow-xl shadow-[#072C55]/20"
                          >
                              <span>Send Message</span>
                              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </button>

                      </form>
                  </div>
              </motion.div>

              {/* RIGHT: Contact Matrix */}
              <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="flex flex-col h-full justify-center space-y-12"
              >
                  <div>
                      <h2 className="text-3xl md:text-4xl font-black text-[#072C55] tracking-tight mb-8">
                          CONNECT WITH US
                      </h2>
                      <p className="text-[#072C55]/60 mb-12 max-w-md leading-relaxed font-medium">
                          Our team operates globally. Expect a response within <span className="text-[#5210F8] font-bold">24 hours</span>.
                      </p>
                  </div>

                  <div className="space-y-8">
                      {[
                        { icon: MapPin, title: "Headquarters", value: "1234 Silicon Avenue, Suite 404\nSan Francisco, CA 94107", color: "text-[#5210F8]", bg: "bg-[#5210F8]/10" },
                        { icon: Mail, title: "Email Connect", value: "hello@invisiedge.io\ncareers@invisiedge.io", color: "text-[#5210F8]", bg: "bg-[#5210F8]/10" },
                        { icon: Phone, title: "Direct Line", value: "+1 (555) 123-4567\nMon-Fri, 0900 - 1800 PST", color: "text-[#C47DFD]", bg: "bg-[#C47DFD]/10" }
                      ].map((item, i) => (
                          <div key={i} className="flex items-start gap-6 group hover:bg-[#F8F9FA] p-4 rounded-xl transition-colors -mx-4">
                              <div className={`w-14 h-14 rounded-2xl ${item.bg} border border-transparent group-hover:border-[#072C55]/5 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                  <item.icon size={24} className={item.color} />
                              </div>
                              <div>
                                  <h4 className="text-[10px] font-mono font-bold text-[#072C55]/40 uppercase tracking-widest mb-2 group-hover:text-[#5210F8] transition-colors">
                                      {item.title}
                                  </h4>
                                  <p className="text-lg md:text-xl font-bold text-[#072C55] whitespace-pre-line leading-snug">
                                      {item.value}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>

                  {/* Status Indicator */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#5210F8]/10 to-transparent border border-[#5210F8]/20 rounded-2xl overflow-hidden relative">
                      <div className="flex items-center gap-4 relative z-10">
                          <div className="relative">
                               <div className="w-3 h-3 bg-[#5210F8] rounded-full" />
                               <div className="absolute inset-0 w-3 h-3 bg-[#5210F8] rounded-full animate-ping opacity-75" />
                          </div>
                          <div>
                              <div className="text-[10px] font-mono font-bold text-[#5210F8] uppercase tracking-widest mb-1">Agency Status</div>
                              <div className="text-[#072C55] font-bold text-sm">ACCEPTING NEW PARTNERS</div>
                          </div>
                      </div>
                      <div className="absolute right-0 bottom-0 opacity-[0.05]">
                          <Shield size={80} className="text-[#5210F8] translate-x-4 translate-y-4" />
                      </div>
                  </div>

              </motion.div>
          </div>
      </section>

      <CTASection />
    </main>
  );
}
