# Arquitectura

## Estructura del proyecto

```
src/
├── app/
│   ├── App.tsx              # Orquestación: orden de secciones y efecto de ruta al cargar
│   ├── components/
│   │   ├── ui/              # Primitivos reutilizables (Section, ScrollReveal, SurfaceCard, etc.)
│   │   │   └── index.ts     # Export único de UI
│   │   └── sections/        # Secciones de la landing (Hero, VSLSection, Problem, etc.)
│   │       └── index.ts     # Export único de sections
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   └── lib/
│       ├── routes.ts        # PATHS y pathToSectionId
│       └── videos.ts        # URLs de videos (VSL, ejemplos por nivel)
├── styles/
│   ├── theme.css            # Variables CSS, grid, scroll-reveal, utilidades
│   ├── tailwind.css
│   ├── fonts.css
│   └── index.css
└── main.tsx
```

## Rutas y navegación

- **Definición:** `src/app/lib/routes.ts`
  - `PATHS`: rutas internas sin `#` (home, sistema, ejemplos, niveles, planes, contacto).
  - `pathToSectionId(pathname)`: convierte el pathname al `id` del `<section>` para hacer scroll.

- **Navegación:** Los enlaces usan `InternalLink` + `scrollToPath`, que hace `pushState` y `scrollTo` al section con el `id` correspondiente.

- **Orden de secciones en la página:** Definido en `App.tsx`. El orden debe coincidir con la lógica de rutas (home = inicio, luego sistema, ejemplos, niveles, planes, contacto).

## Convenciones

1. **IDs de sección:** Cada sección visible en la navegación debe tener un `id` que coincida con la ruta (ej. `id="planes"` para `/planes`).
2. **Imports:** Las secciones importan desde `../ui`; no importar componentes de otras secciones.
3. **Datos:** Listas estáticas (niveles, paquetes, pasos) pueden vivir en el mismo archivo de la sección o en `lib/` si se comparten o son grandes.
