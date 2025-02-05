/** @type {import('next').NextConfig} */

//@DESC: start here...
const nextConfig = {
  reactStrictMode: true,
  images: {
    //@DESC: add third party img sources here
    // domains: [process.env.NEXT_PUBLIC_SITE_URL.replace(/https:\/\//, '')],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      // {
      //   protocol: 'https',
      //   hostname:
      //     process.env.NEXT_PUBLIC_SITE_URL?.replace(/https:\/\//, '') || '',
      // },
    ],
  },
  // i18n: {
  //   locales: ['en', 'th'],
  //   defaultLocale: 'en',
  // },
  env: {},
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

export default nextConfig;
