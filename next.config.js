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
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self'; img-src *; style-src: *; frame-src *.google.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
