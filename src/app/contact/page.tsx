import type { Metadata } from 'next';
import CTASection from '@/sections/CTASection';
import ContactHero from '@/sections/contact/ContactHero';
import ContactForm from '@/sections/contact/ContactForm';
import ContactInfo from '@/sections/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | InvisiEdge',
  description: 'Get in touch with InvisiEdge for digital marketing inquiries, partnerships, and support.',
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pb-12 overflow-hidden">
      
      <ContactHero />

      {/* 2. Main Content Grid */}
      <section className="px-6 max-w-[1400px] pt-16 md:pt-28 mx-auto pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <ContactForm />
              <ContactInfo />
          </div>
      </section>      
    </main>
  );
}
