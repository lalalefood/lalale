"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Boxes,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  ReceiptText,
  Search,
  ShoppingCart,
  Tags,
  X,
} from "lucide-react";

const navigation = [
  { label: "Dashboard", icon: LayoutDashboard, available: false },
  { label: "Items", icon: Boxes, available: true },
  { label: "Tags", icon: Tags, available: false },
  { label: "Reports", icon: BarChart3, available: false },
  { label: "Purchasing", icon: ShoppingCart, available: false },
  { label: "Invoicing", icon: ReceiptText, available: false },
];

type AdminSidebarProps = {
  name: string;
};

export function AdminSidebar({ name }: AdminSidebarProps) {
  const [open, setOpen] = useState(false);

  const content = (
    <>
      <div className="flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-10 place-items-center rounded-xl bg-[#FECF02] font-[family:var(--font-accent-family)] text-lg text-[#3B1B02]">L</span>
          <span>
            <strong className="block font-[family:var(--font-accent-family)] text-lg tracking-[0.08em] text-[#F3E8DE] uppercase">Lalale</strong>
            <small className="block text-[0.58rem] font-bold tracking-[0.26em] text-[#F3E8DE]/48 uppercase">Operations</small>
          </span>
        </Link>
        <button type="button" className="rounded-full p-2 text-[#F3E8DE] lg:hidden" onClick={() => setOpen(false)} aria-label="Close menu">
          <X className="size-5" />
        </button>
      </div>

      <label className="mt-9 flex h-11 items-center gap-3 rounded-2xl border border-[#F3E8DE]/14 bg-black/12 px-4 text-[#F3E8DE]/58 focus-within:border-[#FECF02]">
        <Search className="size-4" />
        <input type="search" placeholder="Search here" className="min-w-0 flex-1 bg-transparent text-xs text-[#F3E8DE] outline-none placeholder:text-[#F3E8DE]/38" />
      </label>

      <nav className="mt-7 grid grid-cols-2 gap-3" aria-label="Admin navigation">
        {navigation.map(({ label, icon: Icon, available }) => (
          <button
            key={label}
            type="button"
            disabled={!available}
            title={available ? label : `${label} — coming soon`}
            className={`relative flex min-h-28 flex-col items-center justify-center gap-3 rounded-2xl border text-xs transition-all ${
              available
                ? "border-[#FECF02] bg-[#FECF02] text-[#3B1B02] shadow-lg shadow-black/20"
                : "border-white/8 bg-white/6 text-[#F3E8DE]/58 disabled:cursor-not-allowed"
            }`}
          >
            <Icon className="size-5" />
            <span>{label}</span>
            {!available ? <LockKeyhole className="absolute top-3 right-3 size-3 opacity-35" /> : null}
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#F3E8DE]/12 pt-5">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-[#009A39] text-xs font-bold text-white">
            {name.slice(0, 1).toUpperCase()}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-bold text-[#F3E8DE]">{name}</p>
            <p className="text-[0.62rem] tracking-[0.16em] text-[#F3E8DE]/45 uppercase">Administrator</p>
          </div>
        </div>
        <form action="/api/auth/logout" method="post" className="mt-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-full border border-[#F3E8DE]/14 py-2.5 text-[0.64rem] font-bold tracking-[0.2em] text-[#F3E8DE]/72 uppercase transition-colors hover:border-[#FECF02] hover:text-[#FECF02]">
            <FileText className="size-3.5" /> Sign out
          </button>
        </form>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-40 grid size-11 place-items-center rounded-full bg-[#3B1B02] text-[#FECF02] shadow-xl lg:hidden"
        aria-label="Open admin menu"
      >
        <Menu className="size-5" />
      </button>
      <aside className="sticky top-0 hidden h-screen w-[18.5rem] shrink-0 flex-col border-r border-black/20 bg-[#3B1B02] p-6 lg:flex">
        {content}
      </aside>
      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button type="button" className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="Close menu overlay" />
          <aside className="relative flex h-full w-[19rem] max-w-[88vw] flex-col bg-[#3B1B02] p-6 shadow-2xl">
            {content}
          </aside>
        </div>
      ) : null}
    </>
  );
}
