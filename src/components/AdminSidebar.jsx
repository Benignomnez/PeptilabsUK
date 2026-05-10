import { NavLink, useNavigate } from 'react-router-dom'
import { FlaskConical, LayoutDashboard, Package, LogOut } from 'lucide-react'
import { supabase } from '../services/supabase'

export default function AdminSidebar() {
  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
      isActive
        ? 'bg-brand-500/20 text-brand-400'
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`

  async function handleLogout() {
    await supabase.auth.signOut()
    navigate('/login')
  }

  return (
    <aside className="w-64 shrink-0 bg-gray-900 border-r border-gray-800 min-h-screen flex flex-col p-4">
      <div className="flex items-center gap-2 text-white font-bold text-lg px-4 py-3 mb-4">
        <FlaskConical className="text-brand-400" size={20} />
        Admin Panel
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        <NavLink to="/admin" end className={linkClass}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>
        <NavLink to="/admin/products" className={linkClass}>
          <Package size={18} /> Products
        </NavLink>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors font-medium"
      >
        <LogOut size={18} /> Logout
      </button>
    </aside>
  )
}
