import { Microscope } from 'lucide-react'
import ResearchDisclaimer from '../../../components/ResearchDisclaimer'

export const metadata = {
  title: 'Research | PeptiLabs UK®',
  description: 'Hub de investigación de PeptiLabs UK: publicaciones científicas, resúmenes de investigación y referencias sobre péptidos de grado farmacéutico.',
  alternates: { canonical: '/research' },
  openGraph: {
    title: 'Research | PeptiLabs UK®',
    description: 'Publicaciones científicas, resúmenes de investigación y referencias sobre nuestros compuestos.',
    url: '/research',
  },
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Research</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Centro de investigación</h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Publicaciones científicas, resúmenes de investigación y referencias conectadas directamente con los compuestos de nuestro catálogo.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center py-16 border border-dashed border-navy-700 rounded-2xl">
          <Microscope size={40} className="text-gold-400/30 mx-auto mb-4" />
          <p className="text-white font-semibold mb-1">Contenido en preparación</p>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Estamos construyendo esta sección. Pronto encontrarás aquí artículos de investigación conectados a cada compuesto de nuestro catálogo.
          </p>
        </div>

        <div className="mt-14">
          <ResearchDisclaimer />
        </div>
      </div>
    </div>
  )
}
