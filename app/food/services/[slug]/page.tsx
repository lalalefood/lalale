import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/app/data/service-galleries";
import {
  galleryMedia,
  getGalleryMediaBySlug,
  getVideoEmbedUrl,
  hasGalleryMedia,
} from "@/app/utils/gallery";

type ServiceGalleryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return galleryMedia
    .filter(hasGalleryMedia)
    .map((gallery) => ({ slug: gallery.slug }));
}

export async function generateMetadata({
  params,
}: ServiceGalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const media = getGalleryMediaBySlug(slug);

  if (!service || !hasGalleryMedia(media)) {
    return {
      title: "Service Gallery | LALALE Foods & Events",
    };
  }

  return {
    title: `${service.title} Gallery | LALALE Foods & Events`,
    description: service.galleryIntro,
  };
}

export default async function ServiceGalleryPage({
  params,
}: ServiceGalleryPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const media = getGalleryMediaBySlug(slug);

  if (!service || !hasGalleryMedia(media)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#2D2926] text-[var(--color-foreground)]">
      <section className="mx-auto max-w-screen-2xl px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        <header className="flex items-center justify-between gap-6">
          <Link
            href="/food#services"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68 shadow-sm backdrop-blur-sm transition hover:border-[var(--color-gold)]/40 hover:bg-white/[0.07] hover:text-[var(--color-gold)]"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Services</span>
          </Link>

          <Link
            href="/food"
            className="hidden text-[11px] font-semibold uppercase tracking-[0.32em] text-white/42 transition hover:text-white sm:inline-flex"
          >
            LALALE Food
          </Link>
        </header>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <h1 className="mt-7 max-w-5xl text-5xl font-light leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl font-[family:var(--font-accent-family)]">
              {service.title}
              <span className="block text-[#D9AF75]">Event Gallery</span>
            </h1>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/62 lg:pb-3">
            {service.galleryIntro}
          </p>
        </div>

        {media.photos.length ? (
          <section className="mt-16" aria-labelledby="event-moments-title">
            <GalleryHeading
              id="event-moments-title"
              title="Event moments"
              count={media.photos.length}
            />
            <div className="mt-7 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-12 lg:gap-5">
              {media.photos.map((photo, index) => (
                <figure
                  key={photo}
                  className={`group relative min-h-[22rem] overflow-hidden rounded-[1.65rem] bg-black/20 shadow-[0_18px_55px_rgba(0,0,0,0.18)] md:min-h-0 ${photoLayout[index % photoLayout.length]}`}
                >
                  <Image
                    src={photo}
                    alt={`${media.title} event moment ${index + 1}`}
                    fill
                    fetchPriority={index === 0 ? "high" : "low"}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 66vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(0,0,0,0.42)_100%)]" />
                  <figcaption className="absolute right-5 bottom-4 text-[10px] font-semibold tracking-[0.25em] text-white/72">
                    {String(index + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {media.videos.length ? (
          <section className="mt-20" aria-labelledby="event-films-title">
            <GalleryHeading
              id="event-films-title"
              title="Event films"
              count={media.videos.length}
            />
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {media.videos.map((video, index) => (
                <figure key={video} className="min-w-0">
                  <div className="relative aspect-[9/16] overflow-hidden rounded-[1.65rem] border border-white/8 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                    <iframe
                      src={getVideoEmbedUrl(video)}
                      title={`${media.title} event film ${index + 1}`}
                      loading="lazy"
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <figcaption className="mt-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                    Film {String(index + 1).padStart(2, "0")} · Muted
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </section>
    </main>
  );
}

const photoLayout = [
  "md:col-span-8 md:row-span-2",
  "md:col-span-4 md:row-span-1",
  "md:col-span-4 md:row-span-1",
  "md:col-span-5 md:row-span-1",
  "md:col-span-7 md:row-span-1",
];

function GalleryHeading({
  id,
  title,
  count,
}: {
  id: string;
  title: string;
  count: number;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-4">
      <h2
        id={id}
        className="text-2xl font-light tracking-[0.08em] text-white uppercase font-[family:var(--font-accent-family)] sm:text-3xl"
      >
        {title}
      </h2>
      <span className="pb-1 text-[10px] font-semibold tracking-[0.28em] text-[#D9AF75]">
        {String(count).padStart(2, "0")}
      </span>
    </div>
  );
}
