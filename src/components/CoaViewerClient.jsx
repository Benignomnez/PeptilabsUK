'use client'

import { useState } from 'react'
import { Minus, Plus, Move } from 'lucide-react'
import CoaWatermark from './CoaWatermark'

const STEP = 20
const MIN_ZOOM = 60
const MAX_ZOOM = 200

export default function CoaViewerClient({ coa }) {
  const [zoom, setZoom] = useState(100)
  const [fitWidth, setFitWidth] = useState(true)

  function zoomOut() {
    setFitWidth(false)
    setZoom(z => Math.max(MIN_ZOOM, z - STEP))
  }
  function zoomIn() {
    setFitWidth(false)
    setZoom(z => Math.min(MAX_ZOOM, z + STEP))
  }
  function toggleFit() {
    setFitWidth(true)
    setZoom(100)
  }

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          onClick={zoomOut}
          aria-label="Reducir zoom"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-600 hover:border-gold-500/60 transition-colors"
        >
          <Minus size={16} />
        </button>
        <span className="text-gray-500 text-sm w-14 text-center tabular-nums">
          {fitWidth ? 'Ajuste' : `${zoom}%`}
        </span>
        <button
          onClick={zoomIn}
          aria-label="Aumentar zoom"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-600 hover:border-gold-500/60 transition-colors"
        >
          <Plus size={16} />
        </button>
        <button
          onClick={toggleFit}
          aria-label="Ajustar al ancho"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-300 text-gray-600 hover:border-gold-500/60 transition-colors"
        >
          <Move size={16} />
        </button>
      </div>

      <div className="overflow-auto rounded-xl border border-gray-200 bg-gray-50">
        <div className={fitWidth ? 'w-full' : 'inline-block'} style={fitWidth ? {} : { width: `${zoom}%`, minWidth: '100%' }}>
          <div className="relative bg-white">
            <img
              src={coa.file_url}
              alt={`Certificado de análisis — ${coa.product_name}`}
              className="w-full block"
            />
            <CoaWatermark />
          </div>
        </div>
      </div>
    </div>
  )
}
