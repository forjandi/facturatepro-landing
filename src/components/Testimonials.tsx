import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TestimonialProps = {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
};

const TestimonialCard = ({
  name,
  position,
  company,
  testimonial,
  image,
}: TestimonialProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 testimonial-card h-full">
      <div className="flex-1">
        <div className="mb-6">
          <svg
            width="120"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="#6366f2"
                transform={`translate(${i * 24}, 0)`}
              />
            ))}
          </svg>
        </div>
        <p className="text-gray-700 mb-6 text-lg">"{testimonial}"</p>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">
            {position}, {company}
          </p>
        </div>
      </div>
      {/* Image */}
      {/*
      <div className="md:w-1/3 self-center">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-xl blur opacity-20"></div>
          <img
            src={image}
            alt={`${name} from ${company}`}
            className="w-full h-auto rounded-lg object-cover relative"
            loading="lazy"
          />
        </div>
      </div>
      */}
    </div>
  );
};

const Testimonials = () => {
  const headingRef = useRef<HTMLDivElement>(null);

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
      name: "Jorge Yarleque",
      position: "Administrador",
      company: "Fundo Casimira",
      testimonial:
        "Nuestro restaurante campestre es un negocio familiar y la transición a la facturación electrónica fue rápida y sin complicaciones. El sistema es intuitivo y nos ha ayudado a reducir errores y ahorrar tiempo valioso.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Renzo Ruiz",
      position: "Gerente General",
      company: "Ruitel S.A.C",
      testimonial:
        "Gracias a Facturate Pro, ahora puedo gestionar nuestras facturas de manera más eficiente y cumplir con las normativas de SUNAT de manera automática. Recomiendo ampliamente este sistema.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: "Judith Ruiz",
      position: "Administradora",
      company: "Blue Natural",
      testimonial:
        "Facturate Pro es una herramienta indispensable para nuestra empresa. Ahora ya no nos preocupamos por las normativas de SUNAT, ya que el sistema se encarga de todo.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
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
            Empresas que ya confían en nuestro sistema para su facturación
            electrónica.
          </p>
        </div>

        <div className="py-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/5"
                >
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="relative static left-0 top-0 translate-y-0 bg-white border-primary hover:bg-primary hover:text-white" />
              <CarouselNext className="relative static right-0 top-0 translate-y-0 bg-white border-primary hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
