import { useState } from 'react'
import { Section, SectionBadge, BulletList, FeaturedBadge, InternalLink, ScrollReveal, SectionHeader, SegmentedControl, SurfaceCard } from '../ui'

const PACKAGES = {
  '16': [
    { level: 'Esencial', price: '300', reels: '16', featured: false },
    { level: 'Estratégico', price: '780', reels: '16', featured: true },
    { level: 'Profesional', price: '540', reels: '16', featured: false },
  ],
  '12': [
    { level: 'Esencial', price: '230', reels: '12', featured: false },
    { level: 'Estratégico', price: '590', reels: '12', featured: true },
    { level: 'Profesional', price: '410', reels: '12', featured: false },
  ],
} as const

const INFO_ITEMS = [
  'Entrega programada según calendario acordado',
  'Optimización para Instagram, TikTok y YouTube Shorts',
]

export function MonthlyPackages() {
  const [selectedPlan, setSelectedPlan] = useState<'12' | '16'>('12')
  const packages = PACKAGES[selectedPlan]

  return (
    <Section
      id="planes"
      width="full"
      className="bg-gradient-to-b from-background via-surface-alt/20 to-background"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid-pattern-60 pointer-events-none" />

      <ScrollReveal staggerChildren className="relative z-10">
        <SectionHeader
          spacing="tight"
          badge={<SectionBadge>PLANES MENSUALES</SectionBadge>}
          title={<h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">Paquetes de Producción</h2>}
          description="Producción continua. Presencia sostenida. Posicionamiento estratégico."
        />

        <div className="flex justify-center mb-10 sm:mb-12">
          <SegmentedControl<'12' | '16'>
            options={[
              { value: '12', label: '12 Reels / Mes' },
              { value: '16', label: '16 Reels / Mes' },
            ]}
            value={selectedPlan}
            onChange={setSelectedPlan}
            ariaLabel="Cantidad de reels por mes"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {packages.map((pkg) => (
            <div
              key={`${selectedPlan}-${pkg.level}`}
              className={`stagger-item relative group ${pkg.featured ? 'lg:scale-105' : ''}`}
            >
              {pkg.featured && <FeaturedBadge />}

              <SurfaceCard featured={pkg.featured} gradientTop padding="large">
                <div className="text-center">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl text-white mb-2">Nivel {pkg.level}</h3>
                    <div className="h-px w-12 sm:w-16 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-start justify-center gap-1 mb-1 sm:mb-2">
                      <span className="text-primary/60 text-base sm:text-lg mt-1.5 sm:mt-2">
                        S/.
                      </span>
                      <span className="text-5xl sm:text-6xl text-white">{pkg.price}</span>
                    </div>
                    <div className="text-white/40 text-xs sm:text-sm">por mes</div>
                  </div>

                  <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-primary/5 border border-primary/20">
                    <div className="text-primary text-2xl sm:text-3xl mb-0.5 sm:mb-1">
                      {pkg.reels}
                    </div>
                    <div className="text-white/50 text-[10px] sm:text-xs tracking-wider">
                      REELS MENSUALES
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8 text-white/30 text-xs">
                    S/. {(parseInt(pkg.price, 10) / parseInt(pkg.reels, 10)).toFixed(2)} por reel
                  </div>

                  <InternalLink
                    to="contacto"
                    className="block w-full py-3 sm:py-4 bg-primary/10 border border-primary/30 text-primary text-sm font-medium tracking-wide hover:bg-primary/20 transition-all text-center"
                  >
                    Seleccionar Plan
                  </InternalLink>
                </div>
              </SurfaceCard>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-surface border border-primary/10 max-w-2xl">
            <BulletList
              items={INFO_ITEMS}
              spacing="tight"
              itemClassName="text-white/60 text-xs sm:text-sm"
            />
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
