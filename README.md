# 🚀 FarchoDevDocs - Plataforma Educativa SENA

![FarchoDevDocs](https://img.shields.io/badge/Next.js-15.2.3-black) ![React](https://img.shields.io/badge/React-19.0.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.0.5-teal)

Una plataforma educativa moderna y profesional diseñada para estudiantes del SENA, especializada en desarrollo de software con contenido estructurado, navegación intuitiva y experiencia de usuario excepcional.

## ✨ Características Principales

- 🎨 **Diseño Moderno**: Landing page profesional similar a Vercel Docs y Stripe Docs
- 📱 **Responsive Design**: Experiencia optimizada en móviles, tablets y desktop
- 🔍 **Búsqueda Avanzada**: Sistema de búsqueda inteligente con Fuse.js (preparado)
- 📚 **Contenido Organizado**: Categorías claras - Cursos, ADS-SENA, Formación Complementaria
- ⚡ **Performance Optimizada**: Next.js 15 con App Router y Tailwind CSS 4
- 🌙 **Dark Mode**: Soporte completo para tema oscuro
- ♿ **Accesible**: Cumple estándares WCAG AA
- 📊 **Analytics Ready**: Preparado para Google Analytics y tracking avanzado

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

```json
{
  "framework": "Next.js 15.2.3",
  "react": "19.0.0",
  "typescript": "5.7.3",
  "styling": "Tailwind CSS 4.0.5",
  "ui": "Fumadocs UI 15.0.6",
  "animations": "Framer Motion 12.5.0",
  "icons": "Lucide React",
  "search": "Fuse.js"
}
```

### Estructura del Proyecto

```
/app
├── components/
│   ├── ui/              # Componentes base (Button, Card)
│   ├── sections/        # Secciones de homepage (Hero, Categories, Featured)
│   ├── search/          # Sistema de búsqueda avanzada
│   └── navigation/      # Navegación mejorada con animaciones
├── data/               # Gestión de datos estructurada
├── lib/               # Utilidades y helpers
└── docs/             # Contenido de documentación (Fumadocs)
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/FarchoDev/FarchoDevDocs.git

# Navegar al directorio
cd FarchoDevDocs

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📖 Contenido Disponible

### 🎓 Cursos Especializados (3 recursos)
- **Git**: Control de versiones desde básico hasta avanzado
- **GitHub**: Colaboración y flujos de trabajo
- **Conventional Commits**: Estándares de commits profesionales

### 💻 Análisis y Desarrollo de Software - SENA (8 recursos)
- Sistemas operativos de red
- Redes y networking  
- Paradigma orientado a objetos
- Contenedores y Docker
- Virtualización
- Fundamentos de calidad del software
- Aplicación de pruebas de software
- Documentación y entrega

### 📚 Formación Complementaria (2 recursos)
- Automatización de procesos para eficiencia organizacional
- Shift Left Testing en desarrollo ágil

## 🎨 Sistema de Diseño

### Componentes UI Principales

- **Button**: Sistema de botones con variantes (primary, secondary, outline, ghost)
- **Card**: Componentes de tarjetas modulares con animaciones
- **SearchBar**: Búsqueda avanzada con autocompletado
- **HeroSection**: Sección principal con gradientes y CTAs
- **CategorySection**: Organización visual de contenido por categorías

### Paleta de Colores

```css
/* Gradientes Principales */
--hero-gradient: linear-gradient(to-br, from-blue-50, via-white, to-indigo-50)
--primary-gradient: linear-gradient(to-r, from-blue-600, to-indigo-600)

/* Categorías */
--courses: linear-gradient(to-r, from-blue-500, to-cyan-500)
--ads-sena: linear-gradient(to-r, from-green-500, to-emerald-500)
--complementary: linear-gradient(to-r, from-purple-500, to-pink-500)
```

## 🔧 Scripts Disponibles

```bash
npm run dev         # Servidor de desarrollo
npm run build       # Build para producción  
npm start          # Servidor de producción
npm run lint       # Linting con ESLint
npm run type-check # Verificación de tipos TypeScript
```

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **Touch Friendly**: Botones y enlaces optimizados para touch
- **Performance**: Imágenes optimizadas y lazy loading

## 🔍 Funcionalidades de Búsqueda

### Implementada
- Input de búsqueda estilizado
- Navegación por teclado
- Resultados categorizados

### En Desarrollo
- Búsqueda fuzzy con Fuse.js
- Filtros por categoría
- Historial de búsquedas
- Sugerencias inteligentes

## 🚀 Roadmap

### Fase 1: Rediseño ✅
- [x] Landing page moderna
- [x] Arquitectura de componentes
- [x] Responsive design completo
- [x] Dark mode support

### Fase 2: Funcionalidades Avanzadas
- [ ] Búsqueda avanzada completa
- [ ] Sistema de filtros
- [ ] Favoritos con persistencia
- [ ] Analytics y tracking

### Fase 3: Experiencia Premium
- [ ] Progressive Web App (PWA)
- [ ] Offline support
- [ ] Push notifications
- [ ] Personalización de dashboard

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado para LCP, FID, CLS
- **Bundle Size**: Optimizado con code splitting
- **Loading Speed**: < 2s en conexiones 3G

## 🔒 Seguridad

- Headers de seguridad configurados
- Sanitización de inputs
- Rate limiting implementado
- HTTPS enforcement

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo

- **Desarrollo**: FarchoDev
- **Diseño UX/UI**: Rediseño profesional implementado
- **Contenido**: Currículo SENA estructurado

## 📞 Soporte

¿Tienes preguntas o necesitas ayuda?

- 📧 Email: [Contacto](./contact)
- 📖 Documentación: [Ver documentación técnica](./DOCUMENTACION_TECNICA.md)
- 🐛 Issues: [GitHub Issues](https://github.com/FarchoDev/FarchoDevDocs/issues)

---

**⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub**

*Desarrollado con ❤️ para la comunidad educativa del SENA*
