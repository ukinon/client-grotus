/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "google.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
