import { type NextRequest, NextResponse } from 'next/server';
import { rootDomain } from '~/lib/utils';

function extractSubdomain(request: NextRequest): string | null {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0];

  if (hostname.endsWith(".vercel.app")) {
    const parts = hostname.split(".");
    const subdomain = parts[0];
    return subdomain !== "earlyforme-v2-0" ? subdomain : null;
  }

  if (hostname.endsWith(".localhost")) {
    const match = hostname.match(/^([^.]+)\.localhost$/);
    return match?.[1] || null;
  }

  const rootDomainFormatted = rootDomain.split(":")[0];
  const isSubdomain =
    hostname !== rootDomainFormatted &&
    hostname !== `www.${rootDomainFormatted}` &&
    hostname.endsWith(`.${rootDomainFormatted}`);

  return isSubdomain ? hostname.replace(`.${rootDomainFormatted}`, "") : null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const subdomain = extractSubdomain(request);

  console.log("Subdomain detected:", subdomain);

  if (!subdomain) return NextResponse.next();

  const ignoredPaths = ['/admin', '/create', '/login', '/signup', '/api'];
  if (ignoredPaths.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  if (pathname === '/') {
    return NextResponse.rewrite(new URL(`/s/${subdomain}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/((?!api|_next|favicon.ico|.*\\..*).*)'],
};
