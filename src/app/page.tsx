import type { Metadata } from 'next';
import Hero from '../sections/Hero';
import FeaturedProjects from '../sections/FeaturedProjects';
import QuoteSection from '../sections/QuoteSection';
import ServicesSection from '../sections/ServicesSection';
import IntegrationSection from '../sections/IntegrationSection';
import CTASection from '../sections/CTASection';
import FAQSection from '../sections/FAQSection';
import AboutSection from '@/sections/AboutSection';

import { MarqueeSection } from '@/sections/MarqueeSection';

export const metadata: Metadata = {
  title: 'InvisiEdge | Digital Marketing & Automation Agency',
  description: 'Data-driven marketing, intelligent automation, and scalable brand systems for high-growth businesses.',
};

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
      <FAQSection />
      <CTASection />
    </>
  );
}
