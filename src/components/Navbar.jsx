import { Link, NavLink } from 'react-router-dom'
import { FlaskConical, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-brand-400 font-semibold'
      : 'text-gray-300 hover:text-white transition-colors'

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <FlaskConical className="text-brand-400" size={22} />
          PeptiLabs<span className="text-brand-400">UK</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/admin" className={linkClass}>Admin</NavLink>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="/admin" className={linkClass} onClick={() => setOpen(false)}>Admin</NavLink>
        </div>
      )}
    </nav>
  )
}
