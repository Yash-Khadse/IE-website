import { MapPin, Mail, Phone } from 'lucide-react';

export const contactContent = {
  form: {
    title: "Start a Project",
    fields: {
      name: {
        label: "Full Name",
        placeholder: "Full Name"
      },
      email: {
        label: "Business Email",
        placeholder: "Email Address"
      },
      interest: {
        label: "Interest",
        options: [
          "Marketing Strategy Consultation",
          "Brand Identity & Design",
          "Performance Marketing (SEO/SEM)",
          "Growth Strategy",
          "General Partnership"
        ]
      },
      objectives: {
        label: "Growth Objectives",
        placeholder: "Tell us about your brand vision and key objectives..."
      }
    },
    submitButton: "Send Message"
  },
  info: {
    title: "CONNECT WITH US",
    description: "Our team operates globally. Expect a response within 24 hours.",
    highlight: "24 hours",
    contactItems: [
      { 
        icon: MapPin, 
        title: "Headquarters", 
        value: "11445 Compaq Center W. Drive Building CCA6 Houston, TX 77070", 
        color: "text-[#5210F8]", 
        bg: "bg-[#5210F8]/10" 
      },
      { 
        icon: Mail, 
        title: "Email Connect", 
        value: "hello@invisiedge.io\ncareers@invisiedge.io", 
        color: "text-[#5210F8]", 
        bg: "bg-[#5210F8]/10" 
      },
      { 
        icon: Phone, 
        title: "Direct Line", 
        value: "+1 (555) 123-4567\nMon-Fri, 0900 - 1800 PST", 
        color: "text-[#C47DFD]", 
        bg: "bg-[#C47DFD]/10" 
      }
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/invisiedge/", icon: "Instagram" },
      { label: "X (Twitter)", url: "https://x.com/InvisiEdge", icon: "Twitter" },
      { label: "Facebook", url: "https://www.facebook.com/invisiedge/", icon: "Facebook" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/invisiedge", icon: "Linkedin" }
    ]
  }
};
