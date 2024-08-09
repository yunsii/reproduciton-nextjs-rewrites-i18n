/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/:path((?!api/).*)",
          has: [
            {
              type: "host",
              value: "localhost",
            },
          ],
          destination: `/test.com/:path*`,
        },
        // {
        //   source: "/",
        //   has: [
        //     {
        //       type: "host",
        //       value: "localhost",
        //     },
        //   ],
        //   destination: `/test.com`,
        // },
        // {
        //   source: "/:path*",
        //   has: [
        //     {
        //       type: "host",
        //       value: "localhost",
        //     },
        //   ],
        //   destination: `/test.com/:path*`,
        // },
      ],
    };
  },
  // i18n: {
  //   locales: ["en", "fr"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
