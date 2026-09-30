import { redirect } from "next/navigation";

import { getAdminSession } from "@/app/lib/admin-auth";
import { AdminSidebar } from "./AdminSidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getAdminSession();

  if (!session) redirect("/login?next=/admin");

  return (
    <div className="flex min-h-screen bg-[#F3E8DE] font-[family:var(--font-body-family)] text-[#3B1B02]">
      <AdminSidebar name={session.profile.full_name || session.user.email || "Admin"} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
