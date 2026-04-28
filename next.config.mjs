/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'horizons-cdn.hostinger.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  /**
   * Cache headers.
   * - HTML pages: revalidate every visit so users see new deploys immediately
   *   (browser must check freshness with the server). CDN may cache for up to
   *   60s with stale-while-revalidate.
   * - /_next/static (hashed bundles): immutable for 1 year — safe because the
   *   filename hash changes whenever the content changes.
   */
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
