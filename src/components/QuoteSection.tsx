import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Cotizá tu seguro automotor online
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Completá tus datos en minutos y recibí tu cotización al instante
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() => window.open("https://sistema.woker.ar/solicitar-cotizacion/plannerseguros/", "_blank")}
            className="bg-white text-primary hover:bg-white/90 hover:scale-105 shadow-strong text-lg px-10 py-7 h-auto font-semibold transition-all duration-300 cursor-pointer group"
          >
            Obtener mi cotización
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
