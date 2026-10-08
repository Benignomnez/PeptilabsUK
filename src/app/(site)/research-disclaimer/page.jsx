export const metadata = {
  title: 'Aviso de Investigación | PeptiLabs UK®',
  description: 'Aviso de clasificación de investigación de los productos de PeptiLabs UK.',
  alternates: { canonical: '/research-disclaimer' },
  robots: { index: true, follow: true },
}

export default function ResearchDisclaimerPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Aviso de Investigación</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6 text-gray-300 leading-relaxed">
        <p>
          Todos los productos ofrecidos por PeptiLabs UK se comercializan exclusivamente para fines de <strong className="text-white">investigación de laboratorio</strong>. Ninguno de estos productos es un medicamento, suplemento, cosmético ni producto de consumo.
        </p>
        <p>
          Estos productos <strong className="text-white">no están destinados al uso humano o animal</strong> bajo ninguna circunstancia. No deben ser ingeridos, inyectados, inhalados ni aplicados sobre el cuerpo.
        </p>
        <p>
          Ningún producto de PeptiLabs UK debe utilizarse para diagnosticar, tratar, curar o prevenir ninguna enfermedad o condición médica, incluyendo — pero sin limitarse a — pérdida de peso, recuperación física, anti-envejecimiento, desempeño físico o cognitivo, o regulación hormonal. Cualquier mención de mecanismos de acción o contexto de investigación en este sitio tiene fines exclusivamente informativos y científicos, y no constituye una recomendación de uso.
        </p>
        <p>
          La compra de estos productos implica que el comprador es un profesional o institución cualificada para su manejo en un entorno de investigación controlado, y que asume total responsabilidad por el uso que le dé al producto.
        </p>
        <p>
          PeptiLabs UK no se hace responsable por el uso indebido de sus productos fuera del contexto de investigación de laboratorio para el cual son comercializados.
        </p>
      </div>
    </div>
  )
}
