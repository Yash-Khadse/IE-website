import { Target, Zap, BarChart3, Cpu, Layout, MousePointer2, PieChart, GitBranch } from "lucide-react";

export const whatWeDoContent = {
  header: {
    badge: "Service Capabilities",
    title: {
      static: "Growth ",
      highlight: "Infrastructure."
    }
  },
  services: [
    {
      id: "01",
      title: "Acquisition Engine",
      description: "We don't just buy ads. We engineer reliable traffic sources using algorithmic targeting and programmatic SEO infrastructure.",
      icon: Target,
      color: "bg-[#5210F8]",
      text: "text-[#5210F8]",
      features: ["Paid Media (Meta/Google)", "Technical SEO", "Creator Partnerships"],
      visual_icon: Layout
    },
    {
      id: "02",
      title: "Conversion Protocol",
      description: "Traffic is meaningless without action. We deploy rigorous A/B testing and persuasive design to maximize revenue per user.",
      icon: Zap,
      color: "bg-[#C47DFD]",
      text: "text-[#C47DFD]",
      features: ["CRO Experimentation", "Landing Page Dev", "Direct Response Copy"],
      visual_icon: MousePointer2
    },
    {
      id: "03",
      title: "Intelligence & Data",
      description: "Replace opinion with fact. We build single-source-of-truth dashboards that attribute every dollar to a business outcome.",
      icon: BarChart3,
      color: "bg-[#00CC76]",
      text: "text-[#00CC76]",
      features: ["Multi-Touch Attribution", "Predictive Modeling", "CRM Architecture"],
      visual_icon: PieChart
    },
    {
      id: "04",
      title: "Autonomous Ops",
      description: "Scale without headcount. We automate manual workflows to nurture leads, sync data, and execute campaigns 24/7.",
      icon: Cpu,
      color: "bg-[#00FF94]",
      text: "text-[#00FF94]",
      features: ["Workflow Automation", "AI Agents", "Email Ops"],
      visual_icon: GitBranch
    }
  ],
  visual: {
    version: "Growth View v2.0",
    efficiency: "98.4%",
    scale: "Infinite"
  }
};
