import { useState } from 'react'
import { Search } from 'lucide-react'
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Products</h1>
        <p className="text-gray-400">Browse our full range of research peptides.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <ProductGrid products={filtered} loading={loading} />
      <WhatsAppFloating />
    </div>
  )
}
