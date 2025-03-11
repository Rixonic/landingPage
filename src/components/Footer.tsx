'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Frank4</h3>
            <p className="text-gray-400">
              Soluciones tecnológicas para empresas: CRM y monitoreo IoT
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-4">
              Este sitio web utiliza WhatsApp Business API para comunicaciones. Al contactarnos, 
              aceptas nuestra política de privacidad y términos de servicio.
            </p>
            <p>
              © {new Date().getFullYear()} Frank4. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 