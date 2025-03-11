export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-600">
              En Frank4, recopilamos la siguiente información cuando utilizas nuestros servicios:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre de la empresa (opcional)</li>
              <li>Información de uso del sitio web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso de WhatsApp Business</h2>
            <p className="text-gray-600">
              Utilizamos WhatsApp Business API para comunicarnos contigo. Al proporcionarnos tu número 
              de teléfono y utilizar nuestros servicios, aceptas recibir comunicaciones a través de 
              WhatsApp. Tus datos serán procesados de acuerdo con la política de privacidad de WhatsApp 
              y la nuestra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso de la Información</h2>
            <p className="text-gray-600">
              Utilizamos la información recopilada para:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Comunicarnos contigo sobre nuestros servicios</li>
              <li>Enviar información relevante sobre nuestros productos y servicios</li>
              <li>Cumplir con nuestras obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protección de Datos</h2>
            <p className="text-gray-600">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
              tus datos personales contra el acceso, modificación, divulgación o destrucción no autorizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p className="text-gray-600">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar tus datos personales</li>
              <li>Solicitar la eliminación de tus datos personales</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contacto</h2>
            <p className="text-gray-600">
              Si tienes preguntas sobre nuestra política de privacidad, puedes contactarnos en:
              <br />
              Email: privacy@frank4.com
              <br />
              Teléfono: [Tu número de teléfono]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Actualizaciones de la Política</h2>
            <p className="text-gray-600">
              Podemos actualizar esta política de privacidad ocasionalmente. La versión más reciente 
              estará siempre disponible en nuestro sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 