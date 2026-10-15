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
          Los Certificados de Análisis (CoA) publicados en esta sección son emitidos por laboratorios de terceros independientes, contratados específicamente para analizar muestras de nuestro inventario.
        </p>
        <p>
          El método de referencia es <strong className="text-gray-900">HPLC (Cromatografía Líquida de Alta Eficiencia)</strong>, el estándar de la industria para verificar la identidad de compuestos peptídicos. Cada certificado detalla la especificación evaluada, el resultado medido y el estado de conformidad.
        </p>
        <p>
          Un certificado corresponde a una muestra y un lote específicos — no es una certificación general del producto ni de lotes futuros. Publicamos certificados de forma progresiva a medida que el testing de terceros está disponible para cada producto; no todos los productos del catálogo tienen un certificado publicado en todo momento.
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
