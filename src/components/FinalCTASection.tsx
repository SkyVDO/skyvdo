import { ArrowRight } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <section
      id={SECTION_IDS.finalCta}
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-night-sky)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-screen-glow)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[var(--grid-content-width)] px-4 text-center md:px-6">
        <h2 className="text-display-xl text-starlight mb-8 mx-auto max-w-4xl">
          TURN ANY SPACE INTO A CINEMA TONIGHT
        </h2>
        <a
          href={`#${SECTION_IDS.enquiry}`}
          className="group inline-flex h-14 items-center gap-2 bg-amber-glow px-8 text-label text-midnight transition-all duration-[var(--duration-fast)] hover:bg-sunset-orange active:scale-[0.98]"
        >
          Enquire Now
          <ArrowRight
            size={16}
            className="transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
