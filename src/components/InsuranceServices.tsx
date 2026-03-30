import { Car, Home, Heart, UserRound, FileCheck, Tractor } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="seguros" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Nuestros Seguros
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales de cobertura para cada necesidad
            </p>
          </div>
        </ScrollReveal>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Card 
                className="border-border hover:shadow-medium transition-smooth hover:-translate-y-1 bg-card h-full"
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
            </motion.div>
          ))}
        </div>

        <ScrollReveal animation="zoom" delay={0.3}>
          <div className="text-center">
            <Button 
              size="lg"
              onClick={() => window.open("https://sistema.woker.ar/solicitar-cotizacion/plannerseguros/", "_blank")}
              className="shadow-medium text-lg px-8 py-6 h-auto font-semibold cursor-pointer"
            >
              Solicitá cotización personalizada
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InsuranceServices;
