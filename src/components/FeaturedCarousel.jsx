import { FlaskConical, FileCheck } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedCarousel({ products, coaProductIds = [] }) {
  const featured = products.filter(p => p.featured).slice(0, 4)
  const coaMap = new Map(coaProductIds.map(c => [c.productId, c.isReference]))

  if (!featured.length) return null

  return (
    <section className="py-16 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white">Productos Destacados</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="card flex flex-col group hover:border-gold-500/40 transition-colors"
            >
              <div className="relative bg-navy-700 h-48 overflow-hidden">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-contain bg-navy-950 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FlaskConical size={48} className="text-gold-400/30" />
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-xs text-gold-400/70 uppercase tracking-wide">{product.category}</p>
                    {coaMap.has(product.id) && (
                      coaMap.get(product.id) ? (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-900/20 border border-amber-700/30 px-1.5 py-0.5 rounded-full shrink-0">
                          <FileCheck size={10} /> Ref.
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-green-400 bg-green-900/20 border border-green-700/30 px-1.5 py-0.5 rounded-full shrink-0">
                          <FileCheck size={10} /> CoA
                        </span>
                      )
                    )}
                  </div>
                  <h3 className="text-white font-bold leading-snug">{product.name}</h3>
                  {product.description && (
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{product.description}</p>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-gold-400 font-black text-xl">
                    RD${Number(product.price).toLocaleString()}
                  </span>
                  {product.stock === 0 ? (
                    <span className="text-xs px-2 py-1 rounded-full font-medium bg-red-900/30 text-red-400">
                      Agotado
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500 group-hover:text-gold-400 transition-colors">
                      Ver producto →
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors">
            Ver Catálogo Completo →
          </Link>
        </div>
      </div>
    </section>
  )
}
