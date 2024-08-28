// middleware.mjs
import { NextResponse } from 'next/server';

export function middleware(request) {
  const isAuthenticated = request.cookies.get('authToken'); // Assuming you use a cookie to store authentication

  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
