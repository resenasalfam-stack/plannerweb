import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Martín G.",
    role: "Cliente - Seguro de Auto",
    content: "Excelente atención y rapidez en la gestión del siniestro. Me solucionaron todo en 48hs. Muy recomendables.",
    initials: "MG",
    rating: 5,
  },
  {
    name: "Carolina S.",
    role: "Productora Asociada",
    content: "Desde que me sumé a Planner, mi cartera creció un 40%. El respaldo y las herramientas que brindan son únicos en el mercado.",
    initials: "CS",
    rating: 5,
  },
  {
    name: "Roberto M.",
    role: "Cliente - Seguro Comercio",
    content: "Encontraron la mejor tarifa del mercado para mi negocio. Muy profesionales y siempre disponibles para consultas.",
    initials: "RM",
    rating: 5,
  },
  {
    name: "Laura P.",
    role: "Cliente - Seguro de Hogar",
    content: "Me asesoraron de forma clara y sin vueltas. Hoy tengo mi casa protegida con la mejor cobertura al mejor precio.",
    initials: "LP",
    rating: 5,
  },
  {
    name: "Diego F.",
    role: "Productor Asociado",
    content: "El respaldo jurídico de ADT y las condiciones con las aseguradoras hacen la diferencia. Excelente organización.",
    initials: "DF",
    rating: 5,
  },
  {
    name: "Sofía T.",
    role: "Cliente - Seguro de Moto",
    content: "Contraté mi seguro en minutos por WhatsApp. Cuando tuve un problema, me acompañaron en todo el proceso.",
    initials: "ST",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
            <Quote className="w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La confianza de quienes nos eligen es nuestro mayor respaldo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-soft transition-all duration-300 hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
