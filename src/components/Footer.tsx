import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, Facebook, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Blog", href: "#redes-sociales" },
    { name: "Contacto", href: "#contacto" }
  ];

  const services = [
    "Terapia Individual",
    "Terapia de Pareja",
    "Terapia Familiar",
    "Consultas Online",
    "Terapia de Ansiedad",
    "Terapia de Depresión"
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },  
    { icon: Facebook, href: "#", name: "Facebook" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-trust text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand & Contact */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Psic. Irene Hernández</h3>
                  <p className="text-white/80 text-sm">Psicóloga Clínica Especializada</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                Te acompaño en tu proceso de crecimiento personal y bienestar emocional 
                con más de 8 años de experiencia en terapia individual, de pareja y familiar.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary-light flex-shrink-0" />
                  <span className="text-sm">Calle Serrano 123, Madrid</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary-light flex-shrink-0" />
                  <span className="text-sm">+34 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary-light flex-shrink-0" />
                  <span className="text-sm">irene.hernandez@psicologo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary-light flex-shrink-0" />
                  <span className="text-sm">Lun - Vie: 9:00 - 20:00</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white transition-colors text-sm hover:underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="text-white/80 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <Card className="bg-white/10 border-white/20 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h4 className="text-lg font-bold mb-2">Sígueme en redes sociales</h4>
                <p className="text-white/80 text-sm">
                  Contenido educativo sobre salud mental y bienestar emocional
                </p>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(social.href, '_blank')}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Emergency Info */}
          <Card className="bg-destructive/20 border-destructive/30 p-4 mb-8">
            <div className="text-center">
              <h4 className="font-bold mb-2 text-white">⚠️ Emergencias</h4>
              <p className="text-white/90 text-sm">
                Si tienes una crisis emocional urgente, llama al <strong>112</strong> o 
                acude al servicio de urgencias más cercano.
              </p>
            </div>
          </Card>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span>© 2024 Psic. Irene Hernández.</span>
                <span>Hecho con</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>para tu bienestar</span>
              </div>
              <div className="flex gap-6">
                <button className="hover:text-white transition-colors">
                  Política de Privacidad
                </button>
                <button className="hover:text-white transition-colors">
                  Términos de Servicio
                </button>
                <span>Colegiada Nº 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;