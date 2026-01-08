import { TrendingUp, CheckCircle2, GraduationCap, Scale, Monitor, Percent, MessageCircle, ArrowRight, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const stats = [
  { value: "+15", label: "Compañías aseguradoras" },
  { value: "+50", label: "Productores en la red" },
  { value: "100%", label: "Liquidaciones transparentes" },
  { value: "24/7", label: "Soporte continuo" },
];

const benefits = [
  {
    icon: CheckCircle2,
    title: "Múltiples Aseguradoras",
    description: "Acceso a más de 15 compañías líderes del mercado",
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
  {
    icon: Monitor,
    title: "Plataforma Digital",
    description: "Gestión online de pólizas y clientes",
  },
  {
    icon: Percent,
    title: "Comisiones Competitivas",
    description: "Los mejores porcentajes del mercado",
  },
];

const ProducersSection = () => {
  return (
    <section id="productores" className="relative py-24 overflow-hidden">
      {/* Background gradient similar to Hero but inverted */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/30 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20">
            <Rocket className="w-4 h-4" />
            Oportunidad para Productores
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Sumate a Nuestra Red de Productores
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Planner impulsa tu crecimiento como <strong className="text-white">Productor Asesor de Seguros (PAS)</strong>. Unite a nuestra red y accedé a herramientas digitales, soporte jurídico y gestión integral.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <span className="text-4xl md:text-5xl font-bold text-white block mb-2">{stat.value}</span>
              <p className="text-white/70 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para impulsar tu carrera?
          </h3>
          <p className="text-white/70 mb-8 text-lg">
            Contactanos y comenzá a trabajar con las mejores aseguradoras del país
          </p>
          <Button 
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto font-bold group"
          >
            <a 
              href="https://wa.me/5491136808630?text=Hola,%20quiero%20ser%20parte%20de%20Planner%20como%20productor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Quiero ser parte de Planner
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProducersSection;
