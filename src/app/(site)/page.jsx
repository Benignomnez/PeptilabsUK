import Link from 'next/link'
import { ShieldCheck, FlaskConical, Truck, Headset, MessageCircle, Microscope } from 'lucide-react'
import FeaturedCarousel from '../../components/FeaturedCarousel'
import { getProducts } from '../../services/products'

export const metadata = {
  title: 'PeptiLabs UK® | Péptidos Farmacéuticos en República Dominicana',
  description: 'Compra péptidos de grado farmacéutico en República Dominicana. Tirzepatide, Semaglutide, BPC-157, TB-500 y más de 40 péptidos. Pureza >99%, certificado GMP. Envío discreto desde UK 🇬🇧.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PeptiLabs UK® | Péptidos Farmacéuticos en República Dominicana',
    description: 'Tirzepatide, Semaglutide, BPC-157 y +40 péptidos con entrega en RD. Pureza >99% certificada GMP. Envío discreto desde UK 🇬🇧.',
    url: '/',
  },
}

const heroStats = [
  { value: '40+', label: 'Compuestos de Investigación' },
  { value: '>99%', label: 'Pureza' },
  { value: 'Terceros', label: 'Testing Independiente' },
  { value: 'UK', label: 'Origen' },
]

const trustBar = [
  { icon: ShieldCheck, label: '>99% Pureza' },
  { icon: FlaskConical, label: '40+ Compuestos' },
  { icon: Microscope, label: 'Testing de Terceros' },
  { icon: FlaskConical, label: 'Uso de Investigación' },
  { icon: Headset, label: 'Atención Directa' },
]

const whyPeptilabs = [
  { icon: Microscope, title: 'Testing de Terceros', desc: 'Verificación independiente por HPLC, no solo la palabra del fabricante.' },
  { icon: ShieldCheck, title: 'Alta Pureza', desc: 'Estándar mínimo de >99% de pureza, documentado por producto.' },
  { icon: Truck, title: 'Envío Seguro', desc: 'Empaque discreto desde el Reino Unido, con cadena de frío controlada.' },
  { icon: Headset, title: 'Atención Directa', desc: 'Comunicación directa con el equipo de PeptiLabs, sin intermediarios.' },
]

const howItWorks = [
  { icon: FlaskConical, title: 'Explora el catálogo', desc: 'Más de 40 péptidos de grado farmacéutico.' },
  { icon: MessageCircle, title: 'Contáctanos', desc: 'Escríbenos por WhatsApp sobre el producto de interés.' },
]

export default async function Home() {
  const products = await getProducts().catch(() => [])

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-28 w-full text-center">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs px-4 py-2 rounded-full mb-8 uppercase tracking-widest font-semibold">
            🇬🇧 Grado Farmacéutico · Reino Unido
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-5">
            PEPTI<span className="text-gold-400">LABS</span><span className="text-gold-400 text-2xl align-super">®</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            Péptidos de investigación de alta pureza. Enviados desde el Reino Unido 🇬🇧.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/products" className="btn-primary text-center text-base flex items-center justify-center gap-2">
              <FlaskConical size={18} /> Explorar Productos
            </Link>
            <Link href="/contact" className="btn-secondary text-center text-base flex items-center justify-center gap-2">
              <MessageCircle size={18} /> Contactar
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gold-500/10">
            {heroStats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-gold-400 font-black text-2xl sm:text-3xl">{value}</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Key Info Bar */}
      <section className="py-6 bg-navy-950 border-y border-gold-500/10 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-x-8 gap-y-3 flex-wrap text-sm">
          {trustBar.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-gray-300 whitespace-nowrap">
              <Icon size={16} className="text-gold-400 shrink-0" /> {label}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedCarousel products={products} />

      {/* Why PeptiLabs */}
      <section className="py-16 bg-navy-900 border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white">Por Qué PeptiLabs</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPeptilabs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gold-500/10 border border-gold-500/20 text-gold-400 rounded-2xl mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — kept small per brief: not a major homepage block */}
      <section className="py-10 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {howItWorks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-3 text-center sm:text-left">
              <Icon size={24} className="text-gold-400 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{title}</p>
                <p className="text-gray-500 text-xs">{desc}</p>
              </div>
            </div>
          ))}
          <Link href="/contact" className="btn-secondary text-sm py-2 px-5 shrink-0 sm:ml-auto">
            Contactar
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">¿Tienes preguntas?</h2>
          <p className="text-gray-400 mb-8">Contáctanos para orientación sobre los péptidos de investigación de nuestro catálogo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary flex items-center justify-center gap-2">
              <FlaskConical size={18} /> Ver Todos los Productos
            </Link>
            <Link href="/contact" className="btn-secondary flex items-center justify-center gap-2">
              <MessageCircle size={18} /> Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
