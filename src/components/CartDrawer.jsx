import { useEffect, useState } from 'react'
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle, Mail, FlaskConical, ArrowRight, Loader2, CheckCircle, AlertCircle, ArrowLeft, User, Phone, MessageSquare, AtSign } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const FORMSPREE_URL = 'https://formspree.io/f/mredzbbv'
const WHATSAPP_NUMBER = '8299098362'

function buildWhatsAppText(items, total, contact) {
  const lines = items.map(({ product, qty }) =>
    `• ${product.name} × ${qty} = RD$${Number(product.price * qty).toLocaleString()}`
  ).join('\n')

  return (
    `🛒 *NUEVO PEDIDO — PEPTILABS UK*\n\n` +
    `👤 *Cliente:* ${contact.name}\n` +
    `📱 *Tel:* ${contact.phone}\n` +
    (contact.email ? `📧 *Email:* ${contact.email}\n` : '') +
    (contact.note ? `📝 *Nota:* ${contact.note}\n` : '') +
    `\n*Productos:*\n${lines}\n\n` +
    `💰 *Total estimado: RD$${Number(total).toLocaleString()}*`
  )
}

function buildEmailText(items, total, contact) {
  const lines = items.map(({ product, qty }) => {
    const subtotal = Number(product.price * qty).toLocaleString()
    const unit = Number(product.price).toLocaleString()
    return `• ${product.name}\n  ${qty} ud${qty > 1 ? 's' : ''} × RD$${unit} = RD$${subtotal}`
  }).join('\n\n')

  return (
    `NUEVO PEDIDO — PEPTILABS UK\n` +
    `${'─'.repeat(30)}\n\n` +
    `CLIENTE:\n` +
    `  Nombre: ${contact.name}\n` +
    `  Teléfono / WhatsApp: ${contact.phone}\n` +
    (contact.email ? `  Email: ${contact.email}\n` : '') +
    (contact.note ? `  Nota: ${contact.note}\n` : '') +
    `\n${'─'.repeat(30)}\n\n` +
    `DETALLE DEL PEDIDO:\n\n` +
    `${lines}\n\n` +
    `${'─'.repeat(30)}\n` +
    `TOTAL ESTIMADO: RD$${Number(total).toLocaleString()}\n` +
    `${'─'.repeat(30)}`
  )
}

const EMPTY_CONTACT = { name: '', phone: '', email: '', note: '' }

