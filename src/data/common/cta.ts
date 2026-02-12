import { Cpu, Zap, Shield } from 'lucide-react';

export const ctaContent = {
  header: {
    titleLine1: "READY TO",
    highlight: "SCALE?"
  },
  typewriter: {
    prefix: "> ",
    text: "Initialize sequence..."
  },
  grid: [
    { text: 'Performance Audit', icon: Cpu, id: 'AUDIT_01', color: 'text-blue-400' },
    { text: 'Growth Automation', icon: Zap, id: 'AUTO_02', color: 'text-yellow-400' },
    { text: 'Brand Systems', icon: Shield, id: 'SYS_03', color: 'text-emerald-400' }
  ],
  button: {
    text: "START_GROWTH_ENGINE"
  }
};
