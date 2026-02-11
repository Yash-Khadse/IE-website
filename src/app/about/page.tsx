"use client";

import AboutHero from "@/sections/about/AboutHero";
import OurStory from "@/sections/about/OurStory";
import MissionVisionValues from "@/sections/about/MissionVisionValues";
import WhatWeDo from "@/sections/about/WhatWeDo";
import HowWeWork from "@/sections/about/HowWeWork";
import WhyChooseUs from "@/sections/about/WhyChooseUs";

import OurTeam from "@/sections/about/OurTeam";

import SocialProof from "@/sections/about/SocialProof";
import AboutFinalCTA from "@/sections/about/AboutFinalCTA";
import CTASection from "@/sections/CTASection";

export default function AboutPage() {
  return (
    <main className="overflow-x-clip">
      <AboutHero />
      <OurStory />
      <MissionVisionValues />
      {/* <WhatWeDo /> */}
      <HowWeWork />
      <WhyChooseUs />

      {/* <OurTeam /> */}


      <CTASection />
    </main>
  );
}