export default function CartDrawer() {
  const { items, open, setOpen, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart()
  const { pathname, search } = useLocation()
  const [step, setStep] = useState('cart') // 'cart' | 'contact' | 'success'
  const [contact, setContact] = useState(EMPTY_CONTACT)
  const [sending, setSending] = useState(false) // 'wa' | 'email' | false
  const [error, setError] = useState(false)

  useEffect(() => { setOpen(false) }, [pathname, search])

  useEffect(() => {
    if (!open) {
      setStep('cart')
      setContact(EMPTY_CONTACT)
      setError(false)
    }
  }, [open])

  function goToContact() {
    setError(false)
    setStep('contact')
  }

  function fireFormspree() {
    const itemsSummary = items.map(({ product, qty }) =>
      `${product.name} × ${qty} = RD$${Number(product.price * qty).toLocaleString()}`
    ).join(' | ')
    const formData = new FormData()
    formData.append('_subject', `🛒 Nuevo Pedido de ${contact.name} — RD$${Number(totalPrice).toLocaleString()}`)
    if (contact.email) formData.append('_replyto', contact.email)
    if (contact.email) formData.append('email', contact.email)
    formData.append('nombre', contact.name)
    formData.append('telefono', contact.phone)
    formData.append('nota', contact.note || '—')
    formData.append('productos', itemsSummary)
    formData.append('total', `RD$${Number(totalPrice).toLocaleString()}`)
    formData.append('detalle', buildEmailText(items, totalPrice, contact))
    return fetch(FORMSPREE_URL, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })
  }

  async function submitViaWhatsApp(e) {
    e.preventDefault()
    setSending('wa')
    setError(false)
    try {
      fireFormspree().catch(() => {}) // background email backup
      const waText = encodeURIComponent(buildWhatsAppText(items, totalPrice, contact))
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, '_blank')
      clearCart()
      setStep('success')
    } catch (err) {
      console.error('Order error:', err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  async function submitViaEmail(e) {
    e.preventDefault()
    setSending('email')
    setError(false)
    try {
      const res = await fireFormspree()
      if (res.ok) {
        clearCart()
        setStep('success')
      } else {
        setError(true)
      }
    } catch (err) {
      console.error('Order error:', err)
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const headerTitle = step === 'contact' ? 'Datos de Contacto' : 'Mi Pedido'

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      <div className={`fixed top-16 right-0 h-[calc(100%-4rem)] w-full max-w-sm bg-navy-900 border-l border-t border-gold-500/20 z-50 flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gold-500/10 bg-navy-950">
          <div className="flex items-center gap-2">
            {step === 'contact' && (
              <button
                onClick={() => setStep('cart')}
                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-colors mr-1"
              >
                <ArrowLeft size={18} />
              </button>
            )}
            <ShoppingCart size={20} className="text-gold-400" />
            <h2 className="text-white font-bold text-lg">{headerTitle}</h2>
            {step === 'cart' && totalItems > 0 && (
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

        {/* ── STEP: CART ── */}
        {step === 'cart' && (
          <>
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
                      <div className="w-14 h-14 rounded-lg bg-navy-700 flex items-center justify-center shrink-0 overflow-hidden">
                        {product.image_url
                          ? <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                          : <FlaskConical size={22} className="text-gold-400/50" />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold leading-snug truncate">{product.name}</p>
                        <p className="text-gold-400 text-sm font-bold mt-0.5">
                          RD${Number(product.price * qty).toLocaleString()}
                        </p>
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

            {items.length > 0 && (
              <div className="border-t border-gold-500/10 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Total estimado</span>
                  <span className="text-gold-400 font-black text-xl">RD${Number(totalPrice).toLocaleString()}</span>
                </div>
                <p className="text-gray-600 text-xs">El precio final se confirma después de recibir tu pedido</p>
                <button
                  onClick={goToContact}
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
          </>
        )}

        {/* ── STEP: CONTACT FORM ── */}
        {step === 'contact' && (
          <form onSubmit={submitViaWhatsApp} className="flex flex-col flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
              <p className="text-gray-400 text-sm">Necesitamos tus datos para confirmar el pedido y contactarte.</p>

              {/* Order summary mini */}
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-4 space-y-1">
                {items.map(({ product, qty }) => (
                  <div key={product.id} className="flex justify-between text-sm">
                    <span className="text-gray-300 truncate max-w-[60%]">{product.name} × {qty}</span>
                    <span className="text-gold-400 font-semibold shrink-0">RD${Number(product.price * qty).toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-2 border-t border-navy-700 mt-2">
                  <span className="text-gray-400">Total estimado</span>
                  <span className="text-gold-400 font-black">RD${Number(totalPrice).toLocaleString()}</span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1.5">
                  Nombre completo <span className="text-gold-400">*</span>
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={contact.name}
                    onChange={e => setContact(c => ({ ...c, name: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500/60 text-white placeholder-gray-600 rounded-lg pl-9 pr-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1.5">
                  Teléfono / WhatsApp <span className="text-gold-400">*</span>
                </label>
                <div className="relative">
                  <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 809-555-0000"
                    value={contact.phone}
                    onChange={e => setContact(c => ({ ...c, phone: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500/60 text-white placeholder-gray-600 rounded-lg pl-9 pr-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email (optional) */}
              <div>
                <label className="block text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1.5">
                  Correo electrónico <span className="text-gray-600 font-normal">(opcional)</span>
                </label>
                <div className="relative">
                  <AtSign size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={contact.email}
                    onChange={e => setContact(c => ({ ...c, email: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500/60 text-white placeholder-gray-600 rounded-lg pl-9 pr-4 py-2.5 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Note (optional) */}
              <div>
                <label className="block text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1.5">
                  Nota adicional <span className="text-gray-600 font-normal">(opcional)</span>
                </label>
                <div className="relative">
                  <MessageSquare size={15} className="absolute left-3 top-3 text-gray-500" />
                  <textarea
                    rows={2}
                    placeholder="Dirección, preferencia de entrega, etc."
                    value={contact.note}
                    onChange={e => setContact(c => ({ ...c, note: e.target.value }))}
                    className="w-full bg-navy-800 border border-navy-600 focus:border-gold-500/60 text-white placeholder-gray-600 rounded-lg pl-9 pr-4 py-2.5 text-sm outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-900/20 border border-red-500/30 rounded-lg px-3 py-2">
                  <AlertCircle size={16} className="text-red-400 shrink-0" />
                  <p className="text-red-400 text-xs">Error al enviar. Verifica tu conexión e intenta de nuevo.</p>
                </div>
              )}
            </div>

            <div className="border-t border-gold-500/10 p-5 space-y-2">
              <button
                type="submit"
                disabled={!!sending}
                className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sending === 'wa'
                  ? <><Loader2 size={20} className="animate-spin" /> Abriendo WhatsApp...</>
                  : <><MessageCircle size={20} /> Confirmar por WhatsApp</>
                }
              </button>
              <button
                type="button"
                disabled={!!sending}
                onClick={submitViaEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm text-gray-400 hover:text-white border border-navy-700 hover:border-navy-500 rounded-xl transition-colors disabled:opacity-50"
              >
                {sending === 'email'
                  ? <><Loader2 size={15} className="animate-spin" /> Enviando...</>
                  : <><Mail size={15} /> No tengo WhatsApp — enviar por email</>
                }
              </button>
            </div>
          </form>
        )}

        {/* ── STEP: SUCCESS ── */}
        {step === 'success' && (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <CheckCircle size={36} className="text-green-400" />
            </div>
            <p className="text-white font-black text-xl">¡Pedido Recibido!</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Gracias, <span className="text-white font-semibold">{contact.name}</span>. Revisaremos tu pedido y te contactaremos al <span className="text-gold-400 font-semibold">{contact.phone}</span> para confirmar disponibilidad y coordinar el pago.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="btn-primary w-full py-3 text-sm mt-4"
            >
              Cerrar
            </button>
          </div>
        )}
      </div>
    </>
  )
}
