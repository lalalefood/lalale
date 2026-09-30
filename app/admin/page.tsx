import type { Metadata } from "next";

import { getAdminSession } from "@/app/lib/admin-auth";
import { withInventoryStatus, type InventoryItem } from "@/app/lib/inventory";
import { InventoryDashboard } from "./InventoryDashboard";

export const metadata: Metadata = {
  title: "Inventory | LALALE Admin",
  description: "LALALE Foods inventory management dashboard.",
};

export default async function AdminPage() {
  const session = await getAdminSession();
  let initialItems: InventoryItem[] = [];
  let setupError = "";

  if (session) {
    const { data, error } = await session.supabase
      .from("inventory_items")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) setupError = error.message;
    else initialItems = (data ?? []).map(withInventoryStatus);
  }

  const today = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <InventoryDashboard
      initialItems={initialItems}
      setupError={setupError}
      adminName={session?.profile.full_name || session?.user.email || "Admin"}
      today={today}
    />
  );
}
