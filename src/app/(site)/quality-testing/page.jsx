import { ShieldCheck, Microscope, ClipboardCheck, FileText, MessageCircle } from 'lucide-react'
import ResearchDisclaimer from '../../../components/ResearchDisclaimer'

export const metadata = {
  title: 'Calidad & Testing | PeptiLabs UK®',
  description: 'Cómo PeptiLabs UK verifica la calidad de sus péptidos de investigación: testing independiente de terceros, estándares de pureza y proceso de control de calidad.',
  alternates: { canonical: '/quality-testing' },
  openGraph: {
    title: 'Calidad & Testing | PeptiLabs UK®',
    description: 'Testing independiente de terceros, estándares de pureza y control de calidad en cada lote.',
    url: '/quality-testing',
  },
}

export default function QualityTestingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Calidad & Testing</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Cómo verificamos cada lote</h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            La investigación científica depende de la fiabilidad del material de partida. Así es como PeptiLabs UK aborda la verificación de calidad de sus péptidos de investigación.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-14">

        {/* Third-party testing */}
        <section>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center">
              <Microscope size={22} className="text-gold-400" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-3">Testing independiente de terceros</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                Nuestros péptidos son analizados mediante Cromatografía Líquida de Alta Eficiencia (HPLC), el método estándar de la industria para verificar pureza e identidad de compuestos peptídicos.
              </p>
              <p className="text-gray-400 leading-relaxed">
                La verificación por un laboratorio independiente, en vez de depender únicamente de la palabra del fabricante, es lo que permite a un investigador confiar en el material que está usando.
              </p>
            </div>
          </div>
        </section>

        {/* Purity standards */}
        <section>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center">
              <ShieldCheck size={22} className="text-gold-400" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-3">Estándares de pureza</h2>
              <p className="text-gray-400 leading-relaxed">
                Trabajamos con un estándar mínimo de pureza de <strong className="text-white">&gt;99%</strong> en nuestro catálogo de péptidos de investigación, verificado por HPLC. La pureza específica de cada compuesto se indica en su ficha de producto.
              </p>
            </div>
          </div>
        </section>

        {/* Quality control */}
        <section>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center">
              <ClipboardCheck size={22} className="text-gold-400" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-3">Control de calidad</h2>
              <p className="text-gray-400 leading-relaxed">
                Producción bajo normas GMP (Good Manufacturing Practices), con cadena de frío controlada desde la producción hasta el envío, para preservar la integridad del compuesto en tránsito.
              </p>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center">
              <FileText size={22} className="text-gold-400" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-3">Documentación</h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Para solicitar el certificado de análisis (HPLC) de un lote específico, contáctanos directamente — te indicaremos la disponibilidad para el producto y lote de tu interés.
              </p>
              <a
                href="https://wa.me/8299098362?text=Hola%2C+quisiera+solicitar+el+certificado+de+an%C3%A1lisis+de+un+producto."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                <MessageCircle size={16} /> Solicitar documentación
              </a>
            </div>
          </div>
        </section>

        <ResearchDisclaimer />
      </div>
    </div>
  )
}
