import Link from 'next/link'

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
          <p className="text-gray-500 text-sm mt-3">Última actualización: 26 de octubre de 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-8 text-gray-300 leading-relaxed">
        <div className="space-y-4">
          <p>Bienvenido a PeptiLabs UK.</p>
          <p>
            Al acceder, navegar o utilizar el sitio web <a href="https://peptilabsuk.com/" className="text-gold-400 hover:underline">https://peptilabsuk.com/</a> (en adelante, "el Sitio"), aceptas los presentes Términos de Servicio.
          </p>
          <p>
            Estos términos regulan el acceso al Sitio, las consultas comerciales, los pedidos y las condiciones generales relacionadas con los productos ofrecidos por PeptiLabs UK.
          </p>
          <p>Si no estás de acuerdo con alguna de estas disposiciones, te recomendamos no utilizar el Sitio ni realizar pedidos.</p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Elegibilidad</h2>
          <p className="mb-3">Para realizar pedidos a través de PeptiLabs UK, debes tener al menos 21 años de edad, contar con capacidad legal para contratar y cumplir los requisitos aplicables a la adquisición de materiales de investigación.</p>
          <p className="mb-3">Los productos están destinados exclusivamente a profesionales, investigadores, laboratorios o instituciones con conocimientos y capacidad para manipular compuestos de investigación de manera responsable y segura.</p>
          <p>PeptiLabs UK se reserva el derecho de solicitar información adicional para verificar la elegibilidad del comprador y rechazar pedidos que no cumplan los requisitos legales o las condiciones establecidas.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Naturaleza de los productos</h2>
          <p className="mb-3">Todos los compuestos comercializados por PeptiLabs UK están destinados exclusivamente a investigación científica de laboratorio.</p>
          <p className="mb-2">Los productos:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>No están destinados al consumo humano ni animal.</li>
            <li>No se comercializan como medicamentos, suplementos nutricionales, cosméticos ni productos de consumo.</li>
            <li>No deben ingerirse, inyectarse, inhalarse ni aplicarse sobre el cuerpo.</li>
            <li>No están destinados al diagnóstico, tratamiento, cura o prevención de enfermedades.</li>
            <li>Deben manipularse exclusivamente en entornos de investigación apropiados.</li>
          </ul>
          <p className="mb-3">La información científica, las descripciones de compuestos y las referencias a investigaciones publicadas tienen carácter exclusivamente informativo.</p>
          <p className="mb-3">PeptiLabs UK no proporciona asesoramiento médico, recomendaciones terapéuticas ni instrucciones para la administración de sustancias en humanos o animales.</p>
          <p>Para obtener más información, consulta nuestro <Link href="/research-disclaimer" className="text-gold-400 hover:underline">Aviso de Investigación</Link>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Pedidos y pagos</h2>
          <p className="mb-3">Los pedidos y consultas comerciales se gestionan mediante los canales de contacto disponibles en el Sitio.</p>
          <p className="mb-3">La disponibilidad de productos, los precios finales, las modalidades de pago y los costos de envío serán confirmados antes de completar cada transacción.</p>
          <p className="mb-3">Los precios publicados pueden expresarse en pesos dominicanos (RD$) o en la moneda especificada en la cotización correspondiente.</p>
          <p className="mb-3">PeptiLabs UK se reserva el derecho de corregir errores evidentes en precios, descripciones o disponibilidad, informando al comprador antes de aceptar el pedido.</p>
          <p>Los pedidos se considerarán confirmados una vez que PeptiLabs UK haya aceptado la solicitud y verificado el pago correspondiente, cuando este sea requerido.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Envíos y entregas</h2>
          <p className="mb-3">PeptiLabs UK ofrece envíos internacionales desde el Reino Unido hacia los destinos habilitados para sus operaciones comerciales.</p>
          <p className="mb-3">Los plazos y costos de entrega dependerán del país de destino, la disponibilidad del producto, los procedimientos logísticos y los requisitos aduaneros correspondientes.</p>
          <p className="mb-3">Los tiempos estimados serán comunicados antes de confirmar el pedido.</p>
          <p className="mb-3">Cuando las características del producto lo requieran, se utilizarán condiciones de embalaje y transporte apropiadas para preservar su integridad, incluyendo medidas de control de temperatura cuando corresponda.</p>
          <p className="mb-3">El comprador deberá proporcionar información de entrega completa y correcta, así como la documentación necesaria para la recepción o importación de los productos, cuando sea aplicable.</p>
          <p className="mb-3">Los posibles aranceles, impuestos y requisitos de importación deberán ser informados y gestionados conforme a las condiciones de venta y la legislación correspondiente.</p>
          <p>PeptiLabs UK atenderá las incidencias de entrega de acuerdo con sus obligaciones legales y contractuales.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Cancelaciones, devoluciones y reclamaciones</h2>
          <p className="mb-3">Debido a la naturaleza de los compuestos destinados a investigación y a sus requisitos de conservación, integridad y trazabilidad, las solicitudes de cancelación o devolución estarán sujetas a las características de cada producto y a la legislación aplicable.</p>
          <p className="mb-3">Las restricciones para devolver productos abiertos, manipulados o que hayan perdido las condiciones necesarias para su conservación únicamente se aplicarán cuando la legislación correspondiente lo permita.</p>
          <p className="mb-3">En caso de recibir un producto incorrecto, dañado o que no corresponda con las condiciones acordadas, el comprador deberá contactar a PeptiLabs UK tan pronto como sea posible, preferiblemente dentro de las primeras 48 horas posteriores a la entrega.</p>
          <p className="mb-3">Podrán solicitarse fotografías, identificación del lote y comprobante de compra para evaluar la incidencia.</p>
          <p className="mb-3">El plazo recomendado para comunicar una incidencia no limita los derechos de garantía, cancelación, devolución o reembolso que correspondan legalmente al comprador.</p>
          <p>PeptiLabs UK evaluará cada solicitud y ofrecerá las soluciones que procedan conforme a la legislación aplicable.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Responsabilidad del comprador</h2>
          <p className="mb-2">Al adquirir productos de PeptiLabs UK, el comprador se compromete a:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Utilizar los compuestos exclusivamente para fines legítimos de investigación de laboratorio.</li>
            <li>Cumplir las regulaciones aplicables a la adquisición, importación, almacenamiento y manipulación de los productos.</li>
            <li>Disponer de las instalaciones, conocimientos y equipos adecuados para su manejo.</li>
            <li>Respetar las recomendaciones de conservación e identificación de cada producto.</li>
            <li>No utilizar los productos para consumo humano o animal ni para fines clínicos no autorizados.</li>
            <li>No realizar declaraciones médicas o terapéuticas sobre los productos que contradigan su finalidad de investigación.</li>
          </ul>
          <p>El comprador será responsable de los usos que realice de los productos fuera de las condiciones expresamente autorizadas y dentro de los límites establecidos por la ley.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Limitación de responsabilidad</h2>
          <p className="mb-3">PeptiLabs UK no garantiza resultados científicos específicos derivados del uso de los compuestos comercializados.</p>
          <p className="mb-3">La utilización de los productos en investigaciones, experimentos o procedimientos de laboratorio corresponde a la responsabilidad de las personas o instituciones encargadas de dichas actividades.</p>
          <p className="mb-3">En la medida permitida por la legislación aplicable, PeptiLabs UK no asumirá responsabilidad por pérdidas indirectas derivadas del uso indebido de sus productos.</p>
          <p>Ninguna disposición de estos términos pretende excluir o limitar responsabilidades que legalmente no puedan excluirse, incluidos los derechos del comprador relativos a productos defectuosos, incumplimientos contractuales u otras garantías obligatorias.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Modificaciones de los términos</h2>
          <p className="mb-3">PeptiLabs UK podrá actualizar estos Términos de Servicio para reflejar cambios en sus operaciones, procedimientos comerciales o requisitos legales.</p>
          <p className="mb-3">Las modificaciones serán publicadas en esta página e incluirán la fecha correspondiente a su última actualización.</p>
          <p className="mb-3">Las nuevas condiciones se aplicarán a las operaciones posteriores a su entrada en vigor, sin afectar derechos u obligaciones adquiridos anteriormente, salvo que la legislación permita o exija lo contrario.</p>
          <p>Recomendamos consultar periódicamente esta sección.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Ley aplicable y resolución de controversias</h2>
          <p className="mb-3">Las operaciones realizadas a través de PeptiLabs UK estarán sujetas a la legislación aplicable a la entidad vendedora y a la transacción correspondiente.</p>
          <p className="mb-3">En las operaciones internacionales, se respetarán las disposiciones legales obligatorias que resulten aplicables, incluyendo las relativas a protección de compradores, comercio electrónico e importación de productos.</p>
          <p>Cualquier controversia se resolverá a través de los mecanismos y tribunales competentes conforme a la legislación aplicable, sin limitar los derechos legales de las partes.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Contacto</h2>
          <p className="mb-3">Para consultas relacionadas con estos Términos de Servicio, pedidos, entregas o reclamaciones, puedes comunicarte con PeptiLabs UK a través de los canales oficiales disponibles en nuestro sitio web.</p>
          <ul className="space-y-1 text-sm">
            <li>Sitio web: <a href="https://peptilabsuk.com/" className="text-gold-400 hover:underline">peptilabsuk.com</a></li>
            <li>Contacto: <Link href="/contact" className="text-gold-400 hover:underline">peptilabsuk.com/contact</Link></li>
            <li>Instagram: @peptilabsuk</li>
          </ul>
        </section>

        <p className="text-gray-500 text-sm pt-4 border-t border-navy-800">PeptiLabs UK — Research Materials Only.</p>
      </div>
    </div>
  )
}
