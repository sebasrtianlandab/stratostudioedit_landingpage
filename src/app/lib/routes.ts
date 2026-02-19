/** Paths para la landing (sin #). El path "" o "/" es inicio. */
export const PATHS = {
  home: '/',
  etapas: '/etapas',
  servicios: '/servicios',
  niveles: '/niveles',
  contacto: '/contacto',
} as const

/** pathname (ej. "/etapas") -> id del section (ej. "etapas") */
export function pathToSectionId(pathname: string): string | null {
  const p = pathname.replace(/^\/+|\/+$/g, '') || 'home'
  if (p === 'home') return null
  return p
}
