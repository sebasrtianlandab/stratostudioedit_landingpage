import { Section, SectionBadge, ScrollReveal } from '../ui'

const PROBLEMS = [
  {
    title: 'Contenido inconsistente',
    description:
      'Publicación reactiva sin dirección estratégica. Cada pieza es aislada, no construye sobre la anterior.',
  },
  {
    title: 'Edición amateur',
    description: 'Transiciones genéricas, ritmo predecible. La técnica no está al servicio del mensaje.',
  },
  {
    title: 'Ausencia de criterio',
    description:
      'Se replica estética sin entender contexto. La forma no comunica autoridad ni posicionamiento.',
  },
]

export function Problem() {
  return (
    <Section width="full" className="overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-alt/20 to-background" />

      <ScrollReveal className="relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <SectionBadge>EL PROBLEMA</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight">
            La mayoría publica contenido.
            <br />
            <span className="text-primary">Pocos construyen percepción.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROBLEMS.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-surface border border-primary/10 p-6 sm:p-8 hover:border-primary/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-bl from-primary/10 to-transparent" />
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-sm">0{index + 1}</span>
                </div>
                <div className="h-px flex-1 bg-primary/20" />
              </div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">{problem.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{problem.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}
