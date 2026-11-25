import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/app/data/service-galleries";

type ServiceGalleryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceGalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
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

  if (!service) {
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
              <span className="block text-[#D9AF75]">Photo Gallery</span>
            </h1>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/62 lg:pb-3">
            {service.galleryIntro}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-12 lg:gap-5">
          {service.gallery.map((item, index) => (
            <figure
              key={`${item.title}-${item.image}-${index}`}
              className={[
                "group relative min-h-[20rem] overflow-hidden rounded-[1.65rem] bg-[#381A10]/10 shadow-[0_18px_55px_rgba(56,26,16,0.12)] md:min-h-0",
                item.className,
              ].join(" ")}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 66vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_18%,rgba(0,0,0,0.46)_100%)] opacity-80 transition duration-500 group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/90">
                  {item.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
