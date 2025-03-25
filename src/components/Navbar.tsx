
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        scrolled ? 
          "bg-white/80 backdrop-blur-md shadow-sm" : 
          "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gradient">
            FacturasAmigas
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-primary transition-colors">
            Características
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
            Testimonios
          </a>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">
            Preguntas Frecuentes
          </a>
        </div>
        
        <a 
          href="https://wa.me/51958051400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full 
                    hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          <MessageSquare className="h-4 w-4" />
          <span>Contactar Ventas</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
