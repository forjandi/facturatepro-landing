
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type TestimonialProps = {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
  index: number;
};

const TestimonialCard = ({ name, position, company, testimonial, image, index }: TestimonialProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="flex flex-col md:flex-row gap-8 testimonial-card transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="flex-1">
        <div className="mb-6">
          <svg width="120" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#3B82F6"
                transform={`translate(${i * 24}, 0)`}
              />
            ))}
          </svg>
        </div>
        <p className="text-gray-700 mb-6 text-lg">"{testimonial}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">{position}, {company}</p>
        </div>
      </div>
      <div className="md:w-1/3 self-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-xl blur opacity-20"></div>
          <img 
            src={image} 
            alt={`${name} from ${company}`} 
            className="w-full h-auto rounded-lg object-cover relative"
            loading="lazy"
            onLoad={(e) => {
              e.currentTarget.classList.remove('loading');
              e.currentTarget.classList.add('loaded');
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  
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
    
    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "Director Financiero",
      company: "Logística Perú",
      testimonial: "Implementar este sistema de facturación electrónica ha simplificado completamente nuestros procesos contables. La integración con SUNAT es impecable y el soporte técnico es excelente.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "María Rodriguez",
      position: "Gerente General",
      company: "Distribuidora Andes",
      testimonial: "La transición a la facturación electrónica fue rápida y sin complicaciones. El sistema es intuitivo y nos ha ayudado a reducir errores y ahorrar tiempo valioso.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Juan Pérez",
      position: "Contador Principal",
      company: "Textiles San Isidro",
      testimonial: "Como contador, valoro la precisión y confiabilidad de este sistema. Las actualizaciones constantes según las normativas de SUNAT nos mantienen siempre al día con los requisitos fiscales.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 text-lg">
            Empresas de todos los tamaños confían en nuestro sistema para su facturación electrónica.
          </p>
        </div>
        
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
