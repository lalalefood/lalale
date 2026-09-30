import type { Metadata, Viewport } from "next";
import { redirect } from "next/navigation";

import { getAdminSession } from "@/app/lib/admin-auth";
import { AdminPwa } from "./AdminPwa";
import { AdminSidebar } from "./AdminSidebar";

export const metadata: Metadata = {
  applicationName: "LALALE Admin",
  title: { default: "LALALE Admin", template: "%s | LALALE Admin" },
  description: "Inventory and purchasing operations for LALALE Foods.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LALALE Admin",
  },
  icons: {
    icon: "/assets/images/logos/pwa_logo.png",
    apple: "/assets/images/logos/pwa_logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#3B1B02",
  viewportFit: "cover",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  if (!session) redirect("/login?next=/admin");

  return (
    <div className="flex min-h-screen bg-[#F3E8DE] font-[family:var(--font-body-family)] text-[#3B1B02]">
      <AdminPwa />
      <AdminSidebar
        name={session.profile.full_name || session.user.email || "Admin"}
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
