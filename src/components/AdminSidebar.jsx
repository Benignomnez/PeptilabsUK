'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FlaskConical, LayoutDashboard, Package, LogOut, Upload } from 'lucide-react'
import { supabase } from '../services/supabase'

export default function AdminSidebar() {
  const router = useRouter()
  const pathname = usePathname()

  function linkClass(href, exact = false) {
    const isActive = exact ? pathname === href : pathname.startsWith(href)
    return `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
      isActive ? 'bg-gold-500/20 text-gold-400' : 'text-gray-400 hover:bg-navy-700 hover:text-white'
    }`
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <aside className="w-64 shrink-0 bg-navy-800 border-r border-gold-500/20 min-h-screen flex flex-col p-4">
      <div className="flex items-center gap-2 px-4 py-3 mb-4">
        <FlaskConical className="text-gold-400" size={20} />
        <span className="font-black text-white">PEPTI<span className="text-gold-400">LABS</span></span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        <Link href="/admin" className={linkClass('/admin', true)}>
          <LayoutDashboard size={18} /> Panel Principal
        </Link>
        <Link href="/admin/products" className={linkClass('/admin/products')}>
          <Package size={18} /> Productos
        </Link>
        <Link href="/admin/bulk-upload" className={linkClass('/admin/bulk-upload')}>
          <Upload size={18} /> Carga Masiva
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-navy-700 hover:text-white transition-colors font-medium"
      >
        <LogOut size={18} /> Cerrar Sesión
      </button>
    </aside>
  )
}
