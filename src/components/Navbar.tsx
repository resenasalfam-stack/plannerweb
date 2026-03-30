import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logoPlanner from "@/assets/logo-planner.png";
import { QUOTE_URL, handleQuoteLinkClick } from "@/lib/quote-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={logoPlanner} 
              alt="Planner Organización de Seguros" 
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection("seguros")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Seguros
            </button>
            <button onClick={() => scrollToSection("productores")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Productores
            </button>
            <button onClick={() => scrollToSection("nosotros")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection("contacto")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Contacto
            </button>
            <Button 
              variant="default"
              asChild
              className="shadow-medium bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-6 animate-pulse hover:animate-none cursor-pointer"
            >
              <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer" onClick={handleQuoteLinkClick}>
                🛡️ Cotizá tu seguro
              </a>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-primary transition-smooth font-medium">
                Inicio
              </button>
              <button onClick={() => scrollToSection("seguros")} className="text-foreground hover:text-primary transition-smooth font-medium">
                Seguros
              </button>
              <button onClick={() => scrollToSection("productores")} className="text-foreground hover:text-primary transition-smooth font-medium">
                Productores
              </button>
              <button onClick={() => scrollToSection("nosotros")} className="text-foreground hover:text-primary transition-smooth font-medium">
                Nosotros
              </button>
              <button onClick={() => scrollToSection("contacto")} className="text-foreground hover:text-primary transition-smooth font-medium">
                Contacto
              </button>
              <Button 
                variant="default"
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base cursor-pointer"
              >
                <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer" onClick={handleQuoteLinkClick}>
                  🛡️ Cotizá tu seguro
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
