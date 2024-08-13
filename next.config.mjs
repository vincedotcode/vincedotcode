/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: '/:subdomain/:path*',
        destination: '/[subdomain]/[page]', 
      },
    ];
  },
};

export default nextConfig;
