import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const config = { matcher: ["/dashboard"] };

const AUTH_EXCLUDE = ["/sign-in", "/api/auth/verify-session"];

export async function middleware(request: NextRequest) {

    // middleware
    const pathname = request.nextUrl.pathname
    const origin = request.nextUrl.origin
    if (AUTH_EXCLUDE.includes(pathname)) {
        return NextResponse.next()
    }

    const verifyRequest = await fetch(`${origin}/api/auth/verify-session`, {
        // without this, we can't check the cookie in the called api route
        headers: { Cookie: cookies().toString() },
    })

    const verifySession = (await verifyRequest.json()) as {
        valid: boolean
    }

    if (!verifySession.valid) {
        return NextResponse.redirect(new URL("/error", request.nextUrl))
    }

    // everything seems ok
    return NextResponse.next()
}
