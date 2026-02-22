type FeaturedBadgeProps = {
  children?: React.ReactNode
  className?: string
}

const DEFAULT_LABEL = 'RECOMENDADO'

export function FeaturedBadge({ children = DEFAULT_LABEL, className = '' }: FeaturedBadgeProps) {
  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20" role="status">
      <div
        className={`bg-primary text-black text-xs tracking-wider px-4 sm:px-6 py-2 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}
