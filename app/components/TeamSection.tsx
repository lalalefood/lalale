import Image from "next/image";
import { Reveal } from "./Reveal";

const teamMembers = [
  {
    name: "Max",
    role: "Founder · Culinary Lead",
    image: "/assets/images/team/max.jpg",
  },
  {
    name: "Crafton Fagon",
    role: "Director",
    image: "/assets/images/team/crafton.png",
  },
  {
    name: "Raymond Thompson",
    role: "Director",
    image: "/assets/images/team/raymond.png",
  },
  {
    name: "Aarif Fagon",
    role: "Food Service Manager",
    image: "/assets/images/team/aarif.png",
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0f0b0a_0%,#221d1a_56%,#2d2926_100%)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,209,0,0.28),transparent)]" />

      <div className="mx-auto max-w-screen-2xl">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
              Meet the team
            </p>
            <h2 className="mt-5 text-4xl font-light leading-[1.02] text-white sm:text-5xl md:text-6xl font-[family:var(--font-accent-family)]">
              The hands behind the flavour.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              From the kitchen to the floor, our team brings Jamaican warmth, fire and
              precision to every table.
            </p>
          </div>
        </Reveal>

        <div
          className="-mx-5 mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 [&::-webkit-scrollbar]:hidden"
          aria-label="LALALE team members"
        >
          {teamMembers.map((member, index) => (
            <Reveal
              key={`${member.name}-${member.role}-${index}`}
              className="shrink-0 snap-start"
            >
              <article className="group relative min-h-[25rem] w-[78vw] max-w-[22rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#171210] shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:border-[rgba(255,209,0,0.34)] hover:shadow-[0_28px_80px_rgba(0,0,0,0.38)] sm:min-h-[28rem] sm:w-[21rem] lg:w-[24rem] lg:max-w-none">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 21rem, 78vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_42%,rgba(0,0,0,0.86)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,209,0,0.08),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <div className="h-px w-full bg-white/12" />
                  <div className="mt-5 flex items-end justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-semibold uppercase tracking-[0.05em] text-white font-[family:var(--font-display-family)]">
                        {member.name}
                      </h3>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-jade)]">
                        {member.role}
                      </p>
                    </div>
                    <span className="hidden h-10 w-10 shrink-0 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 text-center text-sm leading-10 text-[var(--color-gold)] sm:block">
                      +
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
