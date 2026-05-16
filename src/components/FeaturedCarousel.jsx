import { Flame, FlaskConical, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function FeaturedCarousel({ products }) {
  const { addItem } = useCart()
  const featured = products.filter(p => p.featured).slice(0, 4)

  if (!featured.length) return null

  return (
    <section className="py-16 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <Flame size={18} className="text-gold-400" />
            <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold">Más Vendidos</p>
          </div>
          <h2 className="text-3xl font-black text-white">Top Péptidos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map(product => (
            <div key={product.id} className="card flex flex-col group hover:border-gold-500/40 transition-colors">
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
                <span className="absolute top-2 left-2 bg-gold-500 text-navy-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Flame size={10} /> TOP
                </span>
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <p className="text-xs text-gold-400/70 uppercase tracking-wide mb-1">{product.category}</p>
                  <h3 className="text-white font-bold leading-snug">{product.name}</h3>
                  {product.description && (
                    <p className="text-gray-400 text-xs mt-1 line-clamp-2">{product.description}</p>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between mb-3">
                  <span className="text-gold-400 font-black text-xl">
                    RD${Number(product.price).toLocaleString()}
                  </span>
                  {product.stock === 0 && (
                    <span className="text-xs px-2 py-1 rounded-full font-medium bg-red-900/30 text-red-400">
                      Agotado
                    </span>
                  )}
                </div>

                <button
                  onClick={() => addItem(product)}
                  disabled={product.stock === 0}
                  className="flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-600 border border-navy-600 hover:border-gold-500/50 text-gray-200 font-semibold px-4 py-2.5 rounded-lg transition-colors w-full text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ShoppingCart size={15} />
                  {product.stock === 0 ? 'Agotado' : 'Agregar al pedido'}
                </button>
                <Link
                  to={`/products/${product.id}`}
                  className="text-center text-xs text-gray-500 hover:text-gold-400 transition-colors py-1"
                >
                  Ver detalles →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
