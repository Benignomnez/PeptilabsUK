import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '8499255780'

export function WhatsAppOrderButton({ product }) {
  const message = `Hola, estoy interesado en ordenar:\n\nProducto: ${product.name}\nPrecio: RD$${Number(product.price).toLocaleString()}\n\nPor favor indíqueme disponibilidad.`
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-lg transition-colors w-full text-sm"
    >
      <MessageCircle size={16} />
      Ordenar por WhatsApp
    </a>
  )
}

export function WhatsAppFloating() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría conocer más sobre sus péptidos.')}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-xl transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}
