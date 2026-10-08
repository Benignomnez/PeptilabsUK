import Link from 'next/link'
import { FlaskConical } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="card flex flex-col group hover:border-gold-500/40 transition-colors duration-200"
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
            <FlaskConical size={40} className="text-gold-400/20" />
          </div>
        )}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-gold-500 text-navy-900 text-xs font-bold px-2 py-1 rounded-full">
            Más Vendido
          </span>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-navy-950/80 flex items-center justify-center">
            <span className="text-gray-300 font-semibold text-sm">Agotado</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-xs text-gold-400/80 uppercase tracking-wider font-semibold mb-1">
            {product.category || 'Péptido'}
          </p>
          <h3 className="text-white font-bold text-base leading-snug">{product.name}</h3>
          {product.description && (
            <p className="text-gray-400 text-xs mt-1 line-clamp-2">{product.description}</p>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-black text-gold-400">
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
  )
}
