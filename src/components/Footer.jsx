import Link from 'next/link'
import { FlaskConical, MessageCircle, Instagram, Send } from 'lucide-react'
import ResearchDisclaimer from './ResearchDisclaimer'

const EXPLORE_LINKS = [
  { href: '/products', label: 'Productos' },
  { href: '/research', label: 'Research' },
  { href: '/quality-testing', label: 'Calidad & Testing' },
  { href: '/blog', label: 'Blog' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'Sobre Nosotros' },
  { href: '/contact', label: 'Contacto' },
  { href: '/faq', label: 'Preguntas Frecuentes' },
]

const LEGAL_LINKS = [
  { href: '/privacy-policy', label: 'Política de Privacidad' },
  { href: '/terms', label: 'Términos & Condiciones' },
  { href: '/research-disclaimer', label: 'Aviso de Investigación' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical className="text-gold-400" size={20} />
            <span className="font-black text-lg">
              PEPTI<span className="text-gold-400">LABS</span>
              <span className="text-gold-400 text-xs align-super">®</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Investigación peptídica de grado farmacéutico. Enviado desde el Reino Unido 🇬🇧
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Explorar</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {EXPLORE_LINKS.map(({ href, label }) => (
              <li key={href}><Link href={href} className="hover:text-gold-400 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Compañía</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {COMPANY_LINKS.map(({ href, label }) => (
              <li key={href}><Link href={href} className="hover:text-gold-400 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {LEGAL_LINKS.map(({ href, label }) => (
              <li key={href}><Link href={href} className="hover:text-gold-400 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact row */}
      <div className="border-t border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-wrap gap-6">
          <a href="https://wa.me/8299098362" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors">
            <MessageCircle size={16} className="text-green-400" /> WhatsApp
          </a>
          <a href="https://instagram.com/peptilabsuk" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors">
            <Instagram size={16} className="text-pink-400" /> @peptilabsuk
          </a>
          <a href="https://t.me/peptilabsuk" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gold-400 transition-colors">
            <Send size={16} className="text-blue-400" /> Telegram
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
        <ResearchDisclaimer compact />
      </div>

      <div className="border-t border-gold-500/10 py-6 text-center text-xs text-gray-600 px-4">
        <p>© {new Date().getFullYear()} PeptiLabs UK. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
