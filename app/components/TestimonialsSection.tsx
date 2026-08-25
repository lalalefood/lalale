"use client";

import { useRef, useState } from "react";
import { Reveal } from "./Reveal";

type TestimonialBase = {
  name: string;
  role: string;
};

type TextTestimonial = TestimonialBase & {
  type: "text";
  quote: string;
};

type VideoTestimonial = TestimonialBase & {
  type: "video";
  quote: string;
  video: string;
};

type Testimonial = TextTestimonial | VideoTestimonial;

const testimonials: Testimonial[] = [
  {
    type: "text",
    quote:
      "Our guests are still talking about the oxtail. The whole evening ran smoothly from first plate to last call.",
    name: "Amara Bennett",
    role: "Wedding · Croydon",
  },
  {
    type: "video",
    quote: "A short reaction from one of our corporate clients.",
    name: "Daniel Osei",
    role: "Corporate Launch",
    video: "/assets/videos/testemonials1.mp4",
  },
  {
    type: "text",
    quote:
      "Proper yard food, no shortcuts. The curry goat and patties were gone in minutes.",
    name: "Keisha Morgan",
    role: "40th Birthday",
  },
  {
    type: "video",
    quote: "A quick word after a private dining service.",
    name: "Naomi Clarke",
    role: "Private Dining",
    video: "/assets/videos/testemonials2.mp4",
  },
  {
    type: "text",
    quote:
      "LALALE brought real energy, real smoke and real flavour to the whole night.",
    name: "Tariq Foster",
    role: "Festival Pop-Up",
  },
];

const marqueeTestimonials = [...testimonials, ...testimonials];

function VideoTestimonialCard({ item }: { item: VideoTestimonial }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handlePause = () => setIsPlaying(false);

  return (
    <article className="w-[18.5rem] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#201b18] shadow-[0_18px_40px_rgba(0,0,0,0.14)] sm:w-[20rem]">
      <div className="relative aspect-[4/5] bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={item.video}
          playsInline
          preload="metadata"
          controls={isPlaying}
          onPause={handlePause}
          onEnded={handlePause}
        />
        {!isPlaying ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,4,0.12)_0%,rgba(4,4,4,0.18)_42%,rgba(4,4,4,0.72)_100%)]" />
            <button
              type="button"
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play testimonial from ${item.name}`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/18 bg-black/34 backdrop-blur-sm transition hover:scale-[1.04]">
                <span className="ml-1 h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-white" />
              </span>
            </button>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="max-w-[16rem] text-[13px] leading-6 text-white/84">{item.quote}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-[family:var(--font-accent-family)] text-[26px] leading-none text-white">
                  {item.name}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
                  {item.role}
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </article>
  );
}

function TextTestimonialCard({ item }: { item: TextTestimonial }) {
  return (
    <article className="w-[18.5rem] shrink-0 rounded-[1.75rem] border border-white/10 bg-[#2a2421] px-6 py-7 text-[var(--color-foreground)] shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:w-[20rem] sm:px-7 sm:py-8">
      <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/42">
        Written testimonial
      </p>

      <p className="mt-8 text-[15px] leading-8 text-white/78">
        “{item.quote}”
      </p>

      <div className="mt-12">
        <p className="font-script text-[34px] leading-none text-white sm:text-[38px]">
          {item.name}
        </p>
        <p className="mt-3 text-[13px] leading-6 text-white/54">{item.role}</p>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#211c19_0%,#2d2926_100%)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
              Testimonials
            </p>
            <h2 className="mt-5 max-w-4xl text-4xl font-light leading-[1.02] text-white sm:text-5xl md:text-6xl font-[family:var(--font-accent-family)]">
              Don&apos;t take our word for it.
              <br />
              Hear it from our partners.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="testimonials-track flex w-max gap-5 px-1" aria-label="Client testimonials">
            {marqueeTestimonials.map((item, index) =>
              item.type === "video" ? (
                <VideoTestimonialCard key={`${item.name}-${item.type}-${index}`} item={item} />
              ) : (
                <TextTestimonialCard key={`${item.name}-${item.type}-${index}`} item={item} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
