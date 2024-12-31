import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    productionBrowserSourceMaps: false,
        ignoreDuringBuilds: true,

};

export default nextConfig;
