// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    async function middleware(request: NextRequestWithAuth) {
        console.log("request", request.nextauth.token)

        if (request.nextUrl.pathname.startsWith("/studentSuccessView")
            && request.nextauth.token?.role !== "manager"
            && request.nextauth.token?.role !== "admin"
         ) {
            return NextResponse.rewrite(
                new URL("/denied", request.url)
            )
        }
        
        if (request.nextUrl.pathname.startsWith("/table")
            && request.nextauth.token?.role !== "admin"
            && request.nextauth.token?.role !== "audit"    
    ) {
                // console.log("admin", request.nextauth.token?.role)

            return NextResponse.rewrite(
                new URL("/denied", request.url)
            )
        }

        return NextResponse.next();
        
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)
// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/studentSuccessView", "/table"] }