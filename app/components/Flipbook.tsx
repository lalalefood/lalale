"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import type { PageFlip } from "page-flip";

/** A page is either an image URL or arbitrary JSX. */
export type FlipbookPage = string | ReactNode;

type FlipbookProps = {
  /** Pages for the desktop spread (two pages side by side). */
  pages: FlipbookPage[];
  /** Pages for the mobile single-page view. Falls back to `pages`. */
  mobilePages?: FlipbookPage[];
  /** Single page size ratio (width / height) on desktop. Default 16/9. */
  desktopRatio?: number;
  /** Single page size ratio (width / height) on mobile. Default 9/16. */
  mobileRatio?: number;
  /** Viewport width below which the single page view is used. */
  mobileBreakpoint?: number;
  label?: string;
};

function useIsMobile(breakpoint: number) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return isMobile;
}

export function Flipbook({
  pages,
  mobilePages,
  desktopRatio = 16 / 9,
  mobileRatio = 9 / 16,
  mobileBreakpoint = 768,
  label = "Flipbook",
}: FlipbookProps) {
  const isMobile = useIsMobile(mobileBreakpoint);
  const hostRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<PageFlip | null>(null);
  const [current, setCurrent] = useState(0);

  const activePages = isMobile && mobilePages ? mobilePages : pages;
  const ratio = isMobile ? mobileRatio : desktopRatio;
  const total = activePages.length;

  useEffect(() => {
    if (isMobile === null || !hostRef.current) return;
    const host = hostRef.current;
    let cancelled = false;
    let book: PageFlip | null = null;
    const roots: Root[] = [];
    const stage = document.createElement("div");
    stage.style.width = "100%";
    stage.style.height = "100%";
    host.appendChild(stage);

    (async () => {
      const { PageFlip } = await import("page-flip");
      if (cancelled) return;

      const els = activePages.map((content, i) => {
        const el = document.createElement("div");
        el.className = "flipbook-page";
        el.setAttribute("aria-label", `Page ${i + 1}`);
        if (typeof content === "string") {
          const img = document.createElement("img");
          img.src = content;
          img.alt = `Page ${i + 1}`;
          img.draggable = false;
          img.decoding = "async";
          el.appendChild(img);
        } else {
          const root = createRoot(el);
          root.render(content);
          roots.push(root);
        }
        stage.appendChild(el);
        return el;
      });

      const baseH = 1000;
      book = new PageFlip(stage, {
        width: Math.round(baseH * ratio),
        height: baseH,
        size: "stretch",
        minWidth: 200,
        maxWidth: 3000,
        minHeight: 200,
        maxHeight: 3000,
        usePortrait: isMobile,
        showCover: !isMobile,
        drawShadow: true,
        maxShadowOpacity: 0.55,
        flippingTime: 900,
        mobileScrollSupport: false,
        useMouseEvents: true,
        clickEventForward: false,
        autoSize: true,
        startPage: 0,
      });
      book.loadFromHTML(els);
      book.on("flip", (e) => setCurrent(e.data as number));
      bookRef.current = book;
      setCurrent(0);
    })();

    return () => {
      cancelled = true;
      bookRef.current = null;
      try {
        book?.destroy();
      } catch {}
      // page-flip's destroy removes its own DOM; unmount React roots after.
      setTimeout(() => roots.forEach((r) => r.unmount()), 0);
      stage.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, activePages, ratio]);

  const prev = useCallback(() => bookRef.current?.flipPrev("bottom"), []);
  const next = useCallback(() => bookRef.current?.flipNext("bottom"), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const spread = !isMobile;
  // On desktop the cover sits alone; the rest are spreads.
  const shown = spread
    ? current === 0
      ? "1"
      : `${current + 1}${current + 2 <= total ? `–${current + 2}` : ""}`
    : `${current + 1}`;

  return (
    <div className="flipbook-root" role="region" aria-label={label}>
      <div
        className="flipbook-frame"
        style={{
          // spread = two pages wide; single = one page
          aspectRatio: spread ? ratio * 2 : ratio,
          maxWidth: spread
            ? "min(100%, calc((100svh - 12rem) * " + ratio * 2 + "))"
            : "min(100%, calc((100svh - 11rem) * " + ratio + "))",
          width: "100%",
        }}
      >
        <div ref={hostRef} className="flipbook-host" />
        {isMobile === null && <div className="flipbook-loading" />}
      </div>

      <div className="flipbook-controls">
        <button type="button" onClick={prev} disabled={current === 0} aria-label="Previous page">
          <span aria-hidden>←</span>
        </button>
        <p aria-live="polite">
          <span>{shown}</span>
          <i /> {total}
        </p>
        <button
          type="button"
          onClick={next}
          disabled={current >= total - 1}
          aria-label="Next page"
        >
          <span aria-hidden>→</span>
        </button>
      </div>

      <style>{`
        .flipbook-root { display:flex; flex-direction:column; align-items:center; gap:1.25rem; width:100%; }
        .flipbook-frame { position:relative; margin-inline:auto; filter: drop-shadow(0 40px 50px rgba(0,0,0,.45)); }
        .flipbook-host, .flipbook-host > div { width:100%; height:100%; }
        .flipbook-loading { position:absolute; inset:0; border-radius:6px; background:rgba(255,255,255,.04); animation: fbpulse 1.4s ease-in-out infinite; }
        @keyframes fbpulse { 50% { opacity:.4 } }
        .flipbook-page { background:#fff; overflow:hidden; }
        .flipbook-page img { display:block; width:100%; height:100%; object-fit:cover; user-select:none; -webkit-user-drag:none; pointer-events:none; }
        .flipbook-controls { display:flex; align-items:center; gap:1.5rem; color:#D9AF75; }
        .flipbook-controls p { min-width:7.5rem; text-align:center; font-family:var(--font-accent-family, 'Cinzel', serif); letter-spacing:.28em; font-size:.8rem; color:rgba(255,255,255,.7); }
        .flipbook-controls p span { color:#D9AF75; font-size:1rem; }
        .flipbook-controls p i { display:inline-block; width:1.4rem; height:1px; background:rgba(217,175,117,.5); vertical-align:middle; margin:0 .6rem; }
        .flipbook-controls button { width:3.25rem; height:3.25rem; border-radius:999px; border:1px solid rgba(217,175,117,.45); background:rgba(255,255,255,.04); color:#D9AF75; font-size:1.25rem; cursor:pointer; transition: background .2s, transform .2s, border-color .2s, opacity .2s; }
        .flipbook-controls button:hover:not(:disabled) { background:rgba(217,175,117,.16); border-color:#D9AF75; transform:translateY(-2px); }
        .flipbook-controls button:disabled { opacity:.25; cursor:default; }
        .flipbook-controls button:focus-visible { outline:2px solid #D9AF75; outline-offset:3px; }
      `}</style>
    </div>
  );
}
