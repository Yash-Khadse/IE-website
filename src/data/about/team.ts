import { Brain, Paintbrush, Code2, BarChart3 } from "lucide-react";

export const ourTeamContent = {
  header: {
    badge: "Growth Collective // Human Intel",
    title: {
      static: "The ",
      highlight: "Personnel."
    },
    description: "We don't maintain a payroll of generalists. We deploy a collective of senior specialists optimized for the mission.",
    ticker: "GROWTH_ORCH_VERSION_42.0.1 // READY_FOR_SCALE"
  },
  teamUnits: [
    {
      id: "UNIT_01",
      image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800", // Team working/architecting

      role: "Growth Architects",
      concept: "Strategic Intelligence",
      desc: "Ex-founders who treat growth as a technical problem. They don't guess; they architect systems that force scaling through unit-economic transparency and market arbitrage.",
      icon: Brain,
      color: "#5210F8",
      accent: "text-[#5210F8]",
      bg: "bg-[#5210F8]/5",
      skills: [
        { name: "Unit Econ Analysis", level: 98 },
        { name: "GTM Orchestration", level: 95 },
        { name: "Retention Logic", level: 92 }
      ],
      metadata: {
        deployment: "48H_READY",
        clearance: "LEVEL_10",
        rank: "PRINCIPAL"
      }
    },
    {
      id: "UNIT_02",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Creative/cyberpunk aesthetic

      role: "Creative Commandos",
      concept: "Psychological Ops",
      desc: "Engineering desire at the intersection of psychology and aesthetics. Our visionaries build movements, not just campaigns, using high-velocity performance creative protocols.",
      icon: Paintbrush,
      color: "#C47DFD",
      accent: "text-[#C47DFD]",
      bg: "bg-[#C47DFD]/5",
      skills: [
        { name: "Aesthetic Synthesis", level: 96 },
        { name: "Conversion Design", level: 94 },
        { name: "Visual Hooking", level: 98 }
      ],
      metadata: {
        deployment: "IMMEDIATE",
        clearance: "LEVEL_09",
        rank: "ELITE"
      }
    },
    {
      id: "UNIT_03",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", // Coding/Development

      role: "Core Builders",
      concept: "Infrastructure Mastery",
      desc: "Ensuring zero-latency and infinite scale. Our full-stack engineers build custom middleware and API bridges that turn your tech stack into a performance-enhancing weapon.",
      icon: Code2,
      color: "#00FF94",
      accent: "text-[#00FF94]",
      bg: "bg-[#00FF94]/5",
      skills: [
        { name: "Next.js Protocols", level: 99 },
        { name: "API Orchestration", level: 95 },
        { name: "Cloud Scaling", level: 97 }
      ],
      metadata: {
        deployment: "SCHEDULED",
        clearance: "LEVEL_10",
        rank: "LEAD_ARCH"
      }
    },
    {
      id: "UNIT_04",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Data/Analytics

      role: "Data Alchemists",
      concept: "Algorithmic Precision",
      desc: "Extracting truth from advertising chaos. Our data scientists deploy custom ML models and server-side tracking to ensure every dollar spent is backed by high-confidence execution signals.",
      icon: BarChart3,
      color: "#072C55",
      accent: "text-[#072C55]",
      bg: "bg-[#072C55]/5",
      skills: [
        { name: "Attribution Modeling", level: 94 },
        { name: "Predictive Analytics", level: 96 },
        { name: "SQL Orchestration", level: 98 }
      ],
      metadata: {
        deployment: "ACTIVE",
        clearance: "LEVEL_10",
        rank: "SCIENTIST"
      }
    }
  ]
};
