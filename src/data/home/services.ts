import { Globe, Lock, Smartphone, MousePointer, ArrowUpRight, CheckCircle2, MessageSquare, Users, BarChart3, Workflow, Zap } from 'lucide-react';

export const servicesContent = {
  header: {
    badge: "Growth Capabilities",
    title: {
      line1: "INVINCIBLE",
      highlight: "STRATEGIES",
      line2: "MARKET",
      italic: "LEADERSHIP"
    }
  },
  centralEngine: {
    title: "GROWTH ENGINE",
    hub: "MARKETING HUB"
  },
  cards: {
    digitalAudit: {
      title: "Digital Audit",
      desc: "Deep-dive audits to identify growth opportunities.",
      icon: BarChart3
    },
    satisfaction: {
      step: "STEP 01",
      score: "4.9",
      label: "Client Satisfaction Score",
      stats: [40, 60, 30, 80, 50, 90, 70]
    },
    funnel: {
      title: "Funnel Architecture",
      icon: Workflow,
      steps: ['Acquisition', 'Activation', 'Retention']
    },
    roi: {
      label: "Revenue Lift",
      value: "+142%"
    },
    optimization: {
      label: "Conversion",
      value: "12",
      unit: "ms"
    },
    consistency: {
      title: "Brand Consistency",
      status: "Guidelines: Active",
      icon: Lock
    },
    intelligentConversion: {
      titleLine1: "Intelligent",
      titleLine2: "Conversion",
      metrics: [
        { icon: Users, width: "100%", color: "bg-muted" },
        { icon: MousePointer, width: "70%", color: "bg-primary" },
        { icon: CheckCircle2, width: "40%", color: "bg-green-500" }
      ]
    },
    scalable: {
      title: "Rapid Scale",
      statusLabel: "Status",
      statusValue: "Live",
      icon: Zap
    }
  }
};
