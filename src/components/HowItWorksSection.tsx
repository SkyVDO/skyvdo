import { MessageSquare, Truck, Play } from "lucide-react";
import { SECTION_IDS, STEPS } from "@/lib/constants";
import ScrollReveal from "./ScrollReveal";

const ICON_MAP = {
  MessageSquare,
  Truck,
  Play,
} as const;

export default function HowItWorksSection() {
  return (
    <section id={SECTION_IDS.howItWorks} className="py-20 md:py-24 bg-deep-navy">
      <div className="mx-auto max-w-[var(--grid-content-width)] px-4 md:px-6">
        <ScrollReveal>
          <p className="text-label text-amber-glow mb-3">HOW IT WORKS</p>
          <h2 className="text-display-lg text-starlight mb-16">
            THREE STEPS TO MOVIE NIGHT
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line — desktop horizontal */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-[var(--border-default)] md:block" />
          {/* Connecting line — mobile vertical */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--border-default)] md:hidden" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon];
              return (
                <ScrollReveal key={step.number} delay={i * 150}>
                  <div className="relative pl-16 md:pl-0 md:text-center">
                    {/* Decorative number */}
                    <span className="absolute left-0 top-0 font-display text-[3.5rem] leading-none text-white/10 md:relative md:mb-2 md:inline-block md:text-[4.5rem]">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 md:mx-auto">
                      <Icon size={24} className="text-amber-glow" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-[1.5rem] leading-[1.1] tracking-[0.02em] uppercase text-starlight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-moonstone max-w-xs md:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
