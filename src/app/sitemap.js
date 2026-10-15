import { getProducts } from '../services/products'
import { getCoas } from '../services/coas'

export default async function sitemap() {
  const base = 'https://peptilabsuk.com'

  const staticRoutes = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/quality-testing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/coa`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/coa/how-to-verify`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/coa/methodology`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/research`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/research-disclaimer`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const products = await getProducts().catch(() => [])
  const productRoutes = products.map(p => ({
    url: `${base}/products/${p.id}`,
    lastModified: p.updated_at ? new Date(p.updated_at) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const coas = await getCoas().catch(() => [])
  const coaRoutes = coas.map(c => ({
    url: `${base}/coa/${c.id}`,
    lastModified: c.updated_at ? new Date(c.updated_at) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...productRoutes, ...coaRoutes]
}
