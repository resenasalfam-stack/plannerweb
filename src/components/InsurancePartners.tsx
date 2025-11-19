import { Shield } from "lucide-react";
import sancorLogo from "@/assets/logos/sancor-seguros.svg";
import providenciaLogo from "@/assets/logos/providencia.svg";
import integrityLogo from "@/assets/logos/integrity.svg";
import nacionLogo from "@/assets/logos/nacion-seguros.svg";

const partners = [
  { name: "Federación Patronal", logo: null },
  { name: "Galicia Seguros", logo: null },
  { name: "Sancor Seguros", logo: sancorLogo },
  { name: "Provincia Seguros", logo: null },
  { name: "ATM", logo: null },
  { name: "San Patricio", logo: null },
  { name: "San Cristóbal", logo: null },
  { name: "Zurich", logo: null },
  { name: "Allianz", logo: null },
  { name: "Providencia", logo: providenciaLogo },
  { name: "Agrosalta", logo: null },
  { name: "Cruz Suiza", logo: null },
  { name: "Integrity", logo: integrityLogo },
  { name: "Mercantil Andina", logo: null },
  { name: "Nación Seguros", logo: nacionLogo },
];

const InsurancePartners = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
            <Shield className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trabajamos con las mejores aseguradoras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acceso a múltiples opciones para encontrar la cobertura perfecta para vos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-smooth hover:border-primary/30"
            >
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={`Logo ${partner.name}`}
                  className="max-h-12 w-auto object-contain"
                />
              ) : (
                <span className="text-center font-medium text-sm text-foreground">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
