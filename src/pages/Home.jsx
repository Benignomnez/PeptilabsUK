import { Link } from 'react-router-dom'
import { ShieldCheck, Microscope, Sparkles, Globe, FlaskConical, Award, CheckCircle, MessageCircle, Package, CreditCard, Truck } from 'lucide-react'
import FeaturedCarousel from '../components/FeaturedCarousel'
import Testimonials from '../components/Testimonials'
import { WhatsAppFloating } from '../components/WhatsAppButton'
import { useProducts } from '../hooks/useProducts'

const features = [
  { icon: ShieldCheck, title: 'Calidad Farmacéutica', desc: 'Cumplimos normas GMP (Good Manufacturing Practices).' },
  { icon: Microscope, title: 'Investigación Avanzada', desc: 'Tecnología de vanguardia y científicos especializados.' },
  { icon: Sparkles, title: 'Pureza y Seguridad', desc: 'Pruebas HPLC rigurosas. >99% pureza garantizada.' },
  { icon: Globe, title: 'Distribución Global', desc: 'Envíos seguros y discretos desde el Reino Unido.' },
]

const trustBadges = [
  { icon: '🔬', label: 'GMP Certified', sub: 'Good Manufacturing Practice' },
  { icon: '📊', label: 'HPLC Tested', sub: 'Cada lote analizado' },
  { icon: '📦', label: 'Envío Discreto', sub: 'Empaque sin identificación' },
  { icon: '🇬🇧', label: 'UK Origin', sub: 'Pharmaceutical Research' },
  { icon: '✅', label: '>99% Pureza', sub: 'Garantizado en cada vial' },
  { icon: '🚚', label: 'Tracking incluido', sub: 'Seguimiento en tiempo real' },
]

const orderSteps = [
  { icon: FlaskConical, step: '01', title: 'Elige tu Péptido', desc: 'Explora nuestro catálogo completo con 43+ péptidos de grado farmacéutico.' },
  { icon: MessageCircle, step: '02', title: 'Escríbenos por WhatsApp', desc: 'Contáctanos con el producto de interés. Nuestros especialistas te orientarán.' },
  { icon: CreditCard, step: '03', title: 'Realiza tu Pago', desc: 'Métodos de pago seguros y flexibles. Confirmación inmediata.' },
  { icon: Truck, step: '04', title: 'Recibe tu Pedido', desc: 'Envío discreto desde UK con número de tracking incluido.' },
]

