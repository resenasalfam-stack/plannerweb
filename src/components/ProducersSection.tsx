import { TrendingUp, CheckCircle2, GraduationCap, Scale } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Múltiples Aseguradoras",
    description: "Acceso a más de 15 compañías líderes",
  },
  {
    icon: TrendingUp,
    title: "Liquidaciones Transparentes",
    description: "Sistema automático y en tiempo real",
  },
  {
    icon: GraduationCap,
    title: "Capacitación Continua",
    description: "Formación profesional constante",
  },
  {
    icon: Scale,
    title: "Respaldo Jurídico",
    description: "Alianza con ADT Estudio Jurídico",
  },
];

const ProducersSection = () => {
  return (
    <section id="productores" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Sumate a Nuestra Red de Productores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Planner impulsa tu crecimiento como <strong>Productor Asesor de Seguros (PAS)</strong>. Unite a nuestra red y accedé a herramientas digitales, soporte jurídico y gestión integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-medium transition-smooth"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary mb-4">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            asChild
            variant="secondary"
            className="shadow-medium text-lg px-8 py-6 h-auto font-semibold"
          >
            <a href="https://wa.me/5491136808630?text=Hola,%20quiero%20ser%20parte%20de%20Planner%20como%20productor" target="_blank" rel="noopener noreferrer">
              Quiero ser parte de Planner
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProducersSection;
