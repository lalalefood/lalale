import Image from "next/image";
import Link from "next/link";

type PosterDish = {
  title: string;
  description: string;
  image: string;
  imagePosition: string;
  textPosition: string;
  flourPosition?: string;
  garnishPosition?: string;
};

const posterDishes: PosterDish[] = [
  {
    title: "Starters",
    description:
      "A well-chosen starter can set the tone for an entire meal. Saltfish fritters, flaky patties and crisp festival bites open the table with warmth and spice.",
    image: "/assets/dish-patty.jpg",
    imagePosition: "left-[72px] top-[48px]",
    textPosition: "left-[346px] top-[98px]",
    flourPosition: "left-[250px] top-[154px]",
    garnishPosition: "left-[40px] top-[126px]",
  },
  {
    title: "Dish From The Chef",
    description:
      "A rotating kitchen favourite built around smoke, citrus and island depth. The plate changes, the confidence does not.",
    image: "/assets/cta-plating.jpg",
    imagePosition: "right-[72px] top-[12px]",
    textPosition: "left-[126px] top-[144px]",
    flourPosition: "right-[128px] top-[52px]",
    garnishPosition: "right-[34px] top-[132px]",
  },
  {
    title: "Steak",
    description:
      "Charred, sliced and served with sharp herb finish. A richer plate for guests who want something bold and direct.",
    image: "/assets/dish-oxtail.jpg",
    imagePosition: "left-[86px] top-[36px]",
    textPosition: "left-[380px] top-[138px]",
    garnishPosition: "left-[52px] top-[182px]",
  },
  {
    title: "Sea Food Grill And Fish",
    description:
      "Escovitch snapper, pepper prawns and brown stew fish bring smoke, vinegar brightness and fresh sea character to the spread.",
    image: "/assets/dish-fish.jpg",
    imagePosition: "right-[68px] top-[18px]",
    textPosition: "left-[134px] top-[154px]",
    flourPosition: "right-[92px] top-[84px]",
    garnishPosition: "right-[38px] top-[208px]",
  },
  {
    title: "Desserts",
    description:
      "Warm finishes with rum cake, coconut drops and mango pudding. Sweet, soft and made to close the night slowly.",
    image: "/assets/dish-curry-goat.jpg",
    imagePosition: "left-[92px] top-[20px]",
    textPosition: "left-[374px] top-[164px]",
    flourPosition: "left-[44px] top-[66px]",
    garnishPosition: "left-[16px] top-[216px]",
  },
];

function FlourDust({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-[170px] w-[170px] rounded-full opacity-80 blur-[1px] ${className}`}
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.82) 20%, rgba(255,255,255,0.32) 42%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0) 72%)",
      }}
    />
  );
}

function HerbMark({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute h-[34px] w-[34px] rotate-12 rounded-full ${className}`}
    >
      <span className="absolute left-1/2 top-0 h-[30px] w-[12px] -translate-x-1/2 rounded-full bg-[#4f8d3f] opacity-95" />
      <span className="absolute left-[3px] top-[10px] h-[18px] w-[11px] -rotate-35 rounded-full bg-[#79aa55] opacity-90" />
      <span className="absolute right-[3px] top-[12px] h-[18px] w-[11px] rotate-35 rounded-full bg-[#79aa55] opacity-90" />
    </div>
  );
}

function SectionRule({ title }: { title: string }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center pt-[8px]">
      <div className="absolute left-0 top-1/2 h-px w-full bg-white/30" />
      <h2 className="relative bg-[#080606] px-[20px] text-[58px] leading-none text-white normal-case font-[family:var(--font-accent-family)]">
        {title}
      </h2>
    </div>
  );
}

