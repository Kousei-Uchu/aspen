import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the project root so Next doesn't pick up a stray lockfile higher up (e.g. in ~) and scan that folder
  turbopack: {
    root: path.join(__dirname),
  },
  experimental: {
    // Avoid compiling every icon / helper in these big barrel packages
    optimizePackageImports: [
      "@react-three/drei",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
    // Keep Turbopack's dev cache on disk so restarts are fast
    turbopackFileSystemCacheForDev: true,
  },
};

export default nextConfig;
