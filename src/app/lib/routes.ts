/** Paths para la landing (sin #). El path "" o "/" es inicio. */
export const PATHS = {
  home: '/',
  sistema: '/sistema',
  ejemplos: '/ejemplos',
  niveles: '/niveles',
  planes: '/planes',
  contacto: '/contacto',
} as const

/** pathname (ej. "/sistema") -> id del section (ej. "sistema") */
export function pathToSectionId(pathname: string): string | null {
  const p = pathname.replace(/^\/+|\/+$/g, '') || 'home'
  if (p === 'home') return null
  return p
}
