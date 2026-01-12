import { NextResponse, type NextRequest } from "next/server";
import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "@/server/auth";

// Route khusus admin yang ingin diproteksi
const protectedRoutes = ["/admin"];

export default async function authMiddleware(request: NextRequest) {
  const pathName = request.nextUrl.pathname;

  // Cek apakah route adalah /admin atau turunannya
  const isProtected = protectedRoutes.some(
    (route) => pathName === route || pathName.startsWith(route + "/")
  );

  // Jika bukan route admin → langsung lanjutkan (tidak diproteksi)
  if (!isProtected) {
    return NextResponse.next();
  }

  // Ambil session dari Better Auth
  const { data: session } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: process.env.BETTER_AUTH_URL || request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") ?? "",
      },
    }
  );

  // Jika belum login → redirect ke signin
  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*", // hanya match /admin dan turunannya
  ],
};
