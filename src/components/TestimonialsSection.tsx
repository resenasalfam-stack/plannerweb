import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import avatar images
import martinAvatar from "@/assets/avatars/martin-g.jpg";
import carolinaAvatar from "@/assets/avatars/carolina-s.jpg";
import robertoAvatar from "@/assets/avatars/roberto-m.jpg";
import lauraAvatar from "@/assets/avatars/laura-p.jpg";
import diegoAvatar from "@/assets/avatars/diego-f.jpg";
import sofiaAvatar from "@/assets/avatars/sofia-t.jpg";

const testimonials = [
  {
    name: "Martín G.",
    role: "Cliente - Seguro de Auto",
    content: "Excelente atención y rapidez en la gestión del siniestro. Me solucionaron todo en 48hs. Muy recomendables.",
    initials: "MG",
    avatar: martinAvatar,
    rating: 5,
  },
  {
    name: "Carolina S.",
    role: "Productora Asociada",
    content: "Desde que me sumé a Planner, mi cartera creció un 40%. El respaldo y las herramientas que brindan son únicos en el mercado.",
    initials: "CS",
    avatar: carolinaAvatar,
    rating: 5,
  },
  {
    name: "Roberto M.",
    role: "Cliente - Seguro Comercio",
    content: "Encontraron la mejor tarifa del mercado para mi negocio. Muy profesionales y siempre disponibles para consultas.",
    initials: "RM",
    avatar: robertoAvatar,
    rating: 5,
  },
  {
    name: "Laura P.",
    role: "Cliente - Seguro de Hogar",
    content: "Me asesoraron de forma clara y sin vueltas. Hoy tengo mi casa protegida con la mejor cobertura al mejor precio.",
    initials: "LP",
    avatar: lauraAvatar,
    rating: 5,
  },
  {
    name: "Diego F.",
    role: "Productor Asociado",
    content: "El respaldo jurídico de ADT y las condiciones con las aseguradoras hacen la diferencia. Excelente organización.",
    initials: "DF",
    avatar: diegoAvatar,
    rating: 5,
  },
  {
    name: "Sofía T.",
    role: "Cliente - Seguro de Moto",
    content: "Contraté mi seguro en minutos por WhatsApp. Cuando tuve un problema, me acompañaron en todo el proceso.",
    initials: "ST",
    avatar: sofiaAvatar,
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up">
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
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
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
                className="bg-card border-border hover:shadow-soft transition-all duration-300 hover:border-primary/30 h-full"
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
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={`Foto de ${testimonial.name}`}
                        className="object-cover"
                      />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
