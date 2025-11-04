import { Car, Home, Heart, UserRound, FileCheck, Tractor } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Car,
    title: "Autos y Motos",
    description: "Cobertura total con asistencia 24 hs",
  },
  {
    icon: Home,
    title: "Hogar y Comercio",
    description: "Protegé tus bienes y tu patrimonio",
  },
  {
    icon: Heart,
    title: "Vida y Retiro",
    description: "Tranquilidad para tu futuro",
  },
  {
    icon: UserRound,
    title: "Accidentes Personales",
    description: "Protección estés donde estés",
  },
  {
    icon: FileCheck,
    title: "Cauciones y Garantías",
    description: "Respaldo para empresas y profesionales",
  },
  {
    icon: Tractor,
    title: "Agro y Flota",
    description: "Cobertura integral para campo y transporte",
  },
];

const InsuranceServices = () => {
  return (
    <section id="seguros" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Nuestros Seguros
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales de cobertura para cada necesidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-medium transition-smooth hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            asChild
            className="shadow-medium text-lg px-8 py-6 h-auto font-semibold"
          >
            <a href="https://wa.me/5491136808630?text=Hola,%20quiero%20solicitar%20una%20cotización" target="_blank" rel="noopener noreferrer">
              Solicitá cotización personalizada
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceServices;
