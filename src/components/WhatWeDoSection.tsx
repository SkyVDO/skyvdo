import { ArrowRight } from "lucide-react";
import { SECTION_IDS, SERVICES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import FallbackImage from "./FallbackImage";

export default function WhatWeDoSection() {
  return (
    <section id={SECTION_IDS.whatWeDo} className="py-20 md:py-24">
      <div className="mx-auto max-w-[var(--grid-content-width)] px-4 md:px-6">
        <ScrollReveal>
          <p className="text-label text-amber-glow mb-3">WHAT WE DO</p>
          <h2 className="text-display-lg text-starlight mb-12">
            EVERYTHING YOU NEED FOR MOVIE MAGIC
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="group rounded-lg border border-[var(--border-subtle)] bg-deep-navy p-6 transition-all duration-[var(--duration-base)] hover:-translate-y-1 hover:shadow-card-hover hover:border-[var(--border-default)]">
                {/* Image placeholder */}
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-md bg-slate-blue">
                  <FallbackImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-[var(--duration-base)] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Arrow + divider */}
                <ArrowRight
                  size={20}
                  className="mb-3 text-moonstone transition-colors duration-[var(--duration-fast)] group-hover:text-amber-glow"
                />
                <div className="mb-3 h-px w-10 bg-[var(--border-default)]" />

                {/* Content */}
                <p className="text-label text-moonstone mb-1">
                  {service.category}
                </p>
                <h3 className="text-heading-sm text-starlight font-bold mb-1">
                  {service.title}
                </h3>
                <p className="text-body-sm text-moonstone">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
