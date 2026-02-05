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
    <main className="pt-20">
        <div className="py-24 md:py-32 bg-background text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
             <div className="max-w-4xl mx-auto px-6 relative z-10">
                 <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                     SYSTEM <span className="text-primary">CAPABILITIES</span>
                 </h1>
                 <p className="text-xl text-muted-foreground">
                     Comprehensive digital infrastructure engineering for scale-first enterprises.
                 </p>
             </div>
        </div>
      <ServicesSection />
      <IntegrationSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
