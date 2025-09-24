import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, Clock } from "lucide-react";
import psychologistPortrait from "@/assets/psychologist-portrait.jpg";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      items: [
        "Licenciada en Psicología - Universidad Complutense Madrid",
        "Máster en Psicología Clínica y de la Salud",
        "Especialización en Terapia Cognitivo-Conductual"
      ]
    },
    {
      icon: Award,
      title: "Certificaciones",
      items: [
        "Colegiada Nº 12345 - Colegio Oficial de Psicólogos",
        "Certificación en Terapia de Pareja - Instituto Gottman",
        "Formación en Mindfulness y Terapia de Aceptación"
      ]
    },
    {
      icon: Users,
      title: "Experiencia",
      items: [
        "+8 años de experiencia clínica",
        "+500 pacientes atendidos",
        "Especialista en ansiedad y trastornos del estado de ánimo"
      ]
    }
  ];

  const stats = [
    { number: "8+", label: "Años de experiencia" },
    { number: "500+", label: "Pacientes atendidos" },
    { number: "95%", label: "Satisfacción del paciente" },
    { number: "24h", label: "Respuesta promedio" }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trust mb-4">
              Sobre mí
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicada a ayudarte a alcanzar tu bienestar emocional y crecimiento personal
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-strong">
                <img 
                  src={psychologistPortrait}
                  alt="Psicóloga Irene Hernández"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trust/20 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-card">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-bold text-2xl text-trust">8+</div>
                    <div className="text-sm text-muted-foreground">Años</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-trust">
                Psic. Irene Hernández
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Mi pasión por la psicología nació del deseo de ayudar a las personas a encontrar 
                su equilibrio emocional y desarrollar herramientas para enfrentar los desafíos de la vida.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Con más de 8 años de experiencia clínica, me especializo en terapia cognitivo-conductual 
                y enfoques humanistas, adaptando cada tratamiento a las necesidades únicas de cada paciente.
              </p>
              <div className="bg-gradient-card p-6 rounded-lg border border-border">
                <h4 className="font-bold text-lg mb-3 text-primary">Mi Enfoque Terapéutico</h4>
                <p className="text-muted-foreground">
                  Creo en un espacio seguro y sin juicios donde puedas explorar tus emociones, 
                  pensamientos y comportamientos. Mi objetivo es acompañarte en tu proceso de 
                  autodescubrimiento y crecimiento personal.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-card rounded-lg shadow-soft">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <Card key={index} className="shadow-card hover:shadow-strong transition-all duration-300 bg-gradient-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-hero rounded-lg shadow-soft">
                      <credential.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-bold text-lg text-trust">{credential.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {credential.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;