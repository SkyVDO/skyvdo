import { ArrowRight, Check } from "lucide-react";
import { SECTION_IDS, PACKAGES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function PackagesSection() {
  return (
    <section id={SECTION_IDS.packages} className="py-20 md:py-24">
      <div className="mx-auto max-w-[var(--grid-content-width)] px-4 md:px-6">
        <ScrollReveal>
          <p className="text-label text-amber-glow mb-3">PACKAGES</p>
          <h2 className="text-display-lg text-starlight mb-4">
            CHOOSE YOUR EXPERIENCE
          </h2>
          <p className="text-body-lg text-moonstone mb-12 max-w-[600px]">
            Every package includes delivery, setup, and takedown — you just
            show up and enjoy the movie.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 120}>
              <div
                className={`relative flex flex-col overflow-hidden rounded-lg bg-deep-navy transition-all duration-[var(--duration-base)] ${
                  pkg.highlighted
                    ? "border-2 border-amber-glow shadow-glow-amber scale-[1.02]"
                    : "border border-[var(--border-subtle)]"
                }`}
              >
                {/* Image placeholder area */}
                <div className="relative h-48 bg-gradient-to-br from-slate-blue to-twilight">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(253,248,240,0.92) 100%)",
                    }}
                  />
                  {/* Badge */}
                  {pkg.badge && (
                    <span className="absolute top-4 left-4 z-10 rounded-full bg-amber-glow px-3 py-1 text-label text-midnight">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-display-md text-starlight mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-body-sm text-moonstone mb-5">
                    {pkg.description}
                  </p>

                  {/* Divider */}
                  <div className="mb-5 h-px bg-[var(--border-subtle)]" />

                  {/* Features */}
                  <ul className="mb-6 flex flex-col gap-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-body-md text-moonstone"
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
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 bg-amber-glow text-label text-midnight transition-all duration-[var(--duration-fast)] hover:bg-sunset-orange active:scale-[0.98]"
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
