import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export function middleware(request) {
  const cookie = cookies().get("isLoggedIn");
  console.log("middleware activated, cookie: ", cookie);
  if (cookie?.value !== "true") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - login (to avoid redirect loop)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
};
