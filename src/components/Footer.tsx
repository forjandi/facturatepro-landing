
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Facturate</h3>
              <p className="mt-2 text-gray-400">
                Solución integral de facturación electrónica para empresas peruanas 
                que buscan simplificar sus procesos contables y cumplir con las 
                normativas de SUNAT.
              </p>
            </div>
            
            <a 
              href="https://wa.me/51958051400" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary/90 hover:bg-primary text-white 
                        px-5 py-3 rounded-lg transition-all inline-flex"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                <path d="M14 11a3 3 0 1 1-2.83-2.83"></path>
              </svg>
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Características</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Lima, Perú</li>
              <li>ventas@facturate.pe</li>
              <li>+51 958 051 400</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Facturate. Todos los derechos reservados.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
