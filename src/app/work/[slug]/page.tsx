import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/projects';
import ProjectHero from '@/sections/work/ProjectHero';
import ProjectContent from '@/sections/work/ProjectContent';
import ProjectRelatedServices from '@/sections/work/ProjectRelatedServices';
import ProjectNavigation from '@/sections/work/ProjectNavigation';
import CTASection from '@/sections/CTASection';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.slug);
  
  if (!project) {
    return { title: 'Project Not Found | InvisiEdge' };
  }

  return {
    title: `${project.title} | InvisiEdge Case Study`,
    description: project.summary,
  };
}

// Generate Static Params for SSG
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find Next Project for Navigation
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="min-h-screen bg-background">
      
      {/* 1. HERO SECTION */}
      <ProjectHero project={project} />

      {/* 2. MAIN CONTENT (Challenge, Solution, Results) */}
      <ProjectContent project={project} />

      {/* 3. RELATED SERVICES */}
      <ProjectRelatedServices serviceIds={project.relatedServices || []} />

      {/* 4. NAVIGATION */}
      <ProjectNavigation nextProject={nextProject} />

      {/* 5. CTA */}
      <CTASection />

    </main>
  );
}
