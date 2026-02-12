"use client";

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const CONTACT_ITEMS = [
    { 
        icon: MapPin, 
        title: "Headquarters", 
        value: "1234 Silicon Avenue, Suite 404\nSan Francisco, CA 94107", 
        color: "text-[#5210F8]", 
        bg: "bg-[#5210F8]/10" 
    },
    { 
        icon: Mail, 
        title: "Email Connect", 
        value: "hello@invisiedge.io\ncareers@invisiedge.io", 
        color: "text-[#5210F8]", 
        bg: "bg-[#5210F8]/10" 
    },
    { 
        icon: Phone, 
        title: "Direct Line", 
        value: "+1 (555) 123-4567\nMon-Fri, 0900 - 1800 PST", 
        color: "text-[#C47DFD]", 
        bg: "bg-[#C47DFD]/10" 
    }
];

export default function ContactInfo() {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full justify-center space-y-8 md:space-y-12"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-black text-[#072C55] tracking-tight mb-4 md:mb-8">
                    CONNECT WITH US
                </h2>
                <p className="text-[#072C55]/60 mb-8 md:mb-12 max-w-md leading-relaxed font-medium text-sm md:text-base">
                    Our team operates globally. Expect a response within <span className="text-[#5210F8] font-bold">24 hours</span>.
                </p>
            </div>

            <div className="space-y-4 md:space-y-8">
                {CONTACT_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 md:gap-6 group hover:bg-[#F8F9FA] p-3 md:p-4 rounded-xl transition-colors md:-mx-4">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.bg} border border-transparent group-hover:border-[#072C55]/5 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon size={20} className={item.color} />
                        </div>
                        <div>
                            <h4 className="text-[10px] font-mono font-bold text-[#072C55]/40 uppercase tracking-widest mb-1 md:mb-2 group-hover:text-[#5210F8] transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-base md:text-xl font-bold text-[#072C55] whitespace-pre-line leading-tight">
                                {item.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
