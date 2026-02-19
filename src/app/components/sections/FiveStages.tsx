import { Section, SectionBadge, ScrollReveal } from '../ui'

const STAGES = [
  {
    number: '01',
    title: 'Estratégica',
    description: 'Definición de objetivos, audiencia y posicionamiento. La base que guía todo el contenido y la producción.',
  },
  {
    number: '02',
    title: 'Producción estructurada',
    description: 'Creación de contenido con criterio: guiones, planificación y producción visual alineada a la estrategia.',
  },
  {
    number: '03',
    title: 'Postproducción',
    description: 'Edición y acabado que comunica posicionamiento. Cada corte y transición con intención.',
  },
  {
    number: '04',
    title: 'Distribución inteligente',
    description: 'Publicación en los canales adecuados, en el momento adecuado. Contenido que llega a quien importa.',
  },
  {
    number: '05',
    title: 'Optimización continua',
    description: 'Análisis de métricas, ajustes y mejora constante del contenido para maximizar impacto.',
  },
]

export function FiveStages() {
  return (
    <Section id="etapas" width="full">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-60 pointer-events-none" />

      <ScrollReveal staggerChildren className="relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <SectionBadge>CÓMO TRABAJAMOS</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight">
            Las 5 etapas
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              de tu contenido
            </span>
          </h2>
          <p className="text-white/40 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            De la estrategia a la optimización continua. Un flujo estructurado para construir percepción, no solo publicar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {STAGES.map((stage, index) => (
            <div key={stage.number} className="stagger-item relative group">
              <div className="bg-surface border border-primary/10 p-6 sm:p-8 h-full hover:border-primary/30 transition-all">
                <div className="relative inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-dark mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl font-semibold text-black">{stage.number}</span>
                </div>
                <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3">{stage.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{stage.description}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {index < STAGES.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-12 -right-4 text-primary/30 text-2xl z-10">→</div>
              )}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}
