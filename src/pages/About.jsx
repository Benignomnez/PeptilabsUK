import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ShieldCheck, Microscope, Globe, Award, FlaskConical, CheckCircle, Users, Zap, MessageCircle } from 'lucide-react'
import { WhatsAppFloating } from '../components/WhatsAppButton'

const values = [
  {
    icon: Microscope,
    title: 'Ciencia Rigurosa',
    desc: 'Cada péptido es respaldado por investigación científica peer-reviewed. No lanzamos productos sin evidencia sólida detrás.'
  },
  {
    icon: ShieldCheck,
    title: 'Calidad Sin Compromiso',
    desc: 'Producción bajo estándares GMP. Análisis HPLC independiente en cada lote. Pureza mínima garantizada del 99%.'
  },
  {
    icon: Globe,
    title: 'Transparencia Total',
    desc: 'Compartimos resultados de análisis de cada lote. Nada que esconder — todo verificable y documentado.'
  },
  {
    icon: Zap,
    title: 'Innovación Constante',
    desc: 'Monitoreamos continuamente los avances en investigación peptídica para ofrecer siempre lo más relevante.'
  },
]

const stats = [
  { value: '10+', label: 'Años de experiencia', sub: 'en investigación peptídica' },
  { value: '43+', label: 'Péptidos disponibles', sub: 'en catálogo activo' },
  { value: '>99%', label: 'Pureza mínima', sub: 'certificada por HPLC' },
  { value: '100%', label: 'Envíos seguros', sub: 'desde Reino Unido' },
]

const certifications = [
  { icon: '📋', title: 'Certificado GMP', desc: 'Buenas Prácticas de Manufactura — los más altos estándares de fabricación farmacéutica.' },
  { icon: '🔬', title: 'Analizado HPLC', desc: 'Cromatografía Líquida de Alta Eficiencia — cada lote analizado individualmente.' },
  { icon: '🏛️', title: 'Estándares ISO', desc: 'Cumplimiento con estándares internacionales de calidad y gestión de laboratorio.' },
  { icon: '📦', title: 'Cadena de Frío', desc: 'Cadena de frío controlada desde producción hasta entrega en tu puerta.' },
]

