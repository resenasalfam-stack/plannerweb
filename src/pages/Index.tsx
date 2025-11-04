import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InsuranceServices from "@/components/InsuranceServices";
import InsurancePartners from "@/components/InsurancePartners";
import ADTAlliance from "@/components/ADTAlliance";
import ProducersSection from "@/components/ProducersSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InsuranceServices />
      <InsurancePartners />
      <ADTAlliance />
      <ProducersSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
