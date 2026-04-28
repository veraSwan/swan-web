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
   * - HTML pages (anything outside `_next/`): revalidate every visit so users
   *   see new deploys immediately. CDN may cache for up to 60s with SWR.
   * - /_next/static (hashed bundles): immutable for 1 year — filename hash
   *   changes whenever the content changes.
   *
   * NOTE: must NOT apply no-cache to `/_next/...` — Next.js's internal RSC
   *   payloads and chunk loaders depend on default caching, and disabling it
   *   breaks dev server hot reload (manifests as `JSON.parse` errors during
   *   page compilation).
   */
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Match everything that does NOT start with `_next/`
        source: '/((?!_next/).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate, s-maxage=60, stale-while-revalidate=300',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
