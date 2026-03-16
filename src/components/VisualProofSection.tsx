import { SECTION_IDS, GALLERY_IMAGES } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";
import FallbackImage from "./FallbackImage";

export default function VisualProofSection() {
  return (
    <section id={SECTION_IDS.visualProof} className="py-20 md:py-24 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[var(--grid-content-width)] px-4 md:px-6">
        <ScrollReveal>
          <p className="text-label text-amber-glow mb-3">VISUAL PROOF</p>
          <h2 className="text-display-lg text-starlight mb-12">
            NIGHTS TO REMEMBER
          </h2>
        </ScrollReveal>

        {/* Asymmetric gallery grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal
              key={img.src}
              delay={i * 80}
              className={`${img.span} overflow-hidden rounded-lg`}
            >
              <div className="group relative h-full w-full overflow-hidden">
                <FallbackImage
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-[var(--duration-base)] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-[var(--duration-fast)] group-hover:bg-black/40" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
