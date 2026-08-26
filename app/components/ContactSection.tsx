 "use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock3, Icon, Mail, Phone, SendHorizontal } from "lucide-react";
import { Reveal } from "./Reveal";
import WhatsappIcon from "@/public/assets/whatsapp_icon.svg"
import Image from "next/image";

type SubmitStatus = "idle" | "loading" | "success" | "error";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+44 7754 847073"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["llalalefoodsandevents@gmail.com"],
  },
  // {
  //   icon: MapPin,
  //   label: "Our Location",
  //   lines: ["Unit 4, Ridley Yard", "London E8 2NP"],
  // },
  {
    icon: Clock3,
    label: "Kitchen Hours",
    lines: ["Every Day · 8:00 – 11:00PM"],
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const directNumber = "+44 7754 847073";
  const telHref = "tel:+447754847073";
  const whatsappHref = "https://wa.me/447754847073";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          eventDetails: formData.get("eventDetails"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

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

            <h2 className="mt-6 max-w-5xl text-5xl font-light uppercase leading-[0.92] tracking-[0.03em] text-white font-[family:var(--font-display-family)]">
              We are always ready to help you and answer your
              <span className="text-[var(--color-gold)]"> questions</span>
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-10 text-white/68 sm:text-xl font-[family:var(--font-accent-family)]">
              Tell us about your event and we will reply within one working day with menu
              options, pricing and available dates.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/82 transition"
              >
                <Image src={WhatsappIcon} alt="Whatsapp Icon" className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/82 transition"
              >
                <Phone className="h-4 w-4" />
                Call {directNumber}
              </a>
            </div>

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

            {status === "success" ? (
              <div className="mt-10 flex flex-col items-center gap-5 rounded-2xl border border-[var(--color-jade)]/30 bg-[var(--color-jade)]/8 px-6 py-14 text-center">
                <CheckCircle2 className="h-14 w-14 text-[var(--color-jade)]" strokeWidth={1.5} />
                <div>
                  <p className="text-2xl font-semibold uppercase tracking-[0.04em] text-white font-[family:var(--font-display-family)]">
                    Message sent
                  </p>
                  <p className="mt-3 max-w-sm text-base leading-7 text-white/70">
                    Thank you! Your message has been sent successfully. Our team will get back
                    to you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)] underline-offset-4 transition hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <label htmlFor="full-name" className="text-lg text-white">
                      Name
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      required
                      disabled={status === "loading"}
                      placeholder="Your name"
                      className="h-18 w-full rounded-2xl border border-white/12 bg-[#1a1512] px-6 text-lg text-white outline-none transition placeholder:text-white/38 focus:border-[var(--color-gold)] disabled:opacity-60"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-lg text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={status === "loading"}
                      placeholder="you@email.com"
                      className="h-18 w-full rounded-2xl border border-white/12 bg-[#1a1512] px-6 text-lg text-white outline-none transition placeholder:text-white/38 focus:border-[var(--color-gold)] disabled:opacity-60"
                    />
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
                    required
                    disabled={status === "loading"}
                    placeholder="Headcount, location, style of service..."
                    className="w-full rounded-2xl border border-white/12 bg-[#1a1512] px-6 py-5 text-lg text-white outline-none transition placeholder:text-white/38 focus:border-[var(--color-gold)] disabled:opacity-60"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-xl border border-[var(--color-destructive)]/30 bg-[var(--color-destructive)]/10 px-5 py-4 text-sm leading-6 text-[#ffb4a1]">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-18 w-full items-center justify-center gap-4 rounded-2xl bg-[var(--color-gold)] px-8 text-lg font-semibold uppercase tracking-[0.24em] text-[#17120e] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <SendHorizontal className="h-5 w-5" strokeWidth={2} />
                  {status === "loading" ? "Sending..." : "Send a message"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
