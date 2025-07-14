import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, DollarSign, Wifi, Heart, ExternalLink } from "lucide-react";

interface Place {
  id: string;
  name: string;
  description: string;
  category: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  district: string;
  features: string[];
  image: string;
  isOpen: boolean;
}

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard = ({ place }: PlaceCardProps) => {
  const getFeatureIcon = (feature: string) => {
    if (feature.toLowerCase().includes('wifi')) return <Wifi className="h-3 w-3" />;
    if (feature.toLowerCase().includes('precio') || feature.toLowerCase().includes('happy')) return <DollarSign className="h-3 w-3" />;
    return null;
  };

  return (
    <Card className="shadow-card hover:shadow-warm transition-smooth overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <img 
            src={place.image} 
            alt={place.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge variant={place.isOpen ? "default" : "secondary"} className="bg-card text-card-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {place.isOpen ? 'Abierto' : 'Cerrado'}
            </Badge>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm hover:bg-card"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold mb-1">{place.name}</h3>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <span className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {place.district}
                  </span>
                  <span>•</span>
                  <span>{place.category}</span>
                  <span>•</span>
                  <span>{place.cuisine}</span>
                </div>
              </div>
              <div className="flex items-center bg-primary/10 px-2 py-1 rounded">
                <Star className="h-4 w-4 text-primary mr-1 fill-current" />
                <span className="font-medium">{place.rating}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              {place.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {place.features.slice(0, 4).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {getFeatureIcon(feature)}
                  <span className={getFeatureIcon(feature) ? "ml-1" : ""}>{feature}</span>
                </Badge>
              ))}
              {place.features.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{place.features.length - 4} más
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm">
                <DollarSign className="h-4 w-4 text-primary mr-1" />
                <span className="font-medium">{place.priceRange}</span>
              </div>
              
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <MapPin className="h-4 w-4 mr-1" />
                  Ver mapa
                </Button>
                <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Más info
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};