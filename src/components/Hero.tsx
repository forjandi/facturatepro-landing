import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>

      <div
        ref={heroRef}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            <div className="bg-blue-50 text-primary inline-block px-3 py-1 rounded-full text-sm font-medium animate-fade-in">
              Facturación Electrónica SUNAT
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Simplifica tu{" "}
              <span className="text-gradient">facturación electrónica</span> con
              nosotros
            </h1>
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Automatiza tus procesos de facturación electrónica con SUNAT de
            manera sencilla, segura y eficiente. Ahorra tiempo y cumple con la
            normativa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#features"
              className="bg-primary text-white px-8 py-4 rounded-full font-medium 
                        flex items-center justify-center gap-2 shadow-lg shadow-blue-200/50
                        hover:bg-primary/90 transition-all"
            >
              Conocer más
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://wa.me/51958051400?text=Hola,%20quisiera%20saber%20más%20sobre%20el%20sistema%20de%20facturación%20electrónica%20de%20Facturate%20Pro."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary border border-primary/20 px-8 py-4 rounded-full 
                        font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-all"
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
                  fill="#6366f2"
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
              Contactar a ventas
            </a>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse-soft"></div>
            <div className="glass-card rounded-2xl p-1 relative">
              <img
                src="https://i.ibb.co/N6d06jN7/Clean-Shot-2025-03-25-at-14-10-36.png"
                alt="Dashboard de facturación electrónica"
                className="w-full h-auto rounded-xl shadow-sm object-cover"
                onLoad={(e) => {
                  e.currentTarget.classList.remove("loading");
                  e.currentTarget.classList.add("loaded");
                }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 w-32 md:w-48 animate-float">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Facturas Emitidas</span>
                <span className="text-lg font-bold text-primary">
                  100% Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
