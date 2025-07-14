import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search as SearchIcon, MapPin, Star, Wifi, DollarSign, Clock, Users, Heart } from "lucide-react";
import { PlaceCard } from "@/components/PlaceCard";

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

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  // Mock data
  const mockPlaces: Place[] = [
    {
      id: '1',
      name: 'Café Central',
      description: 'Acogedor café perfecto para trabajar con laptop. Wifi rápido, enchufes en todas las mesas y ambiente tranquilo.',
      category: 'Café',
      cuisine: 'Café y bocadillos',
      priceRange: 'S/ 15-25',
      rating: 4.5,
      district: 'San Isidro',
      features: ['Wifi gratis', 'Enchufes', 'Ambiente tranquilo', 'Café especialidad'],
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      isOpen: true
    },
    {
      id: '2',
      name: 'Astrid y Gastón',
      description: 'Restaurante de cocina peruana de autor. Ambiente elegante perfecto para cenas románticas y ocasiones especiales.',
      category: 'Restaurante',
      cuisine: 'Peruana de autor',
      priceRange: 'S/ 150-200',
      rating: 4.8,
      district: 'San Isidro',
      features: ['Cocina de autor', 'Ambiente elegante', 'Carta de vinos', 'Reservas'],
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b',
      isOpen: true
    },
    {
      id: '3',
      name: 'Pizzas del Barrio',
      description: 'Restaurante familiar con área de juegos para niños. Pizzas artesanales y ambiente relajado para toda la familia.',
      category: 'Restaurante familiar',
      cuisine: 'Pizzas',
      priceRange: 'S/ 40-60',
      rating: 4.2,
      district: 'San Borja',
      features: ['Kid-friendly', 'Área de juegos', 'Pizzas artesanales', 'Estacionamiento'],
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isOpen: true
    },
    {
      id: '4',
      name: 'Barranco Beer Company',
      description: 'Cervecería artesanal con ambiente relajado. Perfecto para reuniones con amigos y after office.',
      category: 'Bar',
      cuisine: 'Cervezas y tapas',
      priceRange: 'S/ 25-40',
      rating: 4.4,
      district: 'Barranco',
      features: ['Cervezas artesanales', 'Música en vivo', 'Terraza', 'Happy hour'],
      image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2',
      isOpen: true
    },
    {
      id: '5',
      name: 'La Rosa Náutica',
      description: 'Restaurante sobre el mar con vista panorámica. Ideal para cenas románticas y celebraciones especiales.',
      category: 'Restaurante',
      cuisine: 'Mariscos',
      priceRange: 'S/ 120-180',
      rating: 4.6,
      district: 'Miraflores',
      features: ['Vista al mar', 'Ambiente romántico', 'Mariscos frescos', 'Terraza'],
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2',
      isOpen: true
    },
    {
      id: '6',
      name: 'WorkHub Lima',
      description: 'Espacio de coworking moderno con salas privadas, wifi de alta velocidad y café ilimitado.',
      category: 'Coworking',
      cuisine: 'Café y snacks',
      priceRange: 'S/ 30-50',
      rating: 4.7,
      district: 'Miraflores',
      features: ['Salas privadas', 'Wifi premium', 'Café ilimitado', 'Impresora'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      isOpen: true
    }
  ];

  const occasions = [
    { value: 'trabajo', label: 'Para trabajar' },
    { value: 'pareja', label: 'En pareja' },
    { value: 'amigos', label: 'Con amigos' },
    { value: 'familia', label: 'En familia' }
  ];

  const cuisines = [
    'Peruana', 'Italiana', 'Japonesa', 'China', 'Mexicana', 'Café y bocadillos', 
    'Mariscos', 'Carnes', 'Vegetariana', 'Pizzas', 'Cervezas y tapas'
  ];

  const districts = [
    'Miraflores', 'San Isidro', 'Barranco', 'San Borja', 'Surco', 
    'La Molina', 'Pueblo Libre', 'San Miguel', 'Lince'
  ];

  const priceRanges = [
    { value: 'budget', label: 'Económico (S/ 10-30)' },
    { value: 'mid', label: 'Moderado (S/ 30-80)' },
    { value: 'premium', label: 'Premium (S/ 80-150)' },
    { value: 'luxury', label: 'Lujo (S/ 150+)' }
  ];

  const filteredPlaces = mockPlaces.filter(place => {
    const matchesSearch = !searchQuery || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCuisine = !selectedCuisine || place.cuisine.includes(selectedCuisine);
    const matchesDistrict = !selectedDistrict || place.district === selectedDistrict;
    
    return matchesSearch && matchesCuisine && matchesDistrict;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">Buscar lugares</h1>
          </div>
          <Link to="/chat">
            <Button variant="outline" size="sm">
              Hablar con Jamito
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-6">
            <div className="grid gap-4">
              {/* Search Bar */}
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre, tipo de comida, características..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filter Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ocasión</label>
                  <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar ocasión" />
                    </SelectTrigger>
                    <SelectContent>
                      {occasions.map(occasion => (
                        <SelectItem key={occasion.value} value={occasion.value}>
                          {occasion.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tipo de comida</label>
                  <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar cocina" />
                    </SelectTrigger>
                    <SelectContent>
                      {cuisines.map(cuisine => (
                        <SelectItem key={cuisine} value={cuisine}>
                          {cuisine}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Distrito</label>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar distrito" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map(district => (
                        <SelectItem key={district} value={district}>
                          {district}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Precio</label>
                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Rango de precio" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map(range => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedOccasion || selectedCuisine || selectedDistrict || selectedPriceRange) && (
                <div className="flex flex-wrap gap-2">
                  {selectedOccasion && (
                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedOccasion('')}>
                      {occasions.find(o => o.value === selectedOccasion)?.label} ×
                    </Badge>
                  )}
                  {selectedCuisine && (
                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCuisine('')}>
                      {selectedCuisine} ×
                    </Badge>
                  )}
                  {selectedDistrict && (
                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedDistrict('')}>
                      {selectedDistrict} ×
                    </Badge>
                  )}
                  {selectedPriceRange && (
                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedPriceRange('')}>
                      {priceRanges.find(r => r.value === selectedPriceRange)?.label} ×
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {filteredPlaces.length} lugares encontrados
          </h2>
        </div>

        <div className="grid gap-6">
          {filteredPlaces.map(place => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <Card className="shadow-card">
            <CardContent className="p-8 text-center">
              <SearchIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No encontramos lugares</h3>
              <p className="text-muted-foreground mb-4">
                Intenta ajustar tus filtros o prueba con una búsqueda diferente
              </p>
              <Link to="/chat">
                <Button variant="outline">
                  Pregúntale a Jamito
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Search;