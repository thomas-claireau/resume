/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
  eslint: {
    dirs: ['pages', 'components'],
  },
  async redirects() {
    return [
      {
        source: '/posts',
        destination: 'https://www.linkedin.com/in/thomas-claireau/recent-activity/shares/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
