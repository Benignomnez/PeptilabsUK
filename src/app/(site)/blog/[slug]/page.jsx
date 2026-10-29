import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getBlogManifest, getBlogArticleBySlug, getRelatedBlogArticles } from '../../../../services/blog'

export function generateStaticParams() {
  return getBlogManifest().map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)
  if (!article) return {}

  const canonicalPath = `/blog/${article.slug}`
  return {
    title: article.metaTitle || `${article.title} | PeptiLabs UK®`,
    description: article.metaDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription,
      url: canonicalPath,
      type: 'article',
    },
  }
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params
  const article = getBlogArticleBySlug(slug)
  if (!article) notFound()

  const related = getRelatedBlogArticles(article.category, article.slug)
  const canonicalUrl = `https://peptilabsuk.com/blog/${article.slug}`
  const publishedDate = '2026-10-29'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDescription,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: { '@type': 'Organization', name: 'PeptiLabs UK' },
    publisher: { '@type': 'Organization', name: 'PeptiLabs UK' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-navy-950 border-b border-gold-500/10 py-4">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-colors text-sm w-fit">
            <ArrowLeft size={16} /> Volver al blog
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-3">{article.category}</p>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">{article.title}</h1>

        <div className="article-body" dangerouslySetInnerHTML={{ __html: article.html }} />

        <div className="mt-12 p-4 bg-navy-800 border border-navy-700 rounded-xl text-sm text-gray-400">
          Este artículo tiene fines exclusivamente informativos y de divulgación científica. No constituye asesoramiento médico ni una recomendación de uso. Consulta nuestro{' '}
          <Link href="/research-disclaimer" className="text-gold-400 hover:underline">Aviso de Investigación</Link>.
        </div>
      </article>

      {related.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <div className="border-t border-navy-800 pt-8">
            <p className="text-gold-400 uppercase tracking-widest text-xs font-semibold mb-4">Relacionados</p>
            <div className="space-y-3">
              {related.map(r => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="block text-gray-300 hover:text-gold-400 transition-colors text-sm">
                  {r.title} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
