import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import CTASection from '@/sections/CTASection';
import BlogHero from '@/sections/blog/BlogHero';
import BlogListing from '@/sections/blog/BlogListing';

export const metadata = {
  title: 'Blog | InvisiEdge',
  description: 'Insights on digital architecture, performance engineering, and system design.',
};

export default function BlogPage() {
    return (
        <main className="bg-background min-h-screen">
            <BlogHero />
            <BlogListing />
            <CTASection />
        </main>
    );
}
