import { ArrowRight, Check } from "lucide-react";
import { SECTION_IDS, PACKAGES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function PackagesSection() {
  return (
    <section id={SECTION_IDS.packages} className="py-20 md:py-24 bg-cream">
      <div className="mx-auto max-w-[var(--grid-content-width)] px-4 md:px-6">
        <ScrollReveal>
          <p className="text-label text-cream-dark/60 mb-3">PACKAGES</p>
          <h2 className="text-display-lg text-cream-dark mb-4">
            CHOOSE YOUR EXPERIENCE
          </h2>
          <p className="text-body-lg text-cream-dark/70 mb-12 max-w-[600px]">
            Every package includes delivery, setup, and takedown — you just
            show up and enjoy the movie.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 120}>
              <div
                className={`relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-[var(--duration-base)] ${
                  pkg.highlighted
                    ? "border-2 border-cream-dark shadow-[0_4px_20px_rgba(0,0,0,0.10)] scale-[1.02]"
                    : "border border-cream-dark/10 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                }`}
              >
                {/* Image placeholder area */}
                <div className="relative h-48 bg-gradient-to-br from-[#e8e0d0] to-[#d5cdc0]">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(255,255,255,0.95) 100%)",
                    }}
                  />
                  {/* Badge */}
                  {pkg.badge && (
                    <span className="absolute top-4 left-4 z-10 rounded-full bg-cream-dark px-3 py-1 text-label text-white">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-display-md text-cream-dark mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-body-sm text-cream-dark/60 mb-5">
                    {pkg.description}
                  </p>

                  {/* Divider */}
                  <div className="mb-5 h-px bg-cream-dark/10" />

                  {/* Features */}
                  <ul className="mb-6 flex flex-col gap-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-body-md text-cream-dark/70"
                      >
                        <Check
                          size={18}
                          className="mt-0.5 flex-shrink-0 text-success"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={`#${SECTION_IDS.enquiry}`}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cream-dark text-label text-white transition-all duration-[var(--duration-fast)] hover:bg-cream-dark/90 active:scale-[0.98]"
                  >
                    Enquire for Availability
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
