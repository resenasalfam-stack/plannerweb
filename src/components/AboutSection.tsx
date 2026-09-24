import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-primary">Planner Broker de Seguros</strong> pertenece al holding empresarial{" "}
              <strong className="text-primary">Alfam Group</strong>, grupo con presencia en múltiples sectores de la economía.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
