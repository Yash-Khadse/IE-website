"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineContentProps {
  as?: any;
  children: React.ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement>;
  customVariants?: any;
  className?: string;
}

export function TimelineContent({
  as: Component = "div",
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
}: TimelineContentProps) {
  const controls = useAnimation();
  const isInView = useInView(timelineRef, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <Component className={className}>
      <motion.div
        variants={customVariants}
        initial="hidden"
        animate={controls}
        custom={animationNum}
      >
        {children}
      </motion.div>
    </Component>
  );
}
