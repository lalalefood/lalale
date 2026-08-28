import Image from "next/image";
import { Reveal } from "./Reveal";

const galleryItems = [
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat1.png",
    className: "md:col-span-6 md:row-span-2",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat2.jpg",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat3.jpg",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat4.jpg",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat5.jpg",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat6.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat7.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat10.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat12.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Boat party",
    image: "/assets/images/gallery/boat13.jpg",
    className: "md:col-span-8 md:row-span-1",
  },
  {
    title: "Book launch banquet",
    image: "/assets/images/gallery/book.jpg",
    className: "md:col-span-8 md:row-span-1",
  },
  {
    title: "Corporate reception",
    image: "/assets/images/gallery/company.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Chef led dinner",
    image: "/assets/images/gallery/dinner.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Evening plates",
    image: "/assets/images/gallery/dinner2.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Dinner service details",
    image: "/assets/images/gallery/dinner2.jpg",
    className: "md:col-span-4 md:row-span-1",
  },
  {
    title: "Table finish",
    image: "/assets/images/gallery/dinner3.jpg",
    className: "md:col-span-3 md:row-span-1",
  },
  {
    title: "Friends around food",
    image: "/assets/images/gallery/friends.jpg",
    className: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Romantic private dinner",
    image: "/assets/images/gallery/romantic.jpg",
    className: "md:col-span-3 md:row-span-1",
  }
];

export function EventsGallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[var(--color-charcoal)] px-5 py-24 text-[var(--color-foreground)] sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-screen-2xl">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-gold)]">
              Event Gallery
            </p>
            <h2 className="mt-5 text-4xl font-light uppercase tracking-[0.1em] text-white sm:text-5xl md:text-6xl font-[family:var(--font-accent-family)]">
              Moments We&apos;ve Served
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Weddings, private dinners, office celebrations and live pop-ups, all carried by the
              same Jamaican warmth and fire-led cooking.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 md:auto-rows-[16rem] md:grid-cols-12 md:grid-flow-dense lg:gap-6">
          {galleryItems.map((item, index) => (
            <Reveal
              key={`${item.title}-${item.image}-${index}`}
              as="figure"
              delay={index * 70}
              className={[
                "group relative isolate min-h-80 overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-[0_18px_40px_rgba(0,0,0,0.18)] md:min-h-0",
                item.className,
              ].join(" ")}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1279px) 50vw, 40vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.04)_0%,rgba(6,6,6,0.08)_38%,rgba(6,6,6,0.58)_100%)]" />
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(135deg,rgba(255,209,0,0.1),transparent_34%,transparent_78%,rgba(0,150,57,0.12))]" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-white/88 transition duration-300 group-hover:text-[var(--color-gold)]">
                  {item.title}
                </p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
