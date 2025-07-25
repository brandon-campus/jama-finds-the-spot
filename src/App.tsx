import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/Auth";
import PlaceDetails from "./pages/PlaceDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Barra de navegación simple */}
        <nav style={{ padding: 16 }}>
          <Link to="/" style={{ marginRight: 16 }}>Inicio</Link>
          <Link to="/chat" style={{ marginRight: 16 }}>Chat</Link>
          <Link to="/search" style={{ marginRight: 16 }}>Buscar</Link>
          <Link to="/auth">Login / Registro</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/place/:id" element={<PlaceDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
