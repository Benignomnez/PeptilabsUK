import ProductCard from './ProductCard'
import { FlaskConical } from 'lucide-react'

export default function ProductGrid({ products, loading }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="bg-gray-800 aspect-square" />
            <div className="p-4 space-y-3">
              <div className="h-3 bg-gray-800 rounded w-1/3" />
              <div className="h-4 bg-gray-800 rounded w-2/3" />
              <div className="h-3 bg-gray-800 rounded w-full" />
              <div className="h-10 bg-gray-800 rounded" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!products.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        <FlaskConical size={48} className="mx-auto mb-4 opacity-30" />
        <p className="text-lg">No products available.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
