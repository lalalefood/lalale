import Image from "next/image";
import { Reveal } from "./Reveal";

const storyCards = [
  {
    label: "Kingston roots",
    title: "Where it started",
    description:
      "In a small Jamaican kitchen, two brothers learned that every dish should carry heat, patience and pride in equal measure.",
    image: "/assets/story-roots.jpg",
  },
  {
    label: "Shared vision",
    title: "Built by two brothers",
    description:
      "They started cooking for family first, then for neighbours, then for anyone curious enough to ask what was smoking on the grill.",
    image: "/assets/story-founders.jpg",
  },
  {
    label: "Island craft",
    title: "From Jamaica to the world",
    description:
      "What began as home-style cooking became a mission to carry Jamaican flavour further without softening its edge.",
    image: "/assets/cta-plating.jpg",
  },
  {
    label: "Still by hand",
    title: "The fire still leads",
    description:
      "Today the menu travels to weddings, street pop-ups and private tables, but the feeling is the same: bold, generous and unmistakably Jamaican.",
    image: "/assets/hero.jpg",
    featured: true,
  },
];

export function StorySection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,209,0,0.06),transparent_24%),linear-gradient(180deg,#171311_0%,#1f1a17_38%,#231d1a_100%)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-screen-xl">
        <Reveal>
          <div className="mx-auto max-w-4xl border border-white/6 bg-white/[0.03] px-6 py-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
              <span className="mr-3 text-[var(--color-jade)]">{"// 04"}</span>
              From Jamaica to the world
            </p>
            <h2 className="mt-5 text-5xl font-light uppercase tracking-[0.06em] text-white sm:text-6xl font-[family:var(--font-accent-family)]">
              The <span className="text-[var(--color-gold)]">Story</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              LALALE began with two Jamaican brothers who decided the world should meet the flavour,
              warmth and ritual they grew up with at home.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-2xl text-center">
            <div className="flex items-center justify-center gap-6 text-4xl sm:text-5xl">
              <span aria-hidden>🇯🇲</span>
              <span className="text-[var(--color-gold)]">→</span>
              <span aria-hidden>🌍</span>
            </div>
            <div className="mt-4 flex items-center justify-center gap-5 text-[11px] uppercase tracking-[0.34em] text-white/36 sm:text-xs">
              <span>Kingston</span>
              <span className="text-[var(--color-gold)]">Today</span>
              <span>Every table</span>
            </div>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              The idea was simple: keep the soul of Jamaican cooking intact, then carry it into new
              rooms, new cities and new celebrations.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {storyCards.map((card, index) => (
            <Reveal
              key={card.title}
              as="article"
              delay={index * 90}
              className={[
                "group relative isolate overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] min-h-[26rem]",
                card.featured ? "ring-1 ring-[var(--color-gold)]/35" : "",
              ].join(" ")}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                loading={index < 2 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-[1.06]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.08)_0%,rgba(8,8,8,0.34)_45%,rgba(8,8,8,0.92)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,209,0,0.08),transparent_32%,transparent_72%,rgba(0,150,57,0.1))] opacity-80 transition duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 top-0 p-5 sm:p-6">
                <span className="inline-flex rounded-full border border-[var(--color-gold)]/25 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)] backdrop-blur-sm">
                  {card.label}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-4xl font-light uppercase tracking-[0.05em] text-white font-[family:var(--font-accent-family)]">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/74 sm:text-base">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
