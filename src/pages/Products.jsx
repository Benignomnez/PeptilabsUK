import { useState, useEffect } from 'react'
import { Search, FlaskConical, MessageCircle, Truck, ShieldCheck } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { WhatsAppFloating } from '../components/WhatsAppButton'
import { useProducts } from '../hooks/useProducts'

export default function Products() {
  const { products, loading } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const cat = searchParams.get('cat')
    setCategory(cat || 'All')
  }, [searchParams])

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
          <p className="text-gray-400">Grado farmacéutico · Enviado desde Reino Unido 🇬🇧 · Pureza &gt;99% garantizada</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar péptidos..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-navy-800 border border-navy-600 text-gray-100 rounded-xl pl-11 pr-4 py-4 text-base focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-500"
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

        {/* Promo CTA */}
        <div className="mt-16 p-8 bg-navy-950 border border-gold-500/20 rounded-2xl text-center">
          <p className="text-gold-400 font-black uppercase tracking-widest text-xs mb-3">¿Necesitas orientación?</p>
          <h3 className="text-white text-2xl font-black mb-2">Habla con nuestros especialistas</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            Nuestro equipo científico está disponible para ayudarte a elegir el péptido ideal para tu investigación. Respuesta rápida garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <ShieldCheck size={16} className="text-gold-400" /> Certificado GMP · Analizado HPLC
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <Truck size={16} className="text-gold-400" /> Envío discreto desde UK 🇬🇧
            </div>
          </div>
          <a
            href="https://wa.me/8499255780?text=Hola%2C+me+gustaría+recibir+orientación+sobre+sus+péptidos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <MessageCircle size={18} /> Consultar por WhatsApp
          </a>
        </div>
      </div>

      <WhatsAppFloating />
    </div>
  )
}
