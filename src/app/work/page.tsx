import FeaturedProjects from '@/sections/FeaturedProjects';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';

export const metadata = {
  title: 'Our Work | InvisiEdge',
  description: 'View our portfolio of high-performance digital deployments and case studies.',
};

export default function WorkPage() {
  return (
    <main className="pt-20">
       <div className="py-24 md:py-32 bg-background text-center relative overflow-hidden border-b border-border">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
             <div className="max-w-4xl mx-auto px-6 relative z-10">
                 <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                     ACTIVE <span className="text-primary">DEPLOYMENTS</span>
                 </h1>
                 <p className="text-xl text-muted-foreground">
                     A showcase of our engineered dominance in the digital space.
                 </p>
             </div>
        </div>
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
