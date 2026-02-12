import { Network, Megaphone, Users, Database, Bot, Ticket } from 'lucide-react';

export const integrationContent = {
  header: {
    badge: "UNIFIED_GROWTH",
    title: "Everything we build connects.",
    highlight: "Nothing works in isolation."
  },
  coreNode: {
    icon: Database
  },
  integrations: [
    { icon: Network, label: "Websites & Infrastructure", top: "-5%", left: "15%", delay: 0.2 },
    { icon: Megaphone, label: "Branding & Identity", top: "15%", left: "0%", delay: 0.4 },
    { icon: Users, label: "Social Media Engines", top: "40%", left: "15%", delay: 0.6 },
    { icon: Database, label: "CRM Systems", top: "-5%", left: "75%", delay: 0.3 },
    { icon: Bot, label: "Marketing Automation", top: "15%", left: "90%", delay: 0.5 },
    { icon: Ticket, label: "Performance Marketing", top: "40%", left: "75%", delay: 0.7 }
  ],
  mobileIntegrations: [
    { icon: Network, label: "Websites", delay: 0.1 },
    { icon: Megaphone, label: "Branding", delay: 0.2 },
    { icon: Users, label: "Social Media", delay: 0.3 },
    { icon: Database, label: "CRM", delay: 0.4 },
    { icon: Bot, label: "Automation", delay: 0.5 },
    { icon: Ticket, label: "Marketing", delay: 0.6 }
  ]
};
