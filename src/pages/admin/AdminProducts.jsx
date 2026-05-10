import { useState, useEffect } from 'react'
import { Plus, Pencil, Trash2, Eye, EyeOff, Search, Loader2, X, Check } from 'lucide-react'
import { getAllProducts, updateProduct, createProduct, deleteProduct, uploadProductImage } from '../../services/products'

const EMPTY = { name: '', description: '', price: '', stock: '', category: '', image_url: '', visible: true, featured: false }

export default function AdminProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState(null) // null | 'create' | product
  const [form, setForm] = useState(EMPTY)
  const [saving, setSaving] = useState(false)
  const [imageFile, setImageFile] = useState(null)

  useEffect(() => {
    load()
  }, [])

  async function load() {
    setLoading(true)
    const data = await getAllProducts()
    setProducts(data)
    setLoading(false)
  }

  function openCreate() {
    setForm(EMPTY)
    setImageFile(null)
    setModal('create')
  }

  function openEdit(product) {
    setForm({ ...product })
    setImageFile(null)
    setModal(product)
  }

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    try {
      let image_url = form.image_url
      if (imageFile) image_url = await uploadProductImage(imageFile)

      const payload = {
        name: form.name,
        description: form.description,
        price: parseFloat(form.price),
        stock: parseInt(form.stock, 10),
        category: form.category,
        image_url,
        visible: form.visible,
        featured: form.featured,
      }

      if (modal === 'create') {
        await createProduct(payload)
      } else {
        await updateProduct(modal.id, payload)
      }
      await load()
      setModal(null)
    } finally {
      setSaving(false)
    }
  }

  async function toggleVisible(product) {
    await updateProduct(product.id, { visible: !product.visible })
    setProducts(prev => prev.map(p => p.id === product.id ? { ...p, visible: !p.visible } : p))
  }

  async function handleDelete(id) {
    if (!confirm('Delete this product?')) return
    await deleteProduct(id)
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Products</h1>
        <button onClick={openCreate} className="btn-primary flex items-center gap-2">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input pl-9"
        />
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 size={28} className="animate-spin text-brand-400" />
        </div>
      ) : (
        <div className="card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-left">
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Stock</th>
                <th className="px-4 py-3 font-medium">Visible</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                  <td className="px-4 py-3 text-gray-200 font-medium">{p.name}</td>
                  <td className="px-4 py-3 text-gray-400">{p.category || '—'}</td>
                  <td className="px-4 py-3 text-gray-200">£{Number(p.price).toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`font-semibold ${p.stock === 0 ? 'text-red-400' : p.stock <= 5 ? 'text-yellow-400' : 'text-brand-400'}`}>
                      {p.stock}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => toggleVisible(p)} className={p.visible ? 'text-brand-400' : 'text-gray-600'}>
                      {p.visible ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                  </td>
                  <td className="px-4 py-3 flex items-center gap-3">
                    <button onClick={() => openEdit(p)} className="text-gray-400 hover:text-white">
                      <Pencil size={15} />
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="text-gray-400 hover:text-red-400">
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal */}
      {modal !== null && (
        <div className="fixed inset-0 z-50 bg-gray-950/80 flex items-center justify-center p-4">
          <div className="card w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white">
                {modal === 'create' ? 'Add Product' : 'Edit Product'}
              </h2>
              <button onClick={() => setModal(null)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="label">Name</label>
                  <input className="input" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div>
                  <label className="label">Price (£)</label>
                  <input type="number" step="0.01" className="input" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} required />
                </div>
                <div>
                  <label className="label">Stock</label>
                  <input type="number" className="input" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} required />
                </div>
                <div className="col-span-2">
                  <label className="label">Category</label>
                  <input className="input" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))} />
                </div>
                <div className="col-span-2">
                  <label className="label">Description</label>
                  <textarea rows={3} className="input resize-none" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
                </div>
                <div className="col-span-2">
                  <label className="label">Product Image</label>
                  <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="text-sm text-gray-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-gray-700 file:text-gray-200 file:text-sm cursor-pointer" />
                </div>
                <div className="flex items-center gap-3">
                  <label className="label mb-0">Visible</label>
                  <button type="button" onClick={() => setForm(f => ({ ...f, visible: !f.visible }))}
                    className={`w-10 h-6 rounded-full transition-colors ${form.visible ? 'bg-brand-500' : 'bg-gray-700'}`}>
                    <span className={`block w-4 h-4 bg-white rounded-full mx-1 transition-transform ${form.visible ? 'translate-x-4' : ''}`} />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <label className="label mb-0">Featured</label>
                  <button type="button" onClick={() => setForm(f => ({ ...f, featured: !f.featured }))}
                    className={`w-10 h-6 rounded-full transition-colors ${form.featured ? 'bg-brand-500' : 'bg-gray-700'}`}>
                    <span className={`block w-4 h-4 bg-white rounded-full mx-1 transition-transform ${form.featured ? 'translate-x-4' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setModal(null)} className="btn-secondary flex-1">Cancel</button>
                <button type="submit" disabled={saving} className="btn-primary flex-1 flex items-center justify-center gap-2">
                  {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                  {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
