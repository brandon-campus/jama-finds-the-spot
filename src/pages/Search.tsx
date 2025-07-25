import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Search as SearchIcon } from "lucide-react";
import { PlaceCard } from "@/components/PlaceCard";
import { useLugares } from "../hooks/useLugares";
import { Helmet } from 'react-helmet-async';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTipo, setSelectedTipo] = useState('all');
  const [selectedUbicacion, setSelectedUbicacion] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const { lugares, loading, error } = useLugares();

  // Obtener valores únicos para los filtros
  const tipos = Array.from(new Set(lugares.map(l => l.tipo).filter(Boolean)));
  const ubicaciones = Array.from(new Set(lugares.map(l => l.ubicacion).filter(Boolean)));
  const ratings = ['5', '4', '3', '2', '1'];

  // Adaptar los datos de lugares a la estructura esperada por PlaceCard
  const places = lugares.map(lugar => ({
    id: lugar.id,
    name: lugar.nombre,
    description: lugar.descripcion,
    category: lugar.tipo || '',
    cuisine: '',
    priceRange: '',
    rating: lugar.puntuacion,
    district: lugar.ubicacion || '',
    features: [],
    image: lugar.imagen_url,
      isOpen: true
  }));

  // Filtro por búsqueda y filtros avanzados
  const filteredPlaces = places.filter(place => {
    const matchesSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTipo = selectedTipo === 'all' || place.category === selectedTipo;
    const matchesUbicacion = selectedUbicacion === 'all' || place.district === selectedUbicacion;
    const matchesRating = selectedRating === 'all' || (place.rating && Math.floor(place.rating) >= parseInt(selectedRating));
    return matchesSearch && matchesTipo && matchesUbicacion && matchesRating;
  });

  return (
    <>
      <Helmet>
        <title>Buscar lugares | Jama</title>
        <meta name="description" content="Filtra y encuentra lugares ideales para trabajar, comer o socializar en tu ciudad con Jama." />
      </Helmet>
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
          {/* Search Bar y Filtros */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                {/* Search */}
                <div className="relative col-span-2">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Buscar por nombre o descripción..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
                {/* Filtro por tipo */}
                <Select value={selectedTipo} onValueChange={setSelectedTipo}>
                    <SelectTrigger>
                    <SelectValue placeholder="Tipo" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    {tipos.map(tipo => (
                      <SelectItem key={tipo} value={tipo}>{tipo}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                {/* Filtro por ubicación */}
                <Select value={selectedUbicacion} onValueChange={setSelectedUbicacion}>
                    <SelectTrigger>
                    <SelectValue placeholder="Ubicación" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    {ubicaciones.map(ubi => (
                      <SelectItem key={ubi} value={ubi}>{ubi}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                {/* Filtro por rating */}
                <Select value={selectedRating} onValueChange={setSelectedRating}>
                    <SelectTrigger>
                    <SelectValue placeholder="Puntuación mínima" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    {ratings.map(r => (
                      <SelectItem key={r} value={r}>{r} estrellas o más</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
            </CardContent>
          </Card>

          {/* Mostrar lugares */}
          {loading && <p className="text-center mt-8">Cargando lugares...</p>}
          {error && <p className="text-center text-red-500 mt-8">Error: {error}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map(place => (
                <PlaceCard key={place.id} place={place} />
              ))}
              {filteredPlaces.length === 0 && (
                <div className="col-span-full text-center text-muted-foreground py-12">
                  <SearchIcon className="mx-auto mb-4 h-10 w-10" />
                  <p>No se encontraron lugares con los filtros seleccionados.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;