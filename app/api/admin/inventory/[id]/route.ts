import { NextResponse } from "next/server";

import { getAdminSession } from "@/app/lib/admin-auth";
import { inventoryItemSchema } from "@/app/lib/inventory-schema";
import { withInventoryStatus } from "@/app/lib/inventory";

type InventoryRouteContext = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, context: InventoryRouteContext) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const parsed = inventoryItemSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the item details and try again." }, { status: 400 });
  }

  const payload = {
    ...parsed.data,
    image_url: parsed.data.image_url || null,
    expires_at: parsed.data.expires_at || null,
    updated_at: new Date().toISOString(),
  };
  const { data, error } = await session.supabase
    .from("inventory_items")
    .update(payload)
    .eq("id", id)
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ item: withInventoryStatus(data) });
}

export async function DELETE(_request: Request, context: InventoryRouteContext) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const { error } = await session.supabase.from("inventory_items").delete().eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
