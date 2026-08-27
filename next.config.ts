import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vz-9f1a8ca9-486.b-cdn.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
