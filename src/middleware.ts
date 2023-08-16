import { NextResponse, NextRequest } from "next/server";
import { CK_USER } from "./constants";
import { ROUTES } from "./constants/routes";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === ROUTES.signin;

  const token = request.cookies.get(CK_USER)?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(ROUTES.default, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL(ROUTES.signin, request.nextUrl));
  }
}

export const config = {
  matcher: ["/post", "/postwithserver", "/postwithISR"],
};
