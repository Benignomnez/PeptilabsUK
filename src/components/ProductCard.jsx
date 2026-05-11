import { Link } from 'react-router-dom'
import { WhatsAppOrderButton } from './WhatsAppButton'
import { FlaskConical, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  return (
    <div className="card flex flex-col group hover:border-gold-500/40 transition-colors duration-200">
      <div className="relative bg-navy-700 aspect-square overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FlaskConical size={48} className="text-gold-400/20" />
          </div>
        )}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-gold-500 text-navy-900 text-xs font-bold px-2 py-1 rounded-full">
            Top Seller
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
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            product.stock > 10
              ? 'bg-green-900/30 text-green-400'
              : product.stock > 0
              ? 'bg-yellow-900/30 text-yellow-400'
              : 'bg-red-900/30 text-red-400'
          }`}>
            {product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'}
          </span>
        </div>

        <button
          onClick={() => addItem(product)}
          disabled={product.stock === 0}
          className="flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-600 border border-navy-600 hover:border-gold-500/50 text-gray-200 font-semibold px-5 py-2.5 rounded-lg transition-colors w-full text-sm disabled:opacity-40 disabled:cursor-not-allowed"
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
  )
}
