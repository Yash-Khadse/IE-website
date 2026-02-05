import AboutSection from '@/sections/AboutSection';
import TrustSection from '@/sections/TrustSection';
import CTASection from '@/sections/CTASection';

export const metadata = {
  title: 'About Us | InvisiEdge',
  description: 'We express infrastructure. Learn about our mission, vision, and the team behind InvisiEdge.',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutSection />
      
      {/* Expanded Values Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">CORE <span className="text-primary">VALUES</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'PRECISION', desc: 'We operate with military-grade attention to detail. Every pixel, every line of code is intentional.' },
                    { title: 'VELOCITY', desc: 'Speed is a feature. We engineer for low latency and high throughput in both development and runtime.' },
                    { title: 'INTELLIGENCE', desc: 'Data-driven decision making is at our core. We ignore intuition in favor of measurable metrics.' }
                ].map((value, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                        <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                        <p className="text-muted-foreground">{value.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <TrustSection />
      <CTASection />
    </main>
  );
}
