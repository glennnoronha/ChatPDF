import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Debugging: Log the request path
  console.log("Request path:", req.nextUrl.pathname);

  // Check if the route requires protection
  if (isProtectedRoute(req)) {
    // Ensure the request is authenticated
    await auth.protect();
  }
});

// Middleware configuration
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Include protected dashboard routes explicitly
    "/dashboard(.*)",
  ],
};
