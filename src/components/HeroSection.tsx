import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO, HERO_BG_IMAGE, SECTION_IDS } from "@/lib/constants";
import IplShowcaseCarousel from "./IplShowcaseCarousel";
import ParallaxBackground from "./ParallaxBackground";

export default function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Background layers */}
      {/* 1. Full-bleed photo with parallax */}
      <ParallaxBackground className="absolute inset-0 animate-hero-image-reveal">
        <Image
          src={HERO_BG_IMAGE.src}
          alt={HERO_BG_IMAGE.alt}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </ParallaxBackground>

      {/* 2. Dark cinematic overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,14,26,0.90) 0%, rgba(10,14,26,0.50) 50%, rgba(10,14,26,0.30) 100%)",
        }}
      />

      {/* 3. Subtle amber radial glow for brand warmth */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-screen-glow)" }}
      />

      {/* Nav spacer */}
      <div className="h-[72px] shrink-0" />

      {/* Full-bleed IPL Carousel */}
      <div className="relative z-10 w-full animate-fade-up stagger-1">
        <IplShowcaseCarousel />
      </div>

      {/* Hero headline content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[var(--grid-max-width)] flex-1 items-center px-4 py-10 md:px-6 md:py-14">
        <div className="max-w-2xl">
          {/* Overline */}
          <p className="text-label text-amber-glow animate-fade-up stagger-2 mb-4">
            {HERO.overline}
          </p>

          {/* Headline */}
          <h1 className="text-display-xl animate-fade-up stagger-3 mb-6 whitespace-pre-line text-[#FDF8F0]">
            {HERO.headline}
          </h1>

          {/* Subtext */}
          <p className="text-body-lg animate-fade-up stagger-4 mb-10 max-w-[560px] text-[rgba(253,248,240,0.75)]">
            {HERO.subtext}
          </p>

          {/* CTAs */}
          <div className="animate-fade-up stagger-5 flex flex-wrap gap-4">
            {/* Primary CTA */}
            <a
              href={`#${SECTION_IDS.enquiry}`}
              className="group inline-flex h-12 items-center gap-2 bg-amber-glow px-6 text-label text-midnight transition-all duration-[var(--duration-fast)] hover:bg-sunset-orange active:scale-[0.98]"
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
              className="group inline-flex h-12 items-center gap-2 border-2 border-[rgba(253,248,240,0.6)] px-6 text-label text-[#FDF8F0] transition-all duration-[var(--duration-fast)] hover:border-amber-glow hover:text-amber-glow active:scale-[0.98]"
            >
              {HERO.secondaryCta1}
              <ArrowRight
                size={16}
                className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
              />
            </a>

            <a
              href={`#${SECTION_IDS.howItWorks}`}
              className="group inline-flex h-12 items-center gap-2 border-2 border-[rgba(253,248,240,0.6)] px-6 text-label text-[#FDF8F0] transition-all duration-[var(--duration-fast)] hover:border-amber-glow hover:text-amber-glow active:scale-[0.98]"
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