export default function Home() {
  const { products, loading } = useProducts()

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-gold-500 py-2 px-4 text-center">
        <p className="text-xs text-navy-900 font-bold tracking-wide">
          🚚 Envío discreto garantizado desde Reino Unido 🇬🇧 &nbsp;·&nbsp; 🔬 Pureza &gt;99% certificada HPLC &nbsp;·&nbsp; ✅ Tracking incluido en todos los pedidos
        </p>
      </div>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-navy-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />

        {/* Animated particles */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-widest font-semibold">
              🇬🇧 Pharmaceutical Grade · Shipped from UK
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-3">
              PEPTI<span className="text-gold-400">LABS</span><span className="text-gold-400 text-3xl align-super">®</span>
            </h1>
            <p className="text-gold-400/80 uppercase tracking-widest text-sm font-bold mb-2">
              Pharmaceutical Grade Peptide Research
            </p>
            <div className="w-16 h-0.5 bg-gold-500 mb-6" />
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Péptidos de la más alta calidad farmacéutica. Investigados, producidos y enviados desde el <strong className="text-white">Reino Unido 🇬🇧</strong> con los estándares más exigentes del mundo.
            </p>

            {/* Quick trust indicators */}
            <div className="flex flex-wrap gap-3 mb-8">
              {['✓ GMP Certified', '✓ HPLC Tested', '✓ Envío Discreto', '✓ +99% Pureza'].map(item => (
                <span key={item} className="text-xs text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1.5 rounded-full font-semibold">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-center text-base flex items-center justify-center gap-2">
                <FlaskConical size={18} /> Explorar Productos
              </Link>
              <a
                href="https://wa.me/8499255780?text=Hola%2C+me+interesa+conocer+más+sobre+sus+péptidos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center text-base flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} /> Hablar con Especialista
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10 pt-10 border-t border-gold-500/10">
              {[['10+', 'Años Investigación'], ['43+', 'Péptidos Disponibles'], ['99%', 'Pureza Mínima']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-gold-400 font-black text-2xl">{val}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating vial visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gold-500/10 to-navy-700/30 border border-gold-500/20 flex items-center justify-center">
                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-navy-800 to-navy-700 border border-gold-500/30 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <FlaskConical size={56} className="text-gold-400 mx-auto mb-2" />
                    <p className="text-white font-black text-base">PEPTILABS<span className="text-gold-400">®</span></p>
                    <p className="text-gold-400/60 text-xs tracking-widest mt-1">PHARMACEUTICAL</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold-500 text-navy-900 rounded-full p-3 shadow-xl">
                <Award size={22} />
              </div>
              <div className="absolute -bottom-2 -left-6 bg-navy-800 border border-gold-500/30 rounded-xl px-4 py-2 shadow-xl">
                <p className="text-white text-xs font-bold">🔬 HPLC Verified</p>
                <p className="text-gold-400 text-xs">Cada lote analizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
            {trustBadges.map(({ icon, label, sub }) => (
              <div key={label} className="text-center">
                <div className="text-2xl mb-1">{icon}</div>
                <p className="text-white text-xs font-bold">{label}</p>
                <p className="text-gray-500 text-xs">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-500/10 border border-gold-500/20 text-gold-400 rounded-2xl mb-4 group-hover:bg-gold-500/20 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-white font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Carousel */}
      <FeaturedCarousel products={products} />

      {/* How to Order */}
      <section className="py-20 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Simple y Rápido</p>
            <h2 className="text-3xl font-black text-white">¿Cómo Ordenar?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {orderSteps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="pt-5">
                <div className="relative bg-navy-800 border border-navy-700 rounded-xl p-6 pt-8 text-center hover:border-gold-500/40 transition-colors">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-900 font-black text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
                    {step}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <Icon size={32} className="text-gold-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/8499255780?text=Hola%2C+quiero+realizar+un+pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 text-base"
            >
              <MessageCircle size={20} /> Iniciar Pedido por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👁️</span>
              <span className="text-gold-400 font-black uppercase tracking-widest text-sm">Visión</span>
            </div>
            <p className="text-white text-xl leading-relaxed">
              Ser líderes mundiales en el desarrollo de péptidos innovadores, contribuyendo a mejorar la calidad de vida a través de{' '}
              <span className="text-gold-400 font-bold">la ciencia, la ética y la excelencia.</span>
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              {[['🔬 Innovación', 'Péptidos de última generación'], ['🏆 Excelencia', 'Los más altos estándares'], ['🤝 Confianza', 'Transparencia con nuestros clientes'], ['💡 Impacto', 'Soluciones que marcan diferencia']].map(([title, desc]) => (
                <div key={title} className="flex-1 min-w-[140px]">
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-gray-400 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0 text-center bg-navy-800 border border-gold-500/20 rounded-2xl px-10 py-8">
            <p className="text-gold-400 font-black text-6xl">10+</p>
            <p className="text-white font-bold uppercase tracking-wide text-sm mt-1">Años de Investigación</p>
            <p className="text-gray-400 text-xs mt-1">y Desarrollo Científico</p>
            <div className="mt-4 pt-4 border-t border-gold-500/20 flex justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><CheckCircle size={12} className="text-gold-400" /> GMP</span>
              <span className="flex items-center gap-1"><CheckCircle size={12} className="text-gold-400" /> HPLC</span>
              <span className="flex items-center gap-1"><CheckCircle size={12} className="text-gold-400" /> ISO</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Listo para empezar?</h2>
          <p className="text-gray-400 mb-8">Contacta con nuestros especialistas y recibe orientación personalizada sobre los péptidos ideales para tu investigación.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary flex items-center justify-center gap-2">
              <FlaskConical size={18} /> Ver Todos los Productos
            </Link>
            <a
              href="https://wa.me/8499255780"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp Directo
            </a>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <div className="bg-gold-500 py-4 text-center">
        <p className="text-navy-900 font-black uppercase tracking-widest text-sm">
          Ciencia que transforma • Calidad que se siente • Resultados que importan
        </p>
      </div>

      <WhatsAppFloating />
    </>
  )
}
