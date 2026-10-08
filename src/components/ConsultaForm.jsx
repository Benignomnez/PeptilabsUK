'use client'

import { useState } from 'react'
import { User, Phone, Send, Loader2, CheckCircle } from 'lucide-react'

const FORMSPREE_URL = 'https://formspree.io/f/mredzbbv'

export default function ConsultaForm() {
  const [fields, setFields] = useState({ nombre: '', telefono: '', mensaje: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const fd = new FormData()
      fd.append('_subject', `💬 Consulta de ${fields.nombre} — PeptilabsUK`)
      fd.append('tipo', 'Consulta de Orientación')
      fd.append('nombre', fields.nombre)
      fd.append('telefono', fields.telefono)
      fd.append('mensaje', fields.mensaje)
      const res = await fetch(FORMSPREE_URL, { method: 'POST', headers: { Accept: 'application/json' }, body: fd })
      if (res.ok) setSent(true)
      else setError(true)
    } catch { setError(true) }
    finally { setSending(false) }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <CheckCircle size={36} className="text-green-400" />
        <p className="text-white font-bold">¡Consulta recibida!</p>
        <p className="text-gray-400 text-sm">Te contactaremos pronto.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-md mx-auto space-y-3 text-left">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            required
            type="text"
            placeholder="Tu nombre"
            value={fields.nombre}
            onChange={e => setFields(f => ({ ...f, nombre: e.target.value }))}
            className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500/60 text-white placeholder-gray-600 rounded-lg pl-8 pr-3 py-2.5 text-sm outline-none transition-colors"
          />
        </div>
        <div className="relative">
          <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            required
            type="tel"
            placeholder="Teléfono"
            value={fields.telefono}
            onChange={e => setFields(f => ({ ...f, telefono: e.target.value }))}
            className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500/60 text-white placeholder-gray-600 rounded-lg pl-8 pr-3 py-2.5 text-sm outline-none transition-colors"
          />
        </div>
      </div>
      <textarea
        rows={2}
        placeholder="¿En qué podemos ayudarte? (péptido de interés, objetivo, etc.)"
        value={fields.mensaje}
        onChange={e => setFields(f => ({ ...f, mensaje: e.target.value }))}
        className="w-full bg-navy-800 border border-navy-700 focus:border-gold-500/60 text-white placeholder-gray-600 rounded-lg px-3 py-2.5 text-sm outline-none transition-colors resize-none"
      />
      {error && <p className="text-red-400 text-xs text-center">Error al enviar. Intenta de nuevo.</p>}
      <button
        type="submit"
        disabled={sending}
        className="btn-primary w-full flex items-center justify-center gap-2 py-3 text-sm disabled:opacity-70"
      >
        {sending ? <><Loader2 size={16} className="animate-spin" /> Enviando...</> : <><Send size={16} /> Enviar Consulta</>}
      </button>
    </form>
  )
}
