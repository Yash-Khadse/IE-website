
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import CTASection from '@/sections/CTASection';
import { CASE_STUDIES } from '@/lib/case-studies';
import { caseStudyDetailsContent } from '@/data/case-studies/details';

export const generateStaticParams = async () => {
    return CASE_STUDIES.map((c) => ({
      slug: c.slug,
    }));
  };
  
export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const resolvedParams = await params;
    const study = CASE_STUDIES.find((c) => c.slug === resolvedParams.slug);
    
    if (!study) {
        return {
            title: 'Not Found | InvisiEdge Case Studies',
        };
    }
    
    return {
      title: `${study.client} | InvisiEdge Case Studies`,
      description: study.desc,
    };
  };

export default async function CaseStudyPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = CASE_STUDIES.find(s => s.slug === slug);
  const { navigation, header, sections } = caseStudyDetailsContent;

  if (!study) {
      notFound();
  }

  return (
    <main className="pt-24 bg-background min-h-screen">
      
      {/* Hero Header */}
      <div className="w-full bg-secondary border-b border-border py-20 md:py-32 relative overflow-hidden">
           {study.image && (
                <div className="absolute inset-0 z-0">
                    <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-full object-cover opacity-20 filter grayscale mix-blend-multiply" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
                </div>
           )}
           <div className="max-w-[1200px] mx-auto px-6 relative z-10">
               <div className="mb-6 flex items-center gap-2">
                   <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm font-bold tracking-wide">
                        <ArrowLeft size={16} /> {navigation.backLink}
                   </Link>
                   <span className="text-border">{navigation.separator}</span>
                   <span className="text-primary font-mono text-sm uppercase">{study.client}</span>
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 max-w-4xl tracking-tighter">
                   {study.title}
               </h1>
               <div className="flex flex-wrap gap-4 md:gap-12 border-t border-border pt-8">
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{header.clientLabel}</div>
                       <div className="text-xl font-medium text-foreground">{study.client}</div>
                   </div>
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{header.serviceLabel}</div>
                       <div className="text-xl font-medium text-foreground">{study.service || "System Architecture"}</div>
                   </div>
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{header.durationLabel}</div>
                       <div className="text-xl font-medium text-foreground">{study.duration || "6 Months"}</div>
                   </div>
                   <div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">{header.outcomeLabel}</div>
                       <div className="text-xl font-bold text-green-500">{study.outcome || study.impact}</div>
                   </div>
               </div>
           </div>
      </div>

      <article className="max-w-[1000px] mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              
              <div className="md:col-span-8 space-y-12">
                  <section>
                      <h2 className="text-3xl font-bold text-foreground mb-6">{sections.challenge}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                          {study.challenge || "Detailed challenge description describing the state before intervention."}
                      </p>
                  </section>
                  
                  <section>
                      <h2 className="text-3xl font-bold text-foreground mb-6">{sections.solution}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {study.solution || "Strategic overview of the implemented solution."}
                      </p>
                      
                      {study.solutionList && (
                          <ul className="space-y-4">
                              {study.solutionList.map((item: string, i: number) => (
                                  <li key={i} className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg">
                                      <CheckCircle2 className="shrink-0 text-primary mt-1" />
                                      <span className="text-foreground">{item}</span>
                                  </li>
                              ))}
                          </ul>
                      )}
                  </section>

                  <section>
                      <h2 className="text-3xl font-bold text-foreground mb-6">{sections.results}</h2>
                      <div className="grid grid-cols-2 gap-4">
                           {study.results?.map((res, i) => (
                               <div key={i} className="p-6 bg-secondary rounded-2xl text-center">
                                   <div className="text-4xl font-bold text-foreground mb-2">{res.value}</div>
                                   <div className="text-sm font-mono text-muted-foreground uppercase">{res.label}</div>
                               </div>
                           )) || (
                               <div className="p-6 bg-secondary rounded-2xl text-center col-span-2 text-muted-foreground italic">Results pending...</div>
                           )}
                      </div>
                  </section>
              </div>
              
              <div className="md:col-span-4 space-y-8">
                  <div className="sticky top-32">
                      <div className="bg-card border border-border p-6 rounded-2xl">
                          <h3 className="text-lg font-bold text-foreground mb-4">{sections.techStack}</h3>
                          <div className="flex flex-wrap gap-2">
                              {study.techStack?.map((tech: string) => (
                                  <span key={tech} className="px-3 py-1 bg-secondary text-xs font-mono rounded-full text-muted-foreground border border-border">
                                      {tech}
                                  </span>
                              )) || <span className="text-xs text-muted-foreground">Various</span>}
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </article>

      <CTASection />
    </main>
  );
}
