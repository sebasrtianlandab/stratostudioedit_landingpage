import { Section, ScrollReveal } from '../ui'

const PILLARS = [
  { title: 'Sistema', subtitle: 'No intuición' },
  { title: 'Estructura', subtitle: 'No improvisación' },
  { title: 'Criterio', subtitle: 'No tendencias' },
]

export function Differentiator() {
  return (
    <Section id="diferenciador" className="overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary/5 rounded-full blur-[120px] sm:blur-[150px]" />
      </div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-40 pointer-events-none" />

      <ScrollReveal className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-primary/30" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full" />
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-primary/30" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight">
          La diferencia no es estética.
        </h2>
        <p className="text-4xl sm:text-5xl md:text-6xl text-gradient-primary mb-8 sm:mb-12 leading-tight">
          Es criterio aplicado.
        </p>

        <div className="max-w-2xl mx-auto">
          <p className="text-base sm:text-lg text-white/50 leading-relaxed mb-12 sm:mb-16">
            Cada transición, cada corte, cada momento tiene intención. No editamos para que se vea bien. Editamos para que se perciba como debe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {PILLARS.map((item, i) => (
              <div
                key={i}
                className="relative bg-surface border border-primary/20 p-4 sm:p-6 hover:border-primary/40 transition-all group"
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-primary" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-primary" />
                <div className={`text-2xl sm:text-3xl mb-1 sm:mb-2 ${i === 2 ? 'text-white' : 'text-primary'}`}>
                  {item.title}
                </div>
                <div className="text-white/40 text-sm">{item.subtitle}</div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
