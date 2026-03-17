"use client";
import { useEffect, useRef, type ReactNode } from "react";

interface Props { children: ReactNode; speed?: number; className?: string; }

export default function ParallaxBackground({ children, speed = 0.3, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
          inner.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={innerRef} className="absolute inset-[-20%] will-change-transform">
        {children}
      </div>
    </div>
  );
}
