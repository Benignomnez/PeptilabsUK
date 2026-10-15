'use client'

import { useState } from 'react'
import { Search, FileSearch } from 'lucide-react'
import CoaCard from './CoaCard'

export default function CoaIndexClient({ coas }) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('recent')

  const filtered = coas
    .filter(c => {
      const q = search.toLowerCase()
      return (
        c.product_name.toLowerCase().includes(q) ||
        (c.lab_name || '').toLowerCase().includes(q) ||
        (c.sample_code || '').toLowerCase().includes(q) ||
        (c.lot_code || '').toLowerCase().includes(q)
      )
    })
    .sort((a, b) => {
      if (sort === 'name') return a.product_name.localeCompare(b.product_name)
      return new Date(b.published_date) - new Date(a.published_date)
    })

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar producto, variación..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-navy-800 border border-navy-600 text-gray-100 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-500"
          />
        </div>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="bg-navy-800 border border-navy-600 text-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors"
        >
          <option value="recent">Más recientes</option>
          <option value="name">Nombre (A-Z)</option>
        </select>
      </div>

      <p className="text-gray-500 text-sm mb-6">
        {filtered.length} certificado{filtered.length !== 1 ? 's' : ''}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-navy-700 rounded-2xl">
          <FileSearch size={40} className="text-gold-400/30 mx-auto mb-4" />
          <p className="text-white font-semibold mb-1">
            {coas.length === 0 ? 'Todavía no hay certificados publicados' : 'Sin resultados'}
          </p>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            {coas.length === 0
              ? 'Estamos coordinando testing independiente con un laboratorio de terceros. Los certificados se publicarán aquí a medida que estén disponibles.'
              : 'Prueba con otro término de búsqueda.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(coa => <CoaCard key={coa.id} coa={coa} />)}
        </div>
      )}
    </div>
  )
}
