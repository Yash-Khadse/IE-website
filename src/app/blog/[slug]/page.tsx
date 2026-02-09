import { BLOGS } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import BlogPostHeader from '@/sections/blog/BlogPostHeader';
import BlogPostContent from '@/sections/blog/BlogPostContent';
import CTASection from '@/sections/CTASection';

export const generateStaticParams = async () => {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const post = BLOGS.find((b) => b.slug === resolvedParams.slug);
  
  if (!post) {
      return {
          title: 'Not Found | InvisiEdge Blog',
      };
  }
  
  return {
    title: `${post.title} | InvisiEdge Blog`,
    description: post.excerpt,
  };
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOGS.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen">
       <BlogPostHeader post={post} />
       <BlogPostContent post={post} />
       <CTASection />
    </main>
  );
}
