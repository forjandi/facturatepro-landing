import React, { useEffect, useRef } from "react";
import { Microchip, MonitorCog, Server, Smartphone, Printer   } from 'lucide-react';


const planetConfigs = [
    { name: "mercury", color: "indigo-400", duration: 7, icon: <MonitorCog className="size-6" /> },
    { name: "venus", color: "cyan-400", duration: 10, icon: <Server className="size-6" /> },
    { name: "earth", color: "green-400", duration: 15, icon: <Smartphone className="size-6" /> },
    { name: "mars", color: "pink-400", duration: 20, icon: <Printer className="size-6" /> },
];

const IntegrationAPI = () => {
    const planetRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let animationFrame: number;
        const start = performance.now();

        function animate(now: number) {
            const elapsed = (now - start) / 1000;
            planetConfigs.forEach((planet, i) => {
                const angle = ((elapsed / planet.duration) * 360) % 360;
                if (planetRefs.current[i]) {
                    planetRefs.current[i]!.style.setProperty("--orbit-rotation", `${angle}deg`);
                }
            });
            animationFrame = requestAnimationFrame(animate);
        }

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div className="max-w-7xl mx-auto section-padding relative">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-200/95 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200/95 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
            <div className="text-center max-w-3xl mx-auto mb-32 flex flex-col items-center">
                <p className="text-sm font-semibold mb-4 text-blue-600 bg-blue-200 px-4 py-1 rounded-full">
                    Integraciones
                </p>
                <h3>
                    <span className="text-xl md:text-3xl font-bold">Módulo de integración (API)</span>
                </h3>
                <p className="text-gray-600 text-sm mt-5">
                    Mejora la interoperabilidad de tu aplicación con nuestro sistema de facturación mediante el uso de tokens API. Estos tokens permiten a servicios de terceros autenticarse con nuestra aplicación en su nombre, facilitando la integración y el acceso a funcionalidades específicas.
                </p>
            </div>
            <div className="flex items-center justify-center h-96 relative mt-10">
                <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-200 to-pink-400 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
                <div className="solar-system body">
                    <div className="sun flex items-center justify-center text-gray-700 w-20 h-20 rounded-sm bg-white/30 backdrop-blur-md border-4 border-white/30 shadow-md ">
                        <Microchip className="size-12 " />
                    </div>
                    {planetConfigs.map((planet, i) => (
                        <div className={`orbit ${planet.name}`} key={planet.name}>
                            <div
                                className={`planet ${planet.name} flex items-center justify-center relative`}
                                ref={el => (planetRefs.current[i] = el)}
                                style={{ "--orbit-rotation": undefined } as React.CSSProperties}
                            >
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-sm  backdrop-blur-md border-2 border-white/40 shadow-md text-${planet.color} bg-${planet.color}/80`}
                                    style={{
                                        transform: `rotate(calc(-1 * var(--orbit-rotation, 0deg)))`
                                    }}
                                >
                                    {planet.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IntegrationAPI;