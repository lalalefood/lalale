import { NextResponse } from "next/server";

import { getAdminSession } from "@/app/lib/admin-auth";
import { shoppingListItemSchema } from "@/app/lib/shopping-list";

export async function GET() {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await session.supabase
    .from("shopping_list_items")
    .select("*")
    .order("purchased", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ items: data ?? [] });
}

export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const parsed = shoppingListItemSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Check the item details and try again." }, { status: 400 });

  if (parsed.data.inventory_item_id) {
    const { data: existing } = await session.supabase
      .from("shopping_list_items")
      .select("id, quantity")
      .eq("inventory_item_id", parsed.data.inventory_item_id)
      .eq("purchased", false)
      .maybeSingle();

    if (existing) {
      const { data, error } = await session.supabase
        .from("shopping_list_items")
        .update({ quantity: Number(existing.quantity) + parsed.data.quantity })
        .eq("id", existing.id)
        .select("*")
        .single();
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ item: data });
    }
  }

  const { data, error } = await session.supabase
    .from("shopping_list_items")
    .insert({ ...parsed.data, created_by: session.user.id })
    .select("*")
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ item: data }, { status: 201 });
}
