import FeaturedProjects from '@/sections/FeaturedProjects';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CTASection from '@/sections/CTASection';
import WorkHero from '@/sections/work/WorkHero';

export const metadata = {
  title: 'Our Work | InvisiEdge',
  description: 'View our portfolio of high-performance digital deployments and case studies.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <WorkHero />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}