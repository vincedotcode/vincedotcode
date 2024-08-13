// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getValidSubdomain } from '@/lib/subdomain'; // Adjust the path to where you place this utility function

// RegExp to skip public files (images, styles, etc.)
const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Skip processing for public files and Next.js assets
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

  const host = req.headers.get('host') || '';
  const subdomain = getValidSubdomain(host);

  if (subdomain) {
    // Rewrite the URL path to include the subdomain
    url.pathname = `/${subdomain}${url.pathname}`;
    console.log(`Rewriting ${url.pathname} to /${subdomain}${url.pathname}`);
  }

  return NextResponse.rewrite(url);
}
