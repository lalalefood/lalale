import Image from "next/image";
import { Reveal } from "./Reveal";

export function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0f0b0a] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.jpg"
          alt="Jamaican plating in warm firelight"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover object-center opacity-42"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0.68)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,4,0.72)_0%,rgba(5,4,4,0.34)_38%,rgba(5,4,4,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,209,0,0.04),transparent_28%,transparent_72%,rgba(0,150,57,0.06))]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl justify-center">
        <Reveal className="w-full text-center">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-gold)]">
              Dates are filling fast
            </p>
            <h2 className="mt-6 text-6xl font-light uppercase tracking-[0.08em] text-white font-[family:var(--font-accent-family)]">
              Got an event coming?
              <span className="mt-2 block text-[var(--color-foreground)]">Let us feed the room.</span>
            </h2>
            <div className="mx-auto mt-5 h-px w-16 bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
              Send us the date and headcount today and we will come back with a menu, a
              quote and a tasting slot.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="#contact-form"
                className="inline-flex min-w-72 items-center justify-center border border-white/28 bg-white/6 px-10 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-gold)] hover:bg-white/10 hover:text-[var(--color-gold)]"
              >
                Check Our Availability
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
