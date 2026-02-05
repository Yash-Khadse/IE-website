"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Elements
    const loadingLetters = container.querySelectorAll(".loading-letter");
    const box = container.querySelectorAll(".loader-box");
    const growingImage = container.querySelectorAll(".growing-image");
    const headingStart = container.querySelectorAll(".heading-start");
    const headingEnd = container.querySelectorAll(".heading-end");
    const coverImageExtra = container.querySelectorAll(".cover-image-extra");
    
    // Lock scroll
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut", // Softened from expo for smoother flow
        },
        onComplete: () => {
          setIsLoading(false);
          document.body.style.overflow = ""; // Unlock scroll
        }
      });

      // 1. Letters slide up
      if (loadingLetters.length) {
        tl.from(loadingLetters, {
          yPercent: 100,
          stagger: 0.07, // Slightly looser stagger
          duration: 1.6
        });
      }

      // 2. Box expands horizontally
      if (box.length) {
        tl.fromTo(box, {
          width: "0em",
        }, {
          width: "1.25em",
          duration: 1.6
        }, "< 1.2"); // Smooth overlap
      }

      // 3. Image inside box reveal
      if (growingImage.length) {
        tl.fromTo(growingImage, {
          width: "0%",
        }, {
          width: "100%",
          duration: 1.6
        }, "<");
      }

      // 4. Parallax Text Shift
      // We start this earlier to make it feel connected
      if (headingStart.length) {
        tl.fromTo(headingStart, {
          x: "0em",
        }, {
          x: "-0.2em", // Slight increase for noticeable but smooth drift
          duration: 1.6
        }, "<");
      }
      
      if (headingEnd.length) {
        tl.fromTo(headingEnd, {
          x: "0em",
        }, {
          x: "0.2em",
          duration: 1.6
        }, "<");
      }

      // 5. Full Screen Expansion
      // Using power4 for a very silky slow-start/slow-end feel
      if (growingImage.length) {
        tl.to(growingImage, {
          width: "100vw",
          height: "100vh",
          duration: 2.2,
          ease: "power4.inOut" 
        }, "+=0.1"); 
      }

      // Coordinate the box wrapper to match
      if (box.length) {
        tl.to(box, {
          width: "100vw",
          height: "100vh",
          duration: 2.2,
          ease: "power4.inOut"
        }, "<");
      }

      // 6. Image Dissolve Cycle
      // Smoother crossfades instead of rapid cuts
      if (coverImageExtra.length) {
         tl.to(coverImageExtra, {
           opacity: 0,
           duration: 0.8, // Slower fade
           stagger: 0.2,  // Gentle ripple
           ease: "power2.inOut"
         }, "< 0.2"); // Start shortly after expansion begins
      }

      // 7. Exit / Lift
      tl.to(container, {
        yPercent: -100,
        duration: 1.2,
        ease: "power3.inOut" 
      }, "-=0.5"); // Overlap with the end of image expansion
    }, container);

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <section 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-fooror-navy text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Loader Container */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white pointer-events-none">
        <div className="flex relative items-center justify-center font-bold leading-[0.75] whitespace-nowrap overflow-hidden" style={{ fontSize: 'clamp(3rem, 12vw, 12.5em)' }}>
          
          {/* Start: Invisi */}
          <div className="heading-start flex justify-end overflow-hidden">
            {"Invisi".split("").map((char, i) => (
              <span key={i} className="loading-letter block relative">{char}</span>
            ))}
          </div>

          {/* Growing Box */}
          <div className="loader-box flex flex-col justify-center items-center w-0 relative h-[0.8em] mx-1 md:mx-4">
             <div className="w-full h-full relative flex justify-center items-center">
                <div className="growing-image w-0 h-full absolute flex justify-center items-center overflow-hidden">
                   <div className="relative w-full h-full min-w-[1em]">
                      {/* Images Stack - Index 0 is bottom, Index 3 is top (visible first) */}
                      {/* We want to cycle through them, so top one fades out, revealing next */}
                      
                      {/* Image 4 (Base) - Final or First? */}
                      {/* In reference: code puts absolute on all. last one is visible? */}
                      {/* Let's put 4 images. */}
                      
                      <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" 
                        className="absolute top-0 left-0 w-full h-full object-cover" 
                        alt="Office" 
                      />
                      
                      <img 
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" 
                        className="cover-image-extra absolute top-0 left-0 w-full h-full object-cover z-10" 
                        alt="Tech" 
                      />
                      
                      <img 
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80" 
                        className="cover-image-extra absolute top-0 left-0 w-full h-full object-cover z-20" 
                        alt="Data" 
                      />
                      
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                        className="cover-image-extra absolute top-0 left-0 w-full h-full object-cover z-30" 
                        alt="Work" 
                      />
                   </div>
                </div>
             </div>
          </div>

          {/* End: Edge */}
          <div className="heading-end flex justify-start overflow-hidden">
             {"Edge".split("").map((char, i) => (
              <span key={i} className="loading-letter block relative">{char}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
