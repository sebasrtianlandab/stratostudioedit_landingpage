import type { ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type ScrollRevealProps = {
  children: ReactNode
  /** Si true, los hijos con clase stagger-item aparecen en cascada */
  staggerChildren?: boolean
  className?: string
}

export function ScrollReveal({ children, staggerChildren = false, className = '' }: ScrollRevealProps) {
  const ref = useScrollReveal(0.12)

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${staggerChildren ? 'stagger-children' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
