import { Logo, InternalLink } from '../ui'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <InternalLink to="home" className="flex items-center gap-3 hover:opacity-90 transition-opacity" aria-label="Ir al inicio">
            <Logo />
            <div>
              <div className="text-white tracking-[0.2em] text-xs sm:text-sm">STRATO</div>
              <div className="text-primary text-[10px] sm:text-xs tracking-[0.15em]">STUDIO</div>
            </div>
          </InternalLink>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <InternalLink to="etapas" className="text-white/60 hover:text-primary text-sm transition-colors">
              Las 5 etapas
            </InternalLink>
            <InternalLink to="servicios" className="text-white/60 hover:text-primary text-sm transition-colors">
              Servicios
            </InternalLink>
            <InternalLink to="niveles" className="text-white/60 hover:text-primary text-sm transition-colors">
              Niveles
            </InternalLink>
          </div>

          <InternalLink
            to="contacto"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-black text-sm font-medium tracking-wide hover:bg-primary/90 transition-all"
          >
            Comenzar
          </InternalLink>
        </div>
      </div>
    </nav>
  )
}
