import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Metodología | PeptiLabs UK®',
  description: 'Metodología de testing y publicación de Certificados de Análisis de PeptiLabs UK.',
  alternates: { canonical: '/coa/methodology' },
}

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/coa" className="flex items-center gap-2 text-gray-500 hover:text-gold-600 transition-colors text-sm w-fit mb-4">
            <ArrowLeft size={16} /> Volver a certificados
          </Link>
          <p className="text-gold-600 uppercase tracking-widest text-sm font-semibold mb-2">Calidad & Testing</p>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900">Metodología</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6 text-gray-600 leading-relaxed">
        <p>
          Publicamos dos tipos de documentos en esta sección. Un <strong className="text-gray-900">certificado propio</strong> corresponde a una muestra de nuestro propio inventario, analizada por un laboratorio de terceros independiente contratado específicamente para ese lote. Una <strong className="text-gray-900">referencia de terceros</strong> es un certificado real, también de un laboratorio independiente, pero emitido originalmente a otro proveedor para su propia muestra — lo publicamos únicamente como referencia general de la calidad típica del compuesto, mientras completamos el testing de nuestros propios lotes. Cada certificado indica claramente a cuál de los dos tipos corresponde.
        </p>
        <p>
          El método de referencia habitual es <strong className="text-gray-900">HPLC (Cromatografía Líquida de Alta Eficiencia)</strong>, el estándar de la industria para verificar la identidad de compuestos peptídicos. Cada certificado detalla la especificación evaluada, el resultado medido y el estado de conformidad.
        </p>
        <p>
          Un certificado propio corresponde a una muestra y un lote específicos — no es una certificación general del producto ni de lotes futuros. Publicamos certificados propios de forma progresiva a medida que el testing de terceros está disponible para cada producto; no todos los productos del catálogo tienen uno publicado en todo momento.
        </p>
        <p>
          Los documentos se muestran en un visor de solo consulta, con una marca de procedencia visible. Esta marca identifica dónde se publicó el documento y no constituye una certificación adicional por parte de PeptiLabs UK.
        </p>
        <p>
          Si tienes dudas sobre un certificado específico o necesitas más información, puedes{' '}
          <Link href="/contact" className="text-gold-600 hover:underline">contactarnos</Link>.
        </p>
      </div>
    </div>
  )
}
