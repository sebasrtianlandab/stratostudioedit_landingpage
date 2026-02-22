# Videos de la landing

Las rutas se configuran en `src/app/lib/videos.ts`.

## Estructura actual

- **Ejemplos por nivel** (`ejemplos/`): ya están los videos copiados desde `modelado/Videos por nivel/`:
  - `esencial-antes.mp4` / `esencial-despues.mp4`
  - `profesional-antes.mp4` / `profesional-despues.mp4`
  - `estrategico-antes.mp4` / `estrategico-despues.mp4`

- **Video VSL (sección principal):** opcional. Si lo añades:
  - `vsl.mp4` — Video de "Descubre el Sistema Strato"
  - `vsl-poster.jpg` (opcional) — Miniatura antes de reproducir  
  Y en `videos.ts` asigna `VSL_VIDEO_SRC = '/videos/vsl.mp4'`.

Formatos recomendados: **MP4 (H.264)** para buena compatibilidad en navegadores.
