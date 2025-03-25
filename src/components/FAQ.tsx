
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={itemRef}
      className="border-b border-gray-200 py-5 transition-all duration-700 opacity-0 translate-y-10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-medium text-lg"
      >
        {question}
        <ChevronDown 
          className={cn(
            "h-5 w-5 text-primary transition-transform duration-300",
            isOpen ? "transform rotate-180" : ""
          )} 
        />
      </button>
      <div 
        className={cn(
          "mt-2 text-gray-600 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="py-2">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
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

  const faqs = [
    {
      question: "¿Cómo funciona la integración con SUNAT?",
      answer: "Nuestro sistema se conecta directamente con los servicios web de SUNAT para validar y enviar sus comprobantes electrónicos en tiempo real. Realizamos todas las verificaciones necesarias para garantizar que sus documentos cumplan con los requisitos legales antes de ser enviados."
    },
    {
      question: "¿Qué tipos de documentos electrónicos puedo emitir?",
      answer: "Con nuestro sistema puede emitir facturas, boletas, notas de crédito, notas de débito, guías de remisión, y todos los comprobantes electrónicos requeridos por SUNAT, incluyendo comprobantes de retención y percepción."
    },
    {
      question: "¿Qué sucede si SUNAT cambia sus requisitos o formatos?",
      answer: "Nos mantenemos constantemente actualizados con todas las modificaciones normativas de SUNAT. Cuando hay cambios, actualizamos automáticamente nuestro sistema para que usted siga cumpliendo con los requisitos sin interrupción en su operación."
    },
    {
      question: "¿Cómo puedo acceder a mis comprobantes electrónicos?",
      answer: "Todos sus comprobantes se almacenan de forma segura en la nube y están disponibles para consulta y descarga desde nuestro portal web o aplicación móvil. Puede acceder a ellos en cualquier momento y desde cualquier dispositivo con conexión a internet."
    },
    {
      question: "¿El sistema funciona si mi internet es inestable?",
      answer: "Sí, nuestro sistema cuenta con un modo contingencia que permite seguir emitiendo comprobantes incluso cuando hay problemas de conectividad. Una vez que se restablece la conexión, los documentos se sincronizan automáticamente con SUNAT."
    },
    {
      question: "¿Qué soporte técnico ofrecen?",
      answer: "Ofrecemos soporte técnico por múltiples canales (chat, correo electrónico, teléfono y WhatsApp) con horarios extendidos. Nuestro equipo de especialistas está capacitado para resolver cualquier incidencia relacionada con la facturación electrónica."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div 
          ref={headingRef}
          className="text-center mb-12 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 text-lg">
            Respuestas a las dudas más comunes sobre nuestro sistema de facturación electrónica.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
