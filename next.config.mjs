/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
dotenv.config()
const nextConfig = {
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  images: {
    domains: ["upload.wikimedia.org"],
  },
};

export default nextConfig;
