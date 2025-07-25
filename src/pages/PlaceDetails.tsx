import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, MapPin, Star, Phone, Globe, Share2, Heart, Clock, DollarSign, Wifi, Car, Users, Coffee, Utensils } from 'lucide-react';

export default function PlaceDetails() {
  const { id } = useParams();
  const [lugar, setLugar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data for enhanced features
  const mockFeatures = {
    horarios: "Lun-Vie: 7:00-22:00, Sáb-Dom: 8:00-24:00",
    telefono: "+51 999 888 777",
    website: "www.ejemplo.com",
    precioPromedio: "S/ 25-40",
    amenidades: [
      { name: "WiFi gratis", icon: Wifi },
      { name: "Estacionamiento", icon: Car },
      { name: "Para familias", icon: Users },
      { name: "Café especialidad", icon: Coffee },
      { name: "Comida casera", icon: Utensils }
    ]
  };

  useEffect(() => {
    async function fetchLugar() {
      setLoading(true);
      const { data, error } = await supabase.from('lugares').select('*').eq('id', id).single();
      if (error) setError(error.message);
      else setLugar(data);
      setLoading(false);
    }
    fetchLugar();
  }, [id]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: lugar?.nombre,
        text: lugar?.descripcion,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Cargando lugar...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-destructive text-lg mb-4">Error al cargar el lugar</p>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Link to="/search">
          <Button>Volver a la búsqueda</Button>
        </Link>
      </div>
    </div>
  );

  if (!lugar) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg mb-4">Lugar no encontrado</p>
        <Link to="/search">
          <Button>Volver a la búsqueda</Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Image */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img 
          src={lugar.imagen_url} 
          alt={lugar.nombre} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Navigation and Actions Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Link to="/search">
            <Button variant="outline" size="sm" className="bg-card/80 backdrop-blur-sm hover:bg-card">
              <ArrowLeft className="h-4 w-4 mr-2" /> Volver
            </Button>
          </Link>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-card/80 backdrop-blur-sm hover:bg-card"
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleShare}
              className="bg-card/80 backdrop-blur-sm hover:bg-card"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Title and Basic Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{lugar.nombre}</h1>
          <div className="flex items-center space-x-4 mb-2">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
              <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
              <span className="font-medium">{lugar.puntuacion}</span>
            </div>
            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/20">
              {lugar.tipo}
            </Badge>
          </div>
          <div className="flex items-center text-white/90">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{lugar.ubicacion}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card className="shadow-card">
              <CardHeader>
                <h2 className="text-xl font-semibold">Acerca de este lugar</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{lugar.descripcion}</p>
              </CardContent>
            </Card>

            {/* Amenidades */}
            <Card className="shadow-card">
              <CardHeader>
                <h2 className="text-xl font-semibold">Amenidades</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mockFeatures.amenidades.map((amenidad, index) => {
                    const IconComponent = amenidad.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2 p-3 bg-secondary/20 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span className="text-sm">{amenidad.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card className="shadow-card">
              <CardHeader>
                <h2 className="text-xl font-semibold">Ubicación</h2>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 rounded-lg overflow-hidden border">
                  <iframe
                    title="Mapa de ubicación"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(lugar.ubicacion)}&output=embed`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact & Hours */}
            <Card className="shadow-card">
              <CardHeader>
                <h3 className="text-lg font-semibold">Información de contacto</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horarios</p>
                    <p className="text-sm text-muted-foreground">{mockFeatures.horarios}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Precio promedio</p>
                    <p className="text-sm text-muted-foreground">{mockFeatures.precioPromedio}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">{mockFeatures.telefono}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sitio web</p>
                    <p className="text-sm text-muted-foreground">{mockFeatures.website}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="shadow-card">
              <CardContent className="p-4 space-y-3">
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <Phone className="h-4 w-4 mr-2" />
                  Llamar ahora
                </Button>
                <Button variant="outline" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  Visitar sitio web
                </Button>
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Cómo llegar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}