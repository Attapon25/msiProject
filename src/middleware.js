import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const user = await getToken({
    req: request,
    secret: process.env.AUTH_SECRET,
  });

  // Get the pathname of the request
  const { pathname } = request.nextUrl;

  // if (pathname === "/services") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // If the pathname starts with /protected and the user is not an admin, redirect to the home page

  if (pathname.startsWith("/create") && (!user || user.role !== "member")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (pathname.startsWith("/edit") && user.role !== "member") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // Continue with the request if the user is an admin or the route is not protected
  return NextResponse.next();
}
