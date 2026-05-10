import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '8499255780'

export function WhatsAppOrderButton({ product }) {
  const message = `Hello, I'm interested in ordering:\n\nProduct: ${product.name}\nPrice: £${product.price}\n\nPlease let me know availability.`
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors w-full"
    >
      <MessageCircle size={18} />
      Order via WhatsApp
    </a>
  )
}

export function WhatsAppFloating() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I'd like to know more about your peptides.")}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  )
}
