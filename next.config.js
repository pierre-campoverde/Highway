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
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
      },
    ];
  },
};

module.exports = nextConfig;
