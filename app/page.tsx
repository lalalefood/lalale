import Link from "next/link";
import { ArrowRight, Hammer, Lock, Sparkles } from "lucide-react";


const cards = [
  {
    title: "Lalale Food",
    body: "Authentic Jamaican dining, signature dishes and bold flavour-led menus.",
    href: "/food",
    accent: "Kitchen fire",
    tone: "from-[rgba(255,209,0,0.18)] via-[rgba(248,153,29,0.1)] to-transparent",
    locked: false,
  },
  {
    title: "Lalale Events",
    body: "Culture, gatherings and curated event experiences shaped around people.",
    href: "",
    accent: "Shared moments",
    tone: "from-[rgba(0,150,57,0.18)] via-[rgba(25,151,93,0.08)] to-transparent",
    locked: true,
  },
  {
    title: "Lalale Food Producer",
    body: "Production, sourcing and quality-first ingredients built for scale.",
    href: "",
    accent: "Built to grow",
    tone: "from-[rgba(112,200,255,0.16)] via-[rgba(255,255,255,0.04)] to-transparent",
    locked: true,
  },
] as const;

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#1b1715_0%,#24201d_48%,#1f1b18_100%)] text-[var(--color-foreground)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(255,209,0,0.04),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(0,150,57,0.05),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,141,59,0.05),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:112px_112px]" />

      <section className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-5 rounded-full border border-white/8 bg-white/[0.02] px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm font-semibold text-white/88">
              LG
            </div>
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.08em] text-white/92">Lalale Group</p>
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/38">A bit of Jamaica</p>
            </div>
          </div>

          <nav className="flex items-center justify-center gap-6 text-sm text-white/54">
            <a href="#sobre" className="transition hover:text-[var(--color-gold)]">
              Sobre
            </a>
            <a href="#explore" className="transition hover:text-[var(--color-gold)]">
              Explorar
            </a>
            <a href="#contato" className="transition hover:text-[var(--color-gold)]">
              Contato
            </a>
          </nav>

          <div className="flex justify-end">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/62">
              <Hammer className="h-3.5 w-3.5" />
              Em Construção
            </span>
          </div>
        </header>

        <div className="flex flex-1 flex-col justify-center py-14 sm:py-16 lg:py-20">
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/72 shadow-[0_10px_28px_rgba(0,0,0,0.14)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-gold)]/70" />
              Jamaica&apos;s Flavour &amp; Culture
            </div>

            <p className="pointer-events-none absolute -left-2 top-16 hidden text-xl text-white/28 lg:block [font-family:var(--font-accent-family)]">
              a handwritten note,
              <br />
              just enough
            </p>
            <p className="pointer-events-none absolute -right-3 top-28 hidden rotate-[5deg] text-xl text-white/24 lg:block [font-family:var(--font-accent-family)]">
              crafted softly
              <br />
              for what&apos;s next
            </p>

            <h1 className="mt-8 text-5xl font-semibold uppercase leading-[0.92] tracking-[0.03em] text-white/95 sm:text-6xl lg:text-8xl">
              Lalale Group
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-balance text-2xl leading-tight text-white/78 sm:text-3xl lg:text-4xl [font-family:var(--font-accent-family)]">
              Estamos em construção para trazer para você a bit of Jamaica.
            </p>

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
            {cards.map((card, index) => (
              card.locked ? (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.02)_100%)] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.16)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.tone} opacity-35`} />
                  <div className="absolute inset-x-6 top-5 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.14),transparent)]" />

                  <div className="relative flex h-full min-h-72 flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/44">
                          0{index + 1} / highlight
                        </p>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/54">
                          <Lock className="h-3 w-3" />
                          Coming Soon
                        </span>
                      </div>
                      <h2 className="mt-5 text-3xl font-semibold uppercase leading-[0.95] tracking-[0.03em] text-white/70 sm:text-4xl">
                        {card.title}
                      </h2>
                      <p className="mt-5 max-w-sm text-sm leading-7 text-white/50 sm:text-[15px]">
                        {card.body}
                      </p>
                    </div>

                    <div className="mt-10 flex items-end justify-between gap-4">
                      <span className="text-sm text-white/34 [font-family:var(--font-accent-family)]">
                        {card.accent}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-black/12 text-white/42">
                        <Lock className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ) : (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.02)_100%)] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.16)] transition duration-500 hover:scale-[1.02] hover:border-white/14"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.tone} opacity-55 transition duration-500 group-hover:opacity-65`} />
                  <div className="absolute inset-x-6 top-5 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.14),transparent)]" />

                  <div className="relative flex h-full min-h-72 flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/44">
                        0{index + 1} / highlight
                      </p>
                      <h2 className="mt-5 text-3xl font-semibold uppercase leading-[0.95] tracking-[0.03em] text-white/92 sm:text-4xl">
                        {card.title}
                      </h2>
                      <p className="mt-5 max-w-sm text-sm leading-7 text-white/58 sm:text-[15px]">
                        {card.body}
                      </p>
                    </div>

                    <div className="mt-10 flex items-end justify-between gap-4">
                      <span className="text-sm text-white/38 [font-family:var(--font-accent-family)]">
                        {card.accent}
                      </span>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/16 text-white/78 transition group-hover:border-white/20 group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            ))}
          </div>

          <div id="contato" className="relative mx-auto mt-14 flex w-full max-w-5xl flex-col items-center">
            <p className="mb-3 text-center text-xl text-white/34 [font-family:var(--font-accent-family)]">
              click to explore
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/food"
                className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white/88 transition duration-300 hover:border-white/16 hover:bg-white/[0.08] hover:text-white"
              >
                Conhecer Lalale Food
              </Link>
              <Link
                href="/food#services"
                aria-disabled="true"
                className="pointer-events-none inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white/42"
              >
                Lalale Events · Coming Soon
              </Link>
              <span
                aria-disabled="true"
                className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white/42"
              >
                Lalale Food Producer · Coming Soon
              </span>
            </div>

            <p className="mt-5 text-center text-sm leading-7 text-white/50 sm:text-[15px]">
              Explore the food universe now. Events and production continue expanding behind the scenes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
