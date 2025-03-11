import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="absolute top-8 right-8 z-20">
        <h1 className="text-3xl font-bold text-white">Frank<span className="text-blue-300">4</span></h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transformamos tu Negocio con Soluciones Digitales
            </h1>
            <p className="text-xl mb-8">
              Especialistas en desarrollo de sistemas CRM personalizados y soluciones de monitoreo IoT para impulsar tu empresa hacia el futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contáctanos
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Nuestros Servicios
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-full h-[400px]">
              <Image
                src="/hero-illustration.svg"
                alt="Soluciones digitales Frank4"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
} 