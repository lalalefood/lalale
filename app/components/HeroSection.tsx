export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.png"
        aria-hidden="true"
      >
        <source src="/assets/videos/hero_video.MOV" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
      <div className="hero-grain pointer-events-none absolute inset-0" />

      <div className="relative flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          <a
            href="#hero"
            className="text-xl font-light tracking-[0.22em] text-white/88 uppercase font-[family:var(--font-accent-family)]"
          >
            L.
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8 text-[0.68rem] font-semibold tracking-[0.32em] text-white/70 uppercase">
              <li>
                <a href="/menu" className="transition hover:text-[var(--color-gold)]">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-[var(--color-green)]">
                  About
                </a>
              </li>
              <li>
                <a href="#contact-form" className="transition hover:text-[var(--color-sky)]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div
          id="hero"
          className="relative flex flex-1 items-center justify-center px-6 pb-16 pt-10 text-center sm:px-10 lg:px-14"
        >
          <div className="hero-copy max-w-4xl">
            <p className="hero-fade hero-kicker text-[0.72rem] font-semibold tracking-[0.42em] text-[var(--color-gold-soft)] uppercase sm:text-[0.82rem]">
              Authentic Jamaican Kitchen · Catering &amp; Events
            </p>

            <h1 className="hero-fade-delay mt-6 text-5xl leading-none font-light tracking-[0.08em] text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.55)] sm:text-7xl md:text-8xl lg:text-[7.4rem] font-[family:var(--font-accent-family)]">
              LALALE
            </h1>

            <div className="hero-fade-delay-3 mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-14 bg-[linear-gradient(90deg,transparent,var(--color-green),transparent)]" />
              <span className="text-xs tracking-[0.45em] text-white/65 uppercase">
                Foods &amp; Events
              </span>
              <span className="h-px w-14 bg-[linear-gradient(90deg,transparent,var(--color-gold),transparent)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
