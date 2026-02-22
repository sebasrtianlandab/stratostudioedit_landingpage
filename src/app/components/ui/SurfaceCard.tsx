import type { ReactNode } from 'react'

type SurfaceCardProps = {
  children: ReactNode
  /** Borde más destacado (primary/40) */
  featured?: boolean
  /** Línea en gradiente en el borde superior */
  gradientTop?: boolean
  /** Padding: default (p-6 sm:p-8) o large (p-6 sm:p-10) */
  padding?: 'default' | 'large'
  className?: string
}

const paddingClass = { default: 'p-6 sm:p-8', large: 'p-6 sm:p-10' } as const

export function SurfaceCard({
  children,
  featured = false,
  gradientTop = false,
  padding = 'default',
  className = '',
}: SurfaceCardProps) {
  return (
    <div
      className={`relative bg-surface border ${
        featured ? 'border-primary/40' : 'border-primary/10'
      } ${paddingClass[padding]} h-full hover:border-primary/40 transition-all ${className}`}
    >
      {gradientTop && (
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark"
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
