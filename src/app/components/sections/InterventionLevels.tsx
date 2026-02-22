import { Section, SectionBadge, BulletList, FeaturedBadge, InternalLink, ScrollReveal, SectionHeader, SurfaceCard } from '../ui'

const LEVELS = [
  {
    name: 'Esencial',
    subtitle: 'Fundación estructural',
    features: [
      'Limpieza de audio',
      'Corte de silencios',
      'Subtítulos básicos',
      'Corrección de color básica',
      'Zoom dinámico puntual',
      'Efectos de sonido específicos',
    ],
    featured: false,
  },
  {
    name: 'Estratégico',
    subtitle: 'Posicionamiento total',
    features: [
      'Motion graphics avanzados',
      'B-roll buscado y/o generado con IA',
      'Optimización estructural del mensaje',
      'Micro-ajustes narrativos intencionales',
      'Tratamiento visual diferencial en momentos clave',
    ],
    featured: true,
  },
  {
    name: 'Profesional',
    subtitle: 'Intervención estratégica',
    features: [
      'Subtítulos dinámicos',
      'Corrección de color avanzada',
      'Motion graphics en el hook',
      'B-roll proporcionado por el cliente',
      'Efectos de sonido estratégicos',
      'Zoom dinámico estructurado',
    ],
    featured: false,
  },
]

export function InterventionLevels() {
  return (
    <Section id="niveles" width="wide" className="bg-gradient-to-b from-background via-surface-alt/30 to-background">
      <ScrollReveal staggerChildren className="relative z-10">
        <SectionHeader
          badge={<SectionBadge>PROFUNDIDAD DE INTERVENCIÓN</SectionBadge>}
          title={<h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">Niveles de Intervención</h2>}
          description="No se trata de precio. Se trata de cuánto criterio aplicamos a tu contenido."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {LEVELS.map((level, index) => (
            <div key={index} className={`stagger-item relative group ${level.featured ? 'lg:scale-105' : ''}`}>
              {level.featured && <FeaturedBadge />}

              <SurfaceCard featured={level.featured} gradientTop padding="large">
                  <h3 className="text-2xl sm:text-3xl text-white mb-1 sm:mb-2">{level.name}</h3>
                  <p className="text-primary/60 text-sm mb-6 sm:mb-8">{level.subtitle}</p>
                  <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent mb-6 sm:mb-8" />
                  <BulletList items={level.features} className="mb-6 sm:mb-8" />
                  <InternalLink
                    to="contacto"
                    className="block w-full py-3 sm:py-4 text-center bg-primary/10 border border-primary/30 text-primary text-sm font-medium tracking-wide hover:bg-primary/20 transition-all"
                  >
                    Consultar disponibilidad
                  </InternalLink>
              </SurfaceCard>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  )
}
