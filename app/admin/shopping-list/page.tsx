import type { Metadata } from "next";

import { getAdminSession } from "@/app/lib/admin-auth";
import type { ShoppingListItem } from "@/app/lib/shopping-list";
import { ShoppingListDashboard } from "./ShoppingListDashboard";

export const metadata: Metadata = {
  title: "Shopping List | LALALE Admin",
  description: "LALALE Foods purchasing list.",
};

export default async function ShoppingListPage() {
  const session = await getAdminSession();
  let initialItems: ShoppingListItem[] = [];
  let setupError = "";

  if (session) {
    const { data, error } = await session.supabase
      .from("shopping_list_items")
      .select("*")
      .order("purchased", { ascending: true })
      .order("created_at", { ascending: false });
    if (error) setupError = error.message;
    else initialItems = data ?? [];
  }

  return <ShoppingListDashboard initialItems={initialItems} setupError={setupError} />;
}
