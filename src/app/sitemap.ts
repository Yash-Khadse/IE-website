import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.invisiedge.com' // Replace with your actual domain
  
  // Static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/work',
    '/contact',
    '/blog',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
}
