import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Facebook, ExternalLink, Heart, MessageCircle, Share } from "lucide-react";

const SocialFeed = () => {
  const socialPosts = [
    {
      platform: "instagram",
      icon: Instagram,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      date: "Hace 2 días",
      content: "🧠 ¿Sabías que la ansiedad es una respuesta natural de nuestro cuerpo? En mi última entrada del blog hablo sobre técnicas de respiración que pueden ayudarte a gestionarla mejor. #SaludMental #Ansiedad #Psicologia",
      likes: 45,
      comments: 12,
      shares: 8
    },
    {
      platform: "linkedin",
      icon: Linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      date: "Hace 1 semana",
      content: "La importancia de la inteligencia emocional en el ámbito laboral. He publicado un artículo sobre cómo desarrollar esta habilidad clave para el éxito profesional y personal. ¿Qué opinas?",
      likes: 78,
      comments: 23,
      shares: 15
    },
    {
      platform: "facebook",
      icon: Facebook,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
      date: "Hace 3 días",
      content: "💙 Recordatorio: Cuidar tu salud mental es tan importante como cuidar tu salud física. Si necesitas hablar con alguien, recuerda que pedir ayuda es un acto de valentía, no de debilidad.",
      likes: 92,
      comments: 18,
      shares: 31
    },
    {
      platform: "instagram",
      icon: Instagram,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      date: "Hace 5 días",
      content: "🌱 5 hábitos diarios para mejorar tu bienestar mental:\n1. Practica la gratitud\n2. Dedica tiempo a la naturaleza\n3. Conecta con personas queridas\n4. Practica mindfulness\n5. Cuida tu descanso\n¿Cuál practicas tú?",
      likes: 67,
      comments: 34,
      shares: 22
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      icon: Instagram,
      color: "text-pink-500",
      bgColor: "bg-pink-500",
      url: "#",
      followers: "2.1K"
    },
    {
      platform: "LinkedIn",
      icon: Linkedin,
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      url: "#",
      followers: "1.5K"
    },
    {
      platform: "Facebook",
      icon: Facebook,
      color: "text-blue-700",
      bgColor: "bg-blue-700",
      url: "#",
      followers: "890"
    }
  ];

  return (
    <section id="redes-sociales" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-trust mb-4">
              Blog y Redes Sociales
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Contenido educativo sobre salud mental, tips de bienestar y recursos psicológicos
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="flex items-center gap-3 px-6 py-4 hover:shadow-card transition-all duration-300"
                onClick={() => window.open(social.url, '_blank')}
              >
                <div className={`p-2 ${social.bgColor} rounded-lg`}>
                  <social.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">{social.platform}</div>
                  <div className="text-sm text-muted-foreground">{social.followers} seguidores</div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {socialPosts.map((post, index) => (
              <Card key={index} className="shadow-card hover:shadow-strong transition-all duration-300 bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${post.bgColor} rounded-lg`}>
                      <post.icon className={`w-5 h-5 ${post.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg capitalize text-trust">{post.platform}</CardTitle>
                      <p className="text-sm text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground leading-relaxed whitespace-pre-line">
                    {post.content}
                  </p>
                  
                  {/* Engagement Stats */}
                  <div className="flex items-center gap-6 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Share className="w-4 h-4" />
                      <span className="text-sm font-medium">{post.shares}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto shadow-strong bg-gradient-hero text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Sígueme para más contenido
                </h3>
                <p className="text-white/90 mb-6">
                  Comparto regularmente tips de salud mental, técnicas de bienestar 
                  y recursos útiles para tu crecimiento personal.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-trust"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <social.icon className="w-4 h-4 mr-2" />
                      {social.platform}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;