# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d592c549-677f-4a78-85f9-7b4eff23f82f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d592c549-677f-4a78-85f9-7b4eff23f82f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d592c549-677f-4a78-85f9-7b4eff23f82f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# Jama - Project Brief

## Visión General del Proyecto

**Jama** es una plataforma web inteligente que resuelve el problema cotidiano de "no saber a dónde ir" mediante recomendaciones personalizadas de lugares para trabajar, comer y socializar.

## Problema a Resolver

Las personas enfrentan indecisión al elegir lugares apropiados para diferentes contextos (trabajo, citas, reuniones familiares, etc.), perdiendo tiempo en búsquedas poco efectivas que no consideran sus necesidades específicas del momento.

## Propuesta de Valor

- **Recomendaciones inteligentes**: IA conversacional que entiende contexto y preferencias
- **Búsqueda eficiente**: Filtros avanzados para encontrar lugares específicos rápidamente
- **Experiencia personalizada**: Adaptada a diferentes tipos de salidas y necesidades

## Objetivos del Proyecto

### Objetivo Principal
Crear una plataforma que ayude a las personas a encontrar el lugar ideal según su necesidad del momento, eliminando la fricción en la toma de decisiones.

### Objetivos Específicos
- Implementar un agente conversacional IA que proporcione recomendaciones personalizadas
- Desarrollar un sistema de filtros avanzados para búsquedas precisas
- Crear una experiencia de usuario intuitiva y móvil-first
- Establecer una base escalable para futuras funcionalidades sociales

## Funcionalidades Clave

### 1. Agente Conversacional IA - "Jamito"
- **Descripción**: Chatbot inteligente que comprende necesidades contextuales
- **Capacidades**:
  - Procesamiento de lenguaje natural para entender solicitudes complejas
  - Preguntas de seguimiento para refinar búsquedas
  - Recomendaciones personalizadas basadas en preferencias
  - Interfaz de chat moderna y responsiva

### 2. Sistema de Filtros Avanzados
- **Filtros por contexto**: Trabajo, pareja, amigos, familia
- **Filtros por tipo de comida**: Peruana, italiana, vegetariana, etc.
- **Filtros por ambiente**: Nivel de ruido, wifi, precios, ubicación
- **Filtros por accesibilidad**: Horarios, accesibilidad física, etc.

### 3. Vista de Resultados
- **Formato**: Tarjetas visuales con información clave
- **Contenido**: Foto, descripción, puntuación, enlaces a mapas/redes sociales
- **Interactividad**: Opción de guardar favoritos y ver detalles expandidos

## Arquitectura de la Aplicación

### Estructura de Páginas
1. **Home**: Landing page con CTA para probar el agente IA o usar filtros
2. **Chat**: Interfaz conversacional con Jamito
3. **Búsqueda**: Página con filtros desplegables y resultados
4. **Detalles**: Vista expandida de cada lugar con información completa

### Flujos de Usuario Principales
1. **Flujo IA**: Home → Chat → Resultados → Detalles
2. **Flujo Filtros**: Home → Búsqueda → Resultados → Detalles
3. **Flujo Favoritos**: Cualquier página → Guardar → Lista de favoritos

## Requisitos Técnicos

### Frontend
- **Framework**: React/Next.js (recomendado para SEO y performance)
- **Styling**: Tailwind CSS para diseño consistente y responsivo
- **UI Components**: Componentes reutilizables para chat, filtros y tarjetas

### Backend
- **API**: RESTful API para gestión de lugares y preferencias
- **IA**: Integración con LLM para el agente conversacional
- **Base de datos**: Sistema para almacenar lugares, usuarios y favoritos

### Diseño
- **Principios**: Minimalista, limpio, moderno
- **Responsive**: Mobile-first approach
- **Accesibilidad**: Cumplimiento de estándares WCAG

## Criterios de Éxito

### Métricas de Producto
- Tiempo promedio para encontrar un lugar recomendado < 2 minutos
- Tasa de satisfacción con recomendaciones > 80%
- Uso del agente IA vs filtros: 60/40 ideal

### Métricas Técnicas
- Tiempo de carga inicial < 3 segundos
- Responsive design funcional en todos los dispositivos
- Disponibilidad del servicio > 99%

## Alcance del MVP

### Incluido en V1
- Agente conversacional básico con recomendaciones
- Sistema de filtros completo
- Vista de resultados en tarjetas
- Funcionalidad de favoritos
- Diseño responsive

### Fuera del Alcance Inicial
- Sistema de reseñas de usuarios
- Integración con sistemas de reservas
- Funcionalidades sociales (compartir, comentarios)
- Monetización (anuncios, partnerships)
- Geolocalización avanzada

## Consideraciones Futuras

### Escalabilidad
- Arquitectura preparada para crecimiento de usuarios
- Sistema de base de datos escalable
- Integración con APIs de terceros (Google Maps, redes sociales)

### Funcionalidades Futuras
- Sistema de reseñas y ratings de usuarios
- Personalización avanzada basada en historial
- Integración con calendarios y sistemas de reservas
- Funcionalidades sociales y de comunidad

## Definición de Terminado

Una funcionalidad se considera terminada cuando:
- Cumple con todos los requisitos funcionales especificados
- Pasa todas las pruebas de calidad (funcionales, responsive, accesibilidad)
- Está documentada para desarrolladores
- Ha sido probada por usuarios reales con feedback positivo


---

*Este documento es la fuente de verdad para el proyecto Jama y debe ser actualizado cuando el alcance o los requisitos cambien.*