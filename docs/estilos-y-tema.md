# Estilos y tema

## Variables CSS (`src/styles/theme.css`)

En `:root` se definen:

| Variable | Uso |
|----------|-----|
| `--font-size` | Tamaño base (ej. 16px). |
| `--background` | Fondo general (#0A0A0A). |
| `--foreground` | Texto principal. |
| `--primary` | Color principal (#ff914d). |
| `--primary-dark` | Acento (#ff3131). |
| `--muted` | Texto secundario. |
| `--border` | Bordes sutiles. |

Tailwind está configurado para usar estas variables (p. ej. `bg-background`, `text-primary`, `border-primary/10`). No hardcodear hex en componentes; usar clases que referencien el tema.

## Clases globales en `theme.css`

- **`.bg-grid-pattern`** + **`.bg-grid-pattern-30|40|50|60`**  
  Patrón de cuadrícula con primary. Se usan en secciones de fondo.

- **`.text-gradient-primary`**  
  Texto con gradiente primary → primary-dark. Para títulos y CTAs que llevan ese efecto.

- **Scroll reveal**  
  - Contenedor: `.scroll-reveal` (opcional `.stagger-children`).  
  - Hijos en cascada: `.stagger-item`.  
  La lógica de intersección está en `useScrollReveal`; al entrar en viewport se añade `.reveal-in`.

Se respeta `prefers-reduced-motion`: las animaciones de scroll se reducen.

## Tailwind

- El proyecto usa sintaxis Tailwind v3 (p. ej. `bg-gradient-to-br`). Si el linter sugiere v4 (`bg-linear-to-br`), se puede ignorar para mantener consistencia.
- Preferir utilidades que usen el tema: `bg-background`, `text-primary`, `border-primary/10`, `bg-surface`, etc., en lugar de colores arbitrarios.
