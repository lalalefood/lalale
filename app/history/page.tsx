import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Logo from "@/public/assets/images/logo_transparent_background.png"

export const metadata: Metadata = {
  title: "Our History | LALALE Foods & Events",
  description:
    "From a small Kingston kitchen to full-service catering — the LALALE Foods & Events timeline.",
};

type Milestone = {
  year: string;
  yearTop: string;
  yearBottom: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  side: "left" | "right";
  ticks?: string[];
  featured?: boolean;
};

const milestones: Milestone[] = [
  {
    year: "2013",
    yearTop: "20",
    yearBottom: "13",
    kicker: "Kingston roots",
    title: "Where It Started",
    description:
      "In a small Jamaican kitchen, two brothers learned that every dish should carry heat, patience and pride in equal measure.",
    image: "/assets/story-roots.jpg",
    alt: "The first kitchen where LALALE began",
    side: "left",
  },
  {
    year: "2015",
    yearTop: "20",
    yearBottom: "15",
    kicker: "Shared vision",
    title: "Built By Two Brothers",
    description:
      "They started cooking for family first, then for neighbours, then for anyone curious enough to ask what was smoking on the grill.",
    image: "/assets/story-founders.jpg",
    alt: "The two founders of LALALE cooking together",
    side: "right",
    ticks: ["2014"],
  },
  {
    year: "2017",
    yearTop: "20",
    yearBottom: "17",
    kicker: "Street craft",
    title: "First Pop-Up, First Queue",
    description:
      "A folding table and a jerk drum turned into a line down the block. Word travelled faster than the smoke did.",
    image: "/assets/event-popup.jpg",
    alt: "LALALE's first street food pop-up",
    side: "left",
    ticks: ["2016"],
  },
  {
    year: "2019",
    yearTop: "20",
    yearBottom: "19",
    kicker: "Full service",
    title: "LALALE Catering Is Born",
    description:
      "What was a stall became a company. LALALE Foods & Events opened its books to weddings, offices and private tables.",
    image: "/assets/dish-curry-goat.jpg",
    alt: "Signature curry goat plated for a catering event",
    side: "right",
    ticks: ["2018"],
  },
  {
    year: "2021",
    yearTop: "20",
    yearBottom: "21",
    kicker: "Trusted table",
    title: "First Wedding Booked",
    description:
      "Two hundred guests, one long service line, zero doubts left in the room. LALALE proved it could carry a full celebration.",
    image: "/assets/event-wedding.jpg",
    alt: "A wedding catered by LALALE Foods and Events",
    side: "left",
    ticks: ["2020"],
  },
  {
    year: "2023",
    yearTop: "20",
    yearBottom: "23",
    kicker: "Big rooms",
    title: "Corporate & Large-Scale Events",
    description:
      "Bigger kitchens, tighter timings, the same fire. LALALE started feeding boardrooms and conference floors across the city.",
    image: "/assets/event-corporate.jpg",
    alt: "A corporate event served by LALALE Foods and Events",
    side: "right",
    ticks: ["2022"],
  },
  {
    year: "2026",
    yearTop: "20",
    yearBottom: "26",
    kicker: "Still by hand",
    title: "LALALE Today",
    description:
      "The menu now travels to weddings, street pop-ups and private tables across the city, but the feeling is the same: bold, generous and unmistakably Jamaican.",
    image: "/assets/hero.jpg",
    alt: "LALALE Foods and Events today",
    side: "left",
    ticks: ["2024", "2025"],
    featured: true,
  },
];

