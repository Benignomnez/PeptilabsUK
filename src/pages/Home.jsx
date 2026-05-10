import { Link } from 'react-router-dom'
import { FlaskConical, ShieldCheck, Zap, Truck } from 'lucide-react'
import ProductGrid from '../components/ProductGrid'
import { WhatsAppFloating } from '../components/WhatsAppButton'
import { useProducts } from '../hooks/useProducts'

const features = [
  { icon: FlaskConical, title: 'Research Grade', desc: 'High purity peptides for laboratory use' },
  { icon: ShieldCheck, title: 'Quality Tested', desc: 'Third-party lab tested and verified' },
  { icon: Zap, title: 'Fast Dispatch', desc: 'Same-day dispatch on orders before 2pm' },
  { icon: Truck, title: 'UK Delivery', desc: 'Next-day tracked delivery across the UK' },
]

export default function Home() {
  const { products, loading } = useProducts()
  const featured = products.filter(p => p.featured).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/30 via-gray-950 to-gray-950" />
        <div className="relative text-center px-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm px-4 py-2 rounded-full mb-6">
            <FlaskConical size={14} /> Premium Research Peptides
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            PeptiLabs<span className="text-brand-400">UK</span>
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-xl mx-auto">
            High-purity research peptides, rigorously tested and dispatched fast across the UK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary text-center">
              Browse Products
            </Link>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER || '447700000000'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-500/10 text-brand-400 rounded-xl mb-3">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      {(featured.length > 0 || loading) && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Featured Products</h2>
            <Link to="/products" className="text-brand-400 hover:text-brand-300 text-sm font-medium">
              View all →
            </Link>
          </div>
          <ProductGrid products={featured} loading={loading} />
        </section>
      )}

      <WhatsAppFloating />
    </>
  )
}
