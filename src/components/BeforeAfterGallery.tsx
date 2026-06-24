import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface BeforeAfterPair {
  before: string;
  after: string;
  label: string;
}

const beforeAfterPairs: BeforeAfterPair[] = [
  { before: "service-cosmetic.png", after: "hero-office.png",      label: "Smile Makeover"   },
  { before: "team-photo.png",       after: "service-cosmetic.png", label: "Veneers"           },
  { before: "office-exterior.png",  after: "doctor-portrait.png",  label: "Teeth Whitening"   },
  { before: "hero-office.png",      after: "service-pediatric.png", label: "Invisalign"       },
];

export function BeforeAfterGallery() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);
  const next = () => setActive((i) => (i + 1) % beforeAfterPairs.length);

  const pair = beforeAfterPairs[active];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <FadeIn>
            <h2 className="text-secondary font-medium tracking-widest uppercase text-xs mb-3">
              Patient Transformations
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-primary">
              Real Patient Transformations
            </h3>
          </FadeIn>
        </div>

        <FadeIn direction="none" delay={0.1}>
          <div className="relative max-w-4xl mx-auto">
            {/* Photo pair */}
            <div className="grid grid-cols-2 gap-3 md:gap-5 rounded-2xl overflow-hidden">
              {/* Before */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  key={`before-${active}`}
                  src={`${import.meta.env.BASE_URL}/${pair.before}`}
                  alt={`Before — ${pair.label}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary/80 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                  Before
                </span>
              </div>

              {/* After */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  key={`after-${active}`}
                  src={`${import.meta.env.BASE_URL}/${pair.after}`}
                  alt={`After — ${pair.label}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <span className="absolute top-3 left-3 bg-secondary/90 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full backdrop-blur-sm">
                  After
                </span>
              </div>
            </div>

            {/* Treatment label */}
            <p className="text-center font-serif text-xl text-primary mt-5 italic">
              {pair.label}
            </p>

            {/* Prev / Next buttons */}
            <button
              onClick={prev}
              aria-label="Previous transformation"
              className="absolute -left-5 md:-left-7 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-primary hover:bg-muted hover:text-secondary transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next transformation"
              className="absolute -right-5 md:-right-7 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-primary hover:bg-muted hover:text-secondary transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {beforeAfterPairs.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to transformation ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 h-2.5 bg-secondary"
                    : "w-2.5 h-2.5 bg-border hover:bg-secondary/50"
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
