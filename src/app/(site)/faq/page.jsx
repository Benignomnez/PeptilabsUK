import FaqAccordion from '../../../components/FaqAccordion'
import ResearchDisclaimer from '../../../components/ResearchDisclaimer'

export const metadata = {
  title: 'Preguntas Frecuentes | PeptiLabs UK®',
  description: 'Respuestas a las preguntas más comunes sobre los péptidos de investigación de PeptiLabs UK: testing, envíos, almacenamiento y contacto.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Preguntas Frecuentes | PeptiLabs UK®',
    description: 'Testing, envíos, almacenamiento, documentación y contacto — todo lo que necesitas saber.',
    url: '/faq',
  },
}

const FAQS = [
  {
    q: '¿Para qué están destinados los productos de PeptiLabs?',
    a: 'Exclusivamente para investigación de laboratorio. No son medicamentos ni productos de consumo, y no están destinados al uso humano o animal.',
  },
  {
    q: '¿Cómo se testean los productos?',
    a: 'Mediante Cromatografía Líquida de Alta Eficiencia (HPLC), verificando pureza e identidad del compuesto. Puedes ver más detalle en la página de Calidad & Testing.',
  },
  {
    q: '¿Desde dónde se envían los productos?',
    a: 'Todos los envíos se realizan desde el Reino Unido 🇬🇧.',
  },
  {
    q: '¿Cómo deben almacenarse los productos?',
    a: 'Como regla general, los péptidos liofilizados deben mantenerse refrigerados o congelados y protegidos de la luz hasta su uso en el laboratorio. Las condiciones específicas de cada compuesto se indican en su ficha de producto.',
  },
  {
    q: '¿Cómo accedo a la documentación de laboratorio?',
    a: 'Puedes solicitar el certificado de análisis de un producto o lote específico contactándonos directamente — revisa la página de Calidad & Testing para más detalle.',
  },
  {
    q: '¿Cómo contacto a PeptiLabs?',
    a: 'El canal principal es WhatsApp. También puedes escribirnos por Instagram o Telegram — revisa la página de Contacto para todos los enlaces.',
  },
  {
    q: '¿Qué métodos de pago están disponibles?',
    a: 'El pago se coordina directamente después de confirmar tu pedido por WhatsApp, donde te indicaremos las opciones disponibles.',
  },
]

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Ayuda</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Preguntas Frecuentes</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <FaqAccordion items={FAQS} />
        <div className="mt-12">
          <ResearchDisclaimer />
        </div>
      </div>
    </div>
  )
}
