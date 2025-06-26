import { Microchip, MonitorCog, Server, Smartphone, Printer } from 'lucide-react';

const itemsConfigs = [
    { name: "item-0", color: "text-indigo-700 bg-indigo-400/10", icon: <MonitorCog className="w-[60%] h-[60%] size-6" /> },
    { name: "item-1", color: "text-cyan-700 bg-cyan-400/10", icon: <Server className="w-[60%] h-[60%] size-6" /> },
    { name: "item-2", color: "text-green-700 bg-green-400/10", icon: <Smartphone className="w-[60%] h-[60%] size-6" /> },
    { name: "item-3", color: "text-pink-700 bg-pink-400/10", icon: <Printer className="w-[60%] h-[60%] size-6" /> },
];

const IntegrationAPI = () => {
    return (
        <div className="max-w-7xl mx-auto section-padding relative md:my-20">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-200/70 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-200/70 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-32 flex flex-col items-center">
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
            <div className="flex items-center justify-center h-auto md:h-96 relative mt-0 md:mt-10">
                <div className="absolute w-full h-96 bg-gradient-to-r from-cyan-100 to-pink-200 rounded-full blur-3xl -z-10 animate-pulse-soft"></div>
                <div className="container-api">
                    <div className="central-api flex items-center justify-center text-gray-700 w-10 md:w-20 h-10 md:h-20 rounded-sm bg-white/30 backdrop-blur-md border-4 border-white/30 shadow-md ">
                        <Microchip className="size-12 " />
                    </div>
                    <div className="orbit orbit-1"></div>
                    <div className="orbit orbit-2"></div>
                    <div className="orbit main">
                        {itemsConfigs.map((item, i) => (
                            <div
                                className={`item-api ${item.name} flex items-center justify-center relative`}
                                key={item.name}
                            >
                                <div
                                    className={`w-12 h-12 flex items-center justify-center rounded-sm backdrop-blur-md border-2 border-white/40 shadow-md ${item.color}`}>
                                    {item.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntegrationAPI;