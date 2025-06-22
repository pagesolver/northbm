/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gallery.pagesolver.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
