import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageCircle, Star, MapPin, Users, Coffee } from "lucide-react";
import heroImage from "@/assets/hero-jama.jpg";
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jama - Encuentra el lugar perfecto para ti</title>
        <meta name="description" content="Recomendaciones inteligentes de lugares para trabajar, comer y socializar. Descubre tu próximo destino con Jama." />
      </Helmet>
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">J</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
              Jama
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/chat" className="text-foreground hover:text-primary transition-smooth">
              Chat con Jamito
            </Link>
            <Link to="/search" className="text-foreground hover:text-primary transition-smooth">
              Buscar lugares
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Encuentra el lugar perfecto
            <br />
            <span className="text-primary-glow">para cada momento</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            ¿No sabes dónde ir? Jamito te ayuda a encontrar el lugar ideal para trabajar, 
            comer en pareja, con amigos o en familia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/chat">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-warm">
                <MessageCircle className="mr-2 h-5 w-5" />
                Hablar con Jamito
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Search className="mr-2 h-5 w-5" />
                Explorar lugares
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ¿Cómo funciona Jama?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Conversa con Jamito</h3>
                <p className="text-muted-foreground">
                  Cuéntale qué necesitas: "un lugar tranquilo para trabajar" o 
                  "restaurante peruano para familia"
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Filtros inteligentes</h3>
                <p className="text-muted-foreground">
                  Usa filtros avanzados por ocasión, tipo de comida, precio, 
                  ubicación y más
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-warm transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Encuentra y ve</h3>
                <p className="text-muted-foreground">
                  Recibe recomendaciones personalizadas con toda la información 
                  que necesitas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perfecto para cualquier ocasión
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Coffee className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-smooth" />
                <h3 className="font-semibold mb-2">Para trabajar</h3>
                <p className="text-sm text-muted-foreground">
                  Cafés con wifi, espacios tranquilos
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-smooth" />
                <h3 className="font-semibold mb-2">Con amigos</h3>
                <p className="text-sm text-muted-foreground">
                  Bares, restaurantes animados
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-smooth" />
                <h3 className="font-semibold mb-2">En pareja</h3>
                <p className="text-sm text-muted-foreground">
                  Lugares románticos, íntimos
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-warm transition-smooth cursor-pointer group">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-smooth" />
                <h3 className="font-semibold mb-2">En familia</h3>
                <p className="text-sm text-muted-foreground">
                  Kid-friendly, espacios amplios
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para encontrar tu lugar ideal?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Deja que Jamito te ayude a decidir dónde ir hoy
          </p>
          <Link to="/chat">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-warm">
              <MessageCircle className="mr-2 h-5 w-5" />
              Empezar ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">J</span>
            </div>
            <span className="font-semibold">Jama</span>
          </div>
          <p className="text-muted-foreground">
            Encuentra el lugar perfecto para cada momento
          </p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;
