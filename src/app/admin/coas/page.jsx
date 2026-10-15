'use client'

import { useState, useEffect, useRef } from 'react'
import { Plus, Pencil, Trash2, Eye, EyeOff, Search, Loader2, X, Check, FileText } from 'lucide-react'
import { getAllCoas, updateCoa, createCoa, deleteCoa, uploadCoaFile } from '../../../services/coas'
import { getAllProducts } from '../../../services/products'

const EMPTY = {
  product_id: '',
  product_name: '',
  concentration: '',
  lab_name: '',
  sample_code: '',
  lot_code: '',
  received_date: '',
  published_date: '',
  file_url: '',
  visible: true,
  is_third_party_reference: false,
  source_name: '',
}

export default function AdminCoas() {
  const [coas, setCoas] = useState([])
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState(EMPTY)
  const [saving, setSaving] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const fileRef = useRef(null)

  useEffect(() => { load() }, [])

  async function load() {
    setLoading(true)
    const [coaData, productData] = await Promise.all([getAllCoas(), getAllProducts()])
    setCoas(coaData)
    setProducts(productData)
    setLoading(false)
  }

  function openCreate() {
    setForm({ ...EMPTY, published_date: new Date().toISOString().slice(0, 10) })
    setImageFile(null)
    setImagePreview(null)
    setModal('create')
  }

  function openEdit(coa) {
    setForm({
      ...coa,
      product_id: coa.product_id || '',
      received_date: coa.received_date || '',
      published_date: coa.published_date || '',
    })
    setImageFile(null)
    setImagePreview(coa.file_url || null)
    setModal(coa)
  }

  function handleImageChange(e) {
    const file = e.target.files[0]
    if (!file) return
    setImageFile(file)
    setImagePreview(URL.createObjectURL(file))
  }

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    try {
      let file_url = form.file_url
      if (imageFile) file_url = await uploadCoaFile(imageFile)

      const payload = {
        product_id: form.product_id || null,
        product_name: form.product_name,
        concentration: form.concentration || null,
        lab_name: form.lab_name,
        sample_code: form.sample_code || null,
        lot_code: form.lot_code || null,
        received_date: form.received_date || null,
        published_date: form.published_date || new Date().toISOString().slice(0, 10),
        file_url,
        visible: form.visible,
        is_third_party_reference: form.is_third_party_reference,
        source_name: form.is_third_party_reference ? (form.source_name || null) : null,
      }

      if (modal === 'create') await createCoa(payload)
      else await updateCoa(modal.id, payload)

      await load()
      setModal(null)
    } finally {
      setSaving(false)
    }
  }

  async function toggleVisible(coa) {
    await updateCoa(coa.id, { visible: !coa.visible })
    setCoas(prev => prev.map(c => c.id === coa.id ? { ...c, visible: !c.visible } : c))
  }

  async function handleDelete(id) {
    if (!confirm('¿Eliminar este certificado?')) return
    await deleteCoa(id)
    setCoas(prev => prev.filter(c => c.id !== id))
  }

  const filtered = coas.filter(c => c.product_name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="bg-gray-50 -m-8 p-8 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Certificados de Análisis</h1>
          <p className="text-gray-500 text-sm mt-1">Sube la imagen del certificado emitido por el laboratorio (exporta el PDF como JPG/PNG antes de subir).</p>
        </div>
        <button onClick={openCreate} className="btn-primary flex items-center gap-2 shrink-0">
          <Plus size={16} /> Agregar Certificado
        </button>
      </div>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Buscar certificados..." value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg pl-9 pr-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-400" />
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 size={28} className="animate-spin text-gold-500" />
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-left">
                <th className="px-4 py-3 font-medium">Producto</th>
                <th className="px-4 py-3 font-medium">Laboratorio</th>
                <th className="px-4 py-3 font-medium">Lote</th>
                <th className="px-4 py-3 font-medium">Publicado</th>
                <th className="px-4 py-3 font-medium">Visible</th>
                <th className="px-4 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      {c.file_url
                        ? <img src={c.file_url} alt={c.product_name} className="w-9 h-9 rounded-lg object-cover shrink-0 bg-white border border-gray-200" />
                        : <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0"><FileText size={16} className="text-gold-500/50" /></div>
                      }
                      <div>
                        <span className="text-gray-900 font-medium block">{c.product_name}</span>
                        <div className="flex items-center gap-2">
                          {c.concentration && <span className="text-gray-500 text-xs">{c.concentration}</span>}
                          {c.is_third_party_reference && (
                            <span className="text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded-full">
                              Ref. terceros{c.source_name ? ` · ${c.source_name}` : ''}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{c.lab_name}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{c.sample_code || c.lot_code || '—'}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{c.published_date}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleVisible(c)} className={c.visible ? 'text-gold-600' : 'text-gray-300'}>
                      {c.visible ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <button onClick={() => openEdit(c)} className="text-gray-400 hover:text-gray-900"><Pencil size={15} /></button>
                      <button onClick={() => handleDelete(c.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={15} /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-10 text-center text-gray-400">Sin certificados todavía.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modal !== null && (
        <div className="fixed inset-0 z-50 bg-gray-900/50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-gray-200 rounded-xl w-full max-w-lg p-6 my-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">
                {modal === 'create' ? 'Agregar Certificado' : 'Editar Certificado'}
              </h2>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-gray-900"><X size={20} /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Imagen del Certificado</label>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="relative border-2 border-dashed border-gray-300 hover:border-gold-500/60 rounded-xl overflow-hidden cursor-pointer transition-colors bg-gray-50"
                  style={{ aspectRatio: '4/3', maxHeight: 200 }}
                >
                  {imagePreview ? (
                    <img src={imagePreview} alt="preview" className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <FileText size={28} className="mb-2 text-gold-500/60" />
                      <p className="text-xs">Click para subir imagen</p>
                    </div>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Producto vinculado (opcional)</label>
                  <select
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    value={form.product_id} onChange={e => {
                    const p = products.find(p => p.id === e.target.value)
                    setForm(f => ({ ...f, product_id: e.target.value, product_name: p ? p.name : f.product_name }))
                  }}>
                    <option value="">— Sin vincular —</option>
                    {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Nombre a mostrar</label>
                  <input
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    value={form.product_name} onChange={e => setForm(f => ({ ...f, product_name: e.target.value }))} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Concentración</label>
                  <input
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="50 mg" value={form.concentration} onChange={e => setForm(f => ({ ...f, concentration: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Laboratorio</label>
                  <input
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    value={form.lab_name} onChange={e => setForm(f => ({ ...f, lab_name: e.target.value }))} required />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Código de muestra</label>
                  <input
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    value={form.sample_code} onChange={e => setForm(f => ({ ...f, sample_code: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Código de lote</label>
                  <input
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    value={form.lot_code} onChange={e => setForm(f => ({ ...f, lot_code: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha de recepción</label>
                  <input type="date"
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    value={form.received_date} onChange={e => setForm(f => ({ ...f, received_date: e.target.value }))} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Fecha de publicación</label>
                  <input type="date"
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                    value={form.published_date} onChange={e => setForm(f => ({ ...f, published_date: e.target.value }))} />
                </div>
                <div className="col-span-2 flex items-center gap-3">
                  <label className="text-sm font-medium text-gray-700">Visible</label>
                  <button type="button" onClick={() => setForm(f => ({ ...f, visible: !f.visible }))}
                    className={`w-10 h-6 rounded-full transition-colors ${form.visible ? 'bg-gold-500' : 'bg-gray-300'}`}>
                    <span className={`block w-4 h-4 bg-white rounded-full mx-1 transition-transform ${form.visible ? 'translate-x-4' : ''}`} />
                  </button>
                </div>

                <div className="col-span-2 p-3 bg-amber-50 border border-amber-200 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setForm(f => ({ ...f, is_third_party_reference: !f.is_third_party_reference }))}
                      className={`w-10 h-6 rounded-full transition-colors shrink-0 ${form.is_third_party_reference ? 'bg-amber-500' : 'bg-gray-300'}`}>
                      <span className={`block w-4 h-4 bg-white rounded-full mx-1 transition-transform ${form.is_third_party_reference ? 'translate-x-4' : ''}`} />
                    </button>
                    <label className="text-sm font-medium text-amber-900">
                      Es un certificado de referencia de terceros (no es del lote de PeptiLabs UK)
                    </label>
                  </div>
                  {form.is_third_party_reference && (
                    <div>
                      <label className="text-xs font-medium text-amber-900 mb-1 block">Empresa/marca real del certificado</label>
                      <input
                        className="w-full bg-white border border-amber-300 text-gray-900 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        placeholder="ej. keshunpeptide.com"
                        value={form.source_name}
                        onChange={e => setForm(f => ({ ...f, source_name: e.target.value }))}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setModal(null)}
                  className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-lg transition-colors">
                  Cancelar
                </button>
                <button type="submit" disabled={saving} className="btn-primary flex-1 flex items-center justify-center gap-2">
                  {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                  {saving ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
