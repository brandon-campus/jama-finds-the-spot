import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export interface Lugar {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: string;
  imagen_url: string;
  ubicacion: string;
  puntuacion: number;
}

export function useLugares() {
  const [lugares, setLugares] = useState<Lugar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLugares() {
      setLoading(true);
      const { data, error } = await supabase.from('lugares').select('*');
      if (error) setError(error.message);
      else setLugares(data || []);
      setLoading(false);
    }
    fetchLugares();
  }, []);

  return { lugares, loading, error };
} 