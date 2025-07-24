import { type NextRequest, NextResponse } from 'next/server';
import { rootDomain } from '~/lib/utils';

function extractSubdomain(request: NextRequest): string | null {
  const url = request.url;
  const host = request.headers.get('host') || '';
  const hostname = host.split(':')[0];

  if (url.includes('localhost') || url.includes('127.0.0.1')) {
    const match = hostname?.match(/^([^.]+)\.localhost$/);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }

  if (hostname?.includes('---') && hostname.endsWith('.vercel.app')) {
    const [sub] = hostname.split('---');
    return sub || null;
  }

  const rootDomainFormatted = rootDomain.split(':')[0];
  const isSubdomain =
    hostname !== rootDomainFormatted &&
    hostname !== `www.${rootDomainFormatted}` &&
    hostname?.endsWith(`.${rootDomainFormatted}`);

  return isSubdomain
    ? hostname?.replace(`.${rootDomainFormatted}`, '') as string
    : null;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const subdomain = extractSubdomain(request);

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
  matcher: ['/((?!_next|favicon.ico|static|.*\\..*).*)'],
};
