import type { Metadata } from "next";
import Link from "next/link";
import { SchoolDinnersBook } from "./SchoolDinnersBook";

export const metadata: Metadata = {
  title: "Cooking Classes | LALALE Foods & Events",
  description: "Browse our Cooking Classes proposal, page by page.",
};

export default function SchoolDinnersPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_50%_30%,#3d3733_0%,#2D2926_55%,#221f1d_100%)] text-white">
      <section className="mx-auto flex min-h-screen max-w-screen-2xl flex-col px-3 py-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-6">
          <Link
            href="/food"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68 transition hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)]"
          >
            <span aria-hidden="true">←</span>
            <span>Back</span>
          </Link>
          <h1 className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#D9AF75]">
            Cooking Classes
          </h1>
        </header>
        <div className="flex flex-1 items-center justify-center py-4">
          <SchoolDinnersBook />
        </div>
      </section>
    </main>
  );
}
