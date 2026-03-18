import { ArrowRight } from "lucide-react";
import { HERO, SECTION_IDS } from "@/lib/constants";
import IplShowcaseCarousel from "./IplShowcaseCarousel";

export default function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0a0a0a] animate-hero-reveal" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-screen-glow)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
        }}
      />

      {/* Full-bleed carousel */}
      <div className="relative z-10 w-full animate-fade-up stagger-1">
        <IplShowcaseCarousel />
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto w-full max-w-[var(--grid-max-width)] px-4 py-10 md:px-6 md:py-12 lg:py-16">
        <div className="max-w-2xl">
          {/* Overline */}
          <p className="text-label text-amber-glow animate-fade-up stagger-2 mb-4">
            {HERO.overline}
          </p>

          {/* Headline */}
          <h1 className="text-display-xl text-starlight animate-fade-up stagger-3 mb-6 whitespace-pre-line">
            {HERO.headline}
          </h1>

          {/* Subtext */}
          <p className="text-body-lg text-moonstone animate-fade-up stagger-4 mb-10 max-w-[560px]">
            {HERO.subtext}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up stagger-5 flex flex-wrap gap-4">
            {/* Primary CTA */}
            <a
              href={`#${SECTION_IDS.enquiry}`}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-label text-[#0a0a0a] transition-all duration-[var(--duration-fast)] hover:bg-white/90 active:scale-[0.98]"
            >
              {HERO.primaryCta}
              <ArrowRight
                size={16}
                className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
              />
            </a>

            {/* Secondary CTAs */}
            <a
              href={`#${SECTION_IDS.packages}`}
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-label text-white transition-all duration-[var(--duration-fast)] hover:bg-white/10 active:scale-[0.98]"
            >
              {HERO.secondaryCta1}
              <ArrowRight
                size={16}
                className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
              />
            </a>

            <a
              href={`#${SECTION_IDS.howItWorks}`}
              className="group inline-flex h-12 items-center gap-2 rounded-full border border-white/30 px-6 text-label text-white transition-all duration-[var(--duration-fast)] hover:bg-white/10 active:scale-[0.98]"
            >
              {HERO.secondaryCta2}
              <ArrowRight
                size={16}
                className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
