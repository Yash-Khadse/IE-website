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
    text: "The logic audit redefined our entire distribution topology. The brand system InvisiEdge deployed allows us to coordinate 12 regional identities with zero friction.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Chief Distribution Officer",
  },
  {
    text: "Transitioning to their autonomous revenue engine was the pivot our portfolio needed. We've automated the entire acquisition loop across four separate brands.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "VP of Digital Systems",
  },
  {
    text: "The architecture is remarkably robust. We are no longer managing websites; we are orchestrating a unified intelligence network that scales with our ARR targets.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Infrastructure Lead",
  },
  {
    text: "Multi-brand management used to be our biggest bottleneck. With the Prism_OS core, our time-to-market for new sub-brands has been reduced by 70%.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "Executive Director",
  },
  {
    text: "The systemic approach to brand safety and messaging consistency is unparalleled. The automation logic handles the heavy lifting, letting us focus on high-level strategy.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Brand Architect",
  },
  {
    text: "Deploying the AetherSystem logic transformed our conversion funnel into a self-healing protocol. The ROI on our infrastructure spend is now quantifiable and recurring.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Growth Systems Analyst",
  },
  {
    text: "Finally, an agency that treats marketing as an engineering challenge. Their 'distribution topology' approach is light years ahead of traditional agency models.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Director of Digital Logic",
  },
  {
    text: "The visibility we now have into our cross-channel performance is absolute. The unified data ecosystem simplifies complex decision-making across our entire board.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Strategic Ops Manager",
  },
  {
    text: "What sets InvisiEdge apart is their focus on infrastructure over aesthetics. They built a machine that happens to look beautiful, not just a pretty facade.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Portfolio Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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
                        <span className="text-xs font-medium tracking-tight text-muted-foreground/80 mt-0.5">
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
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-primary/20 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 transition-colors">
              Testimonials
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-foreground">
            WHAT OUR <span className="text-primary italic">CLIENTS</span> SAY
          </h2>
          <p className="text-center mt-5 text-muted-foreground text-lg leading-relaxed max-w-sm">
            Discover how thousands of teams streamline their operations with our platform.
          </p>
        </div>

        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
}
