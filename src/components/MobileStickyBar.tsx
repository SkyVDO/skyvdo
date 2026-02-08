"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SECTION_IDS, CONTACT } from "@/lib/constants";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(SECTION_IDS.hero);
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show bar when hero is NOT visible (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[var(--z-sticky)] flex gap-2 bg-midnight/95 px-4 pt-2 backdrop-blur-[12px] transition-transform duration-[var(--duration-base)] md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
    >
      <a
        href={`#${SECTION_IDS.enquiry}`}
        className="group flex h-11 flex-1 items-center justify-center gap-2 bg-amber-glow text-label text-midnight transition-all duration-[var(--duration-fast)] hover:bg-sunset-orange active:scale-[0.98]"
      >
        Enquire
        <ArrowRight
          size={14}
          className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
        />
      </a>
      <a
        href={CONTACT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 flex-1 items-center justify-center gap-2 border-2 border-success bg-success/10 text-label text-success transition-all duration-[var(--duration-fast)] hover:bg-success/20 active:scale-[0.98]"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
    </div>
  );
}
