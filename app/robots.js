export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: 'https://royaltrack.ae/sitemap.xml',
  };
}
