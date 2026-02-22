import type { ReactNode } from 'react'

type PhoneFrameProps = {
  children: ReactNode
  /** Glow detrás del frame (ej. para variante "después") */
  glow?: boolean
  className?: string
}

export function PhoneFrame({ children, glow = false, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" aria-hidden />
      )}
      <div className="relative w-[260px] sm:w-[280px] h-[520px] sm:h-[560px] bg-black rounded-[42px] sm:rounded-[50px] border-[12px] sm:border-[14px] border-surface shadow-2xl">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] sm:w-[140px] h-[24px] sm:h-[30px] bg-surface rounded-b-2xl sm:rounded-b-3xl z-10"
          aria-hidden
        />
        <div className="absolute inset-[3px] sm:inset-[4px] bg-gradient-to-br from-surface-alt to-background rounded-[30px] sm:rounded-[36px] overflow-hidden">
          {children}
        </div>
        <div
          className="absolute -right-[2px] top-[100px] sm:top-[120px] w-[3px] h-[50px] sm:h-[60px] bg-surface rounded-r"
          aria-hidden
        />
        <div
          className="absolute -right-[2px] top-[180px] sm:top-[200px] w-[3px] h-[50px] sm:h-[60px] bg-surface rounded-r"
          aria-hidden
        />
      </div>
    </div>
  )
}
