"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IPL_CAROUSEL_IMAGES } from "@/lib/constants";
import FallbackImage from "./FallbackImage";

const AUTOPLAY_INTERVAL_MS = 5000;

export default function IplShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const totalSlides = IPL_CAROUSEL_IMAGES.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(mediaQuery.matches);

    syncPreference();
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", syncPreference);
      return () => mediaQuery.removeEventListener("change", syncPreference);
    }

    mediaQuery.addListener(syncPreference);
    return () => mediaQuery.removeListener(syncPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || paused || totalSlides < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [paused, reducedMotion, totalSlides]);

  const goToSlide = (index: number) => {
    setActiveIndex((index + totalSlides) % totalSlides);
  };

  const goToPrevious = () => {
    goToSlide(activeIndex - 1);
  };

  const goToNext = () => {
    goToSlide(activeIndex + 1);
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-deep-navy shadow-raised"
      role="region"
      aria-roledescription="carousel"
      aria-label="IPL outdoor screening highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] md:aspect-[21/9]">
        {IPL_CAROUSEL_IMAGES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[var(--duration-cinematic)] ease-[var(--ease-cinematic)] ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <FallbackImage
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-screen-white/55 via-screen-white/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
              <p className="mb-2 text-label text-amber-glow">LIVE IPL MATCH SCREENINGS</p>
              <p className="font-display text-[1.5rem] leading-[1.05] tracking-[0.02em] text-midnight uppercase md:text-[2rem]">
                {slide.title}
              </p>
            </div>
          </div>
        ))}

        {totalSlides > 1 && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Show previous IPL image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-midnight/90 text-starlight transition-colors duration-[var(--duration-fast)] hover:bg-midnight"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Show next IPL image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-midnight/90 text-starlight transition-colors duration-[var(--duration-fast)] hover:bg-midnight"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {IPL_CAROUSEL_IMAGES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Show IPL image ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={`h-2.5 rounded-full transition-all duration-[var(--duration-fast)] ${
                index === activeIndex
                  ? "w-8 bg-amber-glow"
                  : "w-2.5 bg-midnight/75 hover:bg-midnight"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
