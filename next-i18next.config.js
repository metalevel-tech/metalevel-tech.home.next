/** @type {import('next-i18next').UserConfig} */
const i18nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "bg"],
  },
  // https://www.i18next.com/overview/configuration-options#logging
  // debug: process.env.NODE_ENV === "development",
  // To avoid issues when deploying to some paas (vercel...)
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
  // https://github.com/i18next/next-i18next#6-advanced-configuration
  // We do not need this in the current (latest) version.
  // See the browser's console when it is enabled.
  // react: {
  //   useSuspense: false,
  //   wait: false,
  // },
};

module.exports = i18nextConfig;
