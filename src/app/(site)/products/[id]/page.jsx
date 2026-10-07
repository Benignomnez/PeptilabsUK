import { notFound } from 'next/navigation'
import ProductDetailClient from '../../../../components/ProductDetailClient'
import { getProductById, getRelatedProducts } from '../../../../services/products'

const GLP1_CATEGORIES = ['Pérdida de Grasa & Metabolismo', 'GLP-1 & Pérdida de Peso']

async function loadProduct(id) {
  try {
    return await getProductById(id)
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const product = await loadProduct(id)
  if (!product) return {}

  const isGLP1 = GLP1_CATEGORIES.includes(product.category)
  const title = isGLP1
    ? `${product.name} en República Dominicana | PeptiLabs UK®`
    : `${product.name} | PeptiLabs UK® | Péptido Farmacéutico`
  const description = isGLP1
    ? `Compra ${product.name} en República Dominicana. El mismo principio activo que Ozempic®/Mounjaro®. Pureza >99% certificada GMP. Entrega discreta en RD desde UK 🇬🇧. RD$${Number(product.price).toLocaleString()}.`
    : product.description
      ? `${product.description} Pureza >99% certificada HPLC. Envío discreto a República Dominicana desde Reino Unido 🇬🇧. RD$${Number(product.price).toLocaleString()}.`
      : `${product.name} — Péptido farmacéutico con entrega en República Dominicana. Pureza >99% certificada HPLC. RD$${Number(product.price).toLocaleString()}.`
  const canonicalPath = `/products/${product.id}`

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${product.name} | PeptiLabs UK®`,
      description,
      url: canonicalPath,
      images: product.image_url ? [{ url: product.image_url }] : undefined,
    },
  }
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params
  const product = await loadProduct(id)
  if (!product) notFound()

  const related = await getRelatedProducts(product.category, product.id).catch(() => [])
  const canonicalUrl = `https://peptilabsuk.com/products/${product.id}`

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || '',
    image: product.image_url || 'https://peptilabsuk.com/og-image.png',
    brand: { '@type': 'Brand', name: 'PeptiLabs UK' },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'DOP',
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: canonicalUrl,
      seller: { '@type': 'Organization', name: 'PeptiLabs UK' },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <ProductDetailClient product={product} related={related} />
    </>
  )
}
