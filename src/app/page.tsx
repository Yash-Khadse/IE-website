"use client";

import Hero from '../sections/Hero';
import FeaturedProjects from '../sections/FeaturedProjects';
import QuoteSection from '../sections/QuoteSection';
import ServicesSection from '../sections/ServicesSection';
import IntegrationSection from '../sections/IntegrationSection';
// import TrustSection from '../sections/TrustSection';
import CTASection from '../sections/CTASection';
import GoalsSection from '../sections/GoalsSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FAQSection from '../sections/FAQSection';
import AboutSection from '@/sections/AboutSection';
import FinalCTA from '../sections/FinalCTA';

import { MarqueeSection } from '@/sections/MarqueeSection';

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <IntegrationSection />
      <QuoteSection />
      <FeaturedProjects />
      {/* <TrustSection /> */}
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      {/* <FinalCTA /> */}
    </>
  );
}
