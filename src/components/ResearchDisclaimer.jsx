export default function ResearchDisclaimer({ compact = false }) {
  if (compact) {
    return (
      <p className="text-gray-500 text-xs leading-relaxed">
        Productos destinados exclusivamente para investigación de laboratorio. No son medicamentos, no están aprobados para consumo humano ni para diagnóstico, tratamiento, cura o prevención de ninguna enfermedad.{' '}
        <a href="/research-disclaimer" className="underline hover:text-gold-400 transition-colors">Ver aviso completo</a>
      </p>
    )
  }

  return (
    <div className="bg-navy-950 border border-gold-500/10 rounded-xl p-5">
      <p className="text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">Aviso de investigación</p>
      <p className="text-gray-400 text-sm leading-relaxed">
        Los productos de PeptiLabs UK se comercializan exclusivamente para fines de investigación de laboratorio. No son medicamentos ni productos de consumo: no están destinados al uso humano o animal, y no deben diagnosticar, tratar, curar ni prevenir ninguna enfermedad o condición médica.{' '}
        <a href="/research-disclaimer" className="text-gold-400 hover:underline">Lee el aviso completo →</a>
      </p>
    </div>
  )
}
