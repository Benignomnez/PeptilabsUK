import Link from 'next/link'

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
          <p className="text-gray-500 text-sm mt-3">Última actualización: 26 de octubre de 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-8 text-gray-300 leading-relaxed">
        <div className="space-y-4">
          <p className="font-semibold text-white">Lea cuidadosamente este aviso antes de realizar cualquier pedido.</p>
          <p>
            Todos los compuestos ofrecidos por PeptiLabs UK, a través de <a href="https://peptilabsuk.com/" className="text-gold-400 hover:underline">https://peptilabsuk.com/</a>, se comercializan exclusivamente para fines de investigación científica de laboratorio.
          </p>
          <div className="p-4 bg-navy-950 border border-gold-500/20 rounded-xl">
            <p className="text-gold-400 font-bold uppercase tracking-wide text-sm">
              Productos exclusivamente para investigación — no destinados al consumo humano ni animal.
            </p>
          </div>
          <p>Los materiales identificados como productos de investigación no se ofrecen como medicamentos, suplementos nutricionales, cosméticos ni productos terapéuticos autorizados.</p>
          <p>Su adquisición y manipulación requieren conocimientos técnicos, condiciones adecuadas de laboratorio y cumplimiento de las regulaciones aplicables.</p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Propósito de los productos</h2>
          <p className="mb-3">Los compuestos comercializados por PeptiLabs UK están destinados exclusivamente a actividades legítimas de investigación científica y análisis de laboratorio.</p>
          <p className="mb-2">Su finalidad puede incluir:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Estudios de caracterización molecular y bioquímica.</li>
            <li>Investigación de mecanismos celulares en sistemas de laboratorio.</li>
            <li>Análisis de estabilidad, identidad y pureza.</li>
            <li>Investigaciones experimentales no clínicas legalmente autorizadas.</li>
            <li>Actividades académicas y científicas desarrolladas en instalaciones apropiadas.</li>
          </ul>
          <p className="mb-3">Los productos no se comercializan para autoadministración, uso recreativo, aplicaciones terapéuticas ni experimentación personal en seres humanos o animales.</p>
          <p>Los productos de investigación de PeptiLabs UK no deben utilizarse como sustitutos de medicamentos autorizados ni de tratamientos médicos.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Uso humano y animal no autorizado</h2>
          <p className="mb-3">Los compuestos comercializados para investigación no están destinados a ser administrados a seres humanos ni animales.</p>
          <p className="mb-2">Está expresamente desaconsejado:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ingerir, inyectar o inhalar los compuestos.</li>
            <li>Aplicarlos directamente sobre la piel o mucosas con fines personales o cosméticos.</li>
            <li>Utilizarlos para el tratamiento, diagnóstico, prevención o control de enfermedades.</li>
            <li>Emplearlos para modificar el peso corporal, el rendimiento físico, la función hormonal o cualquier otra condición de salud.</li>
            <li>Administrarlos a animales con fines clínicos, veterinarios o de experimentación no autorizada.</li>
          </ul>
          <p className="mb-3">La existencia de publicaciones científicas sobre una sustancia no constituye evidencia de que un producto específico comercializado para investigación sea seguro o eficaz para su administración.</p>
          <p>La seguridad, eficacia, dosificación y autorización de cualquier sustancia para uso humano o veterinario deben establecerse mediante los procedimientos científicos y regulatorios correspondientes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Información científica y ausencia de asesoramiento médico</h2>
          <p className="mb-3">El contenido publicado en PeptiLabs UK tiene fines exclusivamente educativos, informativos y de divulgación científica.</p>
          <p className="mb-3">Las referencias a investigaciones, mecanismos biológicos, estudios preclínicos o resultados clínicos publicados no constituyen recomendaciones para utilizar los productos comercializados.</p>
          <p className="mb-2">PeptiLabs UK no proporciona:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Diagnósticos médicos.</li>
            <li>Tratamientos o prescripciones.</li>
            <li>Recomendaciones de dosificación o administración.</li>
            <li>Protocolos de autoadministración.</li>
            <li>Asesoramiento veterinario.</li>
            <li>Garantías de beneficios terapéuticos.</li>
          </ul>
          <p className="mb-3">Los artículos del blog, las fichas de producto y los documentos científicos no deben interpretarse como instrucciones para el consumo o la administración de compuestos experimentales.</p>
          <p>Ante cualquier consulta relacionada con la salud, debe acudirse a un profesional sanitario debidamente cualificado.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Responsabilidad y elegibilidad del comprador</h2>
          <p className="mb-3">Al solicitar productos de investigación de PeptiLabs UK, el comprador deberá cumplir las condiciones de elegibilidad establecidas en nuestros Términos de Servicio.</p>
          <p className="mb-2">Entre ellas:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Tener al menos 21 años de edad.</li>
            <li>Contar con capacidad legal para celebrar contratos.</li>
            <li>Comprender la naturaleza y las limitaciones de los compuestos de investigación.</li>
            <li>Disponer de los conocimientos, equipos e instalaciones apropiados para su manipulación.</li>
            <li>Utilizar los productos exclusivamente para fines científicos legalmente permitidos.</li>
            <li>Cumplir las regulaciones aplicables a la adquisición, importación, almacenamiento y utilización de materiales de investigación.</li>
            <li>No redistribuir, reenvasar ni comercializar los productos para consumo humano o animal.</li>
          </ul>
          <p>PeptiLabs UK podrá solicitar información adicional sobre la finalidad de adquisición y rechazar pedidos que presenten indicios de uso indebido o incumplimiento normativo.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Almacenamiento y manipulación</h2>
          <p className="mb-3">Los compuestos de investigación pueden requerir condiciones específicas de almacenamiento, transporte y manipulación para preservar su estabilidad e integridad.</p>
          <p className="mb-3">Las condiciones correspondientes dependerán de las características de cada sustancia, su presentación y la documentación técnica disponible.</p>
          <p className="mb-2">El comprador debe:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Consultar la información técnica correspondiente al producto y al lote.</li>
            <li>Respetar las condiciones de conservación documentadas.</li>
            <li>Mantener los materiales correctamente identificados.</li>
            <li>Evitar su exposición a condiciones incompatibles con su estabilidad.</li>
            <li>Prevenir el acceso de personas no autorizadas.</li>
            <li>Cumplir las normas de seguridad y eliminación de residuos aplicables.</li>
          </ul>
          <p className="mb-3">PeptiLabs UK no garantiza la estabilidad de los compuestos cuando estos hayan sido almacenados o manipulados en condiciones incompatibles con su documentación técnica.</p>
          <p>Esta disposición no limita los derechos legales del comprador en relación con productos defectuosos o incumplimientos atribuibles al proveedor.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Calidad, pureza y documentación</h2>
          <p className="mb-3">PeptiLabs UK reconoce la importancia de la identidad, pureza y trazabilidad de los materiales utilizados en investigación científica.</p>
          <p className="mb-3">La información sobre controles de calidad puede incluir resultados de pruebas analíticas realizadas por laboratorios independientes, como cromatografía líquida de alta eficacia (HPLC), cuando estén disponibles.</p>
          <p className="mb-3">Los porcentajes de pureza deberán respaldarse con documentación verificable correspondiente al producto y lote específico.</p>
          <p className="mb-3">La disponibilidad de certificados de análisis (CoA) puede variar entre productos.</p>
          <p className="mb-2">Cuando exista documentación analítica, recomendamos comprobar:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Nombre e identificación del compuesto.</li>
            <li>Número de lote.</li>
            <li>Laboratorio responsable del análisis.</li>
            <li>Método analítico utilizado.</li>
            <li>Fecha del análisis.</li>
            <li>Resultados y alcance de las pruebas realizadas.</li>
          </ul>
          <p className="mb-3">La pureza analítica no equivale a esterilidad, seguridad clínica ni autorización para consumo humano.</p>
          <p className="mb-3">Un certificado de análisis tampoco constituye, por sí mismo, una garantía de eficacia terapéutica o de idoneidad para cualquier aplicación experimental.</p>
          <p className="mb-3">PeptiLabs UK no garantiza resultados específicos derivados del uso de sus compuestos en investigaciones.</p>
          <p>
            La información disponible sobre procedimientos y documentación de calidad puede consultarse en nuestra sección{' '}
            <Link href="/quality-testing" className="text-gold-400 hover:underline">Calidad &amp; Testing</Link>, y los certificados publicados en{' '}
            <Link href="/coa" className="text-gold-400 hover:underline">Certificados de Análisis</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Legalidad regional y cumplimiento normativo</h2>
          <p className="mb-3">El estatus regulatorio de los péptidos y otros compuestos de investigación puede variar según la sustancia, su presentación, su finalidad y el país donde se comercialicen o utilicen.</p>
          <p className="mb-3">El comprador debe verificar las regulaciones aplicables a la adquisición, importación, posesión, transporte y utilización de cada producto.</p>
          <p className="mb-3">Determinadas sustancias pueden estar sujetas a requisitos especiales, restricciones comerciales, autorizaciones de importación o controles sanitarios.</p>
          <p className="mb-3">La clasificación de un producto como material de investigación no implica automáticamente que se encuentre exento de la legislación sobre medicamentos u otras sustancias reguladas.</p>
          <p>PeptiLabs UK se compromete a cumplir las obligaciones legales que le correspondan como proveedor, sin perjuicio de las responsabilidades normativas del comprador.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Limitación de responsabilidad</h2>
          <p className="mb-3">Los productos se ofrecen únicamente para las finalidades de investigación especificadas en su documentación.</p>
          <p className="mb-3">PeptiLabs UK no asume responsabilidad por las consecuencias derivadas de su utilización deliberada para fines distintos de los autorizados, en la medida permitida por la legislación aplicable.</p>
          <p className="mb-2">Esto puede incluir:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Administración humana o animal no autorizada.</li>
            <li>Manipulación contraria a las condiciones técnicas documentadas.</li>
            <li>Utilización en instalaciones inapropiadas.</li>
            <li>Redistribución de productos para aplicaciones no permitidas.</li>
            <li>Incumplimiento de las regulaciones aplicables por parte del comprador.</li>
          </ul>
          <p>Ninguna disposición de este aviso pretende excluir o limitar obligaciones legales que no puedan ser excluidas, incluidas las responsabilidades del proveedor por productos defectuosos o incumplimientos contractuales cuando correspondan.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Aceptación del aviso</h2>
          <p className="mb-3">Antes de realizar un pedido, el comprador deberá leer y comprender las condiciones aplicables a los productos de investigación.</p>
          <p className="mb-3">
            La confirmación de un pedido podrá requerir la aceptación expresa de este Aviso de Investigación y de los{' '}
            <Link href="/terms" className="text-gold-400 hover:underline">Términos de Servicio</Link> de PeptiLabs UK.
          </p>
          <p className="mb-3">Si no estás de acuerdo con estas condiciones o no dispones de los medios adecuados para manipular materiales de investigación, no debes realizar pedidos.</p>
          <p className="mb-3">PeptiLabs UK podrá actualizar este aviso para reflejar cambios operativos, científicos o regulatorios.</p>
          <p>Las modificaciones serán publicadas en esta página indicando la fecha de actualización correspondiente.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Contacto</h2>
          <p className="mb-3">Si tienes preguntas sobre la documentación técnica, la finalidad prevista o las condiciones comerciales de nuestros productos, puedes comunicarte con nosotros a través de nuestros canales oficiales.</p>
          <ul className="space-y-1 text-sm">
            <li>Sitio web: <a href="https://peptilabsuk.com/" className="text-gold-400 hover:underline">peptilabsuk.com</a></li>
            <li>Contacto: <Link href="/contact" className="text-gold-400 hover:underline">peptilabsuk.com/contact</Link></li>
            <li>Calidad &amp; Testing: <Link href="/quality-testing" className="text-gold-400 hover:underline">peptilabsuk.com/quality-testing</Link></li>
            <li>Certificados de Análisis: <Link href="/coa" className="text-gold-400 hover:underline">peptilabsuk.com/coa</Link></li>
          </ul>
        </section>

        <div className="p-5 bg-navy-950 border border-gold-500/20 rounded-xl text-center space-y-2">
          <p className="font-black text-white tracking-widest">PEPTILABS UK</p>
          <p className="text-gold-400 text-sm font-semibold">FOR RESEARCH USE ONLY — NOT FOR HUMAN OR ANIMAL CONSUMPTION.</p>
          <p className="text-gray-500 text-xs">Los productos de investigación no están destinados al diagnóstico, tratamiento, cura o prevención de enfermedades.</p>
        </div>
      </div>
    </div>
  )
}
