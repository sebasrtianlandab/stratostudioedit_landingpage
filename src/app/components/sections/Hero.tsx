import { SectionBadge, ScrollReveal } from '../ui'

export function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[100px] sm:blur-[120px]" />

      <ScrollReveal className="max-w-4xl mx-auto text-center relative z-10">
        <SectionBadge pulse>EDICIÓN ESTRATÉGICA</SectionBadge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight">
          La edición no es estética.
          <br />
          <span className="text-gradient-primary">
            Es percepción estratégica.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
          Sistema estructurado de producción para creadores y marcas que buscan elevar su posicionamiento digital.
        </p>
      </ScrollReveal>
    </section>
  )
}
