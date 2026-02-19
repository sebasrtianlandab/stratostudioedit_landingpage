import type { ReactNode } from 'react'
import { PATHS } from '../../lib/routes'
import { InternalLink } from './InternalLink'

type CTAButtonProps = {
  /** Enlace externo (URL completa) */
  href?: string
  /** Ruta interna (usa InternalLink, no recarga la página) */
  to?: keyof typeof PATHS
  children: ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export function CTAButton({
  href = '#',
  to,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: CTAButtonProps) {
  const base =
    'inline-block font-medium tracking-wide transition-all whitespace-nowrap'
  const variants = {
    primary:
      'px-12 sm:px-16 py-5 sm:py-6 bg-gradient-to-r from-primary to-primary-dark text-black hover:opacity-90 shadow-[0_0_40px_rgba(255,145,77,0.2)] hover:shadow-[0_0_60px_rgba(255,145,77,0.3)] text-base sm:text-lg',
    secondary:
      'px-6 sm:px-8 py-3 sm:py-4 bg-primary text-black text-sm hover:bg-primary/90',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to != null) {
    return (
      <InternalLink to={to} className={classes}>
        {children}
      </InternalLink>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={classes}
    >
      {children}
    </a>
  )
}
