"use client"
import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view.
 * Pair with the `reveal` / `reveal-zoom` utility classes.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;

    const node = ref.current;
    if (!node) return;
    let frameId = 0;
    let fallbackTimeout = 0;
    let cancelled = false;

    const reveal = () => {
      if (cancelled) return;

      frameId = window.requestAnimationFrame(() => {
        setVisible(true);
      });
    };

    const revealIfInViewport = () => {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const isInViewport = rect.top <= viewportHeight * 1.02 && rect.bottom >= -80;

      if (isInViewport) {
        reveal();
        return true;
      }

      return false;
    };

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return () => window.cancelAnimationFrame(frameId);
    }

    if (revealIfInViewport()) {
      return;
    }

    // Never leave sections stuck at opacity 0 if the observer misses.
    fallbackTimeout = window.setTimeout(reveal, 450);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            reveal();
            observer.disconnect();
          }
        }
      },
      {
        threshold: Math.min(threshold, 0.01),
        rootMargin: "12% 0px 12% 0px",
      },
    );

    observer.observe(node);
    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearTimeout(fallbackTimeout);
      window.cancelAnimationFrame(frameId);
    };
  }, [threshold, visible]);

  return { ref, visible } as const;
}
