/*
 * @Author: DCBZ
 * @Date: 2026-01-25 14:03:38
 * @LastEditors: your name
 * @LastEditTime: 2026-01-26 15:38:12
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\inversa-clone\next.config.ts
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/inversa-clone',
  assetPrefix: '/inversa-clone/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
