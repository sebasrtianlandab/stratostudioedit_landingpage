import { Section, SectionBadge, CTAButton, ScrollReveal } from '../ui'

const SERVICES = [
  {
    icon: '01',
    title: 'Gestión de Redes Sociales',
    description: 'Presencia estratégica multiplataforma con contenido que construye autoridad sostenida.',
    tags: ['Instagram', 'LinkedIn', 'TikTok'],
  },
  {
    icon: '02',
    title: 'Creación de Contenido',
    description: 'Producción visual con criterio aplicado. Edición que comunica posicionamiento.',
    tags: ['Video', 'Diseño', 'Copy'],
  },
  {
    icon: '03',
    title: 'Publicidad en Línea',
    description: 'Campañas de rendimiento optimizadas para conversión y retorno medible.',
    tags: ['Google Ads', 'Meta Ads', 'TikTok Ads'],
  },
  {
    icon: '04',
    title: 'SEO',
    description: 'Optimización técnica y de contenido para visibilidad orgánica sostenible.',
    tags: ['On-page', 'Off-page', 'Técnico'],
  },
  {
    icon: '05',
    title: 'Email Marketing',
    description: 'Secuencias automatizadas que nutren relaciones y generan conversiones.',
    tags: ['Automation', 'Segmentación', 'A/B Testing'],
  },
  {
    icon: '06',
    title: 'Estrategia Digital',
    description: 'Arquitectura de marketing completa. Sistema integrado de posicionamiento.',
    tags: ['Consultoría', 'Planificación', 'Ejecución'],
  },
]

export function Services() {
  return (
    <Section id="servicios" width="wide">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-alt/10 to-background" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-50 pointer-events-none" />

      <ScrollReveal staggerChildren className="relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <SectionBadge>SERVICIOS</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight">
            Marketing digital
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              con enfoque estratégico
            </span>
          </h2>
          <p className="text-base sm:text-lg text-white/40 max-w-3xl mx-auto">
            Más allá de la edición. Un ecosistema completo de servicios diseñados para posicionamiento digital integral.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="stagger-item group relative bg-surface border border-primary/10 p-6 sm:p-8 hover:border-primary/30 transition-all"
            >
              <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary-dark/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs sm:text-sm">{service.icon}</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl text-white mb-2 sm:mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4 sm:mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-primary/60 px-2 sm:px-3 py-1 bg-primary/5 border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 w-full max-w-4xl mx-auto">
            <div className="flex-1 text-left">
              <h3 className="text-xl sm:text-2xl text-white mb-1 sm:mb-2">¿Necesitas un servicio específico?</h3>
              <p className="text-white/40 text-xs sm:text-sm">
                Cada servicio puede contratarse de forma independiente o como parte de una estrategia integral.
              </p>
            </div>
            <CTAButton to="contacto" variant="secondary">
              Consultar servicios
            </CTAButton>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
