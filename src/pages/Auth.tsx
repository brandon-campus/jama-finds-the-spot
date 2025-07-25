import AuthForm from '../components/AuthForm';

export default function AuthPage() {
  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 32 }}>
      <h1>Inicia sesión o regístrate</h1>
      <AuthForm />
    </div>
  );
} 