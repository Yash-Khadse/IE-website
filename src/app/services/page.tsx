import ServiceListing from '@/sections/services/ServiceListing';

import ServicesHero from '@/sections/services/ServicesHero';
import ServicesSection from '@/sections/ServicesSection';
import ProcessSection from '@/sections/ProcessSection';
import IntegrationSection from '@/sections/IntegrationSection';
import CTASection from '@/sections/CTASection';

export const metadata = {
  title: 'Services | InvisiEdge',
  description: 'Explore our high-performance digital services, from system diagnostics to active scaling.',
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceListing />

      <ServicesSection />
      <IntegrationSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
