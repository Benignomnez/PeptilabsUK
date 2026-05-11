import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react'
import { WhatsAppOrderButton } from './WhatsAppButton'
import { FlaskConical } from 'lucide-react'

export default function FeaturedCarousel({ products }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const featured = products.filter(p => p.featured).slice(0, 8)

  function checkScroll() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    checkScroll()
  }, [products])

  function scroll(dir) {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  if (!featured.length) return null

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Flame size={18} className="text-gold-400" />
              <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold">Más Vendidos</p>
            </div>
            <h2 className="text-2xl font-black text-white">Top Péptidos</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500/10 disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500/10 disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featured.map(product => (
            <div key={product.id} className="card flex-shrink-0 w-64 flex flex-col hover:border-gold-500/40 transition-colors">
              <div className="bg-navy-700 h-44 flex items-center justify-center relative">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <FlaskConical size={48} className="text-gold-400/30" />
                )}
                <span className="absolute top-2 left-2 bg-gold-500 text-navy-900 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                  <Flame size={10} /> TOP
                </span>
              </div>
              <div className="p-4 flex flex-col gap-3 flex-1">
                <div>
                  <p className="text-xs text-gold-400/70 uppercase tracking-wide mb-1">{product.category}</p>
                  <h3 className="text-white font-bold text-sm leading-tight">{product.name}</h3>
                </div>
                <div className="mt-auto">
                  <p className="text-gold-400 font-black text-lg mb-3">
                    RD${Number(product.price).toLocaleString()}
                  </p>
                  <WhatsAppOrderButton product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
