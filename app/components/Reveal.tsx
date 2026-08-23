"use client"

import type { ElementType, ReactNode } from "react";
import { cn } from "@/app/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "zoom";
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
}: RevealProps) {
  return (
    <Tag
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  index,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  index?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <Reveal>
        <p
          className={cn(
            "eyebrow flex items-center gap-3",
            align === "center" ? "justify-center" : "justify-start",
          )}
        >
          {index ? <span className="text-jade">{"//"} {index}</span> : null}
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={120}>
        <h2 className="mt-4 text-4xl leading-[0.95] sm:text-5xl md:text-6xl">{title}</h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={220}>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
