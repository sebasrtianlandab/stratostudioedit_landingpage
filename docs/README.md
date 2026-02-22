# Documentación — Strato Landing (Edición)

Documentación del proyecto, organizada por tema. Sirve como referencia para el equipo y para mantener la arquitectura consistente.

## Índice

| Documento | Descripción |
|-----------|-------------|
| [Arquitectura](./arquitectura.md) | Estructura del proyecto, rutas, convenciones y flujo de navegación |
| [Componentes](./componentes.md) | Componentes UI y de sección: cuándo usar cada uno y props |
| [Estilos y tema](./estilos-y-tema.md) | Tokens de diseño, `theme.css`, Tailwind y clases globales |
| [Contenido y datos](./contenido-y-datos.md) | Cómo cambiar textos, niveles, videos, planes y CTAs |

## Convención

- Los componentes reutilizables viven en `src/app/components/ui/` y se exportan desde `ui/index.ts`.
- Las secciones de página viven en `src/app/components/sections/` y se exportan desde `sections/index.ts`.
- Al añadir algo nuevo, reutiliza componentes existentes y documenta aquí si introduces un patrón nuevo.
