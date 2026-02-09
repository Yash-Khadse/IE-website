"use client";
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'Nebula Capital',
    metric: '500% Logic Lift',
    category: 'BRAND // ORCHESTRATION',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Rebuilding the core distribution ledger for real-time global asset scaling.'
  },
  {
    id: 2,
    client: 'Orbital Network',
    metric: 'Zero Sync Friction',
    category: 'SYSTEMS // SCALE',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Consolidating 14 regional brand identities into a unified distribution hub.'
  },
  {
    id: 3,
    client: 'Vortex Automation',
    metric: '$40M Yield ROI',
    category: 'AI // LOGIC',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    description: 'Autonomous customer lifecycle protocols reducing acquisition costs by 40%.'
  },
  {
    id: 4,
    client: 'CyberCore Logic',
    metric: '0.01s Execution',
    category: 'INFRA // PROTOCOL',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
    description: 'Global brand safety deployment for automated content distribution.'
  },
  {
    id: 5,
    client: 'Nexus Intelligence',
    metric: '+210% Throughput',
    category: 'DATA // ANALYTICS',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    description: 'Predictive distribution models for multi-channel revenue orchestration.'
  },
];

const TrustSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Robust Script Loader
    const loadScript = (src: string) => {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve(true); 
                return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = () => resolve(true);
            script.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.body.appendChild(script);
        });
    };

    let ctx: any;

    const init = async () => {
        try {
            // Load in sequence to ensure dependencies
            await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js');
            await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/Draggable.min.js');
            await loadScript('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/InertiaPlugin.min.js');

            // wait for window.gsap to be fully available
            const checkGSAP = setInterval(() => {
                const w = window as any;
                if (w.gsap && w.Draggable && w.InertiaPlugin) {
                    clearInterval(checkGSAP);
                    w.gsap.registerPlugin(w.Draggable, w.InertiaPlugin);
                    setIsReady(true);
                    
                    // Initialize Logic safely within context
                    ctx = w.gsap.context(() => {
                        initSliderLogic(w.gsap, w.Draggable);
                    }, sliderRef);
                }
            }, 100);

            // Timeout safety
            setTimeout(() => clearInterval(checkGSAP), 10000);

        } catch (error) {
            console.error("GSAP Load Error:", error);
        }
    };

    init();

    return () => {
        if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative bg-background min-h-[100svh] md:min-h-[110vh] overflow-hidden selection:bg-primary selection:text-white border-t border-border">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
      </div>

      <style jsx global>{`
        .ts-slider__section {
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          display: flex;
          position: relative;  
          background-color: transparent;
        }

        .ts-slider__main {
          z-index: 0;
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0%;
          overflow: hidden;
        }

        .ts-slider__wrap {
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 100%;
          display: flex;
        }

        .ts-slider__list {
          flex-flow: row;
          justify-content: flex-start;
          align-items: stretch;
          display: flex;
          position: relative;
        }

        .ts-slider__slide {
          aspect-ratio: 16 / 10;
          flex: none;
          width: 45vw;
          padding-left: 1.5em;
          padding-right: 1.5em;
          transition: opacity .4s;
          position: relative;
          cursor: grab;
          user-select: none;
        }
        
        .ts-slider__slide:active {
            cursor: grabbing;
        }

        .ts-slider__slide-inner {
          border-radius: 1.5em;
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
        }

        .ts-slide__img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          opacity: 0.6;
          pointer-events: none;
        }
        
        .ts-slider__slide.active .ts-slide__img {
            transform: scale(1.1);
            opacity: 0.8;
            filter: contrast(1.1);
        }

        .ts-slide__metric {
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: hsl(var(--secondary) / 0.8);
            border: 1px solid hsl(var(--primary) / 0.3);
            padding: 0.75rem 1.5rem;
            border-radius: 99px;
            backdrop-filter: blur(12px);
            z-index: 10;
            transform: translateY(-20px);
            opacity: 0;
            transition: all 0.5s ease-out 0.2s;
        }
        
        .ts-slider__slide.active .ts-slide__metric {
            transform: translateY(0);
            opacity: 1;
        }

        .ts-slider__overlay {
          z-index: 2;
          color: hsl(var(--foreground));
          background: linear-gradient(90deg, hsl(var(--background)) 25%, transparent 100%);
          justify-content: flex-start;
          align-items: center;
          width: 35vw;
          height: 100%;
          padding-left: 5vw;
          display: flex;
          position: absolute;
          inset: 0% auto 0% 0%;
          pointer-events: none;
        }

        .ts-slider__overlay-inner {
            flex-flow: column;
            justify-content: space-between;
            align-items: flex-start;
            height: 60vh;
            display: flex;
            pointer-events: auto;
        }

        .ts-slider__overlay-count {
          grid-column-gap: .5em;
          grid-row-gap: .5em;
          flex-flow: row;
          justify-content: flex-start;
          align-items: center;
          font-size: 5em;
          font-weight: 700;
          display: flex;
          font-family: inherit;
          color: hsl(var(--foreground));
          text-shadow: 0 0 30px rgba(82, 16, 248, 0.5);
        }

        .ts-slider__count-col {
          height: 1em;
          overflow: hidden;
        }

        .ts-slider__count-heading {
          width: 2ch;
          margin-top: 0;
          margin-bottom: 0;
          font-size: 1em;
          font-weight: 400;
          line-height: 1;
        }

        .ts-slider__count-divider {
          background-color: #5210F8;
          width: 4px;
          height: .6em;
          transform: rotate(20deg);
          box-shadow: 0 0 10px #5210F8;
        }

        .ts-slider__overlay-nav {
          grid-column-gap: 1.5em;
          grid-row-gap: 1.5em;
          display: flex;
        }

        .ts-slider__btn {
          color: hsl(var(--primary));
          background-color: hsl(var(--card) / 0.5);
          border: 1px solid hsl(var(--border));
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          width: 4em;
          height: 4em;
          padding: 0;
          display: flex;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .ts-slider__btn:hover {
            border-color: hsl(var(--primary));
            background: hsl(var(--primary) / 0.1);
            transform: scale(1.1);
        }

        /* Active Slide Styles */
        [data-ts-slider="slide"]{ opacity: 0.3; filter: grayscale(100%) brightness(0.7); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); transform: scale(0.95); }
        [data-ts-slider="slide"].active { opacity: 1; filter: grayscale(0%) brightness(1); transform: scale(1); z-index: 10; } 
        
        .ts-case-detail {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease 0.3s;
        }
        [data-ts-slider="slide"].active .ts-case-detail {
            opacity: 1;
            transform: translateY(0);
        }

        @media screen and (max-width: 991px) {
          .ts-slider__main { position: relative; }
          .ts-slider__slide { width: 85vw; aspect-ratio: 4/5; }
          .ts-slider__overlay { width: 100%; position: relative; inset: auto; padding-bottom: 2em; background: transparent; padding-left: 2em; padding-top: 4rem; }
          .ts-slider__overlay-inner { grid-column-gap: 2em; grid-row-gap: 2em; height: auto; flex-direction: row; align-items: center; width: 100%; padding-right: 2em;}
          .ts-slider__section { flex-direction: column; }
          .ts-slider__wrap { padding-top: 0; }
          .ts-slider__overlay-count { font-size: 3em; }
        }

        @media screen and (max-width: 479px) {
          .ts-slider__overlay { padding-left: 1.5em; }
          .ts-slider__slide { width: 90vw; padding-left: .5em; padding-right: .5em; }
        }
      `}</style>

      <div className={`transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <div className="ts-slider__section" ref={sliderRef}>
            
            <div className="ts-slider__overlay">
            <div className="ts-slider__overlay-inner">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-fooror-purple-light font-mono text-xs tracking-widest">
                    <BarChart size={14} /> IMPACT_LOGS // SUCCESS_STORIES
                    </div>
                    <div className="ts-slider__overlay-count">
                    <div className="ts-slider__count-col">
                        <h2 data-ts-slide-count="step" className="ts-slider__count-heading">01</h2>
                    </div>
                    <div className="ts-slider__count-divider"></div>
                    <div className="ts-slider__count-col">
                        <h2 data-ts-slide-count="total" className="ts-slider__count-heading">05</h2>
                    </div>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-white/60 text-sm max-w-[280px] leading-relaxed border-l border-white/10 pl-4">
                            Proven outcomes from our deployed systems. We don't just build software; we engineer dominance.
                        </p>
                    </div>
                </div>

                <div className="ts-slider__overlay-nav">
                <button aria-label="previous slide" data-ts-slider-button="prev" className="ts-slider__btn group">
                    <ArrowRight className="rotate-180 group-hover:text-fooror-purple-light transition-colors" />
                </button>
                <button aria-label="next slide" data-ts-slider-button="next" className="ts-slider__btn group">
                    <ArrowRight className="group-hover:text-fooror-purple-light transition-colors" />
                </button>
                </div>
            </div>
            </div>

            <div className="ts-slider__main">
            <div className="ts-slider__wrap">
                <div data-ts-slider="list" className="ts-slider__list">
                {caseStudies.map((study, index) => (
                    <div key={study.id} data-ts-slider="slide" className={`ts-slider__slide ${index === 0 ? 'active' : ''}`}>
                    <div className="ts-slider__slide-inner group cursor-pointer">
                        <img src={study.image} className="ts-slide__img" alt={study.client} />
                        <div className="absolute inset-0 bg-gradient-to-t from-fooror-navy via-fooror-navy/20 to-transparent opacity-90" />
                        
                        {/* Floating Metric Badge */}
                        <div className="ts-slide__metric">
                            <span className="text-xl font-bold font-mono text-foreground flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                {study.metric}
                            </span>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 bg-gradient-to-t from-background via-background/90 to-transparent">
                            <div className="flex flex-col gap-3">
                                <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full border border-border bg-secondary/50 backdrop-blur-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{study.category}</span>
                                </div>
                                
                                <h3 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">{study.client}</h3>
                                <p className="text-muted-foreground max-w-[80%] leading-relaxed">{study.description}</p>
                                
                                <div className="mt-6 flex items-center gap-3 text-primary font-bold text-sm uppercase tracking-wide group/btn">
                                    <span>View Protocol</span>
                                    <div className="p-1.5 rounded-full border border-primary/30 group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-background transition-all duration-300">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};


// ----------------------------------------------------------------------------------
// Robust Logic Implementation
// ----------------------------------------------------------------------------------

function initSliderLogic(gsap: any, Draggable: any) {
  const wrapper = document.querySelector('[data-ts-slider="list"]');
  if (!wrapper) return;

  const slides = gsap.utils.toArray('[data-ts-slider="slide"]');
  const nextButton = document.querySelector('[data-ts-slider-button="next"]');
  const prevButton = document.querySelector('[data-ts-slider-button="prev"]');

  const totalElement = document.querySelector('[data-ts-slide-count="total"]');
  const stepElement = document.querySelector('[data-ts-slide-count="step"]');
  const stepsParent = stepElement?.parentElement;

  let activeElement: any;
  const totalSlides = slides.length;

  if (totalElement) totalElement.textContent = totalSlides < 10 ? `0${totalSlides}` : totalSlides;

  // Steps (clone)
  if (stepsParent && stepElement) {
    stepsParent.innerHTML = '';
    slides.forEach((_: any, index: any) => {
      const stepClone: any = stepElement.cloneNode(true);
      stepClone.textContent = index + 1 < 10 ? `0${index + 1}` : (index + 1);
      stepsParent.appendChild(stepClone);
    });
  }
  const allSteps = stepsParent ? stepsParent.querySelectorAll('[data-ts-slide-count="step"]') : [];

  const mq = window.matchMedia('(min-width: 992px)');
  let useNextForActive = mq.matches;
  mq.addEventListener('change', (e) => {
    useNextForActive = e.matches;
    if (currentEl) applyActive(currentEl, currentIndex, false);
  });

  let currentEl: any = slides[0];
  let currentIndex = 0;

  function resolveActive(el: any) {
    return useNextForActive ? (el.nextElementSibling || slides[0]) : el;
  }

  function applyActive(el: any, index: any, animateNumbers = true) {
    if (activeElement) activeElement.classList.remove('active');
    const target = resolveActive(el);
    if(target) {
        target.classList.add('active');
        activeElement = target;
    }

    if (allSteps.length) {
      if (animateNumbers) {
        gsap.to(allSteps, { y: `${-100 * index}%`, ease: "power3.out", duration: 0.45 });
      } else {
        gsap.set(allSteps, { y: `${-100 * index}%` });
      }
    }
  }

  // Initial set
  applyActive(slides[0], 0, false);

  const loop = horizontalLoop(slides, {
    paused: true,
    draggable: true,
    center: false,
    onChange: (element: any, index: any) => {
      currentEl = element;
      currentIndex = index;
      applyActive(element, index, true);
    }
  }, gsap, Draggable);

  function mapClickIndex(i: number) { return useNextForActive ? (i - 1) : i; }
  
  slides.forEach((slide: any, i: number) => {
    slide.addEventListener("click", () => {
      if (slide.classList.contains("active")) return;
      loop.toIndex(mapClickIndex(i), { ease: "power3.inOut", duration: 0.725 });
    });
  });

  nextButton?.addEventListener("click", () => loop.next({ ease:"power3.inOut", duration: 0.725 }));
  prevButton?.addEventListener("click", () => loop.previous({ ease:"power3.inOut", duration: 0.725 }));
}

// ----------------------------------------------------------------------------------
// Horizontal Loop Helper (Modified for Safety)
// ----------------------------------------------------------------------------------

function horizontalLoop(items: any[], config: any, gsap: any, Draggable: any) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let timeline: any;
  
  let onChange = config.onChange,
      lastIndex = 0,
      tl = gsap.timeline({
          repeat: config.repeat, 
          onUpdate: onChange && function() {
            let i = tl.closestIndex();
            // @ts-ignore
            if (lastIndex !== i) {
                lastIndex = i;
                onChange(items[i], i);
            }
          }, 
          paused: config.paused, 
          defaults: {ease: "none"}, 
          onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
        }),
      length = items.length,
      startX = items[0].offsetLeft,
      times: any[] = [],
      widths: any[] = [],
      spaceBefore: any[] = [],
      xPercents: any[] = [],
      curIndex = 0,
      center = config.center,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1), 
      timeOffset = 0,
      container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
      totalWidth: any;
      
   // Helper to refresh widths/positions
   function populateWidths() {
        let b1 = container.getBoundingClientRect(), b2;
        items.forEach((el: any, i: any) => {
          widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
          xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
          b2 = el.getBoundingClientRect();
          spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
          b1 = b2;
        });
        gsap.set(items, { xPercent: (i: number) => xPercents[i] });
        totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + spaceBefore[0] + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
   }

   function populateTimeline() {
        let i, item, curX, distanceToStart, distanceToLoop;
        tl.clear();
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = xPercents[i] / 100 * widths[i];
          distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
            .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
   }
   
   populateWidths();
   populateTimeline();

   // .. Draggable Logic
    if (config.draggable && Draggable) {
      let proxy = document.createElement("div"),
          wrap = gsap.utils.wrap(0, 1),
          ratio: any, startProgress: any, draggable: any, lastSnap: any, initChangeX: any, wasPlaying: any,
          align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
          syncIndex = () => tl.closestIndex(true);
      
      draggable = Draggable.create(proxy, {
        trigger: items[0].parentNode,
        type: "x",
        onPressInit() {
          let x = this.x;
          gsap.killTweensOf(tl);
          wasPlaying = !tl.paused();
          tl.pause();
          startProgress = tl.progress();
          ratio = 1 / totalWidth;
          initChangeX = (startProgress / -ratio) - x;
          gsap.set(proxy, {x: startProgress / -ratio});
        },
        onDrag: align,
        onThrowUpdate: align,
        overshootTolerance: 0,
        inertia: true,
        snap(value: any) {
          if (Math.abs(startProgress / -ratio - this.x) < 10) return lastSnap + initChangeX;
          let time = -(value * ratio) * tl.duration(),
            wrappedTime = gsap.utils.wrap(0, tl.duration(), time),
            snapTime = times[getClosest(times, wrappedTime, tl.duration())],
            dif = snapTime - wrappedTime;
          Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
          lastSnap = (time + dif) / tl.duration() / -ratio;
          return lastSnap;
        },
        onRelease: syncIndex,
        onThrowComplete: () => { syncIndex(); wasPlaying && tl.play(); }
      })[0];
      tl.draggable = draggable;
    }

    // Helper methods
    function getClosest(values: any, value: any, wrap: any) {
        let i = values.length, closest = 1e10, index = 0, d;
        while (i--) {
          d = Math.abs(values[i] - value);
          if (d > wrap / 2) d = wrap - d;
          if (d < closest) { closest = d; index = i; }
        }
        return index;
    }

    tl.toIndex = (index: any, vars: any) => {
        vars = vars || {};
        (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); 
        let newIndex = gsap.utils.wrap(0, length, index), time = times[newIndex];
        if (time > tl.time() !== index > curIndex && index !== curIndex) time += tl.duration() * (index > curIndex ? 1 : -1);
        if (time < 0 || time > tl.duration()) vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    };
    tl.closestIndex = (setCurrent: boolean) => {
        let index = getClosest(times, tl.time(), tl.duration());
        if(setCurrent) curIndex = index;
        return index;
    };
    tl.next = (vars: any) => tl.toIndex(curIndex+1, vars);
    tl.previous = (vars: any) => tl.toIndex(curIndex-1, vars);

    return tl;
}

export default TrustSection;
