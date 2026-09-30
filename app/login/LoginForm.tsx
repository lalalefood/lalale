"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Eye, EyeOff, LoaderCircle, LockKeyhole, Mail } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    const result = (await response.json()) as { error?: string };

    if (!response.ok) {
      setError(result.error ?? "Unable to sign in. Please try again.");
      setIsSubmitting(false);
      return;
    }

    const next = searchParams.get("next");
    router.replace(next?.startsWith("/admin") ? next : "/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-9 space-y-5">
      <div className="space-y-2">
        <label htmlFor="email" className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#3B1B02]/62">
          Email address
        </label>
        <div className="group flex items-center gap-3 border-b border-[#3B1B02]/20 py-3 transition-colors focus-within:border-[#009A39]">
          <Mail className="size-4 text-[#009A39]" aria-hidden="true" />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="admin@lalale.co.uk"
            className="w-full bg-transparent text-sm text-[#3B1B02] outline-none placeholder:text-[#3B1B02]/28"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#3B1B02]/62">
          Password
        </label>
        <div className="group flex items-center gap-3 border-b border-[#3B1B02]/20 py-3 transition-colors focus-within:border-[#009A39]">
          <LockKeyhole className="size-4 text-[#009A39]" aria-hidden="true" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            minLength={8}
            placeholder="Enter your password"
            className="w-full bg-transparent text-sm text-[#3B1B02] outline-none placeholder:text-[#3B1B02]/28"
          />
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="rounded-full p-1 text-[#3B1B02]/45 transition-colors hover:text-[#3B1B02]"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>

      {error ? (
        <p role="alert" className="border-l-2 border-[#FECF02] pl-3 text-xs leading-5 text-[#3B1B02]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex h-13 w-full items-center justify-between rounded-full bg-[#FECF02] px-6 text-xs font-bold tracking-[0.18em] text-[#3B1B02] uppercase transition-all hover:bg-[#009A39] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span>{isSubmitting ? "Signing in" : "Enter the kitchen"}</span>
        {isSubmitting ? (
          <LoaderCircle className="size-4 animate-spin" />
        ) : (
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}
