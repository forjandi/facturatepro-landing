
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
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
              Simplifica tu <span className="text-gradient">facturación electrónica</span> con nosotros
            </h1>
          </div>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
            Automatiza tus procesos de facturación electrónica con SUNAT de manera 
            sencilla, segura y eficiente. Ahorra tiempo y cumple con la normativa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#features" 
              className="bg-primary text-white px-8 py-4 rounded-lg font-medium 
                        flex items-center justify-center gap-2 shadow-lg shadow-blue-200/50
                        hover:bg-primary/90 transition-all"
            >
              Conocer más
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a 
              href="https://wa.me/51958051400" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary border border-primary/20 px-8 py-4 rounded-lg 
                        font-medium flex items-center justify-center gap-2 hover:bg-blue-50 transition-all"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                <path d="M14 11a3 3 0 1 1-2.83-2.83"></path>
              </svg>
              Contactar ventas
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-30 animate-pulse-soft"></div>
            <div className="glass-card rounded-2xl p-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="Dashboard de facturación electrónica" 
                className="w-full h-auto rounded-xl shadow-sm object-cover"
                onLoad={(e) => {
                  e.currentTarget.classList.remove('loading');
                  e.currentTarget.classList.add('loaded');
                }}
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-lg p-4 w-32 md:w-48 animate-float">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Facturas Emitidas</span>
                <span className="text-lg font-bold text-primary">100% Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
