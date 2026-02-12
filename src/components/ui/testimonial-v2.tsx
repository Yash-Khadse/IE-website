"use client";
import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    text: "Automating lead acquisition across IT infrastructure services. Deployed a unified data pipeline that scales with technical complexity and high-intent market demands.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=150&h=150",
    name: "IT Infrastructure",
    role: "Operational Proof // V1.2",
  },
  {
    text: "Orchestrating GovTech distribution channels. Ensuring absolute security and regulatory compliance while maintaining high-speed communication and brand authority.",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=150&h=150",
    name: "GovTech Systems",
    role: "Operational Proof // V3.1",
  },
  {
    text: "Strategic brand scaling for Real Estate conglomerates. Coordination of multiple regional sub-brands under a single, robust marketing architecture.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Real Estate Portfolio",
    role: "Operational Proof // V2.0",
  },
  {
    text: "Personal Branding systems for global executives. Building authority through automated insight distribution and precise digital positioning.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Personal Branding",
    role: "Operational Proof // V4.5",
  },
  {
    text: "Deploying high-frequency content engines for technical consulting. Reducing time-to-market for complex services through automated narrative scaling.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Consulting Clusters",
    role: "Operational Proof // V1.0",
  },
  {
    text: "Multi-brand synchronization for distributed service networks. Zero-friction coordination across diverse industry vertical identities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Service Ecosystems",
    role: "Operational Proof // V2.8",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  whileHover={{ 
                    scale: 1.03,
                    y: -8,
                    boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.1), 0 10px 10px -5px hsl(var(--primary) / 0.04), 0 0 0 1px hsl(var(--primary) / 0.1)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-8 rounded-3xl border border-border bg-card/80 backdrop-blur-md shadow-lg max-w-xs w-full transition-all duration-300 cursor-default select-none group hover:border-primary/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-muted-foreground leading-relaxed font-normal m-0 text-sm md:text-base">
                      {text}
                    </p>
                    <footer className="flex items-center gap-3 mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300"
                      />
                      <div className="flex flex-col">
                        <cite className="font-bold not-italic tracking-tight text-foreground">
                          {name}
                        </cite>
                        <span className="text-[10px] font-mono font-bold tracking-tight text-primary/60 mt-0.5">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export default function TestimonialV2() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="bg-transparent py-24 relative overflow-hidden"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-primary/20 py-1 px-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 transition-colors">
              Operational Proof
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mt-8 text-center text-foreground leading-[1.1]">
            MULTI-BRAND EXECUTION ACROSS <span className="text-primary">IT</span>, <span className="text-primary">GOVTECH</span>, <span className="text-primary">REAL ESTATE</span>, AND <span className="text-primary">PERSONAL BRANDING</span> ECOSYSTEMS.
          </h2>
          <p className="text-center mt-6 text-muted-foreground text-sm font-mono uppercase tracking-[0.1em] max-w-2xl">
            Internal Validation: Proof of performance in diverse high-stakes environments.
          </p>
        </div>

        {/* <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div> */}
      </motion.div>
    </section>
  );
}
