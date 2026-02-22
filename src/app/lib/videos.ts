/**
 * URLs de videos de la landing.
 * Coloca los archivos en public/videos/ y referencia aquí como "/videos/nombre.mp4".
 * Si dejas un valor vacío, se mostrará el placeholder (sin video).
 */

/** Video principal del VSL. Ruta desde public/: ej. "/videos/vsl.mp4". Vacío = placeholder. */
export const VSL_VIDEO_SRC = ''

/** Poster del VSL (opcional). Ej. "/videos/vsl-poster.jpg" */
export const VSL_VIDEO_POSTER = ''

/**
 * Videos antes/después por nivel. Rutas desde public/.
 * Pon las URLs cuando tengas los archivos; si están vacías se muestra placeholder.
 */
export const EJEMPLOS_VIDEOS: Record<
  string,
  { before?: string; after?: string }
> = {
  Esencial: {
    before: '/videos/ejemplos/esencial-antes.mp4',
    after: '/videos/ejemplos/esencial-despues.mp4',
  },
  Profesional: {
    before: '/videos/ejemplos/profesional-antes.mp4',
    after: '/videos/ejemplos/profesional-despues.mp4',
  },
  Estratégico: {
    before: '/videos/ejemplos/estrategico-antes.mp4',
    after: '/videos/ejemplos/estrategico-despues.mp4',
  },
}
