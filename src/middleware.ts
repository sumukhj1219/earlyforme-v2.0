import { type NextRequest, NextResponse } from 'next/server';

function extractSubdomain(request: NextRequest): string | null {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];

  if (hostname?.endsWith(".earlyfor.me")) {
    const parts = hostname.split(".");
    const subdomain = parts[0];
    return subdomain === "earlyfor.me" ? null : subdomain as string;
  }

  if (hostname?.endsWith(".localhost")) {
    const match = hostname.match(/^([^.]+)\.localhost$/);
    return match?.[1] || null;
  }

  return null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const subdomain = extractSubdomain(request);

  console.log("Middleware running → host:", request.headers.get("host"));
  console.log("Detected subdomain:", subdomain);

  if (!subdomain) return NextResponse.next();

  const ignoredPaths = ['/api', '/login', '/signup', '/admin', '/create'];
  if (ignoredPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  if (pathname === '/') {
    return NextResponse.rewrite(new URL(`/s/${subdomain}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/(.*)'],
};
