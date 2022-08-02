/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
default-src 'self';
script-src 'self';
child-src 'none';
style-src 'self' example.com;
img-src https://*;
font-src 'self'; 
`;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ucarecdn.com"],
    ContentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; img-src 'self' https://ucarecdn.com; style-src: *;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
