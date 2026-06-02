/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://royaltrack.ae/:path*',
        basePath: false,
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.royaltrack.ae',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
