import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import CoaViewerClient from '../../../../components/CoaViewerClient'
import { getCoaById } from '../../../../services/coas'

async function loadCoa(id) {
  try {
    const coa = await getCoaById(id)
    return coa?.visible ? coa : null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const coa = await loadCoa(id)
  if (!coa) return {}

  const title = `Certificado de Análisis — ${coa.product_name} | PeptiLabs UK®`
  const description = `Certificado de análisis de ${coa.product_name}${coa.concentration ? ` (${coa.concentration})` : ''}, emitido por ${coa.lab_name}.`

  return {
    title,
    description,
    alternates: { canonical: `/coa/${coa.id}` },
    openGraph: { title, description, url: `/coa/${coa.id}` },
  }
}

export default async function CoaDetailPage({ params }) {
  const { id } = await params
  const coa = await loadCoa(id)
  if (!coa) notFound()

  const publishedLabel = coa.published_date
    ? new Date(coa.published_date).toLocaleDateString('es-DO', { day: '2-digit', month: 'short', year: 'numeric' })
    : null

  return (
    <div className="min-h-screen">
      <div className="bg-navy-950 border-b border-gold-500/10 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/coa" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm w-fit">
            <ArrowLeft size={16} /> Volver a certificados
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white italic">
            {coa.product_name}{coa.concentration ? ` · ${coa.concentration}` : ''}
          </h1>
          <span className="shrink-0 text-xs font-bold text-gold-400 bg-gold-500/10 border border-gold-500/20 px-3 py-1 rounded-full">PDF</span>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          {[coa.product_name, coa.sample_code, publishedLabel].filter(Boolean).join(' · ')}
        </p>

        <div className="mb-6 p-4 bg-navy-800 border border-navy-700 rounded-xl text-sm text-gray-400">
          Documento mostrado exclusivamente para consulta y verificación en peptilabsuk.com. La marca visible identifica la procedencia; no implica certificación adicional.
        </div>

        <CoaViewerClient coa={coa} />
      </div>
    </div>
  )
}
