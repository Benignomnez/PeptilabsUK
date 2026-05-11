import { useState } from 'react'
import { Search, FlaskConical } from 'lucide-react'
import ProductGrid from '../components/ProductGrid'
import { WhatsAppFloating } from '../components/WhatsAppButton'
import { useProducts } from '../hooks/useProducts'

export default function Products() {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))]

  const filtered = products.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      (p.description || '').toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || p.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-navy-950 border-b border-gold-500/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical size={24} className="text-gold-400" />
            <h1 className="text-3xl font-black text-white">Catálogo de Péptidos</h1>
          </div>
          <p className="text-gray-400">Pharmaceutical grade · Enviado desde Reino Unido 🇬🇧 · Solo para investigación científica</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar péptidos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="input pl-9"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  category === cat
                    ? 'bg-gold-500 text-navy-900'
                    : 'bg-navy-800 text-gray-300 hover:bg-navy-700 border border-navy-700'
                }`}
              >
                {cat === 'All' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        {!loading && (
          <p className="text-gray-500 text-sm mb-6">
            {filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}
          </p>
        )}

        <ProductGrid products={filtered} loading={loading} />

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-navy-950 border border-gold-500/10 rounded-xl text-center">
          <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
            ⚗️ <strong className="text-gray-400">Aviso Legal:</strong> Todos los productos de PeptiLabs UK están destinados exclusivamente para uso en investigación científica y laboratorial. No son para consumo humano o animal. Solo para profesionales capacitados en entornos de investigación controlados.
          </p>
        </div>
      </div>

      <WhatsAppFloating />
    </div>
  )
}
