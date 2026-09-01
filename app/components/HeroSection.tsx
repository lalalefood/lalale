"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const heroVideoUrl =
  "https://iframe.mediadelivery.net/embed/641422/f2673b21-f27d-4461-ac61-3623eeabd3f0?autoplay=true&loop=true&muted=true&preload=true&responsive=false&controls=false&playsinline=true";
const heroPosterUrl =
  "https://vz-9f1a8ca9-486.b-cdn.net/f2673b21-f27d-4461-ac61-3623eeabd3f0/thumbnail.jpg";

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const revealTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotionQuery.matches) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => setShowVideo(true));

    return () => {
      window.cancelAnimationFrame(frameId);
      if (revealTimerRef.current != null) {
        window.clearTimeout(revealTimerRef.current);
      }
    };
  }, []);

  const handleVideoLoad = () => {
    revealTimerRef.current = window.setTimeout(() => {
      setIsVideoReady(true);
    }, 900);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <Image
        src={heroPosterUrl}
        alt=""
        fill
        priority
        sizes="100vw"
        className={[
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          isVideoReady ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      {showVideo ? (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <iframe
            src={heroVideoUrl}
            className={[
              "absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-full min-w-[177.777778vh] -translate-x-1/2 -translate-y-1/2 border-0 transition-opacity duration-700",
              isVideoReady ? "opacity-100" : "opacity-0",
            ].join(" ")}
            allow="autoplay; fullscreen; picture-in-picture"
            loading="eager"
            title="LALALE background video"
            aria-hidden="true"
            tabIndex={-1}
            onLoad={handleVideoLoad}
          />
        </div>
      ) : null}

      <div className="hero-overlay absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
      <div className="hero-grain pointer-events-none absolute inset-0" />

      <div className="relative flex min-h-screen flex-col">
        <header className="flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          <a
            href="#hero"
            onClick={closeMobileMenu}
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
                <a href="#about" className="transition hover:text-[var(--color-jade)]">
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

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="relative z-30 inline-flex size-11 items-center justify-center rounded-full border border-white/12 bg-black/20 text-white/80 backdrop-blur-md transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="food-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </header>

        <div
          id="food-mobile-menu"
          className={[
            "absolute left-6 right-6 top-20 z-20 overflow-hidden rounded-3xl border border-white/12 bg-[rgba(17,14,12,0.82)] shadow-[0_24px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl transition-all duration-300 md:hidden",
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0",
          ].join(" ")}
        >
          <nav aria-label="Mobile primary">
            <ul className="divide-y divide-white/10 px-5 py-3 text-[0.78rem] font-semibold tracking-[0.28em] text-white/76 uppercase">
              <li>
                <a
                  href="/menu"
                  onClick={closeMobileMenu}
                  className="block py-4 transition hover:text-[var(--color-gold)]"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="block py-4 transition hover:text-[var(--color-jade)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact-form"
                  onClick={closeMobileMenu}
                  className="block py-4 transition hover:text-[var(--color-sky)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

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
              <span className="h-px w-14 bg-[linear-gradient(90deg,transparent,var(--color-jade),transparent)]" />
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
