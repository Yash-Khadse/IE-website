import { ShieldCheck, Cpu, Terminal } from 'lucide-react';

export const footerContent = {
  header: {
    version: "Version 4.0",
    line1: "WHERE STRATEGY BECOMES",
    highlight: "MARKET LEADERSHIP"
  },
  statusBadges: [
    { icon: ShieldCheck, label: "PROVEN", color: "text-green-400" },
    { icon: Cpu, label: "SCALABLE", color: "text-blue-400" },
    { icon: Terminal, label: "TRACKED", color: "text-yellow-400" }
  ],
  columns: [
    {
      title: "AGENCY",
      links: [
        { label: 'Core Strategies', href: '/services' },
        { label: 'Process', href: '/services#process' },
        { label: 'Our Mission', href: '/about' },
      ]
    },
    {
      title: "LEGAL",
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Data Processing', href: '/privacy#security' },
      ]
    },
    {
      title: "CONNECT",
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/invisiedge' },
        { label: 'X / Twitter', href: 'https://x.com/InvisiEdge' },
        { label: 'Facebook', href: 'https://www.facebook.com/invisiedge/' },
        { label: 'Instagram', href: 'https://www.instagram.com/invisiedge/' },
      ]
    }
  ],
  bottomBar: {
    status: "All Systems Active",
    copyright: "© 2025 INVISIEDGE MARKETING. ALL RIGHTS RESERVED.",
    response: "RAPID",
    reach: "GLOBAL"
  }
};
