# Contenido y datos

Cómo cambiar textos, niveles, videos y planes sin tocar lógica de componentes.

## Textos y CTAs

- **Hero:** Título, subtítulo y texto del CTA están en `sections/Hero.tsx`.
- **VSLSection:** Título, descripción y texto del botón en `sections/VSLSection.tsx`. Si hay video, la URL se configura en `lib/videos.ts` (`VSL_VIDEO_SRC`, `VSL_VIDEO_POSTER`).
- **FinalCTA:** Párrafo, texto del botón y subtítulo del pie en `sections/FinalCTA.tsx`.
- **Differentiator:** Párrafos en `sections/Differentiator.tsx`.

## Niveles de intervención

En `sections/InterventionLevels.tsx` está el array `LEVELS`. Cada ítem tiene:

- `name`: nombre del nivel (Ej. Esencial, Estratégico, Profesional).
- `subtitle`: subtítulo de la card.
- `features`: array de strings (lista con BulletList).
- `featured`: si es el plan “recomendado” (badge y estilos).

El orden en el array es el orden en pantalla. Los nombres deben coincidir con las keys de `EJEMPLOS_VIDEOS` en `lib/videos.ts` si la sección VideoExamples muestra ejemplos por nivel.

## Videos de ejemplos (antes/después)

En `src/app/lib/videos.ts`:

- **VSL:**  
  - `VSL_VIDEO_SRC`: ruta desde `public/` (ej. `'/videos/vsl.mp4'`). Vacío = placeholder.  
  - `VSL_VIDEO_POSTER`: opcional.

- **Ejemplos por nivel:**  
  `EJEMPLOS_VIDEOS` es un objeto cuya key es el nombre del nivel (ej. `Esencial`, `Profesional`, `Estratégico`). Cada valor tiene:
  - `before`: ruta del video “antes” (desde `public/`).
  - `after`: ruta del video “después”.

Los archivos deben estar en `public/videos/` (por ejemplo `public/videos/ejemplos/esencial-antes.mp4`). Si una ruta está vacía, la sección muestra el placeholder.

## Paquetes mensuales

En `sections/MonthlyPackages.tsx`:

- **PACKAGES:** objeto con keys `'12'` y `'16'`. Cada key es un array de planes con `level`, `price` (string), `reels`, `featured`.
- **INFO_ITEMS:** array de strings que se muestran debajo de las cards con `BulletList` (spacing tight, texto pequeño).

El estado por defecto del toggle (12 vs 16 reels) es `'12'` en el `useState` del componente.

## Sistema de producción

Los pasos del sistema están en `sections/ProductionSystem.tsx` en el array `STEPS` (número, título, descripción). Modificar ahí para cambiar orden o textos.

## Problemas (Problem)

Los ítems de la sección “problema” están definidos en `sections/Problem.tsx` (títulos y descripciones de cada card).

---

En resumen: textos y listas en el archivo de la sección; URLs de video en `lib/videos.ts`; archivos de video en `public/videos/`.
