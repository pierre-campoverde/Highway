/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ucarecdn.com"],
  },
  //TODO: Add multilanguage support.
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
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
