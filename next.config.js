const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOT_JAR_ID: process.env.HOT_JAR_ID,
    OPTIMIZE_ID: process.env.OPTIMIZE_ID,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,
    GTAG: process.env.GTAG,
    REACT_APP_GATAG: process.env.REACT_APP_GATAG,
  },
  i18n,
};

module.exports = nextConfig;
