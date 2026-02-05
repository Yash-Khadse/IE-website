"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Activity, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import IELogo from '../assests/IE-logo.png';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 py-4 ${isScrolled ? 'py-2' : 'py-4'}`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          <div className={`relative flex items-center justify-between rounded-full border transition-all duration-500 px-6 ${
              isScrolled 
              ? 'bg-background/80 backdrop-blur-xl border-border shadow-[0_4px_30px_rgba(0,0,0,0.1)] h-16' 
              : 'bg-transparent border-transparent h-20'
          }`}>
            
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center gap-2 group">
              <div className="relative">
                 <Image 
                    src={IELogo} 
                    alt="InvisiEdge" 
                    height={40} 
                    className="h-8 md:h-10 w-auto bg-transparent object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    ABOUT
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/services" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    SERVICES
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                             <Link href="/work" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    WORK
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                             <Link href="/blog" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    BLOG
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                             <Link href="/case-studies" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    CASES
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Status Indicator */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-mono font-bold text-foreground/80 tracking-widest uppercase">
                        ONLINE
                    </span>
                </div>

                <Link
                  href="/contact"
                  passHref
                >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground text-xs font-bold font-mono tracking-wide rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 cursor-pointer"
                    >
                      <Terminal size={14} />
                      <span>INITIALIZE_AUDIT</span>
                    </motion.div>
                </Link>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsMenuOpen(true)}
                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-muted text-foreground transition-colors"
                >
                    <Menu size={20} />
                </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-background"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-border">
                 <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                    <Activity size={14} className="text-primary" />
                    <span>SYSTEM_NAVIGATION_MODE</span>
                 </div>
                 <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-muted"
                 >
                    <X size={20} />
                 </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex items-center justify-center p-6">
                 <nav className="flex flex-col gap-6 w-full max-w-md">
                    {[
                        { label: 'MISSION_BRIEF', href: '/about' },
                        { label: 'SYSTEM_CAPABILITIES', href: '/services' },
                        { label: 'ACTIVE_DEPLOYMENTS', href: '/work' },
                        { label: 'SYSTEM_LOGS', href: '/blog' },
                        { label: 'MISSION_REPORTS', href: '/case-studies' },
                        { label: 'CONTACT_UPLINK', href: '/contact' }
                    ].map((item, i) => (
                        <Link
                           key={i}
                           href={item.href}
                           onClick={() => setIsMenuOpen(false)}
                           className="group block"
                        >
                            <motion.div
                               initial={{ x: -50, opacity: 0 }}
                               animate={{ x: 0, opacity: 1 }}
                               transition={{ delay: i * 0.1 }}
                               className="flex items-center justify-between p-4 border border-border rounded-xl bg-secondary/50 hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                            >
                                <span className="font-mono text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                                    {item.label}
                                </span>
                                <ChevronRight className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    ))}
                 </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-muted/50">
                  <div className="flex justify-between items-center text-[10px] font-mono text-muted-foreground">
                      <span>SECURE CON. ESTABLISHED</span>
                      <span>V.3.0.1</span>
                  </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
