import { Search, Layers, Zap, BarChart3 } from "lucide-react";

export const howWeWorkContent = {
  steps: [
    {
      id: "01",
      phase: "STEP 1",
      title: "Discovery.",
      desc: "We analyze your current setup and data to create a clear, actionable roadmap.",
      icon: Search,
      bg: "bg-[#072C55]",
      text: "text-white",
      accent: "text-[#C47DFD]",
      border: "border-white/10"
    },
    {
      id: "02",
      phase: "STEP 2",
      title: "Build.",
      desc: "We build the foundation with precision tracking, high-converting pages, and performance creative.",
      icon: Layers,
      bg: "bg-[#F8F9FA]",
      text: "text-[#072C55]",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/10"
    },
    {
      id: "03",
      phase: "STEP 3",
      title: "Optimize.",
      desc: "We launch campaigns and iterate weekly to identify exactly what drives results.",
      icon: Zap,
      bg: "bg-[#072C55]",
      text: "text-white",
      accent: "text-[#C47DFD]",
      border: "border-white/10"
    },
    {
      id: "04",
      phase: "STEP 4",
      title: "Scale.",
      desc: "Once performance is proven, we increase budgets on winning channels to maximize growth.",
      icon: BarChart3,
      bg: "bg-[#F8F9FA]",
      text: "text-[#072C55]",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/10"
    }
  ],
  scrollLabel: "Scroll To Advance"
};
