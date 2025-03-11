import { FaChartLine, FaCloud, FaMobile, FaCogs, FaDatabase, FaShieldAlt } from 'react-icons/fa'

const services = [
  {
    title: 'Sistemas CRM Personalizados',
    description: 'Desarrollamos soluciones CRM adaptadas a tus necesidades específicas para optimizar la gestión de clientes y procesos comerciales.',
    features: [
      { icon: FaChartLine, text: 'Análisis de datos en tiempo real' },
      { icon: FaCloud, text: 'Acceso cloud multiplataforma' },
      { icon: FaMobile, text: 'Aplicaciones móviles integradas' }
    ]
  },
  {
    title: 'Monitoreo IoT',
    description: 'Implementamos sistemas de monitoreo IoT que te permiten controlar y optimizar tus operaciones desde cualquier lugar.',
    features: [
      { icon: FaCogs, text: 'Automatización de procesos' },
      { icon: FaDatabase, text: 'Gestión de datos en tiempo real' },
      { icon: FaShieldAlt, text: 'Seguridad y encriptación avanzada' }
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600">
            Soluciones tecnológicas que impulsan el crecimiento de tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8">
                {service.description}
              </p>
              <div className="space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 