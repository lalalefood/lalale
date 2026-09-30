"use client";

import { useEffect, useState } from "react";
import { Download, Share2, X } from "lucide-react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function AdminPwa() {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(
    null,
  );
  const [showIosHelp, setShowIosHelp] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/admin-sw.js", {
        scope: "/admin/",
        updateViaCache: "none",
      });
    }

    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const iosHelpTimer =
      ios && !standalone
        ? window.setTimeout(() => setShowIosHelp(true), 0)
        : undefined;

    function capturePrompt(event: Event) {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    }
    function installed() {
      setInstallPrompt(null);
      setShowIosHelp(false);
    }

    window.addEventListener("beforeinstallprompt", capturePrompt);
    window.addEventListener("appinstalled", installed);
    return () => {
      if (iosHelpTimer) window.clearTimeout(iosHelpTimer);
      window.removeEventListener("beforeinstallprompt", capturePrompt);
      window.removeEventListener("appinstalled", installed);
    };
  }, []);

  async function install() {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;
    if (choice.outcome === "accepted") setInstallPrompt(null);
  }

  if (dismissed || (!installPrompt && !showIosHelp)) return null;

  return (
    <aside className="fixed right-4 bottom-4 z-40 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-2xl border border-[#FECF02]/30 bg-[#3B1B02] p-3 text-[#F3E8DE] shadow-2xl sm:right-6 sm:bottom-6">
      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#FECF02] text-[#3B1B02]">
        {showIosHelp ? (
          <Share2 className="size-4" />
        ) : (
          <Download className="size-4" />
        )}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-bold">Install LALALE Admin</p>
        {showIosHelp ? (
          <p className="mt-0.5 text-[0.65rem] text-[#F3E8DE]/65">
            Tap Share, then Add to Home Screen.
          </p>
        ) : (
          <button
            type="button"
            onClick={install}
            className="mt-0.5 text-[0.65rem] font-bold tracking-[0.1em] text-[#FECF02] uppercase"
          >
            Install on this device
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="grid size-8 place-items-center rounded-full text-[#F3E8DE]/55 hover:bg-white/8 hover:text-white"
        aria-label="Dismiss install prompt"
      >
        <X className="size-4" />
      </button>
    </aside>
  );
}
