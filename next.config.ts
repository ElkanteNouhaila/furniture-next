import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "fr"], // supported languages
    defaultLocale: "en",   // default language
  },
};

export default nextConfig;