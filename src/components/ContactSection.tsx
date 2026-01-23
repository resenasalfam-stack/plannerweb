import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";

// Validation schema with security constraints
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar 100 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/, "El nombre solo puede contener letras"),
  email: z
    .string()
    .trim()
    .email("Ingresá un email válido")
    .max(255, "El email no puede superar 255 caracteres"),
  phone: z
    .string()
    .trim()
    .min(8, "El teléfono debe tener al menos 8 dígitos")
    .max(20, "El teléfono no puede superar 20 caracteres")
    .regex(/^[\d\s\-+()]+$/, "Formato de teléfono inválido"),
  insuranceType: z
    .string()
    .min(1, "Seleccioná un tipo de seguro"),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede superar 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field: keyof ContactFormData, value: string): string | undefined => {
    try {
      contactSchema.shape[field].parse(value);
      return undefined;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0]?.message;
      }
      return "Campo inválido";
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    const error = validateField(field, formData[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      toast({
        title: "Error en el formulario",
        description: "Por favor, corregí los campos marcados.",
        variant: "destructive",
      });
      return;
    }

    // Sanitize data
    const sanitizedData = result.data;

    // Save lead to database
    const { error: dbError } = await supabase.from("leads").insert({
      name: sanitizedData.name,
      email: sanitizedData.email,
      phone: sanitizedData.phone,
      message: `[${sanitizedData.insuranceType}] ${sanitizedData.message}`,
    });

    if (dbError) {
      toast({
        title: "Error al guardar",
        description: "Hubo un problema al guardar tu consulta. Intentá de nuevo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Build WhatsApp message
    const whatsappMessage = [
      `Hola, mi nombre es ${sanitizedData.name}`,
      ``,
      `Email: ${sanitizedData.email}`,
      `Teléfono: ${sanitizedData.phone}`,
      `Tipo de seguro: ${sanitizedData.insuranceType}`,
      ``,
      `Mensaje: ${sanitizedData.message}`,
    ].join('\n');
    
    // Use encodeURIComponent for proper URL encoding
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(`https://wa.me/5491136808630?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Tu consulta fue guardada. Te redirigimos a WhatsApp.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      message: "",
    });
    setErrors({});
    setIsSubmitting(false);
  };

  const contactInfoRef = useRef(null);
  const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Contactanos
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos para asesorarte y ayudarte a encontrar la mejor cobertura
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollReveal animation="fade-right">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onBlur={() => handleBlur("name")}
                  maxLength={100}
                  className={`h-12 ${errors.name ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  maxLength={255}
                  className={`h-12 ${errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  maxLength={20}
                  className={`h-12 ${errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Select
                  value={formData.insuranceType}
                  onValueChange={(value) => handleChange("insuranceType", value)}
                >
                  <SelectTrigger 
                    className={`h-12 ${errors.insuranceType ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    aria-invalid={!!errors.insuranceType}
                  >
                    <SelectValue placeholder="Tipo de seguro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto o Moto</SelectItem>
                    <SelectItem value="hogar">Hogar</SelectItem>
                    <SelectItem value="comercio">Comercio</SelectItem>
                    <SelectItem value="vida">Vida</SelectItem>
                    <SelectItem value="accidentes">Accidentes Personales</SelectItem>
                    <SelectItem value="caucion">Caución</SelectItem>
                    <SelectItem value="agro">Agro</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.insuranceType && (
                  <p className="text-sm text-destructive mt-1">{errors.insuranceType}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Mensaje (mínimo 10 caracteres)"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  maxLength={1000}
                  rows={5}
                  className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1 text-right">
                  {formData.message.length}/1000
                </p>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full shadow-medium text-lg py-6 h-auto"
                disabled={isSubmitting}
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
              </Button>
            </form>
          </div>
          </ScrollReveal>

          <div ref={contactInfoRef} className="space-y-6">
            {[
              {
                icon: Phone,
                title: "WhatsApp",
                content: (
                  <a 
                    href="https://wa.me/5491136808630" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-lg"
                  >
                    +54 11 3680-8630
                  </a>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a 
                    href="mailto:administracion@plannerseguros.com"
                    className="text-primary hover:underline"
                  >
                    administracion@plannerseguros.com
                  </a>
                ),
              },
              {
                icon: MapPin,
                title: "Ubicación",
                content: <p className="text-muted-foreground">Buenos Aires, Argentina</p>,
              },
              {
                icon: Clock,
                title: "Horario",
                content: <p className="text-muted-foreground">Lunes a Viernes de 9 a 18 hs</p>,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={contactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="bg-muted p-6 rounded-2xl border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