function DuotoneBleed({
  src,
  className,
  tint = "gold",
}: {
  src: string;
  className?: string;
  tint?: "gold" | "jade";
}) {
  const tintVar = tint === "gold" ? "var(--color-gold)" : "var(--color-jade)";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className ?? ""}`}
      style={{
        WebkitMaskImage:
          "radial-gradient(circle at center, black 0%, black 35%, transparent 72%)",
        maskImage:
          "radial-gradient(circle at center, black 0%, black 35%, transparent 72%)",
      }}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt=""
          fill
          className="object-cover grayscale contrast-125"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: tintVar, mixBlendMode: "color", opacity: 0.9 }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "#000", mixBlendMode: "multiply", opacity: 0.15 }}
        />
      </div>
    </div>
  );
}

export default function HistoryPage() {
  return (
    <main className="relative overflow-x-clip bg-[var(--color-charcoal)] text-[var(--color-foreground)]">
      {/* ---- Top bar ---- */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="text-xl font-light tracking-[0.22em] text-white/88 uppercase font-[family:var(--font-accent-family)]"
        >
          <Image src={Logo} alt="LALALE Foods & Events" width={50} height={50} />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-8 text-[0.68rem] font-semibold tracking-[0.32em] text-white/70 uppercase">
          <Link href="/" className="transition hover:text-[var(--color-gold)]">
            Home
          </Link>
          <Link href="/menu" className="transition hover:text-[var(--color-gold)]">
            Menu
          </Link>
          <Link href="/#contact-form" className="transition hover:text-[var(--color-jade)]">
            Contact
          </Link>
        </nav>
      </header>

      {/* ---- Intro / masthead, mirrors the reference infographic's top block ---- */}
      <section className="z-10 mx-auto max-w-screen-2xl px-6 pt-6 pb-16 sm:px-10 lg:px-14 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/45">
            <span className="h-px w-6 bg-[var(--color-gold)]" />
            Since 2013
            <span className="h-px w-6 bg-[var(--color-gold)]" />
          </p>
          <h1 className="mt-3 text-[13vw] leading-[0.86] font-semibold uppercase tracking-[-0.01em] text-white font-[family:var(--font-display-family)] sm:text-6xl lg:text-7xl">
            History
            <br />
            of LALALE
            <br />
            <span className="text-gradient-gold">Foods &amp; Events</span>
          </h1>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="relative">
        {/* decorative duotone bleeds, echo the red engine cut-outs in the reference */}
        <DuotoneBleed
          src="/assets/dish-ackee.jpg"
          tint="gold"
          className="right-[-12%] top-[6%] hidden h-[26rem] w-[26rem] rotate-6 opacity-40 lg:block"
        />
        <DuotoneBleed
          src="/assets/dish-patty.jpg"
          tint="jade"
          className="left-[-14%] top-[52%] hidden h-[24rem] w-[24rem] -rotate-6 opacity-30 lg:block"
        />
        <DuotoneBleed
          src="/assets/dish-fish.jpg"
          tint="gold"
          className="right-[-16%] bottom-[4%] hidden h-[28rem] w-[28rem] rotate-3 opacity-30 lg:block"
        />

        <div className="relative mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-14">
          {/* the spine */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-6 w-[3px] bg-[linear-gradient(180deg,transparent_0%,var(--color-gold)_4%,var(--color-gold)_92%,transparent_100%)] lg:left-1/2 lg:-translate-x-1/2"
          />

          <ol className="relative">
            {milestones.map((item, index) => {
              const textFirst = item.side === "left";

              return (
                <li key={item.year} className="relative">
                  {/* minor tick years between major milestones */}
                  {item.ticks && item.ticks.length > 0 && (
                    <div className="relative flex flex-col items-start gap-2 py-6 pl-16 lg:items-center lg:pl-0">
                      {item.ticks.map((tick) => (
                        <span
                          key={tick}
                          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/25"
                        >
                          {tick}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="relative grid grid-cols-1 items-center gap-6 py-10 pl-16 sm:pl-20 lg:grid-cols-[1fr_200px_1fr] lg:gap-8 lg:py-16 lg:pl-0">
                    {/* mobile dot on the spine */}
                    <span
                      aria-hidden
                      className="absolute top-12 left-6 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[var(--color-charcoal)] bg-[var(--color-gold)] shadow-[0_0_0_4px_rgba(255,209,0,0.18)] lg:hidden"
                    />

                    {/* text card */}
                    <div
                      className={[
                        "lg:order-1",
                        textFirst ? "" : "lg:order-3",
                      ].join(" ")}
                    >
                      <div className={textFirst ? "lg:text-right" : ""}>
                        <span className="inline-flex rounded-full border border-[var(--color-gold)]/25 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
                          {item.kicker}
                        </span>
                        <h3 className="mt-4 text-3xl font-light uppercase tracking-[0.02em] text-white sm:text-4xl font-[family:var(--font-accent-family)]">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base lg:ml-auto">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* year straddling the spine */}
                    <div className="relative z-10 hidden lg:order-2 lg:flex lg:flex-col lg:items-center">
                      <div className="flex flex-col items-center leading-[0.78]">
                        <span className="text-gradient-gold text-6xl font-semibold tracking-[-0.03em] font-[family:var(--font-display-family)] xl:text-7xl">
                          {item.yearTop}
                        </span>
                        <span className="text-gradient-gold text-6xl font-semibold tracking-[-0.03em] font-[family:var(--font-display-family)] xl:text-7xl">
                          {item.yearBottom}
                        </span>
                      </div>
                    </div>

                    {/* mobile year label */}
                    <div className="-mt-2 lg:hidden">
                      <span className="text-2xl font-semibold tracking-[-0.02em] text-[var(--color-gold)] font-[family:var(--font-display-family)]">
                        {item.year}
                      </span>
                    </div>

                    {/* image */}
                    <div
                      className={[
                        "lg:order-3",
                        textFirst ? "" : "lg:order-1",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "group relative isolate aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]",
                          item.featured ? "ring-1 ring-[var(--color-gold)]/35" : "",
                        ].join(" ")}
                      >
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          loading={index < 2 ? "eager" : "lazy"}
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0)_0%,rgba(8,8,8,0.05)_60%,rgba(8,8,8,0.35)_100%)]" />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* closing marker */}
          <div className="relative flex flex-col items-center gap-4 py-16 pl-16 text-center lg:pl-0">
            <span className="h-4 w-4 rounded-full bg-[var(--color-jade)] shadow-[0_0_0_4px_rgba(0,150,57,0.22)]" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/45">
              And the story keeps cooking
            </p>
            <Link
              href="/#contact-form"
              className="mt-2 inline-flex items-center gap-3 border border-[var(--color-gold)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)] transition hover:bg-[var(--color-gold)] hover:text-[#18130d]"
            >
              Bring LALALE To Your Event
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
