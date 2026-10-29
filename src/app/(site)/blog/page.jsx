import BlogIndexClient from '../../../components/BlogIndexClient'
import { getBlogManifest } from '../../../services/blog'

export const metadata = {
  title: 'Blog | PeptiLabs UK®',
  description: 'Artículos de divulgación científica sobre péptidos de investigación, regulación y hallazgos recientes.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | PeptiLabs UK®',
    description: 'Artículos de divulgación científica sobre péptidos de investigación, regulación y hallazgos recientes.',
    url: '/blog',
  },
}

export default function BlogPage() {
  const articles = getBlogManifest()

  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Blog</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Artículos y novedades</h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Divulgación científica sobre péptidos de investigación: hallazgos recientes, regulación, mecanismos y lectura crítica de la evidencia disponible.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <BlogIndexClient articles={articles} />
      </div>
    </div>
  )
}
