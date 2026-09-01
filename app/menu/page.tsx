"use client";

import "@/app/styles/dish-page-style.css";
import wood from "@/public/assets/images/menu_page/wood-texture.jpg";
// import heroSteak from "@/public/assets/images/menu_page/example_hero-steak.jpg";
import heroSteak from "@/public/assets/images/menu_page/max.jpg";

import { useMemo, useState } from "react";
import { Category, dishes } from "../utils/menu-items";
import Image from "next/image";
import Link from "next/link";



const categoryOrder: Category[] = [
  "CHICKEN",
  "MEAT",
  "RICE",
  "VEGAN",
  "FESTIVALS",
  "DESSERTS",
  "DRINKS",
  "SAUCES"
];

export default function MenuPage() {
  const categories = useMemo(
    () => categoryOrder.filter((category) => dishes.some((dish) => dish.categories.includes(category))),
    [],
  );
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0] ?? "CHICKEN");
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("left");

  const filteredDishes = useMemo(
    () => dishes.filter((dish) => dish.categories.includes(activeCategory)),
    [activeCategory],
  );

  const handleCategoryChange = (nextCategory: Category) => {
    if (nextCategory === activeCategory) return;

    const currentIndex = categories.indexOf(activeCategory);
    const nextIndex = categories.indexOf(nextCategory);

    setSlideDirection(nextIndex > currentIndex ? "left" : "right");
    setActiveCategory(nextCategory);
  };

  return (
    <main
      className="bg-wood min-h-screen text-foreground"
      style={{ ["--wood-image" as string]: `url(${wood.src})` }}
    >
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link
          href="/food"
          className="inline-flex items-center gap-3 text-sm tracking-[0.18em] text-white/68 transition hover:text-[var(--gold)]"
        >
          <span aria-hidden className="text-base leading-none">←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Intro */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:items-stretch md:grid-cols-2 md:py-28">
        <div className="bg-card/70 border border-border p-8 backdrop-blur-sm">
          <p className="font-script text-3xl text-gold">Taste a bit of Jamaica</p>
          <h1 className="font-display mt-4 text-3xl leading-tight tracking-[0.15em] uppercase md:text-4xl">
            Food Production & Catering
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Born in the green hills of Portland, Jamaica, our menu brings back true jerk chicken.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            With deep, traditional spicing, each flavour reflects the land, climate, and slow fire passed down through generations, delivering a bold, authentic, and unique heat, far removed from the ordinary.
          </p>
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[1.5rem] md:h-full">
          <Image
            src={heroSteak}
            alt="Foto do fundador da Lalale Max"
            fill
            className="plate-glow object-cover object-[center_18%]"
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Menu title */}
      <section className="mx-auto flex max-w-6xl flex-wrap items-end justify-center gap-6 px-6 pt-10">
        <h2 className="font-display text-5xl tracking-[0.2em] uppercase md:text-6xl">Menu</h2>
        <span className="font-script mb-3 flex-1 border-b border-border pb-2 text-xl text-gold">
          The full menu
        </span>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="menu-category-switch">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={[
                "menu-category-pill",
                activeCategory === category ? "is-active" : "",
              ].join(" ")}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Dishes */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div
          key={activeCategory}
          className={`menu-category-panel menu-category-panel--${slideDirection}`}
        >
          {filteredDishes.map((dish) => (
            <article
              key={`${activeCategory}-${dish.title}`}
              className="grid items-center gap-8 py-10 md:grid-cols-2 md:gap-14 md:py-14"
            >
              <div
                className={`w-full max-w-md overflow-hidden rounded-[1.5rem] ${
                  dish.align === "right" ? "md:order-1 md:ml-auto" : "md:order-2 md:mr-auto"
                }`}
              >
                <Image
                  src={dish.image}
                  alt={dish.title}
                  width={1024}
                  height={1024}
                  className="plate-glow aspect-square h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
              <div className={dish.align === "right" ? "md:order-2" : "md:order-1 md:text-right"}>
                <h3 className="font-display text-xl tracking-[0.22em] text-gold uppercase md:text-2xl">
                  {dish.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground md:inline-block">
                  {dish.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Events CTA */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="bg-card/70 border border-border p-8 text-center backdrop-blur-sm md:p-12">
          <p className="font-script text-3xl text-gold">lalale</p>
          <h2 className="font-display mt-4 text-2xl tracking-[0.15em] uppercase md:text-3xl">
            we bring the experience to you.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We offer bespoke culinary experiences tailored for Private Parties, Corporate Events, Concerts, Fine Dining, Office Lunches, Weddings, Funerals, Chef’s Tables, and School Dinners. Our head chef and dedicated team meticulously oversee every detail to bring the distinctive flavours of Jamaica directly to your event.
          </p>
          <a
            href="/food#contact-form"
            className="font-display mt-8 inline-block border border-gold px-8 py-3 text-sm tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold hover:text-background"
            style={{ ["--gold" as string]: "var(--gold)" }}
          >
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
