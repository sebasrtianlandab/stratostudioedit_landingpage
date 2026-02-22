import { Section, SectionBadge, ScrollReveal, SectionHeader, SurfaceCard } from '../ui'

const STEPS = [
  {
    number: '01',
    title: 'Recepción de material',
    description:
      'El cliente envía el material crudo en video correspondiente a la semana de trabajo. El material debe estar organizado y listo para edición.',
  },
  {
    number: '02',
    title: 'Edición según nivel contratado',
    description:
      'Se realiza el tratamiento técnico y narrativo en función del plan elegido. Esto incluye intervención visual, ajustes de ritmo, correcciones técnicas y recursos estratégicos definidos en el nivel contratado.',
  },
  {
    number: '03',
    title: 'Entrega semanal organizada',
    description:
      'Los reels editados se entregan al finalizar cada semana de producción, respetando el flujo establecido.',
  },
  {
    number: '04',
    title: 'Flujo paralelo de trabajo',
    description:
      'Mientras se entregan los reels correspondientes a la semana actual, el cliente prepara y envía el material crudo de la siguiente semana. Esto permite continuidad sin interrupciones.',
  },
]

export function ProductionSystem() {
  return (
    <Section id="sistema" width="full">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-60 pointer-events-none" />

      <ScrollReveal staggerChildren className="relative z-10">
        <SectionHeader
          badge={<SectionBadge>MODELO DE TRABAJO</SectionBadge>}
          title={<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight">Sistema de Producción</h2>}
          description="Estructura mensual diseñada para consistencia estratégica."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STEPS.map((step, index) => (
            <div key={step.number} className="stagger-item relative group">
              <SurfaceCard>
                <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-dark mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl font-semibold text-black">{step.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{step.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </SurfaceCard>
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 text-primary/30 text-2xl z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}
