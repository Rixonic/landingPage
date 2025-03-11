import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const benefits = [
  'Más de 5 años de experiencia en desarrollo de soluciones empresariales',
  'Equipo de expertos en tecnología y desarrollo de software',
  'Soluciones personalizadas adaptadas a tu negocio',
  'Soporte técnico continuo y mantenimiento',
  'Tecnologías de última generación'
]

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src="/about-illustration.svg"
                alt="Sobre Frank4"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Frank4
            </h2>
            <p className="text-gray-600 mb-8">
              Somos una empresa líder en el desarrollo de soluciones tecnológicas empresariales, 
              especializados en sistemas CRM y monitoreo IoT. Nuestro compromiso es impulsar 
              la transformación digital de tu empresa con soluciones innovadoras y eficientes.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 