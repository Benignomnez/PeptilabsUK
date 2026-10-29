'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Newspaper } from 'lucide-react'

export default function BlogIndexClient({ articles }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')

  const categories = ['Todas', ...new Set(articles.map(a => a.category).filter(Boolean))]

  const filtered = articles.filter(a => {
    const q = search.toLowerCase()
    const matchesSearch =
      a.title.toLowerCase().includes(q) ||
      (a.metaDescription || '').toLowerCase().includes(q) ||
      (a.keyword || '').toLowerCase().includes(q)
    const matchesCategory = category === 'Todas' || a.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar artículos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-navy-800 border border-navy-600 text-gray-100 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-500"
          />
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
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
            {cat}
          </button>
        ))}
      </div>

      <p className="text-gray-500 text-sm mb-6">
        {filtered.length} artículo{filtered.length !== 1 ? 's' : ''}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-navy-700 rounded-2xl">
          <Newspaper size={40} className="text-gold-400/30 mx-auto mb-4" />
          <p className="text-white font-semibold mb-1">Sin resultados</p>
          <p className="text-gray-500 text-sm">Prueba con otro término de búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map(article => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="card flex flex-col p-5 group hover:border-gold-500/40 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-2">{article.category}</p>
              <h2 className="text-white font-bold leading-snug mb-2 group-hover:text-gold-400 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">{article.metaDescription}</p>
              <span className="mt-auto text-xs text-gray-500 group-hover:text-gold-400 transition-colors">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
