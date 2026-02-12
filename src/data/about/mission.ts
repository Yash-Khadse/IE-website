import { Target, Eye, Lightbulb, Heart } from "lucide-react";

export const missionVisionValuesContent = {
  header: {
    badge: "Our Principles",
    title: "Our Values",
    description: "The principles that shape our decisions, define how we work, and guide every system we build."
  },
  pillars: [
    {
      id: "01",
      title: "CLARITY",
      headline: "Clarity Over Noise.",
      desc: "We believe growth starts with clarity. Every decision, system, and solution we build is intentional, removing confusion and focusing on what truly drives impact.",
      icon: Eye,
      color: "from-[#5210F8]/25 to-[#5210F8]/40",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/60",
      stats: [
        { label: "Focus", value: "100%" },
        { label: "Confusion", value: "0%" }
      ]
    },
    {
      id: "02",
      title: "SYSTEMS",
      headline: "Systems Before Scale.",
      desc: "Scaling without structure leads to chaos. We prioritize building strong, connected systems first, so growth becomes stable, repeatable, and sustainable.",
      icon: Target,
      color: "from-[#5210F8]/10 to-[#5210F8]/20",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/40",
      stats: [
        { label: "Stability", value: "Max" },
        { label: "Chaos", value: "Min" }
      ]
    },
    {
      id: "03",
      title: "PURPOSE",
      headline: "Purposeful Design.",
      desc: "Design and technology are not about looking impressive they exist to solve real problems. We create only what adds value and moves the business forward.",
      icon: Lightbulb,
      color: "from-[#C47DFD]/25 to-[#C47DFD]/40",
      accent: "text-[#C47DFD]",
      border: "border-[#C47DFD]/60",
      stats: [
        { label: "Value", value: "High" },
        { label: "Fluff", value: "None" }
      ]
    },
    {
      id: "04",
      title: "PARTNER",
      headline: "Long-Term Partnership.",
      desc: "We don’t chase quick wins. We work as long-term partners, aligning with our clients’ goals and evolving alongside their business as it grows.",
      icon: Heart,
      color: "from-[#5210F8]/25 to-[#5210F8]/40",
      accent: "text-[#5210F8]",
      border: "border-[#5210F8]/60",
      stats: [
        { label: "Commitment", value: "Long" },
        { label: "Churn", value: "Low" }
      ]
    }
  ]
};
