import { Link } from 'react-router-dom'
import { FlaskConical, MessageCircle, Instagram, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical className="text-gold-400" size={20} />
            <span className="font-black text-lg">
              PEPTI<span className="text-gold-400">LABS</span>
              <span className="text-gold-400 text-xs align-super">®</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Investigación peptídica de grado farmacéutico. Enviado desde el Reino Unido 🇬🇧
          </p>
          <p className="text-gold-400/70 text-xs italic">
            Ciencia que transforma • Calidad que se siente
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-gold-400 transition-colors">Inicio</Link></li>
            <li><Link to="/products" className="hover:text-gold-400 transition-colors">Todos los Productos</Link></li>
            <li><Link to="/about" className="hover:text-gold-400 transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/products?cat=Regeneraci%C3%B3n+%26+Salud" className="hover:text-gold-400 transition-colors">Regeneración & Salud</Link></li>
            <li><Link to="/products?cat=P%C3%A9rdida+de+Grasa+%26+Metabolismo" className="hover:text-gold-400 transition-colors">Pérdida de Grasa</Link></li>
            <li><Link to="/products?cat=Hormonales+%26+Crecimiento" className="hover:text-gold-400 transition-colors">Hormonales & Crecimiento</Link></li>
            <li><Link to="/products?cat=Est%C3%A9tica+%26+Anti-Aging" className="hover:text-gold-400 transition-colors">Estética & Anti-Aging</Link></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Contacto</h4>
          <div className="flex flex-col gap-3">
            <a href="https://wa.me/8499255780" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
              <MessageCircle size={18} className="text-green-400" /> Pedidos por WhatsApp
            </a>
            <a href="https://instagram.com/peptilabsuk" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
              <Instagram size={18} className="text-pink-400" /> @peptilabsuk
            </a>
            <a href="https://t.me/peptilabsuk" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-400 hover:text-gold-400 transition-colors">
              <Send size={18} className="text-blue-400" /> Canal de Telegram
            </a>
          </div>
          <div className="mt-6 p-3 bg-navy-800 rounded-lg border border-gold-500/20">
            <p className="text-xs text-gray-400">📦 Shipped from <span className="text-white font-semibold">United Kingdom 🇬🇧</span></p>
            <p className="text-xs text-gray-400 mt-1">🔬 Grado Farmacéutico</p>
            <p className="text-xs text-gray-400 mt-1">✅ Entrega 100% Segura</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-500/10 py-6 text-center text-xs text-gray-600 px-4">
        <p>© {new Date().getFullYear()} PeptiLabs UK. All rights reserved. For research purposes only.</p>
        <p className="mt-1 text-gold-400/40">CIENCIA QUE TRANSFORMA • CALIDAD QUE SE SIENTE • RESULTADOS QUE IMPORTAN</p>
      </div>
    </footer>
  )
}
