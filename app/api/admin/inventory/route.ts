import { NextResponse } from "next/server";

import { getAdminSession } from "@/app/lib/admin-auth";
import { inventoryItemSchema } from "@/app/lib/inventory-schema";
import { withInventoryStatus } from "@/app/lib/inventory";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await session.supabase
    .from("inventory_items")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: (data ?? []).map(withInventoryStatus) });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = inventoryItemSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Check the item details and try again." }, { status: 400 });
  }

  const payload = {
    ...parsed.data,
    image_url: parsed.data.image_url || null,
    expires_at: parsed.data.expires_at || null,
    created_by: session.user.id,
  };
  const { data, error } = await session.supabase
    .from("inventory_items")
    .insert(payload)
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ item: withInventoryStatus(data) }, { status: 201 });
}
