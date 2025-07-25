import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
// Importa tus componentes de UI si los tienes
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<'login' | 'register'>('login');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (mode === 'register') {
      const { error } = await supabase.auth.signUp({ email, password });
      setLoading(false);
      if (error) setError(error.message);
      else alert('¡Revisa tu correo para confirmar el registro!');
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) setError(error.message);
      else alert('¡Bienvenido!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          />
          <Button type="submit" disabled={loading} className="w-full">
            {loading
              ? mode === 'login'
                ? 'Iniciando...'
                : 'Registrando...'
              : mode === 'login'
                ? 'Iniciar sesión'
                : 'Registrarse'}
          </Button>
        </form>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <div className="flex justify-center mt-6">
          {mode === 'login' ? (
            <span>
              ¿No tienes cuenta?{' '}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setMode('register')}
                type="button"
              >
                Regístrate
              </button>
            </span>
          ) : (
            <span>
              ¿Ya tienes cuenta?{' '}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setMode('login')}
                type="button"
              >
                Inicia sesión
              </button>
            </span>
          )}
        </div>
      </Card>
    </div>
  );
} 