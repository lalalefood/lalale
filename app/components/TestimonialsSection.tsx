import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Our guests are still talking about the oxtail. The team ran the whole evening without a single hiccup and the jerk station was the highlight of the night.",
    name: "Amara Bennett",
    role: "Wedding · Croydon",
  },
  {
    quote:
      "We booked LALALE for 250 people at short notice. Hot, on time, beautifully presented, and the office has asked for them every quarter since.",
    name: "Daniel Osei",
    role: "Corporate Launch",
  },
  {
    quote:
      "Proper yard food, not a watered-down version. The curry goat tasted like my auntie's kitchen and the patties disappeared in minutes.",
    name: "Keisha Morgan",
    role: "40th Birthday",
  },
  {
    quote:
      "From tasting to service, everything felt calm and premium. They made our private dinner feel generous, intimate and completely effortless.",
    name: "Naomi Clarke",
    role: "Private Dining",
  },
  {
    quote:
      "The pop-up queue never slowed down and nobody wanted to leave. LALALE brought real energy, real smoke and real flavour to the whole night.",
    name: "Tariq Foster",
    role: "Festival Pop-Up",
  },
];

const marqueeTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#211c19_0%,#2d2926_100%)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
              Testimonials
            </p>
            <h2 className="mt-5 text-4xl font-light uppercase tracking-[0.08em] text-white sm:text-5xl md:text-6xl font-[family:var(--font-accent-family)]">
              People Remember the Table
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              A few words from clients who trusted LALALE to feed weddings, private dinners,
              launches and late-night celebrations.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="testimonials-track flex w-max gap-6 px-1" aria-label="Client testimonials">
            {marqueeTestimonials.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="w-[22rem] shrink-0 rounded-[1.75rem] border border-white/10 bg-[#2b2521] px-7 py-7 text-[var(--color-foreground)] shadow-[0_22px_50px_rgba(0,0,0,0.14)] sm:w-[28rem] sm:px-8 sm:py-8"
              >
                <div className="text-6xl leading-none text-[var(--color-gold)] font-[family:var(--font-display-family)]">
                  &rdquo;
                </div>

                <div className="mt-5 flex items-center gap-2 text-xl text-[var(--color-gold)]">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="mt-6 min-h-32 text-[15px] leading-8 text-white/68 font-[family:var(--font-accent-family)] sm:min-h-36">
                  “{item.quote}”
                </p>

                <div className="mt-7 border-t border-white/8 pt-6">
                  <p className="font-[family:var(--font-display-family)] text-xl font-semibold uppercase tracking-[0.03em] text-white sm:text-2xl">
                    {item.name}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-jade)] sm:text-xs">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent sm:w-8" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[var(--color-charcoal)] to-transparent sm:w-8" />
        </div>
      </div>
    </section>
  );
}
