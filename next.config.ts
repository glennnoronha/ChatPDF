import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure external images to allow fetching images from specific remote hosts.
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocol for external images
        hostname: "i.imgur.com", // Allow images from Imgur
      },
    ],
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
};

export default nextConfig;
