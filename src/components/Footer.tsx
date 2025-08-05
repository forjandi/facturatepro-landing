import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Facturate Pro</h3>
              <p className="mt-2 text-gray-400">
                Solución integral de facturación electrónica para empresas
                peruanas que buscan simplificar sus procesos contables y cumplir
                con las normativas de SUNAT.
              </p>
            </div>

            <a
              href="https://wa.me/51925630027?text=Hola,%20quisiera%20saber%20más%20sobre%20el%20sistema%20de%20facturación%20electrónica%20de%20Facturate%20Pro."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary/90 hover:bg-primary text-white 
                        px-5 py-3 rounded-lg transition-all inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,2.25121 0.63234,4.35007 1.71094,6.15039l-1.60352,5.84961l5.97461,-1.56836c1.74732,0.99342 3.76446,1.56836 5.91797,1.56836c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12zM10.89258,9.40234c0.195,0 0.39536,-0.00119 0.56836,0.00781c0.214,0.005 0.44692,0.02067 0.66992,0.51367c0.265,0.586 0.84202,2.05608 0.91602,2.20508c0.074,0.149 0.12644,0.32453 0.02344,0.51953c-0.098,0.2 -0.14897,0.32105 -0.29297,0.49805c-0.149,0.172 -0.31227,0.38563 -0.44727,0.51563c-0.149,0.149 -0.30286,0.31238 -0.13086,0.60938c0.172,0.297 0.76934,1.27064 1.65234,2.05664c1.135,1.014 2.09263,1.32561 2.39063,1.47461c0.298,0.149 0.47058,0.12578 0.64258,-0.07422c0.177,-0.195 0.74336,-0.86411 0.94336,-1.16211c0.195,-0.298 0.39406,-0.24644 0.66406,-0.14844c0.274,0.098 1.7352,0.8178 2.0332,0.9668c0.298,0.149 0.49336,0.22275 0.56836,0.34375c0.077,0.125 0.07708,0.72006 -0.16992,1.41406c-0.247,0.693 -1.45991,1.36316 -2.00391,1.41016c-0.549,0.051 -1.06136,0.24677 -3.56836,-0.74023c-3.024,-1.191 -4.93108,-4.28828 -5.08008,-4.48828c-0.149,-0.195 -1.21094,-1.61031 -1.21094,-3.07031c0,-1.465 0.76811,-2.18247 1.03711,-2.48047c0.274,-0.298 0.59492,-0.37109 0.79492,-0.37109z"></path>
                  </g>
                </g>
              </svg>

              <span>Contactar por WhatsApp</span>
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Características
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Piura, Perú</li>
              <li>+51 958 051 400</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Facturate. Todos los derechos
            reservados.
          </p>
          {/* comment this */}
          {/*
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Términos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
