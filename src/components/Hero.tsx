import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-psychology.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Consulta de psicología profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-trust/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Psic. María González
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 font-light">
            Psicóloga Clínica Especializada
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
            Te acompaño en tu proceso de crecimiento personal y bienestar emocional. 
            Terapia individual y de pareja con un enfoque humanista y cognitivo-conductual.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contacto')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-strong hover:shadow-card transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Cita
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('sobre-mi')}
              className="border-2 border-white text-white hover:bg-white hover:text-trust shadow-strong transition-all duration-300 px-8 py-6 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conoce mi enfoque
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+34 123 456 789</span>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Consultas presenciales y online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;