import { NextResponse } from "next/server";

import { getAdminSession } from "@/app/lib/admin-auth";
import { withInventoryStatus, type InventoryItem } from "@/app/lib/inventory";
import { inventoryUsageSchema } from "@/app/lib/inventory-schema";

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = inventoryUsageSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Choose an item and enter a valid usage quantity." }, { status: 400 });
  }

  const { data, error } = await session.supabase
    .rpc("register_inventory_usage", {
      p_inventory_item_id: parsed.data.inventory_item_id,
      p_quantity: parsed.data.quantity,
      p_note: parsed.data.note || null,
    })
    .single();

  if (error) {
    const message = error.message.includes("Insufficient stock")
      ? "The usage quantity is greater than the available stock."
      : error.message;
    return NextResponse.json({ error: message }, { status: 400 });
  }

  return NextResponse.json({
    item: withInventoryStatus(data as Omit<InventoryItem, "status">),
  });
}
