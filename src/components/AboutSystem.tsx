import React, { useEffect, useRef } from "react";
import graphicsComprobantes from "../assets/graphics-comprobantes.png";
import graphicsNotas from "../assets/graphics-notas.png";
import moduloComprobantes from "../assets/module-comprobantes.png";
import moduloApi from "../assets/module-api.png";
import IntegrationAPI from "./IntegrationAPI";

const AboutSystem = () => {

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

    return (
        <section id="about-system" className="section-padding">
            <div className="max-w-7xl mx-auto transition-all duration-700 opacity-0 translate-y-10" ref={headingRef}>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Conoce nuestro sistema
                    </h2>
                    <p className="text-gray-600 text-lg">
                        ¿Estas interesado en conocer más sobre nuestro sistema de facturación? Aquí te mostramos parte del sistema.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
                    <div className="col-span-1 sm:col-span-2 bg-white/80 rounded-md shadow-sm p-5">
                        <h3 className="text-xl font-semibold">Gráfico de comprobantes</h3>
                        <p className="text-gray-600 text-sm mt-2">Consulta el resumen de tus comprabantes mediante un gráfico.</p>
                        <div className="h-64 p-5 bg-gray-100 rounded-md mt-5 flex items-center justify-center">
                            <img src={graphicsComprobantes} alt="" className="w-full h-full object-cover object-left-bottom rounded-md"/>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-3 bg-white/80 rounded-md shadow-sm p-5">
                        <h3 className="text-xl font-semibold">Módulo de comprobantes</h3>
                        <p className="text-gray-600 text-sm mt-2">Con nuestro sistema puede emitir facturas, boletas, notas de crédito, notas de débito y guías de remisión.</p>
                        <div className="h-64 p-5 bg-gray-100 rounded-md mt-5 flex items-center justify-center">
                            <img src={moduloComprobantes} alt="" className="w-full h-full object-cover object-left-top rounded-md"/>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-3 bg-white/80 rounded-md shadow-sm p-5">
                        <h3 className="text-xl font-semibold">Módulo de integración (API)</h3>
                        <p className="text-gray-600 text-sm mt-2">Los tokens API permiten a servicios de terceros autenticarse con nuestra aplicación en su nombre.</p>
                        <div className="h-64 p-5 bg-gray-100 rounded-md mt-5 flex items-center justify-center">
                            <img src={moduloApi} alt="" className="w-full h-full object-cover object-left-top rounded-md"/>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-2 bg-white/80 rounded-md shadow-sm p-5">
                        <h3 className="text-xl font-semibold">Gráfico de ingresos</h3>
                        <p className="text-gray-600 text-sm mt-2">Consulta tus ingresos en un periodo de 30 días.</p>
                        <div className="h-64 p-5 bg-gray-100 rounded-md mt-5 flex items-center justify-center">
                            <img src={graphicsNotas} alt="" className="w-full h-full object-cover object-left-bottom rounded-md"/>
                        </div>
                    </div>
                </div>
                {/* <IntegrationAPI/> */}
            </div>
        </section>
    );
}

export default AboutSystem;