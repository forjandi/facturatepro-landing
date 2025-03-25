
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
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
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="feature-card transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="mb-4 p-3 bg-blue-50 rounded-lg inline-block">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
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

  const features = [
    {
      icon: CheckCircle,
      title: "Validación Automática",
      description: "Todos tus documentos son validados automáticamente con SUNAT, asegurando que cumplan con todos los requisitos fiscales."
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Tus datos están protegidos con los más altos estándares de encriptación, manteniendo tu información financiera segura."
    },
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Reduce el tiempo dedicado a tareas administrativas y enfócate en hacer crecer tu negocio con nuestro sistema automatizado."
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headingRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600 text-lg">
            Diseñamos nuestro sistema pensando en la eficiencia, seguridad y simplicidad para que puedas enfocarte en lo que realmente importa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
