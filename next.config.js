/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ucarecdn.com"],
  },
  //TODO: Add multilanguage support.
  i18n: {
    locales: ["en-US", "es-ES"],
    defaultLocale: "es-ES",
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self'; script-src *; img-src *; style-src: *; frame-src *.google.com;",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
