import { Shield } from "lucide-react";
import sancorLogo from "@/assets/logos/sancor-seguros.png";
import providenciaLogo from "@/assets/logos/providencia.png";
import integrityLogo from "@/assets/logos/integrity.png";
import nacionLogo from "@/assets/logos/nacion-seguros.png";
import federacionLogo from "@/assets/logos/federacion-patronal.png";
import galiciaLogo from "@/assets/logos/galicia-seguros.png";
import provinciaLogo from "@/assets/logos/provincia-seguros.png";
import atmLogo from "@/assets/logos/atm-seguros.webp";
import sanPatricioLogo from "@/assets/logos/san-patricio.jpg";
import sanCristobalLogo from "@/assets/logos/san-cristobal.png";
import zurichLogo from "@/assets/logos/zurich.png";
import allianzLogo from "@/assets/logos/allianz.png";
import agrosaltaLogo from "@/assets/logos/agrosalta.jpg";
import cruzSuizaLogo from "@/assets/logos/cruz-suiza.jfif";
import mercantilAndinaLogo from "@/assets/logos/mercantil-andina.webp";
import berkleyLogo from "@/assets/logos/berkley.webp";
import paranaLogo from "@/assets/logos/parana-seguros.jfif";

const partners = [
  { name: "Federación Patronal", logo: federacionLogo },
  { name: "Galicia Seguros", logo: galiciaLogo },
  { name: "Sancor Seguros", logo: sancorLogo },
  { name: "Provincia Seguros", logo: provinciaLogo },
  { name: "ATM Seguros", logo: atmLogo },
  { name: "San Patricio", logo: sanPatricioLogo },
  { name: "San Cristóbal", logo: sanCristobalLogo },
  { name: "Zurich", logo: zurichLogo },
  { name: "Allianz", logo: allianzLogo },
  { name: "Providencia", logo: providenciaLogo },
  { name: "Agrosalta", logo: agrosaltaLogo },
  { name: "Cruz Suiza", logo: cruzSuizaLogo },
  { name: "Integrity", logo: integrityLogo },
  { name: "Mercantil Andina", logo: mercantilAndinaLogo },
  { name: "Nación Seguros", logo: nacionLogo },
  { name: "Berkley", logo: berkleyLogo },
  { name: "Paraná Seguros", logo: paranaLogo },
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
              className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:shadow-soft transition-all duration-300 hover:border-primary/30 hover:scale-105"
            >
              <img 
                src={partner.logo} 
                alt={`Logo de ${partner.name}`}
                className="max-h-14 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
