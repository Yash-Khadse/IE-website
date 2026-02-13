import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/', '/api/'], // Typical excluded paths
    },
    sitemap: 'https://www.invisiedge.com/sitemap.xml',
  }
}
