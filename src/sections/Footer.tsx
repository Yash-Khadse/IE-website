"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu, Power } from 'lucide-react';
import Image from 'next/image';
import IELogo from '../assests/IE-logo.png';

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10%' });

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="relative w-full bg-background overflow-hidden pt-16 md:pt-24 border-t border-border"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Top Section: Main Branding & Actions */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16 mb-16 md:mb-24">
            
            {/* Left: Brand Identity */}
            <div className="max-w-xl">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                       <Image 
                          src={IELogo} 
                          alt="InvisiEdge" 
                          height={50} 
                          className="h-10 w-auto object-contain" 
                       />
                       <span className="px-3 py-1 rounded bg-secondary border border-border text-[10px] font-mono text-muted-foreground tracking-widest">
                           Version 3.0
                       </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
                        WHERE STRATEGY BECOMES <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-foreground to-primary">MARKET LEADERSHIP</span>
                    </h2>

                    <div className="flex gap-4">
                        <StatusBadge icon={ShieldCheck} label="PROVEN" color="text-green-400" />
                        <StatusBadge icon={Cpu} label="SCALABLE" color="text-blue-400" />
                        <StatusBadge icon={Terminal} label="TRACKED" color="text-yellow-400" />
                    </div>
                </motion.div>
            </div>

            {/* Right: Quick Links Grid */}
             <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-auto">
                 <FooterColumn 
                    title="AGENCY"
                    links={[
                        { label: 'Core Strategies', href: '/services' },
                        { label: 'Process', href: '/services#process' },
                        // { label: 'Case Studies', href: '/work' },
                        { label: 'Our Mission', href: '/about' },
                    ]}
                 />
                 <FooterColumn 
                    title="LEGAL"
                    links={[
                        { label: 'Privacy Policy', href: '#' },
                        { label: 'Terms of Service', href: '#' },
                        { label: 'Data Processing', href: '#' },
                    ]}
                 />
                 <FooterColumn 
                    title="CONNECT"
                    links={[
                        { label: 'Contact Us', href: '/contact' },
                        { label: 'LinkedIn', href: '#' },
                        { label: 'Twitter / X', href: '#' },
                        { label: 'GitHub', href: '#' },
                    ]}
                 />
            </div>
        </div>

        {/* Bottom Bar: System Status */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">
            
            <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span>All Systems Active</span>
            </div>

            <p>© 2025 INVISIEDGE MARKETING. ALL RIGHTS RESERVED.</p>

            <div className="flex items-center gap-4">
                 <span>RESPONSE: RAPID</span>
                 <span>REACH: GLOBAL</span>
            </div>

        </div>

      </div>

      {/* Shutdown Button Effect (Visual Only) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-20 hover:opacity-100 transition-opacity cursor-pointer group" title="System Shutdown">
          <Power size={24} className="text-red-500" />
      </div>

    </footer>
  );
};

const StatusBadge = ({ icon: Icon, label, color }: { icon: any, label: string, color: string }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-secondary/50 border border-border">
        <Icon size={12} className={color} />
        <span className="text-[10px] font-mono text-muted-foreground tracking-wider">{label}</span>
    </div>
);

import Link from 'next/link';

const FooterColumn = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
    <div className="flex flex-col gap-4">
        <h4 className="text-xs font-mono font-bold text-primary tracking-widest mb-2 flex items-center gap-2">
            <div className="w-1 h-1 bg-primary rounded-full" />
            {title}
        </h4>
        <div className="flex flex-col gap-3">
            {links.map((link, i) => (
                <Link
                    key={i} 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all duration-300 font-light"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    </div>
);

export default Footer;
