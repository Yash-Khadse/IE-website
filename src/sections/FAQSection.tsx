"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Terminal } from 'lucide-react';
import { faqContent } from '@/data/common/faq';

interface FAQItemData {
  id: string;
  question: string;
  answer: string;
  tags: string[];
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section id="faq" className="relative w-full py-12 md:py-20 bg-background overflow-hidden border-t border-border">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Panel: Context & Contact */}
          <div className="lg:w-1/3">
             <div className="sticky top-32">
                 <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
                        {faqContent.header.title.line1}
                        <span className="block text-muted-foreground/50">{faqContent.header.title.highlight}</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {faqContent.header.description}
                    </p>
                 </div>

                 <div className="hidden lg:block p-6 rounded-2xl bg-card border border-border relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="relative z-10">
                        <p className="font-mono text-xs text-primary mb-4">{faqContent.contactBox.badge}</p>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <div>
                                <h4 className="text-foreground font-bold">{faqContent.contactBox.title}</h4>
                                <p className="text-muted-foreground text-sm">{faqContent.contactBox.description}</p>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-primary hover:bg-primary/90 border border-primary text-primary-foreground rounded-xl transition-all duration-300 font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn shadow-lg shadow-primary/20">
                           <span>{faqContent.contactBox.buttonText}</span>
                           <span className="group-hover/btn:translate-x-1 transition-transform">-&gt;</span>
                        </button>
                     </div>
                 </div>
             </div>
          </div>

          {/* Right Panel: Accordion */}
          <div className="lg:w-2/3">
            <div className="flex flex-col border-t border-border">
               {faqContent.faqs.map((faq) => (
                 <FAQItem 
                    key={faq.id} 
                    faq={faq} 
                    isOpen={openId === faq.id} 
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)} 
                 />
               ))}
            </div>
            
            {/* Mobile Contact Box (Below Accordion) */}
            <div className="lg:hidden mt-12 p-6 rounded-2xl bg-card border border-border relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     
                     <div className="relative z-10">
                        <p className="font-mono text-xs text-primary mb-4">{faqContent.contactBox.badge}</p>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <div>
                                <h4 className="text-foreground font-bold">{faqContent.contactBox.title}</h4>
                                <p className="text-muted-foreground text-sm">{faqContent.contactBox.description}</p>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-primary hover:bg-primary/90 border border-primary text-primary-foreground rounded-xl transition-all duration-300 font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group/btn shadow-lg shadow-primary/20">
                           <span>{faqContent.contactBox.buttonText}</span>
                           <span className="group-hover/btn:translate-x-1 transition-transform">-&gt;</span>
                        </button>
                     </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, onClick }: { faq: FAQItemData, isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div 
           className="border-b border-border group cursor-pointer"
           onClick={onClick}
           initial={false}
        >
            <div className={`py-8 flex items-start gap-6 transition-colors duration-300 ${isOpen ? 'bg-secondary/30' : 'hover:bg-secondary/10'}`}>
                {/* ID Number */}
                <div className={`font-mono text-sm pt-1 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-muted-foreground'}`}>
                    {faq.id}
                </div>

                <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                            {isOpen && <span className="text-primary mr-2">&gt;</span>}
                            {faq.question}
                        </h3>
                        <div className={`shrink-0 w-8 h-8 rounded border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-primary bg-primary/20 text-primary' : 'border-border text-muted-foreground group-hover:border-primary/30'}`}>
                            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                        </div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="pt-6 pb-2 pr-8">
                                    <div className="pl-4 border-l-2 border-primary/30">
                                        <p className="text-muted-foreground leading-relaxed text-base font-light">
                                            {faq.answer}
                                        </p>
                                        <div className="mt-4 flex items-center gap-2">
                                            {faq.tags.map((tag, i) => (
                                                <span key={i} className="px-2 py-0.5 rounded bg-secondary border border-border text-[10px] font-mono text-muted-foreground/70">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

export default FAQSection;
