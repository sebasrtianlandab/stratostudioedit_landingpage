import { Section, CTAButton, ScrollReveal } from '../ui'

export function VSLSection() {
  return (
    <Section spacing="tight" width="default">
      <ScrollReveal>
      <div>
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 border-primary" />
          <div className="absolute -top-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-t-2 border-primary" />
          <div className="absolute -bottom-4 -left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-b-2 border-primary" />
          <div className="absolute -bottom-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 border-primary" />

          <div className="relative aspect-video bg-gradient-to-br from-surface-alt to-background border border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <button type="button" className="group/play relative w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6" aria-label="Reproducir video">
                <div className="absolute inset-0 bg-primary rounded-full transition-transform group-hover/play:scale-110" />
                <div className="absolute inset-2 bg-background rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[14px] sm:border-l-[16px] border-l-primary border-t-[10px] sm:border-t-[12px] border-t-transparent border-b-[10px] sm:border-b-[12px] border-b-transparent ml-1" />
                </div>
              </button>
              <h3 className="text-white text-xl sm:text-2xl mb-1 sm:mb-2">Descubre el Sistema Strato</h3>
              <p className="text-white/40 text-xs sm:text-sm">3 minutos que cambiarán tu estrategia de contenido</p>
            </div>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 sm:px-3 py-1 bg-black/60 backdrop-blur-sm border border-primary/30">
              <span className="text-primary text-xs tracking-wider">3:24</span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-surface-alt/50 border border-primary/10">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-1 h-1 bg-primary flex-shrink-0" />
              <span className="text-white/60 text-xs sm:text-sm">Por qué el contenido reactivo no construye autoridad</span>
            </div>
            <button type="button" className="text-primary text-xs sm:text-sm hover:underline flex-shrink-0">
              Ver transcripción →
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <CTAButton to="niveles" variant="primary">
            Ver Planes Mensuales
          </CTAButton>
        </div>
      </div>
      </ScrollReveal>
    </Section>
  )
}
