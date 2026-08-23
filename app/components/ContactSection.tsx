import { CalendarDays, Clock3, Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import { Reveal } from "./Reveal";

const contactItems = [
  {
    icon: Phone,
    label: "Call Center",
    lines: ["+44 20 7946 0812", "+44 7700 900 145"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["events@lalalefoods.com"],
  },
  {
    icon: MapPin,
    label: "Our Location",
    lines: ["Unit 4, Ridley Yard", "London E8 2NP"],
  },
  {
    icon: Clock3,
    label: "Kitchen Hours",
    lines: ["Tue – Sun · 10:00 – 22:00", "Mon · Private bookings"],
  },
];

export function ContactSection() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#201b18_0%,#2b2521_100%)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-screen-2xl gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
              I got a question
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-light uppercase leading-[0.92] tracking-[0.03em] text-white sm:text-6xl lg:text-7xl font-[family:var(--font-display-family)]">
              We are always ready to help you and answer your
              <span className="text-[var(--color-gold)]"> questions</span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-10 text-white/68 sm:text-xl font-[family:var(--font-accent-family)]">
              Tell us about your event and we will reply within one working day with menu
              options, pricing and available dates.
            </p>

            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              {contactItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.label} delay={index * 70} className="space-y-4">
                    <Icon className="h-8 w-8 text-[var(--color-gold)]" strokeWidth={1.75} />
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--color-jade)]">
                      {item.label}
                    </p>
                    <div className="space-y-2 text-base leading-8 text-white/72 sm:text-lg">
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[1.75rem] border border-white/10 bg-[#1e1916] px-6 py-8 shadow-[0_30px_70px_rgba(0,0,0,0.16)] sm:px-8 sm:py-9">
            <h3 className="text-4xl font-light uppercase tracking-[0.04em] text-white font-[family:var(--font-display-family)]">
              Get in touch
            </h3>
            <p className="mt-4 text-base leading-8 text-white/64 sm:text-lg">
              Share a few details and we will build a menu around your event.
            </p>

            <form className="mt-10 space-y-7">
              <div className="space-y-3">
                <label htmlFor="full-name" className="text-lg text-white">
                  Full name
                </label>
                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  placeholder="Your name"
                  className="h-18 w-full rounded-2xl border border-white/12 bg-[#1a1512] px-6 text-lg text-white outline-none transition placeholder:text-white/38 focus:border-[var(--color-gold)]"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <label htmlFor="email" className="text-lg text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className="h-18 w-full rounded-2xl border border-white/12 bg-[#1a1512] px-6 text-lg text-white outline-none transition placeholder:text-white/38 focus:border-[var(--color-gold)]"
                  />
                </div>

                <div className="space-y-3">
                  <label htmlFor="event-date" className="text-lg text-white">
                    Event date
                  </label>
                  <div className="relative">
                    <input
                      id="event-date"
                      name="eventDate"
                      type="text"
                      placeholder="dd/mm/aaaa"
                      className="h-18 w-full rounded-2xl border border-white/12 bg-[#1a1512] px-6 pr-16 text-lg text-white outline-none transition placeholder:text-white/38 focus:border-[var(--color-gold)]"
                    />
                    <CalendarDays className="pointer-events-none absolute right-5 top-1/2 h-6 w-6 -translate-y-1/2 text-white/46" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="event-details" className="text-lg text-white">
                  Tell us about the event
                </label>
                <textarea
                  id="event-details"
                  name="eventDetails"
                  rows={6}
                  placeholder="Headcount, location, style of service..."
                  className="w-full rounded-2xl border border-white/12 bg-[#1a1512] px-6 py-5 text-lg text-white outline-none transition placeholder:text-white/38 focus:border-[var(--color-gold)]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-18 w-full items-center justify-center gap-4 rounded-2xl bg-[var(--color-gold)] px-8 text-lg font-semibold uppercase tracking-[0.24em] text-[#17120e] transition hover:brightness-105"
              >
                <SendHorizontal className="h-5 w-5" strokeWidth={2} />
                Send a message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
