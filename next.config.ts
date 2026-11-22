import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Let phones on the local Wi-Fi load dev assets (JS/HMR). Without this,
  // Next blocks them and the page never hydrates (e.g. the mobile menu is dead).
  // Dev-only: has no effect on `next build` / production.
  allowedDevOrigins: ["192.168.*.*"],
};

export default nextConfig;
