'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, FlaskConical, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Inicio', exact: true },
  { href: '/products', label: 'Productos' },
  { href: '/research', label: 'Research' },
  { href: '/quality-testing', label: 'Calidad & Testing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'Nosotros' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function linkClass(href, exact = false) {
    const isActive = exact ? pathname === href : pathname.startsWith(href)
    return isActive ? 'text-gold-400 font-semibold' : 'text-gray-300 hover:text-gold-400 transition-colors'
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-navy-900/95 backdrop-blur border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <FlaskConical className="text-gold-400" size={22} />
          <span className="font-black text-lg tracking-tight">
            PEPTI<span className="text-gold-400">LABS</span>
            <span className="text-gold-400 text-xs align-super">®</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-5 text-sm">
          {NAV_LINKS.map(({ href, label, exact }) => (
            <Link key={href} href={href} className={linkClass(href, exact)}>{label}</Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm py-2 px-4 flex items-center gap-1.5">
            <MessageCircle size={15} /> Contactar
          </Link>
        </div>

        <button className="lg:hidden text-gray-300" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-800 border-t border-gold-500/20 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label, exact }) => (
            <Link key={href} href={href} className={linkClass(href, exact)} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" className="btn-primary text-center text-sm flex items-center justify-center gap-1.5" onClick={() => setOpen(false)}>
            <MessageCircle size={16} /> Contactar
          </Link>
        </div>
      )}
    </nav>
  )
}
