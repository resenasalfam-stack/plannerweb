import { Scale, Phone } from "lucide-react";
import { Button } from "./ui/button";

const ADTAlliance = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-medium p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 text-accent">
                  <Scale className="w-12 h-12" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
                  Alianza Estratégica con ADT Estudio Jurídico
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Junto a <strong>ADT Estudio Jurídico</strong> brindamos defensa y acompañamiento integral ante accidentes de tránsito y siniestros. Los siniestros requieren acompañamiento legal profesional.
                </p>
                <Button 
                  size="lg"
                  asChild
                  className="shadow-soft"
                >
                  <a href="https://wa.me/5491136808630?text=Hola,%20necesito%20consultar%20sobre%20servicios%20legales" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" />
                    Contactá al equipo legal
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ADTAlliance;
