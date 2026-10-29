import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad | PeptiLabs UK®',
  description: 'Política de privacidad de PeptiLabs UK.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-navy-950 border-b border-gold-500/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-2">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Política de Privacidad</h1>
          <p className="text-gray-500 text-sm mt-3">Última actualización: 27 de octubre de 2026</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-8 text-gray-300 leading-relaxed">
        <div className="space-y-4">
          <p>En PeptiLabs UK respetamos tu privacidad y nos comprometemos a proteger la información personal que nos compartes.</p>
          <p>
            Esta Política de Privacidad explica qué información podemos recopilar cuando visitas <a href="https://peptilabsuk.com/" className="text-gold-400 hover:underline">https://peptilabsuk.com/</a> (en adelante, "el Sitio"), cómo la utilizamos, con quién podemos compartirla y cuáles son tus derechos en relación con tus datos personales.
          </p>
          <p>El tratamiento de la información se realizará conforme a la legislación de protección de datos aplicable a nuestras operaciones.</p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Información que recopilamos</h2>
          <p className="mb-3">PeptiLabs UK recopila la información necesaria para atender consultas, gestionar pedidos y ofrecer soporte a sus clientes.</p>
          <p className="font-semibold text-gray-200 mb-1">Datos de contacto:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Nombre y apellidos.</li>
            <li>Número de teléfono.</li>
            <li>Dirección de correo electrónico, cuando sea proporcionada.</li>
            <li>Información incluida voluntariamente en formularios o comunicaciones.</li>
          </ul>
          <p className="font-semibold text-gray-200 mb-1">Datos de pedidos y entregas:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dirección de envío y referencias de ubicación.</li>
            <li>Productos solicitados.</li>
            <li>Historial de pedidos y comunicaciones relacionadas.</li>
            <li>Información necesaria para gestionar la entrega.</li>
          </ul>
          <p className="font-semibold text-gray-200 mb-1">Información de pago:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Comprobantes de transferencia u otros documentos utilizados para verificar pagos.</li>
            <li>Referencias de transacciones necesarias para confirmar pedidos.</li>
          </ul>
          <p className="font-semibold text-gray-200 mb-1">Información técnica:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Dirección IP y datos de conexión.</li>
            <li>Tipo de dispositivo, navegador y sistema operativo.</li>
            <li>Páginas visitadas e interacciones con el Sitio.</li>
            <li>Información técnica necesaria para el funcionamiento y la seguridad de la web.</li>
          </ul>
          <p>La información recopilada dependerá de los servicios utilizados y de las herramientas efectivamente habilitadas en el Sitio.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Analíticas, cookies y almacenamiento local</h2>
          <p className="mb-3">El Sitio puede utilizar cookies y tecnologías similares para mantener su funcionamiento, recordar preferencias y analizar su rendimiento.</p>
          <p className="mb-2">Estas tecnologías pueden incluir:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Cookies necesarias: permiten el funcionamiento y la seguridad del Sitio.</li>
            <li>Almacenamiento local: puede utilizarse para recordar preferencias del navegador, como una confirmación de edad, cuando esta función esté habilitada.</li>
            <li>Herramientas analíticas: si se implementan, permiten obtener información sobre visitas, páginas consultadas, dispositivos e interacciones.</li>
          </ul>
          <p className="mb-3">Si se utiliza Google Analytics 4 u otra herramienta de medición, se informará sobre su funcionamiento, las categorías de datos tratadas y los mecanismos disponibles para gestionar las preferencias de privacidad.</p>
          <p className="mb-3">Las tecnologías que requieren consentimiento se activarán únicamente cuando exista una autorización válida del visitante.</p>
          <p className="mb-3">Cuando la legislación permita determinadas mediciones estadísticas sin consentimiento, se cumplirán los requisitos específicos aplicables, incluida la posibilidad de oponerse cuando corresponda.</p>
          <p>Puedes administrar las cookies desde la configuración de tu navegador y mediante los mecanismos de privacidad disponibles en el Sitio.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Cómo utilizamos tu información</h2>
          <p className="mb-2">Los datos personales recopilados se utilizan para:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Responder consultas recibidas a través del Sitio.</li>
            <li>Procesar y gestionar solicitudes de pedidos.</li>
            <li>Verificar pagos y coordinar entregas.</li>
            <li>Proporcionar información relacionada con pedidos o envíos.</li>
            <li>Ofrecer atención al cliente y soporte.</li>
            <li>Mantener la seguridad y el funcionamiento del Sitio.</li>
            <li>Mejorar la experiencia de navegación y el contenido informativo.</li>
            <li>Cumplir obligaciones legales, fiscales o administrativas aplicables.</li>
          </ul>
          <p className="mb-3">No utilizaremos los datos personales para fines incompatibles con aquellos para los que fueron recopilados sin una base legal válida.</p>
          <p>Las comunicaciones promocionales, cuando se realicen, respetarán los requisitos legales de consentimiento u otra autorización aplicable y ofrecerán mecanismos para cancelar su recepción.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Bases legales para el tratamiento de datos</h2>
          <p className="mb-2">Cuando resulte aplicable el Reglamento General de Protección de Datos del Reino Unido (UK GDPR), el tratamiento de información personal se fundamentará, según la finalidad, en alguna de las siguientes bases:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Ejecución de un contrato: para gestionar pedidos, pagos y entregas.</li>
            <li>Obligaciones legales: para cumplir requisitos fiscales, contables o regulatorios.</li>
            <li>Interés legítimo: para garantizar la seguridad del Sitio, atender solicitudes y mejorar nuestros procesos, siempre que no prevalezcan los derechos y libertades de los usuarios.</li>
            <li>Consentimiento: cuando sea necesario para determinadas cookies, comunicaciones comerciales u otros tratamientos que así lo requieran.</li>
          </ul>
          <p className="mb-3">Cuando el tratamiento dependa del consentimiento, podrás retirarlo en cualquier momento.</p>
          <p>La retirada del consentimiento no afectará la legalidad del tratamiento realizado anteriormente.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Compartir información con terceros</h2>
          <p className="mb-3">PeptiLabs UK no comercializa ni alquila información personal de sus clientes.</p>
          <p className="mb-2">Podemos compartir los datos estrictamente necesarios con proveedores que intervengan en nuestras operaciones, tales como:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Empresas de transporte y logística.</li>
            <li>Proveedores de alojamiento y mantenimiento web.</li>
            <li>Proveedores de servicios de pago, cuando corresponda.</li>
            <li>Plataformas de comunicación utilizadas para gestionar consultas.</li>
            <li>Proveedores de analíticas o servicios tecnológicos, cuando estén habilitados.</li>
            <li>Autoridades competentes cuando exista una obligación legal.</li>
          </ul>
          <p className="mb-3">El acceso a la información se limitará a las finalidades necesarias para prestar cada servicio.</p>
          <p>Cuando utilizas enlaces externos, como WhatsApp, Instagram o Telegram, el tratamiento de tus datos por esas plataformas también estará sujeto a sus respectivas políticas de privacidad.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Transferencias internacionales de datos</h2>
          <p className="mb-3">Debido a la naturaleza internacional de nuestras operaciones, determinados datos personales pueden ser tratados o transferidos entre países, incluido el Reino Unido y los destinos en los que operen nuestros proveedores tecnológicos, comerciales o logísticos.</p>
          <p className="mb-3">Cuando una transferencia internacional esté sujeta a requisitos específicos de protección de datos, PeptiLabs UK adoptará las medidas legales y técnicas que correspondan.</p>
          <p>Estas medidas pueden incluir acuerdos contractuales de protección de datos y otros mecanismos reconocidos por la legislación aplicable.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Almacenamiento y seguridad</h2>
          <p className="mb-3">Implementamos medidas técnicas y organizativas razonables para proteger la información personal frente a accesos no autorizados, pérdidas, modificaciones o divulgaciones indebidas.</p>
          <p className="mb-2">Entre estas medidas pueden incluirse:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Acceso restringido a la información.</li>
            <li>Sistemas de autenticación y control de permisos.</li>
            <li>Protección de los canales de comunicación.</li>
            <li>Procedimientos internos para el manejo responsable de datos.</li>
          </ul>
          <p className="mb-3">El acceso a la información personal estará limitado al personal y proveedores autorizados que necesiten tratarla para cumplir sus funciones.</p>
          <p>Aunque adoptamos medidas de seguridad, ningún sistema de transmisión o almacenamiento electrónico puede garantizar protección absoluta.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Conservación de datos</h2>
          <p className="mb-3">Conservamos la información personal únicamente durante el tiempo necesario para cumplir las finalidades descritas en esta política.</p>
          <p className="mb-2">Los períodos de conservación dependerán de:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>La naturaleza de la información.</li>
            <li>La duración de la relación comercial.</li>
            <li>Las obligaciones legales, fiscales o contables.</li>
            <li>La necesidad de atender reclamaciones o resolver incidencias.</li>
            <li>Los requisitos aplicables a los distintos servicios.</li>
          </ul>
          <p>Una vez que los datos dejen de ser necesarios, serán eliminados, anonimizados o conservados únicamente cuando exista una justificación legal.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">9. Tus derechos</h2>
          <p className="mb-2">De acuerdo con la legislación aplicable, puedes tener derecho a:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Acceso: conocer qué información personal conservamos sobre ti.</li>
            <li>Rectificación: solicitar la corrección de datos incorrectos o incompletos.</li>
            <li>Supresión: solicitar la eliminación de tus datos cuando legalmente proceda.</li>
            <li>Limitación: solicitar la restricción de determinados tratamientos.</li>
            <li>Oposición: oponerte a tratamientos basados en intereses legítimos y, en cualquier momento, al uso de tus datos para marketing directo.</li>
            <li>Portabilidad: solicitar tus datos en un formato estructurado cuando corresponda.</li>
            <li>Retirada del consentimiento: retirar autorizaciones previamente otorgadas.</li>
          </ul>
          <p className="mb-3">Puedes presentar solicitudes relacionadas con tus datos a través de nuestros canales oficiales de contacto.</p>
          <p className="mb-3">Responderemos de acuerdo con los plazos y requisitos establecidos por la legislación aplicable.</p>
          <p>Si tus datos están protegidos por el UK GDPR, también puedes presentar una reclamación ante la Information Commissioner&apos;s Office (ICO), la autoridad británica de protección de datos, a través de <a href="https://ico.org.uk/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">ico.org.uk</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">10. Privacidad de menores</h2>
          <p className="mb-3">Los productos y servicios comerciales de PeptiLabs UK están dirigidos a personas adultas que cumplan los requisitos de elegibilidad establecidos en nuestros Términos de Servicio.</p>
          <p className="mb-3">No buscamos recopilar deliberadamente información personal de menores de 21 años para la realización de pedidos.</p>
          <p>Si identificamos que hemos recopilado información personal de una persona que no cumple nuestros requisitos de elegibilidad, evaluaremos su eliminación o restricción conforme a la legislación aplicable.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">11. Cambios a esta política</h2>
          <p className="mb-3">PeptiLabs UK podrá actualizar esta Política de Privacidad para reflejar cambios en sus operaciones, tecnologías, procedimientos internos o requisitos legales.</p>
          <p className="mb-3">Cuando se realicen modificaciones, actualizaremos la fecha indicada al inicio del documento.</p>
          <p className="mb-3">Si los cambios afectan significativamente el tratamiento de información personal, proporcionaremos los avisos correspondientes cuando la legislación así lo exija.</p>
          <p>Recomendamos revisar periódicamente esta página.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">12. Contacto</h2>
          <p className="mb-3">Si tienes preguntas sobre esta Política de Privacidad o deseas ejercer tus derechos relacionados con la protección de datos personales, puedes comunicarte con PeptiLabs UK a través de nuestros canales oficiales.</p>
          <ul className="space-y-1 text-sm">
            <li>Sitio web: <a href="https://peptilabsuk.com/" className="text-gold-400 hover:underline">peptilabsuk.com</a></li>
            <li>Formulario de contacto: <Link href="/contact" className="text-gold-400 hover:underline">peptilabsuk.com/contact</Link></li>
          </ul>
        </section>

        <p className="text-gray-500 text-sm pt-4 border-t border-navy-800">PeptiLabs UK — Research Materials Only.</p>
      </div>
    </div>
  )
}
