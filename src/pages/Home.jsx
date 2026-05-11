import { Link } from 'react-router-dom'
import { ShieldCheck, Microscope, Sparkles, Globe, FlaskConical, Award } from 'lucide-react'
import FeaturedCarousel from '../components/FeaturedCarousel'
import Testimonials from '../components/Testimonials'
import { WhatsAppFloating } from '../components/WhatsAppButton'
import { useProducts } from '../hooks/useProducts'

const features = [
  { icon: ShieldCheck, title: 'Calidad Farmacéutica', desc: 'Cumplimos con las normas GMP (Good Manufacturing Practices).' },
  { icon: Microscope, title: 'Investigación Avanzada', desc: 'Tecnología de vanguardia y científicos especializados en péptidos.' },
  { icon: Sparkles, title: 'Pureza y Seguridad', desc: 'Pruebas rigurosas para garantizar la pureza, potencia y seguridad.' },
  { icon: Globe, title: 'Distribución Global', desc: 'Enviamos nuestros productos de forma segura a clientes en todo el mundo.' },
]

export default function Home() {
  const { products, loading } = useProducts()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gold-500/10 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-navy-700/30 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-widest font-semibold">
              🇬🇧 Shipped from United Kingdom
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-2">
              PEPTI<span className="text-gold-400">LABS</span>
              <span className="text-gold-400 text-2xl align-super">®</span>
            </h1>
            <p className="text-gold-400/80 uppercase tracking-widest text-sm font-semibold mb-6">
              Pharmaceutical Grade Peptide Research
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Dedicados a la investigación, desarrollo y producción de péptidos de la más alta calidad, cumpliendo con los estándares farmacéuticos más exigentes del mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-primary text-center text-base">Ver Productos</Link>
              <a
                href="https://wa.me/8499255780?text=Hola%2C+me+interesa+conocer+más+sobre+sus+péptidos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center text-base"
              >
                Contáctanos
              </a>
            </div>

            <div className="flex items-center gap-6 mt-10">
              <div className="text-center">
                <p className="text-gold-400 font-black text-2xl">10+</p>
                <p className="text-gray-400 text-xs">Años de Investigación</p>
              </div>
              <div className="w-px h-10 bg-gold-500/20" />
              <div className="text-center">
                <p className="text-gold-400 font-black text-2xl">99%</p>
                <p className="text-gray-400 text-xs">Pureza Garantizada</p>
              </div>
              <div className="w-px h-10 bg-gold-500/20" />
              <div className="text-center">
                <p className="text-gold-400 font-black text-2xl">100%</p>
                <p className="text-gray-400 text-xs">Envío Seguro</p>
              </div>
            </div>
          </div>

          {/* Right side visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gold-500/5 border border-gold-500/20 flex items-center justify-center">
                <div className="w-60 h-60 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <div className="text-center">
                    <FlaskConical size={64} className="text-gold-400 mx-auto mb-3" />
                    <p className="text-white font-black text-xl">PEPTILABS<span className="text-gold-400">®</span></p>
                    <p className="text-gold-400/70 text-xs uppercase tracking-widest mt-1">Pharmaceutical Grade</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold-500 text-navy-900 rounded-full p-3 shadow-lg">
                <Award size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/10 border border-gold-500/20 text-gold-400 rounded-xl mb-3">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Carousel */}
      <FeaturedCarousel products={products} />

      {/* Vision Banner */}
      <section className="py-16 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">👁️</span>
              <span className="text-gold-400 font-black uppercase tracking-widest text-sm">Visión</span>
            </div>
            <p className="text-white text-xl leading-relaxed">
              Ser líderes mundiales en el desarrollo de péptidos innovadores, contribuyendo a mejorar la calidad de vida de las personas a través de{' '}
              <span className="text-gold-400 font-bold">la ciencia, la ética y la excelencia.</span>
            </p>
          </div>
          <div className="shrink-0 text-center bg-navy-800 border border-gold-500/20 rounded-2xl px-10 py-8">
            <p className="text-gold-400 font-black text-5xl">10+</p>
            <p className="text-white font-bold uppercase tracking-wide text-sm mt-1">Años de Investigación</p>
            <p className="text-gray-400 text-xs mt-1">y Desarrollo</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Bottom tagline */}
      <div className="bg-gold-500 py-4 text-center">
        <p className="text-navy-900 font-black uppercase tracking-widest text-sm">
          Ciencia que transforma • Calidad que se siente • Resultados que importan
        </p>
      </div>

      <WhatsAppFloating />
    </>
  )
}
