import { Section, Logo, CTAButton, ScrollReveal } from '../ui'

export function FinalCTA() {
  return (
    <Section id="contacto" center>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <ScrollReveal className="text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight">
          Eleva tu percepción digital.
        </h2>

        <p className="text-lg sm:text-xl text-white/40 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Sistema mensual de producción para creadores y marcas que entienden que el contenido estratégico no se improvisa.
        </p>

        <CTAButton href="https://wa.me/51936160476" variant="primary" external>
          Solicitar Producción Mensual
        </CTAButton>

        <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <Logo />
              <div className="text-left">
                <div className="text-white text-sm tracking-[0.2em]">STRATO STUDIO</div>
                <div className="text-white/40 text-xs">Edición estratégica de contenido corto</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm relative z-10">
              <a href="https://www.tiktok.com/@strato_studio" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors cursor-pointer">
                TikTok
              </a>
              <a href="https://www.instagram.com/_stratostudio/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors cursor-pointer">
                Instagram
              </a>
              <a href="https://youtube.com/@strato_studio?si=QfVGmoxIriI0ysV2" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors cursor-pointer">
                YouTube
              </a>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 text-white/30 text-xs">
            © {new Date().getFullYear()} Strato Studio. Sistema estructurado de producción.
          </div>
        </div>
      </ScrollReveal>

      <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 border-l border-b border-primary/10 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 border-r border-b border-primary/10 pointer-events-none" aria-hidden />
    </Section>
  )
}
