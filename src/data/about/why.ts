import { History, Zap, EyeOff, Eye, Users, Cpu } from "lucide-react";

export const whyChooseUsContent = {
  header: {
    title: {
      static: "Why ",
      highlight: "Choose Us."
    },
    col1: "Legacy Agencies",
    col2: "The InvisiEdge Way"
  },
  comparisons: [
    {
      label: "SPEED",
      traditional: {
        title: "Monthly Reports",
        desc: "Waiting 30 days to see if campaigns worked. Slow and reactive to market changes.",
        icon: History,
        val: "SLOW"
      },
      invisi: {
        title: "Weekly Updates",
        desc: "We review and improve campaigns every 7 days to get you faster results.",
        icon: Zap,
        val: "FAST"
      }
    },
    {
      label: "TRANSPARENCY",
      traditional: {
        title: "Standard Reports",
        desc: "Generic PDF reports sent once a month. Often missing key details.",
        icon: EyeOff,
        val: "OPAQUE"
      },
      invisi: {
        title: "Live Dashboard",
        desc: "See your actual ad performance in real-time. 100% honest and transparent.",
        icon: Eye,
        val: "OPEN"
      }
    },
    {
      label: "EXPERTISE",
      traditional: {
        title: "Junior Teams",
        desc: "Accounts sold by seniors but managed by juniors who are learning on the job.",
        icon: Users,
        val: "JUNIOR"
      },
      invisi: {
        title: "Senior Experts",
        desc: "Your account is managed directly by experienced strategists. No middlemen.",
        icon: Cpu,
        val: "EXPERT"
      }
    }
  ]
};
