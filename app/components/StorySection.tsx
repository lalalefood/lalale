"use client";


import Link from "next/link";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function StorySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl =
    "https://player.mediadelivery.net/play/641422/911b212e-3333-4ecf-86b7-e85b10a2618c?autoplay=true";
  const posterUrl =
    "https://vz-9f1a8ca9-486.b-cdn.net/911b212e-3333-4ecf-86b7-e85b10a2618c/thumbnail.jpg";

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,209,0,0.05),transparent_22%),linear-gradient(180deg,#171311_0%,#1d1815_42%,#231d1a_100%)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,209,0,0.24),transparent)]" />
      <div className="mx-auto max-w-screen-xl">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
              <span className="mr-3 text-[var(--color-jade)]">{"// 04"}</span>
              From Jamaica to the world
            </p>
            <h2 className="mt-5 text-5xl font-light uppercase tracking-[0.06em] text-white sm:text-6xl font-[family:var(--font-accent-family)]">
              The <span className="text-[var(--color-gold)]">Story</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              LALALE began with two Jamaican brothers who decided the world should meet the flavour,
              warmth and ritual they grew up with at home.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              The idea was simple: keep the soul of Jamaican cooking intact, then carry it into new
              rooms, new cities and new celebrations.
            </p>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-14">
            <div className="relative overflow-hidden rounded-[2rem] bg-black/20 shadow-[0_32px_90px_rgba(0,0,0,0.34)] ring-1 ring-white/8">
              <div className="relative aspect-video w-full bg-black">
                {isPlaying ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={embedUrl}
                    title="LALALE story video"
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={posterUrl}
                      alt="Preview of the LALALE story video"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.1)_0%,rgba(5,5,5,0.24)_36%,rgba(5,5,5,0.56)_100%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,209,0,0.05),transparent_38%)]" />
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="Play story video"
                    >
                      <span className="flex h-24 w-24 items-center justify-center rounded-full border border-white/18 bg-black/34 backdrop-blur-sm shadow-[0_12px_34px_rgba(0,0,0,0.32)] transition duration-300 hover:scale-[1.04]">
                        <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-[var(--color-gold)]" />
                      </span>
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/history"
                className="inline-flex min-w-64 items-center justify-center rounded-full border border-white/18 bg-white/6 px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition duration-300 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[#17120e]"
              >
                View Full Timeline
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
