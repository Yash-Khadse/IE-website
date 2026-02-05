"use client";

import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CometCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`py-10 flex items-center justify-center ${className}`}
        style={{
          perspective: "1000px",
        }}
      >
        <CardBody>{children}</CardBody>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useContext(MouseEnterContext)!;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${
      -1 * y
    }deg)`;
    
    // Set mouse position for glow effect
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    containerRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    containerRef.current.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-200 ease-linear ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Comet/Glow Effect */}
      <div
        className="absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(124, 58, 237, 0.15), transparent 40%)`,
          opacity: isMouseEntered ? 1 : 0,
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
};
