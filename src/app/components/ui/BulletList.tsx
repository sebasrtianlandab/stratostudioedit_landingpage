import type { ReactNode } from 'react'

type BulletListProps = {
  items: (string | ReactNode)[]
  /** Espaciado entre ítems: default (listas de features) o tight (cajas de info) */
  spacing?: 'default' | 'tight'
  /** Clase del contenedor (ul) */
  className?: string
  /** Clase del texto de cada ítem */
  itemClassName?: string
}

const spacingClass = {
  default: 'space-y-3 sm:space-y-4',
  tight: 'space-y-2',
} as const

export function BulletList({
  items,
  spacing = 'default',
  className = '',
  itemClassName = 'text-white/60 text-sm leading-relaxed',
}: BulletListProps) {
  return (
    <ul className={`${spacingClass[spacing]} ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div
            className="w-1.5 h-1.5 bg-primary mt-2 shrink-0 rounded-full"
            aria-hidden
          />
          {typeof item === 'string' ? (
            <span className={itemClassName}>{item}</span>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  )
}
