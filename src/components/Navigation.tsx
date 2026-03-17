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
          ? "bg-[#0A0E1A] border-b border-[rgba(255,255,255,0.08)]"
          : menuOpen
            ? "bg-[rgba(10,14,26,0.95)]"
            : "bg-[rgba(10,14,26,0.85)] backdrop-blur-[12px]"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[var(--grid-max-width)] items-center justify-between px-6 md:grid md:grid-cols-[1fr_auto_1fr]">
        {/* Column 1 — Logo */}
        <div className="flex justify-start">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-display text-[1.75rem] leading-[0.9] tracking-[0.02em] text-[#FDF8F0] uppercase">
              SUNDOWN
            </span>
            <span className="text-label text-amber-glow">ENTERTAINMENT</span>
          </a>
        </div>

        {/* Column 2 — Desktop nav links (truly centered) */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-label text-[rgba(253,248,240,0.65)] transition-colors duration-[var(--duration-fast)] hover:text-[#FDF8F0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Column 3 — Enquire CTA + mobile hamburger */}
        <div className="flex items-center justify-end gap-4">
          {/* Desktop Enquire CTA */}
          <a
            href={`#${SECTION_IDS.enquiry}`}
            className="hidden text-label text-amber-glow transition-colors duration-[var(--duration-fast)] hover:text-sunset-orange md:inline-flex"
          >
            Enquire
          </a>

          {/* Mobile hamburger — z-[var(--z-modal)] keeps it above the overlay */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[var(--z-modal)] flex h-11 w-11 items-center justify-center text-[#FDF8F0] transition-colors hover:text-amber-glow md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[var(--z-overlay)] flex flex-col items-center justify-center gap-12 bg-[#0A0E1A] md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-display-md text-[#FDF8F0] transition-colors hover:text-amber-glow"
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
