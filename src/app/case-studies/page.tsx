import Link from 'next/link';
import { ArrowRight, BarChart3, Clock, TrendingUp, Terminal, Activity, FileSearch } from 'lucide-react';
import CTASection from '@/sections/CTASection';
import { CASE_STUDIES } from '@/lib/case-studies';
import { caseStudiesPageContent } from '@/data/case-studies/listing';

export const metadata = {
  title: 'Case Studies | InvisiEdge',
  description: 'Deep dives into how we solved complex infrastructure challenges and delivered measurable ROI.',
};

export default function CaseStudiesPage() {
    return (
        <main className="pt-20 bg-[#F8F9FA] min-h-screen">
             {/* Tactical Header */}
             <div className="py-24 md:py-48 text-center relative overflow-hidden border-b border-[#072C55]/10 bg-white">
                  {/* Digital Grid Detail */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#072C55]" />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#072C55]" />
                      <div className="absolute top-0 right-10 flex flex-col items-end">
                           <span className="font-mono text-[10vw] font-black text-[#072C55] leading-none">REPORTS</span>
                      </div>
                  </div>

                 <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
                     <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#072C55]/10 bg-white shadow-sm mb-10">
                         <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5210F8] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5210F8]"></span>
                         </span>
                         <span className="font-mono text-[10px] font-black text-[#072C55]/40 uppercase tracking-[0.5em]">
                             {caseStudiesPageContent.header.badge}
                         </span>
                     </div>

                     <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-[#072C55] mb-8 leading-[0.8] uppercase">
                         {caseStudiesPageContent.header.title.static} <br />
                         <span className="text-[#5210F8]">{caseStudiesPageContent.header.title.highlight}</span>
                     </h1>
                     <p className="text-xl md:text-2xl text-[#072C55]/60 font-medium max-w-2xl leading-tight">
                         {caseStudiesPageContent.header.description}
                     </p>
                 </div>
            </div>

            {/* Dossier Grid */}
            <section className="py-32 px-6 max-w-[1450px] mx-auto">
                <div className="flex flex-col gap-32">
                    {CASE_STUDIES.map((study, i) => (
                        <div key={study.id} className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-stretch group">
                            {/* Visual Component */}
                            <div className={`lg:w-1/2 w-full min-h-[400px] lg:min-h-auto bg-white rounded-[3rem] border border-[#072C55]/10 relative overflow-hidden flex flex-col items-center justify-center p-12 shadow-sm transition-all duration-700 group-hover:border-[#5210F8]/30 group-hover:shadow-2xl ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                                 {study.image ? (
                                    <>
                                        <div className="absolute inset-0 z-0">
                                            <img 
                                                src={study.image} 
                                                alt={study.title} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                            />
                                            <div className="absolute inset-0 bg-[#072C55]/40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-60" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#072C55]/90 via-[#072C55]/40 to-transparent" />
                                        </div>
                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <div className="font-mono text-[10px] font-black text-white bg-[#5210F8] px-4 py-2 rounded-full backdrop-blur-sm uppercase tracking-[0.3em] mb-6 shadow-xl border border-white/10">MISSION // {study.id.toString().padStart(2, '0')}</div>
                                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.9] max-w-lg drop-shadow-2xl">
                                                {study.title}
                                            </h3>
                                        </div>
                                    </>
                                 ) : (
                                    <>
                                        <div className="absolute inset-0 bg-[#072C55]/[0.02] -z-1" />
                                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform duration-700">
                                            <FileSearch size={140} />
                                        </div>
                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <div className="font-mono text-[10px] font-black text-[#5210F8] uppercase tracking-[0.6em] mb-4">MISSION_OBJECTIVE_{study.id.toString().padStart(2, '0')}</div>
                                            <h3 className="text-4xl md:text-5xl font-black text-[#072C55] tracking-tighter leading-none max-w-md">
                                                {study.title}
                                            </h3>
                                        </div>
                                    </>
                                 )}
                                 {/* Decorative Laser Line */}
                                 <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#5210F8]/50 to-transparent z-20" />
                            </div>
                            
                            <div className="lg:w-1/2 w-full flex flex-col justify-center gap-8 py-8">
                                <div className="flex flex-col">
                                    <span className="text-[#5210F8] font-mono text-[10px] font-black tracking-[0.4em] uppercase mb-1">
                                        {caseStudiesPageContent.listingProps.clientLabel} // {study.client}
                                    </span>
                                    <div className="h-[2px] w-full bg-gradient-to-r from-[#072C55]/5 to-transparent" />
                                </div>
                                
                                <p className="text-[#072C55]/60 text-xl md:text-2xl font-medium leading-[1.15] border-l-4 border-[#072C55]/5 pl-8 transition-colors group-hover:border-[#5210F8]/30">
                                    {study.desc}
                                </p>
                                
                                <div className="grid grid-cols-2 gap-8 my-4">
                                    <div className="p-8 bg-white border border-[#072C55]/10 rounded-3xl shadow-sm group-hover:border-[#5210F8]/20 transition-all">
                                        <TrendingUp className="text-[#5210F8] mb-4" size={24} />
                                        <div className="text-3xl font-black text-[#072C55] tracking-tight">{study.impact}</div>
                                        <div className="text-[10px] text-[#072C55]/30 font-black font-mono uppercase tracking-widest">{caseStudiesPageContent.listingProps.impactLabel}</div>
                                    </div>
                                    <div className="p-8 bg-white border border-[#072C55]/10 rounded-3xl shadow-sm group-hover:border-[#5210F8]/20 transition-all">
                                        <Clock className="text-[#5210F8] mb-4" size={24} />
                                        <div className="text-3xl font-black text-[#072C55] tracking-tight">{study.metric}</div>
                                        <div className="text-[10px] text-[#072C55]/30 font-black font-mono uppercase tracking-widest">{caseStudiesPageContent.listingProps.metricLabel}</div>
                                    </div>
                                </div>

                                <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-4 px-10 py-5 bg-[#072C55] text-white rounded-2xl font-mono text-sm font-black uppercase tracking-[0.3em] hover:bg-[#5210F8] transition-all group/btn w-fit shadow-xl">
                                    {caseStudiesPageContent.listingProps.ctaLabel} 
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Bottom Brand Detail */}
            <div className="py-20 border-t border-[#072C55]/10 flex justify-center opacity-10">
                 <span className="font-mono text-xs font-black tracking-[1.5em] text-[#072C55]">
                    {caseStudiesPageContent.watermark}
                 </span>
            </div>

            <CTASection />
        </main>
    );
}
