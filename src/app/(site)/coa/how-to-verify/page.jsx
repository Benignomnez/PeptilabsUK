import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Cómo Verificar un CoA | PeptiLabs UK®',
  description: 'Guía para verificar un Certificado de Análisis: qué revisar antes de asociar un documento a un producto.',
  alternates: { canonical: '/coa/how-to-verify' },
}

const steps = [
  {
    title: 'Nombre del producto y presentación',
    desc: 'Confirma que el nombre y la concentración (mg) en el certificado coincidan exactamente con el producto que estás revisando.',
  },
  {
    title: 'Código de muestra y lote',
    desc: 'Cada certificado corresponde a un lote específico. El código de muestra/lote en el documento debe coincidir con el de tu producto, no solo el nombre del compuesto.',
  },
  {
    title: 'Laboratorio emisor',
    desc: 'Verifica que el certificado haya sido emitido por un laboratorio de terceros independiente, no por el propio fabricante o vendedor.',
  },
  {
    title: 'Fecha de recepción y publicación',
    desc: 'Un certificado reciente refleja mejor el estado actual del inventario que uno de hace mucho tiempo.',
  },
  {
    title: 'Método de análisis',
    desc: 'HPLC (Cromatografía Líquida de Alta Eficiencia) es el método estándar de la industria para verificar la identidad de péptidos.',
  },
  {
    title: 'Resultado y estado',
    desc: 'Revisa la tabla de resultados: cada parámetro evaluado debe tener una especificación y un resultado medido, no solo una afirmación general.',
  },
  {
    title: 'Limitaciones',
    desc: 'Un certificado confirma la muestra analizada en ese momento. No es una garantía indefinida ni cubre el producto fuera del lote certificado.',
  },
]

export default function HowToVerifyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/coa" className="flex items-center gap-2 text-gray-500 hover:text-gold-600 transition-colors text-sm w-fit mb-4">
            <ArrowLeft size={16} /> Volver a certificados
          </Link>
          <p className="text-gold-600 uppercase tracking-widest text-sm font-semibold mb-2">Calidad & Testing</p>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900">Cómo Verificar un CoA</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-8">
        {steps.map(({ title, desc }, i) => (
          <div key={title} className="flex gap-4">
            <div className="w-8 h-8 shrink-0 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 font-bold text-sm flex items-center justify-center">
              {i + 1}
            </div>
            <div>
              <h2 className="text-gray-900 font-bold mb-1">{title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
