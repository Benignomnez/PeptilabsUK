import { MessageCircle, Instagram, Send } from 'lucide-react'
import ConsultaForm from '../../../components/ConsultaForm'

export const metadata = {
  title: 'Contacto | PeptiLabs UK®',
  description: 'Contacta a PeptiLabs UK por WhatsApp, Instagram o Telegram para resolver dudas sobre nuestros péptidos de investigación.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contacto | PeptiLabs UK®',
    description: 'WhatsApp, Instagram y Telegram — elige el canal que prefieras.',
    url: '/contact',
  },
}

const CHANNELS = [
  {
    icon: MessageCircle,
    color: 'text-green-400',
    label: 'WhatsApp',
    sub: 'Respuesta más rápida',
    href: 'https://wa.me/8299098362',
  },
  {
    icon: Instagram,
    color: 'text-pink-400',
    label: '@peptilabsuk',
    sub: 'Instagram',
    href: 'https://instagram.com/peptilabsuk',
  },
  {
    icon: Send,
    color: 'text-blue-400',
    label: 'Telegram',
    sub: 'Canal informativo',
    href: 'https://t.me/peptilabsuk',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Contacto</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Habla con nosotros</h1>
          <p className="text-gray-400 mt-3">Elige el canal que prefieras — normalmente respondemos el mismo día.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-4 mb-14">
          {CHANNELS.map(({ icon: Icon, color, label, sub, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex flex-col items-center text-center gap-2 hover:border-gold-500/40 transition-colors"
            >
              <Icon size={24} className={color} />
              <span className="text-white font-semibold text-sm">{label}</span>
              <span className="text-gray-500 text-xs">{sub}</span>
            </a>
          ))}
        </div>

        <div className="p-8 bg-navy-950 border border-gold-500/20 rounded-2xl text-center">
          <h2 className="text-white text-xl font-black mb-2">¿Prefieres que te contactemos nosotros?</h2>
          <p className="text-gray-400 text-sm mb-2 max-w-md mx-auto">Déjanos tus datos y te respondemos a la brevedad.</p>
          <ConsultaForm />
        </div>
      </div>
    </div>
  )
}
