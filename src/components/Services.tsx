import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, Users, Clock, CheckCircle, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Terapia Individual",
      description: "Tratamiento personalizado para ansiedad, depresión, estrés y crecimiento personal",
      features: ["Enfoque cognitivo-conductual", "Sesiones de 50 minutos", "Plan personalizado"],
      duration: "50 min",
      type: "Individual"
    },
    {
      icon: Heart,
      title: "Terapia de Pareja",
      description: "Fortalece tu relación y mejora la comunicación con tu pareja",
      features: ["Comunicación efectiva", "Resolución de conflictos", "Intimidad emocional"],
      duration: "60 min",
      type: "Pareja"
    },
    {
      icon: Users,
      title: "Terapia Familiar",
      description: "Armonía familiar y resolución de conflictos intergeneracionales",
      features: ["Dinámicas familiares", "Comunicación familiar", "Roles y límites"],
      duration: "60 min",
      type: "Familiar"
    }
  ];

  const specialties = [
    "Ansiedad y Trastornos de Pánico",
    "Depresión y Estados de Ánimo",
    "Estrés y Burnout",
    "Autoestima y Crecimiento Personal",
    "Duelo y Pérdidas",
    "Trastornos del Sueño"
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-trust mb-4">
            Servicios Profesionales
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrezco diferentes modalidades de terapia adaptadas a tus necesidades específicas
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center shadow-soft">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-trust mb-2">{service.title}</CardTitle>
                <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {service.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {service.type}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="bg-card rounded-lg shadow-card p-8">
          <h3 className="text-2xl font-bold text-trust mb-6 text-center">
            Especialidades Clínicas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {specialties.map((specialty, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Star className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{specialty}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modalities */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-trust mb-6">
            Modalidades de Consulta
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h4 className="font-bold text-lg mb-2 text-primary">Presencial</h4>
              <p className="text-muted-foreground">Consultas en mi oficina con ambiente cálido y profesional</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h4 className="font-bold text-lg mb-2 text-secondary">Online</h4>
              <p className="text-muted-foreground">Sesiones por videollamada desde la comodidad de tu hogar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;