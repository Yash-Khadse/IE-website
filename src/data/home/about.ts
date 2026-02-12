import { Layers, Cpu, Code } from "lucide-react";

export const aboutContent = {
  mission: {
    badge: "Our Mission",
    title: {
      line1: "We don’t build websites. We build",
      highlight: "growth engines"
    },
    description: "The digital landscape is fragmented. InvisiEdge architects the digital strategy and multi-channel campaigns that transform disparate assets into a revenue-generating ecosystem."
  },
  modules: [
    { 
      icon: Layers, 
      label: "Scalable Infrastructure", 
      desc: "Foundation for scaling multiple brands.", 
      code: "01" 
    },
    { 
      icon: Cpu, 
      label: "Smart Automation", 
      desc: "Automating customer journeys.", 
      code: "02" 
    },
    { 
      icon: Code, 
      label: "Strategic Planning", 
      desc: "Data-backed strategies for scalable growth.", 
      code: "03" 
    }
  ],
  cta: {
    text: "START GROWTH"
  }
};
