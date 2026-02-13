"use client";
import React from 'react';
import { motion } from "framer-motion";

import { testimonialsContent } from "@/data/common/testimonials";

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Data ---
const testimonials = testimonialsContent.testimonials;

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
        className="flex flex-col gap-4 md:gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
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
                  className="p-4 md:p-8 rounded-2xl md:rounded-3xl border border-border bg-card/80 backdrop-blur-md shadow-lg w-full md:max-w-xs transition-all duration-300 cursor-default select-none group hover:border-primary/30" 
                >
                  <blockquote className="m-0 p-0">
                    <p className="text-muted-foreground leading-relaxed font-normal m-0 text-xs md:text-base">
                      {text}
                    </p>
                    <footer className="flex items-center gap-2 md:gap-3 mt-4 md:mt-6">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-primary/50 transition-all duration-300"
                      />
                      <div className="flex flex-col">
                        <cite className="font-bold not-italic tracking-tight text-foreground text-xs md:text-base">
                          {name}
                        </cite>
                        <span className="text-[9px] md:text-[10px] font-mono font-bold tracking-tight text-primary/60 mt-0.5">
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
      className="bg-transparent py-8 relative overflow-hidden"
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
        className="container px-2 md:px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-6">
          <div className="flex justify-center">
            <div className="border border-primary/20 py-1 px-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-primary bg-primary/10 transition-colors">
              {testimonialsContent.header.badge}
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mt-8 text-center text-foreground leading-[0.95] flex flex-col items-center">
            <span className="opacity-40">{testimonialsContent.header.title.line1}</span>
            <span className="text-primary md:whitespace-nowrap">{testimonialsContent.header.title.line2}</span>
            <span className="md:whitespace-nowrap">{testimonialsContent.header.title.line3}</span>
          </h2>
          <p className="text-center mt-6 md:mt-10 text-muted-foreground text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] max-w-4xl lg:whitespace-nowrap opacity-70">
            {testimonialsContent.header.description}
          </p>
        </div>

        <div 
          className="flex justify-center gap-3 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[500px] md:max-h-[740px] overflow-hidden"
        >
          {/* <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} /> */}
        </div>
      </motion.div>
    </section>
  );
}
