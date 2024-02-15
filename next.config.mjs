/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "indonesiacomiccon.com",
      },
      {
        protocol: "https",
        hostname: "api.indonesiacomiccon.com",
      },
    ],
  },
};

export default nextConfig;
