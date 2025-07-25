import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Star } from 'lucide-react';

export default function PlaceDetails() {
  const { id } = useParams();
  const [lugar, setLugar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) return <p className="text-center mt-8">Cargando...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">Error: {error}</p>;
  if (!lugar) return <p className="text-center mt-8">Lugar no encontrado</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Link to="/search">
        <Button variant="outline" size="sm" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" /> Volver a la búsqueda
        </Button>
      </Link>
      <Card className="shadow-card">
        <img src={lugar.imagen_url} alt={lugar.nombre} className="w-full h-64 object-cover rounded-t" />
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-2">{lugar.nombre}</h1>
          <div className="flex items-center text-muted-foreground mb-4 space-x-4">
            <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" />{lugar.ubicacion}</span>
            <span>•</span>
            <span>{lugar.tipo}</span>
            <span>•</span>
            <span className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-1" />{lugar.puntuacion}</span>
          </div>
          <p className="mb-4 text-lg">{lugar.descripcion}</p>
          {/* Mapa de Google Maps */}
          {lugar.ubicacion && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Ubicación en el mapa</h2>
              <div className="w-full h-64 rounded overflow-hidden border">
                <iframe
                  title="Mapa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(lugar.ubicacion)}&output=embed`}
                ></iframe>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 