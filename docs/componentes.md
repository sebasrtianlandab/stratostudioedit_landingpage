# Componentes

## UI (`src/app/components/ui/`)

Componentes reutilizables. Importar desde `../ui` (o desde el barrel `components/ui`).

### Layout y estructura

| Componente | Uso | Props principales |
|------------|-----|-------------------|
| **Section** | Contenedor de cada bloque de la landing. Maneja ancho y fondo. | `id`, `width` ('default' \| 'full'), `className` |
| **SectionHeader** | Encabezado estándar: badge + título + descripción opcional. | `badge`, `title`, `description?`, `spacing?` ('default' \| 'tight'), `className` |
| **ScrollReveal** | Envuelve contenido que debe aparecer al entrar en viewport. | `staggerChildren?`, `className`; hijos opcionalmente con clase `stagger-item` |

### Navegación y enlaces

| Componente | Uso | Props principales |
|------------|-----|-------------------|
| **InternalLink** | Enlace interno que hace scroll al section (pushState + scrollTo). | `to` (key de PATHS), `className`, `aria-label` recomendado |
| **CTAButton** | Botón CTA con estilo primario. | `to`, `children`, `className` |

### Cards y bloques

| Componente | Uso | Props principales |
|------------|-----|-------------------|
| **SurfaceCard** | Card con fondo surface, borde y hover. Opcional línea superior en gradiente y variante “destacada”. | `children`, `featured?`, `gradientTop?`, `padding?` ('default' \| 'large'), `className` |
| **SectionBadge** | Etiqueta pequeña sobre el título (ej. “EDICIÓN ESTRATÉGICA”). | `children` |
| **FeaturedBadge** | Badge “RECOMENDADO” para cards destacadas. | `children`, `className` |

### Listas y controles

| Componente | Uso | Props principales |
|------------|-----|-------------------|
| **BulletList** | Lista con viñeta (punto primary). | `items` (string o ReactNode[]), `spacing?` ('default' \| 'tight'), `className`, `itemClassName` |
| **SegmentedControl** | Toggle entre opciones (ej. 12/16 reels, PEN/USD). | `options`, `value`, `onChange`, `ariaLabel`, `className` |

### Medios y visual

| Componente | Uso | Props principales |
|------------|-----|-------------------|
| **PlayIcon** | Icono de play (triángulo). | `size?` ('sm' \| 'md' \| 'lg'), `variant?` ('primary' \| 'white'), `className` |
| **PhoneFrame** | Marco de móvil (borde, notch, botones laterales). El contenido (video, placeholder) va como `children`. | `children`, `glow?`, `className` |
| **Logo** | Logo Strato (usado en nav). | — |

---

## Secciones (`src/app/components/sections/`)

Cada archivo exporta una función con el nombre de la sección. Orden en la página (en `App.tsx`):

1. Navigation  
2. Hero  
3. VSLSection  
4. Problem  
5. ProductionSystem  
6. VideoExamples  
7. InterventionLevels  
8. MonthlyPackages  
9. Differentiator  
10. FinalCTA  

- **Hero:** Badge + título + subtítulo + CTA.  
- **VSLSection:** Video (o placeholder) + CTA.  
- **Problem:** Listado de problemas con SurfaceCard.  
- **ProductionSystem:** Pasos del sistema (SurfaceCard por paso).  
- **VideoExamples:** Antes/después por nivel; usa PhoneFrame, videos desde `lib/videos.ts`.  
- **InterventionLevels:** Niveles Esencial / Estratégico / Profesional con SurfaceCard y BulletList.  
- **MonthlyPackages:** Toggle 12/16 reels, cards de precios, BulletList de info.  
- **Differentiator:** Texto de propuesta de valor.  
- **FinalCTA:** CTA final + pie.

Al crear una sección nueva: usar `Section` con `id` alineado a `routes.ts`, y reutilizar `SectionHeader`, `SurfaceCard`, `ScrollReveal`, etc.
