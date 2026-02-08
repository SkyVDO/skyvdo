"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/constants";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[var(--z-sticky)] transition-all duration-[var(--duration-base)] ${
        scrolled
          ? "bg-midnight border-b border-[var(--border-subtle)]"
          : "bg-midnight/85 backdrop-blur-[12px]"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[var(--grid-max-width)] items-center justify-between px-6 md:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-display text-[1.75rem] leading-[0.9] tracking-[0.02em] text-starlight uppercase">
            SUNDOWN
          </span>
          <span className="text-label text-amber-glow">ENTERTAINMENT</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-label text-moonstone transition-colors duration-[var(--duration-fast)] hover:text-starlight"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`#${SECTION_IDS.enquiry}`}
            className="text-label text-amber-glow transition-colors duration-[var(--duration-fast)] hover:text-sunset-orange"
          >
            Enquire
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[var(--z-overlay)] flex h-11 w-11 items-center justify-center text-moonstone transition-colors hover:text-amber-glow md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[var(--z-overlay)] flex flex-col items-center justify-center gap-12 bg-midnight md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-display-md text-starlight transition-colors hover:text-amber-glow"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`#${SECTION_IDS.enquiry}`}
            onClick={() => setMenuOpen(false)}
            className="text-display-md text-amber-glow transition-colors hover:text-sunset-orange"
          >
            Enquire
          </a>
        </div>
      )}
    </header>
  );
}
