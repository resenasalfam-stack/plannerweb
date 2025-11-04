import { useState } from "react";
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

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hola, mi nombre es ${formData.name}%0A%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0ATipo de seguro: ${formData.insuranceType}%0A%0AMensaje: ${formData.message}`;
    
    window.open(`https://wa.me/5491136808630?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te redirigimos a WhatsApp para continuar la conversación.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
      message: "",
    });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Contactanos
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos para asesorarte y ayudarte a encontrar la mejor cobertura
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <Select
                  value={formData.insuranceType}
                  onValueChange={(value) => setFormData({ ...formData, insuranceType: value })}
                >
                  <SelectTrigger className="h-12">
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
              </div>

              <div>
                <Textarea
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full shadow-medium text-lg py-6 h-auto">
                <Send className="w-5 h-5 mr-2" />
                Enviar consulta
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5491136808630" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-lg"
                  >
                    +54 11 3680-8630
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:administracion@plannerseguros.com"
                    className="text-primary hover:underline"
                  >
                    administracion@plannerseguros.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Horario</h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes de 9 a 18 hs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
