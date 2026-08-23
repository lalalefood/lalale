import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Menu", href: "#menu" },
  { label: "Services", href: "#services" },
  { label: "Our Story", href: "#story" },
  { label: "Past Events", href: "#gallery" },
  { label: "Contact", href: "#contact-form" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#1f1a17] text-[var(--color-foreground)]">
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--color-jade)_0%,var(--color-gold)_52%,var(--color-jade)_100%)]" />

      <div className="mx-auto grid max-w-screen-2xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.8fr_1fr] lg:px-12">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[var(--color-gold)] text-3xl font-semibold uppercase text-[#1b1511] font-[family:var(--font-display-family)]">
              L
            </div>
            <div>
              <p className="text-4xl font-semibold uppercase tracking-[0.01em] text-white font-[family:var(--font-display-family)]">
                LALALE
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.34em] text-white/58">
                Foods &amp; Events
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-lg text-[16px] leading-8 text-white/68 font-[family:var(--font-accent-family)]">
            Authentic Jamaican food and full-service catering, cooked over fire and served
            with island warmth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {socials.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-white/14 text-white/74 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
            Quick Links
          </p>
          <nav className="mt-8">
            <ul className="space-y-5 text-[16px] text-white/68 font-[family:var(--font-accent-family)]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition hover:text-[var(--color-gold)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
            About Us
          </p>

          <div className="mt-8 space-y-5 text-[16px] leading-8 text-white/68 font-[family:var(--font-accent-family)]">
            <p>events@lalalefoods.com</p>
            <p>+44 20 7946 0812</p>
            <p>Unit 4, Ridley Yard, London E8 2NP</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-screen-2xl px-5 py-7 text-center text-[16px] text-white/58 sm:px-8 lg:px-12">
          © 2026 LALALE Foods &amp; Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
