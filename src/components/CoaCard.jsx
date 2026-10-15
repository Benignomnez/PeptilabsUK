import Link from 'next/link'
import { FileText } from 'lucide-react'
import CoaWatermark from './CoaWatermark'

export default function CoaCard({ coa }) {
  const publishedLabel = coa.published_date
    ? new Date(coa.published_date).toLocaleDateString('es-DO', { day: '2-digit', month: 'short', year: 'numeric' })
    : null

  return (
    <Link href={`/coa/${coa.id}`} className="card flex flex-col group hover:border-gold-500/40 transition-colors">
      <div className="relative bg-white h-56 overflow-hidden">
        <img
          src={coa.file_url}
          alt={`Certificado de análisis — ${coa.product_name}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <CoaWatermark />
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1 text-gold-400 font-semibold">
            <FileText size={13} /> PDF
          </span>
          {publishedLabel && <span className="text-gray-500">{publishedLabel}</span>}
        </div>
        <h3 className="text-white font-bold italic leading-snug">{coa.product_name}</h3>
        {coa.concentration && <p className="text-gold-400/80 text-sm font-semibold">{coa.concentration}</p>}
        <p className="text-gray-500 text-xs">
          {coa.lab_name}{coa.sample_code ? ` · ${coa.sample_code}` : ''}
        </p>
        <span className="mt-auto text-xs text-gray-500 group-hover:text-gold-400 transition-colors pt-2">
          Ver certificado →
        </span>
      </div>
    </Link>
  )
}
