import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";

import { LoginForm } from "./LoginForm";
import { getAdminSession } from "@/app/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin Login | LALALE Foods",
  description: "Secure access to the LALALE Foods administration area.",
};

export default async function LoginPage() {
  const session = await getAdminSession();

  if (session) redirect("/admin");

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/assets/images/background_group.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.72)_52%,rgba(0,0,0,0.82)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-7 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-xs tracking-[0.18em] text-[#F3E8DE]/70 uppercase transition-colors hover:text-[#FECF02]">
            <ArrowLeft className="size-4" />
            Back to site
          </Link>
          <span className="font-[family:var(--font-accent-family)] text-lg tracking-[0.24em] text-[#FECF02] uppercase">
            Lalale
          </span>
        </header>

        <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="hidden max-w-xl lg:block">
            <p className="text-[0.68rem] font-bold tracking-[0.36em] text-[#FECF02] uppercase">
              LALALE Operations
            </p>
            <h1 className="mt-5 font-[family:var(--font-accent-family)] text-6xl leading-[1.04] text-[#F3E8DE] uppercase">
              Stock, service<br />and standards.
            </h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-[#F3E8DE]/65">
              One private workspace for the team behind every kitchen, event and unforgettable plate.
            </p>
          </section>

          <section className="relative w-full max-w-md justify-self-end overflow-hidden rounded-[2rem] border border-white/20 bg-[#F3E8DE]/96 p-7 text-[#3B1B02] shadow-2xl shadow-black/45 backdrop-blur-xl sm:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#009A39_0_33%,#FECF02_33%_66%,#3B1B02_66%)]" />
            <p className="text-[0.68rem] font-bold tracking-[0.3em] text-[#009A39] uppercase">Admin access</p>
            <h2 className="mt-3 font-[family:var(--font-accent-family)] text-3xl text-[#3B1B02] normal-case">
              Welcome back.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#3B1B02]/55">Sign in with your authorised LALALE account.</p>
            <Suspense fallback={<div className="mt-9 h-72 animate-pulse rounded-3xl bg-[#3B1B02]/5" />}>
              <LoginForm />
            </Suspense>
            <p className="mt-7 text-center text-[0.68rem] leading-5 text-[#3B1B02]/42">
              Access is restricted to approved administrators.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
