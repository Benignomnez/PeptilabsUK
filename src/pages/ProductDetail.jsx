import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, FlaskConical, ShieldCheck, Truck, Award, MessageCircle, Package, CheckCircle, Loader2, ShoppingCart } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../services/products'
import ProductCard from '../components/ProductCard'
import { WhatsAppFloating } from '../components/WhatsAppButton'
import { useCart } from '../context/CartContext'

const CATEGORY_INFO = {
  'Regeneración & Salud': {
    icon: '🔬',
    badge: 'Regeneración',
    specs: ['Investigación en reparación tisular', 'Estudios de recuperación celular', 'Research grade certificado'],
    context: 'Péptido de alta pureza utilizado en investigación científica orientada a procesos de regeneración, reparación tisular y modulación del sistema inmune.',
  },
  'Hormonales & Crecimiento': {
    icon: '📈',
    badge: 'Hormonal',
    specs: ['Secretagogo de hormona de crecimiento', 'Estudios endocrinológicos', 'Análogo de GHRH/GHRP'],
    context: 'Péptido utilizado en investigación endocrinológica. Análogo sintético diseñado para estudios relacionados con la secreción de hormona de crecimiento.',
  },
  'Pérdida de Grasa & Metabolismo': {
    icon: '⚡',
    badge: 'Metabólico',
    specs: ['Agonista de receptor GLP-1/GIP', 'Investigación metabólica avanzada', 'Estudios de composición corporal'],
    context: 'Péptido de nueva generación utilizado en investigación metabólica. Actúa sobre receptores involucrados en la regulación del metabolismo energético.',
  },
  'Estética & Anti-Aging': {
    icon: '✨',
    badge: 'Anti-Aging',
    specs: ['Investigación en longevidad celular', 'Estudios de antioxidación', 'Regeneración de tejidos'],
    context: 'Péptido enfocado en investigación de longevidad y procesos anti-envejecimiento. Estudia mecanismos de rejuvenecimiento celular y protección oxidativa.',
  },
  'Cognición & Performance': {
    icon: '🧠',
    badge: 'Nootrópico',
    specs: ['Investigación neuropeptídica', 'Estudios de neuroplasticidad', 'Modulación cognitiva'],
    context: 'Péptido nootrópico utilizado en investigación neurocientífica. Estudia mecanismos de neuroplasticidad, memoria y función cognitiva.',
  },
  'Otros & Especiales': {
    icon: '⚗️',
    badge: 'Especializado',
    specs: ['Péptido de investigación avanzada', 'Aplicaciones especializadas', 'Research grade >98%'],
    context: 'Péptido especializado para investigación científica avanzada con aplicaciones específicas en estudios de laboratorio controlados.',
  },
}

