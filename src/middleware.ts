import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const APPLICATION_SUBDOMAINS = [
  "api",
  "admin",
  "account",
  "curso",
  "www",
  "staging",
  "hml",
  "dev",
  "beta",
];

const builderPaths = ["/"];

export async function middleware(req: NextRequest) {
  const applicationDomain = process.env.NEXT_PUBLIC_DOMAIN || "";

  const url = req.nextUrl;
  const { pathname } = url;
  const hostname =
    req.headers.get("host")?.replace("https://", "").replace("http://", "") ||
    process.env.NEXT_PUBLIC_HOST;

  const subdomain = hostname?.split(".")[0] || "";
  const isApplicationSubdomain = APPLICATION_SUBDOMAINS.includes(subdomain);

  if (hostname?.startsWith(applicationDomain) || isApplicationSubdomain) {
    // application domain case

    if (builderPaths.includes(pathname)) {
      // builder paths case

      url.pathname = `/_builder${pathname}`;
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico).*)",
  ],
};
