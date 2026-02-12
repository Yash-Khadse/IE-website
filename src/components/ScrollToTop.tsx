"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Standard window scroll reset
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });

    // Handle smooth scrolling containers if they exist
    const main = document.querySelector('main');
    if (main) {
      main.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}
