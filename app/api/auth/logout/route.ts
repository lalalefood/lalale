import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { createClient } from "@/app/utils/supabase/server";

export async function POST(request: Request) {
  const supabase = createClient(await cookies());
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL("/login", request.url), { status: 303 });
}
