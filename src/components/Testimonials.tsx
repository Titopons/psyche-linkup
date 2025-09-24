import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana M.",
      age: "32 años",
      service: "Terapia Individual",
      rating: 5,
      text: "María me ayudó a superar mi ansiedad de una manera que nunca pensé posible. Su enfoque es cálido pero profesional, y realmente se nota que le importa el bienestar de sus pacientes. Las técnicas que me enseñó las uso a diario.",
      highlight: "Superé mi ansiedad"
    },
    {
      name: "Carlos y Lucía",
      age: "28 y 30 años",
      service: "Terapia de Pareja",
      rating: 5,
      text: "Llegamos a terapia en un momento muy difícil de nuestra relación. María nos dio las herramientas para comunicarnos mejor y entender nuestras diferencias. Hoy somos más fuertes que nunca.",
      highlight: "Salvamos nuestra relación"
    },
    {
      name: "Roberto J.",
      age: "45 años",
      service: "Terapia Individual",
      rating: 5,
      text: "Después de años evitando terapia, finalmente di el paso. El ambiente que crea María es de total confianza. Me ayudó a procesar el duelo por mi padre y a encontrar paz interior.",
      highlight: "Encontré paz interior"
    },
    {
      name: "Patricia S.",
      age: "26 años",
      service: "Terapia Individual",
      rating: 5,
      text: "Como alguien que sufría de baja autoestima, trabajar con María fue transformador. Su método es muy efectivo y siempre me sentí escuchada y comprendida. Recomiendo totalmente sus servicios.",
      highlight: "Mejoré mi autoestima"
    },
    {
      name: "Familia González",
      age: "Padres e hijos",
      service: "Terapia Familiar",
      rating: 5,
      text: "Los problemas de comunicación con nuestros hijos adolescentes parecían insuperables. María nos enseñó estrategias familiares que realmente funcionan. Ahora el ambiente en casa es mucho más armonioso.",
      highlight: "Armonía familiar"
    },
    {
      name: "Elena R.",
      age: "38 años",
      service: "Terapia Online",
      rating: 5,
      text: "Las sesiones online fueron perfectas para mi horario laboral. María mantiene la misma calidad y cercanía que en presencial. Me ayudó muchísimo con el estrés laboral y el burnout.",
      highlight: "Superé el burnout"
    }
  ];

  const stats = [
    { number: "95%", label: "Pacientes satisfechos" },
    { number: "4.9/5", label: "Puntuación promedio" },
    { number: "87%", label: "Pacientes que recomiendan" },
    { number: "500+", label: "Testimonios positivos" }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trust mb-4">
              Testimonios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lo que dicen mis pacientes sobre su experiencia terapéutica
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 shadow-card bg-gradient-card border-0">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-strong transition-all duration-300 bg-gradient-card border-0 relative overflow-hidden">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Highlight */}
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    {testimonial.highlight}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-trust">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.age}</div>
                    <div className="text-xs text-primary font-medium mt-1">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-trust mb-2">Excelencia Reconocida</h3>
                  <p className="text-muted-foreground">
                    Más del 95% de mis pacientes recomiendan mis servicios y valoran 
                    positivamente su experiencia terapéutica.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-card border-0">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full mx-auto flex items-center justify-center mb-4">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-trust mb-2">Confidencialidad Total</h3>
                  <p className="text-muted-foreground">
                    Todos los testimonios han sido compartidos con consentimiento 
                    expreso y manteniendo la privacidad de mis pacientes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;