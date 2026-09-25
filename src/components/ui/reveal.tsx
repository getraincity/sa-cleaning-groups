"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the element slides in from. */
  from?: "bottom" | "right";
  /** Delay in milliseconds, for staggering items in a list. */
  delay?: number;
};

/**
 * Fades and slides an element in the first time it scrolls into view.
 * Mirrors the Webflow "Slide In" presets the site used: 100px offset,
 * 1s duration, outQuart easing.
 */
export function Reveal({ children, className, from = "bottom", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,translate] duration-1000 ease-out-quart",
        "motion-reduce:translate-none motion-reduce:opacity-100 motion-reduce:transition-none",
        visible
          ? "translate-none opacity-100"
          : from === "bottom"
            ? "translate-y-[100px] opacity-0"
            : "translate-x-[100px] opacity-0",
        className,
      )}
    >
      {children}
    </div>
  );
}
