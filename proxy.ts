import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/app/utils/supabase/middleware";

export async function proxy(request: NextRequest) {
  const { supabase, response } = createClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const sessionResponse = response();

  if (request.nextUrl.pathname.startsWith("/admin") && !user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    const redirectResponse = NextResponse.redirect(loginUrl);

    // Preserve refreshed or cleared Supabase cookies on the redirect response.
    sessionResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie);
    });

    return redirectResponse;
  }

  return sessionResponse;
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
