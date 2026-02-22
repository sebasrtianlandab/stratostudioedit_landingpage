type PlayIconProps = {
  /** Tamaño del triángulo: sm (overlay móvil), md (VSL pequeño), lg (VSL principal) */
  size?: 'sm' | 'md' | 'lg'
  /** Color del triángulo */
  variant?: 'primary' | 'white'
  className?: string
}

const sizeClasses = {
  sm: 'border-l-[14px] sm:border-l-[16px] border-t-[10px] sm:border-t-[12px] border-b-[10px] sm:border-b-[12px] ml-1',
  md: 'border-l-[14px] sm:border-l-[16px] border-t-[10px] sm:border-t-[12px] border-b-[10px] sm:border-b-[12px] ml-1',
  lg: 'border-l-[16px] sm:border-l-[20px] border-t-[10px] sm:border-t-[12px] border-b-[10px] sm:border-b-[12px] ml-1',
} as const

const variantClasses = {
  primary: 'border-l-primary border-t-transparent border-b-transparent',
  white: 'border-l-white border-t-transparent border-b-transparent',
} as const

export function PlayIcon({
  size = 'md',
  variant = 'primary',
  className = '',
}: PlayIconProps) {
  return (
    <div
      className={`w-0 h-0 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-hidden
    />
  )
}
