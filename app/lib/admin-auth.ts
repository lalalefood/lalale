import { cookies } from "next/headers";
import { cache } from "react";

import { createClient } from "@/app/utils/supabase/server";

export const getAdminSession = cache(async () => {
  const supabase = createClient(await cookies());
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, full_name, role")
    .eq("id", user.id)
    .single();

  if (profileError || profile?.role !== "admin") {
    return null;
  }

  return { supabase, user, profile };
});