export default function About() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Sobre Nosotros | PeptiLabs UK® | 10+ Años en Investigación Peptídica</title>
        <meta name="description" content="PeptiLabs UK — más de 10 años liderando investigación peptídica de grado farmacéutico. Certificados GMP, verificados HPLC. Comprometidos con la ciencia, la ética y la excelencia." />
        <link rel="canonical" href="https://peptilabsuk.com/about" />
        <meta property="og:title" content="Sobre PeptiLabs UK® | Investigación Peptídica Farmacéutica" />
        <meta property="og:description" content="10+ años liderando investigación peptídica. Certificados GMP, verificados HPLC, envío discreto desde Reino Unido." />
        <meta property="og:url" content="https://peptilabsuk.com/about" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80&auto=format&fit=crop"
            alt="Laboratory research"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs px-4 py-2 rounded-full mb-6 uppercase tracking-widest font-semibold">
              🇬🇧 Pharmaceutical Grade · United Kingdom
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-none mb-6">
              Sobre <span className="text-gold-400">PeptiLabs</span><span className="text-gold-400 text-2xl align-super">®</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
              Nacimos de una convicción simple: la investigación científica merece acceso a péptidos de la más alta calidad, con total transparencia y desde una fuente en la que puedas confiar.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-navy-950 border-y border-gold-500/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <p className="text-gold-400 font-black text-4xl">{value}</p>
              <p className="text-white font-semibold text-sm mt-1">{label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-3">Nuestra Historia</p>
            <h2 className="text-4xl font-black text-white mb-6">Fundados en la ciencia. <br />Guiados por la integridad.</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                PeptiLabs UK nació del trabajo de un grupo de investigadores y bioquímicos del Reino Unido que identificaron una brecha crítica en el mercado: los laboratorios de investigación necesitaban acceso a péptidos de grado farmacéutico sin tener que navegar por un ecosistema opaco y de dudosa calidad.
              </p>
              <p>
                Desde nuestras instalaciones en el Reino Unido, desarrollamos un proceso de producción que combina síntesis peptídica de última generación con controles de calidad independientes. Cada vial que sale de nuestra planta ha pasado por al menos tres etapas de verificación antes de ser empacado.
              </p>
              <p>
                Hoy servimos a investigadores en toda Latinoamérica, Europa y más allá — siempre con el mismo compromiso: <strong className="text-white">péptidos reales, pureza verificable, entrega confiable.</strong>
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&auto=format&fit=crop"
              alt="Pharmaceutical laboratory"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ height: 420 }}
            />
            <div className="absolute -bottom-6 -left-6 bg-navy-800 border border-gold-500/20 rounded-xl p-4 shadow-xl">
              <p className="text-gold-400 font-black text-2xl">GMP</p>
              <p className="text-white text-xs font-semibold">Certified Facility</p>
              <p className="text-gray-500 text-xs">United Kingdom 🇬🇧</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&auto=format&fit=crop"
              alt="Research peptides"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ height: 420 }}
            />
            <div className="absolute -top-6 -right-6 bg-gold-500 text-navy-900 rounded-xl p-4 shadow-xl">
              <Award size={28} />
              <p className="text-xs font-black mt-1">HPLC<br />VERIFIED</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-3">Nuestra Misión</p>
            <h2 className="text-4xl font-black text-white mb-6">Elevar el estándar de la investigación peptídica.</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>
                Nuestra misión es democratizar el acceso a péptidos de investigación de calidad farmacéutica. Creemos que los científicos y laboratorios no deberían tener que comprometer la integridad de su investigación por falta de un proveedor confiable.
              </p>
              <p>
                Operamos con un modelo simple: fabricamos con los estándares más altos, verificamos cada lote de forma independiente, y enviamos directamente desde el Reino Unido con total discreción y trazabilidad.
              </p>
            </div>
            <div className="space-y-3">
              {['Análisis HPLC independiente en cada lote', 'Certificados de análisis disponibles bajo solicitud', 'Cadena de frío controlada en todo el proceso', 'Envío discreto con número de tracking incluido'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-gold-400 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Lo que nos define</p>
            <h2 className="text-4xl font-black text-white">Nuestros Valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-navy-800 border border-navy-700 hover:border-gold-500/30 rounded-2xl p-6 transition-colors">
                <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-gold-400" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Cumplimiento y Calidad</p>
            <h2 className="text-4xl font-black text-white">Certificaciones y Estándares</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">Cumplimos con los marcos regulatorios más exigentes del mundo para garantizar la integridad de cada producto.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map(({ icon, title, desc }) => (
              <div key={title} className="text-center p-6">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab image full width */}
      <section className="relative h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=1600&q=80&auto=format&fit=crop"
          alt="Research laboratory UK"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <FlaskConical size={48} className="text-gold-400 mx-auto mb-4" />
            <p className="text-white font-black text-3xl">Producido en el <span className="text-gold-400">Reino Unido 🇬🇧</span></p>
            <p className="text-gray-400 mt-2">Instalaciones GMP certificadas · Bajo los estándares más exigentes</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">¿Tienes preguntas sobre nuestros productos?</h2>
          <p className="text-gray-400 mb-8 text-lg">Nuestro equipo de especialistas está disponible para orientarte sobre el péptido adecuado para tu investigación.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products" className="btn-primary flex items-center justify-center gap-2 text-base">
              <FlaskConical size={18} /> Ver Catálogo Completo
            </Link>
            <a
              href="https://wa.me/8499255780?text=Hola%2C+quisiera+más+información+sobre+PeptiLabs+UK."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2 text-base"
            >
              <MessageCircle size={18} /> Hablar con un Especialista
            </a>
          </div>
        </div>
      </section>

      <WhatsAppFloating />
    </div>
  )
}
