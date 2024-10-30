import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    MOVIEPARTY_API_URL:
      process.env.MOVIEPARTY_API_URL ?? "http://localhost:3001/api",
  },
};

export default nextConfig;
