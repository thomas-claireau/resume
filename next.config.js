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
};

module.exports = nextConfig;
