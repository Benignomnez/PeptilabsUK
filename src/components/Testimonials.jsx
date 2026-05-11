import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos M.',
    location: 'Santo Domingo, RD',
    rating: 5,
    text: 'Los péptidos de PeptiLabs son de una calidad impresionante. El BPC-157 aceleró mi recuperación después de una lesión. Llegó bien empacado y discreto. 100% recomendado.',
    product: 'BPC-157',
  },
  {
    name: 'Maria R.',
    location: 'Santiago, RD',
    rating: 5,
    text: 'Llevo 3 meses usando Tirzepatide y los resultados son increíbles. El servicio al cliente es excelente, siempre dispuestos a orientarme. Envío rápido desde UK.',
    product: 'Tirzepatide 20mg',
  },
  {
    name: 'Luis A.',
    location: 'Punta Cana, RD',
    rating: 5,
    text: 'PeptiLabs tiene el mejor CJC-1295 DAC que he probado. Pureza garantizada, resultados visibles. El proceso de pedido por WhatsApp es muy fácil y rápido.',
    product: 'CJC-1295 DAC',
  },
  {
    name: 'Ana P.',
    location: 'La Romana, RD',
    rating: 5,
    text: 'El NAD+ 500mg ha transformado mi energía y enfoque. La calidad farmacéutica se nota desde el primer uso. Seguiré comprando en PeptiLabs sin duda.',
    product: 'NAD+ 500mg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Testimonios</p>
          <h2 className="text-3xl font-black text-white">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">Miles de clientes satisfechos en toda la República Dominicana y el Caribe</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-5 flex flex-col gap-3 hover:border-gold-500/40 transition-colors">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="border-t border-navy-700 pt-3">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.location}</p>
                <span className="inline-block mt-1 text-xs text-gold-400/70 bg-gold-400/10 px-2 py-0.5 rounded-full">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
