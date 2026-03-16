import { SECTION_IDS, AUDIENCES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

export default function WhoItsForSection() {
  return (
    <section id={SECTION_IDS.whoItsFor} className="py-20 md:py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[var(--grid-max-width)] px-4 md:px-6">
        <div className="mx-auto max-w-[var(--grid-content-width)]">
          <ScrollReveal>
            <p className="text-label text-amber-glow mb-3">WHO IT&apos;S FOR</p>
            <h2 className="text-display-lg text-starlight mb-12">
              CINEMA MAGIC FOR EVERY OCCASION
            </h2>
          </ScrollReveal>
        </div>

        {/* Desktop: 5-column grid, Mobile/Tablet: horizontal scroll */}
        <div className="mx-auto max-w-[var(--grid-content-width)]">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:pb-0 md:snap-none scrollbar-hide">
            {AUDIENCES.map((audience, i) => (
              <ScrollReveal key={audience.title} delay={i * 80}>
                <div className="group relative min-w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-white/[0.06] md:min-w-0 aspect-[3/4]">
                  {/* Gradient background placeholder */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${audience.gradient}`}
                  />
                  {/* Overlay gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.9) 100%)",
                    }}
                  />

                  {/* Content at bottom */}
                  <div className="relative flex h-full flex-col justify-end p-5">
                    <h3 className="font-display text-[1.5rem] leading-[1.1] tracking-[0.02em] uppercase text-starlight mb-2">
                      {audience.title}
                    </h3>
                    <p className="text-body-sm text-moonstone">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
