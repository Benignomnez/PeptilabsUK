import { Newspaper } from 'lucide-react'

export const metadata = {
  title: 'Blog | PeptiLabs UK®',
  description: 'Artículos y novedades de PeptiLabs UK.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | PeptiLabs UK®',
    description: 'Artículos y novedades de PeptiLabs UK.',
    url: '/blog',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Artículos y novedades</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center py-16 border border-dashed border-navy-700 rounded-2xl">
          <Newspaper size={40} className="text-gold-400/30 mx-auto mb-4" />
          <p className="text-white font-semibold mb-1">Contenido en preparación</p>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Todavía no hay artículos publicados. Vuelve pronto.
          </p>
        </div>
      </div>
    </div>
  )
}
