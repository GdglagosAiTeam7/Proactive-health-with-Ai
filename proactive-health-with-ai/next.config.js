module.exports = {
    async redirects() {
      return [
        // Basic redirect: /about to /
        {
          source: '/',
          destination: '/home',
          permanent: true, // 301 (Permanent) or 307 (Temporary)
        },
        // Wildcard path matching: /blog/:slug to /news/:slug
        {
          source: '/about',
          destination: '/about',
          permanent: true,
        },
      ];
    },
  };