export function MenuShowcasePage() {
  return (
    <main className="min-h-screen bg-[#050404] text-[#FFE6D0]">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor: "#070505",
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.42), rgba(0,0,0,0.42)), repeating-linear-gradient(0deg, #0b0808 0px, #0b0808 3px, #120e0e 3px, #120e0e 7px)",
        }}
      >
        <div className="mx-auto min-h-screen w-full max-w-[640px] px-[18px] pb-[54px] pt-[22px]">
          <div className="flex items-center justify-between px-[8px]">
            <Link
              href="/"
              className="text-[11px] uppercase tracking-[0.34em] text-[#F89A1C] transition hover:text-white"
            >
              Back Home
            </Link>
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">
              LALALE Foods & Events
            </span>
          </div>

          <section className="relative mt-[18px] h-[208px] overflow-hidden rounded-[2px]">
            <div className="absolute left-[86px] top-0 h-[134px] w-[248px] bg-black/72 px-[16px] py-[14px] text-[9px] leading-[1.55] text-white/70">
              Offering quality prime-cut steaks and confident contemporary plating, the menu
              opens with small bites and moves into deeper, richer island flavours.
              <br />
              <br />
              Sweet notes and bright finishes complete the line-up with balance and elegance.
            </div>

            <div className="absolute right-[26px] top-[8px] h-[146px] w-[212px] overflow-hidden rounded-[2px] border border-white/6">
              <Image
                src="/assets/cta-plating.jpg"
                alt="Prep board"
                fill
                className="object-cover"
                loading="eager"
              />
            </div>

            <HerbMark className="left-[34px] top-[78px]" />
            <HerbMark className="left-[150px] top-[118px]" />
            <div className="absolute right-[92px] top-[134px] h-[14px] w-[14px] rounded-full bg-[#cc3e24]" />
            <div className="absolute right-[54px] top-[146px] h-[18px] w-[18px] rounded-full border border-[#9a5f26] bg-[#39251a]" />
          </section>

          <section className="mt-[24px]">
            <SectionRule title="Menu" />

            <div className="relative mt-[22px] space-y-[18px]">
              {posterDishes.map((dish, index) => (
                <article
                  key={dish.title}
                  className="relative h-[258px]"
                >
                  {dish.flourPosition ? <FlourDust className={dish.flourPosition} /> : null}
                  {dish.garnishPosition ? <HerbMark className={dish.garnishPosition} /> : null}

                  <div
                    className={`absolute ${dish.imagePosition} h-[182px] w-[182px] overflow-hidden rounded-full border border-white/6 bg-black/20 shadow-[0_18px_50px_rgba(0,0,0,0.45)]`}
                  >
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className={[
                        "object-cover",
                        index === 0 ? "scale-[1.06]" : "",
                        index === 4 ? "scale-[1.1]" : "",
                      ].join(" ")}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>

                  <div className={`absolute ${dish.textPosition} max-w-[214px]`}>
                    <h3 className="text-[15px] leading-none tracking-[0.03em] text-[#b18255] normal-case font-[family:var(--font-accent-family)]">
                      {dish.title}
                    </h3>
                    <p className="mt-[8px] text-[9px] leading-[1.45] text-white/72">
                      {dish.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-[4px] text-center text-[36px] leading-none text-white normal-case font-[family:var(--font-accent-family)]">
              it is delicious
            </p>
          </section>

          <section className="mt-[54px]">
            <SectionRule title="Events" />

            <div className="relative mt-[18px] h-[230px]">
              <div className="absolute left-[38px] top-[36px] w-[304px] bg-black/72 px-[20px] py-[18px]">
                <p className="text-[18px] leading-none text-[#c5715f] normal-case font-[family:var(--font-accent-family)]">
                  Season&apos;s Wine Dinner
                </p>
                <p className="mt-[10px] text-[9px] leading-[1.5] text-white/74">
                  A private dining evening with curated pairings, warm service and a menu
                  tailored around the room. Designed for intimate tables, launches and
                  celebratory gatherings.
                </p>
                <p className="mt-[14px] text-[9px] text-white/78">
                  Fri. 27 / Friday / 7:30pm-10:30pm
                </p>
                <p className="mt-[18px] text-[10px] uppercase tracking-[0.18em] text-white">
                  Reserve Table
                </p>
              </div>

              <div className="absolute right-[92px] top-[6px] h-[178px] w-[108px] overflow-hidden rounded-[2px] border border-white/8 bg-[#2f211c] shadow-[0_20px_60px_rgba(0,0,0,0.46)]">
                <Image
                  src="/assets/event-wedding.jpg"
                  alt="Event bottle display"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute bottom-[34px] right-[10px] h-[88px] w-[110px] overflow-hidden rounded-[2px] border border-white/8">
                <Image
                  src="/assets/event-popup.jpg"
                  alt="Event detail"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute right-[118px] top-[176px] h-[28px] w-[28px] rounded-full bg-[radial-gradient(circle,#f0c27f_0%,#a23f2e_72%,rgba(0,0,0,0)_73%)]" />
              <p className="absolute bottom-[28px] right-[36px] text-[9px] uppercase tracking-[0.14em] text-white/72">
                Next events
              </p>
            </div>
          </section>

          <section className="mt-[40px]">
            <div className="relative h-[266px] overflow-hidden">
              <div className="absolute inset-x-[42px] top-[16px] h-[222px] overflow-hidden border border-white/6">
                <Image
                  src="/assets/event-corporate.jpg"
                  alt="Book your table"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/48" />
              </div>

              <div className="absolute inset-x-0 top-[92px] text-center">
                <h2 className="text-[54px] leading-none text-white normal-case font-[family:var(--font-accent-family)]">
                  Book Your Table
                </h2>
                <div className="mt-[12px] inline-flex items-center rounded-full border border-white/55 px-[18px] py-[6px] text-[10px] uppercase tracking-[0.24em] text-white">
                  online booking
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
