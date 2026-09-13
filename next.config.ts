import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Emit a plain static website: one folder + index.html per route,
   * uploadable to any host via FTP. No Node server required.
   */
  output: "export",

  /**
   * `/equipment` -> `out/equipment/index.html` instead of `out/equipment.html`.
   * Apache/nginx/IIS serve directory index files by default, so this is the
   * form that "just works" on ordinary shared hosting.
   */
  trailingSlash: false,

  images: { unoptimized: true },
};

export default nextConfig;
