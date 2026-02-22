import type { ReactNode } from 'react'

type SectionHeaderProps = {
  badge: ReactNode
  title: ReactNode
  description?: ReactNode
  /** Margen inferior: default (mb-12 sm:mb-20) o tight (mb-12 sm:mb-16) */
  spacing?: 'default' | 'tight'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  spacing = 'default',
  className = '',
}: SectionHeaderProps) {
  const marginClass = spacing === 'tight' ? 'mb-12 sm:mb-16' : 'mb-12 sm:mb-20'

  return (
    <div className={`text-center ${marginClass} ${className}`}>
      {badge}
      <div className="mt-4 sm:mt-6">{title}</div>
      {description != null && (
        <p className="text-white/40 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
