import { Suspense } from 'react'
import ProductsClient from '../../../components/ProductsClient'
import { getProducts } from '../../../services/products'

export const metadata = {
  title: 'Comprar Péptidos en República Dominicana | PeptiLabs UK®',
  description: 'Catálogo completo de péptidos en República Dominicana: Tirzepatide, Semaglutide, Retatrutide, BPC-157, TB-500, CJC-1295 y más. GLP-1 certificados GMP. Entrega en RD desde UK 🇬🇧.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Comprar Péptidos en República Dominicana | PeptiLabs UK®',
    description: 'Tirzepatide, Semaglutide, BPC-157 y +40 péptidos. Entrega en RD 🇩🇴. Certificado GMP, pureza >99%.',
    url: '/products',
  },
}

export default async function ProductsPage() {
  const products = await getProducts().catch(() => [])

  return (
    <Suspense fallback={null}>
      <ProductsClient products={products} />
    </Suspense>
  )
}
