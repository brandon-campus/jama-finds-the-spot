import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, ArrowLeft, Bot, User } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '¡Hola! Soy Jamito 🤖 Tu asistente personal para encontrar lugares increíbles. Cuéntame, ¿qué tipo de lugar estás buscando hoy?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('trabajo') || input.includes('trabajar') || input.includes('laptop')) {
      return '¡Perfecto! Te recomiendo estos lugares ideales para trabajar:\n\n☕ **Café Central** - Wifi excelente, ambiente tranquilo, buenos enchufes\n📍 San Isidro | 💰 S/ 15-25 por consumo\n\n🏢 **WorkHub Lima** - Coworking con salas privadas\n📍 Miraflores | 💰 S/ 30-50 por día\n\n¿Te gustaría más detalles de alguno o prefieres otros filtros?';
    }
    
    if (input.includes('pareja') || input.includes('cita') || input.includes('romántico')) {
      return '¡Qué romántico! 💕 Aquí tienes lugares perfectos para una cita:\n\n🍽️ **Astrid y Gastón** - Elegante, cocina peruana de autor\n📍 San Isidro | 💰 S/ 150-200 por persona\n\n🌅 **La Rosa Náutica** - Vista al mar, ambiente íntimo\n📍 Miraflores | 💰 S/ 120-180 por persona\n\n¿Qué tipo de comida prefieren? ¿Tienen algún presupuesto en mente?';
    }
    
    if (input.includes('familia') || input.includes('niños') || input.includes('hijos')) {
      return '¡Genial para una salida familiar! 👨‍👩‍👧‍👦 Te sugiero:\n\n🍕 **Pizzas del Barrio** - Kid-friendly, área de juegos\n📍 San Borja | 💰 S/ 40-60 por familia\n\n🎪 **Bembos Kids** - Zona de juegos, menú infantil\n📍 Varios distritos | 💰 S/ 30-50 por familia\n\n¿Los niños tienen alguna edad específica? ¿Prefieren algún tipo de comida?';
    }
    
    if (input.includes('amigos') || input.includes('grupo') || input.includes('celebrar')) {
      return '¡Para pasarla genial con amigos! 🎉 Mira estas opciones:\n\n🍻 **Barranco Beer Company** - Cervezas artesanales, ambiente relajado\n📍 Barranco | 💰 S/ 25-40 por persona\n\n🎵 **La Noche de Barranco** - Música en vivo, buen ambiente\n📍 Barranco | 💰 S/ 35-55 por persona\n\n¿Qué les gusta más: ambiente tranquilo o más animado?';
    }
    
    return '¡Interesante! Para darte la mejor recomendación, ¿podrías contarme un poco más? Por ejemplo:\n\n• ¿Es para trabajar, comer, o pasar un rato?\n• ¿Van solos, en pareja, con amigos o familia?\n• ¿Tienen algún presupuesto en mente?\n• ¿Prefieren algún distrito en particular?\n\n¡Con esa info te daré opciones perfectas! 😊';
  };

  const quickSuggestions = [
    "Quiero un lugar tranquilo para trabajar con laptop",
    "Busco restaurante peruano para cita romántica",
    "Necesito lugar kid-friendly para almorzar en familia",
    "Quiero bar para celebrar con amigos"
  ];

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
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-semibold">Jamito</h1>
                <p className="text-sm text-muted-foreground">Tu asistente de lugares</p>
              </div>
            </div>
          </div>
          <Link to="/search">
            <Button variant="outline" size="sm">
              Ver filtros
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Chat Messages */}
        <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gradient-primary'
                }`}>
                  {message.type === 'user' ? 
                    <User className="h-4 w-4" /> : 
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  }
                </div>
                <Card className={`shadow-card ${message.type === 'user' ? 'bg-primary text-primary-foreground' : ''}`}>
                  <CardContent className="p-4">
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {message.content}
                    </div>
                    <div className={`text-xs mt-2 opacity-70 ${message.type === 'user' ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Suggestions */}
        {messages.length <= 1 && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3">💡 Prueba preguntando algo como:</p>
            <div className="grid gap-2">
              {quickSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto p-3 text-left whitespace-normal"
                  onClick={() => setInputMessage(suggestion)}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Cuéntale a Jamito qué lugar buscas..."
            className="flex-1"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} className="bg-gradient-primary hover:opacity-90">
            <Send className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-2 text-center">
          Jamito es un asistente virtual. Las recomendaciones son ejemplos para demostración.
        </p>
      </div>
    </div>
  );
};

export default Chat;