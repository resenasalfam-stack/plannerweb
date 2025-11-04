import { Shield } from "lucide-react";

const partners = [
  "Federación Patronal",
  "Galicia Seguros",
  "Sancor Seguros",
  "Provincia Seguros",
  "ATM",
  "San Patricio",
  "San Cristóbal",
  "Zurich",
  "Allianz",
  "Providencia",
  "Agrosalta",
  "Cruz Suiza",
  "Integrity",
  "Mercantil Andina",
  "Nación Seguros",
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
              className="flex items-center justify-center p-6 bg-muted rounded-xl border border-border hover:shadow-soft transition-smooth hover:border-primary/30"
            >
              <span className="text-center font-medium text-sm text-foreground">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
