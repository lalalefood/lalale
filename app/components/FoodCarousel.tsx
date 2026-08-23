import { Reveal } from "./Reveal";
import Image from "next/image";

const slides = [
  { img: "/assets/hero.jpg", name: "Open-Fire Jerk Chicken", tag: "Pimento smoke" },
  { img: "/assets/dish-oxtail.jpg", name: "Braised Oxtail", tag: "Six hours slow" },
  { img: "/assets/dish-curry-goat.jpg", name: "Curry Goat", tag: "Island spice" },
  { img: "/assets/dish-fish.jpg", name: "Escovitch Snapper", tag: "Sweet & sharp" },
  { img: "/assets/dish-patty.jpg", name: "Golden Patties", tag: "Flaky, hand-folded" },
  { img: "/assets/dish-ackee.jpg", name: "Ackee & Saltfish", tag: "National dish" },
];

const marquee = [...slides, ...slides];

export function FoodCarousel() {
  return (
    <section
      id="carousel"
      className="relative overflow-hidden bg-[var(--color-charcoal)] px-0 py-20 text-[var(--color-cream)] sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="food-carousel-kicker">A Unique Experience</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-5 max-w-6xl text-center text-[60px] leading-[0.95] tracking-[0.02em] font-light font-[family:var(--font-accent-family)] uppercase">
            <span className="block whitespace-nowrap text-white">
              One Island. <span className="food-carousel-title-gradient">Uncompromised</span>
            </span>
            <span className="block text-white">Flavour.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-16 sm:mt-20">
        <div className="food-carousel-track flex w-max gap-5 px-5 sm:gap-7 sm:px-8" aria-label="Featured dishes">
          {marquee.map((slide, i) => (
            <figure
              key={`${slide.name}-${i}`}
              className="group relative w-80 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-[0_26px_60px_rgba(0,0,0,0.32)] aspect-[4/6] sm:w-96"
            >
              <Image
                src={slide.img}
                alt={slide.name}
                fill
                loading={i < 4 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 80vw, 24rem"
                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.045]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.04)_0%,rgba(5,5,5,0.2)_42%,rgba(5,5,5,0.88)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_28%)] opacity-50" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-8">
                <p className="text-[10px] font-semibold tracking-[0.34em] uppercase text-[var(--color-gold)] sm:text-sm">
                  {slide.tag}
                </p>
                <p className="mt-3 text-4xl font-light tracking-[0.06em] text-white uppercase font-[family:var(--font-accent-family)]">
                  {slide.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-charcoal)] to-transparent sm:w-24 lg:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-charcoal)] to-transparent sm:w-24 lg:w-40" />

        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-center px-5 sm:px-8">
          <Reveal delay={220} className="pointer-events-auto">
            <a
              href="/menu"
              className="flex h-full w-full items-center justify-center bg-[#FDCF0F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-[#1D1816] uppercase tracking-[0.14em] shadow-gold transition-all duration-500 hover:brightness-110 hover:-translate-y-0.5 rounded-md py-5 px-9 text-sm font-semibold"
            >
              Explore Full Menu
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
