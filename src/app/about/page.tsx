import type { Metadata } from 'next';
import AboutHero from "@/sections/about/AboutHero";
import OurStory from "@/sections/about/OurStory";
import MissionVisionValues from "@/sections/about/MissionVisionValues";

import HowWeWork from "@/sections/about/HowWeWork";
import WhyChooseUs from "@/sections/about/WhyChooseUs";

import OurTeam from "@/sections/about/OurTeam";

import SocialProof from "@/sections/about/SocialProof";
import AboutFinalCTA from "@/sections/about/AboutFinalCTA";
import CTASection from "@/sections/CTASection";

export const metadata: Metadata = {
  title: 'About Us | InvisiEdge',
  description: 'Our story, mission, and the team behind high-performance digital systems.',
};

export default function AboutPage() {
  return (
    <main className="overflow-x-clip">
      <AboutHero />
      <OurStory />
      <MissionVisionValues />
      <HowWeWork />
      
      <CTASection />
    </main>
  );
}
