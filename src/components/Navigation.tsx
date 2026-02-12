"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Activity, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import IELogo from '../assests/IE-logo2.png';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { navigationContent } from '@/data/common/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hide global navigation on project detail pages (Immersive Mode)
  const isProjectPage = pathname?.startsWith('/work/') && pathname !== '/work';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isProjectPage) return null;

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
              : 'bg-transparent border-transparent h-20 mix-blend-difference text-white'
          }`}>
            
            {/* Logo */}
            <Link href={navigationContent.logo.href} className="relative z-50 flex items-center gap-2 group">
              <div className="relative">
                 <Image 
                    src={IELogo} 
                    alt={navigationContent.logo.alt} 
                    height={50} 
                    className={`h-10 md:h-12 w-auto bg-transparent object-contain transition-transform duration-300 group-hover:scale-105 ${
                        !isScrolled ? 'brightness-0 invert' : ''
                    }`}
                    priority
                />
                <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                <NavigationMenu>
                    <NavigationMenuList>
                        {navigationContent.mainNav.map((item, idx) => (
                            <NavigationMenuItem key={idx}>
                                <NavigationMenuLink asChild>
                                    <Link href={item.href} className={`${navigationMenuTriggerStyle()} ${!isScrolled ? 'bg-transparent text-white hover:bg-white/20' : ''}`}>
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <Link
                  href={navigationContent.contactButton.href}
                  passHref
                >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      className={`group relative hidden md:flex items-center justify-center px-6 py-2.5 min-w-[160px] text-xs font-bold font-mono tracking-wide rounded-full shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ${
                          isScrolled 
                          ? 'bg-primary text-primary-foreground border border-primary' 
                          : 'bg-white text-black border border-white'
                      }`}
                    >
                      {/* Default Text */}
                      <span className="relative z-10 transition-all duration-500 group-hover:translate-x-12 group-hover:opacity-0 flex items-center gap-2">
                        {navigationContent.contactButton.idleText}
                      </span>

                      {/* Hover Content */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center gap-2 text-white translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 font-bold">
                        <span>{navigationContent.contactButton.hoverText}</span>
                        <ArrowRight size={14} className="animate-pulse" />
                      </div>

                      {/* Background Blob Effect */}
                      <div className={`absolute top-[40%] left-[20%] h-2 w-2 rounded-full scale-0 transition-all duration-700 ease-in-out group-hover:top-0 group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:scale-[2.5] group-hover:rounded-none z-0 ${
                          isScrolled ? 'bg-black/40' : 'bg-primary'
                      }`} />
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
            {/* Grid Background removed */}

            <div className="relative z-10 h-full flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-border">
                 <div className="flex items-center gap-2 text-muted-foreground text-xs font-mono">
                    <Activity size={14} className="text-primary" />
                    <span>{navigationContent.mobileMenu.title}</span>
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
                    {navigationContent.mobileMenu.links.map((item, i) => (
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
                      <span>{navigationContent.mobileMenu.footer.company}</span>
                      <span>{navigationContent.mobileMenu.footer.est}</span>
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