const SHIPPING_FEATURES = [
  { icon: Package, label: 'Envío Discreto', sub: 'Sin identificación en el empaque' },
  { icon: Truck, label: 'Desde Reino Unido 🇬🇧', sub: 'Envío internacional seguro' },
  { icon: ShieldCheck, label: 'Certificado GMP', sub: 'Buenas Prácticas de Manufactura' },
  { icon: Award, label: 'HPLC Verificado', sub: 'Cada lote analizado' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductById(id)
      .then(p => {
        setProduct(p)
        return getRelatedProducts(p.category, p.id)
      })
      .then(setRelated)
      .catch(() => navigate('/products', { replace: true }))
      .finally(() => setLoading(false))
  }, [id, navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 size={32} className="animate-spin text-gold-400" />
      </div>
    )
  }

  if (!product) return null

  const info = CATEGORY_INFO[product.category] || CATEGORY_INFO['Otros & Especiales']
  const waMessage = encodeURIComponent(`Hola, me interesa el producto: ${product.name} (RD$${Number(product.price).toLocaleString()}). ¿Está disponible?`)
  const waUrl = `https://wa.me/9053244066?text=${waMessage}`
  const inStock = product.stock > 0

  const canonicalUrl = `https://peptilabsuk.com/products/${product.id}`
  const pageTitle = `${product.name} | PeptiLabs UK® | Péptido Farmacéutico`
  const pageDesc = product.description
    ? `${product.description} Pureza >99% certificada HPLC. Envío discreto desde Reino Unido 🇬🇧. RD$${Number(product.price).toLocaleString()}.`
    : `${product.name} — Péptido de grado farmacéutico. Pureza >99% certificada HPLC. Envío discreto desde Reino Unido. RD$${Number(product.price).toLocaleString()}.`

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${product.name} | PeptiLabs UK®`} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonicalUrl} />
        {product.image_url && <meta property="og:image" content={product.image_url} />}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description || pageDesc,
          "image": product.image_url || "https://peptilabsuk.com/og-image.png",
          "brand": { "@type": "Brand", "name": "PeptiLabs UK" },
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "DOP",
            "availability": inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "url": canonicalUrl,
            "seller": { "@type": "Organization", "name": "PeptiLabs UK" }
          }
        })}</script>
      </Helmet>
      {/* Breadcrumb */}
      <div className="bg-navy-950 border-b border-gold-500/10 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gold-400 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-gold-400 transition-colors">Productos</Link>
          <span>/</span>
          <span className="text-gray-300 truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm mb-8"
        >
          <ArrowLeft size={16} /> Volver al catálogo
        </button>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Left — Visual */}
          <div>
            <div className="bg-navy-800 border border-navy-700 rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative">
              {product.image_url ? (
                <img src={product.image_url} alt={product.name} className="w-full h-full object-contain bg-navy-950" />
              ) : (
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4">
                    <FlaskConical size={56} className="text-gold-400" />
                  </div>
                  <p className="text-white font-black text-lg">PEPTILABS<span className="text-gold-400">®</span></p>
                  <p className="text-gold-400/60 text-xs tracking-widest mt-1">PHARMACEUTICAL</p>
                </div>
              )}
              {product.featured && (
                <span className="absolute top-4 left-4 bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1.5 rounded-full">
                  ⭐ Más Vendido
                </span>
              )}
              {!inStock && (
                <div className="absolute inset-0 bg-navy-950/80 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Agotado</span>
                </div>
              )}
            </div>

            {/* Shipping features — desktop only */}
            <div className="hidden lg:grid grid-cols-2 gap-3 mt-6">
              {SHIPPING_FEATURES.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 bg-navy-800 border border-navy-700 rounded-xl p-3">
                  <Icon size={18} className="text-gold-400 shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold">{label}</p>
                    <p className="text-gray-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div className="flex flex-col">
            {/* Category + badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">
                {info.icon} {info.badge}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                product.stock > 10 ? 'bg-green-900/30 text-green-400' :
                product.stock > 0 ? 'bg-yellow-900/30 text-yellow-400' :
                'bg-red-900/30 text-red-400'
              }`}>
                {product.stock > 0 ? `✓ ${product.stock} en stock` : '✗ Agotado'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-gold-400">
                RD${Number(product.price).toLocaleString()}
              </span>
            </div>

            {/* Short description */}
            <p className="text-gray-300 leading-relaxed mb-4">{product.description}</p>

            {/* Research context */}
            <div className="bg-navy-800 border border-gold-500/10 rounded-xl p-4 mb-6">
              <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider mb-2">Uso en Investigación</p>
              <p className="text-gray-400 text-sm leading-relaxed">{info.context}</p>
            </div>

            {/* Specs list */}
            <ul className="space-y-2 mb-8">
              {info.specs.map(s => (
                <li key={s} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle size={15} className="text-gold-400 shrink-0" /> {s}
                </li>
              ))}
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle size={15} className="text-gold-400 shrink-0" /> Pureza {product.description?.includes('>99') ? '>99%' : '>98%'} garantizada
              </li>
            </ul>

            {/* CTA */}
            <div className="hidden lg:flex flex-col gap-3">
              <button
                onClick={() => inStock && addItem(product)}
                disabled={!inStock}
                className={`flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-600 border border-gold-500/30 hover:border-gold-500/60 text-white font-bold px-6 py-4 rounded-lg transition-colors text-base ${!inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <ShoppingCart size={20} />
                {inStock ? 'Agregar al pedido' : 'Agotado'}
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn-primary flex items-center justify-center gap-2 text-base py-4 ${!inStock ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <MessageCircle size={20} />
                {inStock ? `Ordenar directo — RD$${Number(product.price).toLocaleString()}` : 'Producto Agotado'}
              </a>
            </div>

            {/* Shipping features — mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-3 mt-6">
              {SHIPPING_FEATURES.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 bg-navy-800 border border-navy-700 rounded-xl p-3">
                  <Icon size={18} className="text-gold-400 shrink-0" />
                  <div>
                    <p className="text-white text-xs font-semibold">{label}</p>
                    <p className="text-gray-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <div className="border-t border-gold-500/10 pt-12 mb-8">
              <p className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-1">Misma Categoría</p>
              <h2 className="text-2xl font-black text-white">Productos Relacionados</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>

      {/* Sticky mobile CTA */}
      {inStock && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 bg-navy-950 border-t border-gold-500/20 p-4 z-40 flex gap-3">
          <button
            onClick={() => addItem(product)}
            className="flex-1 flex items-center justify-center gap-2 bg-navy-700 border border-gold-500/30 text-white font-bold py-3 rounded-lg text-sm"
          >
            <ShoppingCart size={16} /> Agregar
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-primary flex items-center justify-center gap-2 py-3 text-sm"
          >
            <MessageCircle size={16} />
            Ordenar directo
          </a>
        </div>
      )}

      <div className={inStock ? 'pb-24 lg:pb-0' : ''}>
        <WhatsAppFloating />
      </div>
    </div>
  )
}
