import Link from 'next/link'
import CoaIndexClient from '../../../components/CoaIndexClient'
import { getCoas } from '../../../services/coas'

export const metadata = {
  title: 'Certificados de Análisis | PeptiLabs UK®',
  description: 'Certificados de análisis (CoA) de PeptiLabs UK, publicados por laboratorios de terceros para verificación independiente de identidad.',
  alternates: { canonical: '/coa' },
  openGraph: {
    title: 'Certificados de Análisis | PeptiLabs UK®',
    description: 'Documentación de testing independiente publicada por certificado y lote.',
    url: '/coa',
  },
}

export default async function CoaIndexPage() {
  const coas = await getCoas().catch(() => [])

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-gold-600 uppercase tracking-widest text-sm font-semibold mb-2">Calidad & Testing</p>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Certificados de Análisis</h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed">
            Documentación publicada por certificado y lote, emitida por laboratorios de terceros independientes.
          </p>
          <div className="flex gap-4 mt-4 text-sm">
            <Link href="/coa/how-to-verify" className="text-gold-600 hover:underline">Cómo verificar un CoA</Link>
            <Link href="/coa/methodology" className="text-gold-600 hover:underline">Metodología</Link>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8 p-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-600">
          <strong className="text-gray-900">Verificación responsable:</strong> compara producto, presentación, lote, laboratorio, fecha, método y resultado antes de asociar un documento a tu compra.
        </div>

        <CoaIndexClient coas={coas} />
      </div>
    </div>
  )
}
