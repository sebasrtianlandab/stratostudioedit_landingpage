import type { ReactNode } from 'react'
import { PATHS, pathToSectionId } from '../../lib/routes'

type InternalLinkProps = {
  to: keyof typeof PATHS
  children: ReactNode
  className?: string
  /** Si true, abre en nueva pestaña (no aplica para rutas internas) */
  external?: boolean
}

function scrollToSection(id: string | null) {
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function InternalLink({ to, children, className = '', external }: InternalLinkProps) {
  const path = PATHS[to]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (external) return
    e.preventDefault()
    window.history.pushState(null, '', path)
    const id = pathToSectionId(path)
    scrollToSection(id)
  }

  return (
    <a href={path} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

/** Para uso fuera de React (ej. scroll al cargar o al usar atrás/adelante) */
export function scrollToPath(pathname: string) {
  const id = pathToSectionId(pathname)
  scrollToSection(id)
}
