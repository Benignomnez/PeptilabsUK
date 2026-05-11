import { useState, useRef } from 'react'
import { Upload, Download, CheckCircle, XCircle, Loader2, FileText } from 'lucide-react'
import { createProduct } from '../../services/products'

const TEMPLATE_HEADERS = ['name', 'description', 'price', 'stock', 'category', 'visible', 'featured']

const TEMPLATE_ROWS = [
  ['BPC-157', 'Body Protection Compound. Research grade >99% purity.', '6000', '25', 'Regeneración & Salud', 'true', 'true'],
  ['TB-500', 'Thymosin Beta-4 fragment. >98% purity.', '7000', '20', 'Regeneración & Salud', 'true', 'false'],
]

function downloadTemplate() {
  const csv = [TEMPLATE_HEADERS, ...TEMPLATE_ROWS].map(r => r.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'peptilabs_products_template.csv'
  a.click()
  URL.revokeObjectURL(url)
}

function parseCSV(text) {
  const lines = text.trim().split('\n')
  const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
  return lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''))
    const obj = {}
    headers.forEach((h, i) => { obj[h] = values[i] || '' })
    return obj
  }).filter(row => row.name)
}

export default function AdminBulkUpload() {
  const fileRef = useRef(null)
  const [preview, setPreview] = useState([])
  const [results, setResults] = useState([])
  const [uploading, setUploading] = useState(false)
  const [done, setDone] = useState(false)

  function handleFile(e) {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      const rows = parseCSV(ev.target.result)
      setPreview(rows)
      setResults([])
      setDone(false)
    }
    reader.readAsText(file)
  }

  async function handleUpload() {
    setUploading(true)
    setDone(false)
    const res = []
    for (const row of preview) {
      try {
        await createProduct({
          name: row.name,
          description: row.description || '',
          price: parseFloat(row.price) || 0,
          stock: parseInt(row.stock, 10) || 0,
          category: row.category || '',
          visible: row.visible?.toLowerCase() !== 'false',
          featured: row.featured?.toLowerCase() === 'true',
        })
        res.push({ name: row.name, success: true })
      } catch (err) {
        res.push({ name: row.name, success: false, error: err.message })
      }
    }
    setResults(res)
    setUploading(false)
    setDone(true)
    setPreview([])
    if (fileRef.current) fileRef.current.value = ''
  }

  const successCount = results.filter(r => r.success).length
  const errorCount = results.filter(r => !r.success).length

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-white mb-2">Bulk Upload</h1>
      <p className="text-gray-400 text-sm mb-8">Upload products from a Google Sheets CSV export.</p>

      {/* Step 1 */}
      <div className="card p-6 mb-6">
        <h2 className="text-white font-semibold mb-1 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 text-xs font-black flex items-center justify-center">1</span>
          Download the template
        </h2>
        <p className="text-gray-400 text-sm mb-4 ml-8">
          Open in Google Sheets, fill in your products, then export as <strong className="text-white">File → Download → CSV</strong>.
        </p>
        <div className="ml-8 mb-3 bg-navy-700 rounded-lg p-3 text-xs font-mono text-gray-300 overflow-x-auto">
          {TEMPLATE_HEADERS.join(', ')}
        </div>
        <button onClick={downloadTemplate} className="ml-8 btn-primary flex items-center gap-2 text-sm py-2 px-4">
          <Download size={15} /> Download Template CSV
        </button>
      </div>

      {/* Step 2 */}
      <div className="card p-6 mb-6">
        <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 text-xs font-black flex items-center justify-center">2</span>
          Upload your CSV file
        </h2>
        <label className="ml-8 flex flex-col items-center justify-center border-2 border-dashed border-navy-600 hover:border-gold-500/50 rounded-xl p-8 cursor-pointer transition-colors">
          <FileText size={32} className="text-gold-400/50 mb-3" />
          <p className="text-gray-300 text-sm font-medium">Click to select CSV file</p>
          <p className="text-gray-500 text-xs mt-1">Exported from Google Sheets</p>
          <input ref={fileRef} type="file" accept=".csv" onChange={handleFile} className="hidden" />
        </label>
      </div>

      {/* Preview */}
      {preview.length > 0 && (
        <div className="card p-6 mb-6">
          <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-900 text-xs font-black flex items-center justify-center">3</span>
            Preview — {preview.length} products found
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-navy-600 text-gray-400">
                  <th className="text-left px-3 py-2">Name</th>
                  <th className="text-left px-3 py-2">Category</th>
                  <th className="text-left px-3 py-2">Price (RD$)</th>
                  <th className="text-left px-3 py-2">Stock</th>
                  <th className="text-left px-3 py-2">Visible</th>
                </tr>
              </thead>
              <tbody>
                {preview.slice(0, 10).map((row, i) => (
                  <tr key={i} className="border-b border-navy-700/50 text-gray-300">
                    <td className="px-3 py-2 font-medium">{row.name}</td>
                    <td className="px-3 py-2">{row.category}</td>
                    <td className="px-3 py-2">RD${Number(row.price).toLocaleString()}</td>
                    <td className="px-3 py-2">{row.stock}</td>
                    <td className="px-3 py-2">{row.visible}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {preview.length > 10 && <p className="text-gray-500 text-xs mt-2 px-3">...and {preview.length - 10} more rows</p>}
          </div>
          <button onClick={handleUpload} disabled={uploading} className="btn-primary flex items-center gap-2">
            {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
            {uploading ? `Uploading...` : `Upload ${preview.length} Products`}
          </button>
        </div>
      )}

      {/* Results */}
      {done && (
        <div className="card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-green-400">
              <CheckCircle size={18} /> <span className="font-semibold">{successCount} uploaded</span>
            </div>
            {errorCount > 0 && (
              <div className="flex items-center gap-2 text-red-400">
                <XCircle size={18} /> <span className="font-semibold">{errorCount} failed</span>
              </div>
            )}
          </div>
          {results.filter(r => !r.success).map((r, i) => (
            <p key={i} className="text-red-400 text-xs mt-1">✗ {r.name}: {r.error}</p>
          ))}
        </div>
      )}
    </div>
  )
}
