import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z } from "zod";

import { createClient } from "@/app/utils/supabase/server";

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8).max(128),
});

export async function POST(request: Request) {
  const parsed = loginSchema.safeParse(await request.json().catch(() => null));

  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email and password." }, { status: 400 });
  }

  const supabase = createClient(await cookies());
  const { data, error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error || !data.user) {
    return NextResponse.json({ error: "Email or password is incorrect." }, { status: 401 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .single();

  if (profile?.role !== "admin") {
    await supabase.auth.signOut();
    return NextResponse.json({ error: "This account does not have admin access." }, { status: 403 });
  }

  return NextResponse.json({ ok: true });
}
