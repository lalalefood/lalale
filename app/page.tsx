import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import Logo from "@/public/assets/images/logo_transparent_background.png";


const cards = [
  {
    title: "Lalale Food",
    body: "Authentic Jamaican dining, signature dishes and bold flavour-led menus.",
    href: "/food",
    accent: "Kitchen fire",
    surface: "bg-[#381A10]/92 border-[#D9AF75]/24",
    tone: "from-[#D9AF75]/14 via-[#F89A1C]/8 to-transparent",
    locked: false,
  },
  {
    title: "Lalale Events",
    body: "Culture, gatherings and curated event experiences shaped around people.",
    href: "",
    accent: "Shared moments",
    surface: "bg-[#152017]/92 border-[#26A549]/20",
    tone: "from-[#26A549]/12 via-[#D9AF75]/6 to-transparent",
    locked: true,
  },
  {
    title: "Lalale Food Producer",
    body: "Production, sourcing and quality-first ingredients built for scale.",
    href: "",
    accent: "Built to grow",
    surface: "bg-[#141f20]/92 border-[#D9AF75]/18",
    tone: "from-[#D9AF75]/10 via-[#5bc7dc]/8 to-transparent",
    locked: true,
  },
] as const;

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0a09] text-[var(--color-foreground)]">
      <Image
        src="/assets/images/background_group.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.52)_0%,rgba(5,4,3,0.64)_48%,rgba(5,4,3,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.28)_54%,rgba(0,0,0,0.78)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,transparent_22%,transparent_78%,rgba(0,0,0,0.5)_100%)]" />

      <section className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <div className="flex flex-1 flex-col justify-center py-14 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-5xl text-center">
            <h1 className="mt-8 font-[Cinzel,serif] text-5xl font-semibold uppercase leading-[0.92] tracking-[0.03em] text-[#D9AF75] sm:text-6xl lg:text-8xl">
              Lalale Group
            </h1>
            <p
              id="sobre"
              className="mx-auto mt-8 max-w-3xl text-pretty text-sm leading-8 text-white/64 sm:text-base"
            >
              Lalale Group is building a connected ecosystem around food, culture, events and
              production, bringing Jamaican flavour into hospitality, experiences and future-facing
              ventures with the same warm identity.
            </p>
          </div>

          <div
            id="explore"
            className="relative mx-auto mt-14 grid w-full max-w-6xl gap-5 lg:grid-cols-3"
          >
            {cards.map((card) => (
              card.locked ? (
                <article
                  key={card.title}
                  className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_18px_42px_rgba(0,0,0,0.22)] ${card.surface}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.tone} opacity-100`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(0,0,0,0.16))]" />

                  <div className="relative flex h-full min-h-72 flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D9AF75]/16 bg-black/18 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9AF75]/74">
                          <Lock className="h-3 w-3" />
                          Coming Soon
                        </span>
                      </div>
                      <h2 className="mt-5 font-[Cinzel,serif] text-3xl font-semibold uppercase leading-[0.95] tracking-[0.03em] text-[#D9AF75]/82 sm:text-4xl">
                        {card.title}
                      </h2>
                      <p className="mt-5 max-w-sm text-sm leading-7 text-white/62 sm:text-[15px]">
                        {card.body}
                      </p>
                    </div>

                    <div className="mt-10 flex items-end justify-between gap-4">
                      <span className="text-sm text-[#D9AF75]/48 [font-family:var(--font-accent-family)]">
                        {card.accent}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D9AF75]/12 bg-black/18 text-[#D9AF75]/48">
                        <Lock className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ) : (
                <Link
                  key={card.title}
                  href={card.href}
                  className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_18px_42px_rgba(0,0,0,0.24)] transition duration-500 hover:scale-[1.02] hover:border-[#D9AF75]/38 ${card.surface}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.tone} opacity-100 transition duration-500 group-hover:opacity-80`} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.14))]" />
                  <div className="relative flex h-full min-h-72 flex-col justify-between">
                    <div>
                      <Image src={Logo} alt="LALALE Foods & Events" width={44} height={44} />
                      <h2 className="mt-5 font-[Cinzel,serif] text-3xl font-semibold uppercase leading-[0.95] tracking-[0.03em] text-[#D9AF75] sm:text-4xl">
                        {card.title}
                      </h2>
                      <p className="mt-5 max-w-sm text-sm leading-7 text-white/68 sm:text-[15px]">
                        {card.body}
                      </p>
                    </div>

                    <div className="mt-10 flex items-end justify-between gap-4">
                      <span className="text-sm text-[#D9AF75]/56 [font-family:var(--font-accent-family)]">
                        {card.accent}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D9AF75]/16 bg-black/20 text-[#D9AF75]/78 transition group-hover:border-[#D9AF75]/42 group-hover:text-[#D9AF75]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
