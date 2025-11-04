import { Building2, Scale, Hammer, ShoppingBag, Globe, Briefcase } from "lucide-react";

const alfamCompanies = [
  {
    icon: Building2,
    name: "Planner Organización de Seguros",
    area: "Seguros",
  },
  {
    icon: Scale,
    name: "ADT Estudio Jurídico",
    area: "Servicios Jurídicos",
  },
  {
    icon: Hammer,
    name: "Alfam Construcción",
    area: "Construcción",
  },
  {
    icon: ShoppingBag,
    name: "Alfam Retail",
    area: "Retail",
  },
  {
    icon: Globe,
    name: "Alfam Comex",
    area: "Comercio Exterior",
  },
  {
    icon: Briefcase,
    name: "Alfam Consulting",
    area: "Consultoría",
  },
];

const values = [
  "Confianza",
  "Compromiso",
  "Innovación",
  "Transparencia",
  "Profesionalismo",
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Parte de Alfam Group
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Planner Organización de Seguros pertenece al holding <strong>Alfam Group</strong>, grupo empresarial con presencia en múltiples sectores:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {alfamCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-medium transition-smooth"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <company.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-card-foreground">
                {company.name}
              </h3>
              <p className="text-muted-foreground text-sm">{company.area}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nuestra misión es ofrecer <strong>soluciones profesionales</strong> con el equilibrio justo entre asesoramiento humano y tecnología.
          </p>
          
          <div className="bg-card p-8 rounded-2xl border border-border shadow-soft">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              Nuestros Valores
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-primary/10 text-primary rounded-full font-semibold"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
