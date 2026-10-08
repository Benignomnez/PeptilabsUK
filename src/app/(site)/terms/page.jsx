export const metadata = {
  title: 'Términos & Condiciones | PeptiLabs UK®',
  description: 'Términos y condiciones de PeptiLabs UK.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Términos & Condiciones</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="p-6 bg-navy-800 border border-navy-700 rounded-xl">
          <p className="text-gray-400 text-sm leading-relaxed">
            Esta página está en preparación. El contenido definitivo de los Términos & Condiciones se publicará aquí próximamente.
          </p>
        </div>
      </div>
    </div>
  )
}
