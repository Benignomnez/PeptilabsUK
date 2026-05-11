import { Link, NavLink } from 'react-router-dom'
import { Menu, X, FlaskConical, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { totalItems, setOpen: setCartOpen } = useCart()

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-gold-400 font-semibold'
      : 'text-gray-300 hover:text-gold-400 transition-colors'

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-navy-900/95 backdrop-blur border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <FlaskConical className="text-gold-400" size={22} />
          <span className="font-black text-lg tracking-tight">
            PEPTI<span className="text-gold-400">LABS</span>
            <span className="text-gold-400 text-xs align-super">®</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/admin" className={linkClass}>Admin</NavLink>
          <a
            href={`https://wa.me/8499255780`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4"
          >
            Order Now
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="relative text-gray-300 hover:text-gold-400 transition-colors"
            aria-label="Ver pedido"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold-500 text-navy-900 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-800 border-t border-gold-500/20 px-4 py-4 flex flex-col gap-4">
          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" className={linkClass} onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="/admin" className={linkClass} onClick={() => setOpen(false)}>Admin</NavLink>
          <a href="https://wa.me/8499255780" target="_blank" rel="noopener noreferrer" className="btn-primary text-center text-sm">Order Now</a>
        </div>
      )}
    </nav>
  )
}
