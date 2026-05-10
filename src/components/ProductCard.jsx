import { WhatsAppOrderButton } from './WhatsAppButton'
import { FlaskConical } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="card flex flex-col group hover:border-brand-500/50 transition-colors duration-200">
      <div className="relative bg-gray-800 aspect-square overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <FlaskConical size={48} className="text-gray-600" />
          </div>
        )}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-gray-950/70 flex items-center justify-center">
            <span className="text-gray-300 font-semibold text-sm">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-xs text-brand-400 uppercase tracking-wider font-medium mb-1">
            {product.category || 'Peptide'}
          </p>
          <h3 className="text-white font-semibold text-base leading-snug">{product.name}</h3>
          {product.description && (
            <p className="text-gray-400 text-sm mt-1 line-clamp-2">{product.description}</p>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-white">£{Number(product.price).toFixed(2)}</span>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            product.stock > 10
              ? 'bg-brand-900 text-brand-400'
              : product.stock > 0
              ? 'bg-yellow-900/40 text-yellow-400'
              : 'bg-red-900/40 text-red-400'
          }`}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>

        <WhatsAppOrderButton product={product} />
      </div>
    </div>
  )
}
