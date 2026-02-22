import { useState, useRef } from 'react'
import { Section, SectionBadge, CTAButton, PlayIcon, PhoneFrame, SegmentedControl, ScrollReveal } from '../ui'
import { EJEMPLOS_VIDEOS } from '../../lib/videos'

const LEVELS = [
  {
    name: 'Esencial',
    price: { PEN: 20, USD: 6 },
    gradient: 'from-primary/20 via-primary-dark/10 to-transparent',
  },
  {
    name: 'Profesional',
    price: { PEN: 35, USD: 10 },
    gradient: 'from-primary/20 via-primary-dark/10 to-transparent',
  },
  {
    name: 'Estratégico',
    price: { PEN: 50, USD: 14 },
    gradient: 'from-primary/20 via-primary-dark/10 to-transparent',
  },
]

function PhoneMockup({
  variant,
  videoSrc,
}: {
  variant: 'before' | 'after'
  videoSrc?: string
}) {
  const isAfter = variant === 'after'
  const hasVideo = Boolean(videoSrc)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMuted((m) => !m)
  }

  const placeholder = (
    <div
      className={`w-full h-full flex items-center justify-center ${
        isAfter
          ? 'bg-gradient-to-br from-primary/30 to-primary-dark/30'
          : 'bg-gradient-to-br from-white/5 to-white/10'
      }`}
    >
      <div className="text-center">
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 backdrop-blur-sm ${
            isAfter ? 'bg-white/30 border-2 border-white/50' : 'bg-white/20'
          }`}
        >
          <PlayIcon size="lg" variant="white" />
        </div>
        <div className={`text-xs ${isAfter ? 'text-white' : 'text-white/40'}`}>
          {hasVideo ? (isAfter ? 'Video editado' : 'Video original') : 'Sin video'}
        </div>
      </div>
    </div>
  )

  return (
    <PhoneFrame glow={isAfter}>
      {hasVideo ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            className="w-full h-full object-cover object-top"
            playsInline
            loop
            muted={muted}
            onEnded={() => setPlaying(false)}
            onClick={togglePlay}
          />
          {!playing && (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors"
              aria-label="Reproducir"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50">
                <PlayIcon size="md" variant="white" />
              </div>
            </button>
          )}
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-black/70 transition-colors z-10"
            aria-label={muted ? 'Activar sonido' : 'Silenciar'}
            title={muted ? 'Activar sonido' : 'Silenciar'}
          >
            {muted ? (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </>
      ) : (
        placeholder
      )}
    </PhoneFrame>
  )
}

export function VideoExamples() {
  const [currency, setCurrency] = useState<'PEN' | 'USD'>('PEN')

  return (
    <Section id="ejemplos" width="wide" className="overflow-hidden">
      <ScrollReveal staggerChildren className="relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <SectionBadge>EJEMPLOS DE EDICIÓN</SectionBadge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 mt-4 sm:mt-6">
            Ve la diferencia
            <br />
            <span className="text-gradient-primary">
              en cada nivel de intervención
            </span>
          </h2>
          <p className="text-white/40 mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base mb-6 sm:mb-8">
            Compara el antes y después de cada nivel de edición.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <span className="text-white/60 text-xs sm:text-sm">Precio por video individual:</span>
            <SegmentedControl<'PEN' | 'USD'>
              options={[
                { value: 'PEN', label: 'S/. Soles' },
                { value: 'USD', label: '$ Dólares' },
              ]}
              value={currency}
              onChange={setCurrency}
              ariaLabel="Cambiar moneda entre soles y dólares"
            />
          </div>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {LEVELS.map((level, index) => (
            <div key={level.name} className="stagger-item relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${level.gradient} rounded-lg blur-3xl opacity-80`}
                aria-hidden
              />
              <div className="relative bg-gradient-to-br from-surface-alt/60 to-background/60 border border-primary/10 rounded-lg p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                  <div className="flex-shrink-0">
                    <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-6">
                      <div className="relative bg-surface border-2 border-primary/30 px-5 sm:px-6 py-6 sm:py-8 lg:py-12 flex items-center justify-center lg:flex lg:justify-end rounded-lg">
                        <span className="text-white text-xl sm:text-2xl lg:text-3xl tracking-wider block lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] lg:inline-block lg:rotate-180">
                          Nivel {level.name}
                        </span>
                      </div>
                      <div className="bg-gradient-to-br from-primary to-primary-dark px-6 sm:px-8 py-4 sm:py-6 text-center min-w-[120px] sm:min-w-[140px]">
                        <div className="text-black/60 text-[10px] sm:text-xs mb-0.5 sm:mb-1 tracking-wider">
                          PRECIO
                        </div>
                        <div className="flex items-start justify-center gap-0.5 sm:gap-1">
                          <span className="text-black text-base sm:text-lg mt-1">
                            {currency === 'PEN' ? 'S/.' : '$'}
                          </span>
                          <span className="text-black text-3xl sm:text-4xl font-bold">
                            {level.price[currency]}
                          </span>
                        </div>
                        <div className="text-black/60 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                          por video
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-center justify-items-center">
                      <div className="text-center">
                        <div className="text-white/60 text-xs sm:text-sm tracking-[0.2em] mb-4 sm:mb-6">
                          ANTES
                        </div>
                        <PhoneMockup
                          variant="before"
                          videoSrc={EJEMPLOS_VIDEOS[level.name]?.before}
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-primary text-xs sm:text-sm tracking-[0.2em] mb-4 sm:mb-6">
                          DESPUÉS
                        </div>
                        <PhoneMockup
                          variant="after"
                          videoSrc={EJEMPLOS_VIDEOS[level.name]?.after}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-white/40 mb-4 sm:mb-6 text-sm sm:text-base">
            ¿Listo para ver tu contenido transformado?
          </p>
          <CTAButton to="contacto" variant="primary">
            Solicitar Ejemplo Personalizado
          </CTAButton>
        </div>
      </ScrollReveal>
    </Section>
  )
}
