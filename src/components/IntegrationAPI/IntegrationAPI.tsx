import { Microchip, MonitorCog, Server, Smartphone, Printer } from 'lucide-react';
import './integrationAPI.css'

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
                <p className='text-sm mt-2 text-indigo-600'><strong>*Funcionalidad esta incluída en tu sucripción*</strong></p>
                <p className="text-gray-600 text-sm mt-5 text-left">
                    Integra tu sistema fácilmente con nuestra API de facturación y automatiza la <strong>emisión, consulta y gestión de comprobantes electrónicos.</strong> Nuestra API utiliza autenticación basada en tokens seguros, permitiendo que aplicaciones de terceros accedan a funcionalidades clave como la emisión de facturas y descarga de documentos.
                    <br /><br />
                    <span className="w-full font-bold text-gray-700 text-left inline-block">¿Por qué elegir nuestra API?</span>
                    <ul className="list-disc list-inside mt-2 text-gray-700 text-xs md:text-sm text-left">
                        <li><a href="https://facturate.pro/documentacion" target='_blank' className='underline text-sky-600'>Documentación</a> clara y ejemplos listos para usar.</li>
                        <li>Permite anular comprobantes emitidos.</li>
                        <li>Soporte para integración en múltiples lenguajes y plataformas.</li>
                        <li>Actualizaciones y mejoras continuas.</li>
                    </ul>
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
                                id={`item-api-${i}`}
                                className={`item-api ${item.name} flex items-center justify-center`}
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