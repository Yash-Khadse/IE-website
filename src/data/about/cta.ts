import { ShieldCheck, Workflow, Lock } from "lucide-react";

export const aboutFinalCTAContent = {
  strategyStream: [
    "CHECK_MARKET_INTEGRITY...",
    "SYNC_GROWTH_NODES...",
    "DECRYPT_MARKET_ALPHA...",
    "READY_FOR_CAMPAIGN_INIT"
  ],
  header: {
    statusBadge: "Growth_Node_Stable // v4.2.0",
    title: {
      row1: "INITIALIZE",
      highlight: "THE MISSION."
    },
    description: "The growth infrastructure is primed. Secure your position in the InvisiEdge high-velocity index today."
  },
  actions: {
    primary: {
      label: "Start Campaign",
      href: "/contact"
    },
    secondary: {
      label: "View Strategy Intel",
      href: "/services"
    }
  },
  prerequisites: [
    {
      icon: ShieldCheck,
      label: "Compliance_Index",
      val: "A+ / 100%",
      detail: "SOC2 SOC3 Compliant Pipeline"
    },
    {
      icon: Workflow,
      label: "Execution_Logic",
      val: "3wk_Sprints",
      detail: "Rapid Iterative Deployment"
    },
    {
      icon: Lock,
      label: "Data_Privacy",
      val: "Zero_Leak",
      detail: "Proprietary Asset Ownership"
    }
  ],
  footer: {
    terminal: "Terminal_State: ACTIVE_READY",
    coordinate: "Coordinate: 34.22.89.01"
  }
};
