import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle, FlaskConical, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const WHATSAPP_NUMBER = '8499255780'

function buildMessage(items, total) {
  const lines = items.map(({ product, qty }) =>
    `• ${product.name} x${qty} — RD$${Number(product.price * qty).toLocaleString()}`
  ).join('\n')
  return `Hola, quisiera realizar el siguiente pedido:\n\n${lines}\n\n*Total: RD$${Number(total).toLocaleString()}*\n\n¿Pueden confirmar disponibilidad?`
}

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart()

  function sendOrder() {
    const msg = buildMessage(items, totalPrice)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      {/* Overlay — z-40, drawer es z-50 */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer — empieza debajo del navbar (top-16) */}
      <div className={`fixed top-16 right-0 h-[calc(100%-4rem)] w-full max-w-sm bg-navy-900 border-l border-t border-gold-500/20 z-50 flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gold-500/10 bg-navy-950">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} className="text-gold-400" />
            <h2 className="text-white font-bold text-lg">Mi Pedido</h2>
            {totalItems > 0 && (
              <span className="bg-gold-500 text-navy-900 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-700 hover:bg-navy-600 text-gray-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <FlaskConical size={48} className="text-gold-400/20 mb-4" />
              <p className="text-gray-300 font-semibold text-lg">Tu pedido está vacío</p>
              <p className="text-gray-500 text-sm mt-1 mb-8">Agrega productos desde el catálogo</p>
              <Link
                to="/products"
                onClick={() => setOpen(false)}
                className="btn-primary flex items-center gap-2 text-sm px-6 py-3"
              >
                Ver Catálogo <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, qty }) => (
                <div key={product.id} className="flex gap-3 bg-navy-800 border border-navy-700 rounded-xl p-3">
                  {/* Image / icon */}
                  <div className="w-14 h-14 rounded-lg bg-navy-700 flex items-center justify-center shrink-0 overflow-hidden">
                    {product.image_url
                      ? <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                      : <FlaskConical size={22} className="text-gold-400/50" />
                    }
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-semibold leading-snug truncate">{product.name}</p>
                    <p className="text-gold-400 text-sm font-bold mt-0.5">
                      RD${Number(product.price * qty).toLocaleString()}
                    </p>

                    {/* Qty controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(product.id, qty - 1)}
                        className="w-6 h-6 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center text-gray-300 hover:border-gold-500/50 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-white text-sm font-bold w-5 text-center">{qty}</span>
                      <button
                        onClick={() => updateQty(product.id, qty + 1)}
                        className="w-6 h-6 rounded-full bg-navy-700 border border-navy-600 flex items-center justify-center text-gray-300 hover:border-gold-500/50 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="ml-auto text-gray-600 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gold-500/10 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Total estimado</span>
              <span className="text-gold-400 font-black text-xl">RD${Number(totalPrice).toLocaleString()}</span>
            </div>
            <p className="text-gray-600 text-xs">El precio final se confirma por WhatsApp</p>

            <button
              onClick={sendOrder}
              className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base"
            >
              <MessageCircle size={20} /> Enviar Pedido por WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-gray-600 hover:text-red-400 transition-colors py-1"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  )
}
