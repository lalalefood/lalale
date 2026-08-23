"use client";

import "@/app/styles/dish-page-style.css";
import wood from "@/public/assets/images/menu_page/wood-texture.jpg";
import heroSteak from "@/public/assets/images/menu_page/example_hero-steak.jpg";

import { useMemo, useState } from "react";
import { Category, dishes } from "../utils/menu-items";
import Image from "next/image";



const categoryOrder: Category[] = [
  "CHICKEN",
  "MEAT",
  "RICE",
  "VEGAN",
  "FESTIVALS",
  "DESSERTS",
  "DRINKS",
];

export default function MenuPage() {
  const categories = useMemo(
    () => categoryOrder.filter((category) => dishes.some((dish) => dish.categories.includes(category))),
    [],
  );
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0] ?? "CHICKEN");

  const filteredDishes = useMemo(
    () => dishes.filter((dish) => dish.categories.includes(activeCategory)),
    [activeCategory],
  );

  return (
    <main
      className="bg-wood min-h-screen text-foreground"
      style={{ ["--wood-image" as string]: `url(${wood.src})` }}
    >
      {/* Intro */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="bg-card/70 border border-border p-8 backdrop-blur-sm">
          <p className="font-script text-3xl text-gold">Taste a bit of Jamaica</p>
          <h1 className="font-display mt-4 text-3xl leading-tight tracking-[0.15em] uppercase md:text-4xl">
            Food Production & Catering
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Discover bold Jamaican dishes made for private dining, large-scale food production
            and full-service catering with unmistakable island character.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            From signature plates to event-ready menus, we bring authentic flavour, reliable
            service and warm hospitality to every table and every celebration.
          </p>
        </div>
        <Image
          src={heroSteak}
          alt="Cortes de carne grelhada em tábua de madeira com tomates, alho e cutelo"
          width={1536}
          height={1024}
          className="plate-glow w-full object-cover"
          priority
        />
      </section>

      {/* Menu title */}
      <section className="mx-auto flex max-w-6xl flex-wrap items-end justify-center gap-6 px-6 pt-10">
        <h2 className="font-display text-5xl tracking-[0.2em] uppercase md:text-6xl">Menu</h2>
        <span className="font-script mb-3 flex-1 border-b border-border pb-2 text-xl text-gold">
          o menu completo
        </span>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-10">
        <div className="menu-category-switch">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
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
        <div key={activeCategory} className="menu-category-panel">
          {filteredDishes.map((dish) => (
            <article
              key={`${activeCategory}-${dish.title}`}
              className="grid items-center gap-8 py-10 md:grid-cols-2 md:gap-14 md:py-14"
            >
              <div
                className={`w-full max-w-md ${
                  dish.align === "right" ? "md:order-1 md:ml-auto" : "md:order-2 md:mr-auto"
                }`}
              >
                <Image
                  src={dish.image}
                  alt={dish.title}
                  width={1024}
                  height={1024}
                  className="plate-glow aspect-square h-auto w-full object-contain"
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
            Leve a Lalale para o seu evento
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Oferecemos experiências gastronômicas personalizadas para eventos corporativos, festas,
            casamentos e celebrações especiais. Nosso chef e equipe cuidam de cada detalhe para
            levar o sabor marcante da Lalale até você.
          </p>
          <a
            href="mailto:contato@lalale.com"
            className="font-display mt-8 inline-block border border-gold px-8 py-3 text-sm tracking-[0.2em] uppercase text-gold transition-colors hover:bg-gold hover:text-background"
            style={{ ["--gold" as string]: "var(--gold)" }}
          >
            Fale com a gente
          </a>
        </div>
      </section>

      <footer className="pb-24 text-center">
        <p className="font-script text-4xl text-foreground">it is delicious</p>
      </footer>
    </main>
  );
}
