import { Instagram, Facebook, Linkedin, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import logoPlanner from "@/assets/logo-planner.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { QUOTE_URL } from "@/lib/quote-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "Inicio", id: "inicio" },
    { label: "Seguros", id: "seguros" },
    { label: "Productores", id: "productores" },
    { label: "Nosotros", id: "nosotros" },
    { label: "Contacto", id: "contacto" },
  ];

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/plannerseguros", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/plannerseguros", label: "LinkedIn" },
  ];

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Gradient top edge */}
      <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

      <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-primary-foreground">
        {/* Back to top */}
        <div className="container mx-auto px-4">
          <div className="flex justify-end -mt-5">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center shadow-strong hover:bg-primary-foreground/30 transition-smooth"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-10 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10"
          >
            {/* Brand column */}
            <div className="lg:col-span-1">
              <img
                src={logoPlanner}
                alt="Planner Organización de Seguros"
                className="h-16 w-auto mb-5 brightness-0 invert"
              />
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Soluciones integrales en seguros con respaldo jurídico ADT. Más de 15 aseguradoras líderes a tu servicio.
              </p>
              <a
                href={QUOTE_URL}
                target="_top"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-5 py-2.5 rounded-full hover:bg-accent/90 transition-smooth shadow-medium"
              >
                🛡️ Cotizá tu seguro
              </a>
            </div>

            {/* Links column */}
            <div>
              <h3 className="font-heading font-bold text-base uppercase tracking-wider mb-5 text-sky-300">
                Navegación
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-smooth text-sm inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/50 group-hover:bg-sky-300 transition-smooth" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info column */}
            <div>
              <h3 className="font-heading font-bold text-base uppercase tracking-wider mb-5 text-sky-300">
                Contacto
              </h3>
              <ul className="space-y-4 text-sm text-primary-foreground/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
                  <span>Buenos Aires, Argentina</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <a href="mailto:info@plannerseguros.com" className="hover:text-primary-foreground transition-smooth">
                    info@plannerseguros.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>Lun a Vie: 9:00 – 18:00 hs</span>
                </li>
              </ul>
            </div>

            {/* Social column */}
            <div>
              <h3 className="font-heading font-bold text-base uppercase tracking-wider mb-5 text-accent">
                Seguinos
              </h3>
              <div className="flex gap-3 mb-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-smooth" />
                  </a>
                ))}
              </div>
              <p className="text-primary-foreground/50 text-xs leading-relaxed">
                Seguí nuestras redes para enterarte de novedades y tips sobre seguros.
              </p>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50"
          >
            <p>© {currentYear} Planner Organización de Seguros. Todos los derechos reservados.</p>
            <p>
              Diseñado con dedicación en Buenos Aires 🇦🇷
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
