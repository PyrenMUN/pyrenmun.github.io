import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', 'http://192.168.1.40'],
};

export default nextConfig;
