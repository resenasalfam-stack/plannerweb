import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    question: "¿Cómo puedo cotizar un seguro?",
    answer:
      "Podés contactarnos por WhatsApp o completar el formulario de contacto en nuestra web. Te responderemos en menos de 24hs con las mejores opciones del mercado adaptadas a tus necesidades.",
  },
  {
    question: "¿Qué aseguradoras trabajan con Planner?",
    answer:
      "Trabajamos con más de 15 compañías líderes del mercado: Federación Patronal, Sancor, Zurich, San Cristóbal, Allianz, Mercantil Andina, Berkley, entre otras. Esto nos permite ofrecerte la mejor relación precio-cobertura.",
  },
  {
    question: "¿Qué documentación necesito para contratar un seguro de auto?",
    answer:
      "Para cotizar necesitás: DNI del titular, cédula verde del vehículo y fotos del auto (frente, laterales, trasera y motor). Una vez que elijas la cobertura, te guiamos en el proceso de contratación.",
  },
  {
    question: "¿Cómo denuncio un siniestro?",
    answer:
      "Contactanos inmediatamente por WhatsApp al momento del siniestro. Te guiamos en todo el proceso, te indicamos qué documentación presentar y gestionamos el reclamo directamente con la aseguradora para que vos no tengas que preocuparte.",
  },
  {
    question: "¿Puedo cambiar de aseguradora sin perder beneficios?",
    answer:
      "Sí, podés cambiar en cualquier momento. Analizamos tu póliza actual, comparamos con las opciones disponibles y te asesoramos sobre la mejor alternativa, manteniendo o mejorando tu cobertura actual.",
  },
  {
    question: "¿Qué significa ser Productor Asociado de Planner?",
    answer:
      "Como Productor Asociado accedés a más de 15 compañías aseguradoras, comisiones competitivas, respaldo jurídico de ADT Abogados, y herramientas digitales para gestionar tu cartera de forma eficiente. Te acompañamos en el crecimiento de tu negocio.",
  },
];

const FAQSection = () => {
  const faqRef = useRef(null);
  const isInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respondemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>
        </ScrollReveal>

        <div ref={faqRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 data-[state=open]:shadow-soft transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
