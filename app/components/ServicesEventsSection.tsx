import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/data/service-galleries";
import { Reveal } from "./Reveal";

export function ServicesEventsSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--color-charcoal)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.44em] text-[var(--color-jade)]">
              <span className="text-[var(--color-gold)]">Services</span>
              <span className="px-2 text-white/30">/</span>
              <span className="text-[var(--color-jade)]">Events</span>
            </p>
            <h2 className="mt-6 text-4xl font-light tracking-[0.18em] text-white uppercase sm:text-5xl md:text-6xl font-[family:var(--font-accent-family)]">
              Services &amp; Events
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light tracking-[0.08em] text-white/72 sm:text-xl font-[family:var(--font-accent-family)]">
              However you gather, we cook
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:auto-rows-[14rem] md:grid-cols-12 lg:gap-5">
          {services.map((service, index) => (
            <Reveal
              key={`${service.title}-${index}`}
              delay={index * 70}
              className={[
                "group relative isolate min-h-80 overflow-hidden rounded-sm border border-white/10 bg-black/30 md:min-h-0",
                service.className,
              ].join(" ")}
            >
              <Link
                href={`/food/services/${service.slug}`}
                className="block h-full min-h-80 md:min-h-0"
                aria-label={`Open ${service.title} photo gallery`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-[1.05]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08)_0%,rgba(7,7,7,0.24)_45%,rgba(7,7,7,0.88)_100%)] transition duration-500 group-hover:bg-[linear-gradient(180deg,rgba(7,7,7,0.03)_0%,rgba(7,7,7,0.18)_40%,rgba(7,7,7,0.9)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,209,0,0.08),transparent_26%,transparent_72%,rgba(0,150,57,0.1))] opacity-80 transition duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[var(--color-gold)]">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 text-3xl font-light uppercase tracking-[0.08em] text-white sm:text-4xl font-[family:var(--font-accent-family)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/78 sm:text-[15px]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/72 transition duration-300 group-hover:text-[var(--color-gold)]">
                    <span>View Gallery</span>
                    <span className="h-px w-8 bg-[linear-gradient(90deg,var(--color-jade),var(--color-gold))] transition duration-300 group-hover:w-12" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
