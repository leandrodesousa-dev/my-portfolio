import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'avatars.githubusercontent.com',
    //   },
    // ],
    loader: 'default',
    path: '/_next/image',
    unoptimized: false,
  },
};

export default nextConfig;
