import { useEffect, useState } from 'react'
import { Package, Eye, EyeOff, TrendingUp } from 'lucide-react'
import { getAllProducts } from '../../services/products'

export default function AdminDashboard() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllProducts().then(setProducts).finally(() => setLoading(false))
  }, [])

  const stats = [
    { label: 'Total Productos', value: products.length, icon: Package, color: 'text-brand-400' },
    { label: 'Visibles', value: products.filter(p => p.visible).length, icon: Eye, color: 'text-blue-400' },
    { label: 'Ocultos', value: products.filter(p => !p.visible).length, icon: EyeOff, color: 'text-gray-400' },
    { label: 'Sin Stock', value: products.filter(p => p.stock === 0).length, icon: TrendingUp, color: 'text-red-400' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Panel Principal</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="card p-5">
            <div className={`${color} mb-3`}>
              <Icon size={22} />
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {loading ? '—' : value}
            </div>
            <div className="text-gray-400 text-sm">{label}</div>
          </div>
        ))}
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Alerta Stock Bajo</h2>
        {loading ? (
          <p className="text-gray-400">Cargando...</p>
        ) : products.filter(p => p.stock > 0 && p.stock <= 5).length === 0 ? (
          <p className="text-gray-400 text-sm">Todos los productos tienen stock suficiente.</p>
        ) : (
          <div className="space-y-3">
            {products
              .filter(p => p.stock > 0 && p.stock <= 5)
              .map(p => (
                <div key={p.id} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                  <span className="text-gray-200 text-sm">{p.name}</span>
                  <span className="text-yellow-400 text-sm font-semibold">{p.stock} restantes</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
