import { Section, SectionBadge, InternalLink, ScrollReveal } from '../ui'

const LEVELS = [
  {
    name: 'Esencial',
    subtitle: 'Fundación estructural',
    description: 'Para marcas iniciando su presencia digital',
    features: [
      '1-2 servicios a elección',
      'Gestión básica de redes',
      'Creación de contenido mensual',
      'Reportes mensuales',
      '4-8 piezas de contenido',
    ],
    featured: false,
  },
  {
    name: 'Profesional',
    subtitle: 'Intervención estratégica',
    description: 'Para marcas en crecimiento sostenido',
    features: [
      '3-4 servicios integrados',
      'Estrategia de contenido completa',
      'Campañas publicitarias',
      'SEO y optimización',
      'Analytics avanzado',
      '8-16 piezas de contenido',
    ],
    featured: true,
  },
  {
    name: 'Estratégico',
    subtitle: 'Posicionamiento total',
    description: 'Para marcas líderes en su sector',
    features: [
      'Suite completa de servicios',
      'Estrategia digital integral',
      'Consultoría mensual',
      'Automatización avanzada',
      'Dashboard personalizado',
      'Equipo dedicado',
      '16-24 piezas de contenido',
    ],
    featured: false,
  },
]

export function InterventionLevels() {
  return (
    <Section id="niveles" width="wide" className="bg-gradient-to-b from-background via-surface-alt/30 to-background">
      <ScrollReveal staggerChildren className="relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <SectionBadge>PROFUNDIDAD DE INTERVENCIÓN</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">Niveles de Intervención</h2>
          <p className="text-white/40 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            No se trata de precio. Se trata de cuánto criterio aplicamos a tu contenido.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {LEVELS.map((level, index) => (
            <div key={index} className={`stagger-item relative group ${level.featured ? 'lg:scale-105' : ''}`}>
              {level.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-primary text-black text-xs tracking-wider px-4 sm:px-6 py-2">RECOMENDADO</div>
                </div>
              )}

              <div
                className={`relative bg-surface border ${level.featured ? 'border-primary/40' : 'border-primary/10'} p-6 sm:p-10 h-full hover:border-primary/40 transition-all`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl text-white mb-1 sm:mb-2">{level.name}</h3>
                  <p className="text-primary/60 text-sm mb-1 sm:mb-2">{level.subtitle}</p>
                  <p className="text-white/30 text-xs mb-6 sm:mb-8">{level.description}</p>
                  <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent mb-6 sm:mb-8" />
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {level.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary mt-2 flex-shrink-0 rounded-full" />
                        <span className="text-white/60 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <InternalLink
                    to="contacto"
                    className="block w-full py-3 sm:py-4 text-center bg-primary/10 border border-primary/30 text-primary text-sm font-medium tracking-wide hover:bg-primary/20 transition-all"
                  >
                    Consultar disponibilidad
                  </InternalLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}
