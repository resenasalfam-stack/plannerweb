import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491136808630"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none"
      aria-label="Contactar por WhatsApp"
    >
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-strong hover:shadow-medium transition-smooth bg-[#25D366] hover:bg-[#20BA5A] text-white p-0"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